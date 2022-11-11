import { GraphQLClient } from "graphql-request"
import * as Dom from "graphql-request/dist/types.dom"
import gql from "graphql-tag"
export type Maybe<T> = T
export type InputMaybe<T> = T
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string
	String: string
	Boolean: boolean
	Int: number
	Float: number
	DateTime: any
	QueryArgument: any
}

export type AssetCriteriaInput = {
	/** Narrows the query results to only elements that have been archived. */
	archived: InputMaybe<Scalars["Boolean"]>
	/** Narrows the query results based on the elements’ creation dates. */
	dateCreated: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Narrows the query results based on the assets’ files’ last-modified dates. */
	dateModified: InputMaybe<Scalars["String"]>
	/** Narrows the query results based on the elements’ last-updated dates. */
	dateUpdated: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Narrows the query results based on the assets’ filenames. */
	filename: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Causes the query results to be returned in the order specified by the `id` argument. */
	fixedOrder: InputMaybe<Scalars["Boolean"]>
	/** Narrows the query results based on the folders the assets belong to, per the folders’ IDs. */
	folderId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results based on whether the assets have alternative text. */
	hasAlt: InputMaybe<Scalars["Boolean"]>
	/** Narrows the query results based on the assets’ image heights. */
	height: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Narrows the query results based on the elements’ IDs. */
	id: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Causes the query results to be returned in reverse order. */
	inReverse: InputMaybe<Scalars["Boolean"]>
	/** Broadens the query results to include assets from any of the subfolders of the folder specified by `folderId`. */
	includeSubfolders: InputMaybe<Scalars["Boolean"]>
	/** Narrows the query results based on the assets’ file kinds. */
	kind: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Sets the limit for paginated results. */
	limit: InputMaybe<Scalars["Int"]>
	/** Sets the offset for paginated results. */
	offset: InputMaybe<Scalars["Int"]>
	/** Sets the field the returned elements should be ordered by. */
	orderBy: InputMaybe<Scalars["String"]>
	/** Determines which site should be selected when querying multi-site elements. */
	preferSites: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results based on a reference string. */
	ref: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
	relatedTo: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
	relatedToAll: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results to elements that relate to an asset list defined with this argument. */
	relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
	/** Narrows the query results to elements that relate to a category list defined with this argument. */
	relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
	/** Narrows the query results to elements that relate to an entry list defined with this argument. */
	relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
	/** Narrows the query results to elements that relate to a tag list defined with this argument. */
	relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
	/** Narrows the query results to elements that relate to a use list defined with this argument. */
	relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
	/** Narrows the query results to only elements that match a search query. */
	search: InputMaybe<Scalars["String"]>
	/** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
	site: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
	siteId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results based on the unique identifier for an element-site relation. */
	siteSettingsId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results based on the assets’ file sizes (in bytes). */
	size: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Narrows the query results based on the elements’ slugs. */
	slug: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Narrows the query results based on the elements’ statuses. */
	status: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Narrows the query results based on the elements’ titles. */
	title: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Narrows the query results to only elements that have been soft-deleted. */
	trashed: InputMaybe<Scalars["Boolean"]>
	/** Narrows the query results based on the elements’ UIDs. */
	uid: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Determines whether only elements with unique IDs should be returned by the query. */
	unique: InputMaybe<Scalars["Boolean"]>
	/** Narrows the query results based on the user the assets were uploaded by, per the user’s ID. */
	uploader: InputMaybe<Scalars["QueryArgument"]>
	/** Narrows the query results based on the elements’ URIs. */
	uri: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Narrows the query results based on the volumes the assets belong to, per the volumes’ handles. */
	volume: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Narrows the query results based on the volumes the assets belong to, per the volumes’ IDs. */
	volumeId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results based on the assets’ image widths. */
	width: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** A list of transform handles to preload. */
	withTransforms: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
}

export type CategoryCriteriaInput = {
	/** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `ancestorOf`. */
	ancestorDist: InputMaybe<Scalars["Int"]>
	/** Narrows the query results to only elements that are ancestors of another element in its structure, provided by its ID. */
	ancestorOf: InputMaybe<Scalars["Int"]>
	/** Narrows the query results to only elements that have been archived. */
	archived: InputMaybe<Scalars["Boolean"]>
	/** Narrows the query results based on the elements’ creation dates. */
	dateCreated: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Narrows the query results based on the elements’ last-updated dates. */
	dateUpdated: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `descendantOf`. */
	descendantDist: InputMaybe<Scalars["Int"]>
	/** Narrows the query results to only elements that are descendants of another element in its structure provided by its ID. */
	descendantOf: InputMaybe<Scalars["Int"]>
	/** Whether to only return categories that the user has permission to edit. */
	editable: InputMaybe<Scalars["Boolean"]>
	/** Causes the query results to be returned in the order specified by the `id` argument. */
	fixedOrder: InputMaybe<Scalars["Boolean"]>
	/** Narrows the query results based on the category groups the categories belong to per the group’s handles. */
	group: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Narrows the query results based on the category groups the categories belong to, per the groups’ IDs. */
	groupId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results based on whether the elements have any descendants in their structure. */
	hasDescendants: InputMaybe<Scalars["Boolean"]>
	/** Narrows the query results based on the elements’ IDs. */
	id: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Causes the query results to be returned in reverse order. */
	inReverse: InputMaybe<Scalars["Boolean"]>
	/** Narrows the query results based on whether the elements are “leaves” in their structure (element with no descendants). */
	leaves: InputMaybe<Scalars["Boolean"]>
	/** Narrows the query results based on the elements’ level within the structure. */
	level: InputMaybe<Scalars["Int"]>
	/** Sets the limit for paginated results. */
	limit: InputMaybe<Scalars["Int"]>
	/** Narrows the query results to only the entry that comes immediately after another element in its structure, provided by its ID. */
	nextSiblingOf: InputMaybe<Scalars["Int"]>
	/** Sets the offset for paginated results. */
	offset: InputMaybe<Scalars["Int"]>
	/** Sets the field the returned elements should be ordered by. */
	orderBy: InputMaybe<Scalars["String"]>
	/** Narrows the query results to only entries that are positioned after another element in its structure, provided by its ID. */
	positionedAfter: InputMaybe<Scalars["Int"]>
	/** Narrows the query results to only entries that are positioned before another element in its structure, provided by its ID. */
	positionedBefore: InputMaybe<Scalars["Int"]>
	/** Determines which site should be selected when querying multi-site elements. */
	preferSites: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results to only the entry that comes immediately before another element in its structure, provided by its ID. */
	prevSiblingOf: InputMaybe<Scalars["Int"]>
	/** Narrows the query results based on a reference string. */
	ref: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
	relatedTo: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
	relatedToAll: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results to elements that relate to an asset list defined with this argument. */
	relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
	/** Narrows the query results to elements that relate to a category list defined with this argument. */
	relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
	/** Narrows the query results to elements that relate to an entry list defined with this argument. */
	relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
	/** Narrows the query results to elements that relate to a tag list defined with this argument. */
	relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
	/** Narrows the query results to elements that relate to a use list defined with this argument. */
	relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
	/** Narrows the query results to only elements that match a search query. */
	search: InputMaybe<Scalars["String"]>
	/** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
	site: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
	siteId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results based on the unique identifier for an element-site relation. */
	siteSettingsId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results based on the elements’ slugs. */
	slug: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Narrows the query results based on the elements’ statuses. */
	status: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Determines which structure data should be joined into the query. */
	structureId: InputMaybe<Scalars["Int"]>
	/** Narrows the query results based on the elements’ titles. */
	title: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Narrows the query results to only elements that have been soft-deleted. */
	trashed: InputMaybe<Scalars["Boolean"]>
	/** Narrows the query results based on the elements’ UIDs. */
	uid: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Determines whether only elements with unique IDs should be returned by the query. */
	unique: InputMaybe<Scalars["Boolean"]>
	/** Narrows the query results based on the elements’ URIs. */
	uri: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Explicitly determines whether the query should join in the structure data. */
	withStructure: InputMaybe<Scalars["Boolean"]>
}

export type EntryCriteriaInput = {
	additionalProtection: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results to only entries that were posted on or after a certain date. */
	after: InputMaybe<Scalars["String"]>
	/** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `ancestorOf`. */
	ancestorDist: InputMaybe<Scalars["Int"]>
	/** Narrows the query results to only elements that are ancestors of another element in its structure, provided by its ID. */
	ancestorOf: InputMaybe<Scalars["Int"]>
	/** Narrows the query results to only elements that have been archived. */
	archived: InputMaybe<Scalars["Boolean"]>
	asQuote: InputMaybe<Scalars["Boolean"]>
	/** Narrows the query results based on the user group the entries’ authors belong to. */
	authorGroup: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Narrows the query results based on the user group the entries’ authors belong to, per the groups’ IDs. */
	authorGroupId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results based on the entries’ authors. */
	authorId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results to only entries that were posted before a certain date. */
	before: InputMaybe<Scalars["String"]>
	blurb: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	bookingWidget: InputMaybe<Scalars["Boolean"]>
	button: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	category: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	clientImage: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	colour1: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	colour2: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	coverClaims: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results based on the elements’ creation dates. */
	dateCreated: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Narrows the query results based on the elements’ last-updated dates. */
	dateUpdated: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `descendantOf`. */
	descendantDist: InputMaybe<Scalars["Int"]>
	/** Narrows the query results to only elements that are descendants of another element in its structure provided by its ID. */
	descendantOf: InputMaybe<Scalars["Int"]>
	/** The drafts’ creator ID */
	draftCreator: InputMaybe<Scalars["Int"]>
	/** The ID of the draft to return (from the `drafts` table) */
	draftId: InputMaybe<Scalars["Int"]>
	/** Narrows the query results to only drafts of a given element.  Set to `false` to fetch unpublished drafts. */
	draftOf: InputMaybe<Scalars["QueryArgument"]>
	/** Whether draft elements should be returned. */
	drafts: InputMaybe<Scalars["Boolean"]>
	/** Whether to only return entries that the user has permission to edit. */
	editable: InputMaybe<Scalars["Boolean"]>
	expanded: InputMaybe<Scalars["Boolean"]>
	/** Narrows the query results based on the entries’ expiry dates. */
	expiryDate: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	featured: InputMaybe<Scalars["Boolean"]>
	/** Causes the query results to be returned in the order specified by the `id` argument. */
	fixedOrder: InputMaybe<Scalars["Boolean"]>
	/** Narrows the query results based on whether the elements have any descendants in their structure. */
	hasDescendants: InputMaybe<Scalars["Boolean"]>
	heading: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	hideContactForm: InputMaybe<Scalars["Boolean"]>
	icon: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results based on the elements’ IDs. */
	id: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	image: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Causes the query results to be returned in reverse order. */
	inReverse: InputMaybe<Scalars["Boolean"]>
	intro: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results based on whether the elements are “leaves” in their structure (element with no descendants). */
	leaves: InputMaybe<Scalars["Boolean"]>
	/** Narrows the query results based on the elements’ level within the structure. */
	level: InputMaybe<Scalars["Int"]>
	/** Sets the limit for paginated results. */
	limit: InputMaybe<Scalars["Int"]>
	needs: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results to only the entry that comes immediately after another element in its structure, provided by its ID. */
	nextSiblingOf: InputMaybe<Scalars["Int"]>
	/** Sets the offset for paginated results. */
	offset: InputMaybe<Scalars["Int"]>
	/** Sets the field the returned elements should be ordered by. */
	orderBy: InputMaybe<Scalars["String"]>
	/** Narrows the query results to only entries that are positioned after another element in its structure, provided by its ID. */
	positionedAfter: InputMaybe<Scalars["Int"]>
	/** Narrows the query results to only entries that are positioned before another element in its structure, provided by its ID. */
	positionedBefore: InputMaybe<Scalars["Int"]>
	/** Narrows the query results based on the entries’ post dates. */
	postDate: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Determines which site should be selected when querying multi-site elements. */
	preferSites: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results to only the entry that comes immediately before another element in its structure, provided by its ID. */
	prevSiblingOf: InputMaybe<Scalars["Int"]>
	productCategory: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Whether provisional drafts should be returned. */
	provisionalDrafts: InputMaybe<Scalars["Boolean"]>
	/** Narrows the query results based on a reference string. */
	ref: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	relatedInsights: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
	relatedTo: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
	relatedToAll: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results to elements that relate to an asset list defined with this argument. */
	relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
	/** Narrows the query results to elements that relate to a category list defined with this argument. */
	relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
	/** Narrows the query results to elements that relate to an entry list defined with this argument. */
	relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
	/** Narrows the query results to elements that relate to a tag list defined with this argument. */
	relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
	/** Narrows the query results to elements that relate to a use list defined with this argument. */
	relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
	/** The revisions’ creator ID */
	revisionCreator: InputMaybe<Scalars["Int"]>
	/** The ID of the revision to return (from the `revisions` table) */
	revisionId: InputMaybe<Scalars["Int"]>
	/** The source element ID that revisions should be returned for */
	revisionOf: InputMaybe<Scalars["QueryArgument"]>
	/** Whether revision elements should be returned. */
	revisions: InputMaybe<Scalars["Boolean"]>
	richText: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results to only elements that match a search query. */
	search: InputMaybe<Scalars["String"]>
	/** Narrows the query results based on the section handles the entries belong to. */
	section: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Narrows the query results based on the sections the entries belong to, per the sections’ IDs. */
	sectionId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	seo: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
	site: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
	siteId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results based on the unique identifier for an element-site relation. */
	siteSettingsId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results based on the elements’ slugs. */
	slug: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Narrows the query results based on the elements’ statuses. */
	status: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Determines which structure data should be joined into the query. */
	structureId: InputMaybe<Scalars["Int"]>
	text: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	theme: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	tip: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results based on the elements’ titles. */
	title: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Narrows the query results to only elements that have been soft-deleted. */
	trashed: InputMaybe<Scalars["Boolean"]>
	/** Narrows the query results based on the entries’ entry type handles. */
	type: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Narrows the query results based on the entries’ entry types, per the types’ IDs. */
	typeId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results based on the elements’ UIDs. */
	uid: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Determines whether only elements with unique IDs should be returned by the query. */
	unique: InputMaybe<Scalars["Boolean"]>
	/** Narrows the query results based on the elements’ URIs. */
	uri: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Explicitly determines whether the query should join in the structure data. */
	withStructure: InputMaybe<Scalars["Boolean"]>
}

/** Optional - The SEOmatic environment that should be used */
export enum SeomaticEnvironment {
	/** Live production environment, with indexing enabled */
	Live = "live",
	/** Local Development environment, with debugging enabled and indexing disabled */
	Local = "local",
	/** Staging environment, with indexing disabled */
	Staging = "staging",
}

export enum SeomaticFrontendTemplate {
	/** The ads.txt file */
	Ads = "ads",
	/** The humans.txt file */
	Humans = "humans",
	/** The robots.txt file */
	Robots = "robots",
	/** The security.txt file */
	Security = "security",
}

export type TagCriteriaInput = {
	/** Narrows the query results to only elements that have been archived. */
	archived: InputMaybe<Scalars["Boolean"]>
	/** Narrows the query results based on the elements’ creation dates. */
	dateCreated: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Narrows the query results based on the elements’ last-updated dates. */
	dateUpdated: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Causes the query results to be returned in the order specified by the `id` argument. */
	fixedOrder: InputMaybe<Scalars["Boolean"]>
	/** Narrows the query results based on the tag groups the tags belong to per the group’s handles. */
	group: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Narrows the query results based on the tag groups the tags belong to, per the groups’ IDs. */
	groupId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results based on the elements’ IDs. */
	id: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Causes the query results to be returned in reverse order. */
	inReverse: InputMaybe<Scalars["Boolean"]>
	/** Sets the limit for paginated results. */
	limit: InputMaybe<Scalars["Int"]>
	/** Sets the offset for paginated results. */
	offset: InputMaybe<Scalars["Int"]>
	/** Sets the field the returned elements should be ordered by. */
	orderBy: InputMaybe<Scalars["String"]>
	/** Determines which site should be selected when querying multi-site elements. */
	preferSites: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results based on a reference string. */
	ref: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
	relatedTo: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
	relatedToAll: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results to elements that relate to an asset list defined with this argument. */
	relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
	/** Narrows the query results to elements that relate to a category list defined with this argument. */
	relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
	/** Narrows the query results to elements that relate to an entry list defined with this argument. */
	relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
	/** Narrows the query results to elements that relate to a tag list defined with this argument. */
	relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
	/** Narrows the query results to elements that relate to a use list defined with this argument. */
	relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
	/** Narrows the query results to only elements that match a search query. */
	search: InputMaybe<Scalars["String"]>
	/** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
	site: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
	siteId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results based on the unique identifier for an element-site relation. */
	siteSettingsId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results based on the elements’ slugs. */
	slug: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Narrows the query results based on the elements’ statuses. */
	status: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Narrows the query results based on the elements’ titles. */
	title: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Narrows the query results to only elements that have been soft-deleted. */
	trashed: InputMaybe<Scalars["Boolean"]>
	/** Narrows the query results based on the elements’ UIDs. */
	uid: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Determines whether only elements with unique IDs should be returned by the query. */
	unique: InputMaybe<Scalars["Boolean"]>
	/** Narrows the query results based on the elements’ URIs. */
	uri: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
}

export type UserCriteriaInput = {
	/** Narrows the query results to only elements that have been archived. */
	archived: InputMaybe<Scalars["Boolean"]>
	/** Narrows the query results based on whether the users have uploaded any assets. */
	assetUploaders: InputMaybe<Scalars["Boolean"]>
	/** Narrows the query results based on whether the users are listed as the author of any entries. */
	authors: InputMaybe<Scalars["Boolean"]>
	/** Narrows the query results based on the elements’ creation dates. */
	dateCreated: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Narrows the query results based on the elements’ last-updated dates. */
	dateUpdated: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Narrows the query results based on the users’ email addresses. */
	email: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Narrows the query results based on the users’ first names. */
	firstName: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Causes the query results to be returned in the order specified by the `id` argument. */
	fixedOrder: InputMaybe<Scalars["Boolean"]>
	/** Narrows the query results based on the users’ full names. */
	fullName: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Narrows the query results based on the user group the users belong to. */
	group: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results based on the user group the users belong to, per the groups’ IDs. */
	groupId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results to only users that have (or don’t have) a user photo. */
	hasPhoto: InputMaybe<Scalars["Boolean"]>
	/** Narrows the query results based on the elements’ IDs. */
	id: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Causes the query results to be returned in reverse order. */
	inReverse: InputMaybe<Scalars["Boolean"]>
	/** Narrows the query results based on the users’ last names. */
	lastName: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Sets the limit for paginated results. */
	limit: InputMaybe<Scalars["Int"]>
	/** Sets the offset for paginated results. */
	offset: InputMaybe<Scalars["Int"]>
	/** Sets the field the returned elements should be ordered by. */
	orderBy: InputMaybe<Scalars["String"]>
	/** Determines which site should be selected when querying multi-site elements. */
	preferSites: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results based on a reference string. */
	ref: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
	relatedTo: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
	relatedToAll: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results to elements that relate to an asset list defined with this argument. */
	relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
	/** Narrows the query results to elements that relate to a category list defined with this argument. */
	relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
	/** Narrows the query results to elements that relate to an entry list defined with this argument. */
	relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
	/** Narrows the query results to elements that relate to a tag list defined with this argument. */
	relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
	/** Narrows the query results to elements that relate to a use list defined with this argument. */
	relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
	/** Narrows the query results to only elements that match a search query. */
	search: InputMaybe<Scalars["String"]>
	/** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
	site: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
	siteId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results based on the unique identifier for an element-site relation. */
	siteSettingsId: InputMaybe<Array<InputMaybe<Scalars["QueryArgument"]>>>
	/** Narrows the query results based on the elements’ slugs. */
	slug: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Narrows the query results based on the elements’ statuses. */
	status: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Narrows the query results based on the elements’ titles. */
	title: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Narrows the query results to only elements that have been soft-deleted. */
	trashed: InputMaybe<Scalars["Boolean"]>
	/** Narrows the query results based on the elements’ UIDs. */
	uid: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Determines whether only elements with unique IDs should be returned by the query. */
	unique: InputMaybe<Scalars["Boolean"]>
	/** Narrows the query results based on the elements’ URIs. */
	uri: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
	/** Narrows the query results based on the users’ usernames. */
	username: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
}

export type BlogPostQueryQueryVariables = Exact<{
	uri: InputMaybe<
		Array<InputMaybe<Scalars["String"]>> | InputMaybe<Scalars["String"]>
	>
}>

export type BlogPostQueryQuery = {
	entry:
		| ({
				hideContactForm: boolean
				status: string
				title: string
				colour1: string
				colour2: string
				richText: string
				seo: {
					metaTitleContainer: string
					metaTagContainer: string
					metaSiteVarsContainer: string
					metaLinkContainer: string
					metaJsonLdContainer: string
				} & { __typename: "SeomaticType" }
				theme: { color: Array<string> } & { __typename: "theme" }
				category: Array<
					| ({ title: string; id: string } & { __typename: "blog_Category" })
					| { __typename: "products_Category" }
				>
				next:
					| ({ title: string; uri: string } & { __typename: "blog_blog_Entry" })
					| {
							__typename:
								| "clients_default_Entry"
								| "faqs_default_Entry"
								| "home_home_Entry"
								| "listing_listing_Entry"
								| "ourClients_ourClients_Entry"
								| "pages_pages_Entry"
								| "partners_default_Entry"
								| "productDetails_default_Entry"
								| "products_products_Entry"
								| "quotes_default_Entry"
					  }
				prev:
					| ({ title: string; uri: string } & { __typename: "blog_blog_Entry" })
					| {
							__typename:
								| "clients_default_Entry"
								| "faqs_default_Entry"
								| "home_home_Entry"
								| "listing_listing_Entry"
								| "ourClients_ourClients_Entry"
								| "pages_pages_Entry"
								| "partners_default_Entry"
								| "productDetails_default_Entry"
								| "products_products_Entry"
								| "quotes_default_Entry"
					  }
				blocks: Array<
					| ({
							id: string
							asset: Array<
								{
									kind: string
									mimeType: string
									width: number
									height: number
									src: string
									alt: string
									embeddedAsset: {
										type: string
										providerName: string
										code: string
										url: string
										aspectRatio: number
										iframeSrc: string
										width: number
										height: number
									} & { __typename: "EmbeddedAsset" }
								} & {
									__typename:
										| "documents_Asset"
										| "embed_Asset"
										| "images_Asset"
										| "video_Asset"
								}
							>
					  } & { __typename: "blocks_asset_BlockType" })
					| ({ text: string; cite: string; id: string } & {
							__typename: "blocks_quote_BlockType"
					  })
					| ({ text: string; id: string } & {
							__typename: "blocks_text_BlockType"
					  })
				>
		  } & { __typename: "blog_blog_Entry" })
		| {
				__typename:
					| "clients_default_Entry"
					| "faqs_default_Entry"
					| "home_home_Entry"
					| "listing_listing_Entry"
					| "ourClients_ourClients_Entry"
					| "pages_pages_Entry"
					| "partners_default_Entry"
					| "productDetails_default_Entry"
					| "products_products_Entry"
					| "quotes_default_Entry"
		  }
} & { __typename: "Query" }

export type BlogSlugFragment = { slug: string } & {
	__typename: "blog_blog_Entry"
}

export type BlogListQueryQueryVariables = Exact<{ [key: string]: never }>

export type BlogListQueryQuery = {
	entries: Array<
		| ({ slug: string } & { __typename: "blog_blog_Entry" })
		| {
				__typename:
					| "clients_default_Entry"
					| "faqs_default_Entry"
					| "home_home_Entry"
					| "listing_listing_Entry"
					| "ourClients_ourClients_Entry"
					| "pages_pages_Entry"
					| "partners_default_Entry"
					| "productDetails_default_Entry"
					| "products_products_Entry"
					| "quotes_default_Entry"
		  }
	>
} & { __typename: "Query" }

export type ListingFragment = {
	heading: string
	richText: string
	seo: {
		metaTitleContainer: string
		metaTagContainer: string
		metaSiteVarsContainer: string
		metaLinkContainer: string
		metaJsonLdContainer: string
	} & { __typename: "SeomaticType" }
} & { __typename: "listing_listing_Entry" }

