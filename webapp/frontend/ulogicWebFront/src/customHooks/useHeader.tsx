import React, { useEffect, useState } from 'react'
import { ObjectSelected, NewTabInfo } from '../customInterfaces/InterfacesHeader';
import { Services } from '../axiosServices/axiosComponent/Services';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fileUploaderVisibility, newTabName, objectClicked, toggle, toggleRight, selectedTabSmallDev } from '../store/switcher-slice';


export const useHeader = () => {

    const dispatch = useAppDispatch();
    const newTabCreated = useAppSelector((state) => state.ui.newTabInfo);
    const switcherVisibility = useAppSelector(
        (state) => state.ui.isVisibleLeftSideMenu
    );
    const objectClickedBack = useAppSelector((state) => state.ui.objectSelected);

    const [objectName, setObject] = useState([
        {
            name: "",
            description: "",
            configuration_1: "",
            configuration_2: "",
            configuration_3: "",
        },
    ]);

    const [newTabInf, setNewTabIn] = useState([
        {
            id: "",
            name: "",
            description: ""
        },
    ]);

    const tabSelectedNumber = useAppSelector((state) => state.ui.selectedTabSideNavMenu)

    // this getting the controller with / ***************************
    useEffect(() => {
        Services.get("/switcher").then((response) => {
            console.log(response.data);
            setObject(response.data);
        });
    }, []);

    // use effect temporally getting info from the modal (Just the name)
    useEffect(() => {
        setNewTabIn(
            newTabCreated
        )
    }, [])

    const toggleSwitcher = () => {
        dispatch(toggle());
    };

    const switcherInitalState = () => {
        dispatch(toggleRight())
    }

    const objectClickHandler = (objectSelectedFromSwitcher: ObjectSelected) => {
        dispatch(objectClicked(objectSelectedFromSwitcher));
        console.log(objectClickedBack);
    };
    const newTabInfoHandler = (infoToCreateNewTab: NewTabInfo) => {
        dispatch(newTabName(infoToCreateNewTab))
        console.log(infoToCreateNewTab + " OBJECT DISTPACHED")
    }

    const fileUploaderHandler = () => {
        dispatch(fileUploaderVisibility());
    };

    const smallDevTabSelectionHandler = (selectedSection:string) => {
        dispatch(selectedTabSmallDev(selectedSection))
    }

    return {
        objectName,
        switcherVisibility,
        objectClickedBack,
        dispatch,
        toggleSwitcher,
        objectClickHandler,
        fileUploaderHandler,
        switcherInitalState,
        newTabInfoHandler,
        newTabCreated,
        newTabInf,
        tabSelectedNumber,
        smallDevTabSelectionHandler
    }
}
