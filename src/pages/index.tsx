import React from "react"
import { GetStaticProps } from "next"
import createSdk from "@utils/cms/createSdk"
import {
	HomeEntryFragment,
} from "@schema/graphql"


interface Props {
	entry: HomeEntryFragment
}

export default function Home({ entry }: Props) {
	return (
		<>
			<pre>{JSON.stringify(entry, null, 2)}</pre>
		</>
	)
}

export const getStaticProps: GetStaticProps = async ({
	preview,
	previewData,
}) => {
	const sdk = createSdk({ preview, previewData })
	const { entry } = await sdk.HomePageQuery()
	const entryNode = entry as HomeEntryFragment

	return {
		props: {
			entry: entryNode
		},
		revalidate: 600,
	}
}
