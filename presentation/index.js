// Import React
import React from "react";
const { PropTypes } = React;

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
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


const speakers = [
  { name: "Paul Jensen", title: "From LNUG presentation to published book" },
  { name: "", title: "Trading cryptocurrencies, forex, commodities stocks and more using node.js" },
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
        <Heading size={3} textColor="secondary">Next Up</Heading>
        <Heading size={4} textColor="secondary">{speaker.name}</Heading>
        <Heading size={5} textColor="secondary">{speaker.title}</Heading>
        <Text>Grab a drink & pizza then grab a seat!</Text>
        <Image src={images.pizza.replace("/", "")} margin="0px auto 40px" height="293px"/>
      </Slide>
    );
  }
}

const speakerListItem = (speaker) => (
  speaker
  ? <ListItem key={speaker.title}>{speaker.title} <S type="italics">- {speaker.name}</S></ListItem>
  : null
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.logo} margin="0px auto 40px" height="293px"/>
          <Heading size={3} textColor="secondary">DATE (#NUMBER)</Heading>
          <List>
            {speakers.map(speakerListItem)}
          </List>
          <List>
            <ListItem>WIFI: See the walls</ListItem>
            <ListItem>Twitter: @LNUGorg use hashtags #LNUG #node #javascript #london</ListItem>
            <ListItem>Gitter: lnug/discuss</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="secondary">House Keeping</Heading>
          <List>
            <ListItem>Say hello on Twitter: @lnugorg #lnug (and me: <S type="bold">@clarkieclarkie</S>)</ListItem>
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
          <Heading size={3} textColor="secondary">Community Announcements</Heading>
          <Text>Who? What? Contact details?</Text>
          <Heading size={5} textColor="secondary">Hiring?</Heading>
          <Heading size={5} textColor="secondary">Available for hire?</Heading>
          <Heading size={5} textColor="secondary">Have something to share?</Heading>
        </Slide>

        <Slide>
          <Heading size={3} textColor="secondary">Get Involved</Heading>
          <List>
            <ListItem>Assets & Slides</ListItem>
            <List>
              <ListItem>github.com/lnug/resources</ListItem>
            </List>
            <ListItem>Website Tips</ListItem>
            <List>
              <ListItem>github.com/lnug/lnug.github.io</ListItem>
            </List>
            <ListItem>Gitter Channel</ListItem>
            <List>
              <ListItem>lnug/discuss</ListItem>
            </List>
          </List>
        </Slide>

        <Slide>
          <Heading size={3} textColor="secondary">Call for speakers</Heading>
          <List>
            <ListItem>We have speaker slots available!</ListItem>
            <ListItem>Visit github.com/lnug/speakers to submit your talk!</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={3} textColor="secondary">Next Time</Heading>
          <Heading size={4} textColor="secondary">26th April 2017</Heading>
          <Text>
            The 4th Wednesday of the month
            meetup.com/london-nodejs/
          </Text>
          <List>
            <ListItem>Rubbish in Bins</ListItem>
            <ListItem>Stack chairs against walls</ListItem>
            <ListItem>Get involved!</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={3} textColor="secondary">After Party</Heading>
          <Heading size={5} textColor="secondary">The Culpeper</Heading>
          <BlockQuote>
            40 Commercial Street,
            London,
            E1 6LP
          </BlockQuote>
          <Text>http://theculpeper.com/pub/</Text>
          <Image src={images.cheers.replace("/", "")} margin="0px auto 40px" height="293px"/>
        </Slide>

        <SpeakerSlide speaker={speakers[2]} />

        <Slide>
          <Heading size={3} textColor="secondary">Thank You</Heading>
          <Heading size={5} textColor="secondary">Had a great time? Let us know!</Heading>
          <Text>github.com/lnug/feedback</Text>
          <Heading size={5} textColor="secondary">Brought to you by</Heading>
          <List>
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
