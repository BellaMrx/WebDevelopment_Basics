const express = require("express");
const app = new express();
const helmet = require("helmet");
const bodyParser = require("body-parser");

const PORT = 3001;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// configuration of CSP
// must be before the next app.use()  !
app.use(
	helmet.contentSecurityPolicy({
    directives: {
      styleSrc: ["'self'"],
      fontSrc: ["'self'"],
      reportUri: "/api/csp/report",
    },
  })
);

// provide static files in the "public" directory
app.use(express.static("public"));

// API for receiving Violation Reports
app.post(`/api/csp/report`, (request, response) => {
  console.log(`CSP header violation`, request.body);
  response.status(204).end();
});

app.listen(PORT, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Server started at: http://localhost:${PORT}`);
  }
});

module.exports = app;
