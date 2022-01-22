import React, { useEffect, useState } from 'react';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  HeaderContainer,
  HeaderMenu,
  HeaderMenuButton,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
} from 'carbon-components-react/lib/components/UIShell';
import Notification20 from '@carbon/icons-react/lib/notification/20';
import UserAvatar20 from '@carbon/icons-react/lib/user--avatar/20';
import AppSwitcher20 from '@carbon/icons-react/lib/app-switcher/20';
import { Link } from 'react-router-dom';
import { Search20, Fade16, IotPlatform32 } from '@carbon/icons-react';
import LandingPage from '../../content/landingComponent';
import { useHeader } from '../../customHooks/useHeader';

const HeaderComp = () => {

  const { smallDevTabSelectionHandler, tabSelectedNumber, switcherVisibility, toggleSwitcher, switcherInitalState , leftMenuVisibilitySmallDevices} = useHeader()
  const [isVisibleAux, setIsVisibleAux] = useState(true);
  
  const tabSelectionHandler = (sectionNumber: string) => {
    smallDevTabSelectionHandler(sectionNumber)
    switcherInitalState()
    console.log(isVisibleAux + " isVisibleAux!!!!!!!")
    console.log(sectionNumber + " tabSelectedNumber!!!!!!!")
    console.log(switcherVisibility + " switcherVisibility")
  }

  const visibilityHandler = () => {
    switcherInitalState()
  }

  
  return (
    <HeaderContainer
      render={({}) => (
        
        <>
          <Header aria-label="Ulogic">

            <SkipToContent />

            <div id="smallScreenMenu">
              <HeaderMenuButton
                aria-label="Open menu"
                isCollapsible
                onClick={visibilityHandler}
                isActive={leftMenuVisibilitySmallDevices}
              />
            </div>


            <HeaderName href="#" prefix="Ulogic">
              [Web]
            </HeaderName>

            <HeaderNavigation aria-label="Ulogic [Platform]">
              <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
              <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
              <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
              <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
                <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
                <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
                <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
              </HeaderMenu>
            </HeaderNavigation>


            <HeaderGlobalBar>
              <HeaderGlobalAction
                aria-label="Search"
              // onClick={action('notification click')}
              >
                <Search20 />
              </HeaderGlobalAction>
              <HeaderGlobalAction
                aria-label="Notifications"
              // onClick={action('notification click')}
              >
                <Notification20 />
              </HeaderGlobalAction>
              <HeaderGlobalAction
                aria-label="App Switcher"
                // onClick={action('app-switcher click')}
                tooltipAlignment="end">
                <AppSwitcher20 />
              </HeaderGlobalAction>
            </HeaderGlobalBar>

            {leftMenuVisibilitySmallDevices &&
              <SideNav
                aria-label="Side navigation"
                isPersistent={true}
                expanded={leftMenuVisibilitySmallDevices}
                
              >
                <SideNavItems>
                  <SideNavMenuItem onClick={() => tabSelectionHandler("0")} href="javascript:void(0)">
                    About
                  </SideNavMenuItem>
                  <SideNavMenuItem onClick={() => tabSelectionHandler("1")} href="javascript:void(0)">
                    Design
                  </SideNavMenuItem>
                  <SideNavMenuItem onClick={() => tabSelectionHandler("2")} href="javascript:void(0)">
                    Development
                  </SideNavMenuItem>
                  <SideNavMenuItem onClick={() => tabSelectionHandler("3")} href="javascript:void(0)">
                    Testing
                  </SideNavMenuItem>
                  <SideNavMenuItem onClick={() => tabSelectionHandler("4")} href="javascript:void(0)">
                    Contact
                  </SideNavMenuItem>
                </SideNavItems>
              </SideNav>}

          </Header>
        </>
      )} />)
}


export default HeaderComp;

