var data = require('sdk/self').data;

var pageMod = require("sdk/page-mod").PageMod({
  include: "https://news.ycombinator.com*",
  contentStyleFile: "./style.css"
});
