import React, { useEffect, useState } from 'react'
import { ObjectSelected, NewTabInfo } from '../Interfaces/InterfacesHeader';
import { Services } from '../Services/Axios/Services';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fileUploaderVisibility, newTabName, objectClicked, toggle, toggleRight } from '../store/switcher-slice';


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
        newTabInf
    }
}
