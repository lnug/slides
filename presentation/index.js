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
  nearFormLogo: require("../assets/nearform.jpg"),
  pusherLogo: require("../assets/pusher_logo_white.png"),
  pizza: require("../assets/pizza-1.gif"),
  cheers: require("../assets/cheers.gif"),
  simon: require("../assets/simon.png")
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
    "apiSpeakerUrl": "https://api.github.com/users/mcollina",
    "speakerUrl": "https://github.com/mcollina",
    "title": "My Node.js process is on Fire",
    "description": "<p>At 10am on Black Friday, your phone rings: the new JS application you deployed came under too much load, and the site has gone down! Your employer is losing sales opportunities... your employer is losing money!</p>\n<p>But you don&rsquo;t lose your cool. You log into your cloud provider and tweak your autoscaling settings. Now the deployment can handle the load spike but with four times the number of servers, which is four times the cost.</p>\n<p>The next day, you try to analyze what happened and begin to optimize your application to prepare for future load spikes. </p>\n<p>This talk is a journey into the world of Node.js performance, taking a look at the available tools and optimization techniques inspired by insight gained from glimpsing under the hood of Node and V8.</p>\n<h3 id=\"bio\">Bio</h3>\n<p>Matteo is a code pirate and mad scientist. He spends most of his days programming in Node.js, but in the past he worked with Ruby, Java and Objective-C. In 2014, he defended his Ph.D. thesis titled &quot;Application Platforms for the Internet of Things&quot;. Now he is a Principal Architect at <a href=\"http://nearform.com\">nearForm</a>, where he consults for the top brands of the world.&#10;Matteo is also the author of the Node.js MQTT Broker, <a href=\"http://mosca.io\">Mosca</a>, the fast logger <a href=\"https://github.com/mcollina/pino\">Pino</a> and of the <a href=\"https://www.fastify.io\">Fastify</a> web framework. Matteo is also a member of the Node.js Technical Steering Committee. Matteo spoke at several international conferences: Node.js Interactive, NodeConf.eu, NodeSummit, JSConf.Asia, WebRebels, and JsDay to name a few. He is also co-author of the book &quot;Node.js Cookbook, Third Edition&quot; edited by Packt. &#10;In the summer he loves sailing the <em>Sirocco</em>.</p>\n<p>Twitter handle: <a href=\"https://twitter.com/matteocollina\">@matteocollina</a></p>\n",
    "milestone": "March 28th 2018",
    "img": "https://avatars0.githubusercontent.com/u/52195?v=4",
    "handle": "mcollina",
    "name": "Matteo Collina"
  },
  {
      "apiSpeakerUrl": "https://api.github.com/users/claudiamatosa",
      "speakerUrl": "https://github.com/claudiamatosa",
      "title": "Internal Server Error",
      "description": "<p>Who hasn&#39;t found themselves in despair after hours of trying to debug a problem that seemed simple, because halfway down the line the stack trace ended in a file called <code>throw-error.js</code>, or simply there were no errors thrown and the code just didn&#39;t work as expected?</p>\n<p>The talk will last between 15 and 20 minutes, will be structured in two parts and there will be plenty of gifs and emojis. It should cover errors in Node and browsers.</p>\n<h3 id=\"1-common-bad-error-handling-scenarios\">1. Common bad error handling scenarios</h3>\n<ul>\n<li>Stacktrace lost.</li>\n<li>Code exits without error.</li>\n<li>Generic error messages (<code>something has failed</code>).</li>\n<li>...</li>\n</ul>\n<h3 id=\"2-exploring-possible-solutions-examples-\">2. Exploring possible solutions (examples)</h3>\n<ul>\n<li>Custom errors.</li>\n<li>Formatting error api responses.</li>\n<li>Displaying errors in the UI.</li>\n<li>Examples when using Apollo (GraphQL), React and maybe other tools.</li>\n</ul>\n<p>Conclusion: your library/utility/api should be built around its users, and they shouldn&#39;t need to read the code to know why something is wrong.</p>\n<p>(I&#39;m really bad with titles &#55357;&#56883;)</p>\n<p>I&#39;m a freelance front-end developer, currently working with React and GraphQL.&#10;<a href=\"twitter.com/claudiamatosa\">twitter</a> | <a href=\"github.com/claudiamatosa\">github</a></p>\n",
      "milestone": "March 28th 2018",
      "img": "https://avatars1.githubusercontent.com/u/5296066?v=4",
      "handle": "claudiamatosa",
      "name": "Claudia Matosa"
  },
  {
      "apiSpeakerUrl": "https://api.github.com/users/theburningmonk",
      "speakerUrl": "https://github.com/theburningmonk",
      "title": "Serverless in production, an experience report",
      "description": "<p>AWS Lambda has changed the way we deploy and run software, but this new serverless paradigm has created new challenges to old problems - how do you test a cloud-hosted function locally? How do you monitor them? What about logging and config management? And how do we start migrating from existing architectures? </p>\n<p>In this talk Yan will discuss solutions to these challenges by drawing from real-world experience running Lambda in production and migrating from an existing monolithic architecture.</p>\n<h3 id=\"about-me-\">About me:</h3>\n<p>Yan (@theburningmonk) is a polyglot developer and architect, he is a regular speaker at user groups and conferences internationally. Yan is the author of <code>AWS Lambda in Motion</code>, a co-author of <code>F# Deep Dives</code>, and he keeps an active blog at <a href=\"http://theburningmonk.com\">http://theburningmonk.com</a> where he shares his thoughts on topics such as AWS, serverless, functional programming and chaos engineering.</p>\n<p>my co-speaker is <strong>Scott Smethurst</strong> : Scott&rsquo;s passion for computing began when he was gifted a Commodore 64 for Christmas in 1988 and really took hold while studying Computer Science at the University of Manchester. He&rsquo;s been an architect, lead developer and consultant within a variety of industries, working with organisations ranging from a multi-billion pound corporation to a failed start-up. Scott has spent most of the past 2 years designing and building several serverless architectures and has decided to start sharing some of those experiences.</p>\n",
      "milestone": "March 28th 2018",
      "img": "https://avatars3.githubusercontent.com/u/546969?v=4",
      "handle": "theburningmonk",
      "name": "Yan Cui & Scott Smethurst"
  }
];

const thisMonth = {
  title: "#71 - March 2018"
};

const nextMonth = {
  date: "25th April 2018",
  speakers: [
    {
      name: "Paul Jensen",
      title: "End-to-end testing Single Page Apps and APIs with Cucumber.js & Puppeteer"
    },
    {
      name: "Maybe you.... ?",
      title: "share your dev stories"
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
        <Image src={images.logo} margin="10px" height="153px"/>
        <Heading size={3} textColor="highlight" >Thank You</Heading>
        <Heading size={5} textColor="secondary">Had a great time? Let us know!</Heading>
        <Text textColor="secondary">github.com/lnug/feedback</Text>
        
        <br />and thanks again...<br />
        
        <Image src={images.makersLogo.replace("/", "")} margin="10px" height="63px"/>
        <Image src={images.nearFormLogo.replace("/", "")} margin="10px" height="63px"/>
        <Image src={images.pusherLogo.replace("/", "")} margin="10px" height="63px"/>
    
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
          <Heading size={5} textColor="highlight" >Before you go...</Heading>
          
          Rubbish in Bins,
          Stack chairs against walls,
          Get involved!
      

        </Slide>


      </Deck>
    );
  }
}