export type BlogListingQueryVariables = Exact<{
	offset: InputMaybe<Scalars["Int"]>
}>

export type BlogListingQuery = {
	count: number
	entry:
		| {
				__typename:
					| "blog_blog_Entry"
					| "clients_default_Entry"
					| "faqs_default_Entry"
					| "home_home_Entry"
					| "ourClients_ourClients_Entry"
					| "pages_pages_Entry"
					| "partners_default_Entry"
					| "productDetails_default_Entry"
					| "products_products_Entry"
					| "quotes_default_Entry"
		  }
		| ({
				heading: string
				richText: string
				seo: {
					metaTitleContainer: string
					metaTagContainer: string
					metaSiteVarsContainer: string
					metaLinkContainer: string
					metaJsonLdContainer: string
				} & { __typename: "SeomaticType" }
		  } & { __typename: "listing_listing_Entry" })
	posts: Array<
		{
			id: string
			uri: string
			title: string
			colour1: string
			colour2: string
			theme: { color: Array<string> } & { __typename: "theme" }
			image: Array<
				{ src: string; width: number; height: number; alt: string } & {
					__typename:
						| "documents_Asset"
						| "embed_Asset"
						| "images_Asset"
						| "video_Asset"
				}
			>
			category: Array<
				| ({ title: string; id: string } & { __typename: "blog_Category" })
				| { __typename: "products_Category" }
			>
		} & { __typename: "blog_blog_Entry" }
	>
} & { __typename: "Query" }

export type ErrorPageQueryVariables = Exact<{ [key: string]: never }>

export type ErrorPageQuery = {
	seomatic: {
		metaTitleContainer: string
		metaTagContainer: string
		metaSiteVarsContainer: string
		metaLinkContainer: string
		metaJsonLdContainer: string
	} & { __typename: "SeomaticType" }
} & { __typename: "Query" }

export type TextBlockFragment = { text: string; id: string } & {
	__typename: "blocks_text_BlockType"
}

export type EmbedFragment = {
	type: string
	providerName: string
	code: string
	url: string
	aspectRatio: number
	iframeSrc: string
	width: number
	height: number
} & { __typename: "EmbeddedAsset" }

export type AssetBlockFragment = {
	id: string
	asset: Array<
		{
			kind: string
			mimeType: string
			width: number
			height: number
			src: string
			alt: string
			embeddedAsset: {
				type: string
				providerName: string
				code: string
				url: string
				aspectRatio: number
				iframeSrc: string
				width: number
				height: number
			} & { __typename: "EmbeddedAsset" }
		} & {
			__typename:
				| "documents_Asset"
				| "embed_Asset"
				| "images_Asset"
				| "video_Asset"
		}
	>
} & { __typename: "blocks_asset_BlockType" }

export type QuoteBlockFragment = { text: string; cite: string; id: string } & {
	__typename: "blocks_quote_BlockType"
}

export type ButtonFragment = { text: string; target: string; href: string } & {
	__typename: "linkField_Link"
}

export type FieldAgreeFragment = {
	defaultState: boolean
	checkedValue: string
	uncheckedValue: string
	description: string
} & { __typename: "Field_Agree" }

export type FieldCheckboxesFragment = {
	defaultValue: string
	layout: string
	toggleCheckbox: string
	toggleCheckboxLabel: string
	options: Array<
		{ label: string; value: string } & { __typename: "FieldOption" }
	>
} & { __typename: "Field_Checkboxes" }

export type FieldDropDownFragment = {
	multi: boolean
	defaultValue: string
	options: Array<
		{ label: string; value: string } & { __typename: "FieldOption" }
	>
} & { __typename: "Field_Dropdown" }

export type FieldEmailFragment = { defaultValue: string } & {
	__typename: "Field_Email"
}

export type FieldHiddenFragment = {
	defaultValue: string
	defaultOption: string
	queryParameter: string
	cookieName: string
} & { __typename: "Field_Hidden" }

export type FieldMultiLineTextFragment = { defaultValue: string } & {
	__typename: "Field_MultiLineText"
}

export type FieldNumberFragment = { min: number; max: number } & {
	__typename: "Field_Number"
}

export type FieldPhoneFragment = {
	defaultValue: string
	countryEnabled: boolean
	countryDefaultValue: string
	countryShowDialCode: boolean
	countryOptions: Array<
		{ label: string; value: string } & { __typename: "FieldAttribute" }
	>
} & { __typename: "Field_Phone" }

export type FieldRadioFragment = {
	layout: string
	options: Array<
		{ label: string; value: string } & { __typename: "FieldOption" }
	>
} & { __typename: "Field_Radio" }

export type FieldSingleLineTextFragment = { defaultValue: string } & {
	__typename: "Field_SingleLineText"
}

type FieldFragment_Field_Agree_Fragment = {
	id: string
	name: string
	labelPosition: string
	handle: string
	instructions: string
	required: boolean
	type: string
	typeName: string
	inputTypeName: string
	placeholder: string
	errorMessage: string
	displayName: string
	defaultState: boolean
	checkedValue: string
	uncheckedValue: string
	description: string
	label: string
} & { __typename: "Field_Agree" }

type FieldFragment_VmJdXrlJq4KtAMeTe1bXhUd_2RJyWv2pnYqw0Cgh2Sg_Fragment = {
	id: string
	name: string
	labelPosition: string
	handle: string
	instructions: string
	required: boolean
	type: string
	typeName: string
	inputTypeName: string
	placeholder: string
	errorMessage: string
	displayName: string
	label: string
} & {
	__typename:
		| "Field_Calculations"
		| "Field_Date"
		| "Field_FileUpload"
		| "Field_Password"
		| "Field_Payment"
		| "Field_Signature"
		| "Field_Summary"
}

type FieldFragment_Field_Checkboxes_Fragment = {
	id: string
	name: string
	labelPosition: string
	handle: string
	instructions: string
	required: boolean
	type: string
	typeName: string
	inputTypeName: string
	placeholder: string
	errorMessage: string
	displayName: string
	defaultValue: string
	layout: string
	toggleCheckbox: string
	toggleCheckboxLabel: string
	label: string
	options: Array<
		{ label: string; value: string } & { __typename: "FieldOption" }
	>
} & { __typename: "Field_Checkboxes" }

type FieldFragment_Field_Dropdown_Fragment = {
	id: string
	name: string
	labelPosition: string
	handle: string
	instructions: string
	required: boolean
	type: string
	typeName: string
	inputTypeName: string
	placeholder: string
	errorMessage: string
	displayName: string
	multi: boolean
	defaultValue: string
	label: string
	options: Array<
		{ label: string; value: string } & { __typename: "FieldOption" }
	>
} & { __typename: "Field_Dropdown" }

type FieldFragment_Field_Email_Field_MultiLineText_Field_SingleLineText_Fragment =
	{
		id: string
		name: string
		labelPosition: string
		handle: string
		instructions: string
		required: boolean
		type: string
		typeName: string
		inputTypeName: string
		placeholder: string
		errorMessage: string
		displayName: string
		defaultValue: string
		label: string
	} & {
		__typename: "Field_Email" | "Field_MultiLineText" | "Field_SingleLineText"
	}

type FieldFragment_Field_Hidden_Fragment = {
	id: string
	name: string
	labelPosition: string
	handle: string
	instructions: string
	required: boolean
	type: string
	typeName: string
	inputTypeName: string
	placeholder: string
	errorMessage: string
	displayName: string
	defaultValue: string
	defaultOption: string
	queryParameter: string
	cookieName: string
	label: string
} & { __typename: "Field_Hidden" }

type FieldFragment_Field_Number_Fragment = {
	id: string
	name: string
	labelPosition: string
	handle: string
	instructions: string
	required: boolean
	type: string
	typeName: string
	inputTypeName: string
	placeholder: string
	errorMessage: string
	displayName: string
	min: number
	max: number
	label: string
} & { __typename: "Field_Number" }

type FieldFragment_Field_Phone_Fragment = {
	id: string
	name: string
	labelPosition: string
	handle: string
	instructions: string
	required: boolean
	type: string
	typeName: string
	inputTypeName: string
	placeholder: string
	errorMessage: string
	displayName: string
	defaultValue: string
	countryEnabled: boolean
	countryDefaultValue: string
	countryShowDialCode: boolean
	label: string
	countryOptions: Array<
		{ label: string; value: string } & { __typename: "FieldAttribute" }
	>
} & { __typename: "Field_Phone" }

type FieldFragment_Field_Radio_Fragment = {
	id: string
	name: string
	labelPosition: string
	handle: string
	instructions: string
	required: boolean
	type: string
	typeName: string
	inputTypeName: string
	placeholder: string
	errorMessage: string
	displayName: string
	layout: string
	label: string
	options: Array<
		{ label: string; value: string } & { __typename: "FieldOption" }
	>
} & { __typename: "Field_Radio" }

export type FieldFragmentFragment =
	| FieldFragment_Field_Agree_Fragment
	| FieldFragment_VmJdXrlJq4KtAMeTe1bXhUd_2RJyWv2pnYqw0Cgh2Sg_Fragment
	| FieldFragment_Field_Checkboxes_Fragment
	| FieldFragment_Field_Dropdown_Fragment
	| FieldFragment_Field_Email_Field_MultiLineText_Field_SingleLineText_Fragment
	| FieldFragment_Field_Hidden_Fragment
	| FieldFragment_Field_Number_Fragment
	| FieldFragment_Field_Phone_Fragment
	| FieldFragment_Field_Radio_Fragment

export type FormFragmentFragment = {
	id: string
	title: string
	handle: string
	siteId: number
	settings: { submitActionMessageHtml: string; errorMessageHtml: string } & {
		__typename: "FormSettingsType"
	}
	pages: Array<
		{
			name: string
			id: string
			settings: {
				submitButtonLabel: string
				backButtonLabel: string
				showBackButton: boolean
				buttonsPosition: string
			} & { __typename: "PageSettingsType" }
			rows: Array<
				{
					id: string
					rowFields: Array<
						| ({
								id: string
								name: string
								labelPosition: string
								handle: string
								instructions: string
								required: boolean
								type: string
								typeName: string
								inputTypeName: string
								placeholder: string
								errorMessage: string
								displayName: string
								defaultState: boolean
								checkedValue: string
								uncheckedValue: string
								description: string
								label: string
						  } & { __typename: "Field_Agree" })
						| ({
								id: string
								name: string
								labelPosition: string
								handle: string
								instructions: string
								required: boolean
								type: string
								typeName: string
								inputTypeName: string
								placeholder: string
								errorMessage: string
								displayName: string
								label: string
						  } & {
								__typename:
									| "Field_Calculations"
									| "Field_Date"
									| "Field_FileUpload"
									| "Field_Password"
									| "Field_Payment"
									| "Field_Signature"
									| "Field_Summary"
						  })
						| ({
								id: string
								name: string
								labelPosition: string
								handle: string
								instructions: string
								required: boolean
								type: string
								typeName: string
								inputTypeName: string
								placeholder: string
								errorMessage: string
								displayName: string
								defaultValue: string
								layout: string
								toggleCheckbox: string
								toggleCheckboxLabel: string
								label: string
								options: Array<
									{ label: string; value: string } & {
										__typename: "FieldOption"
									}
								>
						  } & { __typename: "Field_Checkboxes" })
						| ({
								id: string
								name: string
								labelPosition: string
								handle: string
								instructions: string
								required: boolean
								type: string
								typeName: string
								inputTypeName: string
								placeholder: string
								errorMessage: string
								displayName: string
								multi: boolean
								defaultValue: string
								label: string
								options: Array<
									{ label: string; value: string } & {
										__typename: "FieldOption"
									}
								>
						  } & { __typename: "Field_Dropdown" })
						| ({
								id: string
								name: string
								labelPosition: string
								handle: string
								instructions: string
								required: boolean
								type: string
								typeName: string
								inputTypeName: string
								placeholder: string
								errorMessage: string
								displayName: string
								defaultValue: string
								label: string
						  } & {
								__typename:
									| "Field_Email"
									| "Field_MultiLineText"
									| "Field_SingleLineText"
						  })
						| ({
								id: string
								name: string
								labelPosition: string
								handle: string
								instructions: string
								required: boolean
								type: string
								typeName: string
								inputTypeName: string
								placeholder: string
								errorMessage: string
								displayName: string
								defaultValue: string
								defaultOption: string
								queryParameter: string
								cookieName: string
								label: string
						  } & { __typename: "Field_Hidden" })
						| ({
								id: string
								name: string
								labelPosition: string
								handle: string
								instructions: string
								required: boolean
								type: string
								typeName: string
								inputTypeName: string
								placeholder: string
								errorMessage: string
								displayName: string
								min: number
								max: number
								label: string
						  } & { __typename: "Field_Number" })
						| ({
								id: string
								name: string
								labelPosition: string
								handle: string
								instructions: string
								required: boolean
								type: string
								typeName: string
								inputTypeName: string
								placeholder: string
								errorMessage: string
								displayName: string
								defaultValue: string
								countryEnabled: boolean
								countryDefaultValue: string
								countryShowDialCode: boolean
								label: string
								countryOptions: Array<
									{ label: string; value: string } & {
										__typename: "FieldAttribute"
									}
								>
						  } & { __typename: "Field_Phone" })
						| ({
								id: string
								name: string
								labelPosition: string
								handle: string
								instructions: string
								required: boolean
								type: string
								typeName: string
								inputTypeName: string
								placeholder: string
								errorMessage: string
								displayName: string
								layout: string
								label: string
								options: Array<
									{ label: string; value: string } & {
										__typename: "FieldOption"
									}
								>
						  } & { __typename: "Field_Radio" })
					>
				} & { __typename: "RowType" }
			>
		} & { __typename: "PageType" }
	>
} & { __typename: "contact_Form" }

export type HeroSlideFragment = {
	heading: string
	id: string
	text: string
} & { __typename: "slide_slide_BlockType" }

export type ProductHeroFragment = {
	id: string
	heading: string
	text: string
	image: Array<
		{ width: number; height: number; src: string; alt: string } & {
			__typename:
				| "documents_Asset"
				| "embed_Asset"
				| "images_Asset"
				| "video_Asset"
		}
	>
	button: { text: string; target: string; href: string } & {
		__typename: "linkField_Link"
	}
} & { __typename: "hero_BlockType" }

export type TextPanelFragment = {
	id: string
	text: string
	button: { text: string; target: string; href: string } & {
		__typename: "linkField_Link"
	}
} & { __typename: "panels_text_BlockType" }

export type TextGridColumnFragment = {
	id: string
	text: string
	heading: string
} & { __typename: "columns_BlockType" }

export type TextGridPanelFragment = {
	id: string
	heading: string
	text: string
	hash: string
	sectionLabel: string
	columns: Array<
		{ id: string; text: string; heading: string } & {
			__typename: "columns_BlockType"
		}
	>
} & { __typename: "panels_textGrid_BlockType" }

export type BannerImageFragment = {
	width: number
	height: number
	src: string
	alt: string
} & {
	__typename: "documents_Asset" | "embed_Asset" | "images_Asset" | "video_Asset"
}

export type BannerPanelFragment = {
	id: string
	heading: string
	text: string
	image: Array<
		{ width: number; height: number; src: string; alt: string } & {
			__typename:
				| "documents_Asset"
				| "embed_Asset"
				| "images_Asset"
				| "video_Asset"
		}
	>
	button: { text: string; target: string; href: string } & {
		__typename: "linkField_Link"
	}
	theme: { color: Array<string> } & { __typename: "theme" }
} & { __typename: "panels_banner_BlockType" }

export type IntroPanelFragment = {
	id: string
	text: string
	heading: string
	button: { text: string; target: string; href: string } & {
		__typename: "linkField_Link"
	}
	logo: Array<
		{ width: number; height: number; src: string; alt: string } & {
			__typename:
				| "documents_Asset"
				| "embed_Asset"
				| "images_Asset"
				| "video_Asset"
		}
	>
} & { __typename: "panels_intro_BlockType" }

export type IconGridItemFragment = {
	id: string
	heading: string
	text: string
	icon: { inline: string } & { __typename: "icon_Icon" }
	button: { text: string; target: string; href: string } & {
		__typename: "linkField_Link"
	}
} & { __typename: "items_BlockType" }

export type IconGridPanelFragment = {
	id: string
	heading: string
	theme: { color: Array<string> } & { __typename: "theme" }
	items: Array<
		{
			id: string
			heading: string
			text: string
			icon: { inline: string } & { __typename: "icon_Icon" }
			button: { text: string; target: string; href: string } & {
				__typename: "linkField_Link"
			}
		} & { __typename: "items_BlockType" }
	>
} & { __typename: "panels_iconGrid_BlockType" }

export type QuotePanelQuoteFragment = {
	id: string
	text: string
	richText: string
	image: Array<
		{ width: number; height: number; src: string; alt: string } & {
			__typename:
				| "documents_Asset"
				| "embed_Asset"
				| "images_Asset"
				| "video_Asset"
		}
	>
} & { __typename: "quotes_default_Entry" }

export type QuotePanelFragment = {
	id: string
	heading: string
	button: { text: string; target: string; href: string } & {
		__typename: "linkField_Link"
	}
	quote: Array<
		| {
				__typename:
					| "blog_blog_Entry"
					| "clients_default_Entry"
					| "faqs_default_Entry"
					| "home_home_Entry"
					| "listing_listing_Entry"
					| "ourClients_ourClients_Entry"
					| "pages_pages_Entry"
					| "partners_default_Entry"
					| "productDetails_default_Entry"
					| "products_products_Entry"
		  }
		| ({
				id: string
				text: string
				richText: string
				image: Array<
					{ width: number; height: number; src: string; alt: string } & {
						__typename:
							| "documents_Asset"
							| "embed_Asset"
							| "images_Asset"
							| "video_Asset"
					}
				>
		  } & { __typename: "quotes_default_Entry" })
	>
} & { __typename: "panels_quote_BlockType" }

export type LongFormPanelBlockFragment = {
	id: string
	text: string
	image: Array<
		{ width: number; height: number; src: string; alt: string } & {
			__typename:
				| "documents_Asset"
				| "embed_Asset"
				| "images_Asset"
				| "video_Asset"
		}
	>
	button: { text: string; target: string; href: string } & {
		__typename: "linkField_Link"
	}
} & { __typename: "blocks_BlockType" }

export type LongFormPanelFragment = {
	id: string
	heading: string
	blocks: Array<
		{
			id: string
			text: string
			image: Array<
				{ width: number; height: number; src: string; alt: string } & {
					__typename:
						| "documents_Asset"
						| "embed_Asset"
						| "images_Asset"
						| "video_Asset"
				}
			>
			button: { text: string; target: string; href: string } & {
				__typename: "linkField_Link"
			}
		} & { __typename: "blocks_BlockType" }
	>
} & { __typename: "panels_longForm_BlockType" }

export type FormPanelFragment = {
	id: string
	heading: string
	text: string
	sectionLabel: string
	form: Array<
		{
			id: string
			title: string
			handle: string
			siteId: number
			settings: {
				submitActionMessageHtml: string
				errorMessageHtml: string
			} & { __typename: "FormSettingsType" }
			pages: Array<
				{
					name: string
					id: string
					settings: {
						submitButtonLabel: string
						backButtonLabel: string
						showBackButton: boolean
						buttonsPosition: string
					} & { __typename: "PageSettingsType" }
					rows: Array<
						{
							id: string
							rowFields: Array<
								| ({
										id: string
										name: string
										labelPosition: string
										handle: string
										instructions: string
										required: boolean
										type: string
										typeName: string
										inputTypeName: string
										placeholder: string
										errorMessage: string
										displayName: string
										defaultState: boolean
										checkedValue: string
										uncheckedValue: string
										description: string
										label: string
								  } & { __typename: "Field_Agree" })
								| ({
										id: string
										name: string
										labelPosition: string
										handle: string
										instructions: string
										required: boolean
										type: string
										typeName: string
										inputTypeName: string
										placeholder: string
										errorMessage: string
										displayName: string
										label: string
								  } & {
										__typename:
											| "Field_Calculations"
											| "Field_Date"
											| "Field_FileUpload"
											| "Field_Password"
											| "Field_Payment"
											| "Field_Signature"
											| "Field_Summary"
								  })
								| ({
										id: string
										name: string
										labelPosition: string
										handle: string
										instructions: string
										required: boolean
										type: string
										typeName: string
										inputTypeName: string
										placeholder: string
										errorMessage: string
										displayName: string
										defaultValue: string
										layout: string
										toggleCheckbox: string
										toggleCheckboxLabel: string
										label: string
										options: Array<
											{ label: string; value: string } & {
												__typename: "FieldOption"
											}
										>
								  } & { __typename: "Field_Checkboxes" })
								| ({
										id: string
										name: string
										labelPosition: string
										handle: string
										instructions: string
										required: boolean
										type: string
										typeName: string
										inputTypeName: string
										placeholder: string
										errorMessage: string
										displayName: string
										multi: boolean
										defaultValue: string
										label: string
										options: Array<
											{ label: string; value: string } & {
												__typename: "FieldOption"
											}
										>
								  } & { __typename: "Field_Dropdown" })
								| ({
										id: string
										name: string
										labelPosition: string
										handle: string
										instructions: string
										required: boolean
										type: string
										typeName: string
										inputTypeName: string
										placeholder: string
										errorMessage: string
										displayName: string
										defaultValue: string
										label: string
								  } & {
										__typename:
											| "Field_Email"
											| "Field_MultiLineText"
											| "Field_SingleLineText"
								  })
								| ({
										id: string
										name: string
										labelPosition: string
										handle: string
										instructions: string
										required: boolean
										type: string
										typeName: string
										inputTypeName: string
										placeholder: string
										errorMessage: string
										displayName: string
										defaultValue: string
										defaultOption: string
										queryParameter: string
										cookieName: string
										label: string
								  } & { __typename: "Field_Hidden" })
								| ({
										id: string
										name: string
										labelPosition: string
										handle: string
										instructions: string
										required: boolean
										type: string
										typeName: string
										inputTypeName: string
										placeholder: string
										errorMessage: string
										displayName: string
										min: number
										max: number
										label: string
								  } & { __typename: "Field_Number" })
								| ({
										id: string
										name: string
										labelPosition: string
										handle: string
										instructions: string
										required: boolean
										type: string
										typeName: string
										inputTypeName: string
										placeholder: string
										errorMessage: string
										displayName: string
										defaultValue: string
										countryEnabled: boolean
										countryDefaultValue: string
										countryShowDialCode: boolean
										label: string
										countryOptions: Array<
											{ label: string; value: string } & {
												__typename: "FieldAttribute"
											}
										>
								  } & { __typename: "Field_Phone" })
								| ({
										id: string
										name: string
										labelPosition: string
										handle: string
										instructions: string
										required: boolean
										type: string
										typeName: string
										inputTypeName: string
										placeholder: string
										errorMessage: string
										displayName: string
										layout: string
										label: string
										options: Array<
											{ label: string; value: string } & {
												__typename: "FieldOption"
											}
										>
								  } & { __typename: "Field_Radio" })
							>
						} & { __typename: "RowType" }
					>
				} & { __typename: "PageType" }
			>
		} & { __typename: "contact_Form" }
	>
} & { __typename: "panels_form_BlockType" }

export type ProductPanelFragment = {
	id: string
	product: Array<
		| {
				__typename:
					| "blog_blog_Entry"
					| "clients_default_Entry"
					| "faqs_default_Entry"
					| "home_home_Entry"
					| "listing_listing_Entry"
					| "ourClients_ourClients_Entry"
					| "pages_pages_Entry"
					| "partners_default_Entry"
					| "products_products_Entry"
					| "quotes_default_Entry"
		  }
		| ({
				coverClaims: string
				additionalProtection: string
				tip: string
				needs: string
				slug: string
				id: string
				title: string
				blurb: string
				uri: string
				expanded: boolean
				icon: { inline: string } & { __typename: "icon_Icon" }
		  } & { __typename: "productDetails_default_Entry" })
	>
} & { __typename: "panels_product_BlockType" }

