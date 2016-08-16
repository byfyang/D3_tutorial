window.onload = function(){

console.log("hello ben");

var dataset = [5, 10, 15, 20, 25, 9, 12, 20, 57, 60, 80];

d3.select("body").selectAll("div")
    .data(dataset)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("height", function(d) {
        var barHeight = d * 8;  //Scale up by factor of 5
        return barHeight + "px";
    });
  


var w = 500;
var h = 50;


var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);


var circles = svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle");

circles.attr("cx", function(d, i) {
            return (i * 50) + 25;
        })
       .attr("cy", h/2)
       .attr("r", function(d) {
            return d;
       });



};
