const config = {
  siteTitle: "Umid.me",
  siteTitleShort: "Umid.me",
  siteTitleAlt: "Umid.me",
  siteLogo: "/logos/Asset-10.png",
  siteUrl: "https://www.Umid.me",
  repo: "https://github.com/taniarascia/taniarascia.com",
  pathPrefix: "",
  dateFromFormat: "YYYY-MM-DD",
  dateFormat: "MMMM Do, YYYY",
  siteDescription: "This website is dedicated to web tech.",
  // siteRss: "/rss.xml",
  // googleAnalyticsID: "UA-42068444-1",
  // postDefaultCategoryID: "Tech",
  commentsApi: "https://tania-comments-api.herokuapp.com/comments",
  newsletter: "https://taniarascia.substack.com",
  newsletterEmbed: "https://taniarascia.substack.com/embed",
  userName: "Umeed",
  userEmail: "undigitals@gmail.com",
  // userTwitter: "taniarascia",
  menuLinks: [
    // {
    //   name: "Me",
    //   link: "/me/"
    // },
    {
      name: "Blogs",
      link: "/blog/"
    }
    // {
    //   name: "Contact",
    //   link: "/contact/"
    // }
  ],
  themeColor: "#3F80FF", // Used for setting manifest and progress theme colors.
  backgroundColor: "#ffffff"
};

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