export type CollectionFragment = {
	heading: string
	id: string
	text: string
	products: Array<
		| {
				__typename:
					| "blog_blog_Entry"
					| "clients_default_Entry"
					| "faqs_default_Entry"
					| "home_home_Entry"
					| "listing_listing_Entry"
					| "ourClients_ourClients_Entry"
					| "pages_pages_Entry"
					| "partners_default_Entry"
					| "products_products_Entry"
					| "quotes_default_Entry"
		  }
		| ({
				slug: string
				id: string
				title: string
				blurb: string
				uri: string
				expanded: boolean
				icon: { inline: string } & { __typename: "icon_Icon" }
		  } & { __typename: "productDetails_default_Entry" })
	>
} & { __typename: "collection_BlockType" }

export type ProductGridPanelFragment = {
	id: string
	sectionLabel: string
	collection: Array<
		{
			heading: string
			id: string
			text: string
			products: Array<
				| {
						__typename:
							| "blog_blog_Entry"
							| "clients_default_Entry"
							| "faqs_default_Entry"
							| "home_home_Entry"
							| "listing_listing_Entry"
							| "ourClients_ourClients_Entry"
							| "pages_pages_Entry"
							| "partners_default_Entry"
							| "products_products_Entry"
							| "quotes_default_Entry"
				  }
				| ({
						slug: string
						id: string
						title: string
						blurb: string
						uri: string
						expanded: boolean
						icon: { inline: string } & { __typename: "icon_Icon" }
				  } & { __typename: "productDetails_default_Entry" })
			>
		} & { __typename: "collection_BlockType" }
	>
} & { __typename: "panels_products_BlockType" }

export type PostThumbImageFragment = {
	src: string
	width: number
	height: number
	alt: string
} & {
	__typename: "documents_Asset" | "embed_Asset" | "images_Asset" | "video_Asset"
}

export type PostThumbCategoryFragment = { id: string; title: string } & {
	__typename: "blog_Category"
}

export type PostThumbFragment = {
	id: string
	uri: string
	title: string
	colour1: string
	colour2: string
	image: Array<
		{ src: string; width: number; height: number; alt: string } & {
			__typename:
				| "documents_Asset"
				| "embed_Asset"
				| "images_Asset"
				| "video_Asset"
		}
	>
	category: Array<
		| ({ id: string; title: string } & { __typename: "blog_Category" })
		| { __typename: "products_Category" }
	>
} & { __typename: "blog_blog_Entry" }

export type BlogCategoryFragment = { title: string; id: string } & {
	__typename: "blog_Category"
}

export type BlogPagerFragment = { title: string; uri: string } & {
	__typename: "blog_blog_Entry"
}

export type BlogEntryFragment = {
	hideContactForm: boolean
	status: string
	title: string
	colour1: string
	colour2: string
	richText: string
	seo: {
		metaTitleContainer: string
		metaTagContainer: string
		metaSiteVarsContainer: string
		metaLinkContainer: string
		metaJsonLdContainer: string
	} & { __typename: "SeomaticType" }
	theme: { color: Array<string> } & { __typename: "theme" }
	category: Array<
		| ({ title: string; id: string } & { __typename: "blog_Category" })
		| { __typename: "products_Category" }
	>
	next:
		| ({ title: string; uri: string } & { __typename: "blog_blog_Entry" })
		| {
				__typename:
					| "clients_default_Entry"
					| "faqs_default_Entry"
					| "home_home_Entry"
					| "listing_listing_Entry"
					| "ourClients_ourClients_Entry"
					| "pages_pages_Entry"
					| "partners_default_Entry"
					| "productDetails_default_Entry"
					| "products_products_Entry"
					| "quotes_default_Entry"
		  }
	prev:
		| ({ title: string; uri: string } & { __typename: "blog_blog_Entry" })
		| {
				__typename:
					| "clients_default_Entry"
					| "faqs_default_Entry"
					| "home_home_Entry"
					| "listing_listing_Entry"
					| "ourClients_ourClients_Entry"
					| "pages_pages_Entry"
					| "partners_default_Entry"
					| "productDetails_default_Entry"
					| "products_products_Entry"
					| "quotes_default_Entry"
		  }
	blocks: Array<
		| ({
				id: string
				asset: Array<
					{
						kind: string
						mimeType: string
						width: number
						height: number
						src: string
						alt: string
						embeddedAsset: {
							type: string
							providerName: string
							code: string
							url: string
							aspectRatio: number
							iframeSrc: string
							width: number
							height: number
						} & { __typename: "EmbeddedAsset" }
					} & {
						__typename:
							| "documents_Asset"
							| "embed_Asset"
							| "images_Asset"
							| "video_Asset"
					}
				>
		  } & { __typename: "blocks_asset_BlockType" })
		| ({ text: string; cite: string; id: string } & {
				__typename: "blocks_quote_BlockType"
		  })
		| ({ text: string; id: string } & { __typename: "blocks_text_BlockType" })
	>
} & { __typename: "blog_blog_Entry" }

export type ThemeFragment = { color: Array<string> } & { __typename: "theme" }

export type TeaserFragment = {
	id: string
	uri: string
	title: string
	colour1: string
	colour2: string
	theme: { color: Array<string> } & { __typename: "theme" }
	image: Array<
		{ src: string; width: number; height: number; alt: string } & {
			__typename:
				| "documents_Asset"
				| "embed_Asset"
				| "images_Asset"
				| "video_Asset"
		}
	>
	category: Array<
		| ({ title: string; id: string } & { __typename: "blog_Category" })
		| { __typename: "products_Category" }
	>
} & { __typename: "blog_blog_Entry" }

export type ProductTeaserFragment = {
	slug: string
	id: string
	title: string
	blurb: string
	uri: string
	expanded: boolean
	icon: { inline: string } & { __typename: "icon_Icon" }
} & { __typename: "productDetails_default_Entry" }

export type ProductSummaryFragment = {
	coverClaims: string
	additionalProtection: string
	tip: string
	needs: string
	slug: string
	id: string
	title: string
	blurb: string
	uri: string
	expanded: boolean
	icon: { inline: string } & { __typename: "icon_Icon" }
} & { __typename: "productDetails_default_Entry" }

export type SeoFragment = {
	metaTitleContainer: string
	metaTagContainer: string
	metaSiteVarsContainer: string
	metaLinkContainer: string
	metaJsonLdContainer: string
} & { __typename: "SeomaticType" }

export type GlobalLegalFragment = { text: string } & {
	__typename: "legal_GlobalSet"
}

export type GlobalSocialFragment = {
	linkedin: string
	instagram: string
	twitter: string
} & { __typename: "social_GlobalSet" }

export type FooterFragment = {
	id: string
	email: string
	telephone: string
	address: string
	heading: string
	richText: string
	form: Array<
		{
			id: string
			title: string
			handle: string
			siteId: number
			settings: {
				submitActionMessageHtml: string
				errorMessageHtml: string
			} & { __typename: "FormSettingsType" }
			pages: Array<
				{
					name: string
					id: string
					settings: {
						submitButtonLabel: string
						backButtonLabel: string
						showBackButton: boolean
						buttonsPosition: string
					} & { __typename: "PageSettingsType" }
					rows: Array<
						{
							id: string
							rowFields: Array<
								| ({
										id: string
										name: string
										labelPosition: string
										handle: string
										instructions: string
										required: boolean
										type: string
										typeName: string
										inputTypeName: string
										placeholder: string
										errorMessage: string
										displayName: string
										defaultState: boolean
										checkedValue: string
										uncheckedValue: string
										description: string
										label: string
								  } & { __typename: "Field_Agree" })
								| ({
										id: string
										name: string
										labelPosition: string
										handle: string
										instructions: string
										required: boolean
										type: string
										typeName: string
										inputTypeName: string
										placeholder: string
										errorMessage: string
										displayName: string
										label: string
								  } & {
										__typename:
											| "Field_Calculations"
											| "Field_Date"
											| "Field_FileUpload"
											| "Field_Password"
											| "Field_Payment"
											| "Field_Signature"
											| "Field_Summary"
								  })
								| ({
										id: string
										name: string
										labelPosition: string
										handle: string
										instructions: string
										required: boolean
										type: string
										typeName: string
										inputTypeName: string
										placeholder: string
										errorMessage: string
										displayName: string
										defaultValue: string
										layout: string
										toggleCheckbox: string
										toggleCheckboxLabel: string
										label: string
										options: Array<
											{ label: string; value: string } & {
												__typename: "FieldOption"
											}
										>
								  } & { __typename: "Field_Checkboxes" })
								| ({
										id: string
										name: string
										labelPosition: string
										handle: string
										instructions: string
										required: boolean
										type: string
										typeName: string
										inputTypeName: string
										placeholder: string
										errorMessage: string
										displayName: string
										multi: boolean
										defaultValue: string
										label: string
										options: Array<
											{ label: string; value: string } & {
												__typename: "FieldOption"
											}
										>
								  } & { __typename: "Field_Dropdown" })
								| ({
										id: string
										name: string
										labelPosition: string
										handle: string
										instructions: string
										required: boolean
										type: string
										typeName: string
										inputTypeName: string
										placeholder: string
										errorMessage: string
										displayName: string
										defaultValue: string
										label: string
								  } & {
										__typename:
											| "Field_Email"
											| "Field_MultiLineText"
											| "Field_SingleLineText"
								  })
								| ({
										id: string
										name: string
										labelPosition: string
										handle: string
										instructions: string
										required: boolean
										type: string
										typeName: string
										inputTypeName: string
										placeholder: string
										errorMessage: string
										displayName: string
										defaultValue: string
										defaultOption: string
										queryParameter: string
										cookieName: string
										label: string
								  } & { __typename: "Field_Hidden" })
								| ({
										id: string
										name: string
										labelPosition: string
										handle: string
										instructions: string
										required: boolean
										type: string
										typeName: string
										inputTypeName: string
										placeholder: string
										errorMessage: string
										displayName: string
										min: number
										max: number
										label: string
								  } & { __typename: "Field_Number" })
								| ({
										id: string
										name: string
										labelPosition: string
										handle: string
										instructions: string
										required: boolean
										type: string
										typeName: string
										inputTypeName: string
										placeholder: string
										errorMessage: string
										displayName: string
										defaultValue: string
										countryEnabled: boolean
										countryDefaultValue: string
										countryShowDialCode: boolean
										label: string
										countryOptions: Array<
											{ label: string; value: string } & {
												__typename: "FieldAttribute"
											}
										>
								  } & { __typename: "Field_Phone" })
								| ({
										id: string
										name: string
										labelPosition: string
										handle: string
										instructions: string
										required: boolean
										type: string
										typeName: string
										inputTypeName: string
										placeholder: string
										errorMessage: string
										displayName: string
										layout: string
										label: string
										options: Array<
											{ label: string; value: string } & {
												__typename: "FieldOption"
											}
										>
								  } & { __typename: "Field_Radio" })
							>
						} & { __typename: "RowType" }
					>
				} & { __typename: "PageType" }
			>
		} & { __typename: "contact_Form" }
	>
} & { __typename: "contact_GlobalSet" }

export type MainMenuNodeFragment = {
	id: string
	title: string
	buttonStyle: string
	href: string
} & { __typename: "mainMenu_Node" }

export type FooterMenuNodeFragment = {
	id: string
	title: string
	href: string
} & { __typename: "footerMenu_Node" }

export type GlobalDataQueryVariables = Exact<{ [key: string]: never }>

export type GlobalDataQuery = {
	contact:
		| ({
				id: string
				email: string
				telephone: string
				address: string
				heading: string
				richText: string
				form: Array<
					{
						id: string
						title: string
						handle: string
						siteId: number
						settings: {
							submitActionMessageHtml: string
							errorMessageHtml: string
						} & { __typename: "FormSettingsType" }
						pages: Array<
							{
								name: string
								id: string
								settings: {
									submitButtonLabel: string
									backButtonLabel: string
									showBackButton: boolean
									buttonsPosition: string
								} & { __typename: "PageSettingsType" }
								rows: Array<
									{
										id: string
										rowFields: Array<
											| ({
													id: string
													name: string
													labelPosition: string
													handle: string
													instructions: string
													required: boolean
													type: string
													typeName: string
													inputTypeName: string
													placeholder: string
													errorMessage: string
													displayName: string
													defaultState: boolean
													checkedValue: string
													uncheckedValue: string
													description: string
													label: string
											  } & { __typename: "Field_Agree" })
											| ({
													id: string
													name: string
													labelPosition: string
													handle: string
													instructions: string
													required: boolean
													type: string
													typeName: string
													inputTypeName: string
													placeholder: string
													errorMessage: string
													displayName: string
													label: string
											  } & {
													__typename:
														| "Field_Calculations"
														| "Field_Date"
														| "Field_FileUpload"
														| "Field_Password"
														| "Field_Payment"
														| "Field_Signature"
														| "Field_Summary"
											  })
											| ({
													id: string
													name: string
													labelPosition: string
													handle: string
													instructions: string
													required: boolean
													type: string
													typeName: string
													inputTypeName: string
													placeholder: string
													errorMessage: string
													displayName: string
													defaultValue: string
													layout: string
													toggleCheckbox: string
													toggleCheckboxLabel: string
													label: string
													options: Array<
														{ label: string; value: string } & {
															__typename: "FieldOption"
														}
													>
											  } & { __typename: "Field_Checkboxes" })
											| ({
													id: string
													name: string
													labelPosition: string
													handle: string
													instructions: string
													required: boolean
													type: string
													typeName: string
													inputTypeName: string
													placeholder: string
													errorMessage: string
													displayName: string
													multi: boolean
													defaultValue: string
													label: string
													options: Array<
														{ label: string; value: string } & {
															__typename: "FieldOption"
														}
													>
											  } & { __typename: "Field_Dropdown" })
											| ({
													id: string
													name: string
													labelPosition: string
													handle: string
													instructions: string
													required: boolean
													type: string
													typeName: string
													inputTypeName: string
													placeholder: string
													errorMessage: string
													displayName: string
													defaultValue: string
													label: string
											  } & {
													__typename:
														| "Field_Email"
														| "Field_MultiLineText"
														| "Field_SingleLineText"
											  })
											| ({
													id: string
													name: string
													labelPosition: string
													handle: string
													instructions: string
													required: boolean
													type: string
													typeName: string
													inputTypeName: string
													placeholder: string
													errorMessage: string
													displayName: string
													defaultValue: string
													defaultOption: string
													queryParameter: string
													cookieName: string
													label: string
											  } & { __typename: "Field_Hidden" })
											| ({
													id: string
													name: string
													labelPosition: string
													handle: string
													instructions: string
													required: boolean
													type: string
													typeName: string
													inputTypeName: string
													placeholder: string
													errorMessage: string
													displayName: string
													min: number
													max: number
													label: string
											  } & { __typename: "Field_Number" })
											| ({
													id: string
													name: string
													labelPosition: string
													handle: string
													instructions: string
													required: boolean
													type: string
													typeName: string
													inputTypeName: string
													placeholder: string
													errorMessage: string
													displayName: string
													defaultValue: string
													countryEnabled: boolean
													countryDefaultValue: string
													countryShowDialCode: boolean
													label: string
													countryOptions: Array<
														{ label: string; value: string } & {
															__typename: "FieldAttribute"
														}
													>
											  } & { __typename: "Field_Phone" })
											| ({
													id: string
													name: string
													labelPosition: string
													handle: string
													instructions: string
													required: boolean
													type: string
													typeName: string
													inputTypeName: string
													placeholder: string
													errorMessage: string
													displayName: string
													layout: string
													label: string
													options: Array<
														{ label: string; value: string } & {
															__typename: "FieldOption"
														}
													>
											  } & { __typename: "Field_Radio" })
										>
									} & { __typename: "RowType" }
								>
							} & { __typename: "PageType" }
						>
					} & { __typename: "contact_Form" }
				>
		  } & { __typename: "contact_GlobalSet" })
		| { __typename: "legal_GlobalSet" | "social_GlobalSet" }
	legal:
		| { __typename: "contact_GlobalSet" | "social_GlobalSet" }
		| ({ text: string } & { __typename: "legal_GlobalSet" })
	social:
		| { __typename: "contact_GlobalSet" | "legal_GlobalSet" }
		| ({ linkedin: string; instagram: string; twitter: string } & {
				__typename: "social_GlobalSet"
		  })
	mainMenu: Array<
		| { __typename: "footerMenu_Node" }
		| ({ id: string; title: string; buttonStyle: string; href: string } & {
				__typename: "mainMenu_Node"
		  })
	>
	footerMenu: Array<
		| ({ id: string; title: string; href: string } & {
				__typename: "footerMenu_Node"
		  })
		| { __typename: "mainMenu_Node" }
	>
} & { __typename: "Query" }

export type HomeEntryFragment = {
	hideContactForm: boolean
	hero: Array<
		{ heading: string; id: string; text: string } & {
			__typename: "slide_slide_BlockType"
		}
	>
	panels: Array<
		| ({
				id: string
				heading: string
				text: string
				image: Array<
					{ width: number; height: number; src: string; alt: string } & {
						__typename:
							| "documents_Asset"
							| "embed_Asset"
							| "images_Asset"
							| "video_Asset"
					}
				>
				button: { text: string; target: string; href: string } & {
					__typename: "linkField_Link"
				}
				theme: { color: Array<string> } & { __typename: "theme" }
		  } & { __typename: "panels_banner_BlockType" })
		| {
				__typename:
					| "panels_form_BlockType"
					| "panels_iconGrid_BlockType"
					| "panels_intro_BlockType"
					| "panels_longForm_BlockType"
					| "panels_product_BlockType"
					| "panels_quote_BlockType"
		  }
		| ({
				id: string
				sectionLabel: string
				collection: Array<
					{
						heading: string
						id: string
						text: string
						products: Array<
							| {
									__typename:
										| "blog_blog_Entry"
										| "clients_default_Entry"
										| "faqs_default_Entry"
										| "home_home_Entry"
										| "listing_listing_Entry"
										| "ourClients_ourClients_Entry"
										| "pages_pages_Entry"
										| "partners_default_Entry"
										| "products_products_Entry"
										| "quotes_default_Entry"
							  }
							| ({
									slug: string
									id: string
									title: string
									blurb: string
									uri: string
									expanded: boolean
									icon: { inline: string } & { __typename: "icon_Icon" }
							  } & { __typename: "productDetails_default_Entry" })
						>
					} & { __typename: "collection_BlockType" }
				>
		  } & { __typename: "panels_products_BlockType" })
		| ({
				id: string
				heading: string
				text: string
				hash: string
				sectionLabel: string
				columns: Array<
					{ id: string; text: string; heading: string } & {
						__typename: "columns_BlockType"
					}
				>
		  } & { __typename: "panels_textGrid_BlockType" })
		| ({
				id: string
				text: string
				button: { text: string; target: string; href: string } & {
					__typename: "linkField_Link"
				}
		  } & { __typename: "panels_text_BlockType" })
	>
	seo: {
		metaTitleContainer: string
		metaTagContainer: string
		metaSiteVarsContainer: string
		metaLinkContainer: string
		metaJsonLdContainer: string
	} & { __typename: "SeomaticType" }
} & { __typename: "home_home_Entry" }

export type ClientLogoFragment = {
	id: string
	image: Array<
		{ width: number; height: number; src: string; alt: string } & {
			__typename:
				| "documents_Asset"
				| "embed_Asset"
				| "images_Asset"
				| "video_Asset"
		}
	>
	button: { text: string; href: string } & { __typename: "linkField_Link" }
} & { __typename: "clients_default_Entry" }

export type HomePageQueryQueryVariables = Exact<{ [key: string]: never }>

export type HomePageQueryQuery = {
	entry:
		| {
				__typename:
					| "blog_blog_Entry"
					| "clients_default_Entry"
					| "faqs_default_Entry"
					| "listing_listing_Entry"
					| "ourClients_ourClients_Entry"
					| "pages_pages_Entry"
					| "partners_default_Entry"
					| "productDetails_default_Entry"
					| "products_products_Entry"
					| "quotes_default_Entry"
		  }
		| ({
				hideContactForm: boolean
				hero: Array<
					{ heading: string; id: string; text: string } & {
						__typename: "slide_slide_BlockType"
					}
				>
				panels: Array<
					| ({
							id: string
							heading: string
							text: string
							image: Array<
								{ width: number; height: number; src: string; alt: string } & {
									__typename:
										| "documents_Asset"
										| "embed_Asset"
										| "images_Asset"
										| "video_Asset"
								}
							>
							button: { text: string; target: string; href: string } & {
								__typename: "linkField_Link"
							}
							theme: { color: Array<string> } & { __typename: "theme" }
					  } & { __typename: "panels_banner_BlockType" })
					| {
							__typename:
								| "panels_form_BlockType"
								| "panels_iconGrid_BlockType"
								| "panels_intro_BlockType"
								| "panels_longForm_BlockType"
								| "panels_product_BlockType"
								| "panels_quote_BlockType"
					  }
					| ({
							id: string
							sectionLabel: string
							collection: Array<
								{
									heading: string
									id: string
									text: string
									products: Array<
										| {
												__typename:
													| "blog_blog_Entry"
													| "clients_default_Entry"
													| "faqs_default_Entry"
													| "home_home_Entry"
													| "listing_listing_Entry"
													| "ourClients_ourClients_Entry"
													| "pages_pages_Entry"
													| "partners_default_Entry"
													| "products_products_Entry"
													| "quotes_default_Entry"
										  }
										| ({
												slug: string
												id: string
												title: string
												blurb: string
												uri: string
												expanded: boolean
												icon: { inline: string } & { __typename: "icon_Icon" }
										  } & { __typename: "productDetails_default_Entry" })
									>
								} & { __typename: "collection_BlockType" }
							>
					  } & { __typename: "panels_products_BlockType" })
					| ({
							id: string
							heading: string
							text: string
							hash: string
							sectionLabel: string
							columns: Array<
								{ id: string; text: string; heading: string } & {
									__typename: "columns_BlockType"
								}
							>
					  } & { __typename: "panels_textGrid_BlockType" })
					| ({
							id: string
							text: string
							button: { text: string; target: string; href: string } & {
								__typename: "linkField_Link"
							}
					  } & { __typename: "panels_text_BlockType" })
				>
				seo: {
					metaTitleContainer: string
					metaTagContainer: string
					metaSiteVarsContainer: string
					metaLinkContainer: string
					metaJsonLdContainer: string
				} & { __typename: "SeomaticType" }
		  } & { __typename: "home_home_Entry" })
	entries: Array<
		| ({
				id: string
				uri: string
				title: string
				colour1: string
				colour2: string
				theme: { color: Array<string> } & { __typename: "theme" }
				image: Array<
					{ src: string; width: number; height: number; alt: string } & {
						__typename:
							| "documents_Asset"
							| "embed_Asset"
							| "images_Asset"
							| "video_Asset"
					}
				>
				category: Array<
					| ({ title: string; id: string } & { __typename: "blog_Category" })
					| { __typename: "products_Category" }
				>
		  } & { __typename: "blog_blog_Entry" })
		| {
				__typename:
					| "clients_default_Entry"
					| "faqs_default_Entry"
					| "home_home_Entry"
					| "listing_listing_Entry"
					| "ourClients_ourClients_Entry"
					| "pages_pages_Entry"
					| "partners_default_Entry"
					| "productDetails_default_Entry"
					| "products_products_Entry"
					| "quotes_default_Entry"
		  }
	>
	clients: Array<
		{
			id: string
			image: Array<
				{ width: number; height: number; src: string; alt: string } & {
					__typename:
						| "documents_Asset"
						| "embed_Asset"
						| "images_Asset"
						| "video_Asset"
				}
			>
			button: { text: string; href: string } & { __typename: "linkField_Link" }
		} & { __typename: "clients_default_Entry" }
	>
} & { __typename: "Query" }

export type ClientCellFragment = {
	richText: string
	asQuote: boolean
	id: string
	clientImage: Array<
		{ width: number; height: number; src: string; alt: string } & {
			__typename:
				| "documents_Asset"
				| "embed_Asset"
				| "images_Asset"
				| "video_Asset"
		}
	>
	theme: { color: Array<string> } & { __typename: "theme" }
	image: Array<
		{ width: number; height: number; src: string; alt: string } & {
			__typename:
				| "documents_Asset"
				| "embed_Asset"
				| "images_Asset"
				| "video_Asset"
		}
	>
	button: { text: string; href: string } & { __typename: "linkField_Link" }
} & { __typename: "clients_default_Entry" }

