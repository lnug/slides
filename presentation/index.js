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

import { meetingInfo } from "./meeting-info";

// ================== reusable components

const SpeakerSlide = ({ talk }) => {
  if (!talk) {
    return null;
  }
  if (talk.title === "__INTERMISSION__") {
    return (
      <Slide id={"intermission"}>
        <Heading size={5} textColor="highlight">
          Intermission: Food and drink thanks to...
        </Heading>
        <Image src={meetingInfo.images.pizzaGif} margin="0px auto 40px" height="150px" padding="10px" />
        <Image src={meetingInfo.images.cheersGif} margin="0px auto 40px" height="150px" padding="10px" />
      </Slide>
    );
  }
  return (
    <Slide id={talk.title.replace(" ", "-")}>
      <Heading size={5} textColor="highlight" margin={50}>
        Next Up
      </Heading>
      {talk.speaker.map(speaker => (
        <>
          <Heading size={4} textColor="secondary">
            <span>{speaker.name}</span>
          </Heading>
          {speaker.twitter && (
            <Text textColor="secondary" textSize={20}>
              Twitter: @{speaker.twitter}{" "}
            </Text>
          )}
        </>
      ))}

      <Heading size={6} textColor="secondary">
        <S type="italics">{talk.title}</S>
      </Heading>
    </Slide>
  );
};

const SummarySlide = ({ id }) => (
  <Slide align={"center center"} id={id}>
    <Image src={meetingInfo.images.lnugLogo} margin="0px auto 0px" height="200px" />
    <Heading size={6} textColor="highlight">
      {meetingInfo.title}
    </Heading>
    {meetingInfo.talks
      .filter(t => !t.title.startsWith("__"))
      .map(talk => (
        <Fit key={talk.title} textColor="secondary" textSize={38} margin="20px 0">
          <S type="italics" textSize={24}>
            {talk.title}{" "}
          </S>
          <Text textColor="secondary" textSize={20}>
            {talk.speaker.map(speaker => (
              <>
                {speaker.twitter && <span>Twitter: @{speaker.twitter} </span>}
                {speaker.github && <span>Github: @{speaker.github}</span>}
              </>
            ))}
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
              tweet me too @{meetingInfo.emcee.twitter}
            </Heading>
          </Appear>
        </Slide>

        {meetingInfo.sponsors.map(sponsor => (
          <Slide id={sponsor.role}>
            <Heading size={5} textColor="highlight">
              {sponsor.role}
            </Heading>
            <Image src={sponsor.logo} margin="0px auto 40px" width="500px" padding="10px" />
          </Slide>
        ))}



        <Slide id={"community-announecments"}>
          <Image src={meetingInfo.images.lnugLogo} margin="0px auto 0px" height="200px" />
          <Heading size={3} textColor="highlight" margin={50}>
            Community Announcements
          </Heading>
          <Heading size={5} textColor="secondary">
            Have something to share?
          </Heading>
        </Slide>

        <Slide id={"get-involved"}>
          <Image src={meetingInfo.images.lnugLogo} margin="0px auto 0px" height="200px" />
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
        </Slide>

        <Slide id={"submit-a-talk"}>
          <Image src={meetingInfo.images.lnugLogo} margin="0px auto 0px" height="200px" />
          <Heading size={3} textColor="highlight">
            Submit a talk proposal!
          </Heading>
          <Code type="bold" textColor="secondary">
            github.com/lnug/speakers
          </Code>
        </Slide>

        <SummarySlide id="ready" />
        {meetingInfo.talks.map(talk => (
          <SpeakerSlide talk={talk} />
        ))}



        <Slide id={"nex-time"}>
          <Image src={meetingInfo.images.lnugLogo} margin="0px auto 0px" height="140px" />
          <Heading size={5} textColor="highlight">
            Next Time
          </Heading>
          <Heading size={5} textColor="secondary">
            {meetingInfo.nextMonth.date}
          </Heading>
          <List margin="20px 5%">
            {meetingInfo.nextMonth.talks.map(speaker => (
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
            <Image src={meetingInfo.images.lnugLogo} margin="10px" height="153px" />
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
            {meetingInfo.sponsors.map(sponsor => (
              <Image src={sponsor.logo} margin="10" height="100" />
            ))}
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
