// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");


function buildTable(inputData) {


    inputData.forEach(sighting =>{
    var row = tbody.append("tr").attr("class", "t-body");
        Object.entries(sighting).forEach(([key, value]) => {
        row.append("td").text(value)
      
        });
    });
};

buildTable(tableData)




var button = d3.select("#submit");

button.on("click", function() {

    d3.event.preventDefault();

    var inputField = d3.select(".form-control");
    var input = inputField.property("value");

    console.log(input)

    var thisdate = tableData.filter(sighting => sighting.datetime === input);

    if (thisdate != "") {

        d3.selectAll(".t-body").remove()

        buildTable(thisdate)
    }

});




var form = d3.select(".form-control");

form.on("keydown", function() {

    if (d3.event.key === "Enter") {

    d3.event.preventDefault();

    var inputField = d3.select(".form-control");
    var input = inputField.property("value");

    console.log(input)

    var thisdate = tableData.filter(sighting => sighting.datetime === input);

    if (thisdate != "") {

        d3.selectAll(".t-body").remove()

        buildTable(thisdate)
    }

}});