export type ClientGridFragment = {
	id: string
	clients: Array<
		| {
				__typename:
					| "blog_blog_Entry"
					| "faqs_default_Entry"
					| "home_home_Entry"
					| "listing_listing_Entry"
					| "ourClients_ourClients_Entry"
					| "pages_pages_Entry"
					| "partners_default_Entry"
					| "productDetails_default_Entry"
					| "products_products_Entry"
					| "quotes_default_Entry"
		  }
		| ({
				richText: string
				asQuote: boolean
				id: string
				clientImage: Array<
					{ width: number; height: number; src: string; alt: string } & {
						__typename:
							| "documents_Asset"
							| "embed_Asset"
							| "images_Asset"
							| "video_Asset"
					}
				>
				theme: { color: Array<string> } & { __typename: "theme" }
				image: Array<
					{ width: number; height: number; src: string; alt: string } & {
						__typename:
							| "documents_Asset"
							| "embed_Asset"
							| "images_Asset"
							| "video_Asset"
					}
				>
				button: { text: string; href: string } & {
					__typename: "linkField_Link"
				}
		  } & { __typename: "clients_default_Entry" })
	>
} & { __typename: "clientPanels_grid_BlockType" }

export type ClientPartnersFragment = {
	id: string
	subHeading: string
	heading: string
	clients: Array<
		| {
				__typename:
					| "blog_blog_Entry"
					| "faqs_default_Entry"
					| "home_home_Entry"
					| "listing_listing_Entry"
					| "ourClients_ourClients_Entry"
					| "pages_pages_Entry"
					| "partners_default_Entry"
					| "productDetails_default_Entry"
					| "products_products_Entry"
					| "quotes_default_Entry"
		  }
		| ({
				id: string
				image: Array<
					{ width: number; height: number; src: string; alt: string } & {
						__typename:
							| "documents_Asset"
							| "embed_Asset"
							| "images_Asset"
							| "video_Asset"
					}
				>
				button: { text: string; href: string } & {
					__typename: "linkField_Link"
				}
		  } & { __typename: "clients_default_Entry" })
	>
} & { __typename: "clientPanels_partners_BlockType" }

export type ClientQuoteFragment = {
	id: string
	heading: string
	quote: Array<
		| {
				__typename:
					| "blog_blog_Entry"
					| "clients_default_Entry"
					| "faqs_default_Entry"
					| "home_home_Entry"
					| "listing_listing_Entry"
					| "ourClients_ourClients_Entry"
					| "pages_pages_Entry"
					| "partners_default_Entry"
					| "productDetails_default_Entry"
					| "products_products_Entry"
		  }
		| ({
				id: string
				text: string
				richText: string
				image: Array<
					{ width: number; height: number; src: string; alt: string } & {
						__typename:
							| "documents_Asset"
							| "embed_Asset"
							| "images_Asset"
							| "video_Asset"
					}
				>
		  } & { __typename: "quotes_default_Entry" })
	>
} & { __typename: "clientPanels_quote_BlockType" }

export type ClientVcFragment = {
	id: string
	subHeading: string
	clients: Array<
		| {
				__typename:
					| "blog_blog_Entry"
					| "faqs_default_Entry"
					| "home_home_Entry"
					| "listing_listing_Entry"
					| "ourClients_ourClients_Entry"
					| "pages_pages_Entry"
					| "partners_default_Entry"
					| "productDetails_default_Entry"
					| "products_products_Entry"
					| "quotes_default_Entry"
		  }
		| ({
				id: string
				image: Array<
					{ width: number; height: number; src: string; alt: string } & {
						__typename:
							| "documents_Asset"
							| "embed_Asset"
							| "images_Asset"
							| "video_Asset"
					}
				>
				button: { text: string; href: string } & {
					__typename: "linkField_Link"
				}
		  } & { __typename: "clients_default_Entry" })
	>
} & { __typename: "clientPanels_vc_BlockType" }

export type ClientCardFragment = {
	id: string
	heading: string
	text: string
	logo: Array<
		{ width: number; height: number; src: string; alt: string } & {
			__typename:
				| "documents_Asset"
				| "embed_Asset"
				| "images_Asset"
				| "video_Asset"
		}
	>
	button: { text: string; target: string; href: string } & {
		__typename: "linkField_Link"
	}
} & { __typename: "clientPanels_card_BlockType" }

export type ClientPageFragment = {
	title: string
	heading: string
	clientPanels: Array<
		| ({
				id: string
				heading: string
				text: string
				logo: Array<
					{ width: number; height: number; src: string; alt: string } & {
						__typename:
							| "documents_Asset"
							| "embed_Asset"
							| "images_Asset"
							| "video_Asset"
					}
				>
				button: { text: string; target: string; href: string } & {
					__typename: "linkField_Link"
				}
		  } & { __typename: "clientPanels_card_BlockType" })
		| ({
				id: string
				clients: Array<
					| {
							__typename:
								| "blog_blog_Entry"
								| "faqs_default_Entry"
								| "home_home_Entry"
								| "listing_listing_Entry"
								| "ourClients_ourClients_Entry"
								| "pages_pages_Entry"
								| "partners_default_Entry"
								| "productDetails_default_Entry"
								| "products_products_Entry"
								| "quotes_default_Entry"
					  }
					| ({
							richText: string
							asQuote: boolean
							id: string
							clientImage: Array<
								{ width: number; height: number; src: string; alt: string } & {
									__typename:
										| "documents_Asset"
										| "embed_Asset"
										| "images_Asset"
										| "video_Asset"
								}
							>
							theme: { color: Array<string> } & { __typename: "theme" }
							image: Array<
								{ width: number; height: number; src: string; alt: string } & {
									__typename:
										| "documents_Asset"
										| "embed_Asset"
										| "images_Asset"
										| "video_Asset"
								}
							>
							button: { text: string; href: string } & {
								__typename: "linkField_Link"
							}
					  } & { __typename: "clients_default_Entry" })
				>
		  } & { __typename: "clientPanels_grid_BlockType" })
		| ({
				id: string
				subHeading: string
				heading: string
				clients: Array<
					| {
							__typename:
								| "blog_blog_Entry"
								| "faqs_default_Entry"
								| "home_home_Entry"
								| "listing_listing_Entry"
								| "ourClients_ourClients_Entry"
								| "pages_pages_Entry"
								| "partners_default_Entry"
								| "productDetails_default_Entry"
								| "products_products_Entry"
								| "quotes_default_Entry"
					  }
					| ({
							id: string
							image: Array<
								{ width: number; height: number; src: string; alt: string } & {
									__typename:
										| "documents_Asset"
										| "embed_Asset"
										| "images_Asset"
										| "video_Asset"
								}
							>
							button: { text: string; href: string } & {
								__typename: "linkField_Link"
							}
					  } & { __typename: "clients_default_Entry" })
				>
		  } & { __typename: "clientPanels_partners_BlockType" })
		| ({
				id: string
				heading: string
				quote: Array<
					| {
							__typename:
								| "blog_blog_Entry"
								| "clients_default_Entry"
								| "faqs_default_Entry"
								| "home_home_Entry"
								| "listing_listing_Entry"
								| "ourClients_ourClients_Entry"
								| "pages_pages_Entry"
								| "partners_default_Entry"
								| "productDetails_default_Entry"
								| "products_products_Entry"
					  }
					| ({
							id: string
							text: string
							richText: string
							image: Array<
								{ width: number; height: number; src: string; alt: string } & {
									__typename:
										| "documents_Asset"
										| "embed_Asset"
										| "images_Asset"
										| "video_Asset"
								}
							>
					  } & { __typename: "quotes_default_Entry" })
				>
		  } & { __typename: "clientPanels_quote_BlockType" })
		| ({
				id: string
				subHeading: string
				clients: Array<
					| {
							__typename:
								| "blog_blog_Entry"
								| "faqs_default_Entry"
								| "home_home_Entry"
								| "listing_listing_Entry"
								| "ourClients_ourClients_Entry"
								| "pages_pages_Entry"
								| "partners_default_Entry"
								| "productDetails_default_Entry"
								| "products_products_Entry"
								| "quotes_default_Entry"
					  }
					| ({
							id: string
							image: Array<
								{ width: number; height: number; src: string; alt: string } & {
									__typename:
										| "documents_Asset"
										| "embed_Asset"
										| "images_Asset"
										| "video_Asset"
								}
							>
							button: { text: string; href: string } & {
								__typename: "linkField_Link"
							}
					  } & { __typename: "clients_default_Entry" })
				>
		  } & { __typename: "clientPanels_vc_BlockType" })
	>
	seo: {
		metaTitleContainer: string
		metaTagContainer: string
		metaSiteVarsContainer: string
		metaLinkContainer: string
		metaJsonLdContainer: string
	} & { __typename: "SeomaticType" }
} & { __typename: "ourClients_ourClients_Entry" }

export type ClientPageQueryQueryVariables = Exact<{ [key: string]: never }>

export type ClientPageQueryQuery = {
	entry:
		| {
				__typename:
					| "blog_blog_Entry"
					| "clients_default_Entry"
					| "faqs_default_Entry"
					| "home_home_Entry"
					| "listing_listing_Entry"
					| "pages_pages_Entry"
					| "partners_default_Entry"
					| "productDetails_default_Entry"
					| "products_products_Entry"
					| "quotes_default_Entry"
		  }
		| ({
				title: string
				heading: string
				clientPanels: Array<
					| ({
							id: string
							heading: string
							text: string
							logo: Array<
								{ width: number; height: number; src: string; alt: string } & {
									__typename:
										| "documents_Asset"
										| "embed_Asset"
										| "images_Asset"
										| "video_Asset"
								}
							>
							button: { text: string; target: string; href: string } & {
								__typename: "linkField_Link"
							}
					  } & { __typename: "clientPanels_card_BlockType" })
					| ({
							id: string
							clients: Array<
								| {
										__typename:
											| "blog_blog_Entry"
											| "faqs_default_Entry"
											| "home_home_Entry"
											| "listing_listing_Entry"
											| "ourClients_ourClients_Entry"
											| "pages_pages_Entry"
											| "partners_default_Entry"
											| "productDetails_default_Entry"
											| "products_products_Entry"
											| "quotes_default_Entry"
								  }
								| ({
										richText: string
										asQuote: boolean
										id: string
										clientImage: Array<
											{
												width: number
												height: number
												src: string
												alt: string
											} & {
												__typename:
													| "documents_Asset"
													| "embed_Asset"
													| "images_Asset"
													| "video_Asset"
											}
										>
										theme: { color: Array<string> } & { __typename: "theme" }
										image: Array<
											{
												width: number
												height: number
												src: string
												alt: string
											} & {
												__typename:
													| "documents_Asset"
													| "embed_Asset"
													| "images_Asset"
													| "video_Asset"
											}
										>
										button: { text: string; href: string } & {
											__typename: "linkField_Link"
										}
								  } & { __typename: "clients_default_Entry" })
							>
					  } & { __typename: "clientPanels_grid_BlockType" })
					| ({
							id: string
							subHeading: string
							heading: string
							clients: Array<
								| {
										__typename:
											| "blog_blog_Entry"
											| "faqs_default_Entry"
											| "home_home_Entry"
											| "listing_listing_Entry"
											| "ourClients_ourClients_Entry"
											| "pages_pages_Entry"
											| "partners_default_Entry"
											| "productDetails_default_Entry"
											| "products_products_Entry"
											| "quotes_default_Entry"
								  }
								| ({
										id: string
										image: Array<
											{
												width: number
												height: number
												src: string
												alt: string
											} & {
												__typename:
													| "documents_Asset"
													| "embed_Asset"
													| "images_Asset"
													| "video_Asset"
											}
										>
										button: { text: string; href: string } & {
											__typename: "linkField_Link"
										}
								  } & { __typename: "clients_default_Entry" })
							>
					  } & { __typename: "clientPanels_partners_BlockType" })
					| ({
							id: string
							heading: string
							quote: Array<
								| {
										__typename:
											| "blog_blog_Entry"
											| "clients_default_Entry"
											| "faqs_default_Entry"
											| "home_home_Entry"
											| "listing_listing_Entry"
											| "ourClients_ourClients_Entry"
											| "pages_pages_Entry"
											| "partners_default_Entry"
											| "productDetails_default_Entry"
											| "products_products_Entry"
								  }
								| ({
										id: string
										text: string
										richText: string
										image: Array<
											{
												width: number
												height: number
												src: string
												alt: string
											} & {
												__typename:
													| "documents_Asset"
													| "embed_Asset"
													| "images_Asset"
													| "video_Asset"
											}
										>
								  } & { __typename: "quotes_default_Entry" })
							>
					  } & { __typename: "clientPanels_quote_BlockType" })
					| ({
							id: string
							subHeading: string
							clients: Array<
								| {
										__typename:
											| "blog_blog_Entry"
											| "faqs_default_Entry"
											| "home_home_Entry"
											| "listing_listing_Entry"
											| "ourClients_ourClients_Entry"
											| "pages_pages_Entry"
											| "partners_default_Entry"
											| "productDetails_default_Entry"
											| "products_products_Entry"
											| "quotes_default_Entry"
								  }
								| ({
										id: string
										image: Array<
											{
												width: number
												height: number
												src: string
												alt: string
											} & {
												__typename:
													| "documents_Asset"
													| "embed_Asset"
													| "images_Asset"
													| "video_Asset"
											}
										>
										button: { text: string; href: string } & {
											__typename: "linkField_Link"
										}
								  } & { __typename: "clients_default_Entry" })
							>
					  } & { __typename: "clientPanels_vc_BlockType" })
				>
				seo: {
					metaTitleContainer: string
					metaTagContainer: string
					metaSiteVarsContainer: string
					metaLinkContainer: string
					metaJsonLdContainer: string
				} & { __typename: "SeomaticType" }
		  } & { __typename: "ourClients_ourClients_Entry" })
} & { __typename: "Query" }

export type PageEntryFragment = {
	hideContactForm: boolean
	title: string
	richText: string
	bookingWidget: boolean
	expanded: boolean
	seo: {
		metaTitleContainer: string
		metaTagContainer: string
		metaSiteVarsContainer: string
		metaLinkContainer: string
		metaJsonLdContainer: string
	} & { __typename: "SeomaticType" }
	panels: Array<
		| ({
				id: string
				heading: string
				text: string
				image: Array<
					{ width: number; height: number; src: string; alt: string } & {
						__typename:
							| "documents_Asset"
							| "embed_Asset"
							| "images_Asset"
							| "video_Asset"
					}
				>
				button: { text: string; target: string; href: string } & {
					__typename: "linkField_Link"
				}
				theme: { color: Array<string> } & { __typename: "theme" }
		  } & { __typename: "panels_banner_BlockType" })
		| ({
				id: string
				heading: string
				text: string
				sectionLabel: string
				form: Array<
					{
						id: string
						title: string
						handle: string
						siteId: number
						settings: {
							submitActionMessageHtml: string
							errorMessageHtml: string
						} & { __typename: "FormSettingsType" }
						pages: Array<
							{
								name: string
								id: string
								settings: {
									submitButtonLabel: string
									backButtonLabel: string
									showBackButton: boolean
									buttonsPosition: string
								} & { __typename: "PageSettingsType" }
								rows: Array<
									{
										id: string
										rowFields: Array<
											| ({
													id: string
													name: string
													labelPosition: string
													handle: string
													instructions: string
													required: boolean
													type: string
													typeName: string
													inputTypeName: string
													placeholder: string
													errorMessage: string
													displayName: string
													defaultState: boolean
													checkedValue: string
													uncheckedValue: string
													description: string
													label: string
											  } & { __typename: "Field_Agree" })
											| ({
													id: string
													name: string
													labelPosition: string
													handle: string
													instructions: string
													required: boolean
													type: string
													typeName: string
													inputTypeName: string
													placeholder: string
													errorMessage: string
													displayName: string
													label: string
											  } & {
													__typename:
														| "Field_Calculations"
														| "Field_Date"
														| "Field_FileUpload"
														| "Field_Password"
														| "Field_Payment"
														| "Field_Signature"
														| "Field_Summary"
											  })
											| ({
													id: string
													name: string
													labelPosition: string
													handle: string
													instructions: string
													required: boolean
													type: string
													typeName: string
													inputTypeName: string
													placeholder: string
													errorMessage: string
													displayName: string
													defaultValue: string
													layout: string
													toggleCheckbox: string
													toggleCheckboxLabel: string
													label: string
													options: Array<
														{ label: string; value: string } & {
															__typename: "FieldOption"
														}
													>
											  } & { __typename: "Field_Checkboxes" })
											| ({
													id: string
													name: string
													labelPosition: string
													handle: string
													instructions: string
													required: boolean
													type: string
													typeName: string
													inputTypeName: string
													placeholder: string
													errorMessage: string
													displayName: string
													multi: boolean
													defaultValue: string
													label: string
													options: Array<
														{ label: string; value: string } & {
															__typename: "FieldOption"
														}
													>
											  } & { __typename: "Field_Dropdown" })
											| ({
													id: string
													name: string
													labelPosition: string
													handle: string
													instructions: string
													required: boolean
													type: string
													typeName: string
													inputTypeName: string
													placeholder: string
													errorMessage: string
													displayName: string
													defaultValue: string
													label: string
											  } & {
													__typename:
														| "Field_Email"
														| "Field_MultiLineText"
														| "Field_SingleLineText"
											  })
											| ({
													id: string
													name: string
													labelPosition: string
													handle: string
													instructions: string
													required: boolean
													type: string
													typeName: string
													inputTypeName: string
													placeholder: string
													errorMessage: string
													displayName: string
													defaultValue: string
													defaultOption: string
													queryParameter: string
													cookieName: string
													label: string
											  } & { __typename: "Field_Hidden" })
											| ({
													id: string
													name: string
													labelPosition: string
													handle: string
													instructions: string
													required: boolean
													type: string
													typeName: string
													inputTypeName: string
													placeholder: string
													errorMessage: string
													displayName: string
													min: number
													max: number
													label: string
											  } & { __typename: "Field_Number" })
											| ({
													id: string
													name: string
													labelPosition: string
													handle: string
													instructions: string
													required: boolean
													type: string
													typeName: string
													inputTypeName: string
													placeholder: string
													errorMessage: string
													displayName: string
													defaultValue: string
													countryEnabled: boolean
													countryDefaultValue: string
													countryShowDialCode: boolean
													label: string
													countryOptions: Array<
														{ label: string; value: string } & {
															__typename: "FieldAttribute"
														}
													>
											  } & { __typename: "Field_Phone" })
											| ({
													id: string
													name: string
													labelPosition: string
													handle: string
													instructions: string
													required: boolean
													type: string
													typeName: string
													inputTypeName: string
													placeholder: string
													errorMessage: string
													displayName: string
													layout: string
													label: string
													options: Array<
														{ label: string; value: string } & {
															__typename: "FieldOption"
														}
													>
											  } & { __typename: "Field_Radio" })
										>
									} & { __typename: "RowType" }
								>
							} & { __typename: "PageType" }
						>
					} & { __typename: "contact_Form" }
				>
		  } & { __typename: "panels_form_BlockType" })
		| ({
				id: string
				heading: string
				theme: { color: Array<string> } & { __typename: "theme" }
				items: Array<
					{
						id: string
						heading: string
						text: string
						icon: { inline: string } & { __typename: "icon_Icon" }
						button: { text: string; target: string; href: string } & {
							__typename: "linkField_Link"
						}
					} & { __typename: "items_BlockType" }
				>
		  } & { __typename: "panels_iconGrid_BlockType" })
		| ({
				id: string
				text: string
				heading: string
				button: { text: string; target: string; href: string } & {
					__typename: "linkField_Link"
				}
				logo: Array<
					{ width: number; height: number; src: string; alt: string } & {
						__typename:
							| "documents_Asset"
							| "embed_Asset"
							| "images_Asset"
							| "video_Asset"
					}
				>
		  } & { __typename: "panels_intro_BlockType" })
		| ({
				id: string
				heading: string
				blocks: Array<
					{
						id: string
						text: string
						image: Array<
							{ width: number; height: number; src: string; alt: string } & {
								__typename:
									| "documents_Asset"
									| "embed_Asset"
									| "images_Asset"
									| "video_Asset"
							}
						>
						button: { text: string; target: string; href: string } & {
							__typename: "linkField_Link"
						}
					} & { __typename: "blocks_BlockType" }
				>
		  } & { __typename: "panels_longForm_BlockType" })
		| ({
				id: string
				product: Array<
					| {
							__typename:
								| "blog_blog_Entry"
								| "clients_default_Entry"
								| "faqs_default_Entry"
								| "home_home_Entry"
								| "listing_listing_Entry"
								| "ourClients_ourClients_Entry"
								| "pages_pages_Entry"
								| "partners_default_Entry"
								| "products_products_Entry"
								| "quotes_default_Entry"
					  }
					| ({
							coverClaims: string
							additionalProtection: string
							tip: string
							needs: string
							slug: string
							id: string
							title: string
							blurb: string
							uri: string
							expanded: boolean
							icon: { inline: string } & { __typename: "icon_Icon" }
					  } & { __typename: "productDetails_default_Entry" })
				>
		  } & { __typename: "panels_product_BlockType" })
		| ({
				id: string
				sectionLabel: string
				collection: Array<
					{
						heading: string
						id: string
						text: string
						products: Array<
							| {
									__typename:
										| "blog_blog_Entry"
										| "clients_default_Entry"
										| "faqs_default_Entry"
										| "home_home_Entry"
										| "listing_listing_Entry"
										| "ourClients_ourClients_Entry"
										| "pages_pages_Entry"
										| "partners_default_Entry"
										| "products_products_Entry"
										| "quotes_default_Entry"
							  }
							| ({
									slug: string
									id: string
									title: string
									blurb: string
									uri: string
									expanded: boolean
									icon: { inline: string } & { __typename: "icon_Icon" }
							  } & { __typename: "productDetails_default_Entry" })
						>
					} & { __typename: "collection_BlockType" }
				>
		  } & { __typename: "panels_products_BlockType" })
		| ({
				id: string
				heading: string
				button: { text: string; target: string; href: string } & {
					__typename: "linkField_Link"
				}
				quote: Array<
					| {
							__typename:
								| "blog_blog_Entry"
								| "clients_default_Entry"
								| "faqs_default_Entry"
								| "home_home_Entry"
								| "listing_listing_Entry"
								| "ourClients_ourClients_Entry"
								| "pages_pages_Entry"
								| "partners_default_Entry"
								| "productDetails_default_Entry"
								| "products_products_Entry"
					  }
					| ({
							id: string
							text: string
							richText: string
							image: Array<
								{ width: number; height: number; src: string; alt: string } & {
									__typename:
										| "documents_Asset"
										| "embed_Asset"
										| "images_Asset"
										| "video_Asset"
								}
							>
					  } & { __typename: "quotes_default_Entry" })
				>
		  } & { __typename: "panels_quote_BlockType" })
		| ({
				id: string
				heading: string
				text: string
				hash: string
				sectionLabel: string
				columns: Array<
					{ id: string; text: string; heading: string } & {
						__typename: "columns_BlockType"
					}
				>
		  } & { __typename: "panels_textGrid_BlockType" })
		| ({
				id: string
				text: string
				button: { text: string; target: string; href: string } & {
					__typename: "linkField_Link"
				}
		  } & { __typename: "panels_text_BlockType" })
	>
} & { __typename: "pages_pages_Entry" }

export type PageEntyQueryQueryVariables = Exact<{
	uri: InputMaybe<
		Array<InputMaybe<Scalars["String"]>> | InputMaybe<Scalars["String"]>
	>
}>

