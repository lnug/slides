// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Image,
  Link,
  Code,
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
  name: "Laszlo",
  twitter: "lazlojuly"
};

const speakers = [
  {
    name: "Anna Doubkova",
    title: "Node microservices at Pizza Hut"
  },
  {
    name: "Bruno Godefroy",
    title: "Do not yield to javascript generators!"
  },
  {
    name: "Zaiste",
    title: "Rapid web development with Huncwot & Marko"
  }
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
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} progress={"none"}>
        <Slide align={"center center"}>
         <Image src={images.logo} margin="0px auto 0px" height="200px"/>
         <Heading size={6} textColor="secondary">#65 - June 2017</Heading>
            {speakers.map((speaker) =>
              <Text key={speaker.title} textColor="secondary" textSize={30}>
                {speaker.name} <S type="italics"> - {speaker.title}</S>
              </Text>
            )}
        </Slide>


        <Slide id={"safety"}>
          <Heading size={3} lineHeight={3} textColor="secondary">safety and comfort</Heading>
          <Appear><Heading size={5} textColor="secondary">🚒 Fire Exits: stairs behind you </Heading></Appear>
          <Appear><Heading size={5} textColor="secondary">🚻 Toilets: towards the lifts </Heading></Appear>
          <Appear><Heading size={5} textColor="secondary">📡 Wifi <Code textColor="secondary">makersWelcome</Code> </Heading></Appear>
          <Appear><Heading size={5} textColor="secondary">⭐️ Code of Conduct </Heading></Appear>
        </Slide>


        <Slide id={"hashtags"}>
          <Heading size={3} textColor="secondary">tweet @lnugorg</Heading>
          <Heading size={4} textColor="secondary"><Code textColor="secondary">#LNUG #node #javascript #london</Code></Heading>
          <Appear>
            <Heading size={6} textColor="secondary">tweet at me too (@{emcee.twitter})</Heading>
          </Appear>
        </Slide>

        <Slide id={"gitter"}>
          <Heading size={3} textColor="secondary">discuss!</Heading>
          <Heading size={4} textColor="secondary"><Link href="http://gitter.im/lnug/discuss" target="_blank"><Code textColor="secondary">gitter.im/lnug/discuss</Code></Link></Heading>
        </Slide>


        <Slide id={"venue"}>
          <Heading size={3} textColor="secondary">Venue</Heading>
          <Image src={images.makersLogo.replace("/", "")} margin="0px auto 40px" height="293px"/>
        </Slide>

        <Slide id={"pizza-and-beer"}>
          <Heading size={3} textColor="secondary">Pizza and beer</Heading>
          <Image src={images.tiroLogo.replace("/", "")} margin="0px auto 40px" height="293px"/>
        </Slide>

        <Slide id={"video-production"}>
          <Heading size={3} textColor="secondary">Video</Heading>
          <Image src={images.pusherLogo.replace("/", "")} margin="0px auto 40px" height="293px"/>
        </Slide>

        <SpeakerSlide speaker={speakers[0]} />

        <Slide>
          <Heading size={3} textColor="secondary" margin={50}>Community Announcements</Heading>
          <Heading size={5} textColor="secondary">Who? What? Contact details?</Heading>
          <Heading size={5} textColor="secondary">Hiring?</Heading>
          <Heading size={5} textColor="secondary">Available for hire?</Heading>
          <Heading size={5} textColor="secondary">Have something to share?</Heading>
        </Slide>

        <SpeakerSlide speaker={speakers[1]} />

        <Slide>
          <Heading size={3} textColor="secondary">Get Involved</Heading>
            <Heading size="5" textColor="secondary">Feedback<br/><Code type="bold" textColor="secondary">github.com/lnug/feedback</Code></Heading>
            <Heading size="5" textColor="secondary">Gitter<br/><Code type="bold" textColor="secondary">gitter.com/lnug/discuss</Code></Heading>
        </Slide>

        <Slide>
             <Image src={images.logo} margin="0px auto 0px" height="200px"/>
            <Heading size={3} textColor="secondary">submit a talk proposal!</Heading>
            <Code type="bold" textColor="secondary">github.com/lnug/speakers</Code>
        </Slide>

        <Slide>
           <Image src={images.logo} margin="0px auto 0px" height="200px"/>
          <Heading size={3} textColor="secondary" margin={40}>Next Time</Heading>
          <Heading size={4} textColor="secondary">27th September 2017</Heading>
          <Code textColor="secondary" bold>
            meetup.com/london-nodejs
          </Code>
          <Text textColor="secondary" italic margin={20}>
            The 4th Wednesday of the month
          </Text>
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
            Rubbish in Bins,
            Stack chairs against walls,
            Get involved!
        </Slide>

      </Deck>
    );
  }
}
