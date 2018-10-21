const GitHub = require("github-api");
const sortBy = require("lodash/sortBy");

// unauthenticated client
const gh = new GitHub();

var DanielBodnar = gh.getUser("DanielBodnar");
DanielBodnar.listStarredRepos(function(err, repos) {
  sortBy(repos, r => r.name.toLowerCase()).forEach(r => {
    console.log(`- [${r.name}](${r.html_url}) ${r.description}`);
  });
});