export type PageEntyQueryQuery = {
	entry:
		| {
				__typename:
					| "blog_blog_Entry"
					| "clients_default_Entry"
					| "faqs_default_Entry"
					| "home_home_Entry"
					| "listing_listing_Entry"
					| "ourClients_ourClients_Entry"
					| "partners_default_Entry"
					| "productDetails_default_Entry"
					| "products_products_Entry"
					| "quotes_default_Entry"
		  }
		| ({
				hideContactForm: boolean
				title: string
				richText: string
				bookingWidget: boolean
				expanded: boolean
				seo: {
					metaTitleContainer: string
					metaTagContainer: string
					metaSiteVarsContainer: string
					metaLinkContainer: string
					metaJsonLdContainer: string
				} & { __typename: "SeomaticType" }
				panels: Array<
					| ({
							id: string
							heading: string
							text: string
							image: Array<
								{ width: number; height: number; src: string; alt: string } & {
									__typename:
										| "documents_Asset"
										| "embed_Asset"
										| "images_Asset"
										| "video_Asset"
								}
							>
							button: { text: string; target: string; href: string } & {
								__typename: "linkField_Link"
							}
							theme: { color: Array<string> } & { __typename: "theme" }
					  } & { __typename: "panels_banner_BlockType" })
					| ({
							id: string
							heading: string
							text: string
							sectionLabel: string
							form: Array<
								{
									id: string
									title: string
									handle: string
									siteId: number
									settings: {
										submitActionMessageHtml: string
										errorMessageHtml: string
									} & { __typename: "FormSettingsType" }
									pages: Array<
										{
											name: string
											id: string
											settings: {
												submitButtonLabel: string
												backButtonLabel: string
												showBackButton: boolean
												buttonsPosition: string
											} & { __typename: "PageSettingsType" }
											rows: Array<
												{
													id: string
													rowFields: Array<
														| ({
																id: string
																name: string
																labelPosition: string
																handle: string
																instructions: string
																required: boolean
																type: string
																typeName: string
																inputTypeName: string
																placeholder: string
																errorMessage: string
																displayName: string
																defaultState: boolean
																checkedValue: string
																uncheckedValue: string
																description: string
																label: string
														  } & { __typename: "Field_Agree" })
														| ({
																id: string
																name: string
																labelPosition: string
																handle: string
																instructions: string
																required: boolean
																type: string
																typeName: string
																inputTypeName: string
																placeholder: string
																errorMessage: string
																displayName: string
																label: string
														  } & {
																__typename:
																	| "Field_Calculations"
																	| "Field_Date"
																	| "Field_FileUpload"
																	| "Field_Password"
																	| "Field_Payment"
																	| "Field_Signature"
																	| "Field_Summary"
														  })
														| ({
																id: string
																name: string
																labelPosition: string
																handle: string
																instructions: string
																required: boolean
																type: string
																typeName: string
																inputTypeName: string
																placeholder: string
																errorMessage: string
																displayName: string
																defaultValue: string
																layout: string
																toggleCheckbox: string
																toggleCheckboxLabel: string
																label: string
																options: Array<
																	{ label: string; value: string } & {
																		__typename: "FieldOption"
																	}
																>
														  } & { __typename: "Field_Checkboxes" })
														| ({
																id: string
																name: string
																labelPosition: string
																handle: string
																instructions: string
																required: boolean
																type: string
																typeName: string
																inputTypeName: string
																placeholder: string
																errorMessage: string
																displayName: string
																multi: boolean
																defaultValue: string
																label: string
																options: Array<
																	{ label: string; value: string } & {
																		__typename: "FieldOption"
																	}
																>
														  } & { __typename: "Field_Dropdown" })
														| ({
																id: string
																name: string
																labelPosition: string
																handle: string
																instructions: string
																required: boolean
																type: string
																typeName: string
																inputTypeName: string
																placeholder: string
																errorMessage: string
																displayName: string
																defaultValue: string
																label: string
														  } & {
																__typename:
																	| "Field_Email"
																	| "Field_MultiLineText"
																	| "Field_SingleLineText"
														  })
														| ({
																id: string
																name: string
																labelPosition: string
																handle: string
																instructions: string
																required: boolean
																type: string
																typeName: string
																inputTypeName: string
																placeholder: string
																errorMessage: string
																displayName: string
																defaultValue: string
																defaultOption: string
																queryParameter: string
																cookieName: string
																label: string
														  } & { __typename: "Field_Hidden" })
														| ({
																id: string
																name: string
																labelPosition: string
																handle: string
																instructions: string
																required: boolean
																type: string
																typeName: string
																inputTypeName: string
																placeholder: string
																errorMessage: string
																displayName: string
																min: number
																max: number
																label: string
														  } & { __typename: "Field_Number" })
														| ({
																id: string
																name: string
																labelPosition: string
																handle: string
																instructions: string
																required: boolean
																type: string
																typeName: string
																inputTypeName: string
																placeholder: string
																errorMessage: string
																displayName: string
																defaultValue: string
																countryEnabled: boolean
																countryDefaultValue: string
																countryShowDialCode: boolean
																label: string
																countryOptions: Array<
																	{ label: string; value: string } & {
																		__typename: "FieldAttribute"
																	}
																>
														  } & { __typename: "Field_Phone" })
														| ({
																id: string
																name: string
																labelPosition: string
																handle: string
																instructions: string
																required: boolean
																type: string
																typeName: string
																inputTypeName: string
																placeholder: string
																errorMessage: string
																displayName: string
																layout: string
																label: string
																options: Array<
																	{ label: string; value: string } & {
																		__typename: "FieldOption"
																	}
																>
														  } & { __typename: "Field_Radio" })
													>
												} & { __typename: "RowType" }
											>
										} & { __typename: "PageType" }
									>
								} & { __typename: "contact_Form" }
							>
					  } & { __typename: "panels_form_BlockType" })
					| ({
							id: string
							heading: string
							theme: { color: Array<string> } & { __typename: "theme" }
							items: Array<
								{
									id: string
									heading: string
									text: string
									icon: { inline: string } & { __typename: "icon_Icon" }
									button: { text: string; target: string; href: string } & {
										__typename: "linkField_Link"
									}
								} & { __typename: "items_BlockType" }
							>
					  } & { __typename: "panels_iconGrid_BlockType" })
					| ({
							id: string
							text: string
							heading: string
							button: { text: string; target: string; href: string } & {
								__typename: "linkField_Link"
							}
							logo: Array<
								{ width: number; height: number; src: string; alt: string } & {
									__typename:
										| "documents_Asset"
										| "embed_Asset"
										| "images_Asset"
										| "video_Asset"
								}
							>
					  } & { __typename: "panels_intro_BlockType" })
					| ({
							id: string
							heading: string
							blocks: Array<
								{
									id: string
									text: string
									image: Array<
										{
											width: number
											height: number
											src: string
											alt: string
										} & {
											__typename:
												| "documents_Asset"
												| "embed_Asset"
												| "images_Asset"
												| "video_Asset"
										}
									>
									button: { text: string; target: string; href: string } & {
										__typename: "linkField_Link"
									}
								} & { __typename: "blocks_BlockType" }
							>
					  } & { __typename: "panels_longForm_BlockType" })
					| ({
							id: string
							product: Array<
								| {
										__typename:
											| "blog_blog_Entry"
											| "clients_default_Entry"
											| "faqs_default_Entry"
											| "home_home_Entry"
											| "listing_listing_Entry"
											| "ourClients_ourClients_Entry"
											| "pages_pages_Entry"
											| "partners_default_Entry"
											| "products_products_Entry"
											| "quotes_default_Entry"
								  }
								| ({
										coverClaims: string
										additionalProtection: string
										tip: string
										needs: string
										slug: string
										id: string
										title: string
										blurb: string
										uri: string
										expanded: boolean
										icon: { inline: string } & { __typename: "icon_Icon" }
								  } & { __typename: "productDetails_default_Entry" })
							>
					  } & { __typename: "panels_product_BlockType" })
					| ({
							id: string
							sectionLabel: string
							collection: Array<
								{
									heading: string
									id: string
									text: string
									products: Array<
										| {
												__typename:
													| "blog_blog_Entry"
													| "clients_default_Entry"
													| "faqs_default_Entry"
													| "home_home_Entry"
													| "listing_listing_Entry"
													| "ourClients_ourClients_Entry"
													| "pages_pages_Entry"
													| "partners_default_Entry"
													| "products_products_Entry"
													| "quotes_default_Entry"
										  }
										| ({
												slug: string
												id: string
												title: string
												blurb: string
												uri: string
												expanded: boolean
												icon: { inline: string } & { __typename: "icon_Icon" }
										  } & { __typename: "productDetails_default_Entry" })
									>
								} & { __typename: "collection_BlockType" }
							>
					  } & { __typename: "panels_products_BlockType" })
					| ({
							id: string
							heading: string
							button: { text: string; target: string; href: string } & {
								__typename: "linkField_Link"
							}
							quote: Array<
								| {
										__typename:
											| "blog_blog_Entry"
											| "clients_default_Entry"
											| "faqs_default_Entry"
											| "home_home_Entry"
											| "listing_listing_Entry"
											| "ourClients_ourClients_Entry"
											| "pages_pages_Entry"
											| "partners_default_Entry"
											| "productDetails_default_Entry"
											| "products_products_Entry"
								  }
								| ({
										id: string
										text: string
										richText: string
										image: Array<
											{
												width: number
												height: number
												src: string
												alt: string
											} & {
												__typename:
													| "documents_Asset"
													| "embed_Asset"
													| "images_Asset"
													| "video_Asset"
											}
										>
								  } & { __typename: "quotes_default_Entry" })
							>
					  } & { __typename: "panels_quote_BlockType" })
					| ({
							id: string
							heading: string
							text: string
							hash: string
							sectionLabel: string
							columns: Array<
								{ id: string; text: string; heading: string } & {
									__typename: "columns_BlockType"
								}
							>
					  } & { __typename: "panels_textGrid_BlockType" })
					| ({
							id: string
							text: string
							button: { text: string; target: string; href: string } & {
								__typename: "linkField_Link"
							}
					  } & { __typename: "panels_text_BlockType" })
				>
		  } & { __typename: "pages_pages_Entry" })
} & { __typename: "Query" }

export type PageSlugFragment = { slug: string } & {
	__typename: "pages_pages_Entry"
}

export type PageListQueryQueryVariables = Exact<{ [key: string]: never }>

export type PageListQueryQuery = {
	entries: Array<
		| {
				__typename:
					| "blog_blog_Entry"
					| "clients_default_Entry"
					| "faqs_default_Entry"
					| "home_home_Entry"
					| "listing_listing_Entry"
					| "ourClients_ourClients_Entry"
					| "partners_default_Entry"
					| "productDetails_default_Entry"
					| "products_products_Entry"
					| "quotes_default_Entry"
		  }
		| ({ slug: string } & { __typename: "pages_pages_Entry" })
	>
} & { __typename: "Query" }

export type PartnerEntryFragment = {
	title: string
	hideContactForm: boolean
	seo: {
		metaTitleContainer: string
		metaTagContainer: string
		metaSiteVarsContainer: string
		metaLinkContainer: string
		metaJsonLdContainer: string
	} & { __typename: "SeomaticType" }
	relatedInsights: Array<
		| ({
				id: string
				uri: string
				title: string
				colour1: string
				colour2: string
				image: Array<
					{ src: string; width: number; height: number; alt: string } & {
						__typename:
							| "documents_Asset"
							| "embed_Asset"
							| "images_Asset"
							| "video_Asset"
					}
				>
				category: Array<
					| ({ id: string; title: string } & { __typename: "blog_Category" })
					| { __typename: "products_Category" }
				>
		  } & { __typename: "blog_blog_Entry" })
		| {
				__typename:
					| "clients_default_Entry"
					| "faqs_default_Entry"
					| "home_home_Entry"
					| "listing_listing_Entry"
					| "ourClients_ourClients_Entry"
					| "pages_pages_Entry"
					| "partners_default_Entry"
					| "productDetails_default_Entry"
					| "products_products_Entry"
					| "quotes_default_Entry"
		  }
	>
	panels: Array<
		| ({
				id: string
				heading: string
				text: string
				image: Array<
					{ width: number; height: number; src: string; alt: string } & {
						__typename:
							| "documents_Asset"
							| "embed_Asset"
							| "images_Asset"
							| "video_Asset"
					}
				>
				button: { text: string; target: string; href: string } & {
					__typename: "linkField_Link"
				}
				theme: { color: Array<string> } & { __typename: "theme" }
		  } & { __typename: "panels_banner_BlockType" })
		| ({
				id: string
				heading: string
				text: string
				sectionLabel: string
				form: Array<
					{
						id: string
						title: string
						handle: string
						siteId: number
						settings: {
							submitActionMessageHtml: string
							errorMessageHtml: string
						} & { __typename: "FormSettingsType" }
						pages: Array<
							{
								name: string
								id: string
								settings: {
									submitButtonLabel: string
									backButtonLabel: string
									showBackButton: boolean
									buttonsPosition: string
								} & { __typename: "PageSettingsType" }
								rows: Array<
									{
										id: string
										rowFields: Array<
											| ({
													id: string
													name: string
													labelPosition: string
													handle: string
													instructions: string
													required: boolean
													type: string
													typeName: string
													inputTypeName: string
													placeholder: string
													errorMessage: string
													displayName: string
													defaultState: boolean
													checkedValue: string
													uncheckedValue: string
													description: string
													label: string
											  } & { __typename: "Field_Agree" })
											| ({
													id: string
													name: string
													labelPosition: string
													handle: string
													instructions: string
													required: boolean
													type: string
													typeName: string
													inputTypeName: string
													placeholder: string
													errorMessage: string
													displayName: string
													label: string
											  } & {
													__typename:
														| "Field_Calculations"
														| "Field_Date"
														| "Field_FileUpload"
														| "Field_Password"
														| "Field_Payment"
														| "Field_Signature"
														| "Field_Summary"
											  })
											| ({
													id: string
													name: string
													labelPosition: string
													handle: string
													instructions: string
													required: boolean
													type: string
													typeName: string
													inputTypeName: string
													placeholder: string
													errorMessage: string
													displayName: string
													defaultValue: string
													layout: string
													toggleCheckbox: string
													toggleCheckboxLabel: string
													label: string
													options: Array<
														{ label: string; value: string } & {
															__typename: "FieldOption"
														}
													>
											  } & { __typename: "Field_Checkboxes" })
											| ({
													id: string
													name: string
													labelPosition: string
													handle: string
													instructions: string
													required: boolean
													type: string
													typeName: string
													inputTypeName: string
													placeholder: string
													errorMessage: string
													displayName: string
													multi: boolean
													defaultValue: string
													label: string
													options: Array<
														{ label: string; value: string } & {
															__typename: "FieldOption"
														}
													>
											  } & { __typename: "Field_Dropdown" })
											| ({
													id: string
													name: string
													labelPosition: string
													handle: string
													instructions: string
													required: boolean
													type: string
													typeName: string
													inputTypeName: string
													placeholder: string
													errorMessage: string
													displayName: string
													defaultValue: string
													label: string
											  } & {
													__typename:
														| "Field_Email"
														| "Field_MultiLineText"
														| "Field_SingleLineText"
											  })
											| ({
													id: string
													name: string
													labelPosition: string
													handle: string
													instructions: string
													required: boolean
													type: string
													typeName: string
													inputTypeName: string
													placeholder: string
													errorMessage: string
													displayName: string
													defaultValue: string
													defaultOption: string
													queryParameter: string
													cookieName: string
													label: string
											  } & { __typename: "Field_Hidden" })
											| ({
													id: string
													name: string
													labelPosition: string
													handle: string
													instructions: string
													required: boolean
													type: string
													typeName: string
													inputTypeName: string
													placeholder: string
													errorMessage: string
													displayName: string
													min: number
													max: number
													label: string
											  } & { __typename: "Field_Number" })
											| ({
													id: string
													name: string
													labelPosition: string
													handle: string
													instructions: string
													required: boolean
													type: string
													typeName: string
													inputTypeName: string
													placeholder: string
													errorMessage: string
													displayName: string
													defaultValue: string
													countryEnabled: boolean
													countryDefaultValue: string
													countryShowDialCode: boolean
													label: string
													countryOptions: Array<
														{ label: string; value: string } & {
															__typename: "FieldAttribute"
														}
													>
											  } & { __typename: "Field_Phone" })
											| ({
													id: string
													name: string
													labelPosition: string
													handle: string
													instructions: string
													required: boolean
													type: string
													typeName: string
													inputTypeName: string
													placeholder: string
													errorMessage: string
													displayName: string
													layout: string
													label: string
													options: Array<
														{ label: string; value: string } & {
															__typename: "FieldOption"
														}
													>
											  } & { __typename: "Field_Radio" })
										>
									} & { __typename: "RowType" }
								>
							} & { __typename: "PageType" }
						>
					} & { __typename: "contact_Form" }
				>
		  } & { __typename: "panels_form_BlockType" })
		| ({
				id: string
				heading: string
				theme: { color: Array<string> } & { __typename: "theme" }
				items: Array<
					{
						id: string
						heading: string
						text: string
						icon: { inline: string } & { __typename: "icon_Icon" }
						button: { text: string; target: string; href: string } & {
							__typename: "linkField_Link"
						}
					} & { __typename: "items_BlockType" }
				>
		  } & { __typename: "panels_iconGrid_BlockType" })
		| ({
				id: string
				text: string
				heading: string
				button: { text: string; target: string; href: string } & {
					__typename: "linkField_Link"
				}
				logo: Array<
					{ width: number; height: number; src: string; alt: string } & {
						__typename:
							| "documents_Asset"
							| "embed_Asset"
							| "images_Asset"
							| "video_Asset"
					}
				>
		  } & { __typename: "panels_intro_BlockType" })
		| ({
				id: string
				heading: string
				blocks: Array<
					{
						id: string
						text: string
						image: Array<
							{ width: number; height: number; src: string; alt: string } & {
								__typename:
									| "documents_Asset"
									| "embed_Asset"
									| "images_Asset"
									| "video_Asset"
							}
						>
						button: { text: string; target: string; href: string } & {
							__typename: "linkField_Link"
						}
					} & { __typename: "blocks_BlockType" }
				>
		  } & { __typename: "panels_longForm_BlockType" })
		| ({
				id: string
				product: Array<
					| {
							__typename:
								| "blog_blog_Entry"
								| "clients_default_Entry"
								| "faqs_default_Entry"
								| "home_home_Entry"
								| "listing_listing_Entry"
								| "ourClients_ourClients_Entry"
								| "pages_pages_Entry"
								| "partners_default_Entry"
								| "products_products_Entry"
								| "quotes_default_Entry"
					  }
					| ({
							coverClaims: string
							additionalProtection: string
							tip: string
							needs: string
							slug: string
							id: string
							title: string
							blurb: string
							uri: string
							expanded: boolean
							icon: { inline: string } & { __typename: "icon_Icon" }
					  } & { __typename: "productDetails_default_Entry" })
				>
		  } & { __typename: "panels_product_BlockType" })
		| ({
				id: string
				sectionLabel: string
				collection: Array<
					{
						heading: string
						id: string
						text: string
						products: Array<
							| {
									__typename:
										| "blog_blog_Entry"
										| "clients_default_Entry"
										| "faqs_default_Entry"
										| "home_home_Entry"
										| "listing_listing_Entry"
										| "ourClients_ourClients_Entry"
										| "pages_pages_Entry"
										| "partners_default_Entry"
										| "products_products_Entry"
										| "quotes_default_Entry"
							  }
							| ({
									slug: string
									id: string
									title: string
									blurb: string
									uri: string
									expanded: boolean
									icon: { inline: string } & { __typename: "icon_Icon" }
							  } & { __typename: "productDetails_default_Entry" })
						>
					} & { __typename: "collection_BlockType" }
				>
		  } & { __typename: "panels_products_BlockType" })
		| ({
				id: string
				heading: string
				button: { text: string; target: string; href: string } & {
					__typename: "linkField_Link"
				}
				quote: Array<
					| {
							__typename:
								| "blog_blog_Entry"
								| "clients_default_Entry"
								| "faqs_default_Entry"
								| "home_home_Entry"
								| "listing_listing_Entry"
								| "ourClients_ourClients_Entry"
								| "pages_pages_Entry"
								| "partners_default_Entry"
								| "productDetails_default_Entry"
								| "products_products_Entry"
					  }
					| ({
							id: string
							text: string
							richText: string
							image: Array<
								{ width: number; height: number; src: string; alt: string } & {
									__typename:
										| "documents_Asset"
										| "embed_Asset"
										| "images_Asset"
										| "video_Asset"
								}
							>
					  } & { __typename: "quotes_default_Entry" })
				>
		  } & { __typename: "panels_quote_BlockType" })
		| ({
				id: string
				heading: string
				text: string
				hash: string
				sectionLabel: string
				columns: Array<
					{ id: string; text: string; heading: string } & {
						__typename: "columns_BlockType"
					}
				>
		  } & { __typename: "panels_textGrid_BlockType" })
		| ({
				id: string
				text: string
				button: { text: string; target: string; href: string } & {
					__typename: "linkField_Link"
				}
		  } & { __typename: "panels_text_BlockType" })
	>
} & { __typename: "partners_default_Entry" }

export type PartnerEntyQueryQueryVariables = Exact<{
	slug: InputMaybe<
		Array<InputMaybe<Scalars["String"]>> | InputMaybe<Scalars["String"]>
	>
}>

