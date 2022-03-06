var url = require("url");
const parsedUrl = url.parse(
  "https://blog.altcampus.io:80/students/register?name=altcampus&gender=male",
  true
);
console.log(parsedUrl);



var urlString=`https://nodejs.org/en/knowledge/advanced/buffers/how-to-use-buffers/#:~:text
=What%20Are%20Buffers%3F,methods%20specifically%20for%20binary%20data.`

var url = require(`url`);

let urlParse=url.parse(urlString);

console.log(urlParse);