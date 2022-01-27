import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./index";

interface ObjectSelected {
  name: string;
  description: string;
  configuration_1: string;
  configuration_2: string;
  configuration_3: string;
}

// Define a type for the slice state
interface ToggleState {
  isVisibleLeftSideMenu: boolean;
  isVisibleLeftSideMenuAux: boolean;
  objectSelected: ObjectSelected;
  newTabInfo: [{
    id: string;
    name: string;
    description: string
  }];
  selectedTabSideNavMenu: string
}

// Define the initial state using that type
const initialState: ToggleState = {
  isVisibleLeftSideMenu: false,
  isVisibleLeftSideMenuAux: false,
  objectSelected: {
    name: "",
    description: "",
    configuration_1: "",
    configuration_2: "",
    configuration_3: "",
  },
  newTabInfo: [{
    id: "",
    name: "",
    description: ""
  }],
  selectedTabSideNavMenu: "",
};

const sliceLeftMenu = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state) {
      state.isVisibleLeftSideMenu = !state.isVisibleLeftSideMenu;
    },

    toggleLeft(state) {
      state.isVisibleLeftSideMenuAux = !state.isVisibleLeftSideMenuAux;
    },

    // This function will take whatever element is selected on switcher
    objectClicked(state, action) {
      state.objectSelected = action.payload;
    },


    newTabName(state, action) {
      console.log(action.payload + " element received in slice")
      state.newTabInfo.push(action.payload)
    },

    selectedTabSmallDev(state, action) {
      state.selectedTabSideNavMenu = action.payload
    },
  },
});

export const { toggle, objectClicked, toggleLeft, newTabName, selectedTabSmallDev } =
  sliceLeftMenu.actions;
export const selectUI = (state: RootState) => state.ui;

export default sliceLeftMenu.reducer;
