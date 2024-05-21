export const meetingInfo = {
  title: "LNUG Meetup #102 : Partykit: 'The next stage of serverless is personal' and 'Suspend Server Side Request Waterfalls' with HonoJS",
  date: "2023-11-29",
  emcee: {
    name: "Adam",
    twitter: "admataz"
  },

  sponsors: [
    {
      role: "Venue",
      title: "Makers Academy",
      logo: require("../assets/logos/makers-logo.png"),
      info:
        "At [Makers](https://makers.tech), we are creating a new generation of tech talent who are skilled and ready for the changing world of work. We are inspired by the idea of discovering and unlocking potential in people for the benefit of 21st century business and society."
    },

    {
      role: "Beer and Pizza",
      title: "Baselime",
      logo: require("../assets/logos/Baselime_Logo_RGB_Primary_DarkBg_Neutral.2acb9b0.svg"),
      info: "Baselime pizza yum"
    },

    {
      role: "Video recording and hosting",
      title: "Pusher",
      logo: require("../assets/logos/pusher_logo_white.png"),
      info: "Pusher are awesome"
    }
  ],

  promotions: [
    {
      title: "CityJS Conference ticket giveaway",
      image: require("../assets/promos/cityjs-24.png"),
      info: ""
    }
  ],

  nextMonth: {
    date: "31 Jan 2024",

    talks: [{
      title: "Serverless Developer Experience",
      speaker: [
        {name: "luca mezzalira"}
      ]
    }]
  },

  images: {
    lnugLogo: require("../assets/lnug-logo.svg"),
    // baselimeLogo: require("../assets/logos/Baselime_Logo_RGB_Primary_DarkBg_Neutral.2acb9b0.svg"),
    // maltLogo: require("../assets/malt.png"),

    // baselimeChart: require("../assets/baselime-chart.jpg"),
    // makersLogo: require("../assets/logos/makers-logo.png"),
    // pusherLogo: require("../assets/logos/pusher_logo_white.png"),

    pizza: require("../assets/pizza-1.gif"),
    cheers: require("../assets/cheers.gif")
  },

  talks: [
    {
      title: "The next stage of serverless is personal",
      description:
        "\n",
      speaker: [
        {
          name: "Sunil Pai",
          twitter: "threepointone",
          github: "threepointone",
          avatar: "https://avatars.githubusercontent.com/u/18808?v=4"
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
      title: "Suspend Server Side Request Waterfalls",
      description:
        "The history and status of WebRTC, how it's still terribly unwieldy for people to get started with - even after a decade since it's release, and how we can use Node.js to build P2P applications at scale with a little bit of prodding.\n\n@seanmtracey, Developer Relations Manager at Moneyhub; CTO of KadVR.\n",
      speaker: [
        {
          name: "Thomas Ankcorn",
          twitter: "thomasankcorn",
          github: "Ankcorn",
          avatar: "https://avatars.githubusercontent.com/u/7361428?v=4"
        }
      ]
    }
  ]
};
