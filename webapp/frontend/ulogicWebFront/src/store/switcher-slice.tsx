import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./index";

interface ObjectSelected {
  name: string;
  description: string;
  configuration_1: string;
  configuration_2: string;
  configuration_3: string;
}

interface NewTabInformation {
  id: string;
  name: string;
  description: string
}

// Define a type for the slice state
interface ToggleState {
  isVisibleLeftSideMenu: boolean;
  isfileUploaderVisibility: boolean;
  objectSelected: ObjectSelected;
  newTabInfo: [{
    id: string;
    name: string;
    description: string
  }];
}

// Define the initial state using that type
const initialState: ToggleState = {
  isVisibleLeftSideMenu: false,
  isfileUploaderVisibility: false,
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
};

const sliceLeftMenu = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state) {
      state.isVisibleLeftSideMenu = !state.isVisibleLeftSideMenu;
    },

    toggleRight(state) {
      state.isVisibleLeftSideMenu = false;
    },

    // This function will take whatever element is selected on switcher
    objectClicked(state, action) {
      state.objectSelected = action.payload;
    },

    fileUploaderVisibility(state) {
      state.isfileUploaderVisibility = !state.isfileUploaderVisibility;
    },

    newTabName(state, action) {
      console.log(action.payload + " element received in slice")
      state.newTabInfo.push(action.payload)
    }
  },
});

export const { toggle, objectClicked, fileUploaderVisibility, toggleRight, newTabName } =
  sliceLeftMenu.actions;
export const selectUI = (state: RootState) => state.ui;

export default sliceLeftMenu.reducer;
