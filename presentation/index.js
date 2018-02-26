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
  name: "Adam",
  twitter: "admataz"
};


// get this from the latest from https://github.com/lnug/website/blob/master/data/this-month.json and add twitter details if desired
const speakers = [
  {
    "apiSpeakerUrl": "https://api.github.com/users/lazlojuly",
    "speakerUrl": "https://github.com/lazlojuly",
    "title": "Unit testing has never been so much fun!",
    "description": "<ul>\n<li>This is a lightweight and entertaining 15 minutes long talk.</li>\n<li>It is aimed at developers on <strong>ALL</strong> levels.</li>\n<li>Covers basic and advanced concepts.</li>\n</ul>\n<p>Bio: I am a JavaScript Engineer with growth mindset. &#10;Connect with me on <a href=\"https://twitter.com/lazlojuly\">Twitter</a>, <a href=\"https://www.linkedin.com/in/lazlojuly\">LinkedIn</a> or <a href=\"https://github.com/lazlojuly\">GitHub</a></p>\n",
    "milestone": "January 24th 2018",
    "img": "https://avatars0.githubusercontent.com/u/7015868?v=4",
    "handle": "lazlojuly",
    "name": "lazlojuly"
  },
  {
    "apiSpeakerUrl": "https://api.github.com/users/xscheiner",
    "speakerUrl": "https://github.com/xscheiner",
    "title": "Moving on from Mongoose: How a great thing finally cornered us",
    "description": "<p>Mongoose has helped us greatly to maintain the integrity of our data against a mongodb database. However, we are not able to share the models we use on our apis anywhere outside those apis. And Mongoose schemas are not shareable, which means we cannot consume them on any other level of our applications. This means either using conversion plugins, or else writing and maintaining some other solution. In addition, the mongoose models themselves are not shareable, which means even if we solve the schema issue, we still have at least two sets of models to maintain.</p>\n<p>Finally, we use Typescript, which means ideally we can share schema definitions with that which would allow us to define our entities once and have those definitions propagate to all levels of our applications.</p>\n<p>The final part of this presentation will focus on the solution we now intend to adopt as we begin to overhaul our entire architecture in the coming months.</p>\n",
    "milestone": "January 24th 2018",
    "img": "https://avatars3.githubusercontent.com/u/1236507?v=4",
    "handle": "xscheiner",
    "name": "David Scheiner"
  },

  {
    "apiSpeakerUrl": "https://api.github.com/users/paulbjensen",
    "speakerUrl": "https://github.com/paulbjensen",
    "title": "Creating PowerPoint files with Officegen and Node.js",
    "description": "<p>It turns out that you don&#39;t need Microsoft Office to create PowerPoint files - you can create them in Node.js. In this talk I will show you how libraries like Officegen allow you to generate PowerPoint files containing text, shapes, charts and images, and demonstrate a real-world use of this tool that we&#39;ve been crafting to save us some time.</p>\n<p>My name is Paul Jensen, I&#39;m the author of Manning&#39;s Cross Platform Desktop Applications, and I&#39;m the Lead Innovation Engineer at Starcount. My twitter handle is paulbjensen.</p>\n",
    "milestone": "January 24th 2018",
    "img": "https://avatars3.githubusercontent.com/u/3840?v=4",
    "handle": "paulbjensen",
    "name": "Paul Jensen"
  }
];

const thisMonth = {
  title: "#69 - January 2018"
};

const nextMonth = {
  date: "28th February 2018",
  speakers: [
    {
      name: "Oliver Rumbelow",
      title: "Cultivating a Microservice Culture with Node.js"
    },
    {
      name: "Thanasis Polychronakis",
      title: "Classical Inheritance in Javascript"
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
