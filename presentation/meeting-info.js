const makersLogo = require("../assets/logos/makers-logo.png");
const baselimeLogo = require("../assets/logos/Baselime_Logo_RGB_Primary_DarkBg_Neutral.2acb9b0.svg");
const pusherLogo = require("../assets/logos/pusher_logo_white.png");
const lnugLogo = require("../assets/lnug-logo.svg");
const pizzaGif = require("../assets/pizza-1.gif");
const cheersGif = require("../assets/cheers.gif");
const cloudflareLogo = require("../assets/logos/cloudflare-logo.jpg");
const filmMakerLogo = require("../assets/logos/filmMakerAtLargeLogo.png");

export const assets = {
  makersLogo,
  baselimeLogo,
  pusherLogo,
  lnugLogo,
  pizzaGif,
  cheersGif,
  filmMakerLogo
};

export const meetingInfo = {
  title: "LNUG #103 May 2024: Massive Node.js Monorepos + Cloud Infrastructure as Code",
  date: "2024-05-22",
  emcee: {
    name: "Adam",
    twitter: "admataz"
  },

  sponsors: [
    {
      role: "Venue, Beer and Pizza",
      title: "Cloudflare",
      logo: cloudflareLogo,
      info:
        "Deploy serverless code instantly across the globe to give it exceptional performance, reliability, and scale."
    },



    {
      role: "Video recording and hosting",
      title: "Alex, Film Maker at Large",
      logo: filmMakerLogo,
      info: "Pusher are awesome"
    }
  ],

  promotions: [],

  nextMonth: {
    date: "tbc",

    talks: [
      {
        title: "check https://github.com/speakers for proposed talks",
        speaker: [{ name: "or make one yourself" }]
      }
    ]
  },


  talks: [
    {
      title: "Typescript all the way down",
      description: "\n",
      speaker: [
        {
          name: "Piers Karsenbarg",
        twitter: "pierskarsenbarg",
        github: "pierskarsenbarg",
        avatar:" https://pbs.twimg.com/profile_images/1090832007947608065/Ue8CXy5e_400x400.jpg" ,
        }
      ]
    },
    {
      title: "Open mic 🎤 community announcements",
      speaker: []
    },
    {
      title: "__INTERMISSION__"
    },
    {
      title: "Mastering the Monorepo",
      description:
        "The history and status of WebRTC, how it's still terribly unwieldy for people to get started with - even after a decade since it's release, and how we can use Node.js to build P2P applications at scale with a little bit of prodding.\n\n@seanmtracey, Developer Relations Manager at Moneyhub; CTO of KadVR.\n",
      speaker: [
        {
          name: "Ahmed Elsakaan",
          twitter: "ixahmedxii",
          github: "ixahmedxi",
          avatar: "https://pbs.twimg.com/profile_images/1544707093558697985/yPyNogbp_400x400.jpg",
    
        }
      ]
    }
  ],
  images: assets
};
