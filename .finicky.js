// Finicky
// Always open the right browser
// https://github.com/johnste/finicky
module.exports = {
  defaultBrowser: "Safari",
  rewrite: [
    {
      // Redirect all urls to use https
      match: ({ url }) => url.protocol === "http",
      url: ({ url }) => ({
        ...url,
        protocol: "https"
      })
    },
    {
      // Redirect all Google searchs to use DuckDuckGo
      // Some mac apps will not use your default search engine.
      // Such as "Slack".
      match: ({ url }) => {
        return url.host === "www.google.com" && url.pathname === '/search'
      },
      url: ({ url }) => ({
        ...url,
        host: "www.duckduckgo.com",
        pathname: '/',
      })
    }
  ],
  handlers: [
    {
      // Open in Firefox
      match: finicky.matchHostnames([
        "firefox.com",
        /.*\firefox.com$/,
        "google.com",
        /.*\google.com$/,
        "youtube.com",
        /.*\youtube.com$/,
        "youtu.be",
        /.*\youtu.be$/,
        "yt.be",
        /.*\yt.be$/,
        "asana.com",
        /.*\asana.com$/,
      ]),
      browser: "Firefox"
    },
    {
      // Open links in Safari when the option key is pressed
      // Valid keys are: shift, option, command, control, capsLock, and function.
      // Please note that control usually opens a tooltip menu instead of visiting a link
      match: ({ keys }) => keys.option,
      browser: "Safari"
    },
    {
      match: ({ keys }) => keys.shift,
      browser: "Firefox"
    }
  ]
};
