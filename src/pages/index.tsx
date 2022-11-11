import React from "react"
import { GetStaticProps } from "next"

import HeroHome, { TSlide } from "@components/cms/HeroHome"
import TextBlock from "@components/cms/TextBlock"
import TextGrid from "@components/cms/TextGrid"
import Banner from "@components/cms/Banner"
import Listing from "@components/cms/Listing"
import createSdk from "@utils/cms/createSdk"
import {
	BannerPanelFragment,
	HomeEntryFragment,
	TextGridPanelFragment,
	TextPanelFragment,
	ProductGridPanelFragment,
	ClientLogoFragment,
} from "@schema/graphql"
import parsePageProps from "@utils/cms/parsePageProps"
import ProductGrid from "@components/ProductGrid"
import { TTeaserItem } from "@schema/types"
import { ClientLogoStrip } from "@components/ClientLogoStrip"

interface Props {
	hero: TSlide[]
	panels: (
		| TextPanelFragment
		| TextGridPanelFragment
		| BannerPanelFragment
		| ProductGridPanelFragment
	)[]
	entries: TTeaserItem[]
	clients: ClientLogoFragment[]
}

export default function Home({ hero, panels, entries, clients }: Props) {
	return (
		<>
			<HeroHome slides={hero} />
			{panels.map((panel) => (
				<React.Fragment key={panel.id}>
					{(({ __typename, ...props }) => {
						switch (__typename) {
							case "panels_text_BlockType":
								return <TextBlock {...(props as TextPanelFragment)} />
							case "panels_textGrid_BlockType":
								return <TextGrid {...(props as TextGridPanelFragment)} />
							case "panels_banner_BlockType":
								return <Banner {...(props as BannerPanelFragment)} />
							case "panels_products_BlockType":
								return <ProductGrid {...(props as ProductGridPanelFragment)} />
							default:
								return null
						}
					})(panel)}
				</React.Fragment>
			))}
			<Listing entries={entries} />
			{!!clients?.length && <ClientLogoStrip clients={clients} />}
		</>
	)
}

export const getStaticProps: GetStaticProps = async ({
	preview,
	previewData,
}) => {
	const sdk = createSdk({ preview, previewData })

	const { entry, entries, clients } = await sdk.HomePageQuery()

	const entryNode = entry as HomeEntryFragment

	const { seo, hero, panels } = entryNode

	const slides = hero.map(({ text, heading }, id) => {
		const [start, end] = heading.split("\\")
		return {
			start,
			end,
			text,
			id,
		}
	})

	const props = await parsePageProps({
		seo,
		hideContactForm: entryNode.hideContactForm,
	})

	return {
		props: {
			...props,
			clients,
			hero: slides,
			panels,
			entries,
			theme: "home",
		},
		revalidate: 600,
	}
}
