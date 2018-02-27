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
  BlockQuote,
  Quote,
  Cite,
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
  secondary: "rgba(255, 255, 255, 0.8)",
  highlight: "rgba(190, 211, 64, 1)"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const emcee = {
  name: "Clarkie",
  twitter: "clarkieclarkie"
};


// get this from the latest from https://github.com/lnug/website/blob/master/data/this-month.json and add twitter details if desired
const speakers = [
    {
        "apiSpeakerUrl": "https://api.github.com/users/theninj4",
        "speakerUrl": "https://github.com/theninj4",
        "title": "Cultivating a Microservice Culture with Node.js",
        "description": "<p>We&#39;ve spent the last 14 months working with Node.js to migrate the Holiday Extras engineering team away from Node.js monolith applications and over to Node.js microservices. Node.js is the heart and soul of the operation and the time has come to share how it&#39;s taken us above and beyond our wildest dreams. In this talk I&#39;ll be sharing how we&#39;re using Node.js throughout our stack, some of the key projects we&#39;ve built and the problems they solve, and how to really make the most out of Node.js to build an incredibly powerful engineering experience. </p>\n<p>I&#39;m a software engineer in the tech-foundations pod at <a href=\"http://join.holidayextras.co.uk/\">Holiday Extras</a> with a remit to improve the efficiency of our engineering team. I&#39;ve been writing Node.js day-in-day-out for over 5 years and dabble with infrastructure on the side.</p>\n",
        "milestone": "February 28th 2018",
        "img": "https://avatars2.githubusercontent.com/u/3055120?v=4",
        "handle": "theninj4",
        "name": "Oliver Rumbelow"
    },
    {
        "apiSpeakerUrl": "https://api.github.com/users/thanpolas",
        "speakerUrl": "https://github.com/thanpolas",
        "title": "Classical Inheritance in Javascript",
        "description": "<p>Javascript inheritance has always been a challenging issue for new and seasoned developers. In this talk, we will dive deep into the inner workings of Javascript inheritance and see the beauty of prototypical inheritance and the prototype chain. While this is a classic talk, it is particularly relevant to the current debate in the React community over the use of fat arrow vs pre-bounded methods.&#10;<a href=\"https://speakerdeck.com/thanpolas/classical-inheritance-in-javascript\">Talk slides</a></p>\n<p>Github: <a href=\"https://github.com/thanpolas\">thanpolas</a>, Twitter: <a href=\"https://twitter.com/thanpolas\">@thanpolas</a>, <a href=\"http://www.linkedin.com/in/thanpolas\">LinkedIn</a>, <a href=\"http://thanpol.as\">website</a></p>\n",
        "milestone": "February 28th 2018",
        "img": "https://avatars1.githubusercontent.com/u/458813?v=4",
        "handle": "thanpolas",
        "name": "Thanasis Polychronakis"
    }
];

const thisMonth = {
  title: "#70 - February 2018"
};

const nextMonth = {
  date: "28th March 2018",
  speakers: [
    {
      name: "Claudia Matosa",
      title: "Internal Server Error"
    },
    {
      name: "Matteo Collina",
      title: "My Node.js process is on Fire"
    },
    {
      name: "Yan Cui",
      title: "Serverless in production, an experience report"
    }
  ]

};


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
        <Heading size={5} textColor="highlight" margin={50}>Next Up</Heading>
        <Heading size={4} textColor="secondary">{speaker.name}</Heading>
        <Heading size={6} textColor="secondary"><S type="italics">{speaker.title}</S></Heading>
      </Slide>
    );
  }
}


