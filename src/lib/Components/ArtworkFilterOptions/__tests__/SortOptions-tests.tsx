import { Theme } from "@artsy/palette"
import React from "react"
import * as renderer from "react-test-renderer"
import { FakeNavigator as MockNavigator } from "../../../../lib/Components/Bidding/__tests__/Helpers/FakeNavigator"
import { OptionListItem } from "../../../../lib/Components/FilterModal"
import { ArtworkFilterContext, ArtworkFilterContextState } from "../../../utils/ArtworkFiltersStore"
import { SortOptionsScreen as SortOptions } from "../SortOptions"

describe("Sort Options Screen", () => {
  let mockNavigator: MockNavigator
  let state: ArtworkFilterContextState

  beforeEach(() => {
    mockNavigator = new MockNavigator()
    state = {
      selectedSortOption: "Default",
      selectedFilters: [],
      appliedFilters: [],
      applyFilters: false,
    }
  })

  it("renders the correct number of sort options", () => {
    const root = renderer.create(
      <Theme>
        <ArtworkFilterContext.Provider
          value={{
            state,
            dispatch: null,
          }}
        >
          <SortOptions navigator={mockNavigator as any} />
        </ArtworkFilterContext.Provider>
      </Theme>
    ).root

    expect(root.findAllByType(OptionListItem)).toHaveLength(7)
  })
})
