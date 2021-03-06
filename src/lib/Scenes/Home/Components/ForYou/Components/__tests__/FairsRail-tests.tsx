import { cloneDeep } from "lodash"
import React from "react"
import "react-native"
import * as renderer from "react-test-renderer"

import { FairsRail_fairs_module } from "__generated__/FairsRail_fairs_module.graphql"
import FairsRail from "../FairsRail"

import { Theme } from "@artsy/palette"

const artworkNode = {
  node: {
    image: { url: "https://example.com/image.jpg" },
  },
}
const fairsModule: Omit<FairsRail_fairs_module, " $refType"> = {
  results: [
    {
      id: "the-fair",
      name: "The Fair",
      slug: "the-fair",
      exhibitionPeriod: "Monday–Friday",
      profile: { slug: "https://neopets.com" },
      image: { url: "https://example.com/hero.jpg" },
      followedArtistArtworks: {
        edges: [artworkNode, artworkNode, artworkNode],
      },
      otherArtworks: {
        edges: [artworkNode, artworkNode, artworkNode],
      },
    },
    {
      id: "the-profileless-fair",
      slug: "the-profileless-fair",
      name: "The Profileless Fair: You Should Not See Me in Snapshots",
      exhibitionPeriod: "Monday–Friday",
      profile: null,
      image: { url: "https://example.com/hero.jpg" },
      followedArtistArtworks: {
        edges: [artworkNode, artworkNode],
      },
      otherArtworks: {
        edges: [artworkNode, artworkNode],
      },
    },
  ],
}

it("looks correct when rendered", () => {
  const tree = renderer
    .create(
      <Theme>
        <FairsRail fairs_module={fairsModule as any} />
      </Theme>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it("looks correct when rendered with fairs missing artworks", () => {
  const fairsCopy = cloneDeep(fairsModule)
  fairsCopy.results.forEach(result => {
    // @ts-ignore
    result.followedArtistArtworks.edges = []
    // @ts-ignore
    result.otherArtworks.edges = []
  })
  expect(() =>
    renderer
      .create(
        <Theme>
          <FairsRail fairs_module={fairsModule as any} />
        </Theme>
      )
      .toJSON()
  ).not.toThrow()
})
