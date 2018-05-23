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
  nearFormLogo: require("../assets/nearform.jpg"),
  pusherLogo: require("../assets/pusher_logo_white.png"),
  pizza: require("../assets/pizza-1.gif"),
  cheers: require("../assets/cheers.gif"),
  condeNastLogo: require("../assets/conde_nast_logo.jpg")
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
  name: "Claire",
  twitter: "claireinez"
};


// get this from the latest from https://github.com/lnug/website/blob/master/data/this-month.json and add twitter details if desired
const speakers = [
  {
    "apiSpeakerUrl": "https://api.github.com/users/paulbjensen",
    "speakerUrl": "https://github.com/paulbjensen",
    "title": "Objection.js, a SQL ORM",
    "description": "<p>Objection.js is a SQL ORM (Object Relational mapping) for Node.js.</p>\n<p>In this talk, I will walk you through how the module works, show live examples of it in action, and present the case for considering it in your Node.js projects.</p>\n<p>Things that we&#39;ll cover are:</p>\n<ul>\n<li>Quick setup</li>\n<li>Creating the underlying database schema for your models via Knex.js</li>\n<li>Creating models and executing SQL queries via the models</li>\n<li>Implementing validation in your models with JSON schema</li>\n<li>Defining relationships between models</li>\n<li>Doing graph inserts and updates</li>\n<li>Setting up a GraphQL API with the objection-graphql plugin</li>\n<li>Other interesting objection.js plugins</li>\n</ul>\n<p>My name is Paul Jensen, I&#39;m the author of <a href=\"http://manning.com/books/cross-platform-desktop-applications\">Manning&#39;s &quot;Cross Platform Desktop Applications - Using Node, Electron, and NW.js&quot;</a>. You can find me on <a href=\"https://twitter.com/paulbjensen\">Twitter</a> and <a href=\"https://github.com/paulbjensen\">Github</a>.</p>\n",
    "milestone": "May 23rd 2018",
    "img": "https://avatars3.githubusercontent.com/u/3840?v=4",
    "handle": "paulbjensen",
    "name": "Paul Jensen",
    "twitter": "paulbjensen"
  },
  {
    "apiSpeakerUrl": "https://api.github.com/users/sielay",
    "speakerUrl": "https://github.com/sielay",
    "title": "WHAT IF WE <JSX/> DEVOPS",
    "description": "<p>A small crazy science experiment ~failed~</p>",
    "milestone": "May 23rd 2018",
    "img": "https://avatars3.githubusercontent.com/u/133139?s=400&v=4",
    "handle": "sielay",
    "name": "Lukasz Marek ",
    "twitter": "sielay"
  },
  {
    "apiSpeakerUrl": "https://api.github.com/users/erankeren",
    "speakerUrl": "https://github.com/erankeren",
    "title": "ExpressLess - 200 OK",
    "description": "<p>Heard about Serverless? Already know Express.js? Too afraid to use the two? </p>\n<p>My talk will last ~20 mins and will cover the following:</p>\n<ul>\n<li><p>Where are my servers? (Moving from the classic setup to a serverless one)</p>\n</li>\n<li><p>Express.js + Serverless?</p>\n</li>\n<li><p>How can I test my serverless app? (Offline testing)</p>\n</li>\n<li><p>Where are my logs?</p>\n</li>\n<li><p>Wait, are my apis public? (Securing your endpoints)</p>\n</li>\n<li><p>Shhhhh....(Keeping secrets)</p>\n</li>\n</ul>\n<h3 id=\"about-me-\">About me:</h3>\n<p>I started my career over a decade ago writing code for firewalls and security systems (c/c++/java). In recent years I&#39;ve been specialising in cloud engineering, microservices, aws and serverless (mostly in node.js).</p>\n<p>Now: I&#39;m the CTO of a young and still in stealth mode startup - <a href=\"http://sourcingbot.com\">sourcingbot.com</a></p>\n",
    "milestone": "May 23rd 2018",
    "img": "https://avatars3.githubusercontent.com/u/16254901?v=4",
    "handle": "erankeren",
    "name": "Eran Keren"
  }
];

const thisMonth = {
  title: "#73 - May 2018"
};

const nextMonth = {
  date: "27th June 2018",
  speakers: []
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
          <Appear><Heading size={5} textColor="secondary">🚻 Toilets: ask for a pass </Heading></Appear>
          <Appear><Heading size={5} textColor="secondary">🚒 Fire Exits: next to the toilets </Heading></Appear>
          <Appear><Heading size={5} textColor="secondary">📡 Wifi <Code textColor="secondary">CN Guest</Code> </Heading></Appear>
        </Slide>

        <Slide id="code-of-conduct">
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

        <Slide id="reminder">
          <Heading size={5} textColor="secondary">💡 A reminder </Heading>
          <Appear>
            <Text textColor="secondary">
              <p>No Q&A - chat in the breaks instead</p>
              <p>Please don't interrupt the speaker</p>
            </Text>
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
          <Image src={images.condeNastLogo.replace("/", "")} margin="0px auto 40px" width="800px"/>
        </Slide>

        <Slide id={"food-and-drink"}>
          <Heading size={3} textColor="secondary">Food and drink</Heading>
          <Image src={images.nearFormLogo.replace("/", "")} margin="0px auto 40px" height="293px"/>
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
            <Heading size={3} textColor="highlight">Submit a talk proposal!</Heading>
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
        <Image src={images.logo} margin="10px" height="153px"/>
        <Heading size={3} textColor="highlight" >Thank You</Heading>
        <Heading size={5} textColor="secondary">Had a great time? Let us know!</Heading>
        <Text textColor="secondary">github.com/lnug/feedback</Text>

        <br />and thanks again...<br />

        <Image src={images.condeNastLogo.replace("/", "")} margin="10px" height="63px"/>
        <Image src={images.nearFormLogo.replace("/", "")} margin="10px" height="63px"/>
        <Image src={images.pusherLogo.replace("/", "")} margin="10px" height="63px"/>

          </Slide>


        <Slide>
          <Heading size={3} textColor="secondary" margin={30}>After Party</Heading>
          <Heading size={5} textColor="secondary">Coal Hole</Heading>
          <Text textColor="secondary" margin={10}>
            91-92 Strand, London WC2R 0DW
          </Text>
          <Image src={images.cheers.replace("/", "")} margin="40px auto 0px" height="200px"/>
          <Heading size={5} textColor="highlight" >Before you go...</Heading>

          Tidy up after yourself!
          Get involved!


        </Slide>


      </Deck>
    );
  }
}
