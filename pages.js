const ghpages = require("gh-pages");
const pathname = `${__dirname}/build`;
const repoURL = "https://github.com/medy1234/meron.git";

ghpages.publish(
  pathname,
  {
    // changed branch to main from master
    branch: "main",
    repo: repoURL,
  },
  (err) => {
    if (err) console.log("ERROR: ", err);
    else console.log("PUBLISHED");
  }
);
