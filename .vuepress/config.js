module.exports = {
  title: "Pheep Devs",
  description: "Where Pheep writes about learning stuff",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "VSCode", link: "/VSCode/" },
      { text: "WSL", link: "/WSL/" },
      { text: "Terminal", link: "/Terminal/" }
    ],
    sidebar: "auto",
    lastUpdated: "Last Updated",
    displayAllHeaders: true,
    serviceWorker: {
      updatePopup: true
    }
  }
};
