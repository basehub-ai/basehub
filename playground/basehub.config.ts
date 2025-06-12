// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

declare module "basehub" {
  export interface Query extends _Query {}
  export interface QueryGenqlSelection extends _QueryGenqlSelection {}
  export interface Mutation extends _Mutation {}
  export interface MutationGenqlSelection extends _MutationGenqlSelection {}
  export interface FragmentsMap extends _FragmentsMap {}
  export interface Scalars extends _Scalars {}
}

interface _Query extends Query {}
interface _QueryGenqlSelection extends QueryGenqlSelection {}
interface _Mutation extends Mutation {}
interface _MutationGenqlSelection extends MutationGenqlSelection {}
interface _FragmentsMap extends FragmentsMap {}
interface _Scalars extends Scalars {}

export interface Scalars {
    BSHBEventSchema: ({
  name: string;
  required: boolean;
  placeholder?: string;
  defaultValue?: string;
  helpText?: string
} & {
  id: string;
  label: string
} & ({
  type: "text" | "textarea" | "number" | "date" | "datetime" | "email" | "checkbox" | "hidden"
} | {
  type: "select" | "radio";
  options: string[];
  multiple: boolean
} | {
  type: "file";
  private: boolean
}))[],
    BSHBRichTextContentSchema: RichTextNode[],
    BSHBRichTextTOCSchema: RichTextTocNode[],
    BSHBSelect_1037295985: 'Changelog' | 'Company' | 'Engineering' | 'Design' | 'Case Study',
    BSHBSelect_1309117910: 'api-requests' | 'has-commits' | 'has-blocks' | 'has-feature-branches' | 'invites-sent' | 'has-merged-branches',
    BSHBSelect_1560273079: 'Info' | 'Question' | 'Warning',
    BSHBSelect__1015351733: 'top-big' | 'top-small' | 'below-header',
    BSHBSelect__103598835: 'GB',
    BSHBSelect__1389483365: 'Milestone' | 'Feature',
    BSHBSelect__1563033596: '301' | '302' | '303' | '307' | '308',
    BSHBSelect__2079142124: 'Core Platform' | 'Features' | 'Extras',
    Boolean: boolean,
    CodeSnippetLanguage: B_Language,
    DateTime: any,
    Float: number,
    ID: string,
    Int: number,
    JSON: any,
    String: string,
    bshb_event_197359120: `bshb_event_197359120:${string}`,
    schema_bshb_event_197359120: {description?: string;eventName: string;},
    bshb_event_2054101027: `bshb_event_2054101027:${string}`,
    schema_bshb_event_2054101027: {competitor?: string;},
    bshb_event_2066998897: `bshb_event_2066998897:${string}`,
    schema_bshb_event_2066998897: {source?: string;nickname?: string;email: string;subscribed: boolean;},
    bshb_event_314620664: `bshb_event_314620664:${string}`,
    schema_bshb_event_314620664: {info?: string;path?: string;email?: string;userId?: string;block?: string;error?: string;},
    bshb_event_371102077: `bshb_event_371102077:${string}`,
    schema_bshb_event_371102077: never,
    bshb_event__1049716265: `bshb_event__1049716265:${string}`,
    schema_bshb_event__1049716265: {owners?: string;teamId: string;},
    bshb_event__412932618: `bshb_event__412932618:${string}`,
    schema_bshb_event__412932618: {email?: string;userId?: string;message: string;},
    bshb_workflow_1103769895: `bshb_workflow_1103769895:${string}`,
    schema_bshb_workflow_1103769895: { timestamp: string, type: 'event-block.created', data: {
  eventBlockId: string;
  eventBlockTitle: string;
  parentBlockId: string
} & {
                data: Scalars['schema_bshb_event__412932618']
              } },
    bshb_workflow_1437101429: `bshb_workflow_1437101429:${string}`,
    schema_bshb_workflow_1437101429: { timestamp: string, type: 'block.updated', data: {
  blockId: string;
  blockIdPath: string
} },
    bshb_workflow_1456460865: `bshb_workflow_1456460865:${string}`,
    schema_bshb_workflow_1456460865: { timestamp: string, type: 'list-block.created', data: {
  listBlockId: string;
  listBlockTitle?: string;
  blockId: string
} },
    bshb_workflow__1533000670: `bshb_workflow__1533000670:${string}`,
    schema_bshb_workflow__1533000670: { timestamp: string, type: 'event-block.created', data: {
  eventBlockId: string;
  eventBlockTitle: string;
  parentBlockId: string
} & {
                data: Scalars['schema_bshb_event_314620664']
              } },
    bshb_workflow__1644525346: `bshb_workflow__1644525346:${string}`,
    schema_bshb_workflow__1644525346: { timestamp: string, type: 'event-block.created', data: {
  eventBlockId: string;
  eventBlockTitle: string;
  parentBlockId: string
} & {
                data: Scalars['schema_bshb_event_2066998897']
              } },
    bshb_workflow__1673447047: `bshb_workflow__1673447047:${string}`,
    schema_bshb_workflow__1673447047: { timestamp: string, type: 'event-block.created', data: {
  eventBlockId: string;
  eventBlockTitle: string;
  parentBlockId: string
} & {
                data: Scalars['schema_bshb_event__1049716265']
              } },
}

export interface AboutBasehub {
    html: Scalars['String']
    json: AboutBasehubRichText
    markdown: Scalars['String']
    plainText: Scalars['String']
    readingTime: Scalars['Int']
    __typename: 'AboutBasehub'
}

export interface AboutBasehubRichText {
    content: Scalars['BSHBRichTextContentSchema']
    toc: Scalars['BSHBRichTextTOCSchema']
    __typename: 'AboutBasehubRichText'
}

export interface Analytics {
    /** The `adminKey` gives clients the ability to query, delete and update this block's data. **It's not meant to be exposed to the public.** */
    adminKey: Scalars['bshb_event_2054101027']
    /** The `ingestKey` gives clients the ability to send new events to this block. Generally, it's safe to expose it to the public. */
    ingestKey: Scalars['bshb_event_2054101027']
    schema: Scalars['BSHBEventSchema']
    __typename: 'Analytics'
}

export type AnalyticsKeyScope = 'query' | 'send'

export interface AnnouncementBanner {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    content: (Content_4 | null)
    enabled: Scalars['Boolean']
    title: (Scalars['String'] | null)
    __typename: 'AnnouncementBanner'
}

export interface AsFloatingBannerComponent {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    attachTo: Scalars['String']
    body: Body
    title: Title
    __typename: 'AsFloatingBannerComponent'
}

export type AsFloatingBannerComponentOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'attachTo__ASC' | 'attachTo__DESC' | 'body__ASC' | 'body__DESC' | 'title__ASC' | 'title__DESC'

export interface AsNewTabComponent {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    value: Scalars['Boolean']
    __typename: 'AsNewTabComponent'
}

export type AsNewTabComponentOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'value__ASC' | 'value__DESC'

export interface Authors {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (AuthorsItem | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: AuthorsItem[]
    __typename: 'Authors'
}

export interface AuthorsItem {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    avatar: BlockImage
    name: Scalars['String']
    role: Scalars['String']
    x: (Scalars['String'] | null)
    __typename: 'AuthorsItem'
}

export type AuthorsItemOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'avatar__ASC' | 'avatar__DESC' | 'name__ASC' | 'name__DESC' | 'role__ASC' | 'role__DESC' | 'x__ASC' | 'x__DESC'

export interface BaseHubAgents {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    integrationInstructions: IntegrationInstructions
    __typename: 'BaseHubAgents'
}

export interface BaseHubGuidelinesAndBlockReferenceComponent {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    __typename: 'BaseHubGuidelinesAndBlockReferenceComponent'
}

export type BaseHubGuidelinesAndBlockReferenceComponentOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC'

export interface BaseRichTextJson {
    blocks: Scalars['String']
    content: Scalars['BSHBRichTextContentSchema']
    toc: Scalars['BSHBRichTextTOCSchema']
    __typename: 'BaseRichTextJson'
}

export interface BasehubVs {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    analytics: Analytics
    comparisons: Comparisons
    ctas: (ButtonComponent[] | null)
    sections: Sections
    subtitle: Scalars['String']
    __typename: 'BasehubVs'
}

export interface BaselineFeatures {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    cta: ButtonComponent
    features: Features_2
    title: (Scalars['String'] | null)
    __typename: 'BaselineFeatures'
}

export interface Bento {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    calloutText: Scalars['String']
    features: Features
    getStarted: ButtonComponent
    subtitle: Subtitle_2
    title: Scalars['String']
    __typename: 'Bento'
}

export interface BentoGrid {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (BentoGridItem | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: BentoGridItem[]
    __typename: 'BentoGrid'
}

export interface BentoGridItem {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    description: Scalars['String']
    icon: Scalars['String']
    __typename: 'BentoGridItem'
}

export type BentoGridItemOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'description__ASC' | 'description__DESC' | 'icon__ASC' | 'icon__DESC'

export interface BlockAudio {
    /** The duration of the audio in seconds. If the duration is not available, it will be estimated based on the file size. */
    duration: Scalars['Float']
    fileName: Scalars['String']
    fileSize: Scalars['Int']
    lastModified: Scalars['Float']
    mimeType: Scalars['String']
    url: Scalars['String']
    __typename: 'BlockAudio'
}

export interface BlockCodeSnippet {
    allowedLanguages: Scalars['CodeSnippetLanguage'][]
    code: Scalars['String']
    /** @deprecated Figuring out the correct api. */
    html: Scalars['String']
    language: Scalars['CodeSnippetLanguage']
    __typename: 'BlockCodeSnippet'
}

export interface BlockColor {
    b: Scalars['Int']
    g: Scalars['Int']
    hex: Scalars['String']
    hsl: Scalars['String']
    r: Scalars['Int']
    rgb: Scalars['String']
    __typename: 'BlockColor'
}

export type BlockDocument = (AnnouncementBanner | AsFloatingBannerComponent | AsNewTabComponent | Authors | AuthorsItem | BaseHubAgents | BaseHubGuidelinesAndBlockReferenceComponent | BasehubVs | BaselineFeatures | Bento | BentoGrid | BentoGridItem | Blog | BlogpostTemplateComponent | Body_1 | BooleanFeatureComponent | BuildTimeRedirects | BuildTimeRedirectsItem | ButtonComponent | Calculator | CalloutComponent | Changelog | ChangelogFloatingBannerHighlightComps | ChangelogTemplateComponent | CodeSnippetComponent | CodeSnippetWithDifferentLanguagesComponent | Collections | ComparisonBentoComponent | ComparisonItemComponent | ComparisonStepsComponent | ComparisonTableComponent | Comparisons | ComparisonsItem | Components | Copy | CoverImageComponent | DemoComponent | Demos | Emails | EmailsItem | EnterprisePlan | Entries | Faq | Faqs | FaqsItem | FeatureComponent | FeatureComponent_1 | FeaturedComponent | Features | FeaturesAndBenefits | FeaturesAndBenefitsItem | FeaturesItem | FeaturesItem_1 | FeaturesItem_2 | FeaturesLimitsComponent | Features_1 | Features_2 | Features_3 | Feedback | FreeTextComponent | GeneralEvents | GuideComponent | GuideStepComponent | Header | Headers | HeadersItem | HeroCustomers | HeroCustomersItem | Homepage | Icons | InEditorTimelineGuides | IntegrationInstructions | IntegrationInstructionsItem | LegalStuff | LimitComponent | LineItems | LineItems_1 | Manifesto | Manifesto_1 | MarketingHeaderComponent | MetaComponent | MiddleLinks | MiddleLinksItem | MiscAppEvents | Newsletter | Onboarding | PageAnalyticsComponent | PaymentModeComponent | PaymentSwitch | PlanLineItemComponent | PlanNameComponent | Plans | PlansComparisonTable | Posts | PriceComponent | Pricing | PricingBanner | PricingPlanComponent | Privacy | Prompts | QuoteComponent | RepoSchemaComponent | RepoSchemaComponent_1 | RepoSchemaComponent_2 | RepoTitleComponent | Roadmap | RoadmapItem | Roadmap_1 | Sections | Shoutouts | Snippets | SnippetsItem | Steps | StepsItem | Steps_1 | TemplateAuthors | TemplateAuthorsItem | Templates | TemplatesItem | Templates_1 | Terms | Testimonials | TextWithColorComponent | ThreadComponent | TokenComponent | TokenComponent_1 | TryLightModeComponent | WhimsicalEmbedComponent | asFloatingBannerComponent_AsList | asNewTabComponent_AsList | authorsItem_AsList | baseHubGuidelinesAndBlockReferenceComponent_AsList | bentoGridItem_AsList | blogpostTemplateComponent_AsList | booleanFeatureComponent_AsList | buildTimeRedirectsItem_AsList | buttonComponent_AsList | calloutComponent_AsList | changelogTemplateComponent_AsList | codeSnippetComponent_AsList | codeSnippetWithDifferentLanguagesComponent_AsList | comparisonBentoComponent_AsList | comparisonItemComponent_AsList | comparisonStepsComponent_AsList | comparisonTableComponent_AsList | comparisonsItem_AsList | coverImageComponent_AsList | demoComponent_AsList | emailsItem_AsList | faqsItem_AsList | featureComponent1_AsList | featureComponent_AsList | featuredComponent_AsList | featuresAndBenefitsItem_AsList | featuresItem1_AsList | featuresItem2_AsList | featuresItem_AsList | featuresLimitsComponent_AsList | freeTextComponent_AsList | guideComponent_AsList | guideStepComponent_AsList | headersItem_AsList | heroCustomersItem_AsList | integrationInstructionsItem_AsList | limitComponent_AsList | marketingHeaderComponent_AsList | metaComponent_AsList | middleLinksItem_AsList | pageAnalyticsComponent_AsList | paymentModeComponent_AsList | planLineItemComponent_AsList | planNameComponent_AsList | priceComponent_AsList | pricingPlanComponent_AsList | quoteComponent_AsList | repoSchemaComponent1_AsList | repoSchemaComponent2_AsList | repoSchemaComponent_AsList | repoTitleComponent_AsList | roadmapItem_AsList | snippetsItem_AsList | stepsItem_AsList | templateAuthorsItem_AsList | templatesItem_AsList | textWithColorComponent_AsList | threadComponent_AsList | tokenComponent1_AsList | tokenComponent_AsList | tryLightModeComponent_AsList | whimsicalEmbedComponent_AsList) & { __isUnion?: true }

export interface BlockDocumentSys {
    apiNamePath: Scalars['String']
    createdAt: Scalars['String']
    hash: Scalars['String']
    id: Scalars['ID']
    idPath: Scalars['String']
    lastModifiedAt: Scalars['String']
    slug: Scalars['String']
    slugPath: Scalars['String']
    title: Scalars['String']
    __typename: 'BlockDocumentSys'
}

export interface BlockFile {
    fileName: Scalars['String']
    fileSize: Scalars['Int']
    lastModified: Scalars['Float']
    mimeType: Scalars['String']
    url: Scalars['String']
    __typename: 'BlockFile'
}

export interface BlockImage {
    alt: (Scalars['String'] | null)
    aspectRatio: Scalars['String']
    blurDataURL: Scalars['String']
    fileName: Scalars['String']
    fileSize: Scalars['Int']
    height: Scalars['Int']
    lastModified: Scalars['Float']
    mimeType: Scalars['String']
    /** @deprecated Renamed to `blurDataURL` to match Next.js Image's naming convention. */
    placeholderURL: Scalars['String']
    /** @deprecated Use `url` instead. */
    rawUrl: Scalars['String']
    thumbhash: Scalars['String']
    /**
     * This field is used to generate the image URL with the provided options. The options are passed as arguments. For example, if you want to resize the image to 200x200 pixels, you can use the following query:
     * 
     * ```graphql
     * {
     *   imageBlock {
     *     url(width: 200, height: 200)
     *   }
     * }
     * ```
     * 
     * This will return the URL with the width and height set to 200 pixels.
     * 
     * BaseHub uses Cloudflare for image resizing. Check out [all available options in their docs](https://developers.cloudflare.com/images/transform-images/transform-via-workers/#fetch-options).
     * 
     */
    url: Scalars['String']
    width: Scalars['Int']
    __typename: 'BlockImage'
}

export type BlockList = (Authors | BentoGrid | Body_1 | BuildTimeRedirects | Comparisons | Emails | Entries | Faqs | Features | FeaturesAndBenefits | Features_1 | Features_2 | Features_3 | Headers | HeroCustomers | IntegrationInstructions | LineItems | LineItems_1 | MiddleLinks | Plans | Posts | Roadmap_1 | Snippets | Steps | Steps_1 | TemplateAuthors | Templates_1 | Testimonials | asFloatingBannerComponent_AsList | asNewTabComponent_AsList | authorsItem_AsList | baseHubGuidelinesAndBlockReferenceComponent_AsList | bentoGridItem_AsList | blogpostTemplateComponent_AsList | booleanFeatureComponent_AsList | buildTimeRedirectsItem_AsList | buttonComponent_AsList | calloutComponent_AsList | changelogTemplateComponent_AsList | codeSnippetComponent_AsList | codeSnippetWithDifferentLanguagesComponent_AsList | comparisonBentoComponent_AsList | comparisonItemComponent_AsList | comparisonStepsComponent_AsList | comparisonTableComponent_AsList | comparisonsItem_AsList | coverImageComponent_AsList | demoComponent_AsList | emailsItem_AsList | faqsItem_AsList | featureComponent1_AsList | featureComponent_AsList | featuredComponent_AsList | featuresAndBenefitsItem_AsList | featuresItem1_AsList | featuresItem2_AsList | featuresItem_AsList | featuresLimitsComponent_AsList | freeTextComponent_AsList | guideComponent_AsList | guideStepComponent_AsList | headersItem_AsList | heroCustomersItem_AsList | integrationInstructionsItem_AsList | limitComponent_AsList | marketingHeaderComponent_AsList | metaComponent_AsList | middleLinksItem_AsList | pageAnalyticsComponent_AsList | paymentModeComponent_AsList | planLineItemComponent_AsList | planNameComponent_AsList | priceComponent_AsList | pricingPlanComponent_AsList | quoteComponent_AsList | repoSchemaComponent1_AsList | repoSchemaComponent2_AsList | repoSchemaComponent_AsList | repoTitleComponent_AsList | roadmapItem_AsList | snippetsItem_AsList | stepsItem_AsList | templateAuthorsItem_AsList | templatesItem_AsList | textWithColorComponent_AsList | threadComponent_AsList | tokenComponent1_AsList | tokenComponent_AsList | tryLightModeComponent_AsList | whimsicalEmbedComponent_AsList) & { __isUnion?: true }

export interface BlockOgImage {
    height: Scalars['Int']
    url: Scalars['String']
    width: Scalars['Int']
    __typename: 'BlockOgImage'
}


/** Rich text block */
export type BlockRichText = (AboutBasehub | Body | Body_2 | CardTag | Content | Content_1 | Content_2 | Content_3 | Content_4 | Content_5 | Content_6 | Content_7 | Content_8 | Content_9 | Content_10 | ContextForLlm | Description | Description_1 | HeroSubtitle | HeroTitle | Invitation | Label | Note | PromptV11 | Pros | Quote | RepoLlmsTxt | Script | Subtitle | Subtitle_1 | Subtitle_2 | Subtitle_3 | Subtitle_4 | Subtitle_5 | SwitchLabel | Title | Title_1) & { __isUnion?: true }

export interface BlockVideo {
    aspectRatio: Scalars['String']
    /** The duration of the video in seconds. If the duration is not available, it will be estimated based on the file size. */
    duration: Scalars['Float']
    fileName: Scalars['String']
    fileSize: Scalars['Int']
    height: Scalars['Int']
    lastModified: Scalars['Float']
    mimeType: Scalars['String']
    url: Scalars['String']
    width: Scalars['Int']
    __typename: 'BlockVideo'
}

export interface Blog {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    analytics: PageAnalyticsComponent
    header: MarketingHeaderComponent
    narration: Narration
    posts: Posts
    __typename: 'Blog'
}

export interface BlogpostTemplateComponent {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    analytics: PageAnalyticsComponent
    authorS: AuthorsItem[]
    category: Scalars['BSHBSelect_1037295985']
    content: Content_1
    coverImage: CoverImageComponent
    isPublished: Scalars['Boolean']
    narration: (BlockAudio | null)
    /** ISO 8601 date string. */
    publishDate: Scalars['String']
    subtitle: Scalars['String']
    __typename: 'BlogpostTemplateComponent'
}

export type BlogpostTemplateComponentOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'analytics__ASC' | 'analytics__DESC' | 'authorS__ASC' | 'authorS__DESC' | 'category__ASC' | 'category__DESC' | 'content__ASC' | 'content__DESC' | 'coverImage__ASC' | 'coverImage__DESC' | 'isPublished__ASC' | 'isPublished__DESC' | 'narration__ASC' | 'narration__DESC' | 'publishDate__ASC' | 'publishDate__DESC' | 'subtitle__ASC' | 'subtitle__DESC'

export interface Body {
    html: Scalars['String']
    json: BodyRichText
    markdown: Scalars['String']
    plainText: Scalars['String']
    readingTime: Scalars['Int']
    __typename: 'Body'
}

export interface BodyRichText {
    blocks: UnionTryLightModeComponent[]
    content: Scalars['BSHBRichTextContentSchema']
    toc: Scalars['BSHBRichTextTOCSchema']
    __typename: 'BodyRichText'
}

export interface Body_1 {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (ComparisonItemComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: ComparisonItemComponent[]
    __typename: 'Body_1'
}

export interface Body_2 {
    html: Scalars['String']
    json: Body_2RichText
    markdown: Scalars['String']
    plainText: Scalars['String']
    readingTime: Scalars['Int']
    __typename: 'Body_2'
}

export interface Body_2RichText {
    content: Scalars['BSHBRichTextContentSchema']
    toc: Scalars['BSHBRichTextTOCSchema']
    __typename: 'Body_2RichText'
}

export interface BooleanFeatureComponent {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    value: Scalars['Boolean']
    __typename: 'BooleanFeatureComponent'
}

export type BooleanFeatureComponentOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'value__ASC' | 'value__DESC'

export interface BuildTimeRedirects {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (BuildTimeRedirectsItem | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: BuildTimeRedirectsItem[]
    __typename: 'BuildTimeRedirects'
}

export interface BuildTimeRedirectsItem {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    destination: (Scalars['String'] | null)
    source: (Scalars['String'] | null)
    statusCode: (Scalars['BSHBSelect__1563033596'] | null)
    __typename: 'BuildTimeRedirectsItem'
}

export type BuildTimeRedirectsItemOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'destination__ASC' | 'destination__DESC' | 'source__ASC' | 'source__DESC' | 'statusCode__ASC' | 'statusCode__DESC'

export interface ButtonComponent {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    external: Scalars['Boolean']
    href: Scalars['String']
    label: Scalars['String']
    __typename: 'ButtonComponent'
}

export type ButtonComponentOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'external__ASC' | 'external__DESC' | 'href__ASC' | 'href__DESC' | 'label__ASC' | 'label__DESC'

export interface Calculator {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    estimated: Scalars['String']
    note: Note
    personalTeamDisclaimer: (Scalars['String'] | null)
    resultHeading: Scalars['String']
    summaryTitle: Scalars['String']
    title: Scalars['String']
    __typename: 'Calculator'
}

export interface CalloutComponent {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    content: Content_2
    intent: Scalars['BSHBSelect_1560273079']
    __typename: 'CalloutComponent'
}

export type CalloutComponentOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'content__ASC' | 'content__DESC' | 'intent__ASC' | 'intent__DESC'

export interface CardTag {
    html: Scalars['String']
    json: CardTagRichText
    markdown: Scalars['String']
    plainText: Scalars['String']
    readingTime: Scalars['Int']
    __typename: 'CardTag'
}

export interface CardTagRichText {
    content: Scalars['BSHBRichTextContentSchema']
    toc: Scalars['BSHBRichTextTOCSchema']
    __typename: 'CardTagRichText'
}

export interface Changelog {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    analytics: PageAnalyticsComponent
    entries: Entries
    header: MarketingHeaderComponent
    __typename: 'Changelog'
}

export interface ChangelogFloatingBannerHighlightComps {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    tryLightMode: TryLightModeComponent
    __typename: 'ChangelogFloatingBannerHighlightComps'
}

export interface ChangelogTemplateComponent {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    analytics: PageAnalyticsComponent
    authorS: AuthorsItem[]
    content: Content_3
    highlight: (UnionAsNewTabComponentAsFloatingBannerComponent | null)
    narration: (BlockAudio | null)
    og: BlockOgImage
    /** ISO 8601 date string. */
    publishDate: Scalars['String']
    subtitle: (Scalars['String'] | null)
    version: Scalars['String']
    __typename: 'ChangelogTemplateComponent'
}

export type ChangelogTemplateComponentOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'analytics__ASC' | 'analytics__DESC' | 'authorS__ASC' | 'authorS__DESC' | 'content__ASC' | 'content__DESC' | 'highlight__ASC' | 'highlight__DESC' | 'narration__ASC' | 'narration__DESC' | 'og__ASC' | 'og__DESC' | 'publishDate__ASC' | 'publishDate__DESC' | 'subtitle__ASC' | 'subtitle__DESC' | 'version__ASC' | 'version__DESC'

export interface CodeSnippetComponent {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    code: BlockCodeSnippet
    fileName: Scalars['String']
    __typename: 'CodeSnippetComponent'
}

export type CodeSnippetComponentOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'code__ASC' | 'code__DESC' | 'fileName__ASC' | 'fileName__DESC'

export interface CodeSnippetWithDifferentLanguagesComponent {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    snippets: Snippets
    __typename: 'CodeSnippetWithDifferentLanguagesComponent'
}

export type CodeSnippetWithDifferentLanguagesComponentOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'snippets__ASC' | 'snippets__DESC'

export interface Collections {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    authors: Authors
    templateAuthors: TemplateAuthors
    testimonials: Testimonials
    __typename: 'Collections'
}

export interface ComparisonBentoComponent {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    bentoGrid: BentoGrid
    title: Scalars['String']
    __typename: 'ComparisonBentoComponent'
}

export type ComparisonBentoComponentOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'bentoGrid__ASC' | 'bentoGrid__DESC' | 'title__ASC' | 'title__DESC'

export interface ComparisonItemComponent {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    group: Scalars['BSHBSelect__2079142124']
    personal: UnionBooleanFeatureComponentFreeTextComponentLimitComponent
    team: UnionBooleanFeatureComponentFreeTextComponentLimitComponent
    tooltipInfo: (Scalars['String'] | null)
    unlimited: UnionBooleanFeatureComponentFreeTextComponentLimitComponent
    __typename: 'ComparisonItemComponent'
}

export type ComparisonItemComponentOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'group__ASC' | 'group__DESC' | 'personal__ASC' | 'personal__DESC' | 'team__ASC' | 'team__DESC' | 'tooltipInfo__ASC' | 'tooltipInfo__DESC' | 'unlimited__ASC' | 'unlimited__DESC'

export interface ComparisonStepsComponent {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    steps: Steps_1
    __typename: 'ComparisonStepsComponent'
}

export type ComparisonStepsComponentOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'steps__ASC' | 'steps__DESC'

export interface ComparisonTableComponent {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    featuresAndBenefits: FeaturesAndBenefits
    title: Scalars['String']
    __typename: 'ComparisonTableComponent'
}

export type ComparisonTableComponentOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'featuresAndBenefits__ASC' | 'featuresAndBenefits__DESC' | 'title__ASC' | 'title__DESC'

export interface Comparisons {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (ComparisonsItem | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: ComparisonsItem[]
    __typename: 'Comparisons'
}

export interface ComparisonsItem {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    logo: BlockImage
    sections: (UnionComparisonTableComponentComparisonBentoComponentComparisonStepsComponent[] | null)
    __typename: 'ComparisonsItem'
}

export type ComparisonsItemOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'logo__ASC' | 'logo__DESC' | 'sections__ASC' | 'sections__DESC'

export interface Components {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    changelogFloatingBannerHighlightComps: ChangelogFloatingBannerHighlightComps
    inEditorTimelineGuides: InEditorTimelineGuides
    pricingBanner: PricingBanner
    __typename: 'Components'
}

export interface Content {
    html: Scalars['String']
    json: ContentRichText
    markdown: Scalars['String']
    plainText: Scalars['String']
    readingTime: Scalars['Int']
    __typename: 'Content'
}

export interface ContentRichText {
    content: Scalars['BSHBRichTextContentSchema']
    toc: Scalars['BSHBRichTextTOCSchema']
    __typename: 'ContentRichText'
}

export interface Content_1 {
    html: Scalars['String']
    json: Content_1RichText
    markdown: Scalars['String']
    plainText: Scalars['String']
    readingTime: Scalars['Int']
    __typename: 'Content_1'
}

export interface Content_10 {
    html: Scalars['String']
    json: Content_10RichText
    markdown: Scalars['String']
    plainText: Scalars['String']
    readingTime: Scalars['Int']
    __typename: 'Content_10'
}

export interface Content_10RichText {
    content: Scalars['BSHBRichTextContentSchema']
    toc: Scalars['BSHBRichTextTOCSchema']
    __typename: 'Content_10RichText'
}

export interface Content_1RichText {
    blocks: UnionCodeSnippetComponentCalloutComponent[]
    content: Scalars['BSHBRichTextContentSchema']
    toc: Scalars['BSHBRichTextTOCSchema']
    __typename: 'Content_1RichText'
}

export interface Content_2 {
    html: Scalars['String']
    json: Content_2RichText
    markdown: Scalars['String']
    plainText: Scalars['String']
    readingTime: Scalars['Int']
    __typename: 'Content_2'
}

export interface Content_2RichText {
    content: Scalars['BSHBRichTextContentSchema']
    toc: Scalars['BSHBRichTextTOCSchema']
    __typename: 'Content_2RichText'
}

export interface Content_3 {
    html: Scalars['String']
    json: Content_3RichText
    markdown: Scalars['String']
    plainText: Scalars['String']
    readingTime: Scalars['Int']
    __typename: 'Content_3'
}

export interface Content_3RichText {
    blocks: UnionCalloutComponent[]
    content: Scalars['BSHBRichTextContentSchema']
    toc: Scalars['BSHBRichTextTOCSchema']
    __typename: 'Content_3RichText'
}

export interface Content_4 {
    html: Scalars['String']
    json: Content_4RichText
    markdown: Scalars['String']
    plainText: Scalars['String']
    readingTime: Scalars['Int']
    __typename: 'Content_4'
}

export interface Content_4RichText {
    content: Scalars['BSHBRichTextContentSchema']
    toc: Scalars['BSHBRichTextTOCSchema']
    __typename: 'Content_4RichText'
}

export interface Content_5 {
    html: Scalars['String']
    json: Content_5RichText
    markdown: Scalars['String']
    plainText: Scalars['String']
    readingTime: Scalars['Int']
    __typename: 'Content_5'
}

export interface Content_5RichText {
    content: Scalars['BSHBRichTextContentSchema']
    toc: Scalars['BSHBRichTextTOCSchema']
    __typename: 'Content_5RichText'
}

export interface Content_6 {
    html: Scalars['String']
    json: Content_6RichText
    markdown: Scalars['String']
    plainText: Scalars['String']
    readingTime: Scalars['Int']
    __typename: 'Content_6'
}

export interface Content_6RichText {
    content: Scalars['BSHBRichTextContentSchema']
    toc: Scalars['BSHBRichTextTOCSchema']
    __typename: 'Content_6RichText'
}

export interface Content_7 {
    html: Scalars['String']
    json: Content_7RichText
    markdown: Scalars['String']
    plainText: Scalars['String']
    readingTime: Scalars['Int']
    __typename: 'Content_7'
}

export interface Content_7RichText {
    blocks: UnionTextWithColorComponent[]
    content: Scalars['BSHBRichTextContentSchema']
    toc: Scalars['BSHBRichTextTOCSchema']
    __typename: 'Content_7RichText'
}

export interface Content_8 {
    html: Scalars['String']
    json: Content_8RichText
    markdown: Scalars['String']
    plainText: Scalars['String']
    readingTime: Scalars['Int']
    __typename: 'Content_8'
}

export interface Content_8RichText {
    content: Scalars['BSHBRichTextContentSchema']
    toc: Scalars['BSHBRichTextTOCSchema']
    __typename: 'Content_8RichText'
}

export interface Content_9 {
    html: Scalars['String']
    json: Content_9RichText
    markdown: Scalars['String']
    plainText: Scalars['String']
    readingTime: Scalars['Int']
    __typename: 'Content_9'
}

export interface Content_9RichText {
    content: Scalars['BSHBRichTextContentSchema']
    toc: Scalars['BSHBRichTextTOCSchema']
    __typename: 'Content_9RichText'
}

export interface ContextForLlm {
    html: Scalars['String']
    json: ContextForLlmRichText
    markdown: Scalars['String']
    plainText: Scalars['String']
    readingTime: Scalars['Int']
    __typename: 'ContextForLlm'
}

export interface ContextForLlmRichText {
    blocks: UnionThreadComponentTokenComponentRepoSchemaComponentBaseHubGuidelinesAndBlockReferenceComponent[]
    content: Scalars['BSHBRichTextContentSchema']
    toc: Scalars['BSHBRichTextTOCSchema']
    __typename: 'ContextForLlmRichText'
}

export interface Copy {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    title: Scalars['String']
    __typename: 'Copy'
}

export interface CoverImageComponent {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    displayType: Scalars['BSHBSelect__1015351733']
    image: BlockImage
    __typename: 'CoverImageComponent'
}

export type CoverImageComponentOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'displayType__ASC' | 'displayType__DESC' | 'image__ASC' | 'image__DESC'

export interface CrashNotifications {
    /** The `webhookSecret` is used to verify the authenticity of the webhook request, and also to type the payload. */
    webhookSecret: Scalars['bshb_workflow__1533000670']
    __typename: 'CrashNotifications'
}

export interface CrashReports {
    /** The `adminKey` gives clients the ability to query, delete and update this block's data. **It's not meant to be exposed to the public.** */
    adminKey: Scalars['bshb_event_314620664']
    /** The `ingestKey` gives clients the ability to send new events to this block. Generally, it's safe to expose it to the public. */
    ingestKey: Scalars['bshb_event_314620664']
    schema: Scalars['BSHBEventSchema']
    __typename: 'CrashReports'
}

export interface DemoComponent {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    script: (Script | null)
    video: (BlockVideo | null)
    __typename: 'DemoComponent'
}

export type DemoComponentOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'script__ASC' | 'script__DESC' | 'video__ASC' | 'video__DESC'

export interface Demos {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    homepageDemo: DemoComponent
    __typename: 'Demos'
}

export interface Description {
    html: Scalars['String']
    json: DescriptionRichText
    markdown: Scalars['String']
    plainText: Scalars['String']
    readingTime: Scalars['Int']
    __typename: 'Description'
}

export interface DescriptionRichText {
    content: Scalars['BSHBRichTextContentSchema']
    toc: Scalars['BSHBRichTextTOCSchema']
    __typename: 'DescriptionRichText'
}

export interface Description_1 {
    html: Scalars['String']
    json: Description_1RichText
    markdown: Scalars['String']
    plainText: Scalars['String']
    readingTime: Scalars['Int']
    __typename: 'Description_1'
}

export interface Description_1RichText {
    content: Scalars['BSHBRichTextContentSchema']
    toc: Scalars['BSHBRichTextTOCSchema']
    __typename: 'Description_1RichText'
}

export interface Emails {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (EmailsItem | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: EmailsItem[]
    __typename: 'Emails'
}

export interface EmailsItem {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    __typename: 'EmailsItem'
}

export type EmailsItemOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC'

export interface EnterprisePlan {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    cta: ButtonComponent
    description: Description_1
    lineItems: LineItems_1
    planLabel: Scalars['String']
    __typename: 'EnterprisePlan'
}

export interface Entries {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (ChangelogTemplateComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: ChangelogTemplateComponent[]
    __typename: 'Entries'
}

export interface Faq {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    faqs: Faqs
    title: Scalars['String']
    __typename: 'Faq'
}

export interface Faqs {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (FaqsItem | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: FaqsItem[]
    __typename: 'Faqs'
}

export interface FaqsItem {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    answer: Scalars['String']
    question: Scalars['String']
    __typename: 'FaqsItem'
}

export type FaqsItemOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'answer__ASC' | 'answer__DESC' | 'question__ASC' | 'question__DESC'

export interface FeatureComponent {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    image: BlockImage
    pros: Pros
    subtitle: Subtitle
    title: Scalars['String']
    __typename: 'FeatureComponent'
}

export type FeatureComponentOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'image__ASC' | 'image__DESC' | 'pros__ASC' | 'pros__DESC' | 'subtitle__ASC' | 'subtitle__DESC' | 'title__ASC' | 'title__DESC'

export interface FeatureComponent_1 {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    __typename: 'FeatureComponent_1'
}

export type FeatureComponent_1OrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC'

export interface FeaturedComponent {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    href: (Scalars['String'] | null)
    title: (Scalars['String'] | null)
    __typename: 'FeaturedComponent'
}

export type FeaturedComponentOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'href__ASC' | 'href__DESC' | 'title__ASC' | 'title__DESC'

export interface Features {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (FeaturesItem | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: FeaturesItem[]
    __typename: 'Features'
}

export interface FeaturesAndBenefits {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (FeaturesAndBenefitsItem | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: FeaturesAndBenefitsItem[]
    __typename: 'FeaturesAndBenefits'
}

export interface FeaturesAndBenefitsItem {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    basehub: Scalars['Boolean']
    competitor: Scalars['Boolean']
    __typename: 'FeaturesAndBenefitsItem'
}

export type FeaturesAndBenefitsItemOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'basehub__ASC' | 'basehub__DESC' | 'competitor__ASC' | 'competitor__DESC'

export interface FeaturesItem {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    content: Content
    image: BlockImage
    __typename: 'FeaturesItem'
}

export type FeaturesItemOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'content__ASC' | 'content__DESC' | 'image__ASC' | 'image__DESC'

export interface FeaturesItem_1 {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    __typename: 'FeaturesItem_1'
}

export type FeaturesItem_1OrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC'

export interface FeaturesItem_2 {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    __typename: 'FeaturesItem_2'
}

export type FeaturesItem_2OrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC'

export interface FeaturesLimitsComponent {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    aiChat: BooleanFeatureComponent
    analytics: LimitComponent
    apiRequests: LimitComponent
    assetRequests: LimitComponent
    assetStorage: LimitComponent
    blocks: LimitComponent
    dedicatedSuccessManager: BooleanFeatureComponent
    email: LimitComponent
    search: FreeTextComponent
    teams: BooleanFeatureComponent
    templates: BooleanFeatureComponent
    unlimitedUsage: BooleanFeatureComponent
    viewOnlyMode: BooleanFeatureComponent
    __typename: 'FeaturesLimitsComponent'
}

export type FeaturesLimitsComponentOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'aiChat__ASC' | 'aiChat__DESC' | 'analytics__ASC' | 'analytics__DESC' | 'apiRequests__ASC' | 'apiRequests__DESC' | 'assetRequests__ASC' | 'assetRequests__DESC' | 'assetStorage__ASC' | 'assetStorage__DESC' | 'blocks__ASC' | 'blocks__DESC' | 'dedicatedSuccessManager__ASC' | 'dedicatedSuccessManager__DESC' | 'email__ASC' | 'email__DESC' | 'search__ASC' | 'search__DESC' | 'teams__ASC' | 'teams__DESC' | 'templates__ASC' | 'templates__DESC' | 'unlimitedUsage__ASC' | 'unlimitedUsage__DESC' | 'viewOnlyMode__ASC' | 'viewOnlyMode__DESC'

export interface Features_1 {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (FeatureComponent_1 | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: FeatureComponent_1[]
    __typename: 'Features_1'
}

export interface Features_2 {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (FeaturesItem_1 | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: FeaturesItem_1[]
    __typename: 'Features_2'
}

export interface Features_3 {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (FeaturesItem_2 | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: FeaturesItem_2[]
    __typename: 'Features_3'
}

export interface Feedback {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    form: Form_1
    sendToDiscord: SendToDiscord
    __typename: 'Feedback'
}

export interface Form {
    /** The `adminKey` gives clients the ability to query, delete and update this block's data. **It's not meant to be exposed to the public.** */
    adminKey: Scalars['bshb_event_2066998897']
    /** The `ingestKey` gives clients the ability to send new events to this block. Generally, it's safe to expose it to the public. */
    ingestKey: Scalars['bshb_event_2066998897']
    schema: Scalars['BSHBEventSchema']
    __typename: 'Form'
}

export interface Form_1 {
    /** The `adminKey` gives clients the ability to query, delete and update this block's data. **It's not meant to be exposed to the public.** */
    adminKey: Scalars['bshb_event__412932618']
    /** The `ingestKey` gives clients the ability to send new events to this block. Generally, it's safe to expose it to the public. */
    ingestKey: Scalars['bshb_event__412932618']
    schema: Scalars['BSHBEventSchema']
    __typename: 'Form_1'
}

export interface FreeTextComponent {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    value: Scalars['String']
    __typename: 'FreeTextComponent'
}

export type FreeTextComponentOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'value__ASC' | 'value__DESC'

export interface FrozenApis {
    /** The `adminKey` gives clients the ability to query, delete and update this block's data. **It's not meant to be exposed to the public.** */
    adminKey: Scalars['bshb_event__1049716265']
    /** The `ingestKey` gives clients the ability to send new events to this block. Generally, it's safe to expose it to the public. */
    ingestKey: Scalars['bshb_event__1049716265']
    schema: Scalars['BSHBEventSchema']
    __typename: 'FrozenApis'
}

export interface FrozenApisNoti {
    /** The `webhookSecret` is used to verify the authenticity of the webhook request, and also to type the payload. */
    webhookSecret: Scalars['bshb_workflow__1673447047']
    __typename: 'FrozenApisNoti'
}

export interface GeneralEvents {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    miscellaneous: Miscellaneous
    __typename: 'GeneralEvents'
}

export interface GetUploadSignedURL {
    signedURL: Scalars['String']
    uploadURL: Scalars['String']
    __typename: 'GetUploadSignedURL'
}

export interface GuideComponent {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    steps: Steps
    subtitle: (Scalars['String'] | null)
    title: Scalars['String']
    __typename: 'GuideComponent'
}

export type GuideComponentOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'steps__ASC' | 'steps__DESC' | 'subtitle__ASC' | 'subtitle__DESC' | 'title__ASC' | 'title__DESC'

export interface GuideStepComponent {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    completeCondition: Scalars['BSHBSelect_1309117910'][]
    description: (Scalars['String'] | null)
    icon: BlockImage
    video: (BlockVideo | null)
    __typename: 'GuideStepComponent'
}

export type GuideStepComponentOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'completeCondition__ASC' | 'completeCondition__DESC' | 'description__ASC' | 'description__DESC' | 'icon__ASC' | 'icon__DESC' | 'video__ASC' | 'video__DESC'

export interface Header {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    middleLinks: MiddleLinks
    untitled: (UnionPlanLineItemComponentFeatureComponent_1HeroCustomersItemAuthorsItemHeadersItemPriceComponentTemplateAuthorsItemFeaturesItemTryLightModeComponentBlogpostTemplateComponentMiddleLinksItemPaymentModeComponentFeaturesLimitsComponentGuideStepComponentPricingPlanComponentWhimsicalEmbedComponentSnippetsItemBooleanFeatureComponentComparisonItemComponentRoadmapItemBuildTimeRedirectsItemQuoteComponentFeaturesItem_1FaqsItemFreeTextComponentLimitComponentCodeSnippetWithDifferentLanguagesComponentAsNewTabComponentCodeSnippetComponentFeatureComponentMarketingHeaderComponentDemoComponentCoverImageComponentCalloutComponentAsFloatingBannerComponentButtonComponentGuideComponentMetaComponentTextWithColorComponentChangelogTemplateComponent[] | null)
    __typename: 'Header'
}

export interface Headers {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (HeadersItem | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: HeadersItem[]
    __typename: 'Headers'
}

export interface HeadersItem {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    ctaLabelOverwrite: (Scalars['String'] | null)
    plan: PricingPlanComponent
    __typename: 'HeadersItem'
}

export type HeadersItemOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'ctaLabelOverwrite__ASC' | 'ctaLabelOverwrite__DESC' | 'plan__ASC' | 'plan__DESC'

export interface HeroCustomers {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (HeroCustomersItem | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: HeroCustomersItem[]
    __typename: 'HeroCustomers'
}

export interface HeroCustomersItem {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    image: BlockImage
    __typename: 'HeroCustomersItem'
}

export type HeroCustomersItemOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'image__ASC' | 'image__DESC'

export interface HeroSubtitle {
    html: Scalars['String']
    json: HeroSubtitleRichText
    markdown: Scalars['String']
    plainText: Scalars['String']
    readingTime: Scalars['Int']
    __typename: 'HeroSubtitle'
}

export interface HeroSubtitleRichText {
    content: Scalars['BSHBRichTextContentSchema']
    toc: Scalars['BSHBRichTextTOCSchema']
    __typename: 'HeroSubtitleRichText'
}

export interface HeroTitle {
    html: Scalars['String']
    json: HeroTitleRichText
    markdown: Scalars['String']
    plainText: Scalars['String']
    readingTime: Scalars['Int']
    __typename: 'HeroTitle'
}

export interface HeroTitleRichText {
    blocks: UnionTextWithColorComponent[]
    content: Scalars['BSHBRichTextContentSchema']
    toc: Scalars['BSHBRichTextTOCSchema']
    __typename: 'HeroTitleRichText'
}

export interface Homepage {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    analytics: PageAnalyticsComponent
    bento: Bento
    customersTagline: Scalars['String']
    faq: Faq
    featuredPost: (UnionBlogpostTemplateComponentChangelogTemplateComponent | null)
    heroCustomers: HeroCustomers
    heroImage: BlockImage
    heroMainCta: ButtonComponent
    heroSecondaryCta: ButtonComponent
    heroSubtitle: (HeroSubtitle | null)
    heroTitle: (HeroTitle | null)
    heroVideo: BlockVideo
    homeMeta: MetaComponent
    homepageFeature1: FeatureComponent
    homepageFeature3: FeatureComponent
    manifesto: Manifesto
    roadmap: Roadmap
    shoutouts: Shoutouts
    __typename: 'Homepage'
}

export interface Icons {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    email: Scalars['String']
    rssFeed: Scalars['String']
    __typename: 'Icons'
}

export interface InEditorTimelineGuides {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    developerGuide: GuideComponent
    editorGuide: GuideComponent
    __typename: 'InEditorTimelineGuides'
}

export interface IntegrationInstructions {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (IntegrationInstructionsItem | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: IntegrationInstructionsItem[]
    __typename: 'IntegrationInstructions'
}

export interface IntegrationInstructionsItem {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    body: Body_2
    icon: Scalars['String']
    __typename: 'IntegrationInstructionsItem'
}

export type IntegrationInstructionsItemOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'body__ASC' | 'body__DESC' | 'icon__ASC' | 'icon__DESC'

export interface Invitation {
    html: Scalars['String']
    json: InvitationRichText
    markdown: Scalars['String']
    plainText: Scalars['String']
    readingTime: Scalars['Int']
    __typename: 'Invitation'
}

export interface InvitationRichText {
    content: Scalars['BSHBRichTextContentSchema']
    toc: Scalars['BSHBRichTextTOCSchema']
    __typename: 'InvitationRichText'
}

export interface Label {
    html: Scalars['String']
    json: LabelRichText
    markdown: Scalars['String']
    plainText: Scalars['String']
    readingTime: Scalars['Int']
    __typename: 'Label'
}

export interface LabelRichText {
    blocks: UnionTextWithColorComponent[]
    content: Scalars['BSHBRichTextContentSchema']
    toc: Scalars['BSHBRichTextTOCSchema']
    __typename: 'LabelRichText'
}

export interface LegalStuff {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    privacy: Privacy
    terms: Terms
    __typename: 'LegalStuff'
}

export interface LimitComponent {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    initial: Scalars['Float']
    pricePerStep: (Scalars['Float'] | null)
    step: (Scalars['Float'] | null)
    unit: (Scalars['BSHBSelect__103598835'] | null)
    __typename: 'LimitComponent'
}

export type LimitComponentOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'initial__ASC' | 'initial__DESC' | 'pricePerStep__ASC' | 'pricePerStep__DESC' | 'step__ASC' | 'step__DESC' | 'unit__ASC' | 'unit__DESC'

export interface LineItems {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (PlanLineItemComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: PlanLineItemComponent[]
    __typename: 'LineItems'
}

export interface LineItems_1 {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (PlanLineItemComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: PlanLineItemComponent[]
    __typename: 'LineItems_1'
}

export interface ListMeta {
    /** Number of items after applying filters but before pagination */
    filteredCount: Scalars['Int']
    /** Total number of items in collection before any filtering/pagination */
    totalCount: Scalars['Int']
    __typename: 'ListMeta'
}

export interface Manifesto {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    content: (Content_7 | null)
    manifestoCta: ButtonComponent
    __typename: 'Manifesto'
}

export interface Manifesto_1 {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    analytics: PageAnalyticsComponent
    content: Content_8
    title: Scalars['String']
    __typename: 'Manifesto_1'
}

export interface MarketingHeaderComponent {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    subtitle: Scalars['String']
    title: Scalars['String']
    __typename: 'MarketingHeaderComponent'
}

export type MarketingHeaderComponentOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'subtitle__ASC' | 'subtitle__DESC' | 'title__ASC' | 'title__DESC'

export type MediaBlock = (BlockAudio | BlockFile | BlockImage | BlockVideo) & { __isUnion?: true }

export type MediaBlockUnion = (BlockAudio | BlockFile | BlockImage | BlockVideo) & { __isUnion?: true }


/** Use for SEO */
export interface MetaComponent {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    ogImage: BlockImage
    subtitle: Scalars['String']
    title: Scalars['String']
    __typename: 'MetaComponent'
}

export type MetaComponentOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'ogImage__ASC' | 'ogImage__DESC' | 'subtitle__ASC' | 'subtitle__DESC' | 'title__ASC' | 'title__DESC'

export interface MiddleLinks {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (MiddleLinksItem | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: MiddleLinksItem[]
    __typename: 'MiddleLinks'
}

export interface MiddleLinksItem {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    href: Scalars['String']
    new: Scalars['Boolean']
    __typename: 'MiddleLinksItem'
}

export type MiddleLinksItemOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'href__ASC' | 'href__DESC' | 'new__ASC' | 'new__DESC'

export interface MiscAppEvents {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    crashNotifications: CrashNotifications
    crashReports: CrashReports
    frozenApis: FrozenApis
    frozenApisNoti: FrozenApisNoti
    __typename: 'MiscAppEvents'
}

export interface Miscellaneous {
    /** The `adminKey` gives clients the ability to query, delete and update this block's data. **It's not meant to be exposed to the public.** */
    adminKey: Scalars['bshb_event_197359120']
    /** The `ingestKey` gives clients the ability to send new events to this block. Generally, it's safe to expose it to the public. */
    ingestKey: Scalars['bshb_event_197359120']
    schema: Scalars['BSHBEventSchema']
    __typename: 'Miscellaneous'
}

export interface Mutation {
    /**
     * Returns a signed url and an upload url so that you can upload files into your repository.
     * 
     * Example usage with JavaScript:
     * ```js
     * async function handleUpload(file: File) {
     *   const { getUploadSignedURL } = await basehub().mutation({
     *     getUploadSignedURL: {
     *       __args: { fileName: file.name },
     *       signedURL: true,
     *       uploadURL: true,
     *     }
     *   })
     * 
     *   const { signedURL, uploadURL } = getUploadSignedURL
     * 
     *   await fetch(signedURL, { method: 'PUT', body: file })
     * 
     *   // done! do something with the uploadURL now
     * }
     * ```
     * 
     */
    getUploadSignedURL: GetUploadSignedURL
    /** Start a job that can be awaited and the result given directly. Under the hood, it runs `transactionAsync` and polls for the result until it is available. You can pass a `timeout` argument, the default being 30_000ms. */
    transaction: TransactionStatus
    /** Start an asynchronous job to mutate BaseHub data. Returns a transaction ID which you can use to get the result of the job. */
    transactionAsync: Scalars['String']
    transactionStatus: TransactionStatus
    __typename: 'Mutation'
}

export interface Narration {
    /** The `webhookSecret` is used to verify the authenticity of the webhook request, and also to type the payload. */
    webhookSecret: Scalars['bshb_workflow_1437101429']
    __typename: 'Narration'
}

export interface NewSub {
    /** The `webhookSecret` is used to verify the authenticity of the webhook request, and also to type the payload. */
    webhookSecret: Scalars['bshb_workflow__1644525346']
    __typename: 'NewSub'
}

export interface Newsletter {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    copy: Copy
    emails: Emails
    form: Form
    newSub: NewSub
    send: Send
    __typename: 'Newsletter'
}

export interface Note {
    html: Scalars['String']
    json: NoteRichText
    markdown: Scalars['String']
    plainText: Scalars['String']
    readingTime: Scalars['Int']
    __typename: 'Note'
}

export interface NoteRichText {
    content: Scalars['BSHBRichTextContentSchema']
    toc: Scalars['BSHBRichTextTOCSchema']
    __typename: 'NoteRichText'
}

export interface Onboarding {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    content: Content_10
    headerBackground: (BlockImage | null)
    team: AuthorsItem[]
    teamTitle: Scalars['String']
    title: Title_1
    __typename: 'Onboarding'
}

export interface PageAnalyticsComponent {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    pageViews: PageViews
    __typename: 'PageAnalyticsComponent'
}

export type PageAnalyticsComponentOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'pageViews__ASC' | 'pageViews__DESC'

export interface PageViews {
    /** The `adminKey` gives clients the ability to query, delete and update this block's data. **It's not meant to be exposed to the public.** */
    adminKey: Scalars['bshb_event_371102077']
    /** The `ingestKey` gives clients the ability to send new events to this block. Generally, it's safe to expose it to the public. */
    ingestKey: Scalars['bshb_event_371102077']
    schema: Scalars['BSHBEventSchema']
    __typename: 'PageViews'
}

export interface PaymentModeComponent {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    cardTag: CardTag
    switchLabel: SwitchLabel
    __typename: 'PaymentModeComponent'
}

export type PaymentModeComponentOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'cardTag__ASC' | 'cardTag__DESC' | 'switchLabel__ASC' | 'switchLabel__DESC'

export interface PaymentSwitch {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    monthly: PaymentModeComponent
    yearly: PaymentModeComponent
    __typename: 'PaymentSwitch'
}


/** Simple line item with no fields */
export interface PlanLineItemComponent {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    __typename: 'PlanLineItemComponent'
}

export type PlanLineItemComponentOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC'

export interface PlanNameComponent {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    __typename: 'PlanNameComponent'
}

export type PlanNameComponentOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC'

export interface Plans {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (PricingPlanComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: PricingPlanComponent[]
    __typename: 'Plans'
}

export interface PlansComparisonTable {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    body: Body_1
    headers: Headers
    __typename: 'PlansComparisonTable'
}

export interface Posts {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (BlogpostTemplateComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: BlogpostTemplateComponent[]
    __typename: 'Posts'
}

export interface PriceComponent {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    label: (Label | null)
    monthly: Scalars['Float']
    yearly: Scalars['Float']
    __typename: 'PriceComponent'
}

export type PriceComponentOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'label__ASC' | 'label__DESC' | 'monthly__ASC' | 'monthly__DESC' | 'yearly__ASC' | 'yearly__DESC'

export interface Pricing {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    baselineFeatures: BaselineFeatures
    calculator: Calculator
    enterprisePlan: EnterprisePlan
    paymentSwitch: PaymentSwitch
    plans: Plans
    plansComparisonTable: PlansComparisonTable
    subtitle: Subtitle_5
    title: Scalars['String']
    __typename: 'Pricing'
}

export interface PricingBanner {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    ctas: ButtonComponent[]
    features: Features_3
    overtitle: Scalars['String']
    title: Scalars['String']
    __typename: 'PricingBanner'
}

export interface PricingPlanComponent {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    cta: ButtonComponent
    ctaNote: (Scalars['String'] | null)
    description: Description
    featuresLimits: FeaturesLimitsComponent
    lineItems: LineItems
    listTitle: (Scalars['String'] | null)
    planLabel: Scalars['String']
    price: PriceComponent
    __typename: 'PricingPlanComponent'
}

export type PricingPlanComponentOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'ctaNote__ASC' | 'ctaNote__DESC' | 'cta__ASC' | 'cta__DESC' | 'description__ASC' | 'description__DESC' | 'featuresLimits__ASC' | 'featuresLimits__DESC' | 'lineItems__ASC' | 'lineItems__DESC' | 'listTitle__ASC' | 'listTitle__DESC' | 'planLabel__ASC' | 'planLabel__DESC' | 'price__ASC' | 'price__DESC'

export interface Privacy {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    analytics: PageAnalyticsComponent
    content: Content_5
    title: Scalars['String']
    __typename: 'Privacy'
}

export interface PromptV11 {
    html: Scalars['String']
    json: PromptV11RichText
    markdown: Scalars['String']
    plainText: Scalars['String']
    readingTime: Scalars['Int']
    __typename: 'PromptV11'
}

export interface PromptV11RichText {
    blocks: UnionTokenComponent_1RepoSchemaComponent_2[]
    content: Scalars['BSHBRichTextContentSchema']
    toc: Scalars['BSHBRichTextTOCSchema']
    __typename: 'PromptV11RichText'
}

export interface Prompts {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    aboutBasehub: (AboutBasehub | null)
    contextForLlm: (ContextForLlm | null)
    promptV11: (PromptV11 | null)
    repoLlmsTxt: RepoLlmsTxt
    __typename: 'Prompts'
}

export interface Pros {
    html: Scalars['String']
    json: ProsRichText
    markdown: Scalars['String']
    plainText: Scalars['String']
    readingTime: Scalars['Int']
    __typename: 'Pros'
}

export interface ProsRichText {
    content: Scalars['BSHBRichTextContentSchema']
    toc: Scalars['BSHBRichTextTOCSchema']
    __typename: 'ProsRichText'
}

export interface Query {
    /** Query across all of the instances of a component. Pass in filters and sorts if you want, and get each instance via the `items` key. */
    _componentInstances: _components
    /** The structure of the repository. Used by START. */
    _structure: Scalars['JSON']
    _sys: RepoSys
    announcementBanner: AnnouncementBanner
    baseHubAgents: BaseHubAgents
    basehubVs: BasehubVs
    blog: Blog
    buildTimeRedirects: BuildTimeRedirects
    changelog: Changelog
    collections: Collections
    components: Components
    demos: Demos
    features: Features_1
    feedback: Feedback
    generalEvents: GeneralEvents
    header: Header
    homepage: Homepage
    icons: Icons
    legalStuff: LegalStuff
    manifesto: Manifesto_1
    miscAppEvents: MiscAppEvents
    newsletter: Newsletter
    onboarding: Onboarding
    pricing: Pricing
    prompts: Prompts
    templates: Templates
    __typename: 'Query'
}

export interface Quote {
    html: Scalars['String']
    json: QuoteRichText
    markdown: Scalars['String']
    plainText: Scalars['String']
    readingTime: Scalars['Int']
    __typename: 'Quote'
}

export interface QuoteComponent {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    author: AuthorsItem
    href: Scalars['String']
    quote: Quote
    __typename: 'QuoteComponent'
}

export type QuoteComponentOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'author__ASC' | 'author__DESC' | 'href__ASC' | 'href__DESC' | 'quote__ASC' | 'quote__DESC'

export interface QuoteRichText {
    content: Scalars['BSHBRichTextContentSchema']
    toc: Scalars['BSHBRichTextTOCSchema']
    __typename: 'QuoteRichText'
}

export interface RepoLlmsTxt {
    html: Scalars['String']
    json: RepoLlmsTxtRichText
    markdown: Scalars['String']
    plainText: Scalars['String']
    readingTime: Scalars['Int']
    __typename: 'RepoLlmsTxt'
}

export interface RepoLlmsTxtRichText {
    blocks: UnionRepoTitleComponentRepoSchemaComponent_1[]
    content: Scalars['BSHBRichTextContentSchema']
    toc: Scalars['BSHBRichTextTOCSchema']
    __typename: 'RepoLlmsTxtRichText'
}

export interface RepoSchemaComponent {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    __typename: 'RepoSchemaComponent'
}

export type RepoSchemaComponentOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC'

export interface RepoSchemaComponent_1 {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    __typename: 'RepoSchemaComponent_1'
}

export type RepoSchemaComponent_1OrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC'

export interface RepoSchemaComponent_2 {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    __typename: 'RepoSchemaComponent_2'
}

export type RepoSchemaComponent_2OrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC'

export interface RepoSys {
    dashboardUrl: Scalars['String']
    forkUrl: Scalars['String']
    hash: Scalars['String']
    id: Scalars['ID']
    slug: Scalars['String']
    title: Scalars['String']
    __typename: 'RepoSys'
}

export interface RepoTitleComponent {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    __typename: 'RepoTitleComponent'
}

export type RepoTitleComponentOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC'

export type RichTextJson = (AboutBasehubRichText | BaseRichTextJson | BodyRichText | Body_2RichText | CardTagRichText | ContentRichText | Content_1RichText | Content_2RichText | Content_3RichText | Content_4RichText | Content_5RichText | Content_6RichText | Content_7RichText | Content_8RichText | Content_9RichText | Content_10RichText | ContextForLlmRichText | DescriptionRichText | Description_1RichText | HeroSubtitleRichText | HeroTitleRichText | InvitationRichText | LabelRichText | NoteRichText | PromptV11RichText | ProsRichText | QuoteRichText | RepoLlmsTxtRichText | ScriptRichText | SubtitleRichText | Subtitle_1RichText | Subtitle_2RichText | Subtitle_3RichText | Subtitle_4RichText | Subtitle_5RichText | SwitchLabelRichText | TitleRichText | Title_1RichText) & { __isUnion?: true }

export interface Roadmap {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    invitation: Invitation
    rawWireframe: BlockImage
    roadmap: Roadmap_1
    subtitle: Subtitle_4
    title: Scalars['String']
    __typename: 'Roadmap'
}

export interface RoadmapItem {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** ISO 8601 date string. */
    date: (Scalars['String'] | null)
    subtitle: (Subtitle_1 | null)
    type: (Scalars['BSHBSelect__1389483365'] | null)
    __typename: 'RoadmapItem'
}

export type RoadmapItemOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'date__ASC' | 'date__DESC' | 'subtitle__ASC' | 'subtitle__DESC' | 'type__ASC' | 'type__DESC'

export interface Roadmap_1 {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (RoadmapItem | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: RoadmapItem[]
    __typename: 'Roadmap_1'
}

export interface Script {
    html: Scalars['String']
    json: ScriptRichText
    markdown: Scalars['String']
    plainText: Scalars['String']
    readingTime: Scalars['Int']
    __typename: 'Script'
}

export interface ScriptRichText {
    content: Scalars['BSHBRichTextContentSchema']
    toc: Scalars['BSHBRichTextTOCSchema']
    __typename: 'ScriptRichText'
}

export interface Sections {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    comparisonBento: ComparisonBentoComponent
    comparisonSteps: ComparisonStepsComponent
    comparisonTable: ComparisonTableComponent
    __typename: 'Sections'
}

export interface Send {
    /** The `webhookSecret` is used to verify the authenticity of the webhook request, and also to type the payload. */
    webhookSecret: Scalars['bshb_workflow_1456460865']
    __typename: 'Send'
}

export interface SendToDiscord {
    /** The `webhookSecret` is used to verify the authenticity of the webhook request, and also to type the payload. */
    webhookSecret: Scalars['bshb_workflow_1103769895']
    __typename: 'SendToDiscord'
}

export interface Shoutouts {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    quotes: QuoteComponent[]
    subtitle: Subtitle_3
    title: Scalars['String']
    __typename: 'Shoutouts'
}

export interface Snippets {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (SnippetsItem | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: SnippetsItem[]
    __typename: 'Snippets'
}

export interface SnippetsItem {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    fileName: Scalars['String']
    snippet: BlockCodeSnippet
    __typename: 'SnippetsItem'
}

export type SnippetsItemOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'fileName__ASC' | 'fileName__DESC' | 'snippet__ASC' | 'snippet__DESC'

export interface Steps {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (GuideStepComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: GuideStepComponent[]
    __typename: 'Steps'
}

export interface StepsItem {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    content: (Content_9 | null)
    featured: FeaturedComponent
    quote: (QuoteComponent | null)
    __typename: 'StepsItem'
}

export type StepsItemOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'content__ASC' | 'content__DESC' | 'featured__ASC' | 'featured__DESC' | 'quote__ASC' | 'quote__DESC'

export interface Steps_1 {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (StepsItem | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: StepsItem[]
    __typename: 'Steps_1'
}

export interface Subtitle {
    html: Scalars['String']
    json: SubtitleRichText
    markdown: Scalars['String']
    plainText: Scalars['String']
    readingTime: Scalars['Int']
    __typename: 'Subtitle'
}

export interface SubtitleRichText {
    content: Scalars['BSHBRichTextContentSchema']
    toc: Scalars['BSHBRichTextTOCSchema']
    __typename: 'SubtitleRichText'
}

export interface Subtitle_1 {
    html: Scalars['String']
    json: Subtitle_1RichText
    markdown: Scalars['String']
    plainText: Scalars['String']
    readingTime: Scalars['Int']
    __typename: 'Subtitle_1'
}

export interface Subtitle_1RichText {
    content: Scalars['BSHBRichTextContentSchema']
    toc: Scalars['BSHBRichTextTOCSchema']
    __typename: 'Subtitle_1RichText'
}

export interface Subtitle_2 {
    html: Scalars['String']
    json: Subtitle_2RichText
    markdown: Scalars['String']
    plainText: Scalars['String']
    readingTime: Scalars['Int']
    __typename: 'Subtitle_2'
}

export interface Subtitle_2RichText {
    content: Scalars['BSHBRichTextContentSchema']
    toc: Scalars['BSHBRichTextTOCSchema']
    __typename: 'Subtitle_2RichText'
}

export interface Subtitle_3 {
    html: Scalars['String']
    json: Subtitle_3RichText
    markdown: Scalars['String']
    plainText: Scalars['String']
    readingTime: Scalars['Int']
    __typename: 'Subtitle_3'
}

export interface Subtitle_3RichText {
    content: Scalars['BSHBRichTextContentSchema']
    toc: Scalars['BSHBRichTextTOCSchema']
    __typename: 'Subtitle_3RichText'
}

export interface Subtitle_4 {
    html: Scalars['String']
    json: Subtitle_4RichText
    markdown: Scalars['String']
    plainText: Scalars['String']
    readingTime: Scalars['Int']
    __typename: 'Subtitle_4'
}

export interface Subtitle_4RichText {
    content: Scalars['BSHBRichTextContentSchema']
    toc: Scalars['BSHBRichTextTOCSchema']
    __typename: 'Subtitle_4RichText'
}

export interface Subtitle_5 {
    html: Scalars['String']
    json: Subtitle_5RichText
    markdown: Scalars['String']
    plainText: Scalars['String']
    readingTime: Scalars['Int']
    __typename: 'Subtitle_5'
}

export interface Subtitle_5RichText {
    blocks: UnionTextWithColorComponent[]
    content: Scalars['BSHBRichTextContentSchema']
    toc: Scalars['BSHBRichTextTOCSchema']
    __typename: 'Subtitle_5RichText'
}

export interface SwitchLabel {
    html: Scalars['String']
    json: SwitchLabelRichText
    markdown: Scalars['String']
    plainText: Scalars['String']
    readingTime: Scalars['Int']
    __typename: 'SwitchLabel'
}

export interface SwitchLabelRichText {
    content: Scalars['BSHBRichTextContentSchema']
    toc: Scalars['BSHBRichTextTOCSchema']
    __typename: 'SwitchLabelRichText'
}

export interface TemplateAuthors {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (TemplateAuthorsItem | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: TemplateAuthorsItem[]
    __typename: 'TemplateAuthors'
}

export interface TemplateAuthorsItem {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    url: Scalars['String']
    __typename: 'TemplateAuthorsItem'
}

export type TemplateAuthorsItemOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'url__ASC' | 'url__DESC'

export interface Templates {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    analytics: PageAnalyticsComponent
    demoVideo: BlockVideo
    meta: MetaComponent
    overtitle: (Scalars['String'] | null)
    subtitle: (Scalars['String'] | null)
    templates: Templates_1
    title: (Scalars['String'] | null)
    watchDemoCta: ButtonComponent
    __typename: 'Templates'
}

export interface TemplatesItem {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    author: TemplateAuthorsItem
    basehubRepoUrl: Scalars['String']
    description: Scalars['String']
    gitRepoUrl: Scalars['String']
    icon: BlockImage
    previewUrl: Scalars['String']
    shortDescription: Scalars['String']
    thumbnail: BlockImage
    __typename: 'TemplatesItem'
}

export type TemplatesItemOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'author__ASC' | 'author__DESC' | 'basehubRepoUrl__ASC' | 'basehubRepoUrl__DESC' | 'description__ASC' | 'description__DESC' | 'gitRepoUrl__ASC' | 'gitRepoUrl__DESC' | 'icon__ASC' | 'icon__DESC' | 'previewUrl__ASC' | 'previewUrl__DESC' | 'shortDescription__ASC' | 'shortDescription__DESC' | 'thumbnail__ASC' | 'thumbnail__DESC'

export interface Templates_1 {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (TemplatesItem | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: TemplatesItem[]
    __typename: 'Templates_1'
}

export interface Terms {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    analytics: PageAnalyticsComponent
    content: Content_6
    title: Scalars['String']
    __typename: 'Terms'
}

export interface Testimonials {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (QuoteComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: QuoteComponent[]
    __typename: 'Testimonials'
}

export interface TextWithColorComponent {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    untitled: BlockColor
    __typename: 'TextWithColorComponent'
}

export type TextWithColorComponentOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'untitled__ASC' | 'untitled__DESC'

export interface ThreadComponent {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    __typename: 'ThreadComponent'
}

export type ThreadComponentOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC'

export interface Title {
    html: Scalars['String']
    json: TitleRichText
    markdown: Scalars['String']
    plainText: Scalars['String']
    readingTime: Scalars['Int']
    __typename: 'Title'
}

export interface TitleRichText {
    content: Scalars['BSHBRichTextContentSchema']
    toc: Scalars['BSHBRichTextTOCSchema']
    __typename: 'TitleRichText'
}

export interface Title_1 {
    html: Scalars['String']
    json: Title_1RichText
    markdown: Scalars['String']
    plainText: Scalars['String']
    readingTime: Scalars['Int']
    __typename: 'Title_1'
}

export interface Title_1RichText {
    blocks: UnionPlanNameComponent[]
    content: Scalars['BSHBRichTextContentSchema']
    toc: Scalars['BSHBRichTextTOCSchema']
    __typename: 'Title_1RichText'
}

export interface TokenComponent {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    __typename: 'TokenComponent'
}

export type TokenComponentOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC'

export interface TokenComponent_1 {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    __typename: 'TokenComponent_1'
}

export type TokenComponent_1OrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC'

export interface TransactionStatus {
    /** Duration in milliseconds. */
    duration: (Scalars['Int'] | null)
    endedAt: (Scalars['String'] | null)
    id: Scalars['String']
    message: (Scalars['String'] | null)
    startedAt: Scalars['String']
    status: TransactionStatusEnum
    __typename: 'TransactionStatus'
}

export type TransactionStatusEnum = 'Cancelled' | 'Completed' | 'Failed' | 'Running' | 'Scheduled'

export interface TryLightModeComponent {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    __typename: 'TryLightModeComponent'
}

export type TryLightModeComponentOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC'

export type UnionAsNewTabComponentAsFloatingBannerComponent = (AsFloatingBannerComponent | AsNewTabComponent) & { __isUnion?: true }

export type UnionBlogpostTemplateComponentChangelogTemplateComponent = (BlogpostTemplateComponent | ChangelogTemplateComponent) & { __isUnion?: true }

export type UnionBooleanFeatureComponentFreeTextComponentLimitComponent = (BooleanFeatureComponent | FreeTextComponent | LimitComponent) & { __isUnion?: true }

export type UnionCalloutComponent = (CalloutComponent) & { __isUnion?: true }

export type UnionCodeSnippetComponentCalloutComponent = (CalloutComponent | CodeSnippetComponent) & { __isUnion?: true }

export type UnionComparisonTableComponentComparisonBentoComponentComparisonStepsComponent = (ComparisonBentoComponent | ComparisonStepsComponent | ComparisonTableComponent) & { __isUnion?: true }

export type UnionPlanLineItemComponentFeatureComponent_1HeroCustomersItemAuthorsItemHeadersItemPriceComponentTemplateAuthorsItemFeaturesItemTryLightModeComponentBlogpostTemplateComponentMiddleLinksItemPaymentModeComponentFeaturesLimitsComponentGuideStepComponentPricingPlanComponentWhimsicalEmbedComponentSnippetsItemBooleanFeatureComponentComparisonItemComponentRoadmapItemBuildTimeRedirectsItemQuoteComponentFeaturesItem_1FaqsItemFreeTextComponentLimitComponentCodeSnippetWithDifferentLanguagesComponentAsNewTabComponentCodeSnippetComponentFeatureComponentMarketingHeaderComponentDemoComponentCoverImageComponentCalloutComponentAsFloatingBannerComponentButtonComponentGuideComponentMetaComponentTextWithColorComponentChangelogTemplateComponent = (AsFloatingBannerComponent | AsNewTabComponent | AuthorsItem | BlogpostTemplateComponent | BooleanFeatureComponent | BuildTimeRedirectsItem | ButtonComponent | CalloutComponent | ChangelogTemplateComponent | CodeSnippetComponent | CodeSnippetWithDifferentLanguagesComponent | ComparisonItemComponent | CoverImageComponent | DemoComponent | FaqsItem | FeatureComponent | FeatureComponent_1 | FeaturesItem | FeaturesItem_1 | FeaturesLimitsComponent | FreeTextComponent | GuideComponent | GuideStepComponent | HeadersItem | HeroCustomersItem | LimitComponent | MarketingHeaderComponent | MetaComponent | MiddleLinksItem | PaymentModeComponent | PlanLineItemComponent | PriceComponent | PricingPlanComponent | QuoteComponent | RoadmapItem | SnippetsItem | TemplateAuthorsItem | TextWithColorComponent | TryLightModeComponent | WhimsicalEmbedComponent) & { __isUnion?: true }

export type UnionPlanNameComponent = (PlanNameComponent) & { __isUnion?: true }

export type UnionRepoTitleComponentRepoSchemaComponent_1 = (RepoSchemaComponent_1 | RepoTitleComponent) & { __isUnion?: true }

export type UnionTextWithColorComponent = (TextWithColorComponent) & { __isUnion?: true }

export type UnionThreadComponentTokenComponentRepoSchemaComponentBaseHubGuidelinesAndBlockReferenceComponent = (BaseHubGuidelinesAndBlockReferenceComponent | RepoSchemaComponent | ThreadComponent | TokenComponent) & { __isUnion?: true }

export type UnionTokenComponent_1RepoSchemaComponent_2 = (RepoSchemaComponent_2 | TokenComponent_1) & { __isUnion?: true }

export type UnionTryLightModeComponent = (TryLightModeComponent) & { __isUnion?: true }

export interface Variant {
    apiName: Scalars['String']
    color: Scalars['String']
    id: Scalars['String']
    isDefault: Scalars['Boolean']
    label: Scalars['String']
    __typename: 'Variant'
}

export interface WhimsicalEmbedComponent {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    href: Scalars['String']
    __typename: 'WhimsicalEmbedComponent'
}

export type WhimsicalEmbedComponentOrderByEnum = '_sys_createdAt__ASC' | '_sys_createdAt__DESC' | '_sys_hash__ASC' | '_sys_hash__DESC' | '_sys_id__ASC' | '_sys_id__DESC' | '_sys_lastModifiedAt__ASC' | '_sys_lastModifiedAt__DESC' | '_sys_slug__ASC' | '_sys_slug__DESC' | '_sys_title__ASC' | '_sys_title__DESC' | 'href__ASC' | 'href__DESC'

export type _ResolveTargetsWithEnum = 'id' | 'objectName'

export type _StructureFormatEnum = 'json' | 'xml'

export interface _components {
    asFloatingBanner: asFloatingBannerComponent_AsList
    asNewTab: asNewTabComponent_AsList
    authorsItem: authorsItem_AsList
    baseHubGuidelinesAndBlockReference: baseHubGuidelinesAndBlockReferenceComponent_AsList
    bentoGridItem: bentoGridItem_AsList
    blogpostTemplate: blogpostTemplateComponent_AsList
    booleanFeature: booleanFeatureComponent_AsList
    buildTimeRedirectsItem: buildTimeRedirectsItem_AsList
    button: buttonComponent_AsList
    callout: calloutComponent_AsList
    changelogTemplate: changelogTemplateComponent_AsList
    codeSnippet: codeSnippetComponent_AsList
    codeSnippetWithDifferentLanguages: codeSnippetWithDifferentLanguagesComponent_AsList
    comparisonBento: comparisonBentoComponent_AsList
    comparisonItem: comparisonItemComponent_AsList
    comparisonSteps: comparisonStepsComponent_AsList
    comparisonTable: comparisonTableComponent_AsList
    comparisonsItem: comparisonsItem_AsList
    coverImage: coverImageComponent_AsList
    demo: demoComponent_AsList
    emailsItem: emailsItem_AsList
    faqsItem: faqsItem_AsList
    feature: featureComponent_AsList
    featureComponent1: featureComponent1_AsList
    featured: featuredComponent_AsList
    featuresAndBenefitsItem: featuresAndBenefitsItem_AsList
    featuresItem: featuresItem_AsList
    featuresItem1: featuresItem1_AsList
    featuresItem2: featuresItem2_AsList
    featuresLimits: featuresLimitsComponent_AsList
    freeText: freeTextComponent_AsList
    guide: guideComponent_AsList
    guideStep: guideStepComponent_AsList
    headersItem: headersItem_AsList
    heroCustomersItem: heroCustomersItem_AsList
    integrationInstructionsItem: integrationInstructionsItem_AsList
    limit: limitComponent_AsList
    marketingHeader: marketingHeaderComponent_AsList
    meta: metaComponent_AsList
    middleLinksItem: middleLinksItem_AsList
    pageAnalytics: pageAnalyticsComponent_AsList
    paymentMode: paymentModeComponent_AsList
    planLineItem: planLineItemComponent_AsList
    planName: planNameComponent_AsList
    price: priceComponent_AsList
    pricingPlan: pricingPlanComponent_AsList
    quote: quoteComponent_AsList
    repoSchema: repoSchemaComponent_AsList
    repoSchemaComponent1: repoSchemaComponent1_AsList
    repoSchemaComponent2: repoSchemaComponent2_AsList
    repoTitle: repoTitleComponent_AsList
    roadmapItem: roadmapItem_AsList
    snippetsItem: snippetsItem_AsList
    stepsItem: stepsItem_AsList
    templateAuthorsItem: templateAuthorsItem_AsList
    templatesItem: templatesItem_AsList
    textWithColor: textWithColorComponent_AsList
    thread: threadComponent_AsList
    token: tokenComponent_AsList
    tokenComponent1: tokenComponent1_AsList
    tryLightMode: tryLightModeComponent_AsList
    whimsicalEmbed: whimsicalEmbedComponent_AsList
    __typename: '_components'
}

export interface asFloatingBannerComponent_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (AsFloatingBannerComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: AsFloatingBannerComponent[]
    __typename: 'asFloatingBannerComponent_AsList'
}

export interface asNewTabComponent_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (AsNewTabComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: AsNewTabComponent[]
    __typename: 'asNewTabComponent_AsList'
}

export interface authorsItem_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (AuthorsItem | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: AuthorsItem[]
    __typename: 'authorsItem_AsList'
}

export interface baseHubGuidelinesAndBlockReferenceComponent_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (BaseHubGuidelinesAndBlockReferenceComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: BaseHubGuidelinesAndBlockReferenceComponent[]
    __typename: 'baseHubGuidelinesAndBlockReferenceComponent_AsList'
}

export interface bentoGridItem_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (BentoGridItem | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: BentoGridItem[]
    __typename: 'bentoGridItem_AsList'
}

export interface blogpostTemplateComponent_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (BlogpostTemplateComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: BlogpostTemplateComponent[]
    __typename: 'blogpostTemplateComponent_AsList'
}

export interface booleanFeatureComponent_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (BooleanFeatureComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: BooleanFeatureComponent[]
    __typename: 'booleanFeatureComponent_AsList'
}

export interface buildTimeRedirectsItem_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (BuildTimeRedirectsItem | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: BuildTimeRedirectsItem[]
    __typename: 'buildTimeRedirectsItem_AsList'
}

export interface buttonComponent_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (ButtonComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: ButtonComponent[]
    __typename: 'buttonComponent_AsList'
}

export interface calloutComponent_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (CalloutComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: CalloutComponent[]
    __typename: 'calloutComponent_AsList'
}

export interface changelogTemplateComponent_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (ChangelogTemplateComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: ChangelogTemplateComponent[]
    __typename: 'changelogTemplateComponent_AsList'
}

export interface codeSnippetComponent_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (CodeSnippetComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: CodeSnippetComponent[]
    __typename: 'codeSnippetComponent_AsList'
}

export interface codeSnippetWithDifferentLanguagesComponent_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (CodeSnippetWithDifferentLanguagesComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: CodeSnippetWithDifferentLanguagesComponent[]
    __typename: 'codeSnippetWithDifferentLanguagesComponent_AsList'
}

export interface comparisonBentoComponent_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (ComparisonBentoComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: ComparisonBentoComponent[]
    __typename: 'comparisonBentoComponent_AsList'
}

export interface comparisonItemComponent_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (ComparisonItemComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: ComparisonItemComponent[]
    __typename: 'comparisonItemComponent_AsList'
}

export interface comparisonStepsComponent_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (ComparisonStepsComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: ComparisonStepsComponent[]
    __typename: 'comparisonStepsComponent_AsList'
}

export interface comparisonTableComponent_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (ComparisonTableComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: ComparisonTableComponent[]
    __typename: 'comparisonTableComponent_AsList'
}

export interface comparisonsItem_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (ComparisonsItem | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: ComparisonsItem[]
    __typename: 'comparisonsItem_AsList'
}

export interface coverImageComponent_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (CoverImageComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: CoverImageComponent[]
    __typename: 'coverImageComponent_AsList'
}

export interface demoComponent_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (DemoComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: DemoComponent[]
    __typename: 'demoComponent_AsList'
}

export interface emailsItem_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (EmailsItem | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: EmailsItem[]
    __typename: 'emailsItem_AsList'
}

export interface faqsItem_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (FaqsItem | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: FaqsItem[]
    __typename: 'faqsItem_AsList'
}

export interface featureComponent1_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (FeatureComponent_1 | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: FeatureComponent_1[]
    __typename: 'featureComponent1_AsList'
}

export interface featureComponent_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (FeatureComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: FeatureComponent[]
    __typename: 'featureComponent_AsList'
}

export interface featuredComponent_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (FeaturedComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: FeaturedComponent[]
    __typename: 'featuredComponent_AsList'
}

export interface featuresAndBenefitsItem_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (FeaturesAndBenefitsItem | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: FeaturesAndBenefitsItem[]
    __typename: 'featuresAndBenefitsItem_AsList'
}

export interface featuresItem1_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (FeaturesItem_1 | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: FeaturesItem_1[]
    __typename: 'featuresItem1_AsList'
}

export interface featuresItem2_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (FeaturesItem_2 | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: FeaturesItem_2[]
    __typename: 'featuresItem2_AsList'
}

export interface featuresItem_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (FeaturesItem | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: FeaturesItem[]
    __typename: 'featuresItem_AsList'
}

export interface featuresLimitsComponent_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (FeaturesLimitsComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: FeaturesLimitsComponent[]
    __typename: 'featuresLimitsComponent_AsList'
}

export interface freeTextComponent_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (FreeTextComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: FreeTextComponent[]
    __typename: 'freeTextComponent_AsList'
}

export interface guideComponent_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (GuideComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: GuideComponent[]
    __typename: 'guideComponent_AsList'
}

export interface guideStepComponent_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (GuideStepComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: GuideStepComponent[]
    __typename: 'guideStepComponent_AsList'
}

export interface headersItem_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (HeadersItem | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: HeadersItem[]
    __typename: 'headersItem_AsList'
}

export interface heroCustomersItem_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (HeroCustomersItem | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: HeroCustomersItem[]
    __typename: 'heroCustomersItem_AsList'
}

export interface integrationInstructionsItem_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (IntegrationInstructionsItem | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: IntegrationInstructionsItem[]
    __typename: 'integrationInstructionsItem_AsList'
}

export interface limitComponent_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (LimitComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: LimitComponent[]
    __typename: 'limitComponent_AsList'
}

export interface marketingHeaderComponent_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (MarketingHeaderComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: MarketingHeaderComponent[]
    __typename: 'marketingHeaderComponent_AsList'
}

export interface metaComponent_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (MetaComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: MetaComponent[]
    __typename: 'metaComponent_AsList'
}

export interface middleLinksItem_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (MiddleLinksItem | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: MiddleLinksItem[]
    __typename: 'middleLinksItem_AsList'
}

export interface pageAnalyticsComponent_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (PageAnalyticsComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: PageAnalyticsComponent[]
    __typename: 'pageAnalyticsComponent_AsList'
}

export interface paymentModeComponent_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (PaymentModeComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: PaymentModeComponent[]
    __typename: 'paymentModeComponent_AsList'
}

export interface planLineItemComponent_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (PlanLineItemComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: PlanLineItemComponent[]
    __typename: 'planLineItemComponent_AsList'
}

export interface planNameComponent_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (PlanNameComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: PlanNameComponent[]
    __typename: 'planNameComponent_AsList'
}

export interface priceComponent_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (PriceComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: PriceComponent[]
    __typename: 'priceComponent_AsList'
}

export interface pricingPlanComponent_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (PricingPlanComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: PricingPlanComponent[]
    __typename: 'pricingPlanComponent_AsList'
}

export interface quoteComponent_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (QuoteComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: QuoteComponent[]
    __typename: 'quoteComponent_AsList'
}

export interface repoSchemaComponent1_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (RepoSchemaComponent_1 | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: RepoSchemaComponent_1[]
    __typename: 'repoSchemaComponent1_AsList'
}

export interface repoSchemaComponent2_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (RepoSchemaComponent_2 | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: RepoSchemaComponent_2[]
    __typename: 'repoSchemaComponent2_AsList'
}

export interface repoSchemaComponent_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (RepoSchemaComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: RepoSchemaComponent[]
    __typename: 'repoSchemaComponent_AsList'
}

export interface repoTitleComponent_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (RepoTitleComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: RepoTitleComponent[]
    __typename: 'repoTitleComponent_AsList'
}

export interface roadmapItem_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (RoadmapItem | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: RoadmapItem[]
    __typename: 'roadmapItem_AsList'
}

export interface snippetsItem_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (SnippetsItem | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: SnippetsItem[]
    __typename: 'snippetsItem_AsList'
}

export interface stepsItem_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (StepsItem | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: StepsItem[]
    __typename: 'stepsItem_AsList'
}

export interface templateAuthorsItem_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (TemplateAuthorsItem | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: TemplateAuthorsItem[]
    __typename: 'templateAuthorsItem_AsList'
}

export interface templatesItem_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (TemplatesItem | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: TemplatesItem[]
    __typename: 'templatesItem_AsList'
}

export interface textWithColorComponent_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (TextWithColorComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: TextWithColorComponent[]
    __typename: 'textWithColorComponent_AsList'
}

export interface threadComponent_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (ThreadComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: ThreadComponent[]
    __typename: 'threadComponent_AsList'
}

export interface tokenComponent1_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (TokenComponent_1 | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: TokenComponent_1[]
    __typename: 'tokenComponent1_AsList'
}

export interface tokenComponent_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (TokenComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: TokenComponent[]
    __typename: 'tokenComponent_AsList'
}

export interface tryLightModeComponent_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (TryLightModeComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: TryLightModeComponent[]
    __typename: 'tryLightModeComponent_AsList'
}

export interface whimsicalEmbedComponent_AsList {
    _analyticsKey: Scalars['String']
    _dashboardUrl: Scalars['String']
    _id: Scalars['String']
    _idPath: Scalars['String']
    _meta: ListMeta
    /** The key used to search from the frontend. */
    _searchKey: Scalars['String']
    _slug: Scalars['String']
    _slugPath: Scalars['String']
    _sys: BlockDocumentSys
    _title: Scalars['String']
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item: (WhimsicalEmbedComponent | null)
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items: WhimsicalEmbedComponent[]
    __typename: 'whimsicalEmbedComponent_AsList'
}

export interface AboutBasehubGenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: AboutBasehubRichTextGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AboutBasehubRichTextGenqlSelection{
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AnalyticsGenqlSelection{
    /** The `adminKey` gives clients the ability to query, delete and update this block's data. **It's not meant to be exposed to the public.** */
    adminKey?: boolean | number
    /** The `ingestKey` gives clients the ability to send new events to this block. Generally, it's safe to expose it to the public. */
    ingestKey?: boolean | number
    schema?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AnnouncementBannerGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    content?: Content_4GenqlSelection
    enabled?: boolean | number
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AsFloatingBannerComponentGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    attachTo?: boolean | number
    body?: BodyGenqlSelection
    title?: TitleGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AsFloatingBannerComponentFilterInput {AND?: (AsFloatingBannerComponentFilterInput | null),OR?: (AsFloatingBannerComponentFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),attachTo?: (StringFilter | null)}

export interface AsNewTabComponentGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AsNewTabComponentFilterInput {AND?: (AsNewTabComponentFilterInput | null),OR?: (AsNewTabComponentFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),value?: (Scalars['Boolean'] | null)}

export interface AuthorsGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: AuthorsItemGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: AuthorsItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AuthorsItemGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    avatar?: BlockImageGenqlSelection
    name?: boolean | number
    role?: boolean | number
    x?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AuthorsItemFilterInput {AND?: (AuthorsItemFilterInput | null),OR?: (AuthorsItemFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),name?: (StringFilter | null),role?: (StringFilter | null),x?: (StringFilter | null)}

export interface BaseHubAgentsGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    integrationInstructions?: (IntegrationInstructionsGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (IntegrationInstructionsItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (IntegrationInstructionsItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BaseHubGuidelinesAndBlockReferenceComponentGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BaseHubGuidelinesAndBlockReferenceComponentFilterInput {AND?: (BaseHubGuidelinesAndBlockReferenceComponentFilterInput | null),OR?: (BaseHubGuidelinesAndBlockReferenceComponentFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null)}

export interface BaseRichTextJsonGenqlSelection{
    blocks?: boolean | number
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BasehubVsGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    analytics?: AnalyticsGenqlSelection
    comparisons?: (ComparisonsGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (ComparisonsItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (ComparisonsItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    ctas?: ButtonComponentGenqlSelection
    sections?: SectionsGenqlSelection
    subtitle?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BaselineFeaturesGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    cta?: ButtonComponentGenqlSelection
    features?: (Features_2GenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (FeaturesItem_1FilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (FeaturesItem_1OrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BentoGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    calloutText?: boolean | number
    features?: (FeaturesGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (FeaturesItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (FeaturesItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    getStarted?: ButtonComponentGenqlSelection
    subtitle?: Subtitle_2GenqlSelection
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BentoGridGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: BentoGridItemGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: BentoGridItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BentoGridItemGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    description?: boolean | number
    icon?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BentoGridItemFilterInput {AND?: (BentoGridItemFilterInput | null),OR?: (BentoGridItemFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),description?: (StringFilter | null)}

export interface BlockAudioGenqlSelection{
    /** The duration of the audio in seconds. If the duration is not available, it will be estimated based on the file size. */
    duration?: boolean | number
    fileName?: boolean | number
    fileSize?: boolean | number
    lastModified?: boolean | number
    mimeType?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BlockCodeSnippetGenqlSelection{
    allowedLanguages?: boolean | number
    code?: boolean | number
    /** @deprecated Figuring out the correct api. */
    html?: { __args: {
    /** Theme for the code snippet */
    theme?: (Scalars['String'] | null)} } | boolean | number
    language?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BlockColorGenqlSelection{
    b?: boolean | number
    g?: boolean | number
    hex?: boolean | number
    hsl?: boolean | number
    r?: boolean | number
    rgb?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BlockDocumentGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    on_AnnouncementBanner?: AnnouncementBannerGenqlSelection
    on_AsFloatingBannerComponent?: AsFloatingBannerComponentGenqlSelection
    on_AsNewTabComponent?: AsNewTabComponentGenqlSelection
    on_Authors?: AuthorsGenqlSelection
    on_AuthorsItem?: AuthorsItemGenqlSelection
    on_BaseHubAgents?: BaseHubAgentsGenqlSelection
    on_BaseHubGuidelinesAndBlockReferenceComponent?: BaseHubGuidelinesAndBlockReferenceComponentGenqlSelection
    on_BasehubVs?: BasehubVsGenqlSelection
    on_BaselineFeatures?: BaselineFeaturesGenqlSelection
    on_Bento?: BentoGenqlSelection
    on_BentoGrid?: BentoGridGenqlSelection
    on_BentoGridItem?: BentoGridItemGenqlSelection
    on_Blog?: BlogGenqlSelection
    on_BlogpostTemplateComponent?: BlogpostTemplateComponentGenqlSelection
    on_Body_1?: Body_1GenqlSelection
    on_BooleanFeatureComponent?: BooleanFeatureComponentGenqlSelection
    on_BuildTimeRedirects?: BuildTimeRedirectsGenqlSelection
    on_BuildTimeRedirectsItem?: BuildTimeRedirectsItemGenqlSelection
    on_ButtonComponent?: ButtonComponentGenqlSelection
    on_Calculator?: CalculatorGenqlSelection
    on_CalloutComponent?: CalloutComponentGenqlSelection
    on_Changelog?: ChangelogGenqlSelection
    on_ChangelogFloatingBannerHighlightComps?: ChangelogFloatingBannerHighlightCompsGenqlSelection
    on_ChangelogTemplateComponent?: ChangelogTemplateComponentGenqlSelection
    on_CodeSnippetComponent?: CodeSnippetComponentGenqlSelection
    on_CodeSnippetWithDifferentLanguagesComponent?: CodeSnippetWithDifferentLanguagesComponentGenqlSelection
    on_Collections?: CollectionsGenqlSelection
    on_ComparisonBentoComponent?: ComparisonBentoComponentGenqlSelection
    on_ComparisonItemComponent?: ComparisonItemComponentGenqlSelection
    on_ComparisonStepsComponent?: ComparisonStepsComponentGenqlSelection
    on_ComparisonTableComponent?: ComparisonTableComponentGenqlSelection
    on_Comparisons?: ComparisonsGenqlSelection
    on_ComparisonsItem?: ComparisonsItemGenqlSelection
    on_Components?: ComponentsGenqlSelection
    on_Copy?: CopyGenqlSelection
    on_CoverImageComponent?: CoverImageComponentGenqlSelection
    on_DemoComponent?: DemoComponentGenqlSelection
    on_Demos?: DemosGenqlSelection
    on_Emails?: EmailsGenqlSelection
    on_EmailsItem?: EmailsItemGenqlSelection
    on_EnterprisePlan?: EnterprisePlanGenqlSelection
    on_Entries?: EntriesGenqlSelection
    on_Faq?: FaqGenqlSelection
    on_Faqs?: FaqsGenqlSelection
    on_FaqsItem?: FaqsItemGenqlSelection
    on_FeatureComponent?: FeatureComponentGenqlSelection
    on_FeatureComponent_1?: FeatureComponent_1GenqlSelection
    on_FeaturedComponent?: FeaturedComponentGenqlSelection
    on_Features?: FeaturesGenqlSelection
    on_FeaturesAndBenefits?: FeaturesAndBenefitsGenqlSelection
    on_FeaturesAndBenefitsItem?: FeaturesAndBenefitsItemGenqlSelection
    on_FeaturesItem?: FeaturesItemGenqlSelection
    on_FeaturesItem_1?: FeaturesItem_1GenqlSelection
    on_FeaturesItem_2?: FeaturesItem_2GenqlSelection
    on_FeaturesLimitsComponent?: FeaturesLimitsComponentGenqlSelection
    on_Features_1?: Features_1GenqlSelection
    on_Features_2?: Features_2GenqlSelection
    on_Features_3?: Features_3GenqlSelection
    on_Feedback?: FeedbackGenqlSelection
    on_FreeTextComponent?: FreeTextComponentGenqlSelection
    on_GeneralEvents?: GeneralEventsGenqlSelection
    on_GuideComponent?: GuideComponentGenqlSelection
    on_GuideStepComponent?: GuideStepComponentGenqlSelection
    on_Header?: HeaderGenqlSelection
    on_Headers?: HeadersGenqlSelection
    on_HeadersItem?: HeadersItemGenqlSelection
    on_HeroCustomers?: HeroCustomersGenqlSelection
    on_HeroCustomersItem?: HeroCustomersItemGenqlSelection
    on_Homepage?: HomepageGenqlSelection
    on_Icons?: IconsGenqlSelection
    on_InEditorTimelineGuides?: InEditorTimelineGuidesGenqlSelection
    on_IntegrationInstructions?: IntegrationInstructionsGenqlSelection
    on_IntegrationInstructionsItem?: IntegrationInstructionsItemGenqlSelection
    on_LegalStuff?: LegalStuffGenqlSelection
    on_LimitComponent?: LimitComponentGenqlSelection
    on_LineItems?: LineItemsGenqlSelection
    on_LineItems_1?: LineItems_1GenqlSelection
    on_Manifesto?: ManifestoGenqlSelection
    on_Manifesto_1?: Manifesto_1GenqlSelection
    on_MarketingHeaderComponent?: MarketingHeaderComponentGenqlSelection
    on_MetaComponent?: MetaComponentGenqlSelection
    on_MiddleLinks?: MiddleLinksGenqlSelection
    on_MiddleLinksItem?: MiddleLinksItemGenqlSelection
    on_MiscAppEvents?: MiscAppEventsGenqlSelection
    on_Newsletter?: NewsletterGenqlSelection
    on_Onboarding?: OnboardingGenqlSelection
    on_PageAnalyticsComponent?: PageAnalyticsComponentGenqlSelection
    on_PaymentModeComponent?: PaymentModeComponentGenqlSelection
    on_PaymentSwitch?: PaymentSwitchGenqlSelection
    on_PlanLineItemComponent?: PlanLineItemComponentGenqlSelection
    on_PlanNameComponent?: PlanNameComponentGenqlSelection
    on_Plans?: PlansGenqlSelection
    on_PlansComparisonTable?: PlansComparisonTableGenqlSelection
    on_Posts?: PostsGenqlSelection
    on_PriceComponent?: PriceComponentGenqlSelection
    on_Pricing?: PricingGenqlSelection
    on_PricingBanner?: PricingBannerGenqlSelection
    on_PricingPlanComponent?: PricingPlanComponentGenqlSelection
    on_Privacy?: PrivacyGenqlSelection
    on_Prompts?: PromptsGenqlSelection
    on_QuoteComponent?: QuoteComponentGenqlSelection
    on_RepoSchemaComponent?: RepoSchemaComponentGenqlSelection
    on_RepoSchemaComponent_1?: RepoSchemaComponent_1GenqlSelection
    on_RepoSchemaComponent_2?: RepoSchemaComponent_2GenqlSelection
    on_RepoTitleComponent?: RepoTitleComponentGenqlSelection
    on_Roadmap?: RoadmapGenqlSelection
    on_RoadmapItem?: RoadmapItemGenqlSelection
    on_Roadmap_1?: Roadmap_1GenqlSelection
    on_Sections?: SectionsGenqlSelection
    on_Shoutouts?: ShoutoutsGenqlSelection
    on_Snippets?: SnippetsGenqlSelection
    on_SnippetsItem?: SnippetsItemGenqlSelection
    on_Steps?: StepsGenqlSelection
    on_StepsItem?: StepsItemGenqlSelection
    on_Steps_1?: Steps_1GenqlSelection
    on_TemplateAuthors?: TemplateAuthorsGenqlSelection
    on_TemplateAuthorsItem?: TemplateAuthorsItemGenqlSelection
    on_Templates?: TemplatesGenqlSelection
    on_TemplatesItem?: TemplatesItemGenqlSelection
    on_Templates_1?: Templates_1GenqlSelection
    on_Terms?: TermsGenqlSelection
    on_Testimonials?: TestimonialsGenqlSelection
    on_TextWithColorComponent?: TextWithColorComponentGenqlSelection
    on_ThreadComponent?: ThreadComponentGenqlSelection
    on_TokenComponent?: TokenComponentGenqlSelection
    on_TokenComponent_1?: TokenComponent_1GenqlSelection
    on_TryLightModeComponent?: TryLightModeComponentGenqlSelection
    on_WhimsicalEmbedComponent?: WhimsicalEmbedComponentGenqlSelection
    on_asFloatingBannerComponent_AsList?: asFloatingBannerComponent_AsListGenqlSelection
    on_asNewTabComponent_AsList?: asNewTabComponent_AsListGenqlSelection
    on_authorsItem_AsList?: authorsItem_AsListGenqlSelection
    on_baseHubGuidelinesAndBlockReferenceComponent_AsList?: baseHubGuidelinesAndBlockReferenceComponent_AsListGenqlSelection
    on_bentoGridItem_AsList?: bentoGridItem_AsListGenqlSelection
    on_blogpostTemplateComponent_AsList?: blogpostTemplateComponent_AsListGenqlSelection
    on_booleanFeatureComponent_AsList?: booleanFeatureComponent_AsListGenqlSelection
    on_buildTimeRedirectsItem_AsList?: buildTimeRedirectsItem_AsListGenqlSelection
    on_buttonComponent_AsList?: buttonComponent_AsListGenqlSelection
    on_calloutComponent_AsList?: calloutComponent_AsListGenqlSelection
    on_changelogTemplateComponent_AsList?: changelogTemplateComponent_AsListGenqlSelection
    on_codeSnippetComponent_AsList?: codeSnippetComponent_AsListGenqlSelection
    on_codeSnippetWithDifferentLanguagesComponent_AsList?: codeSnippetWithDifferentLanguagesComponent_AsListGenqlSelection
    on_comparisonBentoComponent_AsList?: comparisonBentoComponent_AsListGenqlSelection
    on_comparisonItemComponent_AsList?: comparisonItemComponent_AsListGenqlSelection
    on_comparisonStepsComponent_AsList?: comparisonStepsComponent_AsListGenqlSelection
    on_comparisonTableComponent_AsList?: comparisonTableComponent_AsListGenqlSelection
    on_comparisonsItem_AsList?: comparisonsItem_AsListGenqlSelection
    on_coverImageComponent_AsList?: coverImageComponent_AsListGenqlSelection
    on_demoComponent_AsList?: demoComponent_AsListGenqlSelection
    on_emailsItem_AsList?: emailsItem_AsListGenqlSelection
    on_faqsItem_AsList?: faqsItem_AsListGenqlSelection
    on_featureComponent1_AsList?: featureComponent1_AsListGenqlSelection
    on_featureComponent_AsList?: featureComponent_AsListGenqlSelection
    on_featuredComponent_AsList?: featuredComponent_AsListGenqlSelection
    on_featuresAndBenefitsItem_AsList?: featuresAndBenefitsItem_AsListGenqlSelection
    on_featuresItem1_AsList?: featuresItem1_AsListGenqlSelection
    on_featuresItem2_AsList?: featuresItem2_AsListGenqlSelection
    on_featuresItem_AsList?: featuresItem_AsListGenqlSelection
    on_featuresLimitsComponent_AsList?: featuresLimitsComponent_AsListGenqlSelection
    on_freeTextComponent_AsList?: freeTextComponent_AsListGenqlSelection
    on_guideComponent_AsList?: guideComponent_AsListGenqlSelection
    on_guideStepComponent_AsList?: guideStepComponent_AsListGenqlSelection
    on_headersItem_AsList?: headersItem_AsListGenqlSelection
    on_heroCustomersItem_AsList?: heroCustomersItem_AsListGenqlSelection
    on_integrationInstructionsItem_AsList?: integrationInstructionsItem_AsListGenqlSelection
    on_limitComponent_AsList?: limitComponent_AsListGenqlSelection
    on_marketingHeaderComponent_AsList?: marketingHeaderComponent_AsListGenqlSelection
    on_metaComponent_AsList?: metaComponent_AsListGenqlSelection
    on_middleLinksItem_AsList?: middleLinksItem_AsListGenqlSelection
    on_pageAnalyticsComponent_AsList?: pageAnalyticsComponent_AsListGenqlSelection
    on_paymentModeComponent_AsList?: paymentModeComponent_AsListGenqlSelection
    on_planLineItemComponent_AsList?: planLineItemComponent_AsListGenqlSelection
    on_planNameComponent_AsList?: planNameComponent_AsListGenqlSelection
    on_priceComponent_AsList?: priceComponent_AsListGenqlSelection
    on_pricingPlanComponent_AsList?: pricingPlanComponent_AsListGenqlSelection
    on_quoteComponent_AsList?: quoteComponent_AsListGenqlSelection
    on_repoSchemaComponent1_AsList?: repoSchemaComponent1_AsListGenqlSelection
    on_repoSchemaComponent2_AsList?: repoSchemaComponent2_AsListGenqlSelection
    on_repoSchemaComponent_AsList?: repoSchemaComponent_AsListGenqlSelection
    on_repoTitleComponent_AsList?: repoTitleComponent_AsListGenqlSelection
    on_roadmapItem_AsList?: roadmapItem_AsListGenqlSelection
    on_snippetsItem_AsList?: snippetsItem_AsListGenqlSelection
    on_stepsItem_AsList?: stepsItem_AsListGenqlSelection
    on_templateAuthorsItem_AsList?: templateAuthorsItem_AsListGenqlSelection
    on_templatesItem_AsList?: templatesItem_AsListGenqlSelection
    on_textWithColorComponent_AsList?: textWithColorComponent_AsListGenqlSelection
    on_threadComponent_AsList?: threadComponent_AsListGenqlSelection
    on_tokenComponent1_AsList?: tokenComponent1_AsListGenqlSelection
    on_tokenComponent_AsList?: tokenComponent_AsListGenqlSelection
    on_tryLightModeComponent_AsList?: tryLightModeComponent_AsListGenqlSelection
    on_whimsicalEmbedComponent_AsList?: whimsicalEmbedComponent_AsListGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BlockDocumentSysGenqlSelection{
    apiNamePath?: boolean | number
    createdAt?: boolean | number
    hash?: boolean | number
    id?: boolean | number
    idPath?: boolean | number
    lastModifiedAt?: boolean | number
    slug?: boolean | number
    slugPath?: boolean | number
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BlockFileGenqlSelection{
    fileName?: boolean | number
    fileSize?: boolean | number
    lastModified?: boolean | number
    mimeType?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BlockImageGenqlSelection{
    alt?: boolean | number
    aspectRatio?: boolean | number
    blurDataURL?: boolean | number
    fileName?: boolean | number
    fileSize?: boolean | number
    height?: boolean | number
    lastModified?: boolean | number
    mimeType?: boolean | number
    /** @deprecated Renamed to `blurDataURL` to match Next.js Image's naming convention. */
    placeholderURL?: boolean | number
    /** @deprecated Use `url` instead. */
    rawUrl?: boolean | number
    thumbhash?: boolean | number
    /**
     * This field is used to generate the image URL with the provided options. The options are passed as arguments. For example, if you want to resize the image to 200x200 pixels, you can use the following query:
     * 
     * ```graphql
     * {
     *   imageBlock {
     *     url(width: 200, height: 200)
     *   }
     * }
     * ```
     * 
     * This will return the URL with the width and height set to 200 pixels.
     * 
     * BaseHub uses Cloudflare for image resizing. Check out [all available options in their docs](https://developers.cloudflare.com/images/transform-images/transform-via-workers/#fetch-options).
     * 
     */
    url?: { __args: {anim?: (Scalars['String'] | null), background?: (Scalars['String'] | null), blur?: (Scalars['Int'] | null), border?: (Scalars['String'] | null), brightness?: (Scalars['Int'] | null), compression?: (Scalars['String'] | null), contrast?: (Scalars['Int'] | null), dpr?: (Scalars['Int'] | null), fit?: (Scalars['String'] | null), format?: (Scalars['String'] | null), gamma?: (Scalars['String'] | null), gravity?: (Scalars['String'] | null), height?: (Scalars['Int'] | null), metadata?: (Scalars['String'] | null), quality?: (Scalars['Int'] | null), rotate?: (Scalars['String'] | null), sharpen?: (Scalars['String'] | null), trim?: (Scalars['String'] | null), width?: (Scalars['Int'] | null)} } | boolean | number
    width?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BlockListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    on_Authors?: AuthorsGenqlSelection
    on_BentoGrid?: BentoGridGenqlSelection
    on_Body_1?: Body_1GenqlSelection
    on_BuildTimeRedirects?: BuildTimeRedirectsGenqlSelection
    on_Comparisons?: ComparisonsGenqlSelection
    on_Emails?: EmailsGenqlSelection
    on_Entries?: EntriesGenqlSelection
    on_Faqs?: FaqsGenqlSelection
    on_Features?: FeaturesGenqlSelection
    on_FeaturesAndBenefits?: FeaturesAndBenefitsGenqlSelection
    on_Features_1?: Features_1GenqlSelection
    on_Features_2?: Features_2GenqlSelection
    on_Features_3?: Features_3GenqlSelection
    on_Headers?: HeadersGenqlSelection
    on_HeroCustomers?: HeroCustomersGenqlSelection
    on_IntegrationInstructions?: IntegrationInstructionsGenqlSelection
    on_LineItems?: LineItemsGenqlSelection
    on_LineItems_1?: LineItems_1GenqlSelection
    on_MiddleLinks?: MiddleLinksGenqlSelection
    on_Plans?: PlansGenqlSelection
    on_Posts?: PostsGenqlSelection
    on_Roadmap_1?: Roadmap_1GenqlSelection
    on_Snippets?: SnippetsGenqlSelection
    on_Steps?: StepsGenqlSelection
    on_Steps_1?: Steps_1GenqlSelection
    on_TemplateAuthors?: TemplateAuthorsGenqlSelection
    on_Templates_1?: Templates_1GenqlSelection
    on_Testimonials?: TestimonialsGenqlSelection
    on_asFloatingBannerComponent_AsList?: asFloatingBannerComponent_AsListGenqlSelection
    on_asNewTabComponent_AsList?: asNewTabComponent_AsListGenqlSelection
    on_authorsItem_AsList?: authorsItem_AsListGenqlSelection
    on_baseHubGuidelinesAndBlockReferenceComponent_AsList?: baseHubGuidelinesAndBlockReferenceComponent_AsListGenqlSelection
    on_bentoGridItem_AsList?: bentoGridItem_AsListGenqlSelection
    on_blogpostTemplateComponent_AsList?: blogpostTemplateComponent_AsListGenqlSelection
    on_booleanFeatureComponent_AsList?: booleanFeatureComponent_AsListGenqlSelection
    on_buildTimeRedirectsItem_AsList?: buildTimeRedirectsItem_AsListGenqlSelection
    on_buttonComponent_AsList?: buttonComponent_AsListGenqlSelection
    on_calloutComponent_AsList?: calloutComponent_AsListGenqlSelection
    on_changelogTemplateComponent_AsList?: changelogTemplateComponent_AsListGenqlSelection
    on_codeSnippetComponent_AsList?: codeSnippetComponent_AsListGenqlSelection
    on_codeSnippetWithDifferentLanguagesComponent_AsList?: codeSnippetWithDifferentLanguagesComponent_AsListGenqlSelection
    on_comparisonBentoComponent_AsList?: comparisonBentoComponent_AsListGenqlSelection
    on_comparisonItemComponent_AsList?: comparisonItemComponent_AsListGenqlSelection
    on_comparisonStepsComponent_AsList?: comparisonStepsComponent_AsListGenqlSelection
    on_comparisonTableComponent_AsList?: comparisonTableComponent_AsListGenqlSelection
    on_comparisonsItem_AsList?: comparisonsItem_AsListGenqlSelection
    on_coverImageComponent_AsList?: coverImageComponent_AsListGenqlSelection
    on_demoComponent_AsList?: demoComponent_AsListGenqlSelection
    on_emailsItem_AsList?: emailsItem_AsListGenqlSelection
    on_faqsItem_AsList?: faqsItem_AsListGenqlSelection
    on_featureComponent1_AsList?: featureComponent1_AsListGenqlSelection
    on_featureComponent_AsList?: featureComponent_AsListGenqlSelection
    on_featuredComponent_AsList?: featuredComponent_AsListGenqlSelection
    on_featuresAndBenefitsItem_AsList?: featuresAndBenefitsItem_AsListGenqlSelection
    on_featuresItem1_AsList?: featuresItem1_AsListGenqlSelection
    on_featuresItem2_AsList?: featuresItem2_AsListGenqlSelection
    on_featuresItem_AsList?: featuresItem_AsListGenqlSelection
    on_featuresLimitsComponent_AsList?: featuresLimitsComponent_AsListGenqlSelection
    on_freeTextComponent_AsList?: freeTextComponent_AsListGenqlSelection
    on_guideComponent_AsList?: guideComponent_AsListGenqlSelection
    on_guideStepComponent_AsList?: guideStepComponent_AsListGenqlSelection
    on_headersItem_AsList?: headersItem_AsListGenqlSelection
    on_heroCustomersItem_AsList?: heroCustomersItem_AsListGenqlSelection
    on_integrationInstructionsItem_AsList?: integrationInstructionsItem_AsListGenqlSelection
    on_limitComponent_AsList?: limitComponent_AsListGenqlSelection
    on_marketingHeaderComponent_AsList?: marketingHeaderComponent_AsListGenqlSelection
    on_metaComponent_AsList?: metaComponent_AsListGenqlSelection
    on_middleLinksItem_AsList?: middleLinksItem_AsListGenqlSelection
    on_pageAnalyticsComponent_AsList?: pageAnalyticsComponent_AsListGenqlSelection
    on_paymentModeComponent_AsList?: paymentModeComponent_AsListGenqlSelection
    on_planLineItemComponent_AsList?: planLineItemComponent_AsListGenqlSelection
    on_planNameComponent_AsList?: planNameComponent_AsListGenqlSelection
    on_priceComponent_AsList?: priceComponent_AsListGenqlSelection
    on_pricingPlanComponent_AsList?: pricingPlanComponent_AsListGenqlSelection
    on_quoteComponent_AsList?: quoteComponent_AsListGenqlSelection
    on_repoSchemaComponent1_AsList?: repoSchemaComponent1_AsListGenqlSelection
    on_repoSchemaComponent2_AsList?: repoSchemaComponent2_AsListGenqlSelection
    on_repoSchemaComponent_AsList?: repoSchemaComponent_AsListGenqlSelection
    on_repoTitleComponent_AsList?: repoTitleComponent_AsListGenqlSelection
    on_roadmapItem_AsList?: roadmapItem_AsListGenqlSelection
    on_snippetsItem_AsList?: snippetsItem_AsListGenqlSelection
    on_stepsItem_AsList?: stepsItem_AsListGenqlSelection
    on_templateAuthorsItem_AsList?: templateAuthorsItem_AsListGenqlSelection
    on_templatesItem_AsList?: templatesItem_AsListGenqlSelection
    on_textWithColorComponent_AsList?: textWithColorComponent_AsListGenqlSelection
    on_threadComponent_AsList?: threadComponent_AsListGenqlSelection
    on_tokenComponent1_AsList?: tokenComponent1_AsListGenqlSelection
    on_tokenComponent_AsList?: tokenComponent_AsListGenqlSelection
    on_tryLightModeComponent_AsList?: tryLightModeComponent_AsListGenqlSelection
    on_whimsicalEmbedComponent_AsList?: whimsicalEmbedComponent_AsListGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BlockOgImageGenqlSelection{
    height?: boolean | number
    url?: boolean | number
    width?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Rich text block */
export interface BlockRichTextGenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: RichTextJsonGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    on_AboutBasehub?: AboutBasehubGenqlSelection
    on_Body?: BodyGenqlSelection
    on_Body_2?: Body_2GenqlSelection
    on_CardTag?: CardTagGenqlSelection
    on_Content?: ContentGenqlSelection
    on_Content_10?: Content_10GenqlSelection
    on_Content_1?: Content_1GenqlSelection
    on_Content_2?: Content_2GenqlSelection
    on_Content_3?: Content_3GenqlSelection
    on_Content_4?: Content_4GenqlSelection
    on_Content_5?: Content_5GenqlSelection
    on_Content_6?: Content_6GenqlSelection
    on_Content_7?: Content_7GenqlSelection
    on_Content_8?: Content_8GenqlSelection
    on_Content_9?: Content_9GenqlSelection
    on_ContextForLlm?: ContextForLlmGenqlSelection
    on_Description?: DescriptionGenqlSelection
    on_Description_1?: Description_1GenqlSelection
    on_HeroSubtitle?: HeroSubtitleGenqlSelection
    on_HeroTitle?: HeroTitleGenqlSelection
    on_Invitation?: InvitationGenqlSelection
    on_Label?: LabelGenqlSelection
    on_Note?: NoteGenqlSelection
    on_PromptV11?: PromptV11GenqlSelection
    on_Pros?: ProsGenqlSelection
    on_Quote?: QuoteGenqlSelection
    on_RepoLlmsTxt?: RepoLlmsTxtGenqlSelection
    on_Script?: ScriptGenqlSelection
    on_Subtitle?: SubtitleGenqlSelection
    on_Subtitle_1?: Subtitle_1GenqlSelection
    on_Subtitle_2?: Subtitle_2GenqlSelection
    on_Subtitle_3?: Subtitle_3GenqlSelection
    on_Subtitle_4?: Subtitle_4GenqlSelection
    on_Subtitle_5?: Subtitle_5GenqlSelection
    on_SwitchLabel?: SwitchLabelGenqlSelection
    on_Title?: TitleGenqlSelection
    on_Title_1?: Title_1GenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BlockVideoGenqlSelection{
    aspectRatio?: boolean | number
    /** The duration of the video in seconds. If the duration is not available, it will be estimated based on the file size. */
    duration?: boolean | number
    fileName?: boolean | number
    fileSize?: boolean | number
    height?: boolean | number
    lastModified?: boolean | number
    mimeType?: boolean | number
    url?: boolean | number
    width?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BlogGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    analytics?: PageAnalyticsComponentGenqlSelection
    header?: MarketingHeaderComponentGenqlSelection
    narration?: NarrationGenqlSelection
    posts?: (PostsGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (BlogpostTemplateComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (BlogpostTemplateComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BlogpostTemplateComponentGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    analytics?: PageAnalyticsComponentGenqlSelection
    authorS?: AuthorsItemGenqlSelection
    category?: boolean | number
    content?: Content_1GenqlSelection
    coverImage?: CoverImageComponentGenqlSelection
    isPublished?: boolean | number
    narration?: BlockAudioGenqlSelection
    /** ISO 8601 date string. */
    publishDate?: boolean | number
    subtitle?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BlogpostTemplateComponentFilterInput {AND?: (BlogpostTemplateComponentFilterInput | null),OR?: (BlogpostTemplateComponentFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),analytics?: (BlogpostTemplateComponentFilterInput__analytics | null),authorS?: (BlogpostTemplateComponentFilterInput__authorS_0___untitled | null),category?: (SelectFilter | null),coverImage?: (BlogpostTemplateComponentFilterInput__coverImage | null),isPublished?: (Scalars['Boolean'] | null),publishDate?: (DateFilter | null),subtitle?: (StringFilter | null)}

export interface BlogpostTemplateComponentFilterInput__analytics {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null)}

export interface BlogpostTemplateComponentFilterInput__authorS_0___untitled {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),name?: (StringFilter | null),role?: (StringFilter | null),x?: (StringFilter | null)}

export interface BlogpostTemplateComponentFilterInput__coverImage {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),displayType?: (SelectFilter | null)}

export interface BodyGenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: BodyRichTextGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BodyRichTextGenqlSelection{
    blocks?: UnionTryLightModeComponentGenqlSelection
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Body_1GenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: ComparisonItemComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: ComparisonItemComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Body_2GenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: Body_2RichTextGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Body_2RichTextGenqlSelection{
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BooleanFeatureComponentGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BooleanFeatureComponentFilterInput {AND?: (BooleanFeatureComponentFilterInput | null),OR?: (BooleanFeatureComponentFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),value?: (Scalars['Boolean'] | null)}

export interface BuildTimeRedirectsGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: BuildTimeRedirectsItemGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: BuildTimeRedirectsItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BuildTimeRedirectsItemGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    destination?: boolean | number
    source?: boolean | number
    statusCode?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BuildTimeRedirectsItemFilterInput {AND?: (BuildTimeRedirectsItemFilterInput | null),OR?: (BuildTimeRedirectsItemFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),destination?: (StringFilter | null),source?: (StringFilter | null),statusCode?: (SelectFilter | null)}

export interface ButtonComponentGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    external?: boolean | number
    href?: boolean | number
    label?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ButtonComponentFilterInput {AND?: (ButtonComponentFilterInput | null),OR?: (ButtonComponentFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),external?: (Scalars['Boolean'] | null),href?: (StringFilter | null),label?: (StringFilter | null)}

export interface CalculatorGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    estimated?: boolean | number
    note?: NoteGenqlSelection
    personalTeamDisclaimer?: boolean | number
    resultHeading?: boolean | number
    summaryTitle?: boolean | number
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CalloutComponentGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    content?: Content_2GenqlSelection
    intent?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CalloutComponentFilterInput {AND?: (CalloutComponentFilterInput | null),OR?: (CalloutComponentFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),intent?: (SelectFilter | null)}

export interface CardTagGenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: CardTagRichTextGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CardTagRichTextGenqlSelection{
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ChangelogGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    analytics?: PageAnalyticsComponentGenqlSelection
    entries?: (EntriesGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (ChangelogTemplateComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (ChangelogTemplateComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    header?: MarketingHeaderComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ChangelogFloatingBannerHighlightCompsGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    tryLightMode?: TryLightModeComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ChangelogTemplateComponentGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    analytics?: PageAnalyticsComponentGenqlSelection
    authorS?: AuthorsItemGenqlSelection
    content?: Content_3GenqlSelection
    highlight?: UnionAsNewTabComponentAsFloatingBannerComponentGenqlSelection
    narration?: BlockAudioGenqlSelection
    og?: BlockOgImageGenqlSelection
    /** ISO 8601 date string. */
    publishDate?: boolean | number
    subtitle?: boolean | number
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ChangelogTemplateComponentFilterInput {AND?: (ChangelogTemplateComponentFilterInput | null),OR?: (ChangelogTemplateComponentFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),analytics?: (ChangelogTemplateComponentFilterInput__analytics | null),authorS?: (ChangelogTemplateComponentFilterInput__authorS_0___untitled | null),highlight?: (ChangelogTemplateComponentFilterInput__highlight | null),publishDate?: (DateFilter | null),subtitle?: (StringFilter | null),version?: (StringFilter | null)}

export interface ChangelogTemplateComponentFilterInput__analytics {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null)}

export interface ChangelogTemplateComponentFilterInput__authorS_0___untitled {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),name?: (StringFilter | null),role?: (StringFilter | null),x?: (StringFilter | null)}

export interface ChangelogTemplateComponentFilterInput__highlight {asFloatingBanner?: (ChangelogTemplateComponentFilterInput__highlight_1___asFloatingBanner | null),asNewTab?: (ChangelogTemplateComponentFilterInput__highlight_0___asNewTab | null)}

export interface ChangelogTemplateComponentFilterInput__highlight_0___asNewTab {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),value?: (Scalars['Boolean'] | null)}

export interface ChangelogTemplateComponentFilterInput__highlight_1___asFloatingBanner {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),attachTo?: (StringFilter | null)}

export interface CodeSnippetComponentGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    code?: BlockCodeSnippetGenqlSelection
    fileName?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CodeSnippetComponentFilterInput {AND?: (CodeSnippetComponentFilterInput | null),OR?: (CodeSnippetComponentFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),fileName?: (StringFilter | null)}

export interface CodeSnippetWithDifferentLanguagesComponentGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    snippets?: (SnippetsGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (SnippetsItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (SnippetsItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CodeSnippetWithDifferentLanguagesComponentFilterInput {AND?: (CodeSnippetWithDifferentLanguagesComponentFilterInput | null),OR?: (CodeSnippetWithDifferentLanguagesComponentFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),snippets?: (ListFilter | null)}

export interface CollectionsGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    authors?: (AuthorsGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (AuthorsItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (AuthorsItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    templateAuthors?: (TemplateAuthorsGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (TemplateAuthorsItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (TemplateAuthorsItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    testimonials?: (TestimonialsGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (QuoteComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (QuoteComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ComparisonBentoComponentGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    bentoGrid?: (BentoGridGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (BentoGridItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (BentoGridItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ComparisonBentoComponentFilterInput {AND?: (ComparisonBentoComponentFilterInput | null),OR?: (ComparisonBentoComponentFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),bentoGrid?: (ListFilter | null),title?: (StringFilter | null)}

export interface ComparisonItemComponentGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    group?: boolean | number
    personal?: UnionBooleanFeatureComponentFreeTextComponentLimitComponentGenqlSelection
    team?: UnionBooleanFeatureComponentFreeTextComponentLimitComponentGenqlSelection
    tooltipInfo?: boolean | number
    unlimited?: UnionBooleanFeatureComponentFreeTextComponentLimitComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ComparisonItemComponentFilterInput {AND?: (ComparisonItemComponentFilterInput | null),OR?: (ComparisonItemComponentFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),group?: (SelectFilter | null),personal?: (ComparisonItemComponentFilterInput__personal | null),team?: (ComparisonItemComponentFilterInput__team | null),tooltipInfo?: (StringFilter | null),unlimited?: (ComparisonItemComponentFilterInput__unlimited | null)}

export interface ComparisonItemComponentFilterInput__personal {aiChat?: (ComparisonItemComponentFilterInput__personal_1___aiChat | null),blocks?: (ComparisonItemComponentFilterInput__personal_0___blocks | null),search?: (ComparisonItemComponentFilterInput__personal_2___search | null)}

export interface ComparisonItemComponentFilterInput__personal_0___blocks {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),initial?: (NumberFilter | null),pricePerStep?: (NumberFilter | null),step?: (NumberFilter | null),unit?: (SelectFilter | null)}

export interface ComparisonItemComponentFilterInput__personal_1___aiChat {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),value?: (Scalars['Boolean'] | null)}

export interface ComparisonItemComponentFilterInput__personal_2___search {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),value?: (StringFilter | null)}

export interface ComparisonItemComponentFilterInput__team {aiChat?: (ComparisonItemComponentFilterInput__team_1___aiChat | null),blocks?: (ComparisonItemComponentFilterInput__team_0___blocks | null),search?: (ComparisonItemComponentFilterInput__team_2___search | null)}

export interface ComparisonItemComponentFilterInput__team_0___blocks {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),initial?: (NumberFilter | null),pricePerStep?: (NumberFilter | null),step?: (NumberFilter | null),unit?: (SelectFilter | null)}

export interface ComparisonItemComponentFilterInput__team_1___aiChat {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),value?: (Scalars['Boolean'] | null)}

export interface ComparisonItemComponentFilterInput__team_2___search {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),value?: (StringFilter | null)}

export interface ComparisonItemComponentFilterInput__unlimited {aiChat?: (ComparisonItemComponentFilterInput__unlimited_1___aiChat | null),blocks?: (ComparisonItemComponentFilterInput__unlimited_0___blocks | null),search?: (ComparisonItemComponentFilterInput__unlimited_2___search | null)}

export interface ComparisonItemComponentFilterInput__unlimited_0___blocks {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),initial?: (NumberFilter | null),pricePerStep?: (NumberFilter | null),step?: (NumberFilter | null),unit?: (SelectFilter | null)}

export interface ComparisonItemComponentFilterInput__unlimited_1___aiChat {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),value?: (Scalars['Boolean'] | null)}

export interface ComparisonItemComponentFilterInput__unlimited_2___search {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),value?: (StringFilter | null)}

export interface ComparisonStepsComponentGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    steps?: (Steps_1GenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (StepsItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (StepsItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ComparisonStepsComponentFilterInput {AND?: (ComparisonStepsComponentFilterInput | null),OR?: (ComparisonStepsComponentFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),steps?: (ListFilter | null)}

export interface ComparisonTableComponentGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    featuresAndBenefits?: (FeaturesAndBenefitsGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (FeaturesAndBenefitsItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (FeaturesAndBenefitsItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ComparisonTableComponentFilterInput {AND?: (ComparisonTableComponentFilterInput | null),OR?: (ComparisonTableComponentFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),featuresAndBenefits?: (ListFilter | null),title?: (StringFilter | null)}

export interface ComparisonsGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: ComparisonsItemGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: ComparisonsItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ComparisonsItemGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    logo?: BlockImageGenqlSelection
    sections?: UnionComparisonTableComponentComparisonBentoComponentComparisonStepsComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ComparisonsItemFilterInput {AND?: (ComparisonsItemFilterInput | null),OR?: (ComparisonsItemFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),sections?: (ComparisonsItemFilterInput__sections | null)}

export interface ComparisonsItemFilterInput__sections {comparisonBento?: (ComparisonsItemFilterInput__sections_0___comparisonBento | null),comparisonSteps?: (ComparisonsItemFilterInput__sections_2___comparisonSteps | null),comparisonTable?: (ComparisonsItemFilterInput__sections_1___comparisonTable | null)}

export interface ComparisonsItemFilterInput__sections_0___comparisonBento {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),bentoGrid?: (ListFilter | null),title?: (StringFilter | null)}

export interface ComparisonsItemFilterInput__sections_1___comparisonTable {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),featuresAndBenefits?: (ListFilter | null),title?: (StringFilter | null)}

export interface ComparisonsItemFilterInput__sections_2___comparisonSteps {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),steps?: (ListFilter | null)}

export interface ComponentsGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    changelogFloatingBannerHighlightComps?: ChangelogFloatingBannerHighlightCompsGenqlSelection
    inEditorTimelineGuides?: InEditorTimelineGuidesGenqlSelection
    pricingBanner?: PricingBannerGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ContentGenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: ContentRichTextGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ContentRichTextGenqlSelection{
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Content_1GenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: Content_1RichTextGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Content_10GenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: Content_10RichTextGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Content_10RichTextGenqlSelection{
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Content_1RichTextGenqlSelection{
    blocks?: UnionCodeSnippetComponentCalloutComponentGenqlSelection
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Content_2GenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: Content_2RichTextGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Content_2RichTextGenqlSelection{
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Content_3GenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: Content_3RichTextGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Content_3RichTextGenqlSelection{
    blocks?: UnionCalloutComponentGenqlSelection
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Content_4GenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: Content_4RichTextGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Content_4RichTextGenqlSelection{
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Content_5GenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: Content_5RichTextGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Content_5RichTextGenqlSelection{
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Content_6GenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: Content_6RichTextGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Content_6RichTextGenqlSelection{
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Content_7GenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: Content_7RichTextGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Content_7RichTextGenqlSelection{
    blocks?: UnionTextWithColorComponentGenqlSelection
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Content_8GenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: Content_8RichTextGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Content_8RichTextGenqlSelection{
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Content_9GenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: Content_9RichTextGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Content_9RichTextGenqlSelection{
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ContextForLlmGenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: ContextForLlmRichTextGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ContextForLlmRichTextGenqlSelection{
    blocks?: UnionThreadComponentTokenComponentRepoSchemaComponentBaseHubGuidelinesAndBlockReferenceComponentGenqlSelection
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CopyGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CoverImageComponentGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    displayType?: boolean | number
    image?: BlockImageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CoverImageComponentFilterInput {AND?: (CoverImageComponentFilterInput | null),OR?: (CoverImageComponentFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),displayType?: (SelectFilter | null)}

export interface CrashNotificationsGenqlSelection{
    /** The `webhookSecret` is used to verify the authenticity of the webhook request, and also to type the payload. */
    webhookSecret?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CrashReportsGenqlSelection{
    /** The `adminKey` gives clients the ability to query, delete and update this block's data. **It's not meant to be exposed to the public.** */
    adminKey?: boolean | number
    /** The `ingestKey` gives clients the ability to send new events to this block. Generally, it's safe to expose it to the public. */
    ingestKey?: boolean | number
    schema?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DateFilter {eq?: (Scalars['DateTime'] | null),isAfter?: (Scalars['DateTime'] | null),isBefore?: (Scalars['DateTime'] | null),isNull?: (Scalars['Boolean'] | null),neq?: (Scalars['DateTime'] | null),onOrAfter?: (Scalars['DateTime'] | null),onOrBefore?: (Scalars['DateTime'] | null)}

export interface DemoComponentGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    script?: ScriptGenqlSelection
    video?: BlockVideoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DemoComponentFilterInput {AND?: (DemoComponentFilterInput | null),OR?: (DemoComponentFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null)}

export interface DemosGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    homepageDemo?: DemoComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DescriptionGenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: DescriptionRichTextGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DescriptionRichTextGenqlSelection{
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Description_1GenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: Description_1RichTextGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Description_1RichTextGenqlSelection{
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EmailsGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: EmailsItemGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: EmailsItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EmailsItemGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EmailsItemFilterInput {AND?: (EmailsItemFilterInput | null),OR?: (EmailsItemFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null)}

export interface EnterprisePlanGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    cta?: ButtonComponentGenqlSelection
    description?: Description_1GenqlSelection
    lineItems?: (LineItems_1GenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (PlanLineItemComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (PlanLineItemComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    planLabel?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EntriesGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: ChangelogTemplateComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: ChangelogTemplateComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FaqGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    faqs?: (FaqsGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (FaqsItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (FaqsItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FaqsGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: FaqsItemGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: FaqsItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FaqsItemGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    answer?: boolean | number
    question?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FaqsItemFilterInput {AND?: (FaqsItemFilterInput | null),OR?: (FaqsItemFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),answer?: (StringFilter | null),question?: (StringFilter | null)}

export interface FeatureComponentGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    image?: BlockImageGenqlSelection
    pros?: ProsGenqlSelection
    subtitle?: SubtitleGenqlSelection
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FeatureComponentFilterInput {AND?: (FeatureComponentFilterInput | null),OR?: (FeatureComponentFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),title?: (StringFilter | null)}

export interface FeatureComponent_1GenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FeatureComponent_1FilterInput {AND?: (FeatureComponent_1FilterInput | null),OR?: (FeatureComponent_1FilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null)}

export interface FeaturedComponentGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    href?: boolean | number
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FeaturedComponentFilterInput {AND?: (FeaturedComponentFilterInput | null),OR?: (FeaturedComponentFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),href?: (StringFilter | null),title?: (StringFilter | null)}

export interface FeaturesGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: FeaturesItemGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: FeaturesItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FeaturesAndBenefitsGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: FeaturesAndBenefitsItemGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: FeaturesAndBenefitsItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FeaturesAndBenefitsItemGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    basehub?: boolean | number
    competitor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FeaturesAndBenefitsItemFilterInput {AND?: (FeaturesAndBenefitsItemFilterInput | null),OR?: (FeaturesAndBenefitsItemFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),basehub?: (Scalars['Boolean'] | null),competitor?: (Scalars['Boolean'] | null)}

export interface FeaturesItemGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    content?: ContentGenqlSelection
    image?: BlockImageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FeaturesItemFilterInput {AND?: (FeaturesItemFilterInput | null),OR?: (FeaturesItemFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null)}

export interface FeaturesItem_1GenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FeaturesItem_1FilterInput {AND?: (FeaturesItem_1FilterInput | null),OR?: (FeaturesItem_1FilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null)}

export interface FeaturesItem_2GenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FeaturesItem_2FilterInput {AND?: (FeaturesItem_2FilterInput | null),OR?: (FeaturesItem_2FilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null)}

export interface FeaturesLimitsComponentGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    aiChat?: BooleanFeatureComponentGenqlSelection
    analytics?: LimitComponentGenqlSelection
    apiRequests?: LimitComponentGenqlSelection
    assetRequests?: LimitComponentGenqlSelection
    assetStorage?: LimitComponentGenqlSelection
    blocks?: LimitComponentGenqlSelection
    dedicatedSuccessManager?: BooleanFeatureComponentGenqlSelection
    email?: LimitComponentGenqlSelection
    search?: FreeTextComponentGenqlSelection
    teams?: BooleanFeatureComponentGenqlSelection
    templates?: BooleanFeatureComponentGenqlSelection
    unlimitedUsage?: BooleanFeatureComponentGenqlSelection
    viewOnlyMode?: BooleanFeatureComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FeaturesLimitsComponentFilterInput {AND?: (FeaturesLimitsComponentFilterInput | null),OR?: (FeaturesLimitsComponentFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),aiChat?: (FeaturesLimitsComponentFilterInput__aiChat | null),analytics?: (FeaturesLimitsComponentFilterInput__analytics | null),apiRequests?: (FeaturesLimitsComponentFilterInput__apiRequests | null),assetRequests?: (FeaturesLimitsComponentFilterInput__assetRequests | null),assetStorage?: (FeaturesLimitsComponentFilterInput__assetStorage | null),blocks?: (FeaturesLimitsComponentFilterInput__blocks | null),dedicatedSuccessManager?: (FeaturesLimitsComponentFilterInput__dedicatedSuccessManager | null),email?: (FeaturesLimitsComponentFilterInput__email | null),search?: (FeaturesLimitsComponentFilterInput__search | null),teams?: (FeaturesLimitsComponentFilterInput__teams | null),templates?: (FeaturesLimitsComponentFilterInput__templates | null),unlimitedUsage?: (FeaturesLimitsComponentFilterInput__unlimitedUsage | null),viewOnlyMode?: (FeaturesLimitsComponentFilterInput__viewOnlyMode | null)}

export interface FeaturesLimitsComponentFilterInput__aiChat {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),value?: (Scalars['Boolean'] | null)}

export interface FeaturesLimitsComponentFilterInput__analytics {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),initial?: (NumberFilter | null),pricePerStep?: (NumberFilter | null),step?: (NumberFilter | null),unit?: (SelectFilter | null)}

export interface FeaturesLimitsComponentFilterInput__apiRequests {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),initial?: (NumberFilter | null),pricePerStep?: (NumberFilter | null),step?: (NumberFilter | null),unit?: (SelectFilter | null)}

export interface FeaturesLimitsComponentFilterInput__assetRequests {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),initial?: (NumberFilter | null),pricePerStep?: (NumberFilter | null),step?: (NumberFilter | null),unit?: (SelectFilter | null)}

export interface FeaturesLimitsComponentFilterInput__assetStorage {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),initial?: (NumberFilter | null),pricePerStep?: (NumberFilter | null),step?: (NumberFilter | null),unit?: (SelectFilter | null)}

export interface FeaturesLimitsComponentFilterInput__blocks {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),initial?: (NumberFilter | null),pricePerStep?: (NumberFilter | null),step?: (NumberFilter | null),unit?: (SelectFilter | null)}

export interface FeaturesLimitsComponentFilterInput__dedicatedSuccessManager {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),value?: (Scalars['Boolean'] | null)}

export interface FeaturesLimitsComponentFilterInput__email {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),initial?: (NumberFilter | null),pricePerStep?: (NumberFilter | null),step?: (NumberFilter | null),unit?: (SelectFilter | null)}

export interface FeaturesLimitsComponentFilterInput__search {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),value?: (StringFilter | null)}

export interface FeaturesLimitsComponentFilterInput__teams {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),value?: (Scalars['Boolean'] | null)}

export interface FeaturesLimitsComponentFilterInput__templates {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),value?: (Scalars['Boolean'] | null)}

export interface FeaturesLimitsComponentFilterInput__unlimitedUsage {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),value?: (Scalars['Boolean'] | null)}

export interface FeaturesLimitsComponentFilterInput__viewOnlyMode {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),value?: (Scalars['Boolean'] | null)}

export interface Features_1GenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: FeatureComponent_1GenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: FeatureComponent_1GenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Features_2GenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: FeaturesItem_1GenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: FeaturesItem_1GenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Features_3GenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: FeaturesItem_2GenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: FeaturesItem_2GenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FeedbackGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    form?: Form_1GenqlSelection
    sendToDiscord?: SendToDiscordGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FormGenqlSelection{
    /** The `adminKey` gives clients the ability to query, delete and update this block's data. **It's not meant to be exposed to the public.** */
    adminKey?: boolean | number
    /** The `ingestKey` gives clients the ability to send new events to this block. Generally, it's safe to expose it to the public. */
    ingestKey?: boolean | number
    schema?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Form_1GenqlSelection{
    /** The `adminKey` gives clients the ability to query, delete and update this block's data. **It's not meant to be exposed to the public.** */
    adminKey?: boolean | number
    /** The `ingestKey` gives clients the ability to send new events to this block. Generally, it's safe to expose it to the public. */
    ingestKey?: boolean | number
    schema?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FreeTextComponentGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FreeTextComponentFilterInput {AND?: (FreeTextComponentFilterInput | null),OR?: (FreeTextComponentFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),value?: (StringFilter | null)}

export interface FrozenApisGenqlSelection{
    /** The `adminKey` gives clients the ability to query, delete and update this block's data. **It's not meant to be exposed to the public.** */
    adminKey?: boolean | number
    /** The `ingestKey` gives clients the ability to send new events to this block. Generally, it's safe to expose it to the public. */
    ingestKey?: boolean | number
    schema?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FrozenApisNotiGenqlSelection{
    /** The `webhookSecret` is used to verify the authenticity of the webhook request, and also to type the payload. */
    webhookSecret?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GeneralEventsGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    miscellaneous?: MiscellaneousGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GetUploadSignedURLGenqlSelection{
    signedURL?: boolean | number
    uploadURL?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GuideComponentGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    steps?: (StepsGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (GuideStepComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (GuideStepComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    subtitle?: boolean | number
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GuideComponentFilterInput {AND?: (GuideComponentFilterInput | null),OR?: (GuideComponentFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),steps?: (ListFilter | null),subtitle?: (StringFilter | null),title?: (StringFilter | null)}

export interface GuideStepComponentGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    completeCondition?: boolean | number
    description?: boolean | number
    icon?: BlockImageGenqlSelection
    video?: BlockVideoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GuideStepComponentFilterInput {AND?: (GuideStepComponentFilterInput | null),OR?: (GuideStepComponentFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),completeCondition?: (SelectFilter | null),description?: (StringFilter | null)}

export interface HeaderGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    middleLinks?: (MiddleLinksGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (MiddleLinksItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (MiddleLinksItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    untitled?: UnionPlanLineItemComponentFeatureComponent_1HeroCustomersItemAuthorsItemHeadersItemPriceComponentTemplateAuthorsItemFeaturesItemTryLightModeComponentBlogpostTemplateComponentMiddleLinksItemPaymentModeComponentFeaturesLimitsComponentGuideStepComponentPricingPlanComponentWhimsicalEmbedComponentSnippetsItemBooleanFeatureComponentComparisonItemComponentRoadmapItemBuildTimeRedirectsItemQuoteComponentFeaturesItem_1FaqsItemFreeTextComponentLimitComponentCodeSnippetWithDifferentLanguagesComponentAsNewTabComponentCodeSnippetComponentFeatureComponentMarketingHeaderComponentDemoComponentCoverImageComponentCalloutComponentAsFloatingBannerComponentButtonComponentGuideComponentMetaComponentTextWithColorComponentChangelogTemplateComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface HeadersGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: HeadersItemGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: HeadersItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface HeadersItemGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    ctaLabelOverwrite?: boolean | number
    plan?: PricingPlanComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface HeadersItemFilterInput {AND?: (HeadersItemFilterInput | null),OR?: (HeadersItemFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),ctaLabelOverwrite?: (StringFilter | null),plan?: (HeadersItemFilterInput__plan_0___personal | null)}

export interface HeadersItemFilterInput__plan_0___personal {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),cta?: (HeadersItemFilterInput__plan_0___personal__cta | null),ctaNote?: (StringFilter | null),featuresLimits?: (HeadersItemFilterInput__plan_0___personal__featuresLimits | null),lineItems?: (ListFilter | null),listTitle?: (StringFilter | null),planLabel?: (StringFilter | null),price?: (HeadersItemFilterInput__plan_0___personal__price | null)}

export interface HeadersItemFilterInput__plan_0___personal__cta {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),external?: (Scalars['Boolean'] | null),href?: (StringFilter | null),label?: (StringFilter | null)}

export interface HeadersItemFilterInput__plan_0___personal__featuresLimits {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),aiChat?: (HeadersItemFilterInput__plan_0___personal__featuresLimits__aiChat | null),analytics?: (HeadersItemFilterInput__plan_0___personal__featuresLimits__analytics | null),apiRequests?: (HeadersItemFilterInput__plan_0___personal__featuresLimits__apiRequests | null),assetRequests?: (HeadersItemFilterInput__plan_0___personal__featuresLimits__assetRequests | null),assetStorage?: (HeadersItemFilterInput__plan_0___personal__featuresLimits__assetStorage | null),blocks?: (HeadersItemFilterInput__plan_0___personal__featuresLimits__blocks | null),dedicatedSuccessManager?: (HeadersItemFilterInput__plan_0___personal__featuresLimits__dedicatedSuccessManager | null),email?: (HeadersItemFilterInput__plan_0___personal__featuresLimits__email | null),search?: (HeadersItemFilterInput__plan_0___personal__featuresLimits__search | null),teams?: (HeadersItemFilterInput__plan_0___personal__featuresLimits__teams | null),templates?: (HeadersItemFilterInput__plan_0___personal__featuresLimits__templates | null),unlimitedUsage?: (HeadersItemFilterInput__plan_0___personal__featuresLimits__unlimitedUsage | null),viewOnlyMode?: (HeadersItemFilterInput__plan_0___personal__featuresLimits__viewOnlyMode | null)}

export interface HeadersItemFilterInput__plan_0___personal__featuresLimits__aiChat {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),value?: (Scalars['Boolean'] | null)}

export interface HeadersItemFilterInput__plan_0___personal__featuresLimits__analytics {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),initial?: (NumberFilter | null),pricePerStep?: (NumberFilter | null),step?: (NumberFilter | null),unit?: (SelectFilter | null)}

export interface HeadersItemFilterInput__plan_0___personal__featuresLimits__apiRequests {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),initial?: (NumberFilter | null),pricePerStep?: (NumberFilter | null),step?: (NumberFilter | null),unit?: (SelectFilter | null)}

export interface HeadersItemFilterInput__plan_0___personal__featuresLimits__assetRequests {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),initial?: (NumberFilter | null),pricePerStep?: (NumberFilter | null),step?: (NumberFilter | null),unit?: (SelectFilter | null)}

export interface HeadersItemFilterInput__plan_0___personal__featuresLimits__assetStorage {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),initial?: (NumberFilter | null),pricePerStep?: (NumberFilter | null),step?: (NumberFilter | null),unit?: (SelectFilter | null)}

export interface HeadersItemFilterInput__plan_0___personal__featuresLimits__blocks {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),initial?: (NumberFilter | null),pricePerStep?: (NumberFilter | null),step?: (NumberFilter | null),unit?: (SelectFilter | null)}

export interface HeadersItemFilterInput__plan_0___personal__featuresLimits__dedicatedSuccessManager {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),value?: (Scalars['Boolean'] | null)}

export interface HeadersItemFilterInput__plan_0___personal__featuresLimits__email {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),initial?: (NumberFilter | null),pricePerStep?: (NumberFilter | null),step?: (NumberFilter | null),unit?: (SelectFilter | null)}

export interface HeadersItemFilterInput__plan_0___personal__featuresLimits__search {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),value?: (StringFilter | null)}

export interface HeadersItemFilterInput__plan_0___personal__featuresLimits__teams {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),value?: (Scalars['Boolean'] | null)}

export interface HeadersItemFilterInput__plan_0___personal__featuresLimits__templates {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),value?: (Scalars['Boolean'] | null)}

export interface HeadersItemFilterInput__plan_0___personal__featuresLimits__unlimitedUsage {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),value?: (Scalars['Boolean'] | null)}

export interface HeadersItemFilterInput__plan_0___personal__featuresLimits__viewOnlyMode {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),value?: (Scalars['Boolean'] | null)}

export interface HeadersItemFilterInput__plan_0___personal__price {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),monthly?: (NumberFilter | null),yearly?: (NumberFilter | null)}

export interface HeroCustomersGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: HeroCustomersItemGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: HeroCustomersItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface HeroCustomersItemGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    image?: BlockImageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface HeroCustomersItemFilterInput {AND?: (HeroCustomersItemFilterInput | null),OR?: (HeroCustomersItemFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null)}

export interface HeroSubtitleGenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: HeroSubtitleRichTextGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface HeroSubtitleRichTextGenqlSelection{
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface HeroTitleGenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: HeroTitleRichTextGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface HeroTitleRichTextGenqlSelection{
    blocks?: UnionTextWithColorComponentGenqlSelection
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface HomepageGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    analytics?: PageAnalyticsComponentGenqlSelection
    bento?: BentoGenqlSelection
    customersTagline?: boolean | number
    faq?: FaqGenqlSelection
    featuredPost?: UnionBlogpostTemplateComponentChangelogTemplateComponentGenqlSelection
    heroCustomers?: (HeroCustomersGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (HeroCustomersItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (HeroCustomersItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    heroImage?: BlockImageGenqlSelection
    heroMainCta?: ButtonComponentGenqlSelection
    heroSecondaryCta?: ButtonComponentGenqlSelection
    heroSubtitle?: HeroSubtitleGenqlSelection
    heroTitle?: HeroTitleGenqlSelection
    heroVideo?: BlockVideoGenqlSelection
    homeMeta?: MetaComponentGenqlSelection
    homepageFeature1?: FeatureComponentGenqlSelection
    homepageFeature3?: FeatureComponentGenqlSelection
    manifesto?: ManifestoGenqlSelection
    roadmap?: RoadmapGenqlSelection
    shoutouts?: ShoutoutsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface IconsGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    email?: boolean | number
    rssFeed?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface InEditorTimelineGuidesGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    developerGuide?: GuideComponentGenqlSelection
    editorGuide?: GuideComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface IntegrationInstructionsGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: IntegrationInstructionsItemGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: IntegrationInstructionsItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface IntegrationInstructionsItemGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    body?: Body_2GenqlSelection
    icon?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface IntegrationInstructionsItemFilterInput {AND?: (IntegrationInstructionsItemFilterInput | null),OR?: (IntegrationInstructionsItemFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null)}

export interface InvitationGenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: InvitationRichTextGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface InvitationRichTextGenqlSelection{
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LabelGenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: LabelRichTextGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LabelRichTextGenqlSelection{
    blocks?: UnionTextWithColorComponentGenqlSelection
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LegalStuffGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    privacy?: PrivacyGenqlSelection
    terms?: TermsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LimitComponentGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    initial?: boolean | number
    pricePerStep?: boolean | number
    step?: boolean | number
    unit?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LimitComponentFilterInput {AND?: (LimitComponentFilterInput | null),OR?: (LimitComponentFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),initial?: (NumberFilter | null),pricePerStep?: (NumberFilter | null),step?: (NumberFilter | null),unit?: (SelectFilter | null)}

export interface LineItemsGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: PlanLineItemComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: PlanLineItemComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LineItems_1GenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: PlanLineItemComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: PlanLineItemComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ListFilter {isEmpty?: (Scalars['Boolean'] | null),length?: (Scalars['Int'] | null)}

export interface ListMetaGenqlSelection{
    /** Number of items after applying filters but before pagination */
    filteredCount?: boolean | number
    /** Total number of items in collection before any filtering/pagination */
    totalCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ManifestoGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    content?: Content_7GenqlSelection
    manifestoCta?: ButtonComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Manifesto_1GenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    analytics?: PageAnalyticsComponentGenqlSelection
    content?: Content_8GenqlSelection
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MarketingHeaderComponentGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    subtitle?: boolean | number
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MarketingHeaderComponentFilterInput {AND?: (MarketingHeaderComponentFilterInput | null),OR?: (MarketingHeaderComponentFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),subtitle?: (StringFilter | null),title?: (StringFilter | null)}

export interface MediaBlockGenqlSelection{
    fileName?: boolean | number
    fileSize?: boolean | number
    lastModified?: boolean | number
    mimeType?: boolean | number
    url?: boolean | number
    on_BlockAudio?: BlockAudioGenqlSelection
    on_BlockFile?: BlockFileGenqlSelection
    on_BlockImage?: BlockImageGenqlSelection
    on_BlockVideo?: BlockVideoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MediaBlockUnionGenqlSelection{
    on_BlockAudio?:BlockAudioGenqlSelection,
    on_BlockFile?:BlockFileGenqlSelection,
    on_BlockImage?:BlockImageGenqlSelection,
    on_BlockVideo?:BlockVideoGenqlSelection,
    on_MediaBlock?: MediaBlockGenqlSelection,
    __typename?: boolean | number
}


/** Use for SEO */
export interface MetaComponentGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    ogImage?: BlockImageGenqlSelection
    subtitle?: boolean | number
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MetaComponentFilterInput {AND?: (MetaComponentFilterInput | null),OR?: (MetaComponentFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),subtitle?: (StringFilter | null),title?: (StringFilter | null)}

export interface MiddleLinksGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: MiddleLinksItemGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: MiddleLinksItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MiddleLinksItemGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    href?: boolean | number
    new?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MiddleLinksItemFilterInput {AND?: (MiddleLinksItemFilterInput | null),OR?: (MiddleLinksItemFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),href?: (StringFilter | null),new?: (Scalars['Boolean'] | null)}

export interface MiscAppEventsGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    crashNotifications?: CrashNotificationsGenqlSelection
    crashReports?: CrashReportsGenqlSelection
    frozenApis?: FrozenApisGenqlSelection
    frozenApisNoti?: FrozenApisNotiGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MiscellaneousGenqlSelection{
    /** The `adminKey` gives clients the ability to query, delete and update this block's data. **It's not meant to be exposed to the public.** */
    adminKey?: boolean | number
    /** The `ingestKey` gives clients the ability to send new events to this block. Generally, it's safe to expose it to the public. */
    ingestKey?: boolean | number
    schema?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MutationGenqlSelection{
    /**
     * Returns a signed url and an upload url so that you can upload files into your repository.
     * 
     * Example usage with JavaScript:
     * ```js
     * async function handleUpload(file: File) {
     *   const { getUploadSignedURL } = await basehub().mutation({
     *     getUploadSignedURL: {
     *       __args: { fileName: file.name },
     *       signedURL: true,
     *       uploadURL: true,
     *     }
     *   })
     * 
     *   const { signedURL, uploadURL } = getUploadSignedURL
     * 
     *   await fetch(signedURL, { method: 'PUT', body: file })
     * 
     *   // done! do something with the uploadURL now
     * }
     * ```
     * 
     */
    getUploadSignedURL?: (GetUploadSignedURLGenqlSelection & { __args: {
    /** SHA256 hash of the file. Used for reusing existing files. */
    fileHash?: (Scalars['String'] | null), 
    /** The file name */
    fileName: Scalars['String']} })
    /** Start a job that can be awaited and the result given directly. Under the hood, it runs `transactionAsync` and polls for the result until it is available. You can pass a `timeout` argument, the default being 30_000ms. */
    transaction?: (TransactionStatusGenqlSelection & { __args: {
    /** Auto make a commit in your Repo with the specified message. */
    autoCommit?: (Scalars['String'] | null), 
    /** Transaction data. */
    data: Scalars['String'], 
    /** Skip running workflows and event subscribers. Defaults to false. */
    skipWorkflows?: (Scalars['Boolean'] | null), 
    /** Timeout in milliseconds. */
    timeout?: (Scalars['Int'] | null)} })
    /** Start an asynchronous job to mutate BaseHub data. Returns a transaction ID which you can use to get the result of the job. */
    transactionAsync?: { __args: {
    /** Auto make a commit in your Repo with the specified message. */
    autoCommit?: (Scalars['String'] | null), 
    /** Transaction data. */
    data: Scalars['String'], 
    /** Skip running workflows and event subscribers. Defaults to false. */
    skipWorkflows?: (Scalars['Boolean'] | null)} }
    transactionStatus?: (TransactionStatusGenqlSelection & { __args: {
    /** Transaction ID */
    id: Scalars['String']} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface NarrationGenqlSelection{
    /** The `webhookSecret` is used to verify the authenticity of the webhook request, and also to type the payload. */
    webhookSecret?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface NewSubGenqlSelection{
    /** The `webhookSecret` is used to verify the authenticity of the webhook request, and also to type the payload. */
    webhookSecret?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface NewsletterGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    copy?: CopyGenqlSelection
    emails?: (EmailsGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (EmailsItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (EmailsItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    form?: FormGenqlSelection
    newSub?: NewSubGenqlSelection
    send?: SendGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface NoteGenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: NoteRichTextGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface NoteRichTextGenqlSelection{
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface NumberFilter {eq?: (Scalars['Float'] | null),gt?: (Scalars['Float'] | null),gte?: (Scalars['Float'] | null),isNull?: (Scalars['Boolean'] | null),lt?: (Scalars['Float'] | null),lte?: (Scalars['Float'] | null),neq?: (Scalars['Float'] | null)}

export interface OnboardingGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    content?: Content_10GenqlSelection
    headerBackground?: BlockImageGenqlSelection
    team?: AuthorsItemGenqlSelection
    teamTitle?: boolean | number
    title?: Title_1GenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PageAnalyticsComponentGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    pageViews?: PageViewsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PageAnalyticsComponentFilterInput {AND?: (PageAnalyticsComponentFilterInput | null),OR?: (PageAnalyticsComponentFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null)}

export interface PageViewsGenqlSelection{
    /** The `adminKey` gives clients the ability to query, delete and update this block's data. **It's not meant to be exposed to the public.** */
    adminKey?: boolean | number
    /** The `ingestKey` gives clients the ability to send new events to this block. Generally, it's safe to expose it to the public. */
    ingestKey?: boolean | number
    schema?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PaymentModeComponentGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    cardTag?: CardTagGenqlSelection
    switchLabel?: SwitchLabelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PaymentModeComponentFilterInput {AND?: (PaymentModeComponentFilterInput | null),OR?: (PaymentModeComponentFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null)}

export interface PaymentSwitchGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    monthly?: PaymentModeComponentGenqlSelection
    yearly?: PaymentModeComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Simple line item with no fields */
export interface PlanLineItemComponentGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlanLineItemComponentFilterInput {AND?: (PlanLineItemComponentFilterInput | null),OR?: (PlanLineItemComponentFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null)}

export interface PlanNameComponentGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlanNameComponentFilterInput {AND?: (PlanNameComponentFilterInput | null),OR?: (PlanNameComponentFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null)}

export interface PlansGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: PricingPlanComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: PricingPlanComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlansComparisonTableGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    body?: (Body_1GenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (ComparisonItemComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (ComparisonItemComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    headers?: (HeadersGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (HeadersItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (HeadersItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PostsGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: BlogpostTemplateComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: BlogpostTemplateComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PriceComponentGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    label?: LabelGenqlSelection
    monthly?: boolean | number
    yearly?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PriceComponentFilterInput {AND?: (PriceComponentFilterInput | null),OR?: (PriceComponentFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),monthly?: (NumberFilter | null),yearly?: (NumberFilter | null)}

export interface PricingGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    baselineFeatures?: BaselineFeaturesGenqlSelection
    calculator?: CalculatorGenqlSelection
    enterprisePlan?: EnterprisePlanGenqlSelection
    paymentSwitch?: PaymentSwitchGenqlSelection
    plans?: (PlansGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (PricingPlanComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (PricingPlanComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    plansComparisonTable?: PlansComparisonTableGenqlSelection
    subtitle?: Subtitle_5GenqlSelection
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PricingBannerGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    ctas?: ButtonComponentGenqlSelection
    features?: (Features_3GenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (FeaturesItem_2FilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (FeaturesItem_2OrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    overtitle?: boolean | number
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PricingPlanComponentGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    cta?: ButtonComponentGenqlSelection
    ctaNote?: boolean | number
    description?: DescriptionGenqlSelection
    featuresLimits?: FeaturesLimitsComponentGenqlSelection
    lineItems?: (LineItemsGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (PlanLineItemComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (PlanLineItemComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    listTitle?: boolean | number
    planLabel?: boolean | number
    price?: PriceComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PricingPlanComponentFilterInput {AND?: (PricingPlanComponentFilterInput | null),OR?: (PricingPlanComponentFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),cta?: (PricingPlanComponentFilterInput__cta | null),ctaNote?: (StringFilter | null),featuresLimits?: (PricingPlanComponentFilterInput__featuresLimits | null),lineItems?: (ListFilter | null),listTitle?: (StringFilter | null),planLabel?: (StringFilter | null),price?: (PricingPlanComponentFilterInput__price | null)}

export interface PricingPlanComponentFilterInput__cta {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),external?: (Scalars['Boolean'] | null),href?: (StringFilter | null),label?: (StringFilter | null)}

export interface PricingPlanComponentFilterInput__featuresLimits {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),aiChat?: (PricingPlanComponentFilterInput__featuresLimits__aiChat | null),analytics?: (PricingPlanComponentFilterInput__featuresLimits__analytics | null),apiRequests?: (PricingPlanComponentFilterInput__featuresLimits__apiRequests | null),assetRequests?: (PricingPlanComponentFilterInput__featuresLimits__assetRequests | null),assetStorage?: (PricingPlanComponentFilterInput__featuresLimits__assetStorage | null),blocks?: (PricingPlanComponentFilterInput__featuresLimits__blocks | null),dedicatedSuccessManager?: (PricingPlanComponentFilterInput__featuresLimits__dedicatedSuccessManager | null),email?: (PricingPlanComponentFilterInput__featuresLimits__email | null),search?: (PricingPlanComponentFilterInput__featuresLimits__search | null),teams?: (PricingPlanComponentFilterInput__featuresLimits__teams | null),templates?: (PricingPlanComponentFilterInput__featuresLimits__templates | null),unlimitedUsage?: (PricingPlanComponentFilterInput__featuresLimits__unlimitedUsage | null),viewOnlyMode?: (PricingPlanComponentFilterInput__featuresLimits__viewOnlyMode | null)}

export interface PricingPlanComponentFilterInput__featuresLimits__aiChat {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),value?: (Scalars['Boolean'] | null)}

export interface PricingPlanComponentFilterInput__featuresLimits__analytics {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),initial?: (NumberFilter | null),pricePerStep?: (NumberFilter | null),step?: (NumberFilter | null),unit?: (SelectFilter | null)}

export interface PricingPlanComponentFilterInput__featuresLimits__apiRequests {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),initial?: (NumberFilter | null),pricePerStep?: (NumberFilter | null),step?: (NumberFilter | null),unit?: (SelectFilter | null)}

export interface PricingPlanComponentFilterInput__featuresLimits__assetRequests {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),initial?: (NumberFilter | null),pricePerStep?: (NumberFilter | null),step?: (NumberFilter | null),unit?: (SelectFilter | null)}

export interface PricingPlanComponentFilterInput__featuresLimits__assetStorage {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),initial?: (NumberFilter | null),pricePerStep?: (NumberFilter | null),step?: (NumberFilter | null),unit?: (SelectFilter | null)}

export interface PricingPlanComponentFilterInput__featuresLimits__blocks {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),initial?: (NumberFilter | null),pricePerStep?: (NumberFilter | null),step?: (NumberFilter | null),unit?: (SelectFilter | null)}

export interface PricingPlanComponentFilterInput__featuresLimits__dedicatedSuccessManager {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),value?: (Scalars['Boolean'] | null)}

export interface PricingPlanComponentFilterInput__featuresLimits__email {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),initial?: (NumberFilter | null),pricePerStep?: (NumberFilter | null),step?: (NumberFilter | null),unit?: (SelectFilter | null)}

export interface PricingPlanComponentFilterInput__featuresLimits__search {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),value?: (StringFilter | null)}

export interface PricingPlanComponentFilterInput__featuresLimits__teams {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),value?: (Scalars['Boolean'] | null)}

export interface PricingPlanComponentFilterInput__featuresLimits__templates {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),value?: (Scalars['Boolean'] | null)}

export interface PricingPlanComponentFilterInput__featuresLimits__unlimitedUsage {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),value?: (Scalars['Boolean'] | null)}

export interface PricingPlanComponentFilterInput__featuresLimits__viewOnlyMode {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),value?: (Scalars['Boolean'] | null)}

export interface PricingPlanComponentFilterInput__price {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),monthly?: (NumberFilter | null),yearly?: (NumberFilter | null)}

export interface PrivacyGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    analytics?: PageAnalyticsComponentGenqlSelection
    content?: Content_5GenqlSelection
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PromptV11GenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: PromptV11RichTextGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PromptV11RichTextGenqlSelection{
    blocks?: UnionTokenComponent_1RepoSchemaComponent_2GenqlSelection
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PromptsGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    aboutBasehub?: AboutBasehubGenqlSelection
    contextForLlm?: ContextForLlmGenqlSelection
    promptV11?: PromptV11GenqlSelection
    repoLlmsTxt?: RepoLlmsTxtGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProsGenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: ProsRichTextGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProsRichTextGenqlSelection{
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryGenqlSelection{
    /** Query across all of the instances of a component. Pass in filters and sorts if you want, and get each instance via the `items` key. */
    _componentInstances?: _componentsGenqlSelection
    /** The structure of the repository. Used by START. */
    _structure?: { __args: {
    /** The format of the structure. */
    format?: (_StructureFormatEnum | null), 
    /** The format of the structure. */
    resolveTargetsWith?: (_ResolveTargetsWithEnum | null), 
    /** A target block to forcefully resolve in the schema. */
    targetBlock?: (TargetBlock | null), 
    /** Whether to include constraints in the structure. */
    withConstraints?: (Scalars['Boolean'] | null), 
    /** Whether to include IDs in the structure. */
    withIDs?: (Scalars['Boolean'] | null), 
    /** Whether to include type options in the structure. */
    withTypeOptions?: (Scalars['Boolean'] | null)} } | boolean | number
    _sys?: RepoSysGenqlSelection
    announcementBanner?: AnnouncementBannerGenqlSelection
    baseHubAgents?: BaseHubAgentsGenqlSelection
    basehubVs?: BasehubVsGenqlSelection
    blog?: BlogGenqlSelection
    buildTimeRedirects?: (BuildTimeRedirectsGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (BuildTimeRedirectsItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (BuildTimeRedirectsItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    changelog?: ChangelogGenqlSelection
    collections?: CollectionsGenqlSelection
    components?: ComponentsGenqlSelection
    demos?: DemosGenqlSelection
    features?: (Features_1GenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (FeatureComponent_1FilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (FeatureComponent_1OrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    feedback?: FeedbackGenqlSelection
    generalEvents?: GeneralEventsGenqlSelection
    header?: HeaderGenqlSelection
    homepage?: HomepageGenqlSelection
    icons?: IconsGenqlSelection
    legalStuff?: LegalStuffGenqlSelection
    manifesto?: Manifesto_1GenqlSelection
    miscAppEvents?: MiscAppEventsGenqlSelection
    newsletter?: NewsletterGenqlSelection
    onboarding?: OnboardingGenqlSelection
    pricing?: PricingGenqlSelection
    prompts?: PromptsGenqlSelection
    templates?: TemplatesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QuoteGenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: QuoteRichTextGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QuoteComponentGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    author?: AuthorsItemGenqlSelection
    href?: boolean | number
    quote?: QuoteGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QuoteComponentFilterInput {AND?: (QuoteComponentFilterInput | null),OR?: (QuoteComponentFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),author?: (QuoteComponentFilterInput__author_0___untitled | null),href?: (StringFilter | null)}

export interface QuoteComponentFilterInput__author_0___untitled {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),name?: (StringFilter | null),role?: (StringFilter | null),x?: (StringFilter | null)}

export interface QuoteRichTextGenqlSelection{
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RepoLlmsTxtGenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: RepoLlmsTxtRichTextGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RepoLlmsTxtRichTextGenqlSelection{
    blocks?: UnionRepoTitleComponentRepoSchemaComponent_1GenqlSelection
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RepoSchemaComponentGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RepoSchemaComponentFilterInput {AND?: (RepoSchemaComponentFilterInput | null),OR?: (RepoSchemaComponentFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null)}

export interface RepoSchemaComponent_1GenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RepoSchemaComponent_1FilterInput {AND?: (RepoSchemaComponent_1FilterInput | null),OR?: (RepoSchemaComponent_1FilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null)}

export interface RepoSchemaComponent_2GenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RepoSchemaComponent_2FilterInput {AND?: (RepoSchemaComponent_2FilterInput | null),OR?: (RepoSchemaComponent_2FilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null)}

export interface RepoSysGenqlSelection{
    dashboardUrl?: boolean | number
    forkUrl?: boolean | number
    hash?: boolean | number
    id?: boolean | number
    slug?: boolean | number
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RepoTitleComponentGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RepoTitleComponentFilterInput {AND?: (RepoTitleComponentFilterInput | null),OR?: (RepoTitleComponentFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null)}

export interface RichTextJsonGenqlSelection{
    content?: boolean | number
    toc?: boolean | number
    on_AboutBasehubRichText?: AboutBasehubRichTextGenqlSelection
    on_BaseRichTextJson?: BaseRichTextJsonGenqlSelection
    on_BodyRichText?: BodyRichTextGenqlSelection
    on_Body_2RichText?: Body_2RichTextGenqlSelection
    on_CardTagRichText?: CardTagRichTextGenqlSelection
    on_ContentRichText?: ContentRichTextGenqlSelection
    on_Content_10RichText?: Content_10RichTextGenqlSelection
    on_Content_1RichText?: Content_1RichTextGenqlSelection
    on_Content_2RichText?: Content_2RichTextGenqlSelection
    on_Content_3RichText?: Content_3RichTextGenqlSelection
    on_Content_4RichText?: Content_4RichTextGenqlSelection
    on_Content_5RichText?: Content_5RichTextGenqlSelection
    on_Content_6RichText?: Content_6RichTextGenqlSelection
    on_Content_7RichText?: Content_7RichTextGenqlSelection
    on_Content_8RichText?: Content_8RichTextGenqlSelection
    on_Content_9RichText?: Content_9RichTextGenqlSelection
    on_ContextForLlmRichText?: ContextForLlmRichTextGenqlSelection
    on_DescriptionRichText?: DescriptionRichTextGenqlSelection
    on_Description_1RichText?: Description_1RichTextGenqlSelection
    on_HeroSubtitleRichText?: HeroSubtitleRichTextGenqlSelection
    on_HeroTitleRichText?: HeroTitleRichTextGenqlSelection
    on_InvitationRichText?: InvitationRichTextGenqlSelection
    on_LabelRichText?: LabelRichTextGenqlSelection
    on_NoteRichText?: NoteRichTextGenqlSelection
    on_PromptV11RichText?: PromptV11RichTextGenqlSelection
    on_ProsRichText?: ProsRichTextGenqlSelection
    on_QuoteRichText?: QuoteRichTextGenqlSelection
    on_RepoLlmsTxtRichText?: RepoLlmsTxtRichTextGenqlSelection
    on_ScriptRichText?: ScriptRichTextGenqlSelection
    on_SubtitleRichText?: SubtitleRichTextGenqlSelection
    on_Subtitle_1RichText?: Subtitle_1RichTextGenqlSelection
    on_Subtitle_2RichText?: Subtitle_2RichTextGenqlSelection
    on_Subtitle_3RichText?: Subtitle_3RichTextGenqlSelection
    on_Subtitle_4RichText?: Subtitle_4RichTextGenqlSelection
    on_Subtitle_5RichText?: Subtitle_5RichTextGenqlSelection
    on_SwitchLabelRichText?: SwitchLabelRichTextGenqlSelection
    on_TitleRichText?: TitleRichTextGenqlSelection
    on_Title_1RichText?: Title_1RichTextGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RoadmapGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    invitation?: InvitationGenqlSelection
    rawWireframe?: BlockImageGenqlSelection
    roadmap?: (Roadmap_1GenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (RoadmapItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (RoadmapItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    subtitle?: Subtitle_4GenqlSelection
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RoadmapItemGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** ISO 8601 date string. */
    date?: boolean | number
    subtitle?: Subtitle_1GenqlSelection
    type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RoadmapItemFilterInput {AND?: (RoadmapItemFilterInput | null),OR?: (RoadmapItemFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),date?: (DateFilter | null),type?: (SelectFilter | null)}

export interface Roadmap_1GenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: RoadmapItemGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: RoadmapItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ScriptGenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: ScriptRichTextGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ScriptRichTextGenqlSelection{
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SectionsGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    comparisonBento?: ComparisonBentoComponentGenqlSelection
    comparisonSteps?: ComparisonStepsComponentGenqlSelection
    comparisonTable?: ComparisonTableComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SelectFilter {excludes?: (Scalars['String'] | null),excludesAll?: (Scalars['String'][] | null),includes?: (Scalars['String'] | null),includesAll?: (Scalars['String'][] | null),includesAny?: (Scalars['String'][] | null),isEmpty?: (Scalars['Boolean'] | null)}

export interface SendGenqlSelection{
    /** The `webhookSecret` is used to verify the authenticity of the webhook request, and also to type the payload. */
    webhookSecret?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SendToDiscordGenqlSelection{
    /** The `webhookSecret` is used to verify the authenticity of the webhook request, and also to type the payload. */
    webhookSecret?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ShoutoutsGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    quotes?: QuoteComponentGenqlSelection
    subtitle?: Subtitle_3GenqlSelection
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SnippetsGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: SnippetsItemGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: SnippetsItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SnippetsItemGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    fileName?: boolean | number
    snippet?: BlockCodeSnippetGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SnippetsItemFilterInput {AND?: (SnippetsItemFilterInput | null),OR?: (SnippetsItemFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),fileName?: (StringFilter | null)}

export interface StepsGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: GuideStepComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: GuideStepComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StepsItemGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    content?: Content_9GenqlSelection
    featured?: FeaturedComponentGenqlSelection
    quote?: QuoteComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StepsItemFilterInput {AND?: (StepsItemFilterInput | null),OR?: (StepsItemFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),featured?: (StepsItemFilterInput__featured | null),quote?: (StepsItemFilterInput__quote_0___quote | null)}

export interface StepsItemFilterInput__featured {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),href?: (StringFilter | null),title?: (StringFilter | null)}

export interface StepsItemFilterInput__quote_0___quote {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),href?: (StringFilter | null)}

export interface Steps_1GenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: StepsItemGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: StepsItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StringFilter {contains?: (Scalars['String'] | null),endsWith?: (Scalars['String'] | null),eq?: (Scalars['String'] | null),isNull?: (Scalars['Boolean'] | null),matches?: (StringMatchesFilter | null),notEq?: (Scalars['String'] | null),startsWith?: (Scalars['String'] | null)}

export interface StringMatchesFilter {caseSensitive?: (Scalars['Boolean'] | null),pattern: Scalars['String']}

export interface SubtitleGenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: SubtitleRichTextGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SubtitleRichTextGenqlSelection{
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Subtitle_1GenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: Subtitle_1RichTextGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Subtitle_1RichTextGenqlSelection{
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Subtitle_2GenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: Subtitle_2RichTextGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Subtitle_2RichTextGenqlSelection{
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Subtitle_3GenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: Subtitle_3RichTextGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Subtitle_3RichTextGenqlSelection{
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Subtitle_4GenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: Subtitle_4RichTextGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Subtitle_4RichTextGenqlSelection{
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Subtitle_5GenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: Subtitle_5RichTextGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Subtitle_5RichTextGenqlSelection{
    blocks?: UnionTextWithColorComponentGenqlSelection
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SwitchLabelGenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: SwitchLabelRichTextGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SwitchLabelRichTextGenqlSelection{
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TargetBlock {focus?: (Scalars['Boolean'] | null),id: Scalars['String'],label: Scalars['String']}

export interface TemplateAuthorsGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: TemplateAuthorsItemGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: TemplateAuthorsItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TemplateAuthorsItemGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TemplateAuthorsItemFilterInput {AND?: (TemplateAuthorsItemFilterInput | null),OR?: (TemplateAuthorsItemFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),url?: (StringFilter | null)}

export interface TemplatesGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    analytics?: PageAnalyticsComponentGenqlSelection
    demoVideo?: BlockVideoGenqlSelection
    meta?: MetaComponentGenqlSelection
    overtitle?: boolean | number
    subtitle?: boolean | number
    templates?: (Templates_1GenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (TemplatesItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (TemplatesItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    title?: boolean | number
    watchDemoCta?: ButtonComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TemplatesItemGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    author?: TemplateAuthorsItemGenqlSelection
    basehubRepoUrl?: boolean | number
    description?: boolean | number
    gitRepoUrl?: boolean | number
    icon?: BlockImageGenqlSelection
    previewUrl?: boolean | number
    shortDescription?: boolean | number
    thumbnail?: BlockImageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TemplatesItemFilterInput {AND?: (TemplatesItemFilterInput | null),OR?: (TemplatesItemFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),author?: (TemplatesItemFilterInput__author_0___untitled | null),basehubRepoUrl?: (StringFilter | null),description?: (StringFilter | null),gitRepoUrl?: (StringFilter | null),previewUrl?: (StringFilter | null),shortDescription?: (StringFilter | null)}

export interface TemplatesItemFilterInput__author_0___untitled {_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),url?: (StringFilter | null)}

export interface Templates_1GenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: TemplatesItemGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: TemplatesItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TermsGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    analytics?: PageAnalyticsComponentGenqlSelection
    content?: Content_6GenqlSelection
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TestimonialsGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: QuoteComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: QuoteComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TextWithColorComponentGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    untitled?: BlockColorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TextWithColorComponentFilterInput {AND?: (TextWithColorComponentFilterInput | null),OR?: (TextWithColorComponentFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),untitled?: (StringFilter | null)}

export interface ThreadComponentGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ThreadComponentFilterInput {AND?: (ThreadComponentFilterInput | null),OR?: (ThreadComponentFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null)}

export interface TitleGenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: TitleRichTextGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TitleRichTextGenqlSelection{
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Title_1GenqlSelection{
    html?: { __args: {
    /** It automatically generates a unique id for each heading present in the HTML. Enabled by default. */
    slugs?: (Scalars['Boolean'] | null), 
    /** Inserts a table of contents at the beginning of the HTML. */
    toc?: (Scalars['Boolean'] | null)} } | boolean | number
    json?: Title_1RichTextGenqlSelection
    markdown?: boolean | number
    plainText?: boolean | number
    readingTime?: { __args: {
    /** Words per minute, defaults to average 183wpm */
    wpm?: (Scalars['Int'] | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface Title_1RichTextGenqlSelection{
    blocks?: UnionPlanNameComponentGenqlSelection
    content?: boolean | number
    toc?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TokenComponentGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TokenComponentFilterInput {AND?: (TokenComponentFilterInput | null),OR?: (TokenComponentFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null)}

export interface TokenComponent_1GenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TokenComponent_1FilterInput {AND?: (TokenComponent_1FilterInput | null),OR?: (TokenComponent_1FilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null)}

export interface TransactionStatusGenqlSelection{
    /** Duration in milliseconds. */
    duration?: boolean | number
    endedAt?: boolean | number
    id?: boolean | number
    message?: boolean | number
    startedAt?: boolean | number
    status?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TryLightModeComponentGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TryLightModeComponentFilterInput {AND?: (TryLightModeComponentFilterInput | null),OR?: (TryLightModeComponentFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null)}

export interface UnionAsNewTabComponentAsFloatingBannerComponentGenqlSelection{
    on_AsFloatingBannerComponent?:AsFloatingBannerComponentGenqlSelection,
    on_AsNewTabComponent?:AsNewTabComponentGenqlSelection,
    on_BlockDocument?: BlockDocumentGenqlSelection,
    __typename?: boolean | number
}

export interface UnionBlogpostTemplateComponentChangelogTemplateComponentGenqlSelection{
    on_BlogpostTemplateComponent?:BlogpostTemplateComponentGenqlSelection,
    on_ChangelogTemplateComponent?:ChangelogTemplateComponentGenqlSelection,
    on_BlockDocument?: BlockDocumentGenqlSelection,
    __typename?: boolean | number
}

export interface UnionBooleanFeatureComponentFreeTextComponentLimitComponentGenqlSelection{
    on_BooleanFeatureComponent?:BooleanFeatureComponentGenqlSelection,
    on_FreeTextComponent?:FreeTextComponentGenqlSelection,
    on_LimitComponent?:LimitComponentGenqlSelection,
    on_BlockDocument?: BlockDocumentGenqlSelection,
    __typename?: boolean | number
}

export interface UnionCalloutComponentGenqlSelection{
    on_CalloutComponent?:CalloutComponentGenqlSelection,
    on_BlockDocument?: BlockDocumentGenqlSelection,
    __typename?: boolean | number
}

export interface UnionCodeSnippetComponentCalloutComponentGenqlSelection{
    on_CalloutComponent?:CalloutComponentGenqlSelection,
    on_CodeSnippetComponent?:CodeSnippetComponentGenqlSelection,
    on_BlockDocument?: BlockDocumentGenqlSelection,
    __typename?: boolean | number
}

export interface UnionComparisonTableComponentComparisonBentoComponentComparisonStepsComponentGenqlSelection{
    on_ComparisonBentoComponent?:ComparisonBentoComponentGenqlSelection,
    on_ComparisonStepsComponent?:ComparisonStepsComponentGenqlSelection,
    on_ComparisonTableComponent?:ComparisonTableComponentGenqlSelection,
    on_BlockDocument?: BlockDocumentGenqlSelection,
    __typename?: boolean | number
}

export interface UnionPlanLineItemComponentFeatureComponent_1HeroCustomersItemAuthorsItemHeadersItemPriceComponentTemplateAuthorsItemFeaturesItemTryLightModeComponentBlogpostTemplateComponentMiddleLinksItemPaymentModeComponentFeaturesLimitsComponentGuideStepComponentPricingPlanComponentWhimsicalEmbedComponentSnippetsItemBooleanFeatureComponentComparisonItemComponentRoadmapItemBuildTimeRedirectsItemQuoteComponentFeaturesItem_1FaqsItemFreeTextComponentLimitComponentCodeSnippetWithDifferentLanguagesComponentAsNewTabComponentCodeSnippetComponentFeatureComponentMarketingHeaderComponentDemoComponentCoverImageComponentCalloutComponentAsFloatingBannerComponentButtonComponentGuideComponentMetaComponentTextWithColorComponentChangelogTemplateComponentGenqlSelection{
    on_AsFloatingBannerComponent?:AsFloatingBannerComponentGenqlSelection,
    on_AsNewTabComponent?:AsNewTabComponentGenqlSelection,
    on_AuthorsItem?:AuthorsItemGenqlSelection,
    on_BlogpostTemplateComponent?:BlogpostTemplateComponentGenqlSelection,
    on_BooleanFeatureComponent?:BooleanFeatureComponentGenqlSelection,
    on_BuildTimeRedirectsItem?:BuildTimeRedirectsItemGenqlSelection,
    on_ButtonComponent?:ButtonComponentGenqlSelection,
    on_CalloutComponent?:CalloutComponentGenqlSelection,
    on_ChangelogTemplateComponent?:ChangelogTemplateComponentGenqlSelection,
    on_CodeSnippetComponent?:CodeSnippetComponentGenqlSelection,
    on_CodeSnippetWithDifferentLanguagesComponent?:CodeSnippetWithDifferentLanguagesComponentGenqlSelection,
    on_ComparisonItemComponent?:ComparisonItemComponentGenqlSelection,
    on_CoverImageComponent?:CoverImageComponentGenqlSelection,
    on_DemoComponent?:DemoComponentGenqlSelection,
    on_FaqsItem?:FaqsItemGenqlSelection,
    on_FeatureComponent?:FeatureComponentGenqlSelection,
    on_FeatureComponent_1?:FeatureComponent_1GenqlSelection,
    on_FeaturesItem?:FeaturesItemGenqlSelection,
    on_FeaturesItem_1?:FeaturesItem_1GenqlSelection,
    on_FeaturesLimitsComponent?:FeaturesLimitsComponentGenqlSelection,
    on_FreeTextComponent?:FreeTextComponentGenqlSelection,
    on_GuideComponent?:GuideComponentGenqlSelection,
    on_GuideStepComponent?:GuideStepComponentGenqlSelection,
    on_HeadersItem?:HeadersItemGenqlSelection,
    on_HeroCustomersItem?:HeroCustomersItemGenqlSelection,
    on_LimitComponent?:LimitComponentGenqlSelection,
    on_MarketingHeaderComponent?:MarketingHeaderComponentGenqlSelection,
    on_MetaComponent?:MetaComponentGenqlSelection,
    on_MiddleLinksItem?:MiddleLinksItemGenqlSelection,
    on_PaymentModeComponent?:PaymentModeComponentGenqlSelection,
    on_PlanLineItemComponent?:PlanLineItemComponentGenqlSelection,
    on_PriceComponent?:PriceComponentGenqlSelection,
    on_PricingPlanComponent?:PricingPlanComponentGenqlSelection,
    on_QuoteComponent?:QuoteComponentGenqlSelection,
    on_RoadmapItem?:RoadmapItemGenqlSelection,
    on_SnippetsItem?:SnippetsItemGenqlSelection,
    on_TemplateAuthorsItem?:TemplateAuthorsItemGenqlSelection,
    on_TextWithColorComponent?:TextWithColorComponentGenqlSelection,
    on_TryLightModeComponent?:TryLightModeComponentGenqlSelection,
    on_WhimsicalEmbedComponent?:WhimsicalEmbedComponentGenqlSelection,
    on_BlockDocument?: BlockDocumentGenqlSelection,
    __typename?: boolean | number
}

export interface UnionPlanNameComponentGenqlSelection{
    on_PlanNameComponent?:PlanNameComponentGenqlSelection,
    on_BlockDocument?: BlockDocumentGenqlSelection,
    __typename?: boolean | number
}

export interface UnionRepoTitleComponentRepoSchemaComponent_1GenqlSelection{
    on_RepoSchemaComponent_1?:RepoSchemaComponent_1GenqlSelection,
    on_RepoTitleComponent?:RepoTitleComponentGenqlSelection,
    on_BlockDocument?: BlockDocumentGenqlSelection,
    __typename?: boolean | number
}

export interface UnionTextWithColorComponentGenqlSelection{
    on_TextWithColorComponent?:TextWithColorComponentGenqlSelection,
    on_BlockDocument?: BlockDocumentGenqlSelection,
    __typename?: boolean | number
}

export interface UnionThreadComponentTokenComponentRepoSchemaComponentBaseHubGuidelinesAndBlockReferenceComponentGenqlSelection{
    on_BaseHubGuidelinesAndBlockReferenceComponent?:BaseHubGuidelinesAndBlockReferenceComponentGenqlSelection,
    on_RepoSchemaComponent?:RepoSchemaComponentGenqlSelection,
    on_ThreadComponent?:ThreadComponentGenqlSelection,
    on_TokenComponent?:TokenComponentGenqlSelection,
    on_BlockDocument?: BlockDocumentGenqlSelection,
    __typename?: boolean | number
}

export interface UnionTokenComponent_1RepoSchemaComponent_2GenqlSelection{
    on_RepoSchemaComponent_2?:RepoSchemaComponent_2GenqlSelection,
    on_TokenComponent_1?:TokenComponent_1GenqlSelection,
    on_BlockDocument?: BlockDocumentGenqlSelection,
    __typename?: boolean | number
}

export interface UnionTryLightModeComponentGenqlSelection{
    on_TryLightModeComponent?:TryLightModeComponentGenqlSelection,
    on_BlockDocument?: BlockDocumentGenqlSelection,
    __typename?: boolean | number
}

export interface VariantGenqlSelection{
    apiName?: boolean | number
    color?: boolean | number
    id?: boolean | number
    isDefault?: boolean | number
    label?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WhimsicalEmbedComponentGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    href?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WhimsicalEmbedComponentFilterInput {AND?: (WhimsicalEmbedComponentFilterInput | null),OR?: (WhimsicalEmbedComponentFilterInput | null),_id?: (StringFilter | null),_slug?: (StringFilter | null),_sys_apiNamePath?: (StringFilter | null),_sys_createdAt?: (DateFilter | null),_sys_hash?: (StringFilter | null),_sys_id?: (StringFilter | null),_sys_idPath?: (StringFilter | null),_sys_lastModifiedAt?: (DateFilter | null),_sys_slug?: (StringFilter | null),_sys_slugPath?: (StringFilter | null),_sys_title?: (StringFilter | null),_title?: (StringFilter | null),href?: (StringFilter | null)}

export interface _componentsGenqlSelection{
    asFloatingBanner?: (asFloatingBannerComponent_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (AsFloatingBannerComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (AsFloatingBannerComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    asNewTab?: (asNewTabComponent_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (AsNewTabComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (AsNewTabComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    authorsItem?: (authorsItem_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (AuthorsItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (AuthorsItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    baseHubGuidelinesAndBlockReference?: (baseHubGuidelinesAndBlockReferenceComponent_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (BaseHubGuidelinesAndBlockReferenceComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (BaseHubGuidelinesAndBlockReferenceComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    bentoGridItem?: (bentoGridItem_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (BentoGridItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (BentoGridItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    blogpostTemplate?: (blogpostTemplateComponent_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (BlogpostTemplateComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (BlogpostTemplateComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    booleanFeature?: (booleanFeatureComponent_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (BooleanFeatureComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (BooleanFeatureComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    buildTimeRedirectsItem?: (buildTimeRedirectsItem_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (BuildTimeRedirectsItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (BuildTimeRedirectsItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    button?: (buttonComponent_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (ButtonComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (ButtonComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    callout?: (calloutComponent_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (CalloutComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (CalloutComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    changelogTemplate?: (changelogTemplateComponent_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (ChangelogTemplateComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (ChangelogTemplateComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    codeSnippet?: (codeSnippetComponent_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (CodeSnippetComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (CodeSnippetComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    codeSnippetWithDifferentLanguages?: (codeSnippetWithDifferentLanguagesComponent_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (CodeSnippetWithDifferentLanguagesComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (CodeSnippetWithDifferentLanguagesComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    comparisonBento?: (comparisonBentoComponent_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (ComparisonBentoComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (ComparisonBentoComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    comparisonItem?: (comparisonItemComponent_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (ComparisonItemComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (ComparisonItemComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    comparisonSteps?: (comparisonStepsComponent_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (ComparisonStepsComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (ComparisonStepsComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    comparisonTable?: (comparisonTableComponent_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (ComparisonTableComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (ComparisonTableComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    comparisonsItem?: (comparisonsItem_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (ComparisonsItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (ComparisonsItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    coverImage?: (coverImageComponent_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (CoverImageComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (CoverImageComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    demo?: (demoComponent_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (DemoComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (DemoComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    emailsItem?: (emailsItem_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (EmailsItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (EmailsItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    faqsItem?: (faqsItem_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (FaqsItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (FaqsItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    feature?: (featureComponent_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (FeatureComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (FeatureComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    featureComponent1?: (featureComponent1_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (FeatureComponent_1FilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (FeatureComponent_1OrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    featured?: (featuredComponent_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (FeaturedComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (FeaturedComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    featuresAndBenefitsItem?: (featuresAndBenefitsItem_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (FeaturesAndBenefitsItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (FeaturesAndBenefitsItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    featuresItem?: (featuresItem_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (FeaturesItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (FeaturesItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    featuresItem1?: (featuresItem1_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (FeaturesItem_1FilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (FeaturesItem_1OrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    featuresItem2?: (featuresItem2_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (FeaturesItem_2FilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (FeaturesItem_2OrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    featuresLimits?: (featuresLimitsComponent_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (FeaturesLimitsComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (FeaturesLimitsComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    freeText?: (freeTextComponent_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (FreeTextComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (FreeTextComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    guide?: (guideComponent_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (GuideComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (GuideComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    guideStep?: (guideStepComponent_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (GuideStepComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (GuideStepComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    headersItem?: (headersItem_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (HeadersItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (HeadersItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    heroCustomersItem?: (heroCustomersItem_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (HeroCustomersItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (HeroCustomersItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    integrationInstructionsItem?: (integrationInstructionsItem_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (IntegrationInstructionsItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (IntegrationInstructionsItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    limit?: (limitComponent_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (LimitComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (LimitComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    marketingHeader?: (marketingHeaderComponent_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (MarketingHeaderComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (MarketingHeaderComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    meta?: (metaComponent_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (MetaComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (MetaComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    middleLinksItem?: (middleLinksItem_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (MiddleLinksItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (MiddleLinksItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    pageAnalytics?: (pageAnalyticsComponent_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (PageAnalyticsComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (PageAnalyticsComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    paymentMode?: (paymentModeComponent_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (PaymentModeComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (PaymentModeComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    planLineItem?: (planLineItemComponent_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (PlanLineItemComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (PlanLineItemComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    planName?: (planNameComponent_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (PlanNameComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (PlanNameComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    price?: (priceComponent_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (PriceComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (PriceComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    pricingPlan?: (pricingPlanComponent_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (PricingPlanComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (PricingPlanComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    quote?: (quoteComponent_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (QuoteComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (QuoteComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    repoSchema?: (repoSchemaComponent_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (RepoSchemaComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (RepoSchemaComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    repoSchemaComponent1?: (repoSchemaComponent1_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (RepoSchemaComponent_1FilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (RepoSchemaComponent_1OrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    repoSchemaComponent2?: (repoSchemaComponent2_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (RepoSchemaComponent_2FilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (RepoSchemaComponent_2OrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    repoTitle?: (repoTitleComponent_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (RepoTitleComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (RepoTitleComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    roadmapItem?: (roadmapItem_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (RoadmapItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (RoadmapItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    snippetsItem?: (snippetsItem_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (SnippetsItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (SnippetsItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    stepsItem?: (stepsItem_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (StepsItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (StepsItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    templateAuthorsItem?: (templateAuthorsItem_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (TemplateAuthorsItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (TemplateAuthorsItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    templatesItem?: (templatesItem_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (TemplatesItemFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (TemplatesItemOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    textWithColor?: (textWithColorComponent_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (TextWithColorComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (TextWithColorComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    thread?: (threadComponent_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (ThreadComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (ThreadComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    token?: (tokenComponent_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (TokenComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (TokenComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    tokenComponent1?: (tokenComponent1_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (TokenComponent_1FilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (TokenComponent_1OrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    tryLightMode?: (tryLightModeComponent_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (TryLightModeComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (TryLightModeComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    whimsicalEmbed?: (whimsicalEmbedComponent_AsListGenqlSelection & { __args?: {
    /** Filter by a field. */
    filter?: (WhimsicalEmbedComponentFilterInput | null), 
    /** Limit the number of items returned. Defaults to 500. */
    first?: (Scalars['Int'] | null), 
    /** Order by a field. */
    orderBy?: (WhimsicalEmbedComponentOrderByEnum | null), 
    /** Skip the first n items. */
    skip?: (Scalars['Int'] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface asFloatingBannerComponent_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: AsFloatingBannerComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: AsFloatingBannerComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface asNewTabComponent_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: AsNewTabComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: AsNewTabComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface authorsItem_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: AuthorsItemGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: AuthorsItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface baseHubGuidelinesAndBlockReferenceComponent_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: BaseHubGuidelinesAndBlockReferenceComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: BaseHubGuidelinesAndBlockReferenceComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface bentoGridItem_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: BentoGridItemGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: BentoGridItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface blogpostTemplateComponent_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: BlogpostTemplateComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: BlogpostTemplateComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface booleanFeatureComponent_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: BooleanFeatureComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: BooleanFeatureComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface buildTimeRedirectsItem_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: BuildTimeRedirectsItemGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: BuildTimeRedirectsItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface buttonComponent_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: ButtonComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: ButtonComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface calloutComponent_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: CalloutComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: CalloutComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface changelogTemplateComponent_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: ChangelogTemplateComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: ChangelogTemplateComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface codeSnippetComponent_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: CodeSnippetComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: CodeSnippetComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface codeSnippetWithDifferentLanguagesComponent_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: CodeSnippetWithDifferentLanguagesComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: CodeSnippetWithDifferentLanguagesComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface comparisonBentoComponent_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: ComparisonBentoComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: ComparisonBentoComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface comparisonItemComponent_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: ComparisonItemComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: ComparisonItemComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface comparisonStepsComponent_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: ComparisonStepsComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: ComparisonStepsComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface comparisonTableComponent_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: ComparisonTableComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: ComparisonTableComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface comparisonsItem_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: ComparisonsItemGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: ComparisonsItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface coverImageComponent_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: CoverImageComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: CoverImageComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface demoComponent_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: DemoComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: DemoComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface emailsItem_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: EmailsItemGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: EmailsItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface faqsItem_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: FaqsItemGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: FaqsItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface featureComponent1_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: FeatureComponent_1GenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: FeatureComponent_1GenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface featureComponent_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: FeatureComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: FeatureComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface featuredComponent_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: FeaturedComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: FeaturedComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface featuresAndBenefitsItem_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: FeaturesAndBenefitsItemGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: FeaturesAndBenefitsItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface featuresItem1_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: FeaturesItem_1GenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: FeaturesItem_1GenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface featuresItem2_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: FeaturesItem_2GenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: FeaturesItem_2GenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface featuresItem_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: FeaturesItemGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: FeaturesItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface featuresLimitsComponent_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: FeaturesLimitsComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: FeaturesLimitsComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface freeTextComponent_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: FreeTextComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: FreeTextComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface guideComponent_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: GuideComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: GuideComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface guideStepComponent_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: GuideStepComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: GuideStepComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface headersItem_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: HeadersItemGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: HeadersItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface heroCustomersItem_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: HeroCustomersItemGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: HeroCustomersItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface integrationInstructionsItem_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: IntegrationInstructionsItemGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: IntegrationInstructionsItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface limitComponent_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: LimitComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: LimitComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface marketingHeaderComponent_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: MarketingHeaderComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: MarketingHeaderComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface metaComponent_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: MetaComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: MetaComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface middleLinksItem_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: MiddleLinksItemGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: MiddleLinksItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface pageAnalyticsComponent_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: PageAnalyticsComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: PageAnalyticsComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface paymentModeComponent_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: PaymentModeComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: PaymentModeComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface planLineItemComponent_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: PlanLineItemComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: PlanLineItemComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface planNameComponent_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: PlanNameComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: PlanNameComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface priceComponent_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: PriceComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: PriceComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface pricingPlanComponent_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: PricingPlanComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: PricingPlanComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface quoteComponent_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: QuoteComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: QuoteComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface repoSchemaComponent1_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: RepoSchemaComponent_1GenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: RepoSchemaComponent_1GenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface repoSchemaComponent2_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: RepoSchemaComponent_2GenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: RepoSchemaComponent_2GenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface repoSchemaComponent_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: RepoSchemaComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: RepoSchemaComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface repoTitleComponent_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: RepoTitleComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: RepoTitleComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface roadmapItem_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: RoadmapItemGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: RoadmapItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface snippetsItem_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: SnippetsItemGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: SnippetsItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface stepsItem_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: StepsItemGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: StepsItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface templateAuthorsItem_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: TemplateAuthorsItemGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: TemplateAuthorsItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface templatesItem_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: TemplatesItemGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: TemplatesItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface textWithColorComponent_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: TextWithColorComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: TextWithColorComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface threadComponent_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: ThreadComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: ThreadComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface tokenComponent1_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: TokenComponent_1GenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: TokenComponent_1GenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface tokenComponent_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: TokenComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: TokenComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface tryLightModeComponent_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: TryLightModeComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: TryLightModeComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface whimsicalEmbedComponent_AsListGenqlSelection{
    _analyticsKey?: { __args: {
    /**
     * The scope of the analytics key. Use `send` for just ingesting data. Use `query` if you need to show an analytics data in your website.
     * 
     * Have in mind, if you expose your `query` analytics key in the frontend, you'll be exposing all of this block's analytics data to the public. This is generally safe, but it might not be in your case.
     */
    scope?: (AnalyticsKeyScope | null)} } | boolean | number
    _dashboardUrl?: boolean | number
    _id?: boolean | number
    _idPath?: boolean | number
    _meta?: ListMetaGenqlSelection
    /** The key used to search from the frontend. */
    _searchKey?: boolean | number
    _slug?: boolean | number
    _slugPath?: boolean | number
    _sys?: BlockDocumentSysGenqlSelection
    _title?: boolean | number
    /** Returns the first item in the list, or null if the list is empty. Useful when you expect only one result. */
    item?: WhimsicalEmbedComponentGenqlSelection
    /** Returns the list of items after filtering and paginating according to the arguments sent by the client. */
    items?: WhimsicalEmbedComponentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FragmentsMap {
  AboutBasehub: {
    root: AboutBasehub,
    selection: AboutBasehubGenqlSelection,
}
  AboutBasehubRichText: {
    root: AboutBasehubRichText,
    selection: AboutBasehubRichTextGenqlSelection,
}
  Analytics: {
    root: Analytics,
    selection: AnalyticsGenqlSelection,
}
  AnnouncementBanner: {
    root: AnnouncementBanner,
    selection: AnnouncementBannerGenqlSelection,
}
  AsFloatingBannerComponent: {
    root: AsFloatingBannerComponent,
    selection: AsFloatingBannerComponentGenqlSelection,
}
  AsNewTabComponent: {
    root: AsNewTabComponent,
    selection: AsNewTabComponentGenqlSelection,
}
  Authors: {
    root: Authors,
    selection: AuthorsGenqlSelection,
}
  AuthorsItem: {
    root: AuthorsItem,
    selection: AuthorsItemGenqlSelection,
}
  BaseHubAgents: {
    root: BaseHubAgents,
    selection: BaseHubAgentsGenqlSelection,
}
  BaseHubGuidelinesAndBlockReferenceComponent: {
    root: BaseHubGuidelinesAndBlockReferenceComponent,
    selection: BaseHubGuidelinesAndBlockReferenceComponentGenqlSelection,
}
  BaseRichTextJson: {
    root: BaseRichTextJson,
    selection: BaseRichTextJsonGenqlSelection,
}
  BasehubVs: {
    root: BasehubVs,
    selection: BasehubVsGenqlSelection,
}
  BaselineFeatures: {
    root: BaselineFeatures,
    selection: BaselineFeaturesGenqlSelection,
}
  Bento: {
    root: Bento,
    selection: BentoGenqlSelection,
}
  BentoGrid: {
    root: BentoGrid,
    selection: BentoGridGenqlSelection,
}
  BentoGridItem: {
    root: BentoGridItem,
    selection: BentoGridItemGenqlSelection,
}
  BlockAudio: {
    root: BlockAudio,
    selection: BlockAudioGenqlSelection,
}
  BlockCodeSnippet: {
    root: BlockCodeSnippet,
    selection: BlockCodeSnippetGenqlSelection,
}
  BlockColor: {
    root: BlockColor,
    selection: BlockColorGenqlSelection,
}
  BlockDocument: {
    root: BlockDocument,
    selection: BlockDocumentGenqlSelection,
}
  BlockDocumentSys: {
    root: BlockDocumentSys,
    selection: BlockDocumentSysGenqlSelection,
}
  BlockFile: {
    root: BlockFile,
    selection: BlockFileGenqlSelection,
}
  BlockImage: {
    root: BlockImage,
    selection: BlockImageGenqlSelection,
}
  BlockList: {
    root: BlockList,
    selection: BlockListGenqlSelection,
}
  BlockOgImage: {
    root: BlockOgImage,
    selection: BlockOgImageGenqlSelection,
}
  BlockRichText: {
    root: BlockRichText,
    selection: BlockRichTextGenqlSelection,
}
  BlockVideo: {
    root: BlockVideo,
    selection: BlockVideoGenqlSelection,
}
  Blog: {
    root: Blog,
    selection: BlogGenqlSelection,
}
  BlogpostTemplateComponent: {
    root: BlogpostTemplateComponent,
    selection: BlogpostTemplateComponentGenqlSelection,
}
  Body: {
    root: Body,
    selection: BodyGenqlSelection,
}
  BodyRichText: {
    root: BodyRichText,
    selection: BodyRichTextGenqlSelection,
}
  Body_1: {
    root: Body_1,
    selection: Body_1GenqlSelection,
}
  Body_2: {
    root: Body_2,
    selection: Body_2GenqlSelection,
}
  Body_2RichText: {
    root: Body_2RichText,
    selection: Body_2RichTextGenqlSelection,
}
  BooleanFeatureComponent: {
    root: BooleanFeatureComponent,
    selection: BooleanFeatureComponentGenqlSelection,
}
  BuildTimeRedirects: {
    root: BuildTimeRedirects,
    selection: BuildTimeRedirectsGenqlSelection,
}
  BuildTimeRedirectsItem: {
    root: BuildTimeRedirectsItem,
    selection: BuildTimeRedirectsItemGenqlSelection,
}
  ButtonComponent: {
    root: ButtonComponent,
    selection: ButtonComponentGenqlSelection,
}
  Calculator: {
    root: Calculator,
    selection: CalculatorGenqlSelection,
}
  CalloutComponent: {
    root: CalloutComponent,
    selection: CalloutComponentGenqlSelection,
}
  CardTag: {
    root: CardTag,
    selection: CardTagGenqlSelection,
}
  CardTagRichText: {
    root: CardTagRichText,
    selection: CardTagRichTextGenqlSelection,
}
  Changelog: {
    root: Changelog,
    selection: ChangelogGenqlSelection,
}
  ChangelogFloatingBannerHighlightComps: {
    root: ChangelogFloatingBannerHighlightComps,
    selection: ChangelogFloatingBannerHighlightCompsGenqlSelection,
}
  ChangelogTemplateComponent: {
    root: ChangelogTemplateComponent,
    selection: ChangelogTemplateComponentGenqlSelection,
}
  CodeSnippetComponent: {
    root: CodeSnippetComponent,
    selection: CodeSnippetComponentGenqlSelection,
}
  CodeSnippetWithDifferentLanguagesComponent: {
    root: CodeSnippetWithDifferentLanguagesComponent,
    selection: CodeSnippetWithDifferentLanguagesComponentGenqlSelection,
}
  Collections: {
    root: Collections,
    selection: CollectionsGenqlSelection,
}
  ComparisonBentoComponent: {
    root: ComparisonBentoComponent,
    selection: ComparisonBentoComponentGenqlSelection,
}
  ComparisonItemComponent: {
    root: ComparisonItemComponent,
    selection: ComparisonItemComponentGenqlSelection,
}
  ComparisonStepsComponent: {
    root: ComparisonStepsComponent,
    selection: ComparisonStepsComponentGenqlSelection,
}
  ComparisonTableComponent: {
    root: ComparisonTableComponent,
    selection: ComparisonTableComponentGenqlSelection,
}
  Comparisons: {
    root: Comparisons,
    selection: ComparisonsGenqlSelection,
}
  ComparisonsItem: {
    root: ComparisonsItem,
    selection: ComparisonsItemGenqlSelection,
}
  Components: {
    root: Components,
    selection: ComponentsGenqlSelection,
}
  Content: {
    root: Content,
    selection: ContentGenqlSelection,
}
  ContentRichText: {
    root: ContentRichText,
    selection: ContentRichTextGenqlSelection,
}
  Content_1: {
    root: Content_1,
    selection: Content_1GenqlSelection,
}
  Content_10: {
    root: Content_10,
    selection: Content_10GenqlSelection,
}
  Content_10RichText: {
    root: Content_10RichText,
    selection: Content_10RichTextGenqlSelection,
}
  Content_1RichText: {
    root: Content_1RichText,
    selection: Content_1RichTextGenqlSelection,
}
  Content_2: {
    root: Content_2,
    selection: Content_2GenqlSelection,
}
  Content_2RichText: {
    root: Content_2RichText,
    selection: Content_2RichTextGenqlSelection,
}
  Content_3: {
    root: Content_3,
    selection: Content_3GenqlSelection,
}
  Content_3RichText: {
    root: Content_3RichText,
    selection: Content_3RichTextGenqlSelection,
}
  Content_4: {
    root: Content_4,
    selection: Content_4GenqlSelection,
}
  Content_4RichText: {
    root: Content_4RichText,
    selection: Content_4RichTextGenqlSelection,
}
  Content_5: {
    root: Content_5,
    selection: Content_5GenqlSelection,
}
  Content_5RichText: {
    root: Content_5RichText,
    selection: Content_5RichTextGenqlSelection,
}
  Content_6: {
    root: Content_6,
    selection: Content_6GenqlSelection,
}
  Content_6RichText: {
    root: Content_6RichText,
    selection: Content_6RichTextGenqlSelection,
}
  Content_7: {
    root: Content_7,
    selection: Content_7GenqlSelection,
}
  Content_7RichText: {
    root: Content_7RichText,
    selection: Content_7RichTextGenqlSelection,
}
  Content_8: {
    root: Content_8,
    selection: Content_8GenqlSelection,
}
  Content_8RichText: {
    root: Content_8RichText,
    selection: Content_8RichTextGenqlSelection,
}
  Content_9: {
    root: Content_9,
    selection: Content_9GenqlSelection,
}
  Content_9RichText: {
    root: Content_9RichText,
    selection: Content_9RichTextGenqlSelection,
}
  ContextForLlm: {
    root: ContextForLlm,
    selection: ContextForLlmGenqlSelection,
}
  ContextForLlmRichText: {
    root: ContextForLlmRichText,
    selection: ContextForLlmRichTextGenqlSelection,
}
  Copy: {
    root: Copy,
    selection: CopyGenqlSelection,
}
  CoverImageComponent: {
    root: CoverImageComponent,
    selection: CoverImageComponentGenqlSelection,
}
  CrashNotifications: {
    root: CrashNotifications,
    selection: CrashNotificationsGenqlSelection,
}
  CrashReports: {
    root: CrashReports,
    selection: CrashReportsGenqlSelection,
}
  DemoComponent: {
    root: DemoComponent,
    selection: DemoComponentGenqlSelection,
}
  Demos: {
    root: Demos,
    selection: DemosGenqlSelection,
}
  Description: {
    root: Description,
    selection: DescriptionGenqlSelection,
}
  DescriptionRichText: {
    root: DescriptionRichText,
    selection: DescriptionRichTextGenqlSelection,
}
  Description_1: {
    root: Description_1,
    selection: Description_1GenqlSelection,
}
  Description_1RichText: {
    root: Description_1RichText,
    selection: Description_1RichTextGenqlSelection,
}
  Emails: {
    root: Emails,
    selection: EmailsGenqlSelection,
}
  EmailsItem: {
    root: EmailsItem,
    selection: EmailsItemGenqlSelection,
}
  EnterprisePlan: {
    root: EnterprisePlan,
    selection: EnterprisePlanGenqlSelection,
}
  Entries: {
    root: Entries,
    selection: EntriesGenqlSelection,
}
  Faq: {
    root: Faq,
    selection: FaqGenqlSelection,
}
  Faqs: {
    root: Faqs,
    selection: FaqsGenqlSelection,
}
  FaqsItem: {
    root: FaqsItem,
    selection: FaqsItemGenqlSelection,
}
  FeatureComponent: {
    root: FeatureComponent,
    selection: FeatureComponentGenqlSelection,
}
  FeatureComponent_1: {
    root: FeatureComponent_1,
    selection: FeatureComponent_1GenqlSelection,
}
  FeaturedComponent: {
    root: FeaturedComponent,
    selection: FeaturedComponentGenqlSelection,
}
  Features: {
    root: Features,
    selection: FeaturesGenqlSelection,
}
  FeaturesAndBenefits: {
    root: FeaturesAndBenefits,
    selection: FeaturesAndBenefitsGenqlSelection,
}
  FeaturesAndBenefitsItem: {
    root: FeaturesAndBenefitsItem,
    selection: FeaturesAndBenefitsItemGenqlSelection,
}
  FeaturesItem: {
    root: FeaturesItem,
    selection: FeaturesItemGenqlSelection,
}
  FeaturesItem_1: {
    root: FeaturesItem_1,
    selection: FeaturesItem_1GenqlSelection,
}
  FeaturesItem_2: {
    root: FeaturesItem_2,
    selection: FeaturesItem_2GenqlSelection,
}
  FeaturesLimitsComponent: {
    root: FeaturesLimitsComponent,
    selection: FeaturesLimitsComponentGenqlSelection,
}
  Features_1: {
    root: Features_1,
    selection: Features_1GenqlSelection,
}
  Features_2: {
    root: Features_2,
    selection: Features_2GenqlSelection,
}
  Features_3: {
    root: Features_3,
    selection: Features_3GenqlSelection,
}
  Feedback: {
    root: Feedback,
    selection: FeedbackGenqlSelection,
}
  Form: {
    root: Form,
    selection: FormGenqlSelection,
}
  Form_1: {
    root: Form_1,
    selection: Form_1GenqlSelection,
}
  FreeTextComponent: {
    root: FreeTextComponent,
    selection: FreeTextComponentGenqlSelection,
}
  FrozenApis: {
    root: FrozenApis,
    selection: FrozenApisGenqlSelection,
}
  FrozenApisNoti: {
    root: FrozenApisNoti,
    selection: FrozenApisNotiGenqlSelection,
}
  GeneralEvents: {
    root: GeneralEvents,
    selection: GeneralEventsGenqlSelection,
}
  GetUploadSignedURL: {
    root: GetUploadSignedURL,
    selection: GetUploadSignedURLGenqlSelection,
}
  GuideComponent: {
    root: GuideComponent,
    selection: GuideComponentGenqlSelection,
}
  GuideStepComponent: {
    root: GuideStepComponent,
    selection: GuideStepComponentGenqlSelection,
}
  Header: {
    root: Header,
    selection: HeaderGenqlSelection,
}
  Headers: {
    root: Headers,
    selection: HeadersGenqlSelection,
}
  HeadersItem: {
    root: HeadersItem,
    selection: HeadersItemGenqlSelection,
}
  HeroCustomers: {
    root: HeroCustomers,
    selection: HeroCustomersGenqlSelection,
}
  HeroCustomersItem: {
    root: HeroCustomersItem,
    selection: HeroCustomersItemGenqlSelection,
}
  HeroSubtitle: {
    root: HeroSubtitle,
    selection: HeroSubtitleGenqlSelection,
}
  HeroSubtitleRichText: {
    root: HeroSubtitleRichText,
    selection: HeroSubtitleRichTextGenqlSelection,
}
  HeroTitle: {
    root: HeroTitle,
    selection: HeroTitleGenqlSelection,
}
  HeroTitleRichText: {
    root: HeroTitleRichText,
    selection: HeroTitleRichTextGenqlSelection,
}
  Homepage: {
    root: Homepage,
    selection: HomepageGenqlSelection,
}
  Icons: {
    root: Icons,
    selection: IconsGenqlSelection,
}
  InEditorTimelineGuides: {
    root: InEditorTimelineGuides,
    selection: InEditorTimelineGuidesGenqlSelection,
}
  IntegrationInstructions: {
    root: IntegrationInstructions,
    selection: IntegrationInstructionsGenqlSelection,
}
  IntegrationInstructionsItem: {
    root: IntegrationInstructionsItem,
    selection: IntegrationInstructionsItemGenqlSelection,
}
  Invitation: {
    root: Invitation,
    selection: InvitationGenqlSelection,
}
  InvitationRichText: {
    root: InvitationRichText,
    selection: InvitationRichTextGenqlSelection,
}
  Label: {
    root: Label,
    selection: LabelGenqlSelection,
}
  LabelRichText: {
    root: LabelRichText,
    selection: LabelRichTextGenqlSelection,
}
  LegalStuff: {
    root: LegalStuff,
    selection: LegalStuffGenqlSelection,
}
  LimitComponent: {
    root: LimitComponent,
    selection: LimitComponentGenqlSelection,
}
  LineItems: {
    root: LineItems,
    selection: LineItemsGenqlSelection,
}
  LineItems_1: {
    root: LineItems_1,
    selection: LineItems_1GenqlSelection,
}
  ListMeta: {
    root: ListMeta,
    selection: ListMetaGenqlSelection,
}
  Manifesto: {
    root: Manifesto,
    selection: ManifestoGenqlSelection,
}
  Manifesto_1: {
    root: Manifesto_1,
    selection: Manifesto_1GenqlSelection,
}
  MarketingHeaderComponent: {
    root: MarketingHeaderComponent,
    selection: MarketingHeaderComponentGenqlSelection,
}
  MediaBlock: {
    root: MediaBlock,
    selection: MediaBlockGenqlSelection,
}
  MetaComponent: {
    root: MetaComponent,
    selection: MetaComponentGenqlSelection,
}
  MiddleLinks: {
    root: MiddleLinks,
    selection: MiddleLinksGenqlSelection,
}
  MiddleLinksItem: {
    root: MiddleLinksItem,
    selection: MiddleLinksItemGenqlSelection,
}
  MiscAppEvents: {
    root: MiscAppEvents,
    selection: MiscAppEventsGenqlSelection,
}
  Miscellaneous: {
    root: Miscellaneous,
    selection: MiscellaneousGenqlSelection,
}
  Mutation: {
    root: Mutation,
    selection: MutationGenqlSelection,
}
  Narration: {
    root: Narration,
    selection: NarrationGenqlSelection,
}
  NewSub: {
    root: NewSub,
    selection: NewSubGenqlSelection,
}
  Newsletter: {
    root: Newsletter,
    selection: NewsletterGenqlSelection,
}
  Note: {
    root: Note,
    selection: NoteGenqlSelection,
}
  NoteRichText: {
    root: NoteRichText,
    selection: NoteRichTextGenqlSelection,
}
  Onboarding: {
    root: Onboarding,
    selection: OnboardingGenqlSelection,
}
  PageAnalyticsComponent: {
    root: PageAnalyticsComponent,
    selection: PageAnalyticsComponentGenqlSelection,
}
  PageViews: {
    root: PageViews,
    selection: PageViewsGenqlSelection,
}
  PaymentModeComponent: {
    root: PaymentModeComponent,
    selection: PaymentModeComponentGenqlSelection,
}
  PaymentSwitch: {
    root: PaymentSwitch,
    selection: PaymentSwitchGenqlSelection,
}
  PlanLineItemComponent: {
    root: PlanLineItemComponent,
    selection: PlanLineItemComponentGenqlSelection,
}
  PlanNameComponent: {
    root: PlanNameComponent,
    selection: PlanNameComponentGenqlSelection,
}
  Plans: {
    root: Plans,
    selection: PlansGenqlSelection,
}
  PlansComparisonTable: {
    root: PlansComparisonTable,
    selection: PlansComparisonTableGenqlSelection,
}
  Posts: {
    root: Posts,
    selection: PostsGenqlSelection,
}
  PriceComponent: {
    root: PriceComponent,
    selection: PriceComponentGenqlSelection,
}
  Pricing: {
    root: Pricing,
    selection: PricingGenqlSelection,
}
  PricingBanner: {
    root: PricingBanner,
    selection: PricingBannerGenqlSelection,
}
  PricingPlanComponent: {
    root: PricingPlanComponent,
    selection: PricingPlanComponentGenqlSelection,
}
  Privacy: {
    root: Privacy,
    selection: PrivacyGenqlSelection,
}
  PromptV11: {
    root: PromptV11,
    selection: PromptV11GenqlSelection,
}
  PromptV11RichText: {
    root: PromptV11RichText,
    selection: PromptV11RichTextGenqlSelection,
}
  Prompts: {
    root: Prompts,
    selection: PromptsGenqlSelection,
}
  Pros: {
    root: Pros,
    selection: ProsGenqlSelection,
}
  ProsRichText: {
    root: ProsRichText,
    selection: ProsRichTextGenqlSelection,
}
  Query: {
    root: Query,
    selection: QueryGenqlSelection,
}
  Quote: {
    root: Quote,
    selection: QuoteGenqlSelection,
}
  QuoteComponent: {
    root: QuoteComponent,
    selection: QuoteComponentGenqlSelection,
}
  QuoteRichText: {
    root: QuoteRichText,
    selection: QuoteRichTextGenqlSelection,
}
  RepoLlmsTxt: {
    root: RepoLlmsTxt,
    selection: RepoLlmsTxtGenqlSelection,
}
  RepoLlmsTxtRichText: {
    root: RepoLlmsTxtRichText,
    selection: RepoLlmsTxtRichTextGenqlSelection,
}
  RepoSchemaComponent: {
    root: RepoSchemaComponent,
    selection: RepoSchemaComponentGenqlSelection,
}
  RepoSchemaComponent_1: {
    root: RepoSchemaComponent_1,
    selection: RepoSchemaComponent_1GenqlSelection,
}
  RepoSchemaComponent_2: {
    root: RepoSchemaComponent_2,
    selection: RepoSchemaComponent_2GenqlSelection,
}
  RepoSys: {
    root: RepoSys,
    selection: RepoSysGenqlSelection,
}
  RepoTitleComponent: {
    root: RepoTitleComponent,
    selection: RepoTitleComponentGenqlSelection,
}
  RichTextJson: {
    root: RichTextJson,
    selection: RichTextJsonGenqlSelection,
}
  Roadmap: {
    root: Roadmap,
    selection: RoadmapGenqlSelection,
}
  RoadmapItem: {
    root: RoadmapItem,
    selection: RoadmapItemGenqlSelection,
}
  Roadmap_1: {
    root: Roadmap_1,
    selection: Roadmap_1GenqlSelection,
}
  Script: {
    root: Script,
    selection: ScriptGenqlSelection,
}
  ScriptRichText: {
    root: ScriptRichText,
    selection: ScriptRichTextGenqlSelection,
}
  Sections: {
    root: Sections,
    selection: SectionsGenqlSelection,
}
  Send: {
    root: Send,
    selection: SendGenqlSelection,
}
  SendToDiscord: {
    root: SendToDiscord,
    selection: SendToDiscordGenqlSelection,
}
  Shoutouts: {
    root: Shoutouts,
    selection: ShoutoutsGenqlSelection,
}
  Snippets: {
    root: Snippets,
    selection: SnippetsGenqlSelection,
}
  SnippetsItem: {
    root: SnippetsItem,
    selection: SnippetsItemGenqlSelection,
}
  Steps: {
    root: Steps,
    selection: StepsGenqlSelection,
}
  StepsItem: {
    root: StepsItem,
    selection: StepsItemGenqlSelection,
}
  Steps_1: {
    root: Steps_1,
    selection: Steps_1GenqlSelection,
}
  Subtitle: {
    root: Subtitle,
    selection: SubtitleGenqlSelection,
}
  SubtitleRichText: {
    root: SubtitleRichText,
    selection: SubtitleRichTextGenqlSelection,
}
  Subtitle_1: {
    root: Subtitle_1,
    selection: Subtitle_1GenqlSelection,
}
  Subtitle_1RichText: {
    root: Subtitle_1RichText,
    selection: Subtitle_1RichTextGenqlSelection,
}
  Subtitle_2: {
    root: Subtitle_2,
    selection: Subtitle_2GenqlSelection,
}
  Subtitle_2RichText: {
    root: Subtitle_2RichText,
    selection: Subtitle_2RichTextGenqlSelection,
}
  Subtitle_3: {
    root: Subtitle_3,
    selection: Subtitle_3GenqlSelection,
}
  Subtitle_3RichText: {
    root: Subtitle_3RichText,
    selection: Subtitle_3RichTextGenqlSelection,
}
  Subtitle_4: {
    root: Subtitle_4,
    selection: Subtitle_4GenqlSelection,
}
  Subtitle_4RichText: {
    root: Subtitle_4RichText,
    selection: Subtitle_4RichTextGenqlSelection,
}
  Subtitle_5: {
    root: Subtitle_5,
    selection: Subtitle_5GenqlSelection,
}
  Subtitle_5RichText: {
    root: Subtitle_5RichText,
    selection: Subtitle_5RichTextGenqlSelection,
}
  SwitchLabel: {
    root: SwitchLabel,
    selection: SwitchLabelGenqlSelection,
}
  SwitchLabelRichText: {
    root: SwitchLabelRichText,
    selection: SwitchLabelRichTextGenqlSelection,
}
  TemplateAuthors: {
    root: TemplateAuthors,
    selection: TemplateAuthorsGenqlSelection,
}
  TemplateAuthorsItem: {
    root: TemplateAuthorsItem,
    selection: TemplateAuthorsItemGenqlSelection,
}
  Templates: {
    root: Templates,
    selection: TemplatesGenqlSelection,
}
  TemplatesItem: {
    root: TemplatesItem,
    selection: TemplatesItemGenqlSelection,
}
  Templates_1: {
    root: Templates_1,
    selection: Templates_1GenqlSelection,
}
  Terms: {
    root: Terms,
    selection: TermsGenqlSelection,
}
  Testimonials: {
    root: Testimonials,
    selection: TestimonialsGenqlSelection,
}
  TextWithColorComponent: {
    root: TextWithColorComponent,
    selection: TextWithColorComponentGenqlSelection,
}
  ThreadComponent: {
    root: ThreadComponent,
    selection: ThreadComponentGenqlSelection,
}
  Title: {
    root: Title,
    selection: TitleGenqlSelection,
}
  TitleRichText: {
    root: TitleRichText,
    selection: TitleRichTextGenqlSelection,
}
  Title_1: {
    root: Title_1,
    selection: Title_1GenqlSelection,
}
  Title_1RichText: {
    root: Title_1RichText,
    selection: Title_1RichTextGenqlSelection,
}
  TokenComponent: {
    root: TokenComponent,
    selection: TokenComponentGenqlSelection,
}
  TokenComponent_1: {
    root: TokenComponent_1,
    selection: TokenComponent_1GenqlSelection,
}
  TransactionStatus: {
    root: TransactionStatus,
    selection: TransactionStatusGenqlSelection,
}
  TryLightModeComponent: {
    root: TryLightModeComponent,
    selection: TryLightModeComponentGenqlSelection,
}
  Variant: {
    root: Variant,
    selection: VariantGenqlSelection,
}
  WhimsicalEmbedComponent: {
    root: WhimsicalEmbedComponent,
    selection: WhimsicalEmbedComponentGenqlSelection,
}
  _components: {
    root: _components,
    selection: _componentsGenqlSelection,
}
  asFloatingBannerComponent_AsList: {
    root: asFloatingBannerComponent_AsList,
    selection: asFloatingBannerComponent_AsListGenqlSelection,
}
  asNewTabComponent_AsList: {
    root: asNewTabComponent_AsList,
    selection: asNewTabComponent_AsListGenqlSelection,
}
  authorsItem_AsList: {
    root: authorsItem_AsList,
    selection: authorsItem_AsListGenqlSelection,
}
  baseHubGuidelinesAndBlockReferenceComponent_AsList: {
    root: baseHubGuidelinesAndBlockReferenceComponent_AsList,
    selection: baseHubGuidelinesAndBlockReferenceComponent_AsListGenqlSelection,
}
  bentoGridItem_AsList: {
    root: bentoGridItem_AsList,
    selection: bentoGridItem_AsListGenqlSelection,
}
  blogpostTemplateComponent_AsList: {
    root: blogpostTemplateComponent_AsList,
    selection: blogpostTemplateComponent_AsListGenqlSelection,
}
  booleanFeatureComponent_AsList: {
    root: booleanFeatureComponent_AsList,
    selection: booleanFeatureComponent_AsListGenqlSelection,
}
  buildTimeRedirectsItem_AsList: {
    root: buildTimeRedirectsItem_AsList,
    selection: buildTimeRedirectsItem_AsListGenqlSelection,
}
  buttonComponent_AsList: {
    root: buttonComponent_AsList,
    selection: buttonComponent_AsListGenqlSelection,
}
  calloutComponent_AsList: {
    root: calloutComponent_AsList,
    selection: calloutComponent_AsListGenqlSelection,
}
  changelogTemplateComponent_AsList: {
    root: changelogTemplateComponent_AsList,
    selection: changelogTemplateComponent_AsListGenqlSelection,
}
  codeSnippetComponent_AsList: {
    root: codeSnippetComponent_AsList,
    selection: codeSnippetComponent_AsListGenqlSelection,
}
  codeSnippetWithDifferentLanguagesComponent_AsList: {
    root: codeSnippetWithDifferentLanguagesComponent_AsList,
    selection: codeSnippetWithDifferentLanguagesComponent_AsListGenqlSelection,
}
  comparisonBentoComponent_AsList: {
    root: comparisonBentoComponent_AsList,
    selection: comparisonBentoComponent_AsListGenqlSelection,
}
  comparisonItemComponent_AsList: {
    root: comparisonItemComponent_AsList,
    selection: comparisonItemComponent_AsListGenqlSelection,
}
  comparisonStepsComponent_AsList: {
    root: comparisonStepsComponent_AsList,
    selection: comparisonStepsComponent_AsListGenqlSelection,
}
  comparisonTableComponent_AsList: {
    root: comparisonTableComponent_AsList,
    selection: comparisonTableComponent_AsListGenqlSelection,
}
  comparisonsItem_AsList: {
    root: comparisonsItem_AsList,
    selection: comparisonsItem_AsListGenqlSelection,
}
  coverImageComponent_AsList: {
    root: coverImageComponent_AsList,
    selection: coverImageComponent_AsListGenqlSelection,
}
  demoComponent_AsList: {
    root: demoComponent_AsList,
    selection: demoComponent_AsListGenqlSelection,
}
  emailsItem_AsList: {
    root: emailsItem_AsList,
    selection: emailsItem_AsListGenqlSelection,
}
  faqsItem_AsList: {
    root: faqsItem_AsList,
    selection: faqsItem_AsListGenqlSelection,
}
  featureComponent1_AsList: {
    root: featureComponent1_AsList,
    selection: featureComponent1_AsListGenqlSelection,
}
  featureComponent_AsList: {
    root: featureComponent_AsList,
    selection: featureComponent_AsListGenqlSelection,
}
  featuredComponent_AsList: {
    root: featuredComponent_AsList,
    selection: featuredComponent_AsListGenqlSelection,
}
  featuresAndBenefitsItem_AsList: {
    root: featuresAndBenefitsItem_AsList,
    selection: featuresAndBenefitsItem_AsListGenqlSelection,
}
  featuresItem1_AsList: {
    root: featuresItem1_AsList,
    selection: featuresItem1_AsListGenqlSelection,
}
  featuresItem2_AsList: {
    root: featuresItem2_AsList,
    selection: featuresItem2_AsListGenqlSelection,
}
  featuresItem_AsList: {
    root: featuresItem_AsList,
    selection: featuresItem_AsListGenqlSelection,
}
  featuresLimitsComponent_AsList: {
    root: featuresLimitsComponent_AsList,
    selection: featuresLimitsComponent_AsListGenqlSelection,
}
  freeTextComponent_AsList: {
    root: freeTextComponent_AsList,
    selection: freeTextComponent_AsListGenqlSelection,
}
  guideComponent_AsList: {
    root: guideComponent_AsList,
    selection: guideComponent_AsListGenqlSelection,
}
  guideStepComponent_AsList: {
    root: guideStepComponent_AsList,
    selection: guideStepComponent_AsListGenqlSelection,
}
  headersItem_AsList: {
    root: headersItem_AsList,
    selection: headersItem_AsListGenqlSelection,
}
  heroCustomersItem_AsList: {
    root: heroCustomersItem_AsList,
    selection: heroCustomersItem_AsListGenqlSelection,
}
  integrationInstructionsItem_AsList: {
    root: integrationInstructionsItem_AsList,
    selection: integrationInstructionsItem_AsListGenqlSelection,
}
  limitComponent_AsList: {
    root: limitComponent_AsList,
    selection: limitComponent_AsListGenqlSelection,
}
  marketingHeaderComponent_AsList: {
    root: marketingHeaderComponent_AsList,
    selection: marketingHeaderComponent_AsListGenqlSelection,
}
  metaComponent_AsList: {
    root: metaComponent_AsList,
    selection: metaComponent_AsListGenqlSelection,
}
  middleLinksItem_AsList: {
    root: middleLinksItem_AsList,
    selection: middleLinksItem_AsListGenqlSelection,
}
  pageAnalyticsComponent_AsList: {
    root: pageAnalyticsComponent_AsList,
    selection: pageAnalyticsComponent_AsListGenqlSelection,
}
  paymentModeComponent_AsList: {
    root: paymentModeComponent_AsList,
    selection: paymentModeComponent_AsListGenqlSelection,
}
  planLineItemComponent_AsList: {
    root: planLineItemComponent_AsList,
    selection: planLineItemComponent_AsListGenqlSelection,
}
  planNameComponent_AsList: {
    root: planNameComponent_AsList,
    selection: planNameComponent_AsListGenqlSelection,
}
  priceComponent_AsList: {
    root: priceComponent_AsList,
    selection: priceComponent_AsListGenqlSelection,
}
  pricingPlanComponent_AsList: {
    root: pricingPlanComponent_AsList,
    selection: pricingPlanComponent_AsListGenqlSelection,
}
  quoteComponent_AsList: {
    root: quoteComponent_AsList,
    selection: quoteComponent_AsListGenqlSelection,
}
  repoSchemaComponent1_AsList: {
    root: repoSchemaComponent1_AsList,
    selection: repoSchemaComponent1_AsListGenqlSelection,
}
  repoSchemaComponent2_AsList: {
    root: repoSchemaComponent2_AsList,
    selection: repoSchemaComponent2_AsListGenqlSelection,
}
  repoSchemaComponent_AsList: {
    root: repoSchemaComponent_AsList,
    selection: repoSchemaComponent_AsListGenqlSelection,
}
  repoTitleComponent_AsList: {
    root: repoTitleComponent_AsList,
    selection: repoTitleComponent_AsListGenqlSelection,
}
  roadmapItem_AsList: {
    root: roadmapItem_AsList,
    selection: roadmapItem_AsListGenqlSelection,
}
  snippetsItem_AsList: {
    root: snippetsItem_AsList,
    selection: snippetsItem_AsListGenqlSelection,
}
  stepsItem_AsList: {
    root: stepsItem_AsList,
    selection: stepsItem_AsListGenqlSelection,
}
  templateAuthorsItem_AsList: {
    root: templateAuthorsItem_AsList,
    selection: templateAuthorsItem_AsListGenqlSelection,
}
  templatesItem_AsList: {
    root: templatesItem_AsList,
    selection: templatesItem_AsListGenqlSelection,
}
  textWithColorComponent_AsList: {
    root: textWithColorComponent_AsList,
    selection: textWithColorComponent_AsListGenqlSelection,
}
  threadComponent_AsList: {
    root: threadComponent_AsList,
    selection: threadComponent_AsListGenqlSelection,
}
  tokenComponent1_AsList: {
    root: tokenComponent1_AsList,
    selection: tokenComponent1_AsListGenqlSelection,
}
  tokenComponent_AsList: {
    root: tokenComponent_AsList,
    selection: tokenComponent_AsListGenqlSelection,
}
  tryLightModeComponent_AsList: {
    root: tryLightModeComponent_AsList,
    selection: tryLightModeComponent_AsListGenqlSelection,
}
  whimsicalEmbedComponent_AsList: {
    root: whimsicalEmbedComponent_AsList,
    selection: whimsicalEmbedComponent_AsListGenqlSelection,
}
}



    const AboutBasehub_possibleTypes: string[] = ['AboutBasehub']
    export const isAboutBasehub = (obj?: { __typename?: any } | null): obj is AboutBasehub => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAboutBasehub"')
      return AboutBasehub_possibleTypes.includes(obj.__typename)
    }
    


    const AboutBasehubRichText_possibleTypes: string[] = ['AboutBasehubRichText']
    export const isAboutBasehubRichText = (obj?: { __typename?: any } | null): obj is AboutBasehubRichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAboutBasehubRichText"')
      return AboutBasehubRichText_possibleTypes.includes(obj.__typename)
    }
    


    const Analytics_possibleTypes: string[] = ['Analytics']
    export const isAnalytics = (obj?: { __typename?: any } | null): obj is Analytics => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAnalytics"')
      return Analytics_possibleTypes.includes(obj.__typename)
    }
    


    const AnnouncementBanner_possibleTypes: string[] = ['AnnouncementBanner']
    export const isAnnouncementBanner = (obj?: { __typename?: any } | null): obj is AnnouncementBanner => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAnnouncementBanner"')
      return AnnouncementBanner_possibleTypes.includes(obj.__typename)
    }
    


    const AsFloatingBannerComponent_possibleTypes: string[] = ['AsFloatingBannerComponent']
    export const isAsFloatingBannerComponent = (obj?: { __typename?: any } | null): obj is AsFloatingBannerComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAsFloatingBannerComponent"')
      return AsFloatingBannerComponent_possibleTypes.includes(obj.__typename)
    }
    


    const AsNewTabComponent_possibleTypes: string[] = ['AsNewTabComponent']
    export const isAsNewTabComponent = (obj?: { __typename?: any } | null): obj is AsNewTabComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAsNewTabComponent"')
      return AsNewTabComponent_possibleTypes.includes(obj.__typename)
    }
    


    const Authors_possibleTypes: string[] = ['Authors']
    export const isAuthors = (obj?: { __typename?: any } | null): obj is Authors => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuthors"')
      return Authors_possibleTypes.includes(obj.__typename)
    }
    


    const AuthorsItem_possibleTypes: string[] = ['AuthorsItem']
    export const isAuthorsItem = (obj?: { __typename?: any } | null): obj is AuthorsItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAuthorsItem"')
      return AuthorsItem_possibleTypes.includes(obj.__typename)
    }
    


    const BaseHubAgents_possibleTypes: string[] = ['BaseHubAgents']
    export const isBaseHubAgents = (obj?: { __typename?: any } | null): obj is BaseHubAgents => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBaseHubAgents"')
      return BaseHubAgents_possibleTypes.includes(obj.__typename)
    }
    


    const BaseHubGuidelinesAndBlockReferenceComponent_possibleTypes: string[] = ['BaseHubGuidelinesAndBlockReferenceComponent']
    export const isBaseHubGuidelinesAndBlockReferenceComponent = (obj?: { __typename?: any } | null): obj is BaseHubGuidelinesAndBlockReferenceComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBaseHubGuidelinesAndBlockReferenceComponent"')
      return BaseHubGuidelinesAndBlockReferenceComponent_possibleTypes.includes(obj.__typename)
    }
    


    const BaseRichTextJson_possibleTypes: string[] = ['BaseRichTextJson']
    export const isBaseRichTextJson = (obj?: { __typename?: any } | null): obj is BaseRichTextJson => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBaseRichTextJson"')
      return BaseRichTextJson_possibleTypes.includes(obj.__typename)
    }
    


    const BasehubVs_possibleTypes: string[] = ['BasehubVs']
    export const isBasehubVs = (obj?: { __typename?: any } | null): obj is BasehubVs => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBasehubVs"')
      return BasehubVs_possibleTypes.includes(obj.__typename)
    }
    


    const BaselineFeatures_possibleTypes: string[] = ['BaselineFeatures']
    export const isBaselineFeatures = (obj?: { __typename?: any } | null): obj is BaselineFeatures => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBaselineFeatures"')
      return BaselineFeatures_possibleTypes.includes(obj.__typename)
    }
    


    const Bento_possibleTypes: string[] = ['Bento']
    export const isBento = (obj?: { __typename?: any } | null): obj is Bento => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBento"')
      return Bento_possibleTypes.includes(obj.__typename)
    }
    


    const BentoGrid_possibleTypes: string[] = ['BentoGrid']
    export const isBentoGrid = (obj?: { __typename?: any } | null): obj is BentoGrid => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBentoGrid"')
      return BentoGrid_possibleTypes.includes(obj.__typename)
    }
    


    const BentoGridItem_possibleTypes: string[] = ['BentoGridItem']
    export const isBentoGridItem = (obj?: { __typename?: any } | null): obj is BentoGridItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBentoGridItem"')
      return BentoGridItem_possibleTypes.includes(obj.__typename)
    }
    


    const BlockAudio_possibleTypes: string[] = ['BlockAudio']
    export const isBlockAudio = (obj?: { __typename?: any } | null): obj is BlockAudio => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlockAudio"')
      return BlockAudio_possibleTypes.includes(obj.__typename)
    }
    


    const BlockCodeSnippet_possibleTypes: string[] = ['BlockCodeSnippet']
    export const isBlockCodeSnippet = (obj?: { __typename?: any } | null): obj is BlockCodeSnippet => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlockCodeSnippet"')
      return BlockCodeSnippet_possibleTypes.includes(obj.__typename)
    }
    


    const BlockColor_possibleTypes: string[] = ['BlockColor']
    export const isBlockColor = (obj?: { __typename?: any } | null): obj is BlockColor => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlockColor"')
      return BlockColor_possibleTypes.includes(obj.__typename)
    }
    


    const BlockDocument_possibleTypes: string[] = ['AnnouncementBanner','AsFloatingBannerComponent','AsNewTabComponent','Authors','AuthorsItem','BaseHubAgents','BaseHubGuidelinesAndBlockReferenceComponent','BasehubVs','BaselineFeatures','Bento','BentoGrid','BentoGridItem','Blog','BlogpostTemplateComponent','Body_1','BooleanFeatureComponent','BuildTimeRedirects','BuildTimeRedirectsItem','ButtonComponent','Calculator','CalloutComponent','Changelog','ChangelogFloatingBannerHighlightComps','ChangelogTemplateComponent','CodeSnippetComponent','CodeSnippetWithDifferentLanguagesComponent','Collections','ComparisonBentoComponent','ComparisonItemComponent','ComparisonStepsComponent','ComparisonTableComponent','Comparisons','ComparisonsItem','Components','Copy','CoverImageComponent','DemoComponent','Demos','Emails','EmailsItem','EnterprisePlan','Entries','Faq','Faqs','FaqsItem','FeatureComponent','FeatureComponent_1','FeaturedComponent','Features','FeaturesAndBenefits','FeaturesAndBenefitsItem','FeaturesItem','FeaturesItem_1','FeaturesItem_2','FeaturesLimitsComponent','Features_1','Features_2','Features_3','Feedback','FreeTextComponent','GeneralEvents','GuideComponent','GuideStepComponent','Header','Headers','HeadersItem','HeroCustomers','HeroCustomersItem','Homepage','Icons','InEditorTimelineGuides','IntegrationInstructions','IntegrationInstructionsItem','LegalStuff','LimitComponent','LineItems','LineItems_1','Manifesto','Manifesto_1','MarketingHeaderComponent','MetaComponent','MiddleLinks','MiddleLinksItem','MiscAppEvents','Newsletter','Onboarding','PageAnalyticsComponent','PaymentModeComponent','PaymentSwitch','PlanLineItemComponent','PlanNameComponent','Plans','PlansComparisonTable','Posts','PriceComponent','Pricing','PricingBanner','PricingPlanComponent','Privacy','Prompts','QuoteComponent','RepoSchemaComponent','RepoSchemaComponent_1','RepoSchemaComponent_2','RepoTitleComponent','Roadmap','RoadmapItem','Roadmap_1','Sections','Shoutouts','Snippets','SnippetsItem','Steps','StepsItem','Steps_1','TemplateAuthors','TemplateAuthorsItem','Templates','TemplatesItem','Templates_1','Terms','Testimonials','TextWithColorComponent','ThreadComponent','TokenComponent','TokenComponent_1','TryLightModeComponent','WhimsicalEmbedComponent','asFloatingBannerComponent_AsList','asNewTabComponent_AsList','authorsItem_AsList','baseHubGuidelinesAndBlockReferenceComponent_AsList','bentoGridItem_AsList','blogpostTemplateComponent_AsList','booleanFeatureComponent_AsList','buildTimeRedirectsItem_AsList','buttonComponent_AsList','calloutComponent_AsList','changelogTemplateComponent_AsList','codeSnippetComponent_AsList','codeSnippetWithDifferentLanguagesComponent_AsList','comparisonBentoComponent_AsList','comparisonItemComponent_AsList','comparisonStepsComponent_AsList','comparisonTableComponent_AsList','comparisonsItem_AsList','coverImageComponent_AsList','demoComponent_AsList','emailsItem_AsList','faqsItem_AsList','featureComponent1_AsList','featureComponent_AsList','featuredComponent_AsList','featuresAndBenefitsItem_AsList','featuresItem1_AsList','featuresItem2_AsList','featuresItem_AsList','featuresLimitsComponent_AsList','freeTextComponent_AsList','guideComponent_AsList','guideStepComponent_AsList','headersItem_AsList','heroCustomersItem_AsList','integrationInstructionsItem_AsList','limitComponent_AsList','marketingHeaderComponent_AsList','metaComponent_AsList','middleLinksItem_AsList','pageAnalyticsComponent_AsList','paymentModeComponent_AsList','planLineItemComponent_AsList','planNameComponent_AsList','priceComponent_AsList','pricingPlanComponent_AsList','quoteComponent_AsList','repoSchemaComponent1_AsList','repoSchemaComponent2_AsList','repoSchemaComponent_AsList','repoTitleComponent_AsList','roadmapItem_AsList','snippetsItem_AsList','stepsItem_AsList','templateAuthorsItem_AsList','templatesItem_AsList','textWithColorComponent_AsList','threadComponent_AsList','tokenComponent1_AsList','tokenComponent_AsList','tryLightModeComponent_AsList','whimsicalEmbedComponent_AsList']
    export const isBlockDocument = (obj?: { __typename?: any } | null): obj is BlockDocument => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlockDocument"')
      return BlockDocument_possibleTypes.includes(obj.__typename)
    }
    


    const BlockDocumentSys_possibleTypes: string[] = ['BlockDocumentSys']
    export const isBlockDocumentSys = (obj?: { __typename?: any } | null): obj is BlockDocumentSys => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlockDocumentSys"')
      return BlockDocumentSys_possibleTypes.includes(obj.__typename)
    }
    


    const BlockFile_possibleTypes: string[] = ['BlockFile']
    export const isBlockFile = (obj?: { __typename?: any } | null): obj is BlockFile => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlockFile"')
      return BlockFile_possibleTypes.includes(obj.__typename)
    }
    


    const BlockImage_possibleTypes: string[] = ['BlockImage']
    export const isBlockImage = (obj?: { __typename?: any } | null): obj is BlockImage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlockImage"')
      return BlockImage_possibleTypes.includes(obj.__typename)
    }
    


    const BlockList_possibleTypes: string[] = ['Authors','BentoGrid','Body_1','BuildTimeRedirects','Comparisons','Emails','Entries','Faqs','Features','FeaturesAndBenefits','Features_1','Features_2','Features_3','Headers','HeroCustomers','IntegrationInstructions','LineItems','LineItems_1','MiddleLinks','Plans','Posts','Roadmap_1','Snippets','Steps','Steps_1','TemplateAuthors','Templates_1','Testimonials','asFloatingBannerComponent_AsList','asNewTabComponent_AsList','authorsItem_AsList','baseHubGuidelinesAndBlockReferenceComponent_AsList','bentoGridItem_AsList','blogpostTemplateComponent_AsList','booleanFeatureComponent_AsList','buildTimeRedirectsItem_AsList','buttonComponent_AsList','calloutComponent_AsList','changelogTemplateComponent_AsList','codeSnippetComponent_AsList','codeSnippetWithDifferentLanguagesComponent_AsList','comparisonBentoComponent_AsList','comparisonItemComponent_AsList','comparisonStepsComponent_AsList','comparisonTableComponent_AsList','comparisonsItem_AsList','coverImageComponent_AsList','demoComponent_AsList','emailsItem_AsList','faqsItem_AsList','featureComponent1_AsList','featureComponent_AsList','featuredComponent_AsList','featuresAndBenefitsItem_AsList','featuresItem1_AsList','featuresItem2_AsList','featuresItem_AsList','featuresLimitsComponent_AsList','freeTextComponent_AsList','guideComponent_AsList','guideStepComponent_AsList','headersItem_AsList','heroCustomersItem_AsList','integrationInstructionsItem_AsList','limitComponent_AsList','marketingHeaderComponent_AsList','metaComponent_AsList','middleLinksItem_AsList','pageAnalyticsComponent_AsList','paymentModeComponent_AsList','planLineItemComponent_AsList','planNameComponent_AsList','priceComponent_AsList','pricingPlanComponent_AsList','quoteComponent_AsList','repoSchemaComponent1_AsList','repoSchemaComponent2_AsList','repoSchemaComponent_AsList','repoTitleComponent_AsList','roadmapItem_AsList','snippetsItem_AsList','stepsItem_AsList','templateAuthorsItem_AsList','templatesItem_AsList','textWithColorComponent_AsList','threadComponent_AsList','tokenComponent1_AsList','tokenComponent_AsList','tryLightModeComponent_AsList','whimsicalEmbedComponent_AsList']
    export const isBlockList = (obj?: { __typename?: any } | null): obj is BlockList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlockList"')
      return BlockList_possibleTypes.includes(obj.__typename)
    }
    


    const BlockOgImage_possibleTypes: string[] = ['BlockOgImage']
    export const isBlockOgImage = (obj?: { __typename?: any } | null): obj is BlockOgImage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlockOgImage"')
      return BlockOgImage_possibleTypes.includes(obj.__typename)
    }
    


    const BlockRichText_possibleTypes: string[] = ['AboutBasehub','Body','Body_2','CardTag','Content','Content_1','Content_2','Content_3','Content_4','Content_5','Content_6','Content_7','Content_8','Content_9','Content_10','ContextForLlm','Description','Description_1','HeroSubtitle','HeroTitle','Invitation','Label','Note','PromptV11','Pros','Quote','RepoLlmsTxt','Script','Subtitle','Subtitle_1','Subtitle_2','Subtitle_3','Subtitle_4','Subtitle_5','SwitchLabel','Title','Title_1']
    export const isBlockRichText = (obj?: { __typename?: any } | null): obj is BlockRichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlockRichText"')
      return BlockRichText_possibleTypes.includes(obj.__typename)
    }
    


    const BlockVideo_possibleTypes: string[] = ['BlockVideo']
    export const isBlockVideo = (obj?: { __typename?: any } | null): obj is BlockVideo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlockVideo"')
      return BlockVideo_possibleTypes.includes(obj.__typename)
    }
    


    const Blog_possibleTypes: string[] = ['Blog']
    export const isBlog = (obj?: { __typename?: any } | null): obj is Blog => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlog"')
      return Blog_possibleTypes.includes(obj.__typename)
    }
    


    const BlogpostTemplateComponent_possibleTypes: string[] = ['BlogpostTemplateComponent']
    export const isBlogpostTemplateComponent = (obj?: { __typename?: any } | null): obj is BlogpostTemplateComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlogpostTemplateComponent"')
      return BlogpostTemplateComponent_possibleTypes.includes(obj.__typename)
    }
    


    const Body_possibleTypes: string[] = ['Body']
    export const isBody = (obj?: { __typename?: any } | null): obj is Body => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBody"')
      return Body_possibleTypes.includes(obj.__typename)
    }
    


    const BodyRichText_possibleTypes: string[] = ['BodyRichText']
    export const isBodyRichText = (obj?: { __typename?: any } | null): obj is BodyRichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBodyRichText"')
      return BodyRichText_possibleTypes.includes(obj.__typename)
    }
    


    const Body_1_possibleTypes: string[] = ['Body_1']
    export const isBody_1 = (obj?: { __typename?: any } | null): obj is Body_1 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBody_1"')
      return Body_1_possibleTypes.includes(obj.__typename)
    }
    


    const Body_2_possibleTypes: string[] = ['Body_2']
    export const isBody_2 = (obj?: { __typename?: any } | null): obj is Body_2 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBody_2"')
      return Body_2_possibleTypes.includes(obj.__typename)
    }
    


    const Body_2RichText_possibleTypes: string[] = ['Body_2RichText']
    export const isBody_2RichText = (obj?: { __typename?: any } | null): obj is Body_2RichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBody_2RichText"')
      return Body_2RichText_possibleTypes.includes(obj.__typename)
    }
    


    const BooleanFeatureComponent_possibleTypes: string[] = ['BooleanFeatureComponent']
    export const isBooleanFeatureComponent = (obj?: { __typename?: any } | null): obj is BooleanFeatureComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBooleanFeatureComponent"')
      return BooleanFeatureComponent_possibleTypes.includes(obj.__typename)
    }
    


    const BuildTimeRedirects_possibleTypes: string[] = ['BuildTimeRedirects']
    export const isBuildTimeRedirects = (obj?: { __typename?: any } | null): obj is BuildTimeRedirects => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBuildTimeRedirects"')
      return BuildTimeRedirects_possibleTypes.includes(obj.__typename)
    }
    


    const BuildTimeRedirectsItem_possibleTypes: string[] = ['BuildTimeRedirectsItem']
    export const isBuildTimeRedirectsItem = (obj?: { __typename?: any } | null): obj is BuildTimeRedirectsItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBuildTimeRedirectsItem"')
      return BuildTimeRedirectsItem_possibleTypes.includes(obj.__typename)
    }
    


    const ButtonComponent_possibleTypes: string[] = ['ButtonComponent']
    export const isButtonComponent = (obj?: { __typename?: any } | null): obj is ButtonComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isButtonComponent"')
      return ButtonComponent_possibleTypes.includes(obj.__typename)
    }
    


    const Calculator_possibleTypes: string[] = ['Calculator']
    export const isCalculator = (obj?: { __typename?: any } | null): obj is Calculator => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCalculator"')
      return Calculator_possibleTypes.includes(obj.__typename)
    }
    


    const CalloutComponent_possibleTypes: string[] = ['CalloutComponent']
    export const isCalloutComponent = (obj?: { __typename?: any } | null): obj is CalloutComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCalloutComponent"')
      return CalloutComponent_possibleTypes.includes(obj.__typename)
    }
    


    const CardTag_possibleTypes: string[] = ['CardTag']
    export const isCardTag = (obj?: { __typename?: any } | null): obj is CardTag => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCardTag"')
      return CardTag_possibleTypes.includes(obj.__typename)
    }
    


    const CardTagRichText_possibleTypes: string[] = ['CardTagRichText']
    export const isCardTagRichText = (obj?: { __typename?: any } | null): obj is CardTagRichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCardTagRichText"')
      return CardTagRichText_possibleTypes.includes(obj.__typename)
    }
    


    const Changelog_possibleTypes: string[] = ['Changelog']
    export const isChangelog = (obj?: { __typename?: any } | null): obj is Changelog => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChangelog"')
      return Changelog_possibleTypes.includes(obj.__typename)
    }
    


    const ChangelogFloatingBannerHighlightComps_possibleTypes: string[] = ['ChangelogFloatingBannerHighlightComps']
    export const isChangelogFloatingBannerHighlightComps = (obj?: { __typename?: any } | null): obj is ChangelogFloatingBannerHighlightComps => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChangelogFloatingBannerHighlightComps"')
      return ChangelogFloatingBannerHighlightComps_possibleTypes.includes(obj.__typename)
    }
    


    const ChangelogTemplateComponent_possibleTypes: string[] = ['ChangelogTemplateComponent']
    export const isChangelogTemplateComponent = (obj?: { __typename?: any } | null): obj is ChangelogTemplateComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChangelogTemplateComponent"')
      return ChangelogTemplateComponent_possibleTypes.includes(obj.__typename)
    }
    


    const CodeSnippetComponent_possibleTypes: string[] = ['CodeSnippetComponent']
    export const isCodeSnippetComponent = (obj?: { __typename?: any } | null): obj is CodeSnippetComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCodeSnippetComponent"')
      return CodeSnippetComponent_possibleTypes.includes(obj.__typename)
    }
    


    const CodeSnippetWithDifferentLanguagesComponent_possibleTypes: string[] = ['CodeSnippetWithDifferentLanguagesComponent']
    export const isCodeSnippetWithDifferentLanguagesComponent = (obj?: { __typename?: any } | null): obj is CodeSnippetWithDifferentLanguagesComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCodeSnippetWithDifferentLanguagesComponent"')
      return CodeSnippetWithDifferentLanguagesComponent_possibleTypes.includes(obj.__typename)
    }
    


    const Collections_possibleTypes: string[] = ['Collections']
    export const isCollections = (obj?: { __typename?: any } | null): obj is Collections => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCollections"')
      return Collections_possibleTypes.includes(obj.__typename)
    }
    


    const ComparisonBentoComponent_possibleTypes: string[] = ['ComparisonBentoComponent']
    export const isComparisonBentoComponent = (obj?: { __typename?: any } | null): obj is ComparisonBentoComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isComparisonBentoComponent"')
      return ComparisonBentoComponent_possibleTypes.includes(obj.__typename)
    }
    


    const ComparisonItemComponent_possibleTypes: string[] = ['ComparisonItemComponent']
    export const isComparisonItemComponent = (obj?: { __typename?: any } | null): obj is ComparisonItemComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isComparisonItemComponent"')
      return ComparisonItemComponent_possibleTypes.includes(obj.__typename)
    }
    


    const ComparisonStepsComponent_possibleTypes: string[] = ['ComparisonStepsComponent']
    export const isComparisonStepsComponent = (obj?: { __typename?: any } | null): obj is ComparisonStepsComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isComparisonStepsComponent"')
      return ComparisonStepsComponent_possibleTypes.includes(obj.__typename)
    }
    


    const ComparisonTableComponent_possibleTypes: string[] = ['ComparisonTableComponent']
    export const isComparisonTableComponent = (obj?: { __typename?: any } | null): obj is ComparisonTableComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isComparisonTableComponent"')
      return ComparisonTableComponent_possibleTypes.includes(obj.__typename)
    }
    


    const Comparisons_possibleTypes: string[] = ['Comparisons']
    export const isComparisons = (obj?: { __typename?: any } | null): obj is Comparisons => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isComparisons"')
      return Comparisons_possibleTypes.includes(obj.__typename)
    }
    


    const ComparisonsItem_possibleTypes: string[] = ['ComparisonsItem']
    export const isComparisonsItem = (obj?: { __typename?: any } | null): obj is ComparisonsItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isComparisonsItem"')
      return ComparisonsItem_possibleTypes.includes(obj.__typename)
    }
    


    const Components_possibleTypes: string[] = ['Components']
    export const isComponents = (obj?: { __typename?: any } | null): obj is Components => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isComponents"')
      return Components_possibleTypes.includes(obj.__typename)
    }
    


    const Content_possibleTypes: string[] = ['Content']
    export const isContent = (obj?: { __typename?: any } | null): obj is Content => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContent"')
      return Content_possibleTypes.includes(obj.__typename)
    }
    


    const ContentRichText_possibleTypes: string[] = ['ContentRichText']
    export const isContentRichText = (obj?: { __typename?: any } | null): obj is ContentRichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContentRichText"')
      return ContentRichText_possibleTypes.includes(obj.__typename)
    }
    


    const Content_1_possibleTypes: string[] = ['Content_1']
    export const isContent_1 = (obj?: { __typename?: any } | null): obj is Content_1 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContent_1"')
      return Content_1_possibleTypes.includes(obj.__typename)
    }
    


    const Content_1RichText_possibleTypes: string[] = ['Content_1RichText']
    export const isContent_1RichText = (obj?: { __typename?: any } | null): obj is Content_1RichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContent_1RichText"')
      return Content_1RichText_possibleTypes.includes(obj.__typename)
    }
    


    const Content_2_possibleTypes: string[] = ['Content_2']
    export const isContent_2 = (obj?: { __typename?: any } | null): obj is Content_2 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContent_2"')
      return Content_2_possibleTypes.includes(obj.__typename)
    }
    


    const Content_2RichText_possibleTypes: string[] = ['Content_2RichText']
    export const isContent_2RichText = (obj?: { __typename?: any } | null): obj is Content_2RichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContent_2RichText"')
      return Content_2RichText_possibleTypes.includes(obj.__typename)
    }
    


    const Content_3_possibleTypes: string[] = ['Content_3']
    export const isContent_3 = (obj?: { __typename?: any } | null): obj is Content_3 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContent_3"')
      return Content_3_possibleTypes.includes(obj.__typename)
    }
    


    const Content_3RichText_possibleTypes: string[] = ['Content_3RichText']
    export const isContent_3RichText = (obj?: { __typename?: any } | null): obj is Content_3RichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContent_3RichText"')
      return Content_3RichText_possibleTypes.includes(obj.__typename)
    }
    


    const Content_4_possibleTypes: string[] = ['Content_4']
    export const isContent_4 = (obj?: { __typename?: any } | null): obj is Content_4 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContent_4"')
      return Content_4_possibleTypes.includes(obj.__typename)
    }
    


    const Content_4RichText_possibleTypes: string[] = ['Content_4RichText']
    export const isContent_4RichText = (obj?: { __typename?: any } | null): obj is Content_4RichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContent_4RichText"')
      return Content_4RichText_possibleTypes.includes(obj.__typename)
    }
    


    const Content_5_possibleTypes: string[] = ['Content_5']
    export const isContent_5 = (obj?: { __typename?: any } | null): obj is Content_5 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContent_5"')
      return Content_5_possibleTypes.includes(obj.__typename)
    }
    


    const Content_5RichText_possibleTypes: string[] = ['Content_5RichText']
    export const isContent_5RichText = (obj?: { __typename?: any } | null): obj is Content_5RichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContent_5RichText"')
      return Content_5RichText_possibleTypes.includes(obj.__typename)
    }
    


    const Content_6_possibleTypes: string[] = ['Content_6']
    export const isContent_6 = (obj?: { __typename?: any } | null): obj is Content_6 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContent_6"')
      return Content_6_possibleTypes.includes(obj.__typename)
    }
    


    const Content_6RichText_possibleTypes: string[] = ['Content_6RichText']
    export const isContent_6RichText = (obj?: { __typename?: any } | null): obj is Content_6RichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContent_6RichText"')
      return Content_6RichText_possibleTypes.includes(obj.__typename)
    }
    


    const Content_7_possibleTypes: string[] = ['Content_7']
    export const isContent_7 = (obj?: { __typename?: any } | null): obj is Content_7 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContent_7"')
      return Content_7_possibleTypes.includes(obj.__typename)
    }
    


    const Content_7RichText_possibleTypes: string[] = ['Content_7RichText']
    export const isContent_7RichText = (obj?: { __typename?: any } | null): obj is Content_7RichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContent_7RichText"')
      return Content_7RichText_possibleTypes.includes(obj.__typename)
    }
    


    const Content_8_possibleTypes: string[] = ['Content_8']
    export const isContent_8 = (obj?: { __typename?: any } | null): obj is Content_8 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContent_8"')
      return Content_8_possibleTypes.includes(obj.__typename)
    }
    


    const Content_8RichText_possibleTypes: string[] = ['Content_8RichText']
    export const isContent_8RichText = (obj?: { __typename?: any } | null): obj is Content_8RichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContent_8RichText"')
      return Content_8RichText_possibleTypes.includes(obj.__typename)
    }
    


    const Content_9_possibleTypes: string[] = ['Content_9']
    export const isContent_9 = (obj?: { __typename?: any } | null): obj is Content_9 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContent_9"')
      return Content_9_possibleTypes.includes(obj.__typename)
    }
    


    const Content_9RichText_possibleTypes: string[] = ['Content_9RichText']
    export const isContent_9RichText = (obj?: { __typename?: any } | null): obj is Content_9RichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContent_9RichText"')
      return Content_9RichText_possibleTypes.includes(obj.__typename)
    }
    


    const Content_10_possibleTypes: string[] = ['Content_10']
    export const isContent_10 = (obj?: { __typename?: any } | null): obj is Content_10 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContent_10"')
      return Content_10_possibleTypes.includes(obj.__typename)
    }
    


    const Content_10RichText_possibleTypes: string[] = ['Content_10RichText']
    export const isContent_10RichText = (obj?: { __typename?: any } | null): obj is Content_10RichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContent_10RichText"')
      return Content_10RichText_possibleTypes.includes(obj.__typename)
    }
    


    const ContextForLlm_possibleTypes: string[] = ['ContextForLlm']
    export const isContextForLlm = (obj?: { __typename?: any } | null): obj is ContextForLlm => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContextForLlm"')
      return ContextForLlm_possibleTypes.includes(obj.__typename)
    }
    


    const ContextForLlmRichText_possibleTypes: string[] = ['ContextForLlmRichText']
    export const isContextForLlmRichText = (obj?: { __typename?: any } | null): obj is ContextForLlmRichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContextForLlmRichText"')
      return ContextForLlmRichText_possibleTypes.includes(obj.__typename)
    }
    


    const Copy_possibleTypes: string[] = ['Copy']
    export const isCopy = (obj?: { __typename?: any } | null): obj is Copy => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCopy"')
      return Copy_possibleTypes.includes(obj.__typename)
    }
    


    const CoverImageComponent_possibleTypes: string[] = ['CoverImageComponent']
    export const isCoverImageComponent = (obj?: { __typename?: any } | null): obj is CoverImageComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCoverImageComponent"')
      return CoverImageComponent_possibleTypes.includes(obj.__typename)
    }
    


    const CrashNotifications_possibleTypes: string[] = ['CrashNotifications']
    export const isCrashNotifications = (obj?: { __typename?: any } | null): obj is CrashNotifications => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCrashNotifications"')
      return CrashNotifications_possibleTypes.includes(obj.__typename)
    }
    


    const CrashReports_possibleTypes: string[] = ['CrashReports']
    export const isCrashReports = (obj?: { __typename?: any } | null): obj is CrashReports => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCrashReports"')
      return CrashReports_possibleTypes.includes(obj.__typename)
    }
    


    const DemoComponent_possibleTypes: string[] = ['DemoComponent']
    export const isDemoComponent = (obj?: { __typename?: any } | null): obj is DemoComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDemoComponent"')
      return DemoComponent_possibleTypes.includes(obj.__typename)
    }
    


    const Demos_possibleTypes: string[] = ['Demos']
    export const isDemos = (obj?: { __typename?: any } | null): obj is Demos => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDemos"')
      return Demos_possibleTypes.includes(obj.__typename)
    }
    


    const Description_possibleTypes: string[] = ['Description']
    export const isDescription = (obj?: { __typename?: any } | null): obj is Description => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDescription"')
      return Description_possibleTypes.includes(obj.__typename)
    }
    


    const DescriptionRichText_possibleTypes: string[] = ['DescriptionRichText']
    export const isDescriptionRichText = (obj?: { __typename?: any } | null): obj is DescriptionRichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDescriptionRichText"')
      return DescriptionRichText_possibleTypes.includes(obj.__typename)
    }
    


    const Description_1_possibleTypes: string[] = ['Description_1']
    export const isDescription_1 = (obj?: { __typename?: any } | null): obj is Description_1 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDescription_1"')
      return Description_1_possibleTypes.includes(obj.__typename)
    }
    


    const Description_1RichText_possibleTypes: string[] = ['Description_1RichText']
    export const isDescription_1RichText = (obj?: { __typename?: any } | null): obj is Description_1RichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDescription_1RichText"')
      return Description_1RichText_possibleTypes.includes(obj.__typename)
    }
    


    const Emails_possibleTypes: string[] = ['Emails']
    export const isEmails = (obj?: { __typename?: any } | null): obj is Emails => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEmails"')
      return Emails_possibleTypes.includes(obj.__typename)
    }
    


    const EmailsItem_possibleTypes: string[] = ['EmailsItem']
    export const isEmailsItem = (obj?: { __typename?: any } | null): obj is EmailsItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEmailsItem"')
      return EmailsItem_possibleTypes.includes(obj.__typename)
    }
    


    const EnterprisePlan_possibleTypes: string[] = ['EnterprisePlan']
    export const isEnterprisePlan = (obj?: { __typename?: any } | null): obj is EnterprisePlan => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEnterprisePlan"')
      return EnterprisePlan_possibleTypes.includes(obj.__typename)
    }
    


    const Entries_possibleTypes: string[] = ['Entries']
    export const isEntries = (obj?: { __typename?: any } | null): obj is Entries => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEntries"')
      return Entries_possibleTypes.includes(obj.__typename)
    }
    


    const Faq_possibleTypes: string[] = ['Faq']
    export const isFaq = (obj?: { __typename?: any } | null): obj is Faq => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFaq"')
      return Faq_possibleTypes.includes(obj.__typename)
    }
    


    const Faqs_possibleTypes: string[] = ['Faqs']
    export const isFaqs = (obj?: { __typename?: any } | null): obj is Faqs => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFaqs"')
      return Faqs_possibleTypes.includes(obj.__typename)
    }
    


    const FaqsItem_possibleTypes: string[] = ['FaqsItem']
    export const isFaqsItem = (obj?: { __typename?: any } | null): obj is FaqsItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFaqsItem"')
      return FaqsItem_possibleTypes.includes(obj.__typename)
    }
    


    const FeatureComponent_possibleTypes: string[] = ['FeatureComponent']
    export const isFeatureComponent = (obj?: { __typename?: any } | null): obj is FeatureComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFeatureComponent"')
      return FeatureComponent_possibleTypes.includes(obj.__typename)
    }
    


    const FeatureComponent_1_possibleTypes: string[] = ['FeatureComponent_1']
    export const isFeatureComponent_1 = (obj?: { __typename?: any } | null): obj is FeatureComponent_1 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFeatureComponent_1"')
      return FeatureComponent_1_possibleTypes.includes(obj.__typename)
    }
    


    const FeaturedComponent_possibleTypes: string[] = ['FeaturedComponent']
    export const isFeaturedComponent = (obj?: { __typename?: any } | null): obj is FeaturedComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFeaturedComponent"')
      return FeaturedComponent_possibleTypes.includes(obj.__typename)
    }
    


    const Features_possibleTypes: string[] = ['Features']
    export const isFeatures = (obj?: { __typename?: any } | null): obj is Features => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFeatures"')
      return Features_possibleTypes.includes(obj.__typename)
    }
    


    const FeaturesAndBenefits_possibleTypes: string[] = ['FeaturesAndBenefits']
    export const isFeaturesAndBenefits = (obj?: { __typename?: any } | null): obj is FeaturesAndBenefits => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFeaturesAndBenefits"')
      return FeaturesAndBenefits_possibleTypes.includes(obj.__typename)
    }
    


    const FeaturesAndBenefitsItem_possibleTypes: string[] = ['FeaturesAndBenefitsItem']
    export const isFeaturesAndBenefitsItem = (obj?: { __typename?: any } | null): obj is FeaturesAndBenefitsItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFeaturesAndBenefitsItem"')
      return FeaturesAndBenefitsItem_possibleTypes.includes(obj.__typename)
    }
    


    const FeaturesItem_possibleTypes: string[] = ['FeaturesItem']
    export const isFeaturesItem = (obj?: { __typename?: any } | null): obj is FeaturesItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFeaturesItem"')
      return FeaturesItem_possibleTypes.includes(obj.__typename)
    }
    


    const FeaturesItem_1_possibleTypes: string[] = ['FeaturesItem_1']
    export const isFeaturesItem_1 = (obj?: { __typename?: any } | null): obj is FeaturesItem_1 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFeaturesItem_1"')
      return FeaturesItem_1_possibleTypes.includes(obj.__typename)
    }
    


    const FeaturesItem_2_possibleTypes: string[] = ['FeaturesItem_2']
    export const isFeaturesItem_2 = (obj?: { __typename?: any } | null): obj is FeaturesItem_2 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFeaturesItem_2"')
      return FeaturesItem_2_possibleTypes.includes(obj.__typename)
    }
    


    const FeaturesLimitsComponent_possibleTypes: string[] = ['FeaturesLimitsComponent']
    export const isFeaturesLimitsComponent = (obj?: { __typename?: any } | null): obj is FeaturesLimitsComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFeaturesLimitsComponent"')
      return FeaturesLimitsComponent_possibleTypes.includes(obj.__typename)
    }
    


    const Features_1_possibleTypes: string[] = ['Features_1']
    export const isFeatures_1 = (obj?: { __typename?: any } | null): obj is Features_1 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFeatures_1"')
      return Features_1_possibleTypes.includes(obj.__typename)
    }
    


    const Features_2_possibleTypes: string[] = ['Features_2']
    export const isFeatures_2 = (obj?: { __typename?: any } | null): obj is Features_2 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFeatures_2"')
      return Features_2_possibleTypes.includes(obj.__typename)
    }
    


    const Features_3_possibleTypes: string[] = ['Features_3']
    export const isFeatures_3 = (obj?: { __typename?: any } | null): obj is Features_3 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFeatures_3"')
      return Features_3_possibleTypes.includes(obj.__typename)
    }
    


    const Feedback_possibleTypes: string[] = ['Feedback']
    export const isFeedback = (obj?: { __typename?: any } | null): obj is Feedback => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFeedback"')
      return Feedback_possibleTypes.includes(obj.__typename)
    }
    


    const Form_possibleTypes: string[] = ['Form']
    export const isForm = (obj?: { __typename?: any } | null): obj is Form => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isForm"')
      return Form_possibleTypes.includes(obj.__typename)
    }
    


    const Form_1_possibleTypes: string[] = ['Form_1']
    export const isForm_1 = (obj?: { __typename?: any } | null): obj is Form_1 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isForm_1"')
      return Form_1_possibleTypes.includes(obj.__typename)
    }
    


    const FreeTextComponent_possibleTypes: string[] = ['FreeTextComponent']
    export const isFreeTextComponent = (obj?: { __typename?: any } | null): obj is FreeTextComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFreeTextComponent"')
      return FreeTextComponent_possibleTypes.includes(obj.__typename)
    }
    


    const FrozenApis_possibleTypes: string[] = ['FrozenApis']
    export const isFrozenApis = (obj?: { __typename?: any } | null): obj is FrozenApis => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFrozenApis"')
      return FrozenApis_possibleTypes.includes(obj.__typename)
    }
    


    const FrozenApisNoti_possibleTypes: string[] = ['FrozenApisNoti']
    export const isFrozenApisNoti = (obj?: { __typename?: any } | null): obj is FrozenApisNoti => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFrozenApisNoti"')
      return FrozenApisNoti_possibleTypes.includes(obj.__typename)
    }
    


    const GeneralEvents_possibleTypes: string[] = ['GeneralEvents']
    export const isGeneralEvents = (obj?: { __typename?: any } | null): obj is GeneralEvents => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGeneralEvents"')
      return GeneralEvents_possibleTypes.includes(obj.__typename)
    }
    


    const GetUploadSignedURL_possibleTypes: string[] = ['GetUploadSignedURL']
    export const isGetUploadSignedURL = (obj?: { __typename?: any } | null): obj is GetUploadSignedURL => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGetUploadSignedURL"')
      return GetUploadSignedURL_possibleTypes.includes(obj.__typename)
    }
    


    const GuideComponent_possibleTypes: string[] = ['GuideComponent']
    export const isGuideComponent = (obj?: { __typename?: any } | null): obj is GuideComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGuideComponent"')
      return GuideComponent_possibleTypes.includes(obj.__typename)
    }
    


    const GuideStepComponent_possibleTypes: string[] = ['GuideStepComponent']
    export const isGuideStepComponent = (obj?: { __typename?: any } | null): obj is GuideStepComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGuideStepComponent"')
      return GuideStepComponent_possibleTypes.includes(obj.__typename)
    }
    


    const Header_possibleTypes: string[] = ['Header']
    export const isHeader = (obj?: { __typename?: any } | null): obj is Header => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHeader"')
      return Header_possibleTypes.includes(obj.__typename)
    }
    


    const Headers_possibleTypes: string[] = ['Headers']
    export const isHeaders = (obj?: { __typename?: any } | null): obj is Headers => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHeaders"')
      return Headers_possibleTypes.includes(obj.__typename)
    }
    


    const HeadersItem_possibleTypes: string[] = ['HeadersItem']
    export const isHeadersItem = (obj?: { __typename?: any } | null): obj is HeadersItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHeadersItem"')
      return HeadersItem_possibleTypes.includes(obj.__typename)
    }
    


    const HeroCustomers_possibleTypes: string[] = ['HeroCustomers']
    export const isHeroCustomers = (obj?: { __typename?: any } | null): obj is HeroCustomers => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHeroCustomers"')
      return HeroCustomers_possibleTypes.includes(obj.__typename)
    }
    


    const HeroCustomersItem_possibleTypes: string[] = ['HeroCustomersItem']
    export const isHeroCustomersItem = (obj?: { __typename?: any } | null): obj is HeroCustomersItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHeroCustomersItem"')
      return HeroCustomersItem_possibleTypes.includes(obj.__typename)
    }
    


    const HeroSubtitle_possibleTypes: string[] = ['HeroSubtitle']
    export const isHeroSubtitle = (obj?: { __typename?: any } | null): obj is HeroSubtitle => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHeroSubtitle"')
      return HeroSubtitle_possibleTypes.includes(obj.__typename)
    }
    


    const HeroSubtitleRichText_possibleTypes: string[] = ['HeroSubtitleRichText']
    export const isHeroSubtitleRichText = (obj?: { __typename?: any } | null): obj is HeroSubtitleRichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHeroSubtitleRichText"')
      return HeroSubtitleRichText_possibleTypes.includes(obj.__typename)
    }
    


    const HeroTitle_possibleTypes: string[] = ['HeroTitle']
    export const isHeroTitle = (obj?: { __typename?: any } | null): obj is HeroTitle => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHeroTitle"')
      return HeroTitle_possibleTypes.includes(obj.__typename)
    }
    


    const HeroTitleRichText_possibleTypes: string[] = ['HeroTitleRichText']
    export const isHeroTitleRichText = (obj?: { __typename?: any } | null): obj is HeroTitleRichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHeroTitleRichText"')
      return HeroTitleRichText_possibleTypes.includes(obj.__typename)
    }
    


    const Homepage_possibleTypes: string[] = ['Homepage']
    export const isHomepage = (obj?: { __typename?: any } | null): obj is Homepage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHomepage"')
      return Homepage_possibleTypes.includes(obj.__typename)
    }
    


    const Icons_possibleTypes: string[] = ['Icons']
    export const isIcons = (obj?: { __typename?: any } | null): obj is Icons => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isIcons"')
      return Icons_possibleTypes.includes(obj.__typename)
    }
    


    const InEditorTimelineGuides_possibleTypes: string[] = ['InEditorTimelineGuides']
    export const isInEditorTimelineGuides = (obj?: { __typename?: any } | null): obj is InEditorTimelineGuides => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isInEditorTimelineGuides"')
      return InEditorTimelineGuides_possibleTypes.includes(obj.__typename)
    }
    


    const IntegrationInstructions_possibleTypes: string[] = ['IntegrationInstructions']
    export const isIntegrationInstructions = (obj?: { __typename?: any } | null): obj is IntegrationInstructions => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isIntegrationInstructions"')
      return IntegrationInstructions_possibleTypes.includes(obj.__typename)
    }
    


    const IntegrationInstructionsItem_possibleTypes: string[] = ['IntegrationInstructionsItem']
    export const isIntegrationInstructionsItem = (obj?: { __typename?: any } | null): obj is IntegrationInstructionsItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isIntegrationInstructionsItem"')
      return IntegrationInstructionsItem_possibleTypes.includes(obj.__typename)
    }
    


    const Invitation_possibleTypes: string[] = ['Invitation']
    export const isInvitation = (obj?: { __typename?: any } | null): obj is Invitation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isInvitation"')
      return Invitation_possibleTypes.includes(obj.__typename)
    }
    


    const InvitationRichText_possibleTypes: string[] = ['InvitationRichText']
    export const isInvitationRichText = (obj?: { __typename?: any } | null): obj is InvitationRichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isInvitationRichText"')
      return InvitationRichText_possibleTypes.includes(obj.__typename)
    }
    


    const Label_possibleTypes: string[] = ['Label']
    export const isLabel = (obj?: { __typename?: any } | null): obj is Label => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLabel"')
      return Label_possibleTypes.includes(obj.__typename)
    }
    


    const LabelRichText_possibleTypes: string[] = ['LabelRichText']
    export const isLabelRichText = (obj?: { __typename?: any } | null): obj is LabelRichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLabelRichText"')
      return LabelRichText_possibleTypes.includes(obj.__typename)
    }
    


    const LegalStuff_possibleTypes: string[] = ['LegalStuff']
    export const isLegalStuff = (obj?: { __typename?: any } | null): obj is LegalStuff => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLegalStuff"')
      return LegalStuff_possibleTypes.includes(obj.__typename)
    }
    


    const LimitComponent_possibleTypes: string[] = ['LimitComponent']
    export const isLimitComponent = (obj?: { __typename?: any } | null): obj is LimitComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLimitComponent"')
      return LimitComponent_possibleTypes.includes(obj.__typename)
    }
    


    const LineItems_possibleTypes: string[] = ['LineItems']
    export const isLineItems = (obj?: { __typename?: any } | null): obj is LineItems => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLineItems"')
      return LineItems_possibleTypes.includes(obj.__typename)
    }
    


    const LineItems_1_possibleTypes: string[] = ['LineItems_1']
    export const isLineItems_1 = (obj?: { __typename?: any } | null): obj is LineItems_1 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLineItems_1"')
      return LineItems_1_possibleTypes.includes(obj.__typename)
    }
    


    const ListMeta_possibleTypes: string[] = ['ListMeta']
    export const isListMeta = (obj?: { __typename?: any } | null): obj is ListMeta => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isListMeta"')
      return ListMeta_possibleTypes.includes(obj.__typename)
    }
    


    const Manifesto_possibleTypes: string[] = ['Manifesto']
    export const isManifesto = (obj?: { __typename?: any } | null): obj is Manifesto => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isManifesto"')
      return Manifesto_possibleTypes.includes(obj.__typename)
    }
    


    const Manifesto_1_possibleTypes: string[] = ['Manifesto_1']
    export const isManifesto_1 = (obj?: { __typename?: any } | null): obj is Manifesto_1 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isManifesto_1"')
      return Manifesto_1_possibleTypes.includes(obj.__typename)
    }
    


    const MarketingHeaderComponent_possibleTypes: string[] = ['MarketingHeaderComponent']
    export const isMarketingHeaderComponent = (obj?: { __typename?: any } | null): obj is MarketingHeaderComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarketingHeaderComponent"')
      return MarketingHeaderComponent_possibleTypes.includes(obj.__typename)
    }
    


    const MediaBlock_possibleTypes: string[] = ['BlockAudio','BlockFile','BlockImage','BlockVideo']
    export const isMediaBlock = (obj?: { __typename?: any } | null): obj is MediaBlock => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaBlock"')
      return MediaBlock_possibleTypes.includes(obj.__typename)
    }
    


    const MediaBlockUnion_possibleTypes: string[] = ['BlockAudio','BlockFile','BlockImage','BlockVideo']
    export const isMediaBlockUnion = (obj?: { __typename?: any } | null): obj is MediaBlockUnion => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaBlockUnion"')
      return MediaBlockUnion_possibleTypes.includes(obj.__typename)
    }
    


    const MetaComponent_possibleTypes: string[] = ['MetaComponent']
    export const isMetaComponent = (obj?: { __typename?: any } | null): obj is MetaComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMetaComponent"')
      return MetaComponent_possibleTypes.includes(obj.__typename)
    }
    


    const MiddleLinks_possibleTypes: string[] = ['MiddleLinks']
    export const isMiddleLinks = (obj?: { __typename?: any } | null): obj is MiddleLinks => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMiddleLinks"')
      return MiddleLinks_possibleTypes.includes(obj.__typename)
    }
    


    const MiddleLinksItem_possibleTypes: string[] = ['MiddleLinksItem']
    export const isMiddleLinksItem = (obj?: { __typename?: any } | null): obj is MiddleLinksItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMiddleLinksItem"')
      return MiddleLinksItem_possibleTypes.includes(obj.__typename)
    }
    


    const MiscAppEvents_possibleTypes: string[] = ['MiscAppEvents']
    export const isMiscAppEvents = (obj?: { __typename?: any } | null): obj is MiscAppEvents => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMiscAppEvents"')
      return MiscAppEvents_possibleTypes.includes(obj.__typename)
    }
    


    const Miscellaneous_possibleTypes: string[] = ['Miscellaneous']
    export const isMiscellaneous = (obj?: { __typename?: any } | null): obj is Miscellaneous => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMiscellaneous"')
      return Miscellaneous_possibleTypes.includes(obj.__typename)
    }
    


    const Mutation_possibleTypes: string[] = ['Mutation']
    export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
      return Mutation_possibleTypes.includes(obj.__typename)
    }
    


    const Narration_possibleTypes: string[] = ['Narration']
    export const isNarration = (obj?: { __typename?: any } | null): obj is Narration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNarration"')
      return Narration_possibleTypes.includes(obj.__typename)
    }
    


    const NewSub_possibleTypes: string[] = ['NewSub']
    export const isNewSub = (obj?: { __typename?: any } | null): obj is NewSub => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNewSub"')
      return NewSub_possibleTypes.includes(obj.__typename)
    }
    


    const Newsletter_possibleTypes: string[] = ['Newsletter']
    export const isNewsletter = (obj?: { __typename?: any } | null): obj is Newsletter => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNewsletter"')
      return Newsletter_possibleTypes.includes(obj.__typename)
    }
    


    const Note_possibleTypes: string[] = ['Note']
    export const isNote = (obj?: { __typename?: any } | null): obj is Note => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNote"')
      return Note_possibleTypes.includes(obj.__typename)
    }
    


    const NoteRichText_possibleTypes: string[] = ['NoteRichText']
    export const isNoteRichText = (obj?: { __typename?: any } | null): obj is NoteRichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNoteRichText"')
      return NoteRichText_possibleTypes.includes(obj.__typename)
    }
    


    const Onboarding_possibleTypes: string[] = ['Onboarding']
    export const isOnboarding = (obj?: { __typename?: any } | null): obj is Onboarding => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOnboarding"')
      return Onboarding_possibleTypes.includes(obj.__typename)
    }
    


    const PageAnalyticsComponent_possibleTypes: string[] = ['PageAnalyticsComponent']
    export const isPageAnalyticsComponent = (obj?: { __typename?: any } | null): obj is PageAnalyticsComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPageAnalyticsComponent"')
      return PageAnalyticsComponent_possibleTypes.includes(obj.__typename)
    }
    


    const PageViews_possibleTypes: string[] = ['PageViews']
    export const isPageViews = (obj?: { __typename?: any } | null): obj is PageViews => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPageViews"')
      return PageViews_possibleTypes.includes(obj.__typename)
    }
    


    const PaymentModeComponent_possibleTypes: string[] = ['PaymentModeComponent']
    export const isPaymentModeComponent = (obj?: { __typename?: any } | null): obj is PaymentModeComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPaymentModeComponent"')
      return PaymentModeComponent_possibleTypes.includes(obj.__typename)
    }
    


    const PaymentSwitch_possibleTypes: string[] = ['PaymentSwitch']
    export const isPaymentSwitch = (obj?: { __typename?: any } | null): obj is PaymentSwitch => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPaymentSwitch"')
      return PaymentSwitch_possibleTypes.includes(obj.__typename)
    }
    


    const PlanLineItemComponent_possibleTypes: string[] = ['PlanLineItemComponent']
    export const isPlanLineItemComponent = (obj?: { __typename?: any } | null): obj is PlanLineItemComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlanLineItemComponent"')
      return PlanLineItemComponent_possibleTypes.includes(obj.__typename)
    }
    


    const PlanNameComponent_possibleTypes: string[] = ['PlanNameComponent']
    export const isPlanNameComponent = (obj?: { __typename?: any } | null): obj is PlanNameComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlanNameComponent"')
      return PlanNameComponent_possibleTypes.includes(obj.__typename)
    }
    


    const Plans_possibleTypes: string[] = ['Plans']
    export const isPlans = (obj?: { __typename?: any } | null): obj is Plans => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlans"')
      return Plans_possibleTypes.includes(obj.__typename)
    }
    


    const PlansComparisonTable_possibleTypes: string[] = ['PlansComparisonTable']
    export const isPlansComparisonTable = (obj?: { __typename?: any } | null): obj is PlansComparisonTable => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlansComparisonTable"')
      return PlansComparisonTable_possibleTypes.includes(obj.__typename)
    }
    


    const Posts_possibleTypes: string[] = ['Posts']
    export const isPosts = (obj?: { __typename?: any } | null): obj is Posts => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPosts"')
      return Posts_possibleTypes.includes(obj.__typename)
    }
    


    const PriceComponent_possibleTypes: string[] = ['PriceComponent']
    export const isPriceComponent = (obj?: { __typename?: any } | null): obj is PriceComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPriceComponent"')
      return PriceComponent_possibleTypes.includes(obj.__typename)
    }
    


    const Pricing_possibleTypes: string[] = ['Pricing']
    export const isPricing = (obj?: { __typename?: any } | null): obj is Pricing => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPricing"')
      return Pricing_possibleTypes.includes(obj.__typename)
    }
    


    const PricingBanner_possibleTypes: string[] = ['PricingBanner']
    export const isPricingBanner = (obj?: { __typename?: any } | null): obj is PricingBanner => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPricingBanner"')
      return PricingBanner_possibleTypes.includes(obj.__typename)
    }
    


    const PricingPlanComponent_possibleTypes: string[] = ['PricingPlanComponent']
    export const isPricingPlanComponent = (obj?: { __typename?: any } | null): obj is PricingPlanComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPricingPlanComponent"')
      return PricingPlanComponent_possibleTypes.includes(obj.__typename)
    }
    


    const Privacy_possibleTypes: string[] = ['Privacy']
    export const isPrivacy = (obj?: { __typename?: any } | null): obj is Privacy => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPrivacy"')
      return Privacy_possibleTypes.includes(obj.__typename)
    }
    


    const PromptV11_possibleTypes: string[] = ['PromptV11']
    export const isPromptV11 = (obj?: { __typename?: any } | null): obj is PromptV11 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPromptV11"')
      return PromptV11_possibleTypes.includes(obj.__typename)
    }
    


    const PromptV11RichText_possibleTypes: string[] = ['PromptV11RichText']
    export const isPromptV11RichText = (obj?: { __typename?: any } | null): obj is PromptV11RichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPromptV11RichText"')
      return PromptV11RichText_possibleTypes.includes(obj.__typename)
    }
    


    const Prompts_possibleTypes: string[] = ['Prompts']
    export const isPrompts = (obj?: { __typename?: any } | null): obj is Prompts => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPrompts"')
      return Prompts_possibleTypes.includes(obj.__typename)
    }
    


    const Pros_possibleTypes: string[] = ['Pros']
    export const isPros = (obj?: { __typename?: any } | null): obj is Pros => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPros"')
      return Pros_possibleTypes.includes(obj.__typename)
    }
    


    const ProsRichText_possibleTypes: string[] = ['ProsRichText']
    export const isProsRichText = (obj?: { __typename?: any } | null): obj is ProsRichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProsRichText"')
      return ProsRichText_possibleTypes.includes(obj.__typename)
    }
    


    const Query_possibleTypes: string[] = ['Query']
    export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
      return Query_possibleTypes.includes(obj.__typename)
    }
    


    const Quote_possibleTypes: string[] = ['Quote']
    export const isQuote = (obj?: { __typename?: any } | null): obj is Quote => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuote"')
      return Quote_possibleTypes.includes(obj.__typename)
    }
    


    const QuoteComponent_possibleTypes: string[] = ['QuoteComponent']
    export const isQuoteComponent = (obj?: { __typename?: any } | null): obj is QuoteComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuoteComponent"')
      return QuoteComponent_possibleTypes.includes(obj.__typename)
    }
    


    const QuoteRichText_possibleTypes: string[] = ['QuoteRichText']
    export const isQuoteRichText = (obj?: { __typename?: any } | null): obj is QuoteRichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuoteRichText"')
      return QuoteRichText_possibleTypes.includes(obj.__typename)
    }
    


    const RepoLlmsTxt_possibleTypes: string[] = ['RepoLlmsTxt']
    export const isRepoLlmsTxt = (obj?: { __typename?: any } | null): obj is RepoLlmsTxt => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRepoLlmsTxt"')
      return RepoLlmsTxt_possibleTypes.includes(obj.__typename)
    }
    


    const RepoLlmsTxtRichText_possibleTypes: string[] = ['RepoLlmsTxtRichText']
    export const isRepoLlmsTxtRichText = (obj?: { __typename?: any } | null): obj is RepoLlmsTxtRichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRepoLlmsTxtRichText"')
      return RepoLlmsTxtRichText_possibleTypes.includes(obj.__typename)
    }
    


    const RepoSchemaComponent_possibleTypes: string[] = ['RepoSchemaComponent']
    export const isRepoSchemaComponent = (obj?: { __typename?: any } | null): obj is RepoSchemaComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRepoSchemaComponent"')
      return RepoSchemaComponent_possibleTypes.includes(obj.__typename)
    }
    


    const RepoSchemaComponent_1_possibleTypes: string[] = ['RepoSchemaComponent_1']
    export const isRepoSchemaComponent_1 = (obj?: { __typename?: any } | null): obj is RepoSchemaComponent_1 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRepoSchemaComponent_1"')
      return RepoSchemaComponent_1_possibleTypes.includes(obj.__typename)
    }
    


    const RepoSchemaComponent_2_possibleTypes: string[] = ['RepoSchemaComponent_2']
    export const isRepoSchemaComponent_2 = (obj?: { __typename?: any } | null): obj is RepoSchemaComponent_2 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRepoSchemaComponent_2"')
      return RepoSchemaComponent_2_possibleTypes.includes(obj.__typename)
    }
    


    const RepoSys_possibleTypes: string[] = ['RepoSys']
    export const isRepoSys = (obj?: { __typename?: any } | null): obj is RepoSys => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRepoSys"')
      return RepoSys_possibleTypes.includes(obj.__typename)
    }
    


    const RepoTitleComponent_possibleTypes: string[] = ['RepoTitleComponent']
    export const isRepoTitleComponent = (obj?: { __typename?: any } | null): obj is RepoTitleComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRepoTitleComponent"')
      return RepoTitleComponent_possibleTypes.includes(obj.__typename)
    }
    


    const RichTextJson_possibleTypes: string[] = ['AboutBasehubRichText','BaseRichTextJson','BodyRichText','Body_2RichText','CardTagRichText','ContentRichText','Content_1RichText','Content_2RichText','Content_3RichText','Content_4RichText','Content_5RichText','Content_6RichText','Content_7RichText','Content_8RichText','Content_9RichText','Content_10RichText','ContextForLlmRichText','DescriptionRichText','Description_1RichText','HeroSubtitleRichText','HeroTitleRichText','InvitationRichText','LabelRichText','NoteRichText','PromptV11RichText','ProsRichText','QuoteRichText','RepoLlmsTxtRichText','ScriptRichText','SubtitleRichText','Subtitle_1RichText','Subtitle_2RichText','Subtitle_3RichText','Subtitle_4RichText','Subtitle_5RichText','SwitchLabelRichText','TitleRichText','Title_1RichText']
    export const isRichTextJson = (obj?: { __typename?: any } | null): obj is RichTextJson => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRichTextJson"')
      return RichTextJson_possibleTypes.includes(obj.__typename)
    }
    


    const Roadmap_possibleTypes: string[] = ['Roadmap']
    export const isRoadmap = (obj?: { __typename?: any } | null): obj is Roadmap => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRoadmap"')
      return Roadmap_possibleTypes.includes(obj.__typename)
    }
    


    const RoadmapItem_possibleTypes: string[] = ['RoadmapItem']
    export const isRoadmapItem = (obj?: { __typename?: any } | null): obj is RoadmapItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRoadmapItem"')
      return RoadmapItem_possibleTypes.includes(obj.__typename)
    }
    


    const Roadmap_1_possibleTypes: string[] = ['Roadmap_1']
    export const isRoadmap_1 = (obj?: { __typename?: any } | null): obj is Roadmap_1 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRoadmap_1"')
      return Roadmap_1_possibleTypes.includes(obj.__typename)
    }
    


    const Script_possibleTypes: string[] = ['Script']
    export const isScript = (obj?: { __typename?: any } | null): obj is Script => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isScript"')
      return Script_possibleTypes.includes(obj.__typename)
    }
    


    const ScriptRichText_possibleTypes: string[] = ['ScriptRichText']
    export const isScriptRichText = (obj?: { __typename?: any } | null): obj is ScriptRichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isScriptRichText"')
      return ScriptRichText_possibleTypes.includes(obj.__typename)
    }
    


    const Sections_possibleTypes: string[] = ['Sections']
    export const isSections = (obj?: { __typename?: any } | null): obj is Sections => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSections"')
      return Sections_possibleTypes.includes(obj.__typename)
    }
    


    const Send_possibleTypes: string[] = ['Send']
    export const isSend = (obj?: { __typename?: any } | null): obj is Send => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSend"')
      return Send_possibleTypes.includes(obj.__typename)
    }
    


    const SendToDiscord_possibleTypes: string[] = ['SendToDiscord']
    export const isSendToDiscord = (obj?: { __typename?: any } | null): obj is SendToDiscord => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSendToDiscord"')
      return SendToDiscord_possibleTypes.includes(obj.__typename)
    }
    


    const Shoutouts_possibleTypes: string[] = ['Shoutouts']
    export const isShoutouts = (obj?: { __typename?: any } | null): obj is Shoutouts => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isShoutouts"')
      return Shoutouts_possibleTypes.includes(obj.__typename)
    }
    


    const Snippets_possibleTypes: string[] = ['Snippets']
    export const isSnippets = (obj?: { __typename?: any } | null): obj is Snippets => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSnippets"')
      return Snippets_possibleTypes.includes(obj.__typename)
    }
    


    const SnippetsItem_possibleTypes: string[] = ['SnippetsItem']
    export const isSnippetsItem = (obj?: { __typename?: any } | null): obj is SnippetsItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSnippetsItem"')
      return SnippetsItem_possibleTypes.includes(obj.__typename)
    }
    


    const Steps_possibleTypes: string[] = ['Steps']
    export const isSteps = (obj?: { __typename?: any } | null): obj is Steps => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSteps"')
      return Steps_possibleTypes.includes(obj.__typename)
    }
    


    const StepsItem_possibleTypes: string[] = ['StepsItem']
    export const isStepsItem = (obj?: { __typename?: any } | null): obj is StepsItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStepsItem"')
      return StepsItem_possibleTypes.includes(obj.__typename)
    }
    


    const Steps_1_possibleTypes: string[] = ['Steps_1']
    export const isSteps_1 = (obj?: { __typename?: any } | null): obj is Steps_1 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSteps_1"')
      return Steps_1_possibleTypes.includes(obj.__typename)
    }
    


    const Subtitle_possibleTypes: string[] = ['Subtitle']
    export const isSubtitle = (obj?: { __typename?: any } | null): obj is Subtitle => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSubtitle"')
      return Subtitle_possibleTypes.includes(obj.__typename)
    }
    


    const SubtitleRichText_possibleTypes: string[] = ['SubtitleRichText']
    export const isSubtitleRichText = (obj?: { __typename?: any } | null): obj is SubtitleRichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSubtitleRichText"')
      return SubtitleRichText_possibleTypes.includes(obj.__typename)
    }
    


    const Subtitle_1_possibleTypes: string[] = ['Subtitle_1']
    export const isSubtitle_1 = (obj?: { __typename?: any } | null): obj is Subtitle_1 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSubtitle_1"')
      return Subtitle_1_possibleTypes.includes(obj.__typename)
    }
    


    const Subtitle_1RichText_possibleTypes: string[] = ['Subtitle_1RichText']
    export const isSubtitle_1RichText = (obj?: { __typename?: any } | null): obj is Subtitle_1RichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSubtitle_1RichText"')
      return Subtitle_1RichText_possibleTypes.includes(obj.__typename)
    }
    


    const Subtitle_2_possibleTypes: string[] = ['Subtitle_2']
    export const isSubtitle_2 = (obj?: { __typename?: any } | null): obj is Subtitle_2 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSubtitle_2"')
      return Subtitle_2_possibleTypes.includes(obj.__typename)
    }
    


    const Subtitle_2RichText_possibleTypes: string[] = ['Subtitle_2RichText']
    export const isSubtitle_2RichText = (obj?: { __typename?: any } | null): obj is Subtitle_2RichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSubtitle_2RichText"')
      return Subtitle_2RichText_possibleTypes.includes(obj.__typename)
    }
    


    const Subtitle_3_possibleTypes: string[] = ['Subtitle_3']
    export const isSubtitle_3 = (obj?: { __typename?: any } | null): obj is Subtitle_3 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSubtitle_3"')
      return Subtitle_3_possibleTypes.includes(obj.__typename)
    }
    


    const Subtitle_3RichText_possibleTypes: string[] = ['Subtitle_3RichText']
    export const isSubtitle_3RichText = (obj?: { __typename?: any } | null): obj is Subtitle_3RichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSubtitle_3RichText"')
      return Subtitle_3RichText_possibleTypes.includes(obj.__typename)
    }
    


    const Subtitle_4_possibleTypes: string[] = ['Subtitle_4']
    export const isSubtitle_4 = (obj?: { __typename?: any } | null): obj is Subtitle_4 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSubtitle_4"')
      return Subtitle_4_possibleTypes.includes(obj.__typename)
    }
    


    const Subtitle_4RichText_possibleTypes: string[] = ['Subtitle_4RichText']
    export const isSubtitle_4RichText = (obj?: { __typename?: any } | null): obj is Subtitle_4RichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSubtitle_4RichText"')
      return Subtitle_4RichText_possibleTypes.includes(obj.__typename)
    }
    


    const Subtitle_5_possibleTypes: string[] = ['Subtitle_5']
    export const isSubtitle_5 = (obj?: { __typename?: any } | null): obj is Subtitle_5 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSubtitle_5"')
      return Subtitle_5_possibleTypes.includes(obj.__typename)
    }
    


    const Subtitle_5RichText_possibleTypes: string[] = ['Subtitle_5RichText']
    export const isSubtitle_5RichText = (obj?: { __typename?: any } | null): obj is Subtitle_5RichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSubtitle_5RichText"')
      return Subtitle_5RichText_possibleTypes.includes(obj.__typename)
    }
    


    const SwitchLabel_possibleTypes: string[] = ['SwitchLabel']
    export const isSwitchLabel = (obj?: { __typename?: any } | null): obj is SwitchLabel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSwitchLabel"')
      return SwitchLabel_possibleTypes.includes(obj.__typename)
    }
    


    const SwitchLabelRichText_possibleTypes: string[] = ['SwitchLabelRichText']
    export const isSwitchLabelRichText = (obj?: { __typename?: any } | null): obj is SwitchLabelRichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSwitchLabelRichText"')
      return SwitchLabelRichText_possibleTypes.includes(obj.__typename)
    }
    


    const TemplateAuthors_possibleTypes: string[] = ['TemplateAuthors']
    export const isTemplateAuthors = (obj?: { __typename?: any } | null): obj is TemplateAuthors => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTemplateAuthors"')
      return TemplateAuthors_possibleTypes.includes(obj.__typename)
    }
    


    const TemplateAuthorsItem_possibleTypes: string[] = ['TemplateAuthorsItem']
    export const isTemplateAuthorsItem = (obj?: { __typename?: any } | null): obj is TemplateAuthorsItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTemplateAuthorsItem"')
      return TemplateAuthorsItem_possibleTypes.includes(obj.__typename)
    }
    


    const Templates_possibleTypes: string[] = ['Templates']
    export const isTemplates = (obj?: { __typename?: any } | null): obj is Templates => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTemplates"')
      return Templates_possibleTypes.includes(obj.__typename)
    }
    


    const TemplatesItem_possibleTypes: string[] = ['TemplatesItem']
    export const isTemplatesItem = (obj?: { __typename?: any } | null): obj is TemplatesItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTemplatesItem"')
      return TemplatesItem_possibleTypes.includes(obj.__typename)
    }
    


    const Templates_1_possibleTypes: string[] = ['Templates_1']
    export const isTemplates_1 = (obj?: { __typename?: any } | null): obj is Templates_1 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTemplates_1"')
      return Templates_1_possibleTypes.includes(obj.__typename)
    }
    


    const Terms_possibleTypes: string[] = ['Terms']
    export const isTerms = (obj?: { __typename?: any } | null): obj is Terms => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTerms"')
      return Terms_possibleTypes.includes(obj.__typename)
    }
    


    const Testimonials_possibleTypes: string[] = ['Testimonials']
    export const isTestimonials = (obj?: { __typename?: any } | null): obj is Testimonials => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTestimonials"')
      return Testimonials_possibleTypes.includes(obj.__typename)
    }
    


    const TextWithColorComponent_possibleTypes: string[] = ['TextWithColorComponent']
    export const isTextWithColorComponent = (obj?: { __typename?: any } | null): obj is TextWithColorComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTextWithColorComponent"')
      return TextWithColorComponent_possibleTypes.includes(obj.__typename)
    }
    


    const ThreadComponent_possibleTypes: string[] = ['ThreadComponent']
    export const isThreadComponent = (obj?: { __typename?: any } | null): obj is ThreadComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isThreadComponent"')
      return ThreadComponent_possibleTypes.includes(obj.__typename)
    }
    


    const Title_possibleTypes: string[] = ['Title']
    export const isTitle = (obj?: { __typename?: any } | null): obj is Title => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTitle"')
      return Title_possibleTypes.includes(obj.__typename)
    }
    


    const TitleRichText_possibleTypes: string[] = ['TitleRichText']
    export const isTitleRichText = (obj?: { __typename?: any } | null): obj is TitleRichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTitleRichText"')
      return TitleRichText_possibleTypes.includes(obj.__typename)
    }
    


    const Title_1_possibleTypes: string[] = ['Title_1']
    export const isTitle_1 = (obj?: { __typename?: any } | null): obj is Title_1 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTitle_1"')
      return Title_1_possibleTypes.includes(obj.__typename)
    }
    


    const Title_1RichText_possibleTypes: string[] = ['Title_1RichText']
    export const isTitle_1RichText = (obj?: { __typename?: any } | null): obj is Title_1RichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTitle_1RichText"')
      return Title_1RichText_possibleTypes.includes(obj.__typename)
    }
    


    const TokenComponent_possibleTypes: string[] = ['TokenComponent']
    export const isTokenComponent = (obj?: { __typename?: any } | null): obj is TokenComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTokenComponent"')
      return TokenComponent_possibleTypes.includes(obj.__typename)
    }
    


    const TokenComponent_1_possibleTypes: string[] = ['TokenComponent_1']
    export const isTokenComponent_1 = (obj?: { __typename?: any } | null): obj is TokenComponent_1 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTokenComponent_1"')
      return TokenComponent_1_possibleTypes.includes(obj.__typename)
    }
    


    const TransactionStatus_possibleTypes: string[] = ['TransactionStatus']
    export const isTransactionStatus = (obj?: { __typename?: any } | null): obj is TransactionStatus => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTransactionStatus"')
      return TransactionStatus_possibleTypes.includes(obj.__typename)
    }
    


    const TryLightModeComponent_possibleTypes: string[] = ['TryLightModeComponent']
    export const isTryLightModeComponent = (obj?: { __typename?: any } | null): obj is TryLightModeComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTryLightModeComponent"')
      return TryLightModeComponent_possibleTypes.includes(obj.__typename)
    }
    


    const UnionAsNewTabComponentAsFloatingBannerComponent_possibleTypes: string[] = ['AsFloatingBannerComponent','AsNewTabComponent']
    export const isUnionAsNewTabComponentAsFloatingBannerComponent = (obj?: { __typename?: any } | null): obj is UnionAsNewTabComponentAsFloatingBannerComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUnionAsNewTabComponentAsFloatingBannerComponent"')
      return UnionAsNewTabComponentAsFloatingBannerComponent_possibleTypes.includes(obj.__typename)
    }
    


    const UnionBlogpostTemplateComponentChangelogTemplateComponent_possibleTypes: string[] = ['BlogpostTemplateComponent','ChangelogTemplateComponent']
    export const isUnionBlogpostTemplateComponentChangelogTemplateComponent = (obj?: { __typename?: any } | null): obj is UnionBlogpostTemplateComponentChangelogTemplateComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUnionBlogpostTemplateComponentChangelogTemplateComponent"')
      return UnionBlogpostTemplateComponentChangelogTemplateComponent_possibleTypes.includes(obj.__typename)
    }
    


    const UnionBooleanFeatureComponentFreeTextComponentLimitComponent_possibleTypes: string[] = ['BooleanFeatureComponent','FreeTextComponent','LimitComponent']
    export const isUnionBooleanFeatureComponentFreeTextComponentLimitComponent = (obj?: { __typename?: any } | null): obj is UnionBooleanFeatureComponentFreeTextComponentLimitComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUnionBooleanFeatureComponentFreeTextComponentLimitComponent"')
      return UnionBooleanFeatureComponentFreeTextComponentLimitComponent_possibleTypes.includes(obj.__typename)
    }
    


    const UnionCalloutComponent_possibleTypes: string[] = ['CalloutComponent']
    export const isUnionCalloutComponent = (obj?: { __typename?: any } | null): obj is UnionCalloutComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUnionCalloutComponent"')
      return UnionCalloutComponent_possibleTypes.includes(obj.__typename)
    }
    


    const UnionCodeSnippetComponentCalloutComponent_possibleTypes: string[] = ['CalloutComponent','CodeSnippetComponent']
    export const isUnionCodeSnippetComponentCalloutComponent = (obj?: { __typename?: any } | null): obj is UnionCodeSnippetComponentCalloutComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUnionCodeSnippetComponentCalloutComponent"')
      return UnionCodeSnippetComponentCalloutComponent_possibleTypes.includes(obj.__typename)
    }
    


    const UnionComparisonTableComponentComparisonBentoComponentComparisonStepsComponent_possibleTypes: string[] = ['ComparisonBentoComponent','ComparisonStepsComponent','ComparisonTableComponent']
    export const isUnionComparisonTableComponentComparisonBentoComponentComparisonStepsComponent = (obj?: { __typename?: any } | null): obj is UnionComparisonTableComponentComparisonBentoComponentComparisonStepsComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUnionComparisonTableComponentComparisonBentoComponentComparisonStepsComponent"')
      return UnionComparisonTableComponentComparisonBentoComponentComparisonStepsComponent_possibleTypes.includes(obj.__typename)
    }
    


    const UnionPlanLineItemComponentFeatureComponent_1HeroCustomersItemAuthorsItemHeadersItemPriceComponentTemplateAuthorsItemFeaturesItemTryLightModeComponentBlogpostTemplateComponentMiddleLinksItemPaymentModeComponentFeaturesLimitsComponentGuideStepComponentPricingPlanComponentWhimsicalEmbedComponentSnippetsItemBooleanFeatureComponentComparisonItemComponentRoadmapItemBuildTimeRedirectsItemQuoteComponentFeaturesItem_1FaqsItemFreeTextComponentLimitComponentCodeSnippetWithDifferentLanguagesComponentAsNewTabComponentCodeSnippetComponentFeatureComponentMarketingHeaderComponentDemoComponentCoverImageComponentCalloutComponentAsFloatingBannerComponentButtonComponentGuideComponentMetaComponentTextWithColorComponentChangelogTemplateComponent_possibleTypes: string[] = ['AsFloatingBannerComponent','AsNewTabComponent','AuthorsItem','BlogpostTemplateComponent','BooleanFeatureComponent','BuildTimeRedirectsItem','ButtonComponent','CalloutComponent','ChangelogTemplateComponent','CodeSnippetComponent','CodeSnippetWithDifferentLanguagesComponent','ComparisonItemComponent','CoverImageComponent','DemoComponent','FaqsItem','FeatureComponent','FeatureComponent_1','FeaturesItem','FeaturesItem_1','FeaturesLimitsComponent','FreeTextComponent','GuideComponent','GuideStepComponent','HeadersItem','HeroCustomersItem','LimitComponent','MarketingHeaderComponent','MetaComponent','MiddleLinksItem','PaymentModeComponent','PlanLineItemComponent','PriceComponent','PricingPlanComponent','QuoteComponent','RoadmapItem','SnippetsItem','TemplateAuthorsItem','TextWithColorComponent','TryLightModeComponent','WhimsicalEmbedComponent']
    export const isUnionPlanLineItemComponentFeatureComponent_1HeroCustomersItemAuthorsItemHeadersItemPriceComponentTemplateAuthorsItemFeaturesItemTryLightModeComponentBlogpostTemplateComponentMiddleLinksItemPaymentModeComponentFeaturesLimitsComponentGuideStepComponentPricingPlanComponentWhimsicalEmbedComponentSnippetsItemBooleanFeatureComponentComparisonItemComponentRoadmapItemBuildTimeRedirectsItemQuoteComponentFeaturesItem_1FaqsItemFreeTextComponentLimitComponentCodeSnippetWithDifferentLanguagesComponentAsNewTabComponentCodeSnippetComponentFeatureComponentMarketingHeaderComponentDemoComponentCoverImageComponentCalloutComponentAsFloatingBannerComponentButtonComponentGuideComponentMetaComponentTextWithColorComponentChangelogTemplateComponent = (obj?: { __typename?: any } | null): obj is UnionPlanLineItemComponentFeatureComponent_1HeroCustomersItemAuthorsItemHeadersItemPriceComponentTemplateAuthorsItemFeaturesItemTryLightModeComponentBlogpostTemplateComponentMiddleLinksItemPaymentModeComponentFeaturesLimitsComponentGuideStepComponentPricingPlanComponentWhimsicalEmbedComponentSnippetsItemBooleanFeatureComponentComparisonItemComponentRoadmapItemBuildTimeRedirectsItemQuoteComponentFeaturesItem_1FaqsItemFreeTextComponentLimitComponentCodeSnippetWithDifferentLanguagesComponentAsNewTabComponentCodeSnippetComponentFeatureComponentMarketingHeaderComponentDemoComponentCoverImageComponentCalloutComponentAsFloatingBannerComponentButtonComponentGuideComponentMetaComponentTextWithColorComponentChangelogTemplateComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUnionPlanLineItemComponentFeatureComponent_1HeroCustomersItemAuthorsItemHeadersItemPriceComponentTemplateAuthorsItemFeaturesItemTryLightModeComponentBlogpostTemplateComponentMiddleLinksItemPaymentModeComponentFeaturesLimitsComponentGuideStepComponentPricingPlanComponentWhimsicalEmbedComponentSnippetsItemBooleanFeatureComponentComparisonItemComponentRoadmapItemBuildTimeRedirectsItemQuoteComponentFeaturesItem_1FaqsItemFreeTextComponentLimitComponentCodeSnippetWithDifferentLanguagesComponentAsNewTabComponentCodeSnippetComponentFeatureComponentMarketingHeaderComponentDemoComponentCoverImageComponentCalloutComponentAsFloatingBannerComponentButtonComponentGuideComponentMetaComponentTextWithColorComponentChangelogTemplateComponent"')
      return UnionPlanLineItemComponentFeatureComponent_1HeroCustomersItemAuthorsItemHeadersItemPriceComponentTemplateAuthorsItemFeaturesItemTryLightModeComponentBlogpostTemplateComponentMiddleLinksItemPaymentModeComponentFeaturesLimitsComponentGuideStepComponentPricingPlanComponentWhimsicalEmbedComponentSnippetsItemBooleanFeatureComponentComparisonItemComponentRoadmapItemBuildTimeRedirectsItemQuoteComponentFeaturesItem_1FaqsItemFreeTextComponentLimitComponentCodeSnippetWithDifferentLanguagesComponentAsNewTabComponentCodeSnippetComponentFeatureComponentMarketingHeaderComponentDemoComponentCoverImageComponentCalloutComponentAsFloatingBannerComponentButtonComponentGuideComponentMetaComponentTextWithColorComponentChangelogTemplateComponent_possibleTypes.includes(obj.__typename)
    }
    


    const UnionPlanNameComponent_possibleTypes: string[] = ['PlanNameComponent']
    export const isUnionPlanNameComponent = (obj?: { __typename?: any } | null): obj is UnionPlanNameComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUnionPlanNameComponent"')
      return UnionPlanNameComponent_possibleTypes.includes(obj.__typename)
    }
    


    const UnionRepoTitleComponentRepoSchemaComponent_1_possibleTypes: string[] = ['RepoSchemaComponent_1','RepoTitleComponent']
    export const isUnionRepoTitleComponentRepoSchemaComponent_1 = (obj?: { __typename?: any } | null): obj is UnionRepoTitleComponentRepoSchemaComponent_1 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUnionRepoTitleComponentRepoSchemaComponent_1"')
      return UnionRepoTitleComponentRepoSchemaComponent_1_possibleTypes.includes(obj.__typename)
    }
    


    const UnionTextWithColorComponent_possibleTypes: string[] = ['TextWithColorComponent']
    export const isUnionTextWithColorComponent = (obj?: { __typename?: any } | null): obj is UnionTextWithColorComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUnionTextWithColorComponent"')
      return UnionTextWithColorComponent_possibleTypes.includes(obj.__typename)
    }
    


    const UnionThreadComponentTokenComponentRepoSchemaComponentBaseHubGuidelinesAndBlockReferenceComponent_possibleTypes: string[] = ['BaseHubGuidelinesAndBlockReferenceComponent','RepoSchemaComponent','ThreadComponent','TokenComponent']
    export const isUnionThreadComponentTokenComponentRepoSchemaComponentBaseHubGuidelinesAndBlockReferenceComponent = (obj?: { __typename?: any } | null): obj is UnionThreadComponentTokenComponentRepoSchemaComponentBaseHubGuidelinesAndBlockReferenceComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUnionThreadComponentTokenComponentRepoSchemaComponentBaseHubGuidelinesAndBlockReferenceComponent"')
      return UnionThreadComponentTokenComponentRepoSchemaComponentBaseHubGuidelinesAndBlockReferenceComponent_possibleTypes.includes(obj.__typename)
    }
    


    const UnionTokenComponent_1RepoSchemaComponent_2_possibleTypes: string[] = ['RepoSchemaComponent_2','TokenComponent_1']
    export const isUnionTokenComponent_1RepoSchemaComponent_2 = (obj?: { __typename?: any } | null): obj is UnionTokenComponent_1RepoSchemaComponent_2 => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUnionTokenComponent_1RepoSchemaComponent_2"')
      return UnionTokenComponent_1RepoSchemaComponent_2_possibleTypes.includes(obj.__typename)
    }
    


    const UnionTryLightModeComponent_possibleTypes: string[] = ['TryLightModeComponent']
    export const isUnionTryLightModeComponent = (obj?: { __typename?: any } | null): obj is UnionTryLightModeComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUnionTryLightModeComponent"')
      return UnionTryLightModeComponent_possibleTypes.includes(obj.__typename)
    }
    


    const Variant_possibleTypes: string[] = ['Variant']
    export const isVariant = (obj?: { __typename?: any } | null): obj is Variant => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVariant"')
      return Variant_possibleTypes.includes(obj.__typename)
    }
    


    const WhimsicalEmbedComponent_possibleTypes: string[] = ['WhimsicalEmbedComponent']
    export const isWhimsicalEmbedComponent = (obj?: { __typename?: any } | null): obj is WhimsicalEmbedComponent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWhimsicalEmbedComponent"')
      return WhimsicalEmbedComponent_possibleTypes.includes(obj.__typename)
    }
    


    const _components_possibleTypes: string[] = ['_components']
    export const is_components = (obj?: { __typename?: any } | null): obj is _components => {
      if (!obj?.__typename) throw new Error('__typename is missing in "is_components"')
      return _components_possibleTypes.includes(obj.__typename)
    }
    


    const asFloatingBannerComponent_AsList_possibleTypes: string[] = ['asFloatingBannerComponent_AsList']
    export const isasFloatingBannerComponent_AsList = (obj?: { __typename?: any } | null): obj is asFloatingBannerComponent_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isasFloatingBannerComponent_AsList"')
      return asFloatingBannerComponent_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const asNewTabComponent_AsList_possibleTypes: string[] = ['asNewTabComponent_AsList']
    export const isasNewTabComponent_AsList = (obj?: { __typename?: any } | null): obj is asNewTabComponent_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isasNewTabComponent_AsList"')
      return asNewTabComponent_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const authorsItem_AsList_possibleTypes: string[] = ['authorsItem_AsList']
    export const isauthorsItem_AsList = (obj?: { __typename?: any } | null): obj is authorsItem_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isauthorsItem_AsList"')
      return authorsItem_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const baseHubGuidelinesAndBlockReferenceComponent_AsList_possibleTypes: string[] = ['baseHubGuidelinesAndBlockReferenceComponent_AsList']
    export const isbaseHubGuidelinesAndBlockReferenceComponent_AsList = (obj?: { __typename?: any } | null): obj is baseHubGuidelinesAndBlockReferenceComponent_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isbaseHubGuidelinesAndBlockReferenceComponent_AsList"')
      return baseHubGuidelinesAndBlockReferenceComponent_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const bentoGridItem_AsList_possibleTypes: string[] = ['bentoGridItem_AsList']
    export const isbentoGridItem_AsList = (obj?: { __typename?: any } | null): obj is bentoGridItem_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isbentoGridItem_AsList"')
      return bentoGridItem_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const blogpostTemplateComponent_AsList_possibleTypes: string[] = ['blogpostTemplateComponent_AsList']
    export const isblogpostTemplateComponent_AsList = (obj?: { __typename?: any } | null): obj is blogpostTemplateComponent_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isblogpostTemplateComponent_AsList"')
      return blogpostTemplateComponent_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const booleanFeatureComponent_AsList_possibleTypes: string[] = ['booleanFeatureComponent_AsList']
    export const isbooleanFeatureComponent_AsList = (obj?: { __typename?: any } | null): obj is booleanFeatureComponent_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isbooleanFeatureComponent_AsList"')
      return booleanFeatureComponent_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const buildTimeRedirectsItem_AsList_possibleTypes: string[] = ['buildTimeRedirectsItem_AsList']
    export const isbuildTimeRedirectsItem_AsList = (obj?: { __typename?: any } | null): obj is buildTimeRedirectsItem_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isbuildTimeRedirectsItem_AsList"')
      return buildTimeRedirectsItem_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const buttonComponent_AsList_possibleTypes: string[] = ['buttonComponent_AsList']
    export const isbuttonComponent_AsList = (obj?: { __typename?: any } | null): obj is buttonComponent_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isbuttonComponent_AsList"')
      return buttonComponent_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const calloutComponent_AsList_possibleTypes: string[] = ['calloutComponent_AsList']
    export const iscalloutComponent_AsList = (obj?: { __typename?: any } | null): obj is calloutComponent_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscalloutComponent_AsList"')
      return calloutComponent_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const changelogTemplateComponent_AsList_possibleTypes: string[] = ['changelogTemplateComponent_AsList']
    export const ischangelogTemplateComponent_AsList = (obj?: { __typename?: any } | null): obj is changelogTemplateComponent_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ischangelogTemplateComponent_AsList"')
      return changelogTemplateComponent_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const codeSnippetComponent_AsList_possibleTypes: string[] = ['codeSnippetComponent_AsList']
    export const iscodeSnippetComponent_AsList = (obj?: { __typename?: any } | null): obj is codeSnippetComponent_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscodeSnippetComponent_AsList"')
      return codeSnippetComponent_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const codeSnippetWithDifferentLanguagesComponent_AsList_possibleTypes: string[] = ['codeSnippetWithDifferentLanguagesComponent_AsList']
    export const iscodeSnippetWithDifferentLanguagesComponent_AsList = (obj?: { __typename?: any } | null): obj is codeSnippetWithDifferentLanguagesComponent_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscodeSnippetWithDifferentLanguagesComponent_AsList"')
      return codeSnippetWithDifferentLanguagesComponent_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const comparisonBentoComponent_AsList_possibleTypes: string[] = ['comparisonBentoComponent_AsList']
    export const iscomparisonBentoComponent_AsList = (obj?: { __typename?: any } | null): obj is comparisonBentoComponent_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscomparisonBentoComponent_AsList"')
      return comparisonBentoComponent_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const comparisonItemComponent_AsList_possibleTypes: string[] = ['comparisonItemComponent_AsList']
    export const iscomparisonItemComponent_AsList = (obj?: { __typename?: any } | null): obj is comparisonItemComponent_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscomparisonItemComponent_AsList"')
      return comparisonItemComponent_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const comparisonStepsComponent_AsList_possibleTypes: string[] = ['comparisonStepsComponent_AsList']
    export const iscomparisonStepsComponent_AsList = (obj?: { __typename?: any } | null): obj is comparisonStepsComponent_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscomparisonStepsComponent_AsList"')
      return comparisonStepsComponent_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const comparisonTableComponent_AsList_possibleTypes: string[] = ['comparisonTableComponent_AsList']
    export const iscomparisonTableComponent_AsList = (obj?: { __typename?: any } | null): obj is comparisonTableComponent_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscomparisonTableComponent_AsList"')
      return comparisonTableComponent_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const comparisonsItem_AsList_possibleTypes: string[] = ['comparisonsItem_AsList']
    export const iscomparisonsItem_AsList = (obj?: { __typename?: any } | null): obj is comparisonsItem_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscomparisonsItem_AsList"')
      return comparisonsItem_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const coverImageComponent_AsList_possibleTypes: string[] = ['coverImageComponent_AsList']
    export const iscoverImageComponent_AsList = (obj?: { __typename?: any } | null): obj is coverImageComponent_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscoverImageComponent_AsList"')
      return coverImageComponent_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const demoComponent_AsList_possibleTypes: string[] = ['demoComponent_AsList']
    export const isdemoComponent_AsList = (obj?: { __typename?: any } | null): obj is demoComponent_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdemoComponent_AsList"')
      return demoComponent_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const emailsItem_AsList_possibleTypes: string[] = ['emailsItem_AsList']
    export const isemailsItem_AsList = (obj?: { __typename?: any } | null): obj is emailsItem_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isemailsItem_AsList"')
      return emailsItem_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const faqsItem_AsList_possibleTypes: string[] = ['faqsItem_AsList']
    export const isfaqsItem_AsList = (obj?: { __typename?: any } | null): obj is faqsItem_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isfaqsItem_AsList"')
      return faqsItem_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const featureComponent1_AsList_possibleTypes: string[] = ['featureComponent1_AsList']
    export const isfeatureComponent1_AsList = (obj?: { __typename?: any } | null): obj is featureComponent1_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isfeatureComponent1_AsList"')
      return featureComponent1_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const featureComponent_AsList_possibleTypes: string[] = ['featureComponent_AsList']
    export const isfeatureComponent_AsList = (obj?: { __typename?: any } | null): obj is featureComponent_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isfeatureComponent_AsList"')
      return featureComponent_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const featuredComponent_AsList_possibleTypes: string[] = ['featuredComponent_AsList']
    export const isfeaturedComponent_AsList = (obj?: { __typename?: any } | null): obj is featuredComponent_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isfeaturedComponent_AsList"')
      return featuredComponent_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const featuresAndBenefitsItem_AsList_possibleTypes: string[] = ['featuresAndBenefitsItem_AsList']
    export const isfeaturesAndBenefitsItem_AsList = (obj?: { __typename?: any } | null): obj is featuresAndBenefitsItem_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isfeaturesAndBenefitsItem_AsList"')
      return featuresAndBenefitsItem_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const featuresItem1_AsList_possibleTypes: string[] = ['featuresItem1_AsList']
    export const isfeaturesItem1_AsList = (obj?: { __typename?: any } | null): obj is featuresItem1_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isfeaturesItem1_AsList"')
      return featuresItem1_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const featuresItem2_AsList_possibleTypes: string[] = ['featuresItem2_AsList']
    export const isfeaturesItem2_AsList = (obj?: { __typename?: any } | null): obj is featuresItem2_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isfeaturesItem2_AsList"')
      return featuresItem2_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const featuresItem_AsList_possibleTypes: string[] = ['featuresItem_AsList']
    export const isfeaturesItem_AsList = (obj?: { __typename?: any } | null): obj is featuresItem_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isfeaturesItem_AsList"')
      return featuresItem_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const featuresLimitsComponent_AsList_possibleTypes: string[] = ['featuresLimitsComponent_AsList']
    export const isfeaturesLimitsComponent_AsList = (obj?: { __typename?: any } | null): obj is featuresLimitsComponent_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isfeaturesLimitsComponent_AsList"')
      return featuresLimitsComponent_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const freeTextComponent_AsList_possibleTypes: string[] = ['freeTextComponent_AsList']
    export const isfreeTextComponent_AsList = (obj?: { __typename?: any } | null): obj is freeTextComponent_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isfreeTextComponent_AsList"')
      return freeTextComponent_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const guideComponent_AsList_possibleTypes: string[] = ['guideComponent_AsList']
    export const isguideComponent_AsList = (obj?: { __typename?: any } | null): obj is guideComponent_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isguideComponent_AsList"')
      return guideComponent_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const guideStepComponent_AsList_possibleTypes: string[] = ['guideStepComponent_AsList']
    export const isguideStepComponent_AsList = (obj?: { __typename?: any } | null): obj is guideStepComponent_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isguideStepComponent_AsList"')
      return guideStepComponent_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const headersItem_AsList_possibleTypes: string[] = ['headersItem_AsList']
    export const isheadersItem_AsList = (obj?: { __typename?: any } | null): obj is headersItem_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isheadersItem_AsList"')
      return headersItem_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const heroCustomersItem_AsList_possibleTypes: string[] = ['heroCustomersItem_AsList']
    export const isheroCustomersItem_AsList = (obj?: { __typename?: any } | null): obj is heroCustomersItem_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isheroCustomersItem_AsList"')
      return heroCustomersItem_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const integrationInstructionsItem_AsList_possibleTypes: string[] = ['integrationInstructionsItem_AsList']
    export const isintegrationInstructionsItem_AsList = (obj?: { __typename?: any } | null): obj is integrationInstructionsItem_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isintegrationInstructionsItem_AsList"')
      return integrationInstructionsItem_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const limitComponent_AsList_possibleTypes: string[] = ['limitComponent_AsList']
    export const islimitComponent_AsList = (obj?: { __typename?: any } | null): obj is limitComponent_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "islimitComponent_AsList"')
      return limitComponent_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const marketingHeaderComponent_AsList_possibleTypes: string[] = ['marketingHeaderComponent_AsList']
    export const ismarketingHeaderComponent_AsList = (obj?: { __typename?: any } | null): obj is marketingHeaderComponent_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismarketingHeaderComponent_AsList"')
      return marketingHeaderComponent_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const metaComponent_AsList_possibleTypes: string[] = ['metaComponent_AsList']
    export const ismetaComponent_AsList = (obj?: { __typename?: any } | null): obj is metaComponent_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismetaComponent_AsList"')
      return metaComponent_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const middleLinksItem_AsList_possibleTypes: string[] = ['middleLinksItem_AsList']
    export const ismiddleLinksItem_AsList = (obj?: { __typename?: any } | null): obj is middleLinksItem_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismiddleLinksItem_AsList"')
      return middleLinksItem_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const pageAnalyticsComponent_AsList_possibleTypes: string[] = ['pageAnalyticsComponent_AsList']
    export const ispageAnalyticsComponent_AsList = (obj?: { __typename?: any } | null): obj is pageAnalyticsComponent_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispageAnalyticsComponent_AsList"')
      return pageAnalyticsComponent_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const paymentModeComponent_AsList_possibleTypes: string[] = ['paymentModeComponent_AsList']
    export const ispaymentModeComponent_AsList = (obj?: { __typename?: any } | null): obj is paymentModeComponent_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispaymentModeComponent_AsList"')
      return paymentModeComponent_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const planLineItemComponent_AsList_possibleTypes: string[] = ['planLineItemComponent_AsList']
    export const isplanLineItemComponent_AsList = (obj?: { __typename?: any } | null): obj is planLineItemComponent_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isplanLineItemComponent_AsList"')
      return planLineItemComponent_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const planNameComponent_AsList_possibleTypes: string[] = ['planNameComponent_AsList']
    export const isplanNameComponent_AsList = (obj?: { __typename?: any } | null): obj is planNameComponent_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isplanNameComponent_AsList"')
      return planNameComponent_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const priceComponent_AsList_possibleTypes: string[] = ['priceComponent_AsList']
    export const ispriceComponent_AsList = (obj?: { __typename?: any } | null): obj is priceComponent_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispriceComponent_AsList"')
      return priceComponent_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const pricingPlanComponent_AsList_possibleTypes: string[] = ['pricingPlanComponent_AsList']
    export const ispricingPlanComponent_AsList = (obj?: { __typename?: any } | null): obj is pricingPlanComponent_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ispricingPlanComponent_AsList"')
      return pricingPlanComponent_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const quoteComponent_AsList_possibleTypes: string[] = ['quoteComponent_AsList']
    export const isquoteComponent_AsList = (obj?: { __typename?: any } | null): obj is quoteComponent_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isquoteComponent_AsList"')
      return quoteComponent_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const repoSchemaComponent1_AsList_possibleTypes: string[] = ['repoSchemaComponent1_AsList']
    export const isrepoSchemaComponent1_AsList = (obj?: { __typename?: any } | null): obj is repoSchemaComponent1_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isrepoSchemaComponent1_AsList"')
      return repoSchemaComponent1_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const repoSchemaComponent2_AsList_possibleTypes: string[] = ['repoSchemaComponent2_AsList']
    export const isrepoSchemaComponent2_AsList = (obj?: { __typename?: any } | null): obj is repoSchemaComponent2_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isrepoSchemaComponent2_AsList"')
      return repoSchemaComponent2_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const repoSchemaComponent_AsList_possibleTypes: string[] = ['repoSchemaComponent_AsList']
    export const isrepoSchemaComponent_AsList = (obj?: { __typename?: any } | null): obj is repoSchemaComponent_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isrepoSchemaComponent_AsList"')
      return repoSchemaComponent_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const repoTitleComponent_AsList_possibleTypes: string[] = ['repoTitleComponent_AsList']
    export const isrepoTitleComponent_AsList = (obj?: { __typename?: any } | null): obj is repoTitleComponent_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isrepoTitleComponent_AsList"')
      return repoTitleComponent_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const roadmapItem_AsList_possibleTypes: string[] = ['roadmapItem_AsList']
    export const isroadmapItem_AsList = (obj?: { __typename?: any } | null): obj is roadmapItem_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isroadmapItem_AsList"')
      return roadmapItem_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const snippetsItem_AsList_possibleTypes: string[] = ['snippetsItem_AsList']
    export const issnippetsItem_AsList = (obj?: { __typename?: any } | null): obj is snippetsItem_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issnippetsItem_AsList"')
      return snippetsItem_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const stepsItem_AsList_possibleTypes: string[] = ['stepsItem_AsList']
    export const isstepsItem_AsList = (obj?: { __typename?: any } | null): obj is stepsItem_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isstepsItem_AsList"')
      return stepsItem_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const templateAuthorsItem_AsList_possibleTypes: string[] = ['templateAuthorsItem_AsList']
    export const istemplateAuthorsItem_AsList = (obj?: { __typename?: any } | null): obj is templateAuthorsItem_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istemplateAuthorsItem_AsList"')
      return templateAuthorsItem_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const templatesItem_AsList_possibleTypes: string[] = ['templatesItem_AsList']
    export const istemplatesItem_AsList = (obj?: { __typename?: any } | null): obj is templatesItem_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istemplatesItem_AsList"')
      return templatesItem_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const textWithColorComponent_AsList_possibleTypes: string[] = ['textWithColorComponent_AsList']
    export const istextWithColorComponent_AsList = (obj?: { __typename?: any } | null): obj is textWithColorComponent_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istextWithColorComponent_AsList"')
      return textWithColorComponent_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const threadComponent_AsList_possibleTypes: string[] = ['threadComponent_AsList']
    export const isthreadComponent_AsList = (obj?: { __typename?: any } | null): obj is threadComponent_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isthreadComponent_AsList"')
      return threadComponent_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const tokenComponent1_AsList_possibleTypes: string[] = ['tokenComponent1_AsList']
    export const istokenComponent1_AsList = (obj?: { __typename?: any } | null): obj is tokenComponent1_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istokenComponent1_AsList"')
      return tokenComponent1_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const tokenComponent_AsList_possibleTypes: string[] = ['tokenComponent_AsList']
    export const istokenComponent_AsList = (obj?: { __typename?: any } | null): obj is tokenComponent_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istokenComponent_AsList"')
      return tokenComponent_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const tryLightModeComponent_AsList_possibleTypes: string[] = ['tryLightModeComponent_AsList']
    export const istryLightModeComponent_AsList = (obj?: { __typename?: any } | null): obj is tryLightModeComponent_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istryLightModeComponent_AsList"')
      return tryLightModeComponent_AsList_possibleTypes.includes(obj.__typename)
    }
    


    const whimsicalEmbedComponent_AsList_possibleTypes: string[] = ['whimsicalEmbedComponent_AsList']
    export const iswhimsicalEmbedComponent_AsList = (obj?: { __typename?: any } | null): obj is whimsicalEmbedComponent_AsList => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iswhimsicalEmbedComponent_AsList"')
      return whimsicalEmbedComponent_AsList_possibleTypes.includes(obj.__typename)
    }
    

export const enumAnalyticsKeyScope = {
   query: 'query' as const,
   send: 'send' as const
}

export const enumAsFloatingBannerComponentOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   attachTo__ASC: 'attachTo__ASC' as const,
   attachTo__DESC: 'attachTo__DESC' as const,
   body__ASC: 'body__ASC' as const,
   body__DESC: 'body__DESC' as const,
   title__ASC: 'title__ASC' as const,
   title__DESC: 'title__DESC' as const
}

export const enumAsNewTabComponentOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   value__ASC: 'value__ASC' as const,
   value__DESC: 'value__DESC' as const
}

export const enumAuthorsItemOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   avatar__ASC: 'avatar__ASC' as const,
   avatar__DESC: 'avatar__DESC' as const,
   name__ASC: 'name__ASC' as const,
   name__DESC: 'name__DESC' as const,
   role__ASC: 'role__ASC' as const,
   role__DESC: 'role__DESC' as const,
   x__ASC: 'x__ASC' as const,
   x__DESC: 'x__DESC' as const
}

export const enumBaseHubGuidelinesAndBlockReferenceComponentOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const
}

export const enumBentoGridItemOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   description__ASC: 'description__ASC' as const,
   description__DESC: 'description__DESC' as const,
   icon__ASC: 'icon__ASC' as const,
   icon__DESC: 'icon__DESC' as const
}

export const enumBlogpostTemplateComponentOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   analytics__ASC: 'analytics__ASC' as const,
   analytics__DESC: 'analytics__DESC' as const,
   authorS__ASC: 'authorS__ASC' as const,
   authorS__DESC: 'authorS__DESC' as const,
   category__ASC: 'category__ASC' as const,
   category__DESC: 'category__DESC' as const,
   content__ASC: 'content__ASC' as const,
   content__DESC: 'content__DESC' as const,
   coverImage__ASC: 'coverImage__ASC' as const,
   coverImage__DESC: 'coverImage__DESC' as const,
   isPublished__ASC: 'isPublished__ASC' as const,
   isPublished__DESC: 'isPublished__DESC' as const,
   narration__ASC: 'narration__ASC' as const,
   narration__DESC: 'narration__DESC' as const,
   publishDate__ASC: 'publishDate__ASC' as const,
   publishDate__DESC: 'publishDate__DESC' as const,
   subtitle__ASC: 'subtitle__ASC' as const,
   subtitle__DESC: 'subtitle__DESC' as const
}

export const enumBooleanFeatureComponentOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   value__ASC: 'value__ASC' as const,
   value__DESC: 'value__DESC' as const
}

export const enumBuildTimeRedirectsItemOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   destination__ASC: 'destination__ASC' as const,
   destination__DESC: 'destination__DESC' as const,
   source__ASC: 'source__ASC' as const,
   source__DESC: 'source__DESC' as const,
   statusCode__ASC: 'statusCode__ASC' as const,
   statusCode__DESC: 'statusCode__DESC' as const
}

export const enumButtonComponentOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   external__ASC: 'external__ASC' as const,
   external__DESC: 'external__DESC' as const,
   href__ASC: 'href__ASC' as const,
   href__DESC: 'href__DESC' as const,
   label__ASC: 'label__ASC' as const,
   label__DESC: 'label__DESC' as const
}

export const enumCalloutComponentOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   content__ASC: 'content__ASC' as const,
   content__DESC: 'content__DESC' as const,
   intent__ASC: 'intent__ASC' as const,
   intent__DESC: 'intent__DESC' as const
}

export const enumChangelogTemplateComponentOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   analytics__ASC: 'analytics__ASC' as const,
   analytics__DESC: 'analytics__DESC' as const,
   authorS__ASC: 'authorS__ASC' as const,
   authorS__DESC: 'authorS__DESC' as const,
   content__ASC: 'content__ASC' as const,
   content__DESC: 'content__DESC' as const,
   highlight__ASC: 'highlight__ASC' as const,
   highlight__DESC: 'highlight__DESC' as const,
   narration__ASC: 'narration__ASC' as const,
   narration__DESC: 'narration__DESC' as const,
   og__ASC: 'og__ASC' as const,
   og__DESC: 'og__DESC' as const,
   publishDate__ASC: 'publishDate__ASC' as const,
   publishDate__DESC: 'publishDate__DESC' as const,
   subtitle__ASC: 'subtitle__ASC' as const,
   subtitle__DESC: 'subtitle__DESC' as const,
   version__ASC: 'version__ASC' as const,
   version__DESC: 'version__DESC' as const
}

export const enumCodeSnippetComponentOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   code__ASC: 'code__ASC' as const,
   code__DESC: 'code__DESC' as const,
   fileName__ASC: 'fileName__ASC' as const,
   fileName__DESC: 'fileName__DESC' as const
}

export const enumCodeSnippetWithDifferentLanguagesComponentOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   snippets__ASC: 'snippets__ASC' as const,
   snippets__DESC: 'snippets__DESC' as const
}

export const enumComparisonBentoComponentOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   bentoGrid__ASC: 'bentoGrid__ASC' as const,
   bentoGrid__DESC: 'bentoGrid__DESC' as const,
   title__ASC: 'title__ASC' as const,
   title__DESC: 'title__DESC' as const
}

export const enumComparisonItemComponentOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   group__ASC: 'group__ASC' as const,
   group__DESC: 'group__DESC' as const,
   personal__ASC: 'personal__ASC' as const,
   personal__DESC: 'personal__DESC' as const,
   team__ASC: 'team__ASC' as const,
   team__DESC: 'team__DESC' as const,
   tooltipInfo__ASC: 'tooltipInfo__ASC' as const,
   tooltipInfo__DESC: 'tooltipInfo__DESC' as const,
   unlimited__ASC: 'unlimited__ASC' as const,
   unlimited__DESC: 'unlimited__DESC' as const
}

export const enumComparisonStepsComponentOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   steps__ASC: 'steps__ASC' as const,
   steps__DESC: 'steps__DESC' as const
}

export const enumComparisonTableComponentOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   featuresAndBenefits__ASC: 'featuresAndBenefits__ASC' as const,
   featuresAndBenefits__DESC: 'featuresAndBenefits__DESC' as const,
   title__ASC: 'title__ASC' as const,
   title__DESC: 'title__DESC' as const
}

export const enumComparisonsItemOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   logo__ASC: 'logo__ASC' as const,
   logo__DESC: 'logo__DESC' as const,
   sections__ASC: 'sections__ASC' as const,
   sections__DESC: 'sections__DESC' as const
}

export const enumCoverImageComponentOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   displayType__ASC: 'displayType__ASC' as const,
   displayType__DESC: 'displayType__DESC' as const,
   image__ASC: 'image__ASC' as const,
   image__DESC: 'image__DESC' as const
}

export const enumDemoComponentOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   script__ASC: 'script__ASC' as const,
   script__DESC: 'script__DESC' as const,
   video__ASC: 'video__ASC' as const,
   video__DESC: 'video__DESC' as const
}

export const enumEmailsItemOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const
}

export const enumFaqsItemOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   answer__ASC: 'answer__ASC' as const,
   answer__DESC: 'answer__DESC' as const,
   question__ASC: 'question__ASC' as const,
   question__DESC: 'question__DESC' as const
}

export const enumFeatureComponentOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   image__ASC: 'image__ASC' as const,
   image__DESC: 'image__DESC' as const,
   pros__ASC: 'pros__ASC' as const,
   pros__DESC: 'pros__DESC' as const,
   subtitle__ASC: 'subtitle__ASC' as const,
   subtitle__DESC: 'subtitle__DESC' as const,
   title__ASC: 'title__ASC' as const,
   title__DESC: 'title__DESC' as const
}

export const enumFeatureComponent1OrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const
}

export const enumFeaturedComponentOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   href__ASC: 'href__ASC' as const,
   href__DESC: 'href__DESC' as const,
   title__ASC: 'title__ASC' as const,
   title__DESC: 'title__DESC' as const
}

export const enumFeaturesAndBenefitsItemOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   basehub__ASC: 'basehub__ASC' as const,
   basehub__DESC: 'basehub__DESC' as const,
   competitor__ASC: 'competitor__ASC' as const,
   competitor__DESC: 'competitor__DESC' as const
}

export const enumFeaturesItemOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   content__ASC: 'content__ASC' as const,
   content__DESC: 'content__DESC' as const,
   image__ASC: 'image__ASC' as const,
   image__DESC: 'image__DESC' as const
}

export const enumFeaturesItem1OrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const
}

export const enumFeaturesItem2OrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const
}

export const enumFeaturesLimitsComponentOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   aiChat__ASC: 'aiChat__ASC' as const,
   aiChat__DESC: 'aiChat__DESC' as const,
   analytics__ASC: 'analytics__ASC' as const,
   analytics__DESC: 'analytics__DESC' as const,
   apiRequests__ASC: 'apiRequests__ASC' as const,
   apiRequests__DESC: 'apiRequests__DESC' as const,
   assetRequests__ASC: 'assetRequests__ASC' as const,
   assetRequests__DESC: 'assetRequests__DESC' as const,
   assetStorage__ASC: 'assetStorage__ASC' as const,
   assetStorage__DESC: 'assetStorage__DESC' as const,
   blocks__ASC: 'blocks__ASC' as const,
   blocks__DESC: 'blocks__DESC' as const,
   dedicatedSuccessManager__ASC: 'dedicatedSuccessManager__ASC' as const,
   dedicatedSuccessManager__DESC: 'dedicatedSuccessManager__DESC' as const,
   email__ASC: 'email__ASC' as const,
   email__DESC: 'email__DESC' as const,
   search__ASC: 'search__ASC' as const,
   search__DESC: 'search__DESC' as const,
   teams__ASC: 'teams__ASC' as const,
   teams__DESC: 'teams__DESC' as const,
   templates__ASC: 'templates__ASC' as const,
   templates__DESC: 'templates__DESC' as const,
   unlimitedUsage__ASC: 'unlimitedUsage__ASC' as const,
   unlimitedUsage__DESC: 'unlimitedUsage__DESC' as const,
   viewOnlyMode__ASC: 'viewOnlyMode__ASC' as const,
   viewOnlyMode__DESC: 'viewOnlyMode__DESC' as const
}

export const enumFreeTextComponentOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   value__ASC: 'value__ASC' as const,
   value__DESC: 'value__DESC' as const
}

export const enumGuideComponentOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   steps__ASC: 'steps__ASC' as const,
   steps__DESC: 'steps__DESC' as const,
   subtitle__ASC: 'subtitle__ASC' as const,
   subtitle__DESC: 'subtitle__DESC' as const,
   title__ASC: 'title__ASC' as const,
   title__DESC: 'title__DESC' as const
}

export const enumGuideStepComponentOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   completeCondition__ASC: 'completeCondition__ASC' as const,
   completeCondition__DESC: 'completeCondition__DESC' as const,
   description__ASC: 'description__ASC' as const,
   description__DESC: 'description__DESC' as const,
   icon__ASC: 'icon__ASC' as const,
   icon__DESC: 'icon__DESC' as const,
   video__ASC: 'video__ASC' as const,
   video__DESC: 'video__DESC' as const
}

export const enumHeadersItemOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   ctaLabelOverwrite__ASC: 'ctaLabelOverwrite__ASC' as const,
   ctaLabelOverwrite__DESC: 'ctaLabelOverwrite__DESC' as const,
   plan__ASC: 'plan__ASC' as const,
   plan__DESC: 'plan__DESC' as const
}

export const enumHeroCustomersItemOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   image__ASC: 'image__ASC' as const,
   image__DESC: 'image__DESC' as const
}

export const enumIntegrationInstructionsItemOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   body__ASC: 'body__ASC' as const,
   body__DESC: 'body__DESC' as const,
   icon__ASC: 'icon__ASC' as const,
   icon__DESC: 'icon__DESC' as const
}

export const enumLimitComponentOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   initial__ASC: 'initial__ASC' as const,
   initial__DESC: 'initial__DESC' as const,
   pricePerStep__ASC: 'pricePerStep__ASC' as const,
   pricePerStep__DESC: 'pricePerStep__DESC' as const,
   step__ASC: 'step__ASC' as const,
   step__DESC: 'step__DESC' as const,
   unit__ASC: 'unit__ASC' as const,
   unit__DESC: 'unit__DESC' as const
}

export const enumMarketingHeaderComponentOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   subtitle__ASC: 'subtitle__ASC' as const,
   subtitle__DESC: 'subtitle__DESC' as const,
   title__ASC: 'title__ASC' as const,
   title__DESC: 'title__DESC' as const
}

export const enumMetaComponentOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   ogImage__ASC: 'ogImage__ASC' as const,
   ogImage__DESC: 'ogImage__DESC' as const,
   subtitle__ASC: 'subtitle__ASC' as const,
   subtitle__DESC: 'subtitle__DESC' as const,
   title__ASC: 'title__ASC' as const,
   title__DESC: 'title__DESC' as const
}

export const enumMiddleLinksItemOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   href__ASC: 'href__ASC' as const,
   href__DESC: 'href__DESC' as const,
   new__ASC: 'new__ASC' as const,
   new__DESC: 'new__DESC' as const
}

export const enumPageAnalyticsComponentOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   pageViews__ASC: 'pageViews__ASC' as const,
   pageViews__DESC: 'pageViews__DESC' as const
}

export const enumPaymentModeComponentOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   cardTag__ASC: 'cardTag__ASC' as const,
   cardTag__DESC: 'cardTag__DESC' as const,
   switchLabel__ASC: 'switchLabel__ASC' as const,
   switchLabel__DESC: 'switchLabel__DESC' as const
}

export const enumPlanLineItemComponentOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const
}

export const enumPlanNameComponentOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const
}

export const enumPriceComponentOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   label__ASC: 'label__ASC' as const,
   label__DESC: 'label__DESC' as const,
   monthly__ASC: 'monthly__ASC' as const,
   monthly__DESC: 'monthly__DESC' as const,
   yearly__ASC: 'yearly__ASC' as const,
   yearly__DESC: 'yearly__DESC' as const
}

export const enumPricingPlanComponentOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   ctaNote__ASC: 'ctaNote__ASC' as const,
   ctaNote__DESC: 'ctaNote__DESC' as const,
   cta__ASC: 'cta__ASC' as const,
   cta__DESC: 'cta__DESC' as const,
   description__ASC: 'description__ASC' as const,
   description__DESC: 'description__DESC' as const,
   featuresLimits__ASC: 'featuresLimits__ASC' as const,
   featuresLimits__DESC: 'featuresLimits__DESC' as const,
   lineItems__ASC: 'lineItems__ASC' as const,
   lineItems__DESC: 'lineItems__DESC' as const,
   listTitle__ASC: 'listTitle__ASC' as const,
   listTitle__DESC: 'listTitle__DESC' as const,
   planLabel__ASC: 'planLabel__ASC' as const,
   planLabel__DESC: 'planLabel__DESC' as const,
   price__ASC: 'price__ASC' as const,
   price__DESC: 'price__DESC' as const
}

export const enumQuoteComponentOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   author__ASC: 'author__ASC' as const,
   author__DESC: 'author__DESC' as const,
   href__ASC: 'href__ASC' as const,
   href__DESC: 'href__DESC' as const,
   quote__ASC: 'quote__ASC' as const,
   quote__DESC: 'quote__DESC' as const
}

export const enumRepoSchemaComponentOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const
}

export const enumRepoSchemaComponent1OrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const
}

export const enumRepoSchemaComponent2OrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const
}

export const enumRepoTitleComponentOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const
}

export const enumRoadmapItemOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   date__ASC: 'date__ASC' as const,
   date__DESC: 'date__DESC' as const,
   subtitle__ASC: 'subtitle__ASC' as const,
   subtitle__DESC: 'subtitle__DESC' as const,
   type__ASC: 'type__ASC' as const,
   type__DESC: 'type__DESC' as const
}

export const enumSnippetsItemOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   fileName__ASC: 'fileName__ASC' as const,
   fileName__DESC: 'fileName__DESC' as const,
   snippet__ASC: 'snippet__ASC' as const,
   snippet__DESC: 'snippet__DESC' as const
}

export const enumStepsItemOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   content__ASC: 'content__ASC' as const,
   content__DESC: 'content__DESC' as const,
   featured__ASC: 'featured__ASC' as const,
   featured__DESC: 'featured__DESC' as const,
   quote__ASC: 'quote__ASC' as const,
   quote__DESC: 'quote__DESC' as const
}

export const enumTemplateAuthorsItemOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   url__ASC: 'url__ASC' as const,
   url__DESC: 'url__DESC' as const
}

export const enumTemplatesItemOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   author__ASC: 'author__ASC' as const,
   author__DESC: 'author__DESC' as const,
   basehubRepoUrl__ASC: 'basehubRepoUrl__ASC' as const,
   basehubRepoUrl__DESC: 'basehubRepoUrl__DESC' as const,
   description__ASC: 'description__ASC' as const,
   description__DESC: 'description__DESC' as const,
   gitRepoUrl__ASC: 'gitRepoUrl__ASC' as const,
   gitRepoUrl__DESC: 'gitRepoUrl__DESC' as const,
   icon__ASC: 'icon__ASC' as const,
   icon__DESC: 'icon__DESC' as const,
   previewUrl__ASC: 'previewUrl__ASC' as const,
   previewUrl__DESC: 'previewUrl__DESC' as const,
   shortDescription__ASC: 'shortDescription__ASC' as const,
   shortDescription__DESC: 'shortDescription__DESC' as const,
   thumbnail__ASC: 'thumbnail__ASC' as const,
   thumbnail__DESC: 'thumbnail__DESC' as const
}

export const enumTextWithColorComponentOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   untitled__ASC: 'untitled__ASC' as const,
   untitled__DESC: 'untitled__DESC' as const
}

export const enumThreadComponentOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const
}

export const enumTokenComponentOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const
}

export const enumTokenComponent1OrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const
}

export const enumTransactionStatusEnum = {
   Cancelled: 'Cancelled' as const,
   Completed: 'Completed' as const,
   Failed: 'Failed' as const,
   Running: 'Running' as const,
   Scheduled: 'Scheduled' as const
}

export const enumTryLightModeComponentOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const
}

export const enumWhimsicalEmbedComponentOrderByEnum = {
   _sys_createdAt__ASC: '_sys_createdAt__ASC' as const,
   _sys_createdAt__DESC: '_sys_createdAt__DESC' as const,
   _sys_hash__ASC: '_sys_hash__ASC' as const,
   _sys_hash__DESC: '_sys_hash__DESC' as const,
   _sys_id__ASC: '_sys_id__ASC' as const,
   _sys_id__DESC: '_sys_id__DESC' as const,
   _sys_lastModifiedAt__ASC: '_sys_lastModifiedAt__ASC' as const,
   _sys_lastModifiedAt__DESC: '_sys_lastModifiedAt__DESC' as const,
   _sys_slug__ASC: '_sys_slug__ASC' as const,
   _sys_slug__DESC: '_sys_slug__DESC' as const,
   _sys_title__ASC: '_sys_title__ASC' as const,
   _sys_title__DESC: '_sys_title__DESC' as const,
   href__ASC: 'href__ASC' as const,
   href__DESC: 'href__DESC' as const
}

export const enum_resolveTargetsWithEnum = {
   id: 'id' as const,
   objectName: 'objectName' as const
}

export const enum_structureFormatEnum = {
   json: 'json' as const,
   xml: 'xml' as const
}