export type PartnerEntyQueryQuery = {
	entry:
		| {
				__typename:
					| "blog_blog_Entry"
					| "clients_default_Entry"
					| "faqs_default_Entry"
					| "home_home_Entry"
					| "listing_listing_Entry"
					| "ourClients_ourClients_Entry"
					| "pages_pages_Entry"
					| "productDetails_default_Entry"
					| "products_products_Entry"
					| "quotes_default_Entry"
		  }
		| ({
				title: string
				hideContactForm: boolean
				seo: {
					metaTitleContainer: string
					metaTagContainer: string
					metaSiteVarsContainer: string
					metaLinkContainer: string
					metaJsonLdContainer: string
				} & { __typename: "SeomaticType" }
				relatedInsights: Array<
					| ({
							id: string
							uri: string
							title: string
							colour1: string
							colour2: string
							image: Array<
								{ src: string; width: number; height: number; alt: string } & {
									__typename:
										| "documents_Asset"
										| "embed_Asset"
										| "images_Asset"
										| "video_Asset"
								}
							>
							category: Array<
								| ({ id: string; title: string } & {
										__typename: "blog_Category"
								  })
								| { __typename: "products_Category" }
							>
					  } & { __typename: "blog_blog_Entry" })
					| {
							__typename:
								| "clients_default_Entry"
								| "faqs_default_Entry"
								| "home_home_Entry"
								| "listing_listing_Entry"
								| "ourClients_ourClients_Entry"
								| "pages_pages_Entry"
								| "partners_default_Entry"
								| "productDetails_default_Entry"
								| "products_products_Entry"
								| "quotes_default_Entry"
					  }
				>
				panels: Array<
					| ({
							id: string
							heading: string
							text: string
							image: Array<
								{ width: number; height: number; src: string; alt: string } & {
									__typename:
										| "documents_Asset"
										| "embed_Asset"
										| "images_Asset"
										| "video_Asset"
								}
							>
							button: { text: string; target: string; href: string } & {
								__typename: "linkField_Link"
							}
							theme: { color: Array<string> } & { __typename: "theme" }
					  } & { __typename: "panels_banner_BlockType" })
					| ({
							id: string
							heading: string
							text: string
							sectionLabel: string
							form: Array<
								{
									id: string
									title: string
									handle: string
									siteId: number
									settings: {
										submitActionMessageHtml: string
										errorMessageHtml: string
									} & { __typename: "FormSettingsType" }
									pages: Array<
										{
											name: string
											id: string
											settings: {
												submitButtonLabel: string
												backButtonLabel: string
												showBackButton: boolean
												buttonsPosition: string
											} & { __typename: "PageSettingsType" }
											rows: Array<
												{
													id: string
													rowFields: Array<
														| ({
																id: string
																name: string
																labelPosition: string
																handle: string
																instructions: string
																required: boolean
																type: string
																typeName: string
																inputTypeName: string
																placeholder: string
																errorMessage: string
																displayName: string
																defaultState: boolean
																checkedValue: string
																uncheckedValue: string
																description: string
																label: string
														  } & { __typename: "Field_Agree" })
														| ({
																id: string
																name: string
																labelPosition: string
																handle: string
																instructions: string
																required: boolean
																type: string
																typeName: string
																inputTypeName: string
																placeholder: string
																errorMessage: string
																displayName: string
																label: string
														  } & {
																__typename:
																	| "Field_Calculations"
																	| "Field_Date"
																	| "Field_FileUpload"
																	| "Field_Password"
																	| "Field_Payment"
																	| "Field_Signature"
																	| "Field_Summary"
														  })
														| ({
																id: string
																name: string
																labelPosition: string
																handle: string
																instructions: string
																required: boolean
																type: string
																typeName: string
																inputTypeName: string
																placeholder: string
																errorMessage: string
																displayName: string
																defaultValue: string
																layout: string
																toggleCheckbox: string
																toggleCheckboxLabel: string
																label: string
																options: Array<
																	{ label: string; value: string } & {
																		__typename: "FieldOption"
																	}
																>
														  } & { __typename: "Field_Checkboxes" })
														| ({
																id: string
																name: string
																labelPosition: string
																handle: string
																instructions: string
																required: boolean
																type: string
																typeName: string
																inputTypeName: string
																placeholder: string
																errorMessage: string
																displayName: string
																multi: boolean
																defaultValue: string
																label: string
																options: Array<
																	{ label: string; value: string } & {
																		__typename: "FieldOption"
																	}
																>
														  } & { __typename: "Field_Dropdown" })
														| ({
																id: string
																name: string
																labelPosition: string
																handle: string
																instructions: string
																required: boolean
																type: string
																typeName: string
																inputTypeName: string
																placeholder: string
																errorMessage: string
																displayName: string
																defaultValue: string
																label: string
														  } & {
																__typename:
																	| "Field_Email"
																	| "Field_MultiLineText"
																	| "Field_SingleLineText"
														  })
														| ({
																id: string
																name: string
																labelPosition: string
																handle: string
																instructions: string
																required: boolean
																type: string
																typeName: string
																inputTypeName: string
																placeholder: string
																errorMessage: string
																displayName: string
																defaultValue: string
																defaultOption: string
																queryParameter: string
																cookieName: string
																label: string
														  } & { __typename: "Field_Hidden" })
														| ({
																id: string
																name: string
																labelPosition: string
																handle: string
																instructions: string
																required: boolean
																type: string
																typeName: string
																inputTypeName: string
																placeholder: string
																errorMessage: string
																displayName: string
																min: number
																max: number
																label: string
														  } & { __typename: "Field_Number" })
														| ({
																id: string
																name: string
																labelPosition: string
																handle: string
																instructions: string
																required: boolean
																type: string
																typeName: string
																inputTypeName: string
																placeholder: string
																errorMessage: string
																displayName: string
																defaultValue: string
																countryEnabled: boolean
																countryDefaultValue: string
																countryShowDialCode: boolean
																label: string
																countryOptions: Array<
																	{ label: string; value: string } & {
																		__typename: "FieldAttribute"
																	}
																>
														  } & { __typename: "Field_Phone" })
														| ({
																id: string
																name: string
																labelPosition: string
																handle: string
																instructions: string
																required: boolean
																type: string
																typeName: string
																inputTypeName: string
																placeholder: string
																errorMessage: string
																displayName: string
																layout: string
																label: string
																options: Array<
																	{ label: string; value: string } & {
																		__typename: "FieldOption"
																	}
																>
														  } & { __typename: "Field_Radio" })
													>
												} & { __typename: "RowType" }
											>
										} & { __typename: "PageType" }
									>
								} & { __typename: "contact_Form" }
							>
					  } & { __typename: "panels_form_BlockType" })
					| ({
							id: string
							heading: string
							theme: { color: Array<string> } & { __typename: "theme" }
							items: Array<
								{
									id: string
									heading: string
									text: string
									icon: { inline: string } & { __typename: "icon_Icon" }
									button: { text: string; target: string; href: string } & {
										__typename: "linkField_Link"
									}
								} & { __typename: "items_BlockType" }
							>
					  } & { __typename: "panels_iconGrid_BlockType" })
					| ({
							id: string
							text: string
							heading: string
							button: { text: string; target: string; href: string } & {
								__typename: "linkField_Link"
							}
							logo: Array<
								{ width: number; height: number; src: string; alt: string } & {
									__typename:
										| "documents_Asset"
										| "embed_Asset"
										| "images_Asset"
										| "video_Asset"
								}
							>
					  } & { __typename: "panels_intro_BlockType" })
					| ({
							id: string
							heading: string
							blocks: Array<
								{
									id: string
									text: string
									image: Array<
										{
											width: number
											height: number
											src: string
											alt: string
										} & {
											__typename:
												| "documents_Asset"
												| "embed_Asset"
												| "images_Asset"
												| "video_Asset"
										}
									>
									button: { text: string; target: string; href: string } & {
										__typename: "linkField_Link"
									}
								} & { __typename: "blocks_BlockType" }
							>
					  } & { __typename: "panels_longForm_BlockType" })
					| ({
							id: string
							product: Array<
								| {
										__typename:
											| "blog_blog_Entry"
											| "clients_default_Entry"
											| "faqs_default_Entry"
											| "home_home_Entry"
											| "listing_listing_Entry"
											| "ourClients_ourClients_Entry"
											| "pages_pages_Entry"
											| "partners_default_Entry"
											| "products_products_Entry"
											| "quotes_default_Entry"
								  }
								| ({
										coverClaims: string
										additionalProtection: string
										tip: string
										needs: string
										slug: string
										id: string
										title: string
										blurb: string
										uri: string
										expanded: boolean
										icon: { inline: string } & { __typename: "icon_Icon" }
								  } & { __typename: "productDetails_default_Entry" })
							>
					  } & { __typename: "panels_product_BlockType" })
					| ({
							id: string
							sectionLabel: string
							collection: Array<
								{
									heading: string
									id: string
									text: string
									products: Array<
										| {
												__typename:
													| "blog_blog_Entry"
													| "clients_default_Entry"
													| "faqs_default_Entry"
													| "home_home_Entry"
													| "listing_listing_Entry"
													| "ourClients_ourClients_Entry"
													| "pages_pages_Entry"
													| "partners_default_Entry"
													| "products_products_Entry"
													| "quotes_default_Entry"
										  }
										| ({
												slug: string
												id: string
												title: string
												blurb: string
												uri: string
												expanded: boolean
												icon: { inline: string } & { __typename: "icon_Icon" }
										  } & { __typename: "productDetails_default_Entry" })
									>
								} & { __typename: "collection_BlockType" }
							>
					  } & { __typename: "panels_products_BlockType" })
					| ({
							id: string
							heading: string
							button: { text: string; target: string; href: string } & {
								__typename: "linkField_Link"
							}
							quote: Array<
								| {
										__typename:
											| "blog_blog_Entry"
											| "clients_default_Entry"
											| "faqs_default_Entry"
											| "home_home_Entry"
											| "listing_listing_Entry"
											| "ourClients_ourClients_Entry"
											| "pages_pages_Entry"
											| "partners_default_Entry"
											| "productDetails_default_Entry"
											| "products_products_Entry"
								  }
								| ({
										id: string
										text: string
										richText: string
										image: Array<
											{
												width: number
												height: number
												src: string
												alt: string
											} & {
												__typename:
													| "documents_Asset"
													| "embed_Asset"
													| "images_Asset"
													| "video_Asset"
											}
										>
								  } & { __typename: "quotes_default_Entry" })
							>
					  } & { __typename: "panels_quote_BlockType" })
					| ({
							id: string
							heading: string
							text: string
							hash: string
							sectionLabel: string
							columns: Array<
								{ id: string; text: string; heading: string } & {
									__typename: "columns_BlockType"
								}
							>
					  } & { __typename: "panels_textGrid_BlockType" })
					| ({
							id: string
							text: string
							button: { text: string; target: string; href: string } & {
								__typename: "linkField_Link"
							}
					  } & { __typename: "panels_text_BlockType" })
				>
		  } & { __typename: "partners_default_Entry" })
} & { __typename: "Query" }

export type PartnerSlugFragment = { slug: string } & {
	__typename: "partners_default_Entry"
}

export type PartnersListQueryQueryVariables = Exact<{ [key: string]: never }>

export type PartnersListQueryQuery = {
	entries: Array<
		| {
				__typename:
					| "blog_blog_Entry"
					| "clients_default_Entry"
					| "faqs_default_Entry"
					| "home_home_Entry"
					| "listing_listing_Entry"
					| "ourClients_ourClients_Entry"
					| "pages_pages_Entry"
					| "productDetails_default_Entry"
					| "products_products_Entry"
					| "quotes_default_Entry"
		  }
		| ({ slug: string } & { __typename: "partners_default_Entry" })
	>
} & { __typename: "Query" }

export type ProductSingleFragment = {
	hideContactForm: boolean
	seo: {
		metaTitleContainer: string
		metaTagContainer: string
		metaSiteVarsContainer: string
		metaLinkContainer: string
		metaJsonLdContainer: string
	} & { __typename: "SeomaticType" }
	hero: Array<
		{
			id: string
			heading: string
			text: string
			image: Array<
				{ width: number; height: number; src: string; alt: string } & {
					__typename:
						| "documents_Asset"
						| "embed_Asset"
						| "images_Asset"
						| "video_Asset"
				}
			>
			button: { text: string; target: string; href: string } & {
				__typename: "linkField_Link"
			}
		} & { __typename: "hero_BlockType" }
	>
	panels: Array<
		| ({
				id: string
				heading: string
				text: string
				image: Array<
					{ width: number; height: number; src: string; alt: string } & {
						__typename:
							| "documents_Asset"
							| "embed_Asset"
							| "images_Asset"
							| "video_Asset"
					}
				>
				button: { text: string; target: string; href: string } & {
					__typename: "linkField_Link"
				}
				theme: { color: Array<string> } & { __typename: "theme" }
		  } & { __typename: "panels_banner_BlockType" })
		| ({
				id: string
				heading: string
				text: string
				sectionLabel: string
				form: Array<
					{
						id: string
						title: string
						handle: string
						siteId: number
						settings: {
							submitActionMessageHtml: string
							errorMessageHtml: string
						} & { __typename: "FormSettingsType" }
						pages: Array<
							{
								name: string
								id: string
								settings: {
									submitButtonLabel: string
									backButtonLabel: string
									showBackButton: boolean
									buttonsPosition: string
								} & { __typename: "PageSettingsType" }
								rows: Array<
									{
										id: string
										rowFields: Array<
											| ({
													id: string
													name: string
													labelPosition: string
													handle: string
													instructions: string
													required: boolean
													type: string
													typeName: string
													inputTypeName: string
													placeholder: string
													errorMessage: string
													displayName: string
													defaultState: boolean
													checkedValue: string
													uncheckedValue: string
													description: string
													label: string
											  } & { __typename: "Field_Agree" })
											| ({
													id: string
													name: string
													labelPosition: string
													handle: string
													instructions: string
													required: boolean
													type: string
													typeName: string
													inputTypeName: string
													placeholder: string
													errorMessage: string
													displayName: string
													label: string
											  } & {
													__typename:
														| "Field_Calculations"
														| "Field_Date"
														| "Field_FileUpload"
														| "Field_Password"
														| "Field_Payment"
														| "Field_Signature"
														| "Field_Summary"
											  })
											| ({
													id: string
													name: string
													labelPosition: string
													handle: string
													instructions: string
													required: boolean
													type: string
													typeName: string
													inputTypeName: string
													placeholder: string
													errorMessage: string
													displayName: string
													defaultValue: string
													layout: string
													toggleCheckbox: string
													toggleCheckboxLabel: string
													label: string
													options: Array<
														{ label: string; value: string } & {
															__typename: "FieldOption"
														}
													>
											  } & { __typename: "Field_Checkboxes" })
											| ({
													id: string
													name: string
													labelPosition: string
													handle: string
													instructions: string
													required: boolean
													type: string
													typeName: string
													inputTypeName: string
													placeholder: string
													errorMessage: string
													displayName: string
													multi: boolean
													defaultValue: string
													label: string
													options: Array<
														{ label: string; value: string } & {
															__typename: "FieldOption"
														}
													>
											  } & { __typename: "Field_Dropdown" })
											| ({
													id: string
													name: string
													labelPosition: string
													handle: string
													instructions: string
													required: boolean
													type: string
													typeName: string
													inputTypeName: string
													placeholder: string
													errorMessage: string
													displayName: string
													defaultValue: string
													label: string
											  } & {
													__typename:
														| "Field_Email"
														| "Field_MultiLineText"
														| "Field_SingleLineText"
											  })
											| ({
													id: string
													name: string
													labelPosition: string
													handle: string
													instructions: string
													required: boolean
													type: string
													typeName: string
													inputTypeName: string
													placeholder: string
													errorMessage: string
													displayName: string
													defaultValue: string
													defaultOption: string
													queryParameter: string
													cookieName: string
													label: string
											  } & { __typename: "Field_Hidden" })
											| ({
													id: string
													name: string
													labelPosition: string
													handle: string
													instructions: string
													required: boolean
													type: string
													typeName: string
													inputTypeName: string
													placeholder: string
													errorMessage: string
													displayName: string
													min: number
													max: number
													label: string
											  } & { __typename: "Field_Number" })
											| ({
													id: string
													name: string
													labelPosition: string
													handle: string
													instructions: string
													required: boolean
													type: string
													typeName: string
													inputTypeName: string
													placeholder: string
													errorMessage: string
													displayName: string
													defaultValue: string
													countryEnabled: boolean
													countryDefaultValue: string
													countryShowDialCode: boolean
													label: string
													countryOptions: Array<
														{ label: string; value: string } & {
															__typename: "FieldAttribute"
														}
													>
											  } & { __typename: "Field_Phone" })
											| ({
													id: string
													name: string
													labelPosition: string
													handle: string
													instructions: string
													required: boolean
													type: string
													typeName: string
													inputTypeName: string
													placeholder: string
													errorMessage: string
													displayName: string
													layout: string
													label: string
													options: Array<
														{ label: string; value: string } & {
															__typename: "FieldOption"
														}
													>
											  } & { __typename: "Field_Radio" })
										>
									} & { __typename: "RowType" }
								>
							} & { __typename: "PageType" }
						>
					} & { __typename: "contact_Form" }
				>
		  } & { __typename: "panels_form_BlockType" })
		| ({
				id: string
				heading: string
				theme: { color: Array<string> } & { __typename: "theme" }
				items: Array<
					{
						id: string
						heading: string
						text: string
						icon: { inline: string } & { __typename: "icon_Icon" }
						button: { text: string; target: string; href: string } & {
							__typename: "linkField_Link"
						}
					} & { __typename: "items_BlockType" }
				>
		  } & { __typename: "panels_iconGrid_BlockType" })
		| ({
				id: string
				text: string
				heading: string
				button: { text: string; target: string; href: string } & {
					__typename: "linkField_Link"
				}
				logo: Array<
					{ width: number; height: number; src: string; alt: string } & {
						__typename:
							| "documents_Asset"
							| "embed_Asset"
							| "images_Asset"
							| "video_Asset"
					}
				>
		  } & { __typename: "panels_intro_BlockType" })
		| ({
				id: string
				heading: string
				blocks: Array<
					{
						id: string
						text: string
						image: Array<
							{ width: number; height: number; src: string; alt: string } & {
								__typename:
									| "documents_Asset"
									| "embed_Asset"
									| "images_Asset"
									| "video_Asset"
							}
						>
						button: { text: string; target: string; href: string } & {
							__typename: "linkField_Link"
						}
					} & { __typename: "blocks_BlockType" }
				>
		  } & { __typename: "panels_longForm_BlockType" })
		| ({
				id: string
				product: Array<
					| {
							__typename:
								| "blog_blog_Entry"
								| "clients_default_Entry"
								| "faqs_default_Entry"
								| "home_home_Entry"
								| "listing_listing_Entry"
								| "ourClients_ourClients_Entry"
								| "pages_pages_Entry"
								| "partners_default_Entry"
								| "products_products_Entry"
								| "quotes_default_Entry"
					  }
					| ({
							coverClaims: string
							additionalProtection: string
							tip: string
							needs: string
							slug: string
							id: string
							title: string
							blurb: string
							uri: string
							expanded: boolean
							icon: { inline: string } & { __typename: "icon_Icon" }
					  } & { __typename: "productDetails_default_Entry" })
				>
		  } & { __typename: "panels_product_BlockType" })
		| ({
				id: string
				sectionLabel: string
				collection: Array<
					{
						heading: string
						id: string
						text: string
						products: Array<
							| {
									__typename:
										| "blog_blog_Entry"
										| "clients_default_Entry"
										| "faqs_default_Entry"
										| "home_home_Entry"
										| "listing_listing_Entry"
										| "ourClients_ourClients_Entry"
										| "pages_pages_Entry"
										| "partners_default_Entry"
										| "products_products_Entry"
										| "quotes_default_Entry"
							  }
							| ({
									slug: string
									id: string
									title: string
									blurb: string
									uri: string
									expanded: boolean
									icon: { inline: string } & { __typename: "icon_Icon" }
							  } & { __typename: "productDetails_default_Entry" })
						>
					} & { __typename: "collection_BlockType" }
				>
		  } & { __typename: "panels_products_BlockType" })
		| ({
				id: string
				heading: string
				button: { text: string; target: string; href: string } & {
					__typename: "linkField_Link"
				}
				quote: Array<
					| {
							__typename:
								| "blog_blog_Entry"
								| "clients_default_Entry"
								| "faqs_default_Entry"
								| "home_home_Entry"
								| "listing_listing_Entry"
								| "ourClients_ourClients_Entry"
								| "pages_pages_Entry"
								| "partners_default_Entry"
								| "productDetails_default_Entry"
								| "products_products_Entry"
					  }
					| ({
							id: string
							text: string
							richText: string
							image: Array<
								{ width: number; height: number; src: string; alt: string } & {
									__typename:
										| "documents_Asset"
										| "embed_Asset"
										| "images_Asset"
										| "video_Asset"
								}
							>
					  } & { __typename: "quotes_default_Entry" })
				>
		  } & { __typename: "panels_quote_BlockType" })
		| ({
				id: string
				heading: string
				text: string
				hash: string
				sectionLabel: string
				columns: Array<
					{ id: string; text: string; heading: string } & {
						__typename: "columns_BlockType"
					}
				>
		  } & { __typename: "panels_textGrid_BlockType" })
		| ({
				id: string
				text: string
				button: { text: string; target: string; href: string } & {
					__typename: "linkField_Link"
				}
		  } & { __typename: "panels_text_BlockType" })
	>
} & { __typename: "products_products_Entry" }

export type ProductSingleQueryQueryVariables = Exact<{ [key: string]: never }>

export type ProductSingleQueryQuery = {
	entry:
		| {
				__typename:
					| "blog_blog_Entry"
					| "clients_default_Entry"
					| "faqs_default_Entry"
					| "home_home_Entry"
					| "listing_listing_Entry"
					| "ourClients_ourClients_Entry"
					| "pages_pages_Entry"
					| "partners_default_Entry"
					| "productDetails_default_Entry"
					| "quotes_default_Entry"
		  }
		| ({
				hideContactForm: boolean
				seo: {
					metaTitleContainer: string
					metaTagContainer: string
					metaSiteVarsContainer: string
					metaLinkContainer: string
					metaJsonLdContainer: string
				} & { __typename: "SeomaticType" }
				hero: Array<
					{
						id: string
						heading: string
						text: string
						image: Array<
							{ width: number; height: number; src: string; alt: string } & {
								__typename:
									| "documents_Asset"
									| "embed_Asset"
									| "images_Asset"
									| "video_Asset"
							}
						>
						button: { text: string; target: string; href: string } & {
							__typename: "linkField_Link"
						}
					} & { __typename: "hero_BlockType" }
				>
				panels: Array<
					| ({
							id: string
							heading: string
							text: string
							image: Array<
								{ width: number; height: number; src: string; alt: string } & {
									__typename:
										| "documents_Asset"
										| "embed_Asset"
										| "images_Asset"
										| "video_Asset"
								}
							>
							button: { text: string; target: string; href: string } & {
								__typename: "linkField_Link"
							}
							theme: { color: Array<string> } & { __typename: "theme" }
					  } & { __typename: "panels_banner_BlockType" })
					| ({
							id: string
							heading: string
							text: string
							sectionLabel: string
							form: Array<
								{
									id: string
									title: string
									handle: string
									siteId: number
									settings: {
										submitActionMessageHtml: string
										errorMessageHtml: string
									} & { __typename: "FormSettingsType" }
									pages: Array<
										{
											name: string
											id: string
											settings: {
												submitButtonLabel: string
												backButtonLabel: string
												showBackButton: boolean
												buttonsPosition: string
											} & { __typename: "PageSettingsType" }
											rows: Array<
												{
													id: string
													rowFields: Array<
														| ({
																id: string
																name: string
																labelPosition: string
																handle: string
																instructions: string
																required: boolean
																type: string
																typeName: string
																inputTypeName: string
																placeholder: string
																errorMessage: string
																displayName: string
																defaultState: boolean
																checkedValue: string
																uncheckedValue: string
																description: string
																label: string
														  } & { __typename: "Field_Agree" })
														| ({
																id: string
																name: string
																labelPosition: string
																handle: string
																instructions: string
																required: boolean
																type: string
																typeName: string
																inputTypeName: string
																placeholder: string
																errorMessage: string
																displayName: string
																label: string
														  } & {
																__typename:
																	| "Field_Calculations"
																	| "Field_Date"
																	| "Field_FileUpload"
																	| "Field_Password"
																	| "Field_Payment"
																	| "Field_Signature"
																	| "Field_Summary"
														  })
														| ({
																id: string
																name: string
																labelPosition: string
																handle: string
																instructions: string
																required: boolean
																type: string
																typeName: string
																inputTypeName: string
																placeholder: string
																errorMessage: string
																displayName: string
																defaultValue: string
																layout: string
																toggleCheckbox: string
																toggleCheckboxLabel: string
																label: string
																options: Array<
																	{ label: string; value: string } & {
																		__typename: "FieldOption"
																	}
																>
														  } & { __typename: "Field_Checkboxes" })
														| ({
																id: string
																name: string
																labelPosition: string
																handle: string
																instructions: string
																required: boolean
																type: string
																typeName: string
																inputTypeName: string
																placeholder: string
																errorMessage: string
																displayName: string
																multi: boolean
																defaultValue: string
																label: string
																options: Array<
																	{ label: string; value: string } & {
																		__typename: "FieldOption"
																	}
																>
														  } & { __typename: "Field_Dropdown" })
														| ({
																id: string
																name: string
																labelPosition: string
																handle: string
																instructions: string
																required: boolean
																type: string
																typeName: string
																inputTypeName: string
																placeholder: string
																errorMessage: string
																displayName: string
																defaultValue: string
																label: string
														  } & {
																__typename:
																	| "Field_Email"
																	| "Field_MultiLineText"
																	| "Field_SingleLineText"
														  })
														| ({
																id: string
																name: string
																labelPosition: string
																handle: string
																instructions: string
																required: boolean
																type: string
																typeName: string
																inputTypeName: string
																placeholder: string
																errorMessage: string
																displayName: string
																defaultValue: string
																defaultOption: string
																queryParameter: string
																cookieName: string
																label: string
														  } & { __typename: "Field_Hidden" })
														| ({
																id: string
																name: string
																labelPosition: string
																handle: string
																instructions: string
																required: boolean
																type: string
																typeName: string
																inputTypeName: string
																placeholder: string
																errorMessage: string
																displayName: string
																min: number
																max: number
																label: string
														  } & { __typename: "Field_Number" })
														| ({
																id: string
																name: string
																labelPosition: string
																handle: string
																instructions: string
																required: boolean
																type: string
																typeName: string
																inputTypeName: string
																placeholder: string
																errorMessage: string
																displayName: string
																defaultValue: string
																countryEnabled: boolean
																countryDefaultValue: string
																countryShowDialCode: boolean
																label: string
																countryOptions: Array<
																	{ label: string; value: string } & {
																		__typename: "FieldAttribute"
																	}
																>
														  } & { __typename: "Field_Phone" })
														| ({
																id: string
																name: string
																labelPosition: string
																handle: string
																instructions: string
																required: boolean
																type: string
																typeName: string
																inputTypeName: string
																placeholder: string
																errorMessage: string
																displayName: string
																layout: string
																label: string
																options: Array<
																	{ label: string; value: string } & {
																		__typename: "FieldOption"
																	}
																>
														  } & { __typename: "Field_Radio" })
													>
												} & { __typename: "RowType" }
											>
										} & { __typename: "PageType" }
									>
								} & { __typename: "contact_Form" }
							>
					  } & { __typename: "panels_form_BlockType" })
					| ({
							id: string
							heading: string
							theme: { color: Array<string> } & { __typename: "theme" }
							items: Array<
								{
									id: string
									heading: string
									text: string
									icon: { inline: string } & { __typename: "icon_Icon" }
									button: { text: string; target: string; href: string } & {
										__typename: "linkField_Link"
									}
								} & { __typename: "items_BlockType" }
							>
					  } & { __typename: "panels_iconGrid_BlockType" })
					| ({
							id: string
							text: string
							heading: string
							button: { text: string; target: string; href: string } & {
								__typename: "linkField_Link"
							}
							logo: Array<
								{ width: number; height: number; src: string; alt: string } & {
									__typename:
										| "documents_Asset"
										| "embed_Asset"
										| "images_Asset"
										| "video_Asset"
								}
							>
					  } & { __typename: "panels_intro_BlockType" })
					| ({
							id: string
							heading: string
							blocks: Array<
								{
									id: string
									text: string
									image: Array<
										{
											width: number
											height: number
											src: string
											alt: string
										} & {
											__typename:
												| "documents_Asset"
												| "embed_Asset"
												| "images_Asset"
												| "video_Asset"
										}
									>
									button: { text: string; target: string; href: string } & {
										__typename: "linkField_Link"
									}
								} & { __typename: "blocks_BlockType" }
							>
					  } & { __typename: "panels_longForm_BlockType" })
					| ({
							id: string
							product: Array<
								| {
										__typename:
											| "blog_blog_Entry"
											| "clients_default_Entry"
											| "faqs_default_Entry"
											| "home_home_Entry"
											| "listing_listing_Entry"
											| "ourClients_ourClients_Entry"
											| "pages_pages_Entry"
											| "partners_default_Entry"
											| "products_products_Entry"
											| "quotes_default_Entry"
								  }
								| ({
										coverClaims: string
										additionalProtection: string
										tip: string
										needs: string
										slug: string
										id: string
										title: string
										blurb: string
										uri: string
										expanded: boolean
										icon: { inline: string } & { __typename: "icon_Icon" }
								  } & { __typename: "productDetails_default_Entry" })
							>
					  } & { __typename: "panels_product_BlockType" })
					| ({
							id: string
							sectionLabel: string
							collection: Array<
								{
									heading: string
									id: string
									text: string
									products: Array<
										| {
												__typename:
													| "blog_blog_Entry"
													| "clients_default_Entry"
													| "faqs_default_Entry"
													| "home_home_Entry"
													| "listing_listing_Entry"
													| "ourClients_ourClients_Entry"
													| "pages_pages_Entry"
													| "partners_default_Entry"
													| "products_products_Entry"
													| "quotes_default_Entry"
										  }
										| ({
												slug: string
												id: string
												title: string
												blurb: string
												uri: string
												expanded: boolean
												icon: { inline: string } & { __typename: "icon_Icon" }
										  } & { __typename: "productDetails_default_Entry" })
									>
								} & { __typename: "collection_BlockType" }
							>
					  } & { __typename: "panels_products_BlockType" })
					| ({
							id: string
							heading: string
							button: { text: string; target: string; href: string } & {
								__typename: "linkField_Link"
							}
							quote: Array<
								| {
										__typename:
											| "blog_blog_Entry"
											| "clients_default_Entry"
											| "faqs_default_Entry"
											| "home_home_Entry"
											| "listing_listing_Entry"
											| "ourClients_ourClients_Entry"
											| "pages_pages_Entry"
											| "partners_default_Entry"
											| "productDetails_default_Entry"
											| "products_products_Entry"
								  }
								| ({
										id: string
										text: string
										richText: string
										image: Array<
											{
												width: number
												height: number
												src: string
												alt: string
											} & {
												__typename:
													| "documents_Asset"
													| "embed_Asset"
													| "images_Asset"
													| "video_Asset"
											}
										>
								  } & { __typename: "quotes_default_Entry" })
							>
					  } & { __typename: "panels_quote_BlockType" })
					| ({
							id: string
							heading: string
							text: string
							hash: string
							sectionLabel: string
							columns: Array<
								{ id: string; text: string; heading: string } & {
									__typename: "columns_BlockType"
								}
							>
					  } & { __typename: "panels_textGrid_BlockType" })
					| ({
							id: string
							text: string
							button: { text: string; target: string; href: string } & {
								__typename: "linkField_Link"
							}
					  } & { __typename: "panels_text_BlockType" })
				>
		  } & { __typename: "products_products_Entry" })
} & { __typename: "Query" }

