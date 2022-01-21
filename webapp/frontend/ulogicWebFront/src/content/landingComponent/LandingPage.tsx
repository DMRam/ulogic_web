import React, { useEffect, useState } from 'react';
import {
  Tab,
  Tabs
} from 'carbon-components-react';
import { InfoSection, InfoCard } from '../../components/infoComponent';
import Globe32 from '@carbon/icons-react/lib/globe/32';
import PersonFavorite32 from '@carbon/icons-react/lib/person--favorite/32';
import Application32 from '@carbon/icons-react/lib/application/32';
import { FormComp } from '../../components/formComponent/FormComp';
import { useHeader } from '../../customHooks/useHeader';

const props = {
  tabs: {
    selected: 0,
    triggerHref: '#',
    role: 'navigation',
  },
  tab: {
    href: '#',
    role: 'presentation',
    tabIndex: 0,
  },
};

const LandingPage = () => {

  const { tabSelectedNumber } = useHeader()
  // Este state debe recibir el valor enviado desde el sidenavmenu
  const [selectedTab, setSelectedTab] = useState("");
  

  useEffect(() => {
    setSelectedTab(tabSelectedNumber)
  }, []);


  return (
    <>
      <div style={{ background: "black" }} className="bx--grid bx--grid--full-width landing-page">

        <div style={{ backgroundImage: `url("https://besthqwallpapers.com/Uploads/24-7-2020/138345/thumb2-digital-technology-background-with-zeros-and-ones-digital-blue-background-binary-code-background-digital-data-binary-code-texture.jpg")` }} className="bx--row landing-page__banner">
          <div className="bx--col-lg-16">
            {/* <Breadcrumb noTrailingSlash aria-label="Page navigation">
            <BreadcrumbItem>
              <a href="/">Getting started</a>
            </BreadcrumbItem>
          </Breadcrumb> */}
            <strong>
              <h1 style={{ color: "white" }} className="landing-page__heading">
                Ulogic
                {/* &amp; === & */}
              </h1>
            </strong>
            <h3 style={{ color: "white" }}>
              Building ideas
            </h3>
          </div>
        </div>



        <div className="bx--row landing-page__r3">
          <div className="bx--col bx--no-gutter">
            <Tabs id="smallScreenMenuLanding"   {...props.tabs} aria-label="Tab navigation" selected={Number(tabSelectedNumber)}  >

              <Tab  {...props.tab} label="About">
                <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                  <div className="bx--row landing-page__tab-content">
                    <div className="bx--col-md-4 bx--col-lg-7 marginTabSmallScreen">

                      <h2 className="landing-page__subheading">
                        Ulogic
                      </h2>
                      <p className="landing-page__p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est doloribus maxime repellendus
                        ex id temporibus veniam nemo, ea quis fuga magnam odit voluptas? Doloribus itaque officia
                        eligendi iste ullam debitis!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est doloribus maxime repellendus
                        ex id temporibus veniam nemo, ea quis fuga magnam odit voluptas? Doloribus itaque officia
                        eligendi iste ullam debitis!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est doloribus maxime repellendus
                        ex id temporibus veniam nemo, ea quis fuga magnam odit voluptas? Doloribus itaque officia
                        eligendi iste ullam debitis!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est doloribus maxime repellendus
                        ex id temporibus veniam nemo, ea quis fuga magnam odit voluptas? Doloribus itaque officia
                        eligendi iste ullam debitis!
                      </p>
                    </div>
                    <div className="bx--col-md-4 bx--col-lg-7 marginTabSmallScreen">
                      <img alt='neu' style={{ width: "100%" }} src='https://www.designyourway.net/blog/wp-content/uploads/2018/12/Information-technology-big-data-collection-complex.jpg' />
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab {...props.tab} label="Design">
                <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                  <div className="bx--row landing-page__tab-content">
                    <div className="bx--col-md-4 bx--col-lg-7 marginTabSmallScreen">
                      <h2 className="landing-page__subheading">
                        What is Carbon?
                      </h2>
                      <p className="landing-page__p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est doloribus maxime repellendus
                        ex id temporibus veniam nemo, ea quis fuga magnam odit voluptas? Doloribus itaque officia
                        eligendi iste ullam debitis!

                      </p>


                    </div>
                    <div className="bx--col-md-4 bx--col-lg-7 marginTabSmallScreen">
                      <img alt='neu' style={{ width: "100%" }} src='https://www.designyourway.net/blog/wp-content/uploads/2018/12/Information-technology-big-data-collection-complex.jpg' />
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab {...props.tab} label="Develop">
                <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                  <div className="bx--row landing-page__tab-content">
                    <div className="bx--col-md-4 bx--col-lg-7 marginTabSmallScreen">
                      <h2 className="landing-page__subheading">
                        Get in Touch
                      </h2>
                      <p className="landing-page__p">
                        <FormComp />
                      </p>

                    </div>
                    <div className="bx--col-md-4 bx--col-lg-7 marginTabSmallScreen">
                      <img alt='neu' style={{ width: "100%", borderRadius: 10 }} src='https://www.designyourway.net/blog/wp-content/uploads/2018/12/Information-technology-big-data-collection-complex.jpg' />
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab {...props.tab} label="Testing">
                <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                  <div className="bx--row landing-page__tab-content">
                    <div className="bx--col-md-4 bx--col-lg-7 marginTabSmallScreen">
                      <h2 className="landing-page__subheading">
                        Get in Touch
                      </h2>
                      <p className="landing-page__p">
                        <FormComp />
                      </p>

                    </div>
                    <div className="bx--col-md-4 bx--col-lg-7 marginTabSmallScreen">
                      <img alt='neu' style={{ width: "100%", borderRadius: 10 }} src='https://www.designyourway.net/blog/wp-content/uploads/2018/12/Information-technology-big-data-collection-complex.jpg' />
                    </div>
                  </div>
                </div>
              </Tab>

            </Tabs>
          </div>
        </div>


        <InfoSection heading="The Principles" className="landing-page__r3">
          <InfoCard
            heading="Carbon is Open"
            body="It's a distributed effort, guided by the principles of the open-source movement. Carbon's users are also it's makers, and everyone is encouraged to contribute."
            icon={<PersonFavorite32 />}
          />
          <InfoCard
            heading="Carbon is Modular"
            body="Carbon's modularity ensures maximum flexibility in execution. It's components are designed to work seamlessly with each other, in whichever combination suits the needs of the user."
            icon={<Application32 />}
          />
          <InfoCard
            heading="Carbon is Consistent"
            body="Based on the comprehensive IBM Design Language, every element and component of Carbon was designed from the ground up to work elegantly together to ensure consistent, cohesive user experiences."
            icon={<Globe32 />}
          />
        </InfoSection>
        <br />
      </div>

      <div style={{ background: "black" }}>
        <p style={{ textAlign: "center", color: "white" }}>&copy;  2022 <a href='http://www.ulogicapp.com'>ulogicapp.com </a></p>
      </div>
    </>
  );
};

export default LandingPage;
