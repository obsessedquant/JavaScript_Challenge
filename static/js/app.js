// from data.js
var ufoData = data;


// console.log(data);
// console.log(ufoData);

// YOUR CODE HERE!

var tbody = d3.select("tbody");

data.forEach(x => {
    var row = tbody.append("tr");
    Object.entries(x).forEach(([head, value])=>row.append("td").text(value))
});


var button = d3.select("button");
var form = d3.select("form");

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
    d3.event.preventDefault();

    var inputDatetime = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");

    var valueDatetime = inputDatetime.property("value");
    var valueCity = inputCity.property("value");
    var valueState = inputState.property("value");
    var valueCountry = inputCountry.property("value");
    var valueShape = inputShape.property("value");

    console.log(valueDatetime);
    console.log(valueCity);
    console.log(valueState);
    console.log(valueCountry);
    console.log(valueShape);

    // console.log(ufoData);

    if(valueDatetime !== "") var filteredData = ufoData.filter(sighting => sighting.datetime === valueDatetime);
    if(valueCity !== "") var filteredData = ufoData.filter(sighting => sighting.city === valueCity);
    if(valueState !== "") var filteredData = ufoData.filter(sighting => sighting.state === valueState);
    if(valueCountry !== "") var filteredData = ufoData.filter(sighting => sighting.country === valueCountry);
    if(valueShape !== "") var filteredData = ufoData.filter(sighting => sighting.shape === valueShape);

    // for (var key in filter) {

    // }

    console.log(filteredData);

};