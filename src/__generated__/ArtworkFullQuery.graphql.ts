/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ArtworkFullQueryVariables = {
    artworkID: string;
};
export type ArtworkFullQueryResponse = {
    readonly artwork: {
        readonly additional_information: string | null;
        readonly description: string | null;
        readonly provenance: string | null;
        readonly exhibition_history: string | null;
        readonly literature: string | null;
        readonly partner: {
            readonly type: string | null;
            readonly id: string;
        } | null;
        readonly artist: {
            readonly biography_blurb: {
                readonly text: string | null;
            } | null;
        } | null;
        readonly sale: {
            readonly id: string;
            readonly isBenefit: boolean | null;
            readonly isGalleryAuction: boolean | null;
        } | null;
        readonly category: string | null;
        readonly canRequestLotConditionsReport: boolean | null;
        readonly conditionDescription: {
            readonly details: string | null;
        } | null;
        readonly signature: string | null;
        readonly signatureInfo: {
            readonly details: string | null;
        } | null;
        readonly certificateOfAuthenticity: {
            readonly details: string | null;
        } | null;
        readonly framed: {
            readonly details: string | null;
        } | null;
        readonly series: string | null;
        readonly publisher: string | null;
        readonly manufacturer: string | null;
        readonly image_rights: string | null;
        readonly context: ({
            readonly __typename: "Sale";
            readonly isAuction: boolean | null;
        } | {
            /*This will never be '%other', but we need some
            value in case none of the concrete values match.*/
            readonly __typename: "%other";
        }) | null;
        readonly contextGrids: ReadonlyArray<{
            readonly artworks: {
                readonly edges: ReadonlyArray<{
                    readonly node: {
                        readonly id: string;
                    } | null;
                } | null> | null;
            } | null;
        } | null> | null;
        readonly " $fragmentRefs": FragmentRefs<"PartnerCard_artwork" | "AboutWork_artwork" | "OtherWorks_artwork" | "AboutArtist_artwork" | "ArtworkDetails_artwork" | "ContextCard_artwork" | "ArtworkHistory_artwork" | "Artwork_artworkAboveTheFold">;
    } | null;
};
export type ArtworkFullQuery = {
    readonly response: ArtworkFullQueryResponse;
    readonly variables: ArtworkFullQueryVariables;
};



