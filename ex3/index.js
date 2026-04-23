const moment = require("moment");

// Current date
console.log(moment().format("MMMM Do YYYY"));

// Years since Nov 26, 1976
const past = moment("1976-11-26");
const years = moment().diff(past, "years");

console.log(`Years since 1976: ${years}`);
