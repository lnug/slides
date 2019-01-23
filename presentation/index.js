// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Code,
  Deck,
  Heading,
  Fit,
  Fill,
  Image,
  Link,
  List,
  ListItem,
  Quote,
  Slide,
  S,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "rgb(70, 72, 61)",
  secondary: "rgba(255, 255, 255, 0.8)",
  highlight: "rgba(190, 211, 64, 1)"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

// =============== reusable content for slides...

const images = {
  lnugLogo: require("../assets/lnug-logo.svg"),
  nearFormLogo: require("../assets/logos/NF__Primary_Logo_Reversed_Horizontal.svg"),
  condeNastLogo: require("../assets/logos/Conde_Nast_logo.svg"),
  nexmoLogo: require("../assets/logos/nexmo-logo.svg"),
  cityJsLogo: require("../assets/logos/cityJSConf.jpg"),
  nexmoslide: require("../assets/announcements/Nexmo_LNUG.001.png"),
  spaceStartupslide: require("../assets/announcements/SWOnePager.png"),
  ijsLogo: require("../assets/logos/iJS-logo_desktop@2x.png"),
  pizza: require("../assets/pizza-1.gif"),
  cheers: require("../assets/cheers.gif")
};

const emcee = {
  name: "Adam",
  twitter: "admataz"
};


// get this from the latest from https://github.com/lnug/website/blob/master/data/this-month.json and add twitter details if desired
const speakers = [
  {
    apiSpeakerUrl: "https://api.github.com/users/shakyShane",
    speakerUrl: "https://github.com/shakyShane",
    title: "Web Assembly and the future of the Web",
    description: "<p>Over the years we&#39;ve seen many attempts by developers to avoid writing Javascript&#10;at all costs - creating new languages that compile <em>into</em> JavaScript is still a common practice&#10;in many language communities.</p>\n<p>But things are changing, for the better. We&#39;re reaching an age where potentially&#10;any high-level language will one day be able run in a browser, with greater speed&#10;and safety - all thanks to Web Assembly.</p>\n<p>This talk will provide practical information about how you can take code written&#10;in a shiny new language like Rust, compile it to a Web Assembly module and then&#10;execute it in the browser.</p>\n",
    milestone: "January 23rd 2019",
    img: "https://avatars3.githubusercontent.com/u/1643522?v=4&s=40",
    handle: "shakyShane",
    name: "Shane Osbourne"
  },
  {
    apiSpeakerUrl: "https://api.github.com/users/errietta",
    speakerUrl: "https://github.com/errietta",
    title: "Build APIs with node, Lambda & Serverless",
    description: "<p>AWS lambda allows you to build microservices that can be triggered both through HTTP and other ways such  as when something is added to a queue, or on a schedule. We&#39;ll show how it is possible to build an API which consists of small, individual functions that respond to different HTTP requests using AWS lambda and API gateway. In addition to this, we will be deploying using serverless within minutes!</p>\n<h2 id=\"about-me\">About me</h2>\n<p>Polyglot developer with a passion for learning new things.</p>\n",
    milestone: "January 23rd 2019",
    img: "https://avatars0.githubusercontent.com/u/134585?v=4&s=40",
    handle: "errietta",
    name: "Errietta Kostala"
  }
]
;

const thisMonth = {
  title: "#80 - January 2019"
};

const nextMonth = {
  date: "27th February 2019",

  speakers: [
    {
      name: "Marco Talento",
      url: "https://github.com/Talento90",
      title: "TypeScript: It's time to migrate!"
    },
    {
      name: "Rene Pot",
      url: "https://github.com/Topener",
      title: "Building Cross Platform apps with Titanium"
    },
    {
      name: "Jamie McCrindle",
      url: "https://github.com/jamiemccrindle",
      title: "Async Iterators"
    }
  ]
};


// ================== rusable components


const SpeakerSlide = ({ speaker }) => {
  if (!speaker) {
    return null;
  }

  return (
    <Slide id={speaker.name.replace(" ", "-")}>
      <Heading size={5} textColor="highlight" margin={50}>Next Up</Heading>
      <Heading size={4} textColor="secondary">{speaker.name}</Heading>
      <Heading size={6} textColor="secondary"><S type="italics">{speaker.title}</S></Heading>
    </Slide>
  );
};