/*
query ArtworkFullQuery(
  $artworkID: String!
) {
  artwork(id: $artworkID) {
    additional_information: additionalInformation
    description
    provenance
    exhibition_history: exhibitionHistory
    literature
    partner {
      type
      id
    }
    artist {
      biography_blurb: biographyBlurb {
        text
      }
      id
    }
    sale {
      id
      isBenefit
      isGalleryAuction
    }
    category
    canRequestLotConditionsReport
    conditionDescription {
      details
    }
    signature
    signatureInfo {
      details
    }
    certificateOfAuthenticity {
      details
    }
    framed {
      details
    }
    series
    publisher
    manufacturer
    image_rights: imageRights
    context {
      __typename
      ... on Sale {
        isAuction
      }
      ... on Node {
        id
      }
    }
    contextGrids {
      __typename
      artworks: artworksConnection(first: 6) {
        edges {
          node {
            id
          }
        }
      }
    }
    ...PartnerCard_artwork
    ...AboutWork_artwork
    ...OtherWorks_artwork
    ...AboutArtist_artwork
    ...ArtworkDetails_artwork
    ...ContextCard_artwork
    ...ArtworkHistory_artwork
    ...Artwork_artworkAboveTheFold
    id
  }
}

fragment PartnerCard_artwork on Artwork {
  sale {
    isBenefit
    isGalleryAuction
    id
  }
  partner {
    cities
    is_default_profile_public: isDefaultProfilePublic
    type
    name
    slug
    id
    href
    initials
    profile {
      id
      internalID
      is_followed: isFollowed
      icon {
        url(version: "square140")
      }
    }
  }
}

fragment AboutWork_artwork on Artwork {
  additional_information: additionalInformation
  description
  isInAuction
}

fragment OtherWorks_artwork on Artwork {
  contextGrids {
    __typename
    title
    ctaTitle
    ctaHref
    artworks: artworksConnection(first: 6) {
      edges {
        node {
          ...GenericGrid_artworks
          id
        }
      }
    }
  }
}

fragment AboutArtist_artwork on Artwork {
  artists {
    id
    biography_blurb: biographyBlurb {
      text
    }
    ...ArtistListItem_artist
  }
}

fragment ArtworkDetails_artwork on Artwork {
  slug
  category
  conditionDescription {
    label
    details
  }
  signatureInfo {
    label
    details
  }
  certificateOfAuthenticity {
    label
    details
  }
  framed {
    label
    details
  }
  series
  publisher
  manufacturer
  image_rights: imageRights
  canRequestLotConditionsReport
  saleArtwork {
    internalID
    id
  }
}

fragment ContextCard_artwork on Artwork {
  id
  context {
    __typename
    ... on Sale {
      id
      name
      isLiveOpen
      href
      formattedStartDateTime
      isAuction
      coverImage {
        url
      }
    }
    ... on Fair {
      id
      name
      href
      exhibitionPeriod
      image {
        url
      }
    }
    ... on Show {
      id
      internalID
      slug
      name
      href
      exhibitionPeriod
      isFollowed
      coverImage {
        url
      }
    }
    ... on Node {
      id
    }
  }
}

fragment ArtworkHistory_artwork on Artwork {
  provenance
  exhibition_history: exhibitionHistory
  literature
}

fragment Artwork_artworkAboveTheFold on Artwork {
  ...ArtworkHeader_artwork
  ...CommercialInformation_artwork
  slug
  internalID
  id
  is_acquireable: isAcquireable
  is_offerable: isOfferable
  is_biddable: isBiddable
  is_inquireable: isInquireable
  availability
}

fragment ArtworkHeader_artwork on Artwork {
  ...ArtworkActions_artwork
  ...ArtworkTombstone_artwork
  images {
    ...ImageCarousel_images
  }
}

fragment CommercialInformation_artwork on Artwork {
  isAcquireable
  isOfferable
  isInquireable
  isInAuction
  availability
  saleMessage
  isForSale
  artists {
    isConsignable
    id
  }
  editionSets {
    id
  }
  sale {
    isClosed
    isAuction
    isLiveOpen
    isPreview
    liveStartAt
    endAt
    startAt
    id
  }
  ...CommercialButtons_artwork
  ...CommercialPartnerInformation_artwork
  ...CommercialEditionSetInformation_artwork
  ...ArtworkExtraLinks_artwork
  ...AuctionPrice_artwork
}

fragment CommercialButtons_artwork on Artwork {
  slug
  isAcquireable
  isOfferable
  isInquireable
  isInAuction
  isBuyNowable
  isForSale
  editionSets {
    id
  }
  sale {
    isClosed
    id
  }
  ...BuyNowButton_artwork
  ...BidButton_artwork
  ...MakeOfferButton_artwork
}

fragment CommercialPartnerInformation_artwork on Artwork {
  availability
  isAcquireable
  isForSale
  isOfferable
  shippingOrigin
  shippingInfo
  priceIncludesTaxDisplay
  partner {
    name
    id
  }
}

fragment CommercialEditionSetInformation_artwork on Artwork {
  editionSets {
    id
    internalID
    saleMessage
    editionOf
    dimensions {
      in
      cm
    }
  }
  ...CommercialPartnerInformation_artwork
}

fragment ArtworkExtraLinks_artwork on Artwork {
  isAcquireable
  isInAuction
  isOfferable
  title
  isForSale
  sale {
    isClosed
    isBenefit
    partner {
      name
      id
    }
    id
  }
  artists {
    isConsignable
    name
    id
  }
  artist {
    name
    id
  }
}

fragment AuctionPrice_artwork on Artwork {
  sale {
    internalID
    isWithBuyersPremium
    isClosed
    isLiveOpen
    id
  }
  saleArtwork {
    reserveMessage
    currentBid {
      display
    }
    counts {
      bidderPositions
    }
    id
  }
  myLotStanding(live: true) {
    activeBid {
      isWinning
      id
    }
    mostRecentBid {
      maxBid {
        display
      }
      id
    }
  }
}

fragment BuyNowButton_artwork on Artwork {
  internalID
  saleMessage
}

fragment BidButton_artwork on Artwork {
  slug
  sale {
    slug
    registrationStatus {
      qualifiedForBidding
      id
    }
    isPreview
    isLiveOpen
    isClosed
    isRegistrationClosed
    id
  }
  myLotStanding(live: true) {
    mostRecentBid {
      maxBid {
        cents
      }
      id
    }
  }
  saleArtwork {
    increments {
      cents
    }
    id
  }
}

fragment MakeOfferButton_artwork on Artwork {
  internalID
}

fragment ArtworkActions_artwork on Artwork {
  id
  internalID
  slug
  title
  href
  is_saved: isSaved
  is_hangable: isHangable
  artists {
    name
    id
  }
  image {
    url
  }
  sale {
    isAuction
    isClosed
    id
  }
  widthCm
  heightCm
}

fragment ArtworkTombstone_artwork on Artwork {
  title
  isInAuction
  medium
  date
  cultural_maker: culturalMaker
  saleArtwork {
    lotLabel
    estimate
    id
  }
  partner {
    name
    id
  }
  sale {
    isClosed
    id
  }
  artists {
    name
    href
    ...FollowArtistButton_artist
    id
  }
  dimensions {
    in
    cm
  }
  edition_of: editionOf
  attribution_class: attributionClass {
    shortDescription
    id
  }
}

fragment ImageCarousel_images on Image {
  url: imageURL
  width
  height
  imageVersions
  deepZoom {
    image: Image {
      tileSize: TileSize
      url: Url
      format: Format
      size: Size {
        width: Width
        height: Height
      }
    }
  }
}

fragment FollowArtistButton_artist on Artist {
  id
  slug
  internalID
  is_followed: isFollowed
}

fragment ArtistListItem_artist on Artist {
  id
  internalID
  slug
  name
  initials
  href
  is_followed: isFollowed
  nationality
  birthday
  deathday
  image {
    url
  }
}

fragment GenericGrid_artworks on Artwork {
  id
  image {
    aspect_ratio: aspectRatio
  }
  ...ArtworkGridItem_artwork
}

fragment ArtworkGridItem_artwork on Artwork {
  title
  date
  sale_message: saleMessage
  is_biddable: isBiddable
  is_acquireable: isAcquireable
  is_offerable: isOfferable
  slug
  sale {
    is_auction: isAuction
    is_closed: isClosed
    display_timely_at: displayTimelyAt
    id
  }
  sale_artwork: saleArtwork {
    current_bid: currentBid {
      display
    }
    id
  }
  image {
    url(version: "large")
    aspect_ratio: aspectRatio
  }
  artists(shallow: true) {
    name
    id
  }
  partner {
    name
    id
  }
  href
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "artworkID",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "artworkID"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": "additional_information",
  "name": "additionalInformation",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "provenance",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": "exhibition_history",
  "name": "exhibitionHistory",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "literature",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "LinkedField",
  "alias": "biography_blurb",
  "name": "biographyBlurb",
  "storageKey": null,
  "args": null,
  "concreteType": "ArtistBlurb",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "text",
      "args": null,
      "storageKey": null
    }
  ]
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isBenefit",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isGalleryAuction",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "category",
  "args": null,
  "storageKey": null
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "canRequestLotConditionsReport",
  "args": null,
  "storageKey": null
},
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "details",
  "args": null,
  "storageKey": null
},
v15 = [
  (v14/*: any*/)
],
v16 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "signature",
  "args": null,
  "storageKey": null
},
v17 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "series",
  "args": null,
  "storageKey": null
},
v18 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "publisher",
  "args": null,
  "storageKey": null
},
v19 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "manufacturer",
  "args": null,
  "storageKey": null
},
v20 = {
  "kind": "ScalarField",
  "alias": "image_rights",
  "name": "imageRights",
  "args": null,
  "storageKey": null
},
v21 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v22 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isAuction",
  "args": null,
  "storageKey": null
},
v23 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 6
  }
],
v24 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v25 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "slug",
  "args": null,
  "storageKey": null
},
v26 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "href",
  "args": null,
  "storageKey": null
},
v27 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "initials",
  "args": null,
  "storageKey": null
},
v28 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "internalID",
  "args": null,
  "storageKey": null
},
v29 = {
  "kind": "ScalarField",
  "alias": "is_followed",
  "name": "isFollowed",
  "args": null,
  "storageKey": null
},
v30 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isLiveOpen",
  "args": null,
  "storageKey": null
},
v31 = [
  (v24/*: any*/),
  (v8/*: any*/)
],
v32 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "partner",
  "storageKey": null,
  "args": null,
  "concreteType": "Partner",
  "plural": false,
  "selections": (v31/*: any*/)
},
v33 = [
  (v14/*: any*/),
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "label",
    "args": null,
    "storageKey": null
  }
],
v34 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "url",
    "args": null,
    "storageKey": null
  }
],
v35 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "coverImage",
  "storageKey": null,
  "args": null,
  "concreteType": "Image",
  "plural": false,
  "selections": (v34/*: any*/)
},
v36 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "exhibitionPeriod",
  "args": null,
  "storageKey": null
},
v37 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "image",
  "storageKey": null,
  "args": null,
  "concreteType": "Image",
  "plural": false,
  "selections": (v34/*: any*/)
},
v38 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v39 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "date",
  "args": null,
  "storageKey": null
},
v40 = {
  "kind": "ScalarField",
  "alias": "is_biddable",
  "name": "isBiddable",
  "args": null,
  "storageKey": null
},
v41 = {
  "kind": "ScalarField",
  "alias": "is_acquireable",
  "name": "isAcquireable",
  "args": null,
  "storageKey": null
},
v42 = {
  "kind": "ScalarField",
  "alias": "is_offerable",
  "name": "isOfferable",
  "args": null,
  "storageKey": null
},
v43 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "display",
  "args": null,
  "storageKey": null
},
v44 = [
  (v43/*: any*/)
],
v45 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cents",
  "args": null,
  "storageKey": null
},
v46 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "dimensions",
  "storageKey": null,
  "args": null,
  "concreteType": "dimensions",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "in",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "cm",
      "args": null,
      "storageKey": null
    }
  ]
},
v47 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "saleMessage",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ArtworkFullQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "artwork",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Artwork",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "partner",
            "storageKey": null,
            "args": null,
            "concreteType": "Partner",
            "plural": false,
            "selections": [
              (v7/*: any*/),
              (v8/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "artist",
            "storageKey": null,
            "args": null,
            "concreteType": "Artist",
            "plural": false,
            "selections": [
              (v9/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "sale",
            "storageKey": null,
            "args": null,
            "concreteType": "Sale",
            "plural": false,
            "selections": [
              (v8/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/)
            ]
          },
          (v12/*: any*/),
          (v13/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "conditionDescription",
            "storageKey": null,
            "args": null,
            "concreteType": "ArtworkInfoRow",
            "plural": false,
            "selections": (v15/*: any*/)
          },
          (v16/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "signatureInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "ArtworkInfoRow",
            "plural": false,
            "selections": (v15/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "certificateOfAuthenticity",
            "storageKey": null,
            "args": null,
            "concreteType": "ArtworkInfoRow",
            "plural": false,
            "selections": (v15/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "framed",
            "storageKey": null,
            "args": null,
            "concreteType": "ArtworkInfoRow",
            "plural": false,
            "selections": (v15/*: any*/)
          },
          (v17/*: any*/),
          (v18/*: any*/),
          (v19/*: any*/),
          (v20/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "context",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": false,
            "selections": [
              (v21/*: any*/),
              {
                "kind": "InlineFragment",
                "type": "Sale",
                "selections": [
                  (v22/*: any*/)
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "contextGrids",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": "artworks",
                "name": "artworksConnection",
                "storageKey": "artworksConnection(first:6)",
                "args": (v23/*: any*/),
                "concreteType": "ArtworkConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "ArtworkEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Artwork",
                        "plural": false,
                        "selections": [
                          (v8/*: any*/)
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "kind": "FragmentSpread",
            "name": "PartnerCard_artwork",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "AboutWork_artwork",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "OtherWorks_artwork",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "AboutArtist_artwork",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "ArtworkDetails_artwork",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "ContextCard_artwork",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "ArtworkHistory_artwork",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "Artwork_artworkAboveTheFold",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ArtworkFullQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "artwork",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Artwork",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "partner",
            "storageKey": null,
            "args": null,
            "concreteType": "Partner",
            "plural": false,
            "selections": [
              (v7/*: any*/),
              (v8/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cities",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": "is_default_profile_public",
                "name": "isDefaultProfilePublic",
                "args": null,
                "storageKey": null
              },
              (v24/*: any*/),
              (v25/*: any*/),
              (v26/*: any*/),
              (v27/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "profile",
                "storageKey": null,
                "args": null,
                "concreteType": "Profile",
                "plural": false,
                "selections": [
                  (v8/*: any*/),
                  (v28/*: any*/),
                  (v29/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "icon",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Image",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "url",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "version",
                            "value": "square140"
                          }
                        ],
                        "storageKey": "url(version:\"square140\")"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "artist",
            "storageKey": null,
            "args": null,
            "concreteType": "Artist",
            "plural": false,
            "selections": [
              (v9/*: any*/),
              (v8/*: any*/),
              (v24/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "sale",
            "storageKey": null,
            "args": null,
            "concreteType": "Sale",
            "plural": false,
            "selections": [
              (v8/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v22/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isClosed",
                "args": null,
                "storageKey": null
              },
              (v30/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isPreview",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "liveStartAt",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "endAt",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "startAt",
                "args": null,
                "storageKey": null
              },
              (v25/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "registrationStatus",
                "storageKey": null,
                "args": null,
                "concreteType": "Bidder",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "qualifiedForBidding",
                    "args": null,
                    "storageKey": null
                  },
                  (v8/*: any*/)
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isRegistrationClosed",
                "args": null,
                "storageKey": null
              },
              (v32/*: any*/),
              (v28/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isWithBuyersPremium",
                "args": null,
                "storageKey": null
              }
            ]
          },
          (v12/*: any*/),
          (v13/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "conditionDescription",
            "storageKey": null,
            "args": null,
            "concreteType": "ArtworkInfoRow",
            "plural": false,
            "selections": (v33/*: any*/)
          },
          (v16/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "signatureInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "ArtworkInfoRow",
            "plural": false,
            "selections": (v33/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "certificateOfAuthenticity",
            "storageKey": null,
            "args": null,
            "concreteType": "ArtworkInfoRow",
            "plural": false,
            "selections": (v33/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "framed",
            "storageKey": null,
            "args": null,
            "concreteType": "ArtworkInfoRow",
            "plural": false,
            "selections": (v33/*: any*/)
          },
          (v17/*: any*/),
          (v18/*: any*/),
          (v19/*: any*/),
          (v20/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "context",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": false,
            "selections": [
              (v21/*: any*/),
              (v8/*: any*/),
              {
                "kind": "InlineFragment",
                "type": "Sale",
                "selections": [
                  (v22/*: any*/),
                  (v24/*: any*/),
                  (v30/*: any*/),
                  (v26/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "formattedStartDateTime",
                    "args": null,
                    "storageKey": null
                  },
                  (v35/*: any*/)
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "Fair",
                "selections": [
                  (v24/*: any*/),
                  (v26/*: any*/),
                  (v36/*: any*/),
                  (v37/*: any*/)
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "Show",
                "selections": [
                  (v28/*: any*/),
                  (v25/*: any*/),
                  (v24/*: any*/),
                  (v26/*: any*/),
                  (v36/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "isFollowed",
                    "args": null,
                    "storageKey": null
                  },
                  (v35/*: any*/)
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "contextGrids",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": "artworks",
                "name": "artworksConnection",
                "storageKey": "artworksConnection(first:6)",
                "args": (v23/*: any*/),
                "concreteType": "ArtworkConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "ArtworkEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Artwork",
                        "plural": false,
                        "selections": [
                          (v8/*: any*/),
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "image",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Image",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": "aspect_ratio",
                                "name": "aspectRatio",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "url",
                                "args": [
                                  {
                                    "kind": "Literal",
                                    "name": "version",
                                    "value": "large"
                                  }
                                ],
                                "storageKey": "url(version:\"large\")"
                              }
                            ]
                          },
                          (v38/*: any*/),
                          (v39/*: any*/),
                          {
                            "kind": "ScalarField",
                            "alias": "sale_message",
                            "name": "saleMessage",
                            "args": null,
                            "storageKey": null
                          },
                          (v40/*: any*/),
                          (v41/*: any*/),
                          (v42/*: any*/),
                          (v25/*: any*/),
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "sale",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Sale",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": "is_auction",
                                "name": "isAuction",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": "is_closed",
                                "name": "isClosed",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": "display_timely_at",
                                "name": "displayTimelyAt",
                                "args": null,
                                "storageKey": null
                              },
                              (v8/*: any*/)
                            ]
                          },
                          {
                            "kind": "LinkedField",
                            "alias": "sale_artwork",
                            "name": "saleArtwork",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SaleArtwork",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": "current_bid",
                                "name": "currentBid",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "SaleArtworkCurrentBid",
                                "plural": false,
                                "selections": (v44/*: any*/)
                              },
                              (v8/*: any*/)
                            ]
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "artists",
                            "storageKey": "artists(shallow:true)",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "shallow",
                                "value": true
                              }
                            ],
                            "concreteType": "Artist",
                            "plural": true,
                            "selections": (v31/*: any*/)
                          },
                          (v32/*: any*/),
                          (v26/*: any*/)
                        ]
                      }
                    ]
                  }
                ]
              },
              (v21/*: any*/),
              (v38/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "ctaTitle",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "ctaHref",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "isInAuction",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "artists",
            "storageKey": null,
            "args": null,
            "concreteType": "Artist",
            "plural": true,
            "selections": [
              (v8/*: any*/),
              (v9/*: any*/),
              (v28/*: any*/),
              (v25/*: any*/),
              (v24/*: any*/),
              (v27/*: any*/),
              (v26/*: any*/),
              (v29/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "nationality",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "birthday",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "deathday",
                "args": null,
                "storageKey": null
              },
              (v37/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isConsignable",
                "args": null,
                "storageKey": null
              }
            ]
          },
          (v25/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "saleArtwork",
            "storageKey": null,
            "args": null,
            "concreteType": "SaleArtwork",
            "plural": false,
            "selections": [
              (v28/*: any*/),
              (v8/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "lotLabel",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "estimate",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "increments",
                "storageKey": null,
                "args": null,
                "concreteType": "BidIncrementsFormatted",
                "plural": true,
                "selections": [
                  (v45/*: any*/)
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "reserveMessage",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "currentBid",
                "storageKey": null,
                "args": null,
                "concreteType": "SaleArtworkCurrentBid",
                "plural": false,
                "selections": (v44/*: any*/)
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "counts",
                "storageKey": null,
                "args": null,
                "concreteType": "SaleArtworkCounts",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "bidderPositions",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          (v8/*: any*/),
          (v28/*: any*/),
          (v38/*: any*/),
          (v26/*: any*/),
          {
            "kind": "ScalarField",
            "alias": "is_saved",
            "name": "isSaved",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": "is_hangable",
            "name": "isHangable",
            "args": null,
            "storageKey": null
          },
          (v37/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "widthCm",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "heightCm",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "medium",
            "args": null,
            "storageKey": null
          },
          (v39/*: any*/),
          {
            "kind": "ScalarField",
            "alias": "cultural_maker",
            "name": "culturalMaker",
            "args": null,
            "storageKey": null
          },
          (v46/*: any*/),
          {
            "kind": "ScalarField",
            "alias": "edition_of",
            "name": "editionOf",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": "attribution_class",
            "name": "attributionClass",
            "storageKey": null,
            "args": null,
            "concreteType": "AttributionClass",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "shortDescription",
                "args": null,
                "storageKey": null
              },
              (v8/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "images",
            "storageKey": null,
            "args": null,
            "concreteType": "Image",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": "url",
                "name": "imageURL",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "width",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "height",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "imageVersions",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "deepZoom",
                "storageKey": null,
                "args": null,
                "concreteType": "DeepZoom",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": "image",
                    "name": "Image",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "DeepZoomImage",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": "tileSize",
                        "name": "TileSize",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": "url",
                        "name": "Url",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": "format",
                        "name": "Format",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": "size",
                        "name": "Size",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "DeepZoomImageSize",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": "width",
                            "name": "Width",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": "height",
                            "name": "Height",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "isAcquireable",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "isOfferable",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "isInquireable",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "availability",
            "args": null,
            "storageKey": null
          },
          (v47/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "isForSale",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "editionSets",
            "storageKey": null,
            "args": null,
            "concreteType": "EditionSet",
            "plural": true,
            "selections": [
              (v8/*: any*/),
              (v28/*: any*/),
              (v47/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "editionOf",
                "args": null,
                "storageKey": null
              },
              (v46/*: any*/)
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "isBuyNowable",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "myLotStanding",
            "storageKey": "myLotStanding(live:true)",
            "args": [
              {
                "kind": "Literal",
                "name": "live",
                "value": true
              }
            ],
            "concreteType": "LotStanding",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "mostRecentBid",
                "storageKey": null,
                "args": null,
                "concreteType": "BidderPosition",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "maxBid",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "BidderPositionMaxBid",
                    "plural": false,
                    "selections": [
                      (v45/*: any*/),
                      (v43/*: any*/)
                    ]
                  },
                  (v8/*: any*/)
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "activeBid",
                "storageKey": null,
                "args": null,
                "concreteType": "BidderPosition",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "isWinning",
                    "args": null,
                    "storageKey": null
                  },
                  (v8/*: any*/)
                ]
              }
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "shippingOrigin",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "shippingInfo",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "priceIncludesTaxDisplay",
            "args": null,
            "storageKey": null
          },
          (v41/*: any*/),
          (v42/*: any*/),
          (v40/*: any*/),
          {
            "kind": "ScalarField",
            "alias": "is_inquireable",
            "name": "isInquireable",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ArtworkFullQuery",
    "id": "09c61a1d8edbadc04751042fc0defb4f",
    "text": null,
    "metadata": {}
  }
};
})();
(node as any).hash = '35799db8aab92d609ccbcd243b1a202b';
export default node;