export type ProductSummaryQuestionFragment = {
	heading: string
	text: string
	id: string
} & { __typename: "questions_BlockType" }

export type ProductSummaryBlockFragment = {
	id: string
	price: string
	questions: Array<
		{ heading: string; text: string; id: string } & {
			__typename: "questions_BlockType"
		}
	>
} & { __typename: "productBlocks_summary_BlockType" }

export type UseCaseBlockFragment = { text: string; id: string } & {
	__typename: "productBlocks_useCase_BlockType"
}

export type QuoteProductBlockFragment = {
	id: string
	button: { text: string; target: string; href: string } & {
		__typename: "linkField_Link"
	}
	quote: Array<
		| {
				__typename:
					| "blog_blog_Entry"
					| "clients_default_Entry"
					| "faqs_default_Entry"
					| "home_home_Entry"
					| "listing_listing_Entry"
					| "ourClients_ourClients_Entry"
					| "pages_pages_Entry"
					| "partners_default_Entry"
					| "productDetails_default_Entry"
					| "products_products_Entry"
		  }
		| ({
				id: string
				text: string
				richText: string
				image: Array<
					{ width: number; height: number; src: string; alt: string } & {
						__typename:
							| "documents_Asset"
							| "embed_Asset"
							| "images_Asset"
							| "video_Asset"
					}
				>
		  } & { __typename: "quotes_default_Entry" })
	>
} & { __typename: "productBlocks_quote_BlockType" }

export type FaqFragment = { id: string; question: string; answer: string } & {
	__typename: "faqs_default_Entry"
}

export type FaqBlockFragment = {
	id: string
	questions: Array<
		| {
				__typename:
					| "blog_blog_Entry"
					| "clients_default_Entry"
					| "home_home_Entry"
					| "listing_listing_Entry"
					| "ourClients_ourClients_Entry"
					| "pages_pages_Entry"
					| "partners_default_Entry"
					| "productDetails_default_Entry"
					| "products_products_Entry"
					| "quotes_default_Entry"
		  }
		| ({ id: string; question: string; answer: string } & {
				__typename: "faqs_default_Entry"
		  })
	>
} & { __typename: "productBlocks_faqs_BlockType" }

export type ProductBannerFragment = {
	id: string
	heading: string
	text: string
	image: Array<
		{ width: number; height: number; src: string; alt: string } & {
			__typename:
				| "documents_Asset"
				| "embed_Asset"
				| "images_Asset"
				| "video_Asset"
		}
	>
	button: { text: string; target: string; href: string } & {
		__typename: "linkField_Link"
	}
	theme: { color: Array<string> } & { __typename: "theme" }
} & { __typename: "productBlocks_banner_BlockType" }

export type LinksFragment = {
	id: string
	button: { text: string; target: string; href: string } & {
		__typename: "linkField_Link"
	}
} & { __typename: "links_BlockType" }

export type ProductFragment = {
	id: string
	slug: string
	title: string
	blurb: string
	intro: string
	uri: string
	expanded: boolean
	hideContactForm: boolean
	seo: {
		metaTitleContainer: string
		metaTagContainer: string
		metaSiteVarsContainer: string
		metaLinkContainer: string
		metaJsonLdContainer: string
	} & { __typename: "SeomaticType" }
	category: Array<
		{ title: string } & { __typename: "blog_Category" | "products_Category" }
	>
	icon: { inline: string } & { __typename: "icon_Icon" }
	links: Array<
		{
			id: string
			button: { text: string; target: string; href: string } & {
				__typename: "linkField_Link"
			}
		} & { __typename: "links_BlockType" }
	>
	relatedInsights: Array<
		| ({
				id: string
				uri: string
				title: string
				colour1: string
				colour2: string
				theme: { color: Array<string> } & { __typename: "theme" }
				image: Array<
					{ src: string; width: number; height: number; alt: string } & {
						__typename:
							| "documents_Asset"
							| "embed_Asset"
							| "images_Asset"
							| "video_Asset"
					}
				>
				category: Array<
					| ({ title: string; id: string } & { __typename: "blog_Category" })
					| { __typename: "products_Category" }
				>
		  } & { __typename: "blog_blog_Entry" })
		| {
				__typename:
					| "clients_default_Entry"
					| "faqs_default_Entry"
					| "home_home_Entry"
					| "listing_listing_Entry"
					| "ourClients_ourClients_Entry"
					| "pages_pages_Entry"
					| "partners_default_Entry"
					| "productDetails_default_Entry"
					| "products_products_Entry"
					| "quotes_default_Entry"
		  }
	>
	productBlocks: Array<
		| ({
				id: string
				heading: string
				text: string
				image: Array<
					{ width: number; height: number; src: string; alt: string } & {
						__typename:
							| "documents_Asset"
							| "embed_Asset"
							| "images_Asset"
							| "video_Asset"
					}
				>
				button: { text: string; target: string; href: string } & {
					__typename: "linkField_Link"
				}
				theme: { color: Array<string> } & { __typename: "theme" }
		  } & { __typename: "productBlocks_banner_BlockType" })
		| ({
				id: string
				questions: Array<
					| {
							__typename:
								| "blog_blog_Entry"
								| "clients_default_Entry"
								| "home_home_Entry"
								| "listing_listing_Entry"
								| "ourClients_ourClients_Entry"
								| "pages_pages_Entry"
								| "partners_default_Entry"
								| "productDetails_default_Entry"
								| "products_products_Entry"
								| "quotes_default_Entry"
					  }
					| ({ id: string; question: string; answer: string } & {
							__typename: "faqs_default_Entry"
					  })
				>
		  } & { __typename: "productBlocks_faqs_BlockType" })
		| ({
				id: string
				button: { text: string; target: string; href: string } & {
					__typename: "linkField_Link"
				}
				quote: Array<
					| {
							__typename:
								| "blog_blog_Entry"
								| "clients_default_Entry"
								| "faqs_default_Entry"
								| "home_home_Entry"
								| "listing_listing_Entry"
								| "ourClients_ourClients_Entry"
								| "pages_pages_Entry"
								| "partners_default_Entry"
								| "productDetails_default_Entry"
								| "products_products_Entry"
					  }
					| ({
							id: string
							text: string
							richText: string
							image: Array<
								{ width: number; height: number; src: string; alt: string } & {
									__typename:
										| "documents_Asset"
										| "embed_Asset"
										| "images_Asset"
										| "video_Asset"
								}
							>
					  } & { __typename: "quotes_default_Entry" })
				>
		  } & { __typename: "productBlocks_quote_BlockType" })
		| ({
				id: string
				price: string
				questions: Array<
					{ heading: string; text: string; id: string } & {
						__typename: "questions_BlockType"
					}
				>
		  } & { __typename: "productBlocks_summary_BlockType" })
		| ({ text: string; id: string } & {
				__typename: "productBlocks_useCase_BlockType"
		  })
	>
} & { __typename: "productDetails_default_Entry" }

export type ProductEntryQueryVariables = Exact<{
	slug: InputMaybe<
		Array<InputMaybe<Scalars["String"]>> | InputMaybe<Scalars["String"]>
	>
}>

export type ProductEntryQuery = {
	entry:
		| {
				__typename:
					| "blog_blog_Entry"
					| "clients_default_Entry"
					| "faqs_default_Entry"
					| "home_home_Entry"
					| "listing_listing_Entry"
					| "ourClients_ourClients_Entry"
					| "pages_pages_Entry"
					| "partners_default_Entry"
					| "products_products_Entry"
					| "quotes_default_Entry"
		  }
		| ({
				id: string
				slug: string
				title: string
				blurb: string
				intro: string
				uri: string
				expanded: boolean
				hideContactForm: boolean
				seo: {
					metaTitleContainer: string
					metaTagContainer: string
					metaSiteVarsContainer: string
					metaLinkContainer: string
					metaJsonLdContainer: string
				} & { __typename: "SeomaticType" }
				category: Array<
					{ title: string } & {
						__typename: "blog_Category" | "products_Category"
					}
				>
				icon: { inline: string } & { __typename: "icon_Icon" }
				links: Array<
					{
						id: string
						button: { text: string; target: string; href: string } & {
							__typename: "linkField_Link"
						}
					} & { __typename: "links_BlockType" }
				>
				relatedInsights: Array<
					| ({
							id: string
							uri: string
							title: string
							colour1: string
							colour2: string
							theme: { color: Array<string> } & { __typename: "theme" }
							image: Array<
								{ src: string; width: number; height: number; alt: string } & {
									__typename:
										| "documents_Asset"
										| "embed_Asset"
										| "images_Asset"
										| "video_Asset"
								}
							>
							category: Array<
								| ({ title: string; id: string } & {
										__typename: "blog_Category"
								  })
								| { __typename: "products_Category" }
							>
					  } & { __typename: "blog_blog_Entry" })
					| {
							__typename:
								| "clients_default_Entry"
								| "faqs_default_Entry"
								| "home_home_Entry"
								| "listing_listing_Entry"
								| "ourClients_ourClients_Entry"
								| "pages_pages_Entry"
								| "partners_default_Entry"
								| "productDetails_default_Entry"
								| "products_products_Entry"
								| "quotes_default_Entry"
					  }
				>
				productBlocks: Array<
					| ({
							id: string
							heading: string
							text: string
							image: Array<
								{ width: number; height: number; src: string; alt: string } & {
									__typename:
										| "documents_Asset"
										| "embed_Asset"
										| "images_Asset"
										| "video_Asset"
								}
							>
							button: { text: string; target: string; href: string } & {
								__typename: "linkField_Link"
							}
							theme: { color: Array<string> } & { __typename: "theme" }
					  } & { __typename: "productBlocks_banner_BlockType" })
					| ({
							id: string
							questions: Array<
								| {
										__typename:
											| "blog_blog_Entry"
											| "clients_default_Entry"
											| "home_home_Entry"
											| "listing_listing_Entry"
											| "ourClients_ourClients_Entry"
											| "pages_pages_Entry"
											| "partners_default_Entry"
											| "productDetails_default_Entry"
											| "products_products_Entry"
											| "quotes_default_Entry"
								  }
								| ({ id: string; question: string; answer: string } & {
										__typename: "faqs_default_Entry"
								  })
							>
					  } & { __typename: "productBlocks_faqs_BlockType" })
					| ({
							id: string
							button: { text: string; target: string; href: string } & {
								__typename: "linkField_Link"
							}
							quote: Array<
								| {
										__typename:
											| "blog_blog_Entry"
											| "clients_default_Entry"
											| "faqs_default_Entry"
											| "home_home_Entry"
											| "listing_listing_Entry"
											| "ourClients_ourClients_Entry"
											| "pages_pages_Entry"
											| "partners_default_Entry"
											| "productDetails_default_Entry"
											| "products_products_Entry"
								  }
								| ({
										id: string
										text: string
										richText: string
										image: Array<
											{
												width: number
												height: number
												src: string
												alt: string
											} & {
												__typename:
													| "documents_Asset"
													| "embed_Asset"
													| "images_Asset"
													| "video_Asset"
											}
										>
								  } & { __typename: "quotes_default_Entry" })
							>
					  } & { __typename: "productBlocks_quote_BlockType" })
					| ({
							id: string
							price: string
							questions: Array<
								{ heading: string; text: string; id: string } & {
									__typename: "questions_BlockType"
								}
							>
					  } & { __typename: "productBlocks_summary_BlockType" })
					| ({ text: string; id: string } & {
							__typename: "productBlocks_useCase_BlockType"
					  })
				>
		  } & { __typename: "productDetails_default_Entry" })
} & { __typename: "Query" }

export type ProductPathFragment = { slug: string } & {
	__typename: "productDetails_default_Entry"
}

export type ProductPathsQueryVariables = Exact<{ [key: string]: never }>

export type ProductPathsQuery = {
	entries: Array<
		| {
				__typename:
					| "blog_blog_Entry"
					| "clients_default_Entry"
					| "faqs_default_Entry"
					| "home_home_Entry"
					| "listing_listing_Entry"
					| "ourClients_ourClients_Entry"
					| "pages_pages_Entry"
					| "partners_default_Entry"
					| "products_products_Entry"
					| "quotes_default_Entry"
		  }
		| ({ slug: string } & { __typename: "productDetails_default_Entry" })
	>
} & { __typename: "Query" }

