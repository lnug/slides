// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Image,
  S
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const { PropTypes } = React;

const images = {
  logo: require("../assets/lnug-logo.svg"),
  makersLogo: require("../assets/makers_logo.png"),
  tiroLogo: require("../assets/tiro_logo.jpg"),
  pusherLogo: require("../assets/pusher_logo_white.png"),
  pizza: require("../assets/pizza-1.gif"),
  cheers: require("../assets/cheers.gif")
};

preloader(images);

const theme = createTheme({
  primary: "rgb(70, 72, 61)",
  secondary: "rgba(255, 255, 255, 0.8)"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const emcee = {
  name: "Cyril",
  twitter: "cyril.silverman"
};

const speakers = [
  { name: "Paul Jensen", title: "From LNUG presentation to published book" },
  { name: "flyingunicorn222", title: "Trading cryptocurrencies, forex, commodities stocks and more using node.js" },
  { name: "Will Munn", title: "Speeding up CI with node and docker" }
];


class SpeakerSlide extends React.Component {
  static propTypes = {
    speaker: PropTypes.object
  };

  render() {
    const { speaker } = this.props;
    if (!speaker) {
      return null;
    }

    return (
      <Slide>
        <Heading size={5} textColor="secondary" margin={50}>Next Up</Heading>
        <Heading size={4} textColor="secondary">{speaker.name}</Heading>
        <Heading size={6} textColor="secondary"><S type="italics">{speaker.title}</S></Heading>
        <Text textSize={30} margin={50} textColor="secondary">Grab a drink & pizza then grab a seat!</Text>
      </Slide>
    );
  }
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.logo} margin="0px auto 0px" height="200px"/>
          <Heading size={6} textColor="secondary">May 24th, 2017 (#63)</Heading>
          <List>
            {speakers.map((speaker) =>
              <ListItem textSize={30} key={speaker.title}>
                {speaker.title} <S type="italics">- {speaker.name}</S>
              </ListItem>
            )}
          </List>
          <List>
            <ListItem textSize={30}>WIFI: See the walls</ListItem>
            <ListItem textSize={30}>Twitter: @LNUGorg use hashtags #LNUG #node #javascript #london</ListItem>
            <ListItem textSize={30}>Gitter: lnug/discuss</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="secondary">House Keeping</Heading>
          <List>
            <ListItem>Say hello on Twitter: @lnugorg #lnug (and me: <S type="bold">@{emcee.twitter}</S>)</ListItem>
            <ListItem>YouTube: LNUG Team 🎥</ListItem>
            <ListItem>Instagram: <S type="bold">@lnugorg</S> #lnug 📷</ListItem>
            <ListItem>Gitter: <S type="bold">lnug/discuss</S> 📢</ListItem>
            <ListItem>Code of Conduct 💕</ListItem>
            <ListItem>Toilets 🚻</ListItem>
            <ListItem>Fire Escapes! 🔥</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={3} textColor="secondary">Venue</Heading>
          <Image src={images.makersLogo.replace("/", "")} margin="0px auto 40px" height="293px"/>
        </Slide>

        <Slide>
          <Heading size={3} textColor="secondary">Pizza and beer</Heading>
          <Image src={images.tiroLogo.replace("/", "")} margin="0px auto 40px" height="293px"/>
        </Slide>

        <Slide>
          <Heading size={3} textColor="secondary">Video</Heading>
          <Image src={images.pusherLogo.replace("/", "")} margin="0px auto 40px" height="293px"/>
        </Slide>

        <SpeakerSlide speaker={speakers[0]} />
        <SpeakerSlide speaker={speakers[1]} />

        <Slide>
          <Heading size={3} textColor="secondary" margin={50}>Community Announcements</Heading>
          <Heading size={5} textColor="secondary">Who? What? Contact details?</Heading>
          <Heading size={5} textColor="secondary">Hiring?</Heading>
          <Heading size={5} textColor="secondary">Available for hire?</Heading>
          <Heading size={5} textColor="secondary">Have something to share?</Heading>
        </Slide>

        <Slide>
          <Heading size={3} textColor="secondary">Get Involved</Heading>
          <List>
            <ListItem>Assets & Slides<br/>(<S type="bold">github.com/lnug/resources</S>)</ListItem>
            <ListItem>Website Tips<br/>(<S type="bold">github.com/lnug/lnug.github.io</S>)</ListItem>
            <ListItem>Gitter Channel<br/>(<S type="bold">lnug/discuss</S>)</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={3} textColor="secondary">Call for speakers</Heading>
          <List>
            <ListItem>We have speaker slots available!</ListItem>
            <ListItem>Visit <S type="bold">github.com/lnug/speakers</S> to submit your talk!</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={3} textColor="secondary" margin={40}>Next Time</Heading>
          <Heading size={4} textColor="secondary">18th June 2017</Heading>
          <Text textColor="secondary" bold>
            meetup.com/london-nodejs
          </Text>
          <Text textColor="secondary" italic margin={20}>
            The 4th Wednesday of the month
          </Text>
          <List>
            <ListItem>Rubbish in Bins</ListItem>
            <ListItem>Stack chairs against walls</ListItem>
            <ListItem>Get involved!</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={3} textColor="secondary" margin={30}>After Party</Heading>
          <Heading size={5} textColor="secondary">The Culpeper</Heading>
          <Text textColor="secondary" margin={10}>
            40 Commercial Street, London, E1 6LP
          </Text>
          <Text textColor="secondary" margin={10}>
            http://theculpeper.com/pub/
          </Text>
          <Image src={images.cheers.replace("/", "")} margin="40px auto 0px" height="200px"/>
        </Slide>

        <SpeakerSlide speaker={speakers[2]} />

        <Slide>
          <Heading size={3} textColor="secondary">Thank You</Heading>
          <Heading size={5} textColor="secondary">Had a great time? Let us know!</Heading>
          <Text textColor="secondary">github.com/lnug/feedback</Text>
          <Heading size={5} textColor="secondary" margin={"40px 0 0 0"}>Brought to you by</Heading>
          <List margin="20px 0 0 0">
            <ListItem>Makers Academy</ListItem>
            <ListItem>Tiro Partners</ListItem>
            <ListItem>Pusher</ListItem>
            <ListItem>github.com/orgs/lnug/people</ListItem>
          </List>
        </Slide>

      </Deck>
    );
  }
}