const SummarySlide = ({ id }) => (<Slide align={"center center"} id={id}>
  <Image src={images.lnugLogo} margin="0px auto 0px" height="200px" />
  <Heading size={6} textColor="highlight">{thisMonth.title}</Heading>
  {speakers.map((speaker) =>
    (<Fit key={speaker.title} textColor="secondary" textSize={38} margin="20px 0">
      {speaker.name} <S type="italics" textSize={24}> <br />{speaker.title} </S>
      <Text textColor="secondary" textSize={20}>
        {speaker.twitter
              && <span>Twitter: @{speaker.twitter} </span>
        }

        {speaker.github
              && <span>Github: @{speaker.github}</span>
        }
      </Text>
    </Fit>)
  )}
</Slide>);


// ====================


export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} progress={"none"}>

        <SummarySlide id={"start"} />

        <Slide id={"safety"}>
          <Heading size={3} lineHeight={3} textColor="secondary">Important</Heading>
          <Appear><Heading size={5} textColor="secondary">🚻 Toilets: ask for a pass </Heading></Appear>
          <Appear><Heading size={5} textColor="secondary">🚒 Fire Exits: next to the toilets </Heading></Appear>
          <Appear><Heading size={5} textColor="secondary">📡 Wifi: <Code textColor="secondary">CN Guest</Code> </Heading></Appear>
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
            <Fill textColor="secondary">
              <p>No Q&A - chat in the breaks instead</p>
              <p>Please don't interrupt the speaker</p>
            </Fill>
          </Appear>
        </Slide>

        <Slide id={"hashtags"}>
          <Heading size={5} textColor="secondary">Tweet</Heading>
          <Heading size={2} textColor="highlight">@lnugORG</Heading>
          <Heading size={4} textColor="secondary"><Code textColor="secondary">#LNUG #node #javascript #london</Code></Heading>
          <Appear>
            <Heading size={6} textColor="secondary" margin="20px 0" textSize="20px" textColor="highlight">tweet me too @{emcee.twitter}</Heading>
          </Appear>
        </Slide>

        <Slide id={"gitter"}>
          <Heading size={3} textColor="highlight">discuss!</Heading>
          <Heading size={4} textColor="secondary"><Link href="http://gitter.im/lnug/discuss" target="_blank"><Code textColor="secondary">gitter.im/lnug/discuss</Code></Link></Heading>
        </Slide>

        <Slide id={"jobs"}>
          <Heading size={3} textColor="highlight">jobs!</Heading>
          <Heading size={4} textColor="secondary"><Link href="https://gitter.im/lnug/london-node-jobs" target="_blank"><Code textColor="secondary">gitter.im/lnug/london-node-jobs</Code></Link></Heading>
        </Slide>

        <Slide id={"venue"}>
          <Heading size={5} textColor="highlight">Venue</Heading>
          <Image src={images.condeNastLogo} margin="0px auto 40px" width="800px" padding="10px" />
        </Slide>

        <Slide id={"food-and-drink"} style="background: #fff">
          <Heading size={5} textColor="highlight">Food and drink</Heading>
          <Image src={images.nearFormLogo} margin="0px auto 40px" height="293px" padding="10px" />
        </Slide>

        <Slide id={"video-production"}>
          <Heading size={5} textColor="highlight">Video</Heading>
          <Image src={images.nexmoLogo} margin="0px auto 40px" width="800px" />
        </Slide>

        <Slide id={"nexmo-promo"}>
          <Image src={images.nexmoslide} margin="0px auto 40px" width="100%" />
        </Slide>

        <Slide id={"cityJS-promo"}>
          <Heading size={5} textColor="highlight">community</Heading>
          <Heading size={3} textColor="secondary" >CityJsConf 2019</Heading>
          <Text textColor="secondary" italic margin={20}>cityJSConf.org</Text>
          <Image src={images.cityJsLogo} margin="0px auto 40px" width="200px" />
        </Slide>

        <Slide id={"space-promo"}>
          <Image src={images.spaceStartupslide} margin="0px auto 40px" width="100%" />
        </Slide>


        <Slide id={"codefirstgirls-promo"}>
          <Heading size={5} textColor="highlight">community</Heading>
          <Heading size={3} textColor="secondary" >Code First Girls</Heading>
          <Text textColor="secondary" italic margin={20}>codefirstgirls.org.uk/become-an-instructor.html</Text>
        </Slide>

        <Slide id={"ijs-promo"}>
          <Image src={images.ijsLogo} margin="0px auto 40px" width="400px" />
          <Text textColor="highlight" > 15 % discount code: ijs-lnug-15</Text>
          <Text textColor="secondary" italic margin={20}>
          May 13 – 15, 2019 | London<br />
          EXPO: May 13 & 14, 2019</Text>
        </Slide>


        <SummarySlide id="ready"/>

        <SpeakerSlide speaker={speakers[0]} />

        <Slide id={"community-announcments"}>
          <Image src={images.lnugLogo} margin="0px auto 0px" height="200px" />
          <Heading size={3} textColor="highlight" margin={50}>Community Announcements</Heading>
          <Heading size={5} textColor="secondary">Have something to share?</Heading>
        </Slide>

        <Slide id={"submit-a-talk"}>
          <Image src={images.lnugLogo} margin="0px auto 0px" height="200px" />
          <Heading size={3} textColor="highlight">Submit a talk proposal!</Heading>
          <Code type="bold" textColor="secondary">github.com/lnug/speakers</Code>
        </Slide>

        {speakers.length > 1
          && <SpeakerSlide speaker={speakers[1]} />
        }

        <Slide id={"get-involved"}>
          <Image src={images.lnugLogo} margin="0px auto 0px" height="200px" />
          <Heading size={5} textColor="highlight">Get Involved</Heading>
          <Heading size="6" textColor="secondary">Feedback<br /><Code type="bold" textColor="secondary">github.com/lnug/feedback</Code></Heading>
          <Heading size="6" textColor="secondary">Gitter<br /><Code type="bold" textColor="secondary">gitter.com/lnug/discuss</Code></Heading>
        </Slide>


        {speakers.length > 2
          && <SpeakerSlide speaker={speakers[2]} />
        }

        <Slide id={"nex-time"}>
          <Image src={images.lnugLogo} margin="0px auto 0px" height="140px" />
          <Heading size={5} textColor="highlight">Next Time</Heading>
          <Heading size={5} textColor="secondary">{nextMonth.date}</Heading>
          <List margin="20px 5%">
            {nextMonth.speakers.map((speaker) =>
              (<ListItem key={speaker.title} textColor="secondary" textSize={30} margin="20px 0">
                {speaker.name} <S type="italics"> - {speaker.title}</S>
              </ListItem>)
            )}
          </List>

          <Code textColor="secondary" bold>
            meetup.com/london-nodejs
          </Code>
          <Text textColor="highlight" italic margin={20}>
            The 4th Wednesday of the month
          </Text>
        </Slide>


        <Slide align={"center center"}>
          <div align="center">
            <Image src={images.lnugLogo} margin="10px" height="153px" />
            <Heading size={3} textColor="highlight" >Thank You</Heading>
            <Heading size={5} textColor="secondary">Had a great time? Let us know!</Heading>
            <Text textColor="highlight">github.com/lnug/feedback</Text>

            <br />and thanks again...<br />


            <Image src={images.condeNastLogo} margin="10" height="60"/>
            <Image src={images.nexmoLogo} margin="10" height="40"/>
            <Image src={images.nearFormLogo} margin="10" height="80" />
          </div>
        </Slide>


        <Slide>
          <Heading size={5} textColor="highlight" margin={30}>After Party</Heading>
          <Heading size={5} textColor="secondary">Theodore Bullfrog</Heading>
          <Text textColor="secondary" margin={10}>
          26-30 John Adam St, London WC2N 6HL
          </Text>
          <Image src={images.cheers.replace("/", "")} margin="40px auto 0px" height="200px" />
          <Heading size={5} textColor="highlight" >Before you go...</Heading>

          Tidy up after yourself!
          Get involved!


        </Slide>


      </Deck>
    );
  }
}
