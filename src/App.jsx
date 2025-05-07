import React, { useState } from "react";
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  Content,
  Theme,
  Grid,
  Column,
  ClickableTile,
  Button,
  Section,
  Heading,
  Stack,
  Toggle
} from "@carbon/react";
import "./App.css";

// Import images for the show tiles
import springHoneyShow from "./assets/images/spring-honey-show.jpg";
import otherStateSchool from "./assets/images/other-state-school.jpg";
import upBeeExpo from "./assets/images/up-bee-expo.jpg";
import missouriBeeShow1 from "./assets/images/missouri-bee-show-1.jpg";
import missouriBeeShow2 from "./assets/images/missouri-bee-show-2.jpg";
import missouriBeeShow3 from "./assets/images/missouri-bee-show-3.jpg";

function App() {
  // State for theme toggle
  const [theme, setTheme] = useState('g100');

  // Toggle theme between 'white' and 'g100'
  const handleThemeChange = (checked) => {
    setTheme(checked ? 'white' : 'g100');
  };

  return (
    <Theme theme={theme}>
      <Header aria-label="American Honey Show Training Council">
        <HeaderName href="#" prefix="American">
          Honey Show Training Council
        </HeaderName>
        <HeaderNavigation aria-label="Navigation">
          <HeaderMenuItem href="#">Home</HeaderMenuItem>
          <HeaderMenuItem href="#">History</HeaderMenuItem>
          <HeaderMenuItem href="#">Services</HeaderMenuItem>
          <HeaderMenuItem href="#">Getting Certified</HeaderMenuItem>
          <HeaderMenuItem href="#">Events</HeaderMenuItem>
          <HeaderMenuItem href="#">Find a Honey Judge</HeaderMenuItem>
          <HeaderMenuItem href="#">More</HeaderMenuItem>
        </HeaderNavigation>
      </Header>
      
      <Content>
        <Grid fullWidth>
          <Column lg={14} md={6} sm={4}>
            <Section>
              <Heading>Welcome to the American Honey Show Training Council</Heading>
              <p>
                The American Honey Show Training Council's mission is to raise the standard of honey shows through
                expert, uniform training and certification. We honor our rich heritage while ensuring consistent,
                professional excellence in every honey show event.
              </p>
            </Section>
          </Column>
          <Column lg={2} md={2} sm={4} className="theme-toggle-container">
            <Toggle
              id="theme-toggle"
              labelText="Theme"
              labelA="Dark"
              labelB="Light"
              toggled={theme === 'white'}
              onToggle={handleThemeChange}
              aria-label="Toggle between dark and light themes"
            />
          </Column>
        </Grid>
        
        <Grid fullWidth className="honey-show-section">
          <Column lg={16} md={8} sm={4}>
            <Heading>Upcoming Shows</Heading>
          </Column>
          <Column lg={5} md={4} sm={4}>
            <ClickableTile
              className="honey-show-tile"
              href="#"
              light={theme === 'white'}
            >
              <div className="tile-image-container">
                <img src={springHoneyShow} alt="State Spring Honey Show" className="tile-image" />
              </div>
              <Heading>State Spring Honey Show</Heading>
              <p>May 8</p>
              <p>Milford, OH</p>
            </ClickableTile>
          </Column>
          <Column lg={5} md={4} sm={4}>
            <ClickableTile
              className="honey-show-tile"
              href="#"
              light={theme === 'white'}
            >
              <div className="tile-image-container">
                <img src={otherStateSchool} alt="Other State School" className="tile-image" />
              </div>
              <Heading>Other State School</Heading>
              <p>July 1-3</p>
              <p>Rhinelander, WI</p>
              <p className="training-badge">Honey Judge Training Available</p>
            </ClickableTile>
          </Column>
          <Column lg={5} md={4} sm={4}>
            <ClickableTile
              className="honey-show-tile"
              href="#"
              light={theme === 'white'}
            >
              <div className="tile-image-container">
                <img src={upBeeExpo} alt="UP Bee Expo" className="tile-image" />
              </div>
              <Heading>UP Bee Expo</Heading>
              <p>August 5</p>
              <p>Iron River, WI</p>
            </ClickableTile>
          </Column>
        </Grid>
        
        <Grid fullWidth className="honey-show-section">
          <Column lg={16} md={8} sm={4}>
            <Heading>Most Recent Shows</Heading>
          </Column>
          <Column lg={5} md={4} sm={4}>
            <ClickableTile
              className="honey-show-tile"
              href="#"
              light={theme === 'white'}
            >
              <div className="tile-image-container">
                <img src={missouriBeeShow1} alt="Missouri Bee Show" className="tile-image" />
              </div>
              <Heading>Missouri Bee Show</Heading>
              <p>July 1-3</p>
              <p>Iron River, MI</p>
              <p>20 Entrants</p>
              <p>50 Entries</p>
            </ClickableTile>
          </Column>
          <Column lg={5} md={4} sm={4}>
            <ClickableTile
              className="honey-show-tile"
              href="#"
              light={theme === 'white'}
            >
              <div className="tile-image-container">
                <img src={missouriBeeShow2} alt="Missouri Bee Show" className="tile-image" />
              </div>
              <Heading>Missouri Bee Show</Heading>
              <p>July 1-3</p>
              <p>Iron River, MI</p>
              <p>20 Entrants</p>
              <p>50 Entries</p>
            </ClickableTile>
          </Column>
          <Column lg={5} md={4} sm={4}>
            <ClickableTile
              className="honey-show-tile"
              href="#"
              light={theme === 'white'}
            >
              <div className="tile-image-container">
                <img src={missouriBeeShow3} alt="Missouri Bee Show" className="tile-image" />
              </div>
              <Heading>Missouri Bee Show</Heading>
              <p>July 1-3</p>
              <p>Iron River, MI</p>
              <p>20 Entrants</p>
              <p>50 Entries</p>
            </ClickableTile>
          </Column>
        </Grid>
        
        <Grid fullWidth className="honey-show-section">
          <Column lg={8} md={4} sm={4}>
            <Section className="info-section">
              <Heading>Get Show Help</Heading>
              <p>
                The AHSTC has trained judges and secretaries across the United States who can help in the management or
                judging of your honey show. We have the experience to make your show a success!
              </p>
            </Section>
          </Column>
          
          <Column lg={8} md={4} sm={4}>
            <Section className="info-section">
              <Heading>Get Certified</Heading>
              <p>
                Are you ready to elevate your honey show judging and management skills? The AHSTC certification process
                equips you with the tools, knowledge, and community to succeed!
              </p>
            </Section>
          </Column>
        </Grid>
        
        <Grid fullWidth>
          <Column lg={16} md={8} sm={4}>
            <Stack gap={5} orientation="horizontal">
              <Button kind="primary">Get Certified</Button>
              <Button kind="secondary">Find a Honey Judge</Button>
            </Stack>
          </Column>
        </Grid>
      </Content>
      
      <Section as="footer" level={1} className={theme === 'g100' ? 'footer-dark' : 'footer-light'}>
        <Grid fullWidth>
          <Column lg={16} md={8} sm={4} className="footer-content">
            <p>©2025 by American Honey Show Training Council</p>
            <p>The American Honey Show Training Council is a 501c3 nonprofit organization.</p>
          </Column>
        </Grid>
      </Section>
    </Theme>
  );
}

export default App;