class SummarySlide extends React.Component {
  render() {
    return (<Slide align={"center center"}>
<Image src={images.logo} margin="0px auto 0px" height="200px"/>
<Heading size={6} textColor="highlight">{thisMonth.title}</Heading>
   {speakers.map((speaker) =>
     <Text key={speaker.title} textColor="secondary" textSize={38} margin="20px 0">
       {speaker.name} <S type="italics" textSize={24}> <br />{speaker.title} </S>
         <Text textColor="secondary" textSize={20}>
         {speaker.twitter &&
           <span>Twitter: @{speaker.twitter} </span>
         }

         {speaker.github &&
           <span>Github: @{speaker.github}</span>
         }
         </Text>
     </Text>
   )}
</Slide>
    );
  }
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} progress={"none"}>

      <SummarySlide />


        <Slide id={"safety"}>
          <Heading size={3} lineHeight={3} textColor="secondary">Important</Heading>
          <Appear><Heading size={5} textColor="secondary">🚒 Fire Exits: stairs behind you </Heading></Appear>
          <Appear><Heading size={5} textColor="secondary">🚻 Toilets: towards the lifts </Heading></Appear>
          <Appear><Heading size={5} textColor="secondary">📡 Wifi <Code textColor="secondary">makersWelcome</Code> </Heading></Appear>
        </Slide>

        <Slide>
          <Heading size={5} textColor="secondary">⭐️ Code of Conduct </Heading>
          <Appear>
          <BlockQuote>
          <Quote textColor="highlight" textSize="24px" lineHeight={5}>
              <p>LNUG is dedicated to providing a harassment-free meetup experience for everyone. We do not tolerate harassment of meetup participants in any form...</p>
              <p>This code of conduct applies to attendees, speakers, and organisers at the monthly meetups and in related social events. This includes slide decks and listings on the job board.</p>
            </Quote>
            </BlockQuote>
          </Appear>
          <Appear>
          <Text textColor="secondary">lnug.org/code-of-conduct.html</Text>
          </Appear>
        </Slide>

        <Slide id={"hashtags"}>
          <Heading size={3} textColor="secondary">Tweet <Text textColor="highlight">@lnugorg</Text></Heading>
          <Heading size={4} textColor="secondary"><Code textColor="secondary">#LNUG #node #javascript #london</Code></Heading>
          <Appear>
            <Heading size={6} textColor="secondary" margin="20px 0" size="20px" textColor="highlight">tweet me too @{emcee.twitter}</Heading>
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
        <SummarySlide />


        <SpeakerSlide speaker={speakers[0]} />

        <Slide>
        <Image src={images.logo} margin="0px auto 0px" height="200px"/>
          <Heading size={3} textColor="highlight" margin={50}>Community Announcements</Heading>
          <Heading size={5} textColor="secondary">Who? What? Contact details?</Heading>
          <Heading size={5} textColor="secondary">Hiring?</Heading>
          <Heading size={5} textColor="secondary">Available for hire?</Heading>
          <Heading size={5} textColor="secondary">Have something to share?</Heading>
        </Slide>

        {speakers.length > 1 &&
        <SpeakerSlide speaker={speakers[1]} />
        }

        <Slide>
        <Image src={images.logo} margin="0px auto 0px" height="200px"/>
          <Heading size={3} textColor="secondary">Get Involved</Heading>
            <Heading size="5" textColor="secondary">Feedback<br/><Code type="bold" textColor="secondary">github.com/lnug/feedback</Code></Heading>
            <Heading size="5" textColor="secondary">Gitter<br/><Code type="bold" textColor="secondary">gitter.com/lnug/discuss</Code></Heading>
        </Slide>

        <Slide>
             <Image src={images.logo} margin="0px auto 0px" height="200px"/>
            <Heading size={3} textColor="highlight">submit a talk proposal!</Heading>
            <Code type="bold" textColor="secondary">github.com/lnug/speakers</Code>
        </Slide>


        {speakers.length > 2 &&
          <SpeakerSlide speaker={speakers[2]} />
        }


        <Slide>
           <Image src={images.logo} margin="0px auto 0px" height="200px"/>
          <Heading size={3} textColor="highlight" margin={40}>Next Time</Heading>
          <Heading size={4} textColor="secondary">{nextMonth.date}</Heading>
          <List margin="20px 10%">
          {nextMonth.speakers.map((speaker) =>
            <ListItem key={speaker.title} textColor="secondary" textSize={30} margin="20px 0">
              {speaker.name} <S type="italics"> - {speaker.title}</S>
            </ListItem>
          )}
          </List>
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
