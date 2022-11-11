import { GraphQLClient } from "graphql-request"

interface IHeaders {
	authorization: string
	[k: string]: any
}

export default function graphQLClient(
	previewToken?: string | null,
	authorization = `Bearer ${process.env.CRAFT_CMS_GRAPHQL_TOKEN}`
): GraphQLClient {
	const endpoints = process.env.CRAFT_CMS_GRAPHQL_ENDPOINT!
	const src = previewToken
		? `${endpoints}?x-craft-live-preview=${previewToken}`
		: endpoints

	const headers: IHeaders = {
		authorization,
	}

	if (previewToken) {
		headers["x-craft-token"] = previewToken
	}

	return new GraphQLClient(src, {
		headers,
	})
}
