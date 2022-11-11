import graphQLClient from "@lib/graphQLClient"
import getPreviewToken from "@utils/next/getPreviewToken"
import { GetStaticPropsContext } from "next"
import { getSdk, Sdk } from "@schema/graphql"

export default function createSdk(
	{ preview, previewData }: Partial<GetStaticPropsContext> = {},
	authorization?: string
): Sdk {
	const client = graphQLClient(
		getPreviewToken({ preview, previewData }),
		authorization
	)
	const sdk = getSdk(client)

	return sdk
}
