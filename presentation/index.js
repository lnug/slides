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

const theme = createTheme(
  {
    primary: "rgb(70, 72, 61)",
    secondary: "rgba(255, 255, 255, 0.8)",
    highlight: "rgba(190, 211, 64, 1)"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

// =============== reusable content for slides...

const images = {
  lnugLogo: require("../assets/lnug-logo.svg"),
  baselimeLogo: require("../assets/logos/Baselime_Logo_RGB_Primary_DarkBg_Neutral.2acb9b0.svg"),
  ballysLogo: require("../assets/logos/Bally_s_Corporation_Logo.jpg"),
  pusherLogo: require("../assets/logos/pusher_logo_white.png"),
  pusherPromo: require("../assets/announcements/Pusher_promo.jpg"),
  reactAle: require("../assets/react-ale.png"),
  reactSummitLogo: require("../assets/logos/reactsummit.jpg"),

  pizza: require("../assets/pizza-1.gif"),
  cheers: require("../assets/cheers.gif"),

  cityJSLogo: require("../assets/logos/cityJSConf.png"),
  cityJS1: require("../assets/announcements/cityjs-promo-2020/11.png"),
  cityJS2: require("../assets/announcements/cityjs-promo-2020/12.png"),
  cityJS3: require("../assets/announcements/cityjs-promo-2020/13.png"),
  singerTavernMap: require("../assets/singer-tavern.png"),

};

const emcee = {
  name: "adam",
  twitter: "admataz"
};

// get this from the latest from https://github.com/lnug/website/blob/master/data/this-month.json and add twitter details if desired
const speakers = [
  { name: "Ahmed Elsakaan",
    twitter: "ixahmedxii ",
    title: "Creating end-to-end typesafe APIs with tRPC"
   },
   { name: "Jiasheng",
    twitter: "jiashenggo ",
    title: "⚡️ Zenstack make fullstack development easy"
   },
   { name: "Erry Kostala",
    twitter: " ",
    title: "⚡️ web antipatterns"
   },
   { name: "Akash Shirish Joshi",
    twitter: "thewritingdev",
    title: "⚡️ Breaking client-server barriers with rocketrpc"
   },
   { name: "⚡️ ",
   twitter: "",
   title: "⚡️ got a lightning talk subject? "
  },

];


const thisMonth = {
  title: "#97 - February 2023"
};

const nextMonth = {
  date: "TBC",

  speakers: [
   
  ]
};

// ================== reusable components

const SpeakerSlide = ({ speaker }) => {
  if (!speaker) {
    return null;
  }

  return (
    <Slide id={speaker.name.replace(" ", "-")}>
      <Heading size={5} textColor="highlight" margin={50}>
        Next Up
      </Heading>
      <Heading size={4} textColor="secondary">
        {speaker.name}
      </Heading>
      {speaker.twitter && <Text textColor="secondary" textSize={20}>Twitter: @{speaker.twitter} </Text>}
      <Heading size={6} textColor="secondary">
        <S type="italics">{speaker.title}</S>
      </Heading>
    </Slide>
  );
};

const SummarySlide = ({ id }) => (
  <Slide align={"center center"} id={id}>
    <Image src={images.lnugLogo} margin="0px auto 0px" height="200px" />
    <Heading size={6} textColor="highlight">
      {thisMonth.title}
    </Heading>
    {speakers.map((speaker) => (
      <Fit key={speaker.title} textColor="secondary" textSize={38} margin="20px 0">
        {speaker.name}{" "}
        <S type="italics" textSize={24}>
          {" "}
          <br />
          {speaker.title}{" "}
        </S>
        <Text textColor="secondary" textSize={20}>
          {speaker.twitter && <span>Twitter: @{speaker.twitter} </span>}

          {speaker.github && <span>Github: @{speaker.github}</span>}
        </Text>
      </Fit>
    ))}
  </Slide>
);

// ====================

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} progress={"none"}>
        <SummarySlide id={"start"} />

        <Slide id={"safety"}>
          <Heading size={3} lineHeight={3} textColor="secondary">
            Important
          </Heading>
          <Appear>
            <Heading size={5} textColor="secondary">
              🚻 Toilets
            </Heading>
          </Appear>
          <Appear>
            <Heading size={5} textColor="secondary">
              🚒 Fire Exits
            </Heading>
          </Appear>
          <Appear>
            <Heading size={5} textColor="secondary">
              📡 Wifi
            </Heading>
          </Appear>
        </Slide>

        <Slide id={"code-of-conduct"}>
          <Heading size={5} textColor="secondary">
            ⭐️ Code of Conduct{" "}
          </Heading>
          <Appear>
            <BlockQuote>
              <Quote textColor="highlight" textSize="24px" lineHeight={5}>
                <p>
                  LNUG is dedicated to providing a harassment-free meetup experience for everyone. We do not tolerate
                  harassment of meetup participants in any form...
                </p>
                <p>
                  This code of conduct applies to attendees, speakers, and organisers at the monthly meetups and in
                  related social events. This includes slide decks and listings on the job board.
                </p>
              </Quote>
            </BlockQuote>
          </Appear>
          <Appear>
            <Text textColor="secondary">lnug.org/code-of-conduct</Text>
          </Appear>
        </Slide>

        <Slide id={"hashtags"}>
          <Heading size={5} textColor="secondary">
            Tweet
          </Heading>
          <Heading size={2} textColor="highlight">
            @lnugORG
          </Heading>
          <Heading size={4} textColor="secondary">
            <Code textColor="secondary">#LNUG #node #javascript #london</Code>
          </Heading>
          <Appear>
            <Heading size={6} textColor="secondary" margin="20px 0" textSize="20px" textColor="highlight">
              tweet me too @{emcee.twitter}
            </Heading>
          </Appear>
        </Slide>

        <Slide id={"gitter"}>
          <Heading size={3} textColor="highlight">
            discuss!
          </Heading>
          <Heading size={4} textColor="secondary">
            <Link href="https://discord.gg/DtPTak5pdQ" target="_blank">
              <Code textColor="secondary">https://discord.gg/DtPTak5pdQ</Code>
            </Link>
          </Heading>
        </Slide>


        <Slide id={"venue"}>
          <Heading size={5} textColor="highlight">
            Venue
          </Heading>
          <Image src={images.ballysLogo} margin="0px auto 40px" width="500px" padding="10px" />
        </Slide>

        <Slide id={"food-and-drink"}>
          <Heading size={5} textColor="highlight">
            Food and drink
          </Heading>
          <Image src={images.baselimeLogo} margin="0px auto 40px" height="293px" padding="10px" />
        </Slide>

  


        <Slide id={"video-production"}>
          <Heading size={5} textColor="highlight">
            Video
          </Heading>
          <Image src={images.pusherLogo} margin="0px auto 40px" width="800px" />
        </Slide>





        <Slide id={"cityjsconf-promo"}>
          <Image src={images.cityJSLogo} margin="0px auto 40px" />
          <Heading size={5} textColor="highlight">
            Tonight! ticket giveaway for CityJS Conference  - stay tuned
          </Heading>
          <Heading size={5} textColor="secondary">cityjsconf.org</Heading>
        </Slide>
        

        <Slide id={"community-announecments"}>
          <Image src={images.lnugLogo} margin="0px auto 0px" height="200px" />
          <Heading size={3} textColor="highlight" margin={50}>
            Community Announcements
          </Heading>
          <Heading size={5} textColor="secondary">
            Have something to share?
          </Heading>
        </Slide>

        <Slide id={"get-involved"}>
          <Image src={images.lnugLogo} margin="0px auto 0px" height="200px" />
          <Heading size={5} textColor="highlight">
            Get Involved
          </Heading>
          <Heading size={6} textColor="secondary">
            Feedback
            <br />
            <Code type="bold" textColor="secondary">
              github.com/lnug/feedback
            </Code>
          </Heading>
          <Heading size={6} textColor="secondary">
            Gitter
            <br />
            <Code type="bold" textColor="secondary">
              gitter.com/lnug/discuss
            </Code>
          </Heading>
        </Slide>

        <Slide id={"submit-a-talk"}>
          <Image src={images.lnugLogo} margin="0px auto 0px" height="200px" />
          <Heading size={3} textColor="highlight">
            Submit a talk proposal!
          </Heading>
          <Code type="bold" textColor="secondary">
            github.com/lnug/speakers
          </Code>
        </Slide>

        <SummarySlide id="ready" />

        <SpeakerSlide speaker={speakers[0]} />
        <SpeakerSlide speaker={speakers[1]} />
        <SpeakerSlide speaker={speakers[2]} />
        <SpeakerSlide speaker={speakers[3]} />
        <SpeakerSlide speaker={speakers[4]} />


        {/* <Slide id={"competition-time"}>
          <Image src={images.cityJSLogo} margin="0px auto 40px" height="80px" />
          <Heading size={5} textColor="highlight">
            Competition time!
          </Heading>
          <Heading size={5} textColor="secondary">cityjsconf.org</Heading>
          <Heading size={5} textColor="secondary">reactsummit.com</Heading>
        </Slide> */}


        <Slide id={"nex-time"}>
          <Image src={images.lnugLogo} margin="0px auto 0px" height="140px" />
          <Heading size={5} textColor="highlight">
            Next Time
          </Heading>
          <Heading size={5} textColor="secondary">
            {nextMonth.date}
          </Heading>
          <List margin="20px 5%">
            {nextMonth.speakers.map((speaker) => (
              <ListItem key={speaker.title} textColor="secondary" textSize={30} margin="20px 0">
                {speaker.name} <S type="italics"> - {speaker.title}</S>
              </ListItem>
            ))}
          </List>

          <Code textColor="secondary" bold>
            meetup.com/london-nodejs
          </Code>
          
        </Slide>

        <Slide align={"center center"}>
          <div align="center">
            <Image src={images.lnugLogo} margin="10px" height="153px" />
            <Heading size={3} textColor="highlight">
              Thank You
            </Heading>
            <Heading size={5} textColor="secondary">
              Had a great time? Let us know!
            </Heading>
            <Text textColor="highlight">github.com/lnug/feedback</Text>
            <br />
            and thanks again...
            <br />
            <Image src={images.ballysLogo} margin="10" height="60" />
            <Image src={images.pusherLogo} margin="10" height="80" />
            <Image src={images.baselimeLogo} margin="10" height="80" />
          </div>
        </Slide>

        <Slide>
          <Heading size={5} textColor="highlight" margin={10}>
          To the Pub? 
          </Heading>

          <Text textColor="secondary" margin={10}>
          Before you go...
          </Text>
          

        
          Tidy up after yourself! Get involved!
        </Slide>
      </Deck>
    );
  }
}
