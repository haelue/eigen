import { ArrowRightIcon, Box, Button, CloseIcon, color, Flex, Sans, Serif, space } from "@artsy/palette"
import React, { useContext, useState } from "react"
import { FlatList, Modal as RNModal, TouchableOpacity, TouchableWithoutFeedback, ViewProperties } from "react-native"
import NavigatorIOS from "react-native-navigator-ios"
import styled from "styled-components/native"
import { ArtworkFilterContext } from "../utils/ArtworkFiltersStore"
import { SortOptionsScreen as SortOptions } from "./ArtworkFilterOptions/SortOptions"

interface FilterModalProps extends ViewProperties {
  closeModal?: () => void
  navigator?: NavigatorIOS
  isFilterArtworksModalVisible: boolean
}

export const FilterModalNavigator: React.SFC<FilterModalProps> = ({ closeModal, isFilterArtworksModalVisible }) => {
  const { dispatch, state } = useContext(ArtworkFilterContext)

  const handleClosingModal = () => {
    closeModal()
    dispatch({ type: "resetFilters" })
  }

  const applyFilters = () => {
    // TODO:  why is this tsc error being thrown?:
    // Property 'type' does not exist on type 'readonly { readonly type: SortOption; readonly filter: FilterOption; }[]
    // @ts-ignore: next-line
    dispatch({ type: "applyFilters", payload: [{ type: state.selectedFilters.type, filter: "sort" }] })
    closeModal()
  }

  const getApplyButtonCount = () => {
    const selectedFiltersSum = state.selectedFilters.length
    return selectedFiltersSum > 0 ? `Apply (${selectedFiltersSum})` : "Apply"
  }

  return (
    <>
      {isFilterArtworksModalVisible && (
        <RNModal animationType="fade" transparent={true} visible={isFilterArtworksModalVisible}>
          <TouchableWithoutFeedback onPress={null}>
            <ModalBackgroundView>
              <TouchableOpacity onPress={handleClosingModal} style={{ flexGrow: 1 }} />
              <ModalInnerView>
                <NavigatorIOS
                  navigationBarHidden={true}
                  initialRoute={{
                    component: FilterOptions,
                    passProps: { closeModal },
                    title: "",
                  }}
                  style={{ flex: 1 }}
                />
                <Box p={2}>
                  <ApplyButton onPress={applyFilters} block width={100} variant="secondaryOutline">
                    {getApplyButtonCount()}
                  </ApplyButton>
                </Box>
              </ModalInnerView>
            </ModalBackgroundView>
          </TouchableWithoutFeedback>
        </RNModal>
      )}
    </>
  )
}

interface FilterOptionsProps {
  closeModal: () => void
  navigator: NavigatorIOS
}

type FilterOptions = Array<{ type: string; onTap: () => void }>

export const FilterOptions: React.SFC<FilterOptionsProps> = ({ closeModal, navigator }) => {
  const { dispatch, state } = useContext(ArtworkFilterContext)
  const handleNavigationToSortScreen = () => {
    navigator.push({
      component: SortOptions,
    })
  }
  const [filterOptions] = useState<FilterOptions>([
    {
      type: "Sort by",
      onTap: handleNavigationToSortScreen,
    },
  ])

  const clearAllFilters = () => {
    dispatch({ type: "resetFilters" })
  }

  const handleTappingCloseIcon = () => {
    closeModal()
    dispatch({ type: "resetFilters" })
  }

  return (
    <Flex flexGrow={1}>
      <Flex flexDirection="row" justifyContent="space-between">
        <Flex alignItems="flex-end" mt={0.5} mb={2}>
          <CloseIconContainer onPress={handleTappingCloseIcon}>
            <CloseIcon fill="black100" />
          </CloseIconContainer>
        </Flex>
        <FilterHeader weight="medium" size="4" color="black100">
          Filter
        </FilterHeader>
        <ClearAllButton onPress={clearAllFilters}>
          <Sans mr={2} mt={2} size="4" color="black100">
            Clear all
          </Sans>
        </ClearAllButton>
      </Flex>
      <Flex>
        <FlatList<{ onTap: () => void; type: string }>
          keyExtractor={(_item, index) => String(index)}
          data={filterOptions}
          renderItem={({ item }) => (
            <Box>
              {
                <TouchableOptionListItemRow onPress={item.onTap}>
                  <OptionListItem>
                    <Flex p={2} flexDirection="row" justifyContent="space-between" flexGrow={1}>
                      <Serif size="3t" color="black100">
                        {item.type}
                      </Serif>
                      <Flex flexDirection="row">
                        <CurrentOption size="3">{state.selectedSortOption}</CurrentOption>
                        <ArrowRightIcon fill="black30" ml={0.3} mt={0.3} />
                      </Flex>
                    </Flex>
                  </OptionListItem>
                </TouchableOptionListItemRow>
              }
            </Box>
          )}
        />
      </Flex>
      <BackgroundFill />
    </Flex>
  )
}

export const FilterHeader = styled(Sans)`
  margin-top: 20px;
  padding-left: 35px;
`

export const BackgroundFill = styled(Flex)`
  background-color: ${color("black10")};
  flex-grow: 1;
`

export const FilterArtworkButtonContainer = styled(Flex)`
  position: absolute;
  bottom: 50;
  flex: 1;
  justify-content: center;
  width: 100%;
  flex-direction: row;
`

export const FilterArtworkButton = styled(Button)`
  border-radius: 100;
  width: 110px;
`

export const TouchableOptionListItemRow = styled(TouchableOpacity)``

export const CloseIconContainer = styled(TouchableOpacity)`
  margin-left: ${space(2)};
  margin-top: ${space(2)};
`

export const OptionListItem = styled(Flex)`
  flex-direction: row;
  justify-content: space-between;
  border: solid 0.5px ${color("black10")};
  border-right-width: 0;
  border-left-width: 0;
  flex: 1;
  width: 100%;
`

const ModalBackgroundView = styled.View`
  background-color: #00000099;
  flex: 1;
  flex-direction: column;
  border-top-left-radius: ${space(1)};
  border-top-right-radius: ${space(1)};
`

const ModalInnerView = styled.View`
  flex-direction: column;
  background-color: ${color("white100")};
  height: 75%;
  border-top-left-radius: ${space(1)};
  border-top-right-radius: ${space(1)};
`

export const CurrentOption = styled(Serif)`
  color: ${color("black60")};
`
export const ClearAllButton = styled(TouchableOpacity)``
export const ApplyButton = styled(Button)``