export const BlogSlugFragmentDoc = gql`
	fragment BlogSlug on blog_blog_Entry {
		slug
	}
`
export const SeoFragmentDoc = gql`
	fragment SEO on SeomaticType {
		metaTitleContainer
		metaTagContainer
		metaSiteVarsContainer
		metaLinkContainer
		metaJsonLdContainer
	}
`
export const ListingFragmentDoc = gql`
	fragment Listing on listing_listing_Entry {
		seo: seomatic(asArray: true) {
			...SEO
		}
		heading @markdown(inlineOnly: true)
		richText
	}
	${SeoFragmentDoc}
`
export const ThemeFragmentDoc = gql`
	fragment Theme on theme {
		color
	}
`
export const BlogCategoryFragmentDoc = gql`
	fragment BlogCategory on blog_Category {
		title
		id
	}
`
export const BlogPagerFragmentDoc = gql`
	fragment BlogPager on blog_blog_Entry {
		title
		uri
	}
`
export const TextBlockFragmentDoc = gql`
	fragment TextBlock on blocks_text_BlockType {
		text
		id
	}
`
export const EmbedFragmentDoc = gql`
	fragment Embed on EmbeddedAsset {
		type
		providerName
		code
		url
		aspectRatio
		iframeSrc(params: "controls=1")
		width
		height
	}
`
export const AssetBlockFragmentDoc = gql`
	fragment AssetBlock on blocks_asset_BlockType {
		id
		asset {
			kind
			embeddedAsset {
				...Embed
			}
			mimeType
			src: url(transform: "post")
			width(transform: "post")
			height(transform: "post")
			alt: title
		}
	}
	${EmbedFragmentDoc}
`
export const QuoteBlockFragmentDoc = gql`
	fragment QuoteBlock on blocks_quote_BlockType {
		text
		cite
		id
	}
`
export const BlogEntryFragmentDoc = gql`
	fragment BlogEntry on blog_blog_Entry {
		seo: seomatic(asArray: true) {
			...SEO
		}
		hideContactForm
		status
		title
		theme {
			...Theme
		}
		colour1
		colour2
		richText
		category {
			...BlogCategory
		}
		next(section: "blog") {
			...BlogPager
		}
		prev(section: "blog") {
			...BlogPager
		}
		blocks {
			__typename
			...TextBlock
			...AssetBlock
			...QuoteBlock
		}
	}
	${SeoFragmentDoc}
	${ThemeFragmentDoc}
	${BlogCategoryFragmentDoc}
	${BlogPagerFragmentDoc}
	${TextBlockFragmentDoc}
	${AssetBlockFragmentDoc}
	${QuoteBlockFragmentDoc}
`
export const GlobalLegalFragmentDoc = gql`
	fragment GlobalLegal on legal_GlobalSet {
		text
	}
`
export const GlobalSocialFragmentDoc = gql`
	fragment GlobalSocial on social_GlobalSet {
		linkedin
		instagram
		twitter
	}
`
export const FieldAgreeFragmentDoc = gql`
	fragment FieldAgree on Field_Agree {
		defaultState
		checkedValue
		uncheckedValue
		description
	}
`
export const FieldCheckboxesFragmentDoc = gql`
	fragment FieldCheckboxes on Field_Checkboxes {
		defaultValue
		layout
		toggleCheckbox
		toggleCheckboxLabel
		options {
			label
			value
		}
	}
`
export const FieldDropDownFragmentDoc = gql`
	fragment FieldDropDown on Field_Dropdown {
		multi
		defaultValue
		options {
			label
			value
		}
	}
`
export const FieldEmailFragmentDoc = gql`
	fragment FieldEmail on Field_Email {
		defaultValue
	}
`
export const FieldHiddenFragmentDoc = gql`
	fragment FieldHidden on Field_Hidden {
		defaultValue
		defaultOption
		queryParameter
		cookieName
	}
`
export const FieldMultiLineTextFragmentDoc = gql`
	fragment FieldMultiLineText on Field_MultiLineText {
		defaultValue
	}
`
export const FieldNumberFragmentDoc = gql`
	fragment FieldNumber on Field_Number {
		min
		max
	}
`
export const FieldPhoneFragmentDoc = gql`
	fragment FieldPhone on Field_Phone {
		defaultValue
		countryEnabled
		countryDefaultValue
		countryShowDialCode
		countryOptions {
			label
			value
		}
	}
`
export const FieldRadioFragmentDoc = gql`
	fragment FieldRadio on Field_Radio {
		layout
		options {
			label
			value
		}
	}
`
export const FieldSingleLineTextFragmentDoc = gql`
	fragment FieldSingleLineText on Field_SingleLineText {
		defaultValue
	}
`
export const FieldFragmentFragmentDoc = gql`
	fragment FieldFragment on FieldInterface {
		__typename
		id
		name
		label: name
		labelPosition
		handle
		instructions
		required
		type
		typeName
		inputTypeName
		placeholder
		errorMessage
		displayName
		...FieldAgree
		...FieldCheckboxes
		...FieldDropDown
		...FieldEmail
		...FieldHidden
		...FieldMultiLineText
		...FieldNumber
		...FieldPhone
		...FieldRadio
		...FieldSingleLineText
	}
	${FieldAgreeFragmentDoc}
	${FieldCheckboxesFragmentDoc}
	${FieldDropDownFragmentDoc}
	${FieldEmailFragmentDoc}
	${FieldHiddenFragmentDoc}
	${FieldMultiLineTextFragmentDoc}
	${FieldNumberFragmentDoc}
	${FieldPhoneFragmentDoc}
	${FieldRadioFragmentDoc}
	${FieldSingleLineTextFragmentDoc}
`
export const FormFragmentFragmentDoc = gql`
	fragment FormFragment on FormInterface {
		id
		title
		handle
		siteId
		settings {
			submitActionMessageHtml
			errorMessageHtml
		}
		pages {
			name
			id: uid
			settings {
				submitButtonLabel
				backButtonLabel
				showBackButton
				buttonsPosition
			}
			rows {
				id
				rowFields {
					...FieldFragment
				}
			}
		}
	}
	${FieldFragmentFragmentDoc}
`
export const FooterFragmentDoc = gql`
	fragment Footer on contact_GlobalSet {
		id
		email
		telephone
		address
		heading
		richText
		form {
			...FormFragment
		}
	}
	${FormFragmentFragmentDoc}
`
export const MainMenuNodeFragmentDoc = gql`
	fragment MainMenuNode on mainMenu_Node {
		id
		title
		buttonStyle(label: false)
		href: nodeUri
	}
`
export const FooterMenuNodeFragmentDoc = gql`
	fragment FooterMenuNode on footerMenu_Node {
		id
		title
		href: nodeUri
	}
`
export const HeroSlideFragmentDoc = gql`
	fragment HeroSlide on slide_slide_BlockType {
		heading
		id
		text
	}
`
export const ButtonFragmentDoc = gql`
	fragment Button on linkField_Link {
		href: url
		text
		target
	}
`
export const TextPanelFragmentDoc = gql`
	fragment TextPanel on panels_text_BlockType {
		id
		text
		button {
			...Button
		}
	}
	${ButtonFragmentDoc}
`
export const TextGridColumnFragmentDoc = gql`
	fragment TextGridColumn on columns_BlockType {
		id
		text
		heading
	}
`
export const TextGridPanelFragmentDoc = gql`
	fragment TextGridPanel on panels_textGrid_BlockType {
		id
		heading
		text
		hash
		sectionLabel
		columns {
			...TextGridColumn
		}
	}
	${TextGridColumnFragmentDoc}
`
export const BannerImageFragmentDoc = gql`
	fragment BannerImage on AssetInterface {
		src: url(transform: "banner")
		width(transform: "banner")
		height(transform: "banner")
		alt: title
	}
`
export const BannerPanelFragmentDoc = gql`
	fragment BannerPanel on panels_banner_BlockType {
		id
		image {
			...BannerImage
		}
		heading
		text
		button {
			...Button
		}
		theme {
			...Theme
		}
	}
	${BannerImageFragmentDoc}
	${ButtonFragmentDoc}
	${ThemeFragmentDoc}
`
export const ProductTeaserFragmentDoc = gql`
	fragment ProductTeaser on productDetails_default_Entry {
		icon {
			inline
		}
		slug
		id
		title
		blurb
		uri
		expanded
	}
`
export const CollectionFragmentDoc = gql`
	fragment Collection on collection_BlockType {
		heading
		id
		text
		products {
			...ProductTeaser
		}
	}
	${ProductTeaserFragmentDoc}
`
export const ProductGridPanelFragmentDoc = gql`
	fragment ProductGridPanel on panels_products_BlockType {
		id
		sectionLabel
		collection {
			...Collection
		}
	}
	${CollectionFragmentDoc}
`
export const HomeEntryFragmentDoc = gql`
	fragment HomeEntry on home_home_Entry {
		hero: slide {
			...HeroSlide
		}
		hideContactForm
		panels {
			__typename
			...TextPanel
			...TextGridPanel
			...BannerPanel
			...ProductGridPanel
		}
		seo: seomatic(asArray: true, uri: "__home__") {
			...SEO
		}
	}
	${HeroSlideFragmentDoc}
	${TextPanelFragmentDoc}
	${TextGridPanelFragmentDoc}
	${BannerPanelFragmentDoc}
	${ProductGridPanelFragmentDoc}
	${SeoFragmentDoc}
`
export const ClientCellFragmentDoc = gql`
	fragment ClientCell on clients_default_Entry {
		richText
		clientImage {
			src: url(width: 500, height: 500, mode: "fit")
			width(width: 500, height: 500, mode: "fit")
			height(width: 500, height: 500, mode: "fit")
			alt: title
		}
		asQuote
		theme {
			...Theme
		}
		id
		image {
			src: url(width: 150, height: 150, mode: "fit")
			width(width: 150, height: 150, mode: "fit")
			height(width: 150, height: 150, mode: "fit")
			alt: title
		}
		button {
			href: url
			text
		}
		id
	}
	${ThemeFragmentDoc}
`
export const ClientGridFragmentDoc = gql`
	fragment ClientGrid on clientPanels_grid_BlockType {
		id
		clients(limit: 8) {
			...ClientCell
		}
	}
	${ClientCellFragmentDoc}
`
export const ClientLogoFragmentDoc = gql`
	fragment ClientLogo on clients_default_Entry {
		id
		image {
			src: url(width: 120, height: 120, mode: "fit")
			width(width: 120, height: 120, mode: "fit")
			height(width: 120, height: 120, mode: "fit")
			alt: title
		}
		button {
			href: url
			text
		}
	}
`
export const ClientPartnersFragmentDoc = gql`
	fragment ClientPartners on clientPanels_partners_BlockType {
		id
		subHeading
		heading @markdown(inlineOnly: true)
		clients {
			...ClientLogo
		}
	}
	${ClientLogoFragmentDoc}
`
export const QuotePanelQuoteFragmentDoc = gql`
	fragment QuotePanelQuote on quotes_default_Entry {
		id
		text
		richText
		image {
			width(width: 105)
			height(width: 105)
			src: url(width: 105, height: 105, mode: "fit")
			alt: title
		}
	}
`
export const ClientQuoteFragmentDoc = gql`
	fragment ClientQuote on clientPanels_quote_BlockType {
		id
		heading @markdown(inlineOnly: true)
		quote {
			...QuotePanelQuote
		}
	}
	${QuotePanelQuoteFragmentDoc}
`
export const ClientVcFragmentDoc = gql`
	fragment ClientVC on clientPanels_vc_BlockType {
		id
		subHeading
		clients {
			...ClientLogo
		}
	}
	${ClientLogoFragmentDoc}
`
export const ClientCardFragmentDoc = gql`
	fragment ClientCard on clientPanels_card_BlockType {
		id
		heading
		text
		logo {
			src: url(width: 120, height: 120, mode: "fit")
			width(width: 120, height: 120, mode: "fit")
			height(width: 120, height: 120, mode: "fit")
			alt: title
		}
		button {
			...Button
		}
	}
	${ButtonFragmentDoc}
`
export const ClientPageFragmentDoc = gql`
	fragment ClientPage on ourClients_ourClients_Entry {
		title
		heading @markdown(inlineOnly: true)
		clientPanels {
			__typename
			...ClientGrid
			...ClientPartners
			...ClientQuote
			...ClientVC
			...ClientCard
		}
		seo: seomatic(asArray: true) {
			...SEO
		}
	}
	${ClientGridFragmentDoc}
	${ClientPartnersFragmentDoc}
	${ClientQuoteFragmentDoc}
	${ClientVcFragmentDoc}
	${ClientCardFragmentDoc}
	${SeoFragmentDoc}
`
export const IntroPanelFragmentDoc = gql`
	fragment IntroPanel on panels_intro_BlockType {
		id
		text
		heading
		button {
			...Button
		}
		logo {
			src: url(width: 300, height: 300, mode: "fit")
			width(width: 300, height: 300, mode: "fit")
			height(width: 300, height: 300, mode: "fit")
			alt: title
		}
	}
	${ButtonFragmentDoc}
`
export const IconGridItemFragmentDoc = gql`
	fragment IconGridItem on items_BlockType {
		id
		heading
		icon {
			inline
		}
		text
		button {
			...Button
		}
	}
	${ButtonFragmentDoc}
`
export const IconGridPanelFragmentDoc = gql`
	fragment IconGridPanel on panels_iconGrid_BlockType {
		id
		heading
		theme {
			...Theme
		}
		items {
			...IconGridItem
		}
	}
	${ThemeFragmentDoc}
	${IconGridItemFragmentDoc}
`
export const QuotePanelFragmentDoc = gql`
	fragment QuotePanel on panels_quote_BlockType {
		id
		heading
		button {
			...Button
		}
		quote {
			...QuotePanelQuote
		}
	}
	${ButtonFragmentDoc}
	${QuotePanelQuoteFragmentDoc}
`
export const LongFormPanelBlockFragmentDoc = gql`
	fragment LongFormPanelBlock on blocks_BlockType {
		id
		text
		image {
			src: url(transform: "post")
			width(transform: "post")
			height(transform: "post")
			alt: title
		}
		button {
			...Button
		}
	}
	${ButtonFragmentDoc}
`
export const LongFormPanelFragmentDoc = gql`
	fragment LongFormPanel on panels_longForm_BlockType {
		id
		heading
		blocks {
			...LongFormPanelBlock
		}
	}
	${LongFormPanelBlockFragmentDoc}
`
export const FormPanelFragmentDoc = gql`
	fragment FormPanel on panels_form_BlockType {
		id
		heading
		text
		sectionLabel
		form {
			...FormFragment
		}
	}
	${FormFragmentFragmentDoc}
`
export const ProductSummaryFragmentDoc = gql`
	fragment ProductSummary on productDetails_default_Entry {
		...ProductTeaser
		coverClaims
		additionalProtection
		tip
		needs
	}
	${ProductTeaserFragmentDoc}
`
export const ProductPanelFragmentDoc = gql`
	fragment ProductPanel on panels_product_BlockType {
		id
		product {
			...ProductSummary
		}
	}
	${ProductSummaryFragmentDoc}
`
export const PageEntryFragmentDoc = gql`
	fragment PageEntry on pages_pages_Entry {
		seo: seomatic(asArray: true) {
			...SEO
		}
		hideContactForm
		title
		richText
		bookingWidget
		expanded
		panels {
			__typename
			...IntroPanel
			...IconGridPanel
			...QuotePanel
			...LongFormPanel
			...TextPanel
			...TextGridPanel
			...BannerPanel
			...FormPanel
			...ProductPanel
			...ProductGridPanel
		}
	}
	${SeoFragmentDoc}
	${IntroPanelFragmentDoc}
	${IconGridPanelFragmentDoc}
	${QuotePanelFragmentDoc}
	${LongFormPanelFragmentDoc}
	${TextPanelFragmentDoc}
	${TextGridPanelFragmentDoc}
	${BannerPanelFragmentDoc}
	${FormPanelFragmentDoc}
	${ProductPanelFragmentDoc}
	${ProductGridPanelFragmentDoc}
`
export const PageSlugFragmentDoc = gql`
	fragment PageSlug on pages_pages_Entry {
		slug
	}
`
export const PostThumbImageFragmentDoc = gql`
	fragment PostThumbImage on AssetInterface {
		src: url(width: 600, height: 600)
		width: width(width: 600)
		height: height(height: 600)
		alt: title
	}
`
export const PostThumbCategoryFragmentDoc = gql`
	fragment PostThumbCategory on blog_Category {
		id
		title
	}
`
export const PostThumbFragmentDoc = gql`
	fragment PostThumb on blog_blog_Entry {
		id
		uri
		title
		colour1
		colour2
		image {
			...PostThumbImage
		}
		category {
			...PostThumbCategory
		}
	}
	${PostThumbImageFragmentDoc}
	${PostThumbCategoryFragmentDoc}
`
export const PartnerEntryFragmentDoc = gql`
	fragment PartnerEntry on partners_default_Entry {
		seo: seomatic(asArray: true) {
			...SEO
		}
		title
		hideContactForm
		relatedInsights {
			...PostThumb
		}
		panels {
			__typename
			...IntroPanel
			...IconGridPanel
			...QuotePanel
			...LongFormPanel
			...TextPanel
			...TextGridPanel
			...BannerPanel
			...FormPanel
			...ProductPanel
			...ProductGridPanel
		}
	}
	${SeoFragmentDoc}
	${PostThumbFragmentDoc}
	${IntroPanelFragmentDoc}
	${IconGridPanelFragmentDoc}
	${QuotePanelFragmentDoc}
	${LongFormPanelFragmentDoc}
	${TextPanelFragmentDoc}
	${TextGridPanelFragmentDoc}
	${BannerPanelFragmentDoc}
	${FormPanelFragmentDoc}
	${ProductPanelFragmentDoc}
	${ProductGridPanelFragmentDoc}
`
export const PartnerSlugFragmentDoc = gql`
	fragment PartnerSlug on partners_default_Entry {
		slug
	}
`
export const ProductHeroFragmentDoc = gql`
	fragment ProductHero on hero_BlockType {
		image {
			src: url(transform: "banner")
			width(transform: "banner")
			height(transform: "banner")
			alt: title
		}
		id
		heading
		text
		button {
			...Button
		}
	}
	${ButtonFragmentDoc}
`
export const ProductSingleFragmentDoc = gql`
	fragment ProductSingle on products_products_Entry {
		seo: seomatic(asArray: true) {
			...SEO
		}
		hideContactForm
		hero {
			...ProductHero
		}
		panels {
			__typename
			...IntroPanel
			...IconGridPanel
			...QuotePanel
			...LongFormPanel
			...TextPanel
			...TextGridPanel
			...BannerPanel
			...FormPanel
			...ProductPanel
			...ProductGridPanel
		}
	}
	${SeoFragmentDoc}
	${ProductHeroFragmentDoc}
	${IntroPanelFragmentDoc}
	${IconGridPanelFragmentDoc}
	${QuotePanelFragmentDoc}
	${LongFormPanelFragmentDoc}
	${TextPanelFragmentDoc}
	${TextGridPanelFragmentDoc}
	${BannerPanelFragmentDoc}
	${FormPanelFragmentDoc}
	${ProductPanelFragmentDoc}
	${ProductGridPanelFragmentDoc}
`
export const LinksFragmentDoc = gql`
	fragment Links on links_BlockType {
		id
		button {
			...Button
		}
	}
	${ButtonFragmentDoc}
`
export const TeaserFragmentDoc = gql`
	fragment Teaser on blog_blog_Entry {
		id
		uri
		title
		colour1
		colour2
		theme {
			...Theme
		}
		image {
			...PostThumbImage
		}
		category {
			...BlogCategory
		}
	}
	${ThemeFragmentDoc}
	${PostThumbImageFragmentDoc}
	${BlogCategoryFragmentDoc}
`
export const ProductSummaryQuestionFragmentDoc = gql`
	fragment ProductSummaryQuestion on questions_BlockType {
		heading
		text
		id
	}
`
export const ProductSummaryBlockFragmentDoc = gql`
	fragment ProductSummaryBlock on productBlocks_summary_BlockType {
		id
		price
		questions {
			...ProductSummaryQuestion
		}
	}
	${ProductSummaryQuestionFragmentDoc}
`
export const UseCaseBlockFragmentDoc = gql`
	fragment UseCaseBlock on productBlocks_useCase_BlockType {
		text
		id
	}
`
export const QuoteProductBlockFragmentDoc = gql`
	fragment QuoteProductBlock on productBlocks_quote_BlockType {
		id
		button {
			...Button
		}
		quote {
			...QuotePanelQuote
		}
	}
	${ButtonFragmentDoc}
	${QuotePanelQuoteFragmentDoc}
`
export const FaqFragmentDoc = gql`
	fragment Faq on faqs_default_Entry {
		id
		question: title
		answer: richText
	}
`
export const FaqBlockFragmentDoc = gql`
	fragment FaqBlock on productBlocks_faqs_BlockType {
		id
		questions {
			...Faq
		}
	}
	${FaqFragmentDoc}
`
export const ProductBannerFragmentDoc = gql`
	fragment ProductBanner on productBlocks_banner_BlockType {
		id
		image {
			...BannerImage
		}
		heading
		text
		button {
			...Button
		}
		theme {
			...Theme
		}
	}
	${BannerImageFragmentDoc}
	${ButtonFragmentDoc}
	${ThemeFragmentDoc}
`
export const ProductFragmentDoc = gql`
	fragment Product on productDetails_default_Entry {
		seo: seomatic(asArray: true) {
			...SEO
		}
		id
		category: productCategory {
			title
		}
		icon {
			inline
		}
		slug
		id
		title
		blurb
		intro
		uri
		expanded
		links {
			...Links
		}
		hideContactForm
		relatedInsights {
			...Teaser
		}
		productBlocks {
			__typename
			...ProductSummaryBlock
			...UseCaseBlock
			...QuoteProductBlock
			...FaqBlock
			...ProductBanner
		}
	}
	${SeoFragmentDoc}
	${LinksFragmentDoc}
	${TeaserFragmentDoc}
	${ProductSummaryBlockFragmentDoc}
	${UseCaseBlockFragmentDoc}
	${QuoteProductBlockFragmentDoc}
	${FaqBlockFragmentDoc}
	${ProductBannerFragmentDoc}
`
export const ProductPathFragmentDoc = gql`
	fragment ProductPath on productDetails_default_Entry {
		slug
	}
`
export const BlogPostQueryDocument = gql`
	query BlogPostQuery($uri: [String]) {
		entry(section: "blog", uri: $uri) {
			...BlogEntry
		}
	}
	${BlogEntryFragmentDoc}
`
export const BlogListQueryDocument = gql`
	query BlogListQuery {
		entries(section: "blog", limit: 1000) {
			...BlogSlug
		}
	}
	${BlogSlugFragmentDoc}
`
export const BlogListingDocument = gql`
	query BlogListing($offset: Int) {
		count: entryCount(section: "blog")
		entry(section: "listing") {
			...Listing
		}
		posts: blogEntries(offset: $offset, limit: 9) {
			...Teaser
		}
	}
	${ListingFragmentDoc}
	${TeaserFragmentDoc}
`
export const ErrorPageDocument = gql`
	query ErrorPage {
		seomatic(asArray: true) {
			...SEO
		}
	}
	${SeoFragmentDoc}
`
export const GlobalDataDocument = gql`
	query GlobalData {
		contact: globalSet(handle: "contact") {
			...Footer
		}
		legal: globalSet(handle: "legal") {
			...GlobalLegal
		}
		social: globalSet(handle: "social") {
			...GlobalSocial
		}
		mainMenu: navigationNodes(navHandle: "mainMenu") {
			...MainMenuNode
		}
		footerMenu: navigationNodes(navHandle: "footerMenu") {
			...FooterMenuNode
		}
	}
	${FooterFragmentDoc}
	${GlobalLegalFragmentDoc}
	${GlobalSocialFragmentDoc}
	${MainMenuNodeFragmentDoc}
	${FooterMenuNodeFragmentDoc}
`
export const HomePageQueryDocument = gql`
	query HomePageQuery {
		entry(section: "home") {
			...HomeEntry
		}
		entries(section: "blog", limit: 16) {
			...Teaser
		}
		clients: clientsEntries(featured: true, limit: 6) {
			...ClientLogo
		}
	}
	${HomeEntryFragmentDoc}
	${TeaserFragmentDoc}
	${ClientLogoFragmentDoc}
`
export const ClientPageQueryDocument = gql`
	query ClientPageQuery {
		entry(section: "ourClients") {
			...ClientPage
		}
	}
	${ClientPageFragmentDoc}
`
export const PageEntyQueryDocument = gql`
	query PageEntyQuery($uri: [String]) {
		entry(section: "pages", uri: $uri) {
			...PageEntry
		}
	}
	${PageEntryFragmentDoc}
`
export const PageListQueryDocument = gql`
	query PageListQuery {
		entries(section: "pages", limit: 1000) {
			...PageSlug
		}
	}
	${PageSlugFragmentDoc}
`
export const PartnerEntyQueryDocument = gql`
	query PartnerEntyQuery($slug: [String]) {
		entry(section: "partners", slug: $slug) {
			...PartnerEntry
		}
	}
	${PartnerEntryFragmentDoc}
`
export const PartnersListQueryDocument = gql`
	query PartnersListQuery {
		entries(section: "partners", limit: 1000) {
			...PartnerSlug
		}
	}
	${PartnerSlugFragmentDoc}
`
export const ProductSingleQueryDocument = gql`
	query ProductSingleQuery {
		entry(section: "products") {
			...ProductSingle
		}
	}
	${ProductSingleFragmentDoc}
`
export const ProductEntryDocument = gql`
	query ProductEntry($slug: [String]) {
		entry(section: "productDetails", slug: $slug, expanded: true) {
			...Product
		}
	}
	${ProductFragmentDoc}
`
export const ProductPathsDocument = gql`
	query ProductPaths {
		entries(section: "productDetails", expanded: true) {
			...ProductPath
		}
	}
	${ProductPathFragmentDoc}
`

export type SdkFunctionWrapper = <T>(
	action: (requestHeaders?: Record<string, string>) => Promise<T>,
	operationName: string,
	operationType?: string
) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (
	action,
	_operationName,
	_operationType
) => action()

export function getSdk(
	client: GraphQLClient,
	withWrapper: SdkFunctionWrapper = defaultWrapper
) {
	return {
		BlogPostQuery(
			variables?: BlogPostQueryQueryVariables,
			requestHeaders?: Dom.RequestInit["headers"]
		): Promise<BlogPostQueryQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<BlogPostQueryQuery>(BlogPostQueryDocument, variables, {
						...requestHeaders,
						...wrappedRequestHeaders,
					}),
				"BlogPostQuery",
				"query"
			)
		},
		BlogListQuery(
			variables?: BlogListQueryQueryVariables,
			requestHeaders?: Dom.RequestInit["headers"]
		): Promise<BlogListQueryQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<BlogListQueryQuery>(BlogListQueryDocument, variables, {
						...requestHeaders,
						...wrappedRequestHeaders,
					}),
				"BlogListQuery",
				"query"
			)
		},
		BlogListing(
			variables?: BlogListingQueryVariables,
			requestHeaders?: Dom.RequestInit["headers"]
		): Promise<BlogListingQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<BlogListingQuery>(BlogListingDocument, variables, {
						...requestHeaders,
						...wrappedRequestHeaders,
					}),
				"BlogListing",
				"query"
			)
		},
		ErrorPage(
			variables?: ErrorPageQueryVariables,
			requestHeaders?: Dom.RequestInit["headers"]
		): Promise<ErrorPageQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<ErrorPageQuery>(ErrorPageDocument, variables, {
						...requestHeaders,
						...wrappedRequestHeaders,
					}),
				"ErrorPage",
				"query"
			)
		},
		GlobalData(
			variables?: GlobalDataQueryVariables,
			requestHeaders?: Dom.RequestInit["headers"]
		): Promise<GlobalDataQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<GlobalDataQuery>(GlobalDataDocument, variables, {
						...requestHeaders,
						...wrappedRequestHeaders,
					}),
				"GlobalData",
				"query"
			)
		},
		HomePageQuery(
			variables?: HomePageQueryQueryVariables,
			requestHeaders?: Dom.RequestInit["headers"]
		): Promise<HomePageQueryQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<HomePageQueryQuery>(HomePageQueryDocument, variables, {
						...requestHeaders,
						...wrappedRequestHeaders,
					}),
				"HomePageQuery",
				"query"
			)
		},
		ClientPageQuery(
			variables?: ClientPageQueryQueryVariables,
			requestHeaders?: Dom.RequestInit["headers"]
		): Promise<ClientPageQueryQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<ClientPageQueryQuery>(
						ClientPageQueryDocument,
						variables,
						{ ...requestHeaders, ...wrappedRequestHeaders }
					),
				"ClientPageQuery",
				"query"
			)
		},
		PageEntyQuery(
			variables?: PageEntyQueryQueryVariables,
			requestHeaders?: Dom.RequestInit["headers"]
		): Promise<PageEntyQueryQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<PageEntyQueryQuery>(PageEntyQueryDocument, variables, {
						...requestHeaders,
						...wrappedRequestHeaders,
					}),
				"PageEntyQuery",
				"query"
			)
		},
		PageListQuery(
			variables?: PageListQueryQueryVariables,
			requestHeaders?: Dom.RequestInit["headers"]
		): Promise<PageListQueryQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<PageListQueryQuery>(PageListQueryDocument, variables, {
						...requestHeaders,
						...wrappedRequestHeaders,
					}),
				"PageListQuery",
				"query"
			)
		},
		PartnerEntyQuery(
			variables?: PartnerEntyQueryQueryVariables,
			requestHeaders?: Dom.RequestInit["headers"]
		): Promise<PartnerEntyQueryQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<PartnerEntyQueryQuery>(
						PartnerEntyQueryDocument,
						variables,
						{ ...requestHeaders, ...wrappedRequestHeaders }
					),
				"PartnerEntyQuery",
				"query"
			)
		},
		PartnersListQuery(
			variables?: PartnersListQueryQueryVariables,
			requestHeaders?: Dom.RequestInit["headers"]
		): Promise<PartnersListQueryQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<PartnersListQueryQuery>(
						PartnersListQueryDocument,
						variables,
						{ ...requestHeaders, ...wrappedRequestHeaders }
					),
				"PartnersListQuery",
				"query"
			)
		},
		ProductSingleQuery(
			variables?: ProductSingleQueryQueryVariables,
			requestHeaders?: Dom.RequestInit["headers"]
		): Promise<ProductSingleQueryQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<ProductSingleQueryQuery>(
						ProductSingleQueryDocument,
						variables,
						{ ...requestHeaders, ...wrappedRequestHeaders }
					),
				"ProductSingleQuery",
				"query"
			)
		},
		ProductEntry(
			variables?: ProductEntryQueryVariables,
			requestHeaders?: Dom.RequestInit["headers"]
		): Promise<ProductEntryQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<ProductEntryQuery>(ProductEntryDocument, variables, {
						...requestHeaders,
						...wrappedRequestHeaders,
					}),
				"ProductEntry",
				"query"
			)
		},
		ProductPaths(
			variables?: ProductPathsQueryVariables,
			requestHeaders?: Dom.RequestInit["headers"]
		): Promise<ProductPathsQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<ProductPathsQuery>(ProductPathsDocument, variables, {
						...requestHeaders,
						...wrappedRequestHeaders,
					}),
				"ProductPaths",
				"query"
			)
		},
	}
}
export type Sdk = ReturnType<typeof getSdk>
