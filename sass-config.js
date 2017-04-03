var sass = require('node-sass');

sass.render({
  includePaths: [ require("bourbon").includePaths ],
}, function(error, result) { // node-style callback from v3.0.0 onwards
  if (error) {
    console.log(error.status); // used to be "code" in v2x and below
    console.log(error.column);
    console.log(error.message);
    console.log(error.line);
  }
  else {
    console.log(result.css.toString());

    console.log(result.stats);

    console.log(result.map.toString());
    // or better
    console.log(JSON.stringify(result.map)); // note, JSON.stringify accepts Buffer too
  }
});
