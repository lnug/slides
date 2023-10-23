export const meetingInfo = {
  title: "LNUG Meetup #101 : Svelte for Node.js developers (and more)",
  date: "2023-10-24",
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
      title: "Nearform",
      logo: require("../assets/logos/NF__Primary_Logo_Reversed_Horizontal.svg"),
      info: "Nearform pizza yum"
    },

    {
      role: "Video recording and hosting",
      title: "Pusher",
      logo: require("../assets/logos/pusher_logo_white.png"),
      info: "Pusher are awesome"
    }
  ],

  nextMonth: {
    date: "TBC",

    talks: []
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
      title: "Learn the platform with svelte",
      description:
        "Svelte is a frontend framework but despite that thanks to svelte-kit and the general philosophy behind svelte it's a great tool to get started in web dev because while learning svelte you can easily learn how the web platform works, and now with svelte-kit you can learn node too!\n\nI'm Paolo Ricciuti, i work as a full stack developer at Main matter and I'm a svelte lover (and also an official svelte ambassador).\n",
      speaker: [
        {
          name: "Paolo Ricciuti",
          twitter: "paoloricciuti",
          github: "paoloricciuti",
          avatar: "https://avatars.githubusercontent.com/u/26281609?v=4"
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
      title: "WebRTC: Why Art Thou Such A PITA?",
      description:
        "The history and status of WebRTC, how it's still terribly unwieldy for people to get started with - even after a decade since it's release, and how we can use Node.js to build P2P applications at scale with a little bit of prodding.\n\n@seanmtracey, Developer Relations Manager at Moneyhub; CTO of KadVR.\n",
      speaker: [
        {
          name: "Sean M. Tracey",
          twitter: "seanmtracey",
          github: "seanmtracey",
          avatar: "https://avatars.githubusercontent.com/u/913687?v=4"
        }
      ]
    }
  ]
};
