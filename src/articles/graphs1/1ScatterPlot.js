import React, { Component } from 'react';
import * as d3 from "d3";

class ScatterPlot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth*0.5*0.7-90,
      height: 150
    }
    
  }
  componentDidMount() {
    this.drawChart();
  }//componentDidMount
    
  drawChart() {
    var margin = {top: 40, right: 30, bottom: 50, left: 60},
        width = this.state.width,
        height = this.state.height

    // append the svg object to the body of the page
    var svg = d3.select("."+this.props.div)
      .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + (margin.top) + ")");

    //Read the data
    var x = d3.scaleLinear()
      .domain( [0, this.props.maxsalary])
      .range([ 0, width ]);
    // Add Y axis

    var y = d3.scaleLinear()
      .domain( [0, this.props.maxfollowers])
      .range([ height, 0 ]);

    var xGrid = d3.axisBottom(x).tickSize(height).tickFormat('').ticks(4);
    var yGrid = d3.axisLeft(y).tickSize(-width).tickFormat('').ticks(4);
    svg.append("rect")
      .attr("width", this.state.width)
      .attr("height", this.state.height)
      .attr("fill", "#f2f2f2");
    // Create grids.
    svg.append('g')
		  .attr('class', 'axis-grid')
		  .attr('transform', 'translate(0,' + width-margin.left-margin.right + ')')
      .attr("color", "white")
		  .call(xGrid);
		svg.append('g')
		  .attr('class', 'axis-grid')
      .attr("color", "white")
		  .call(yGrid);
    
    
      
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .attr('class','mainaxis')
      .call(d3.axisBottom(x).ticks(4))
    svg.append("g")
      .attr('class','mainaxis')
      .call(d3.axisLeft(y).ticks(4));
    
    //hover
    var Tooltip = d3.select("."+this.props.div)
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px")
      .style("text-align","center")
      .style("Position","absolute")
      
      svg.append("text")
            .attr("class","title")
            .attr("font-size","30px")
            .attr("font-weight","bold")
            .attr("text-anchor", "middle")  // this makes it easy to centre the text as the transform is applied to the anchor
            .attr("transform", "translate("+ (width/2) +","+-10+")")  // text is drawn off the screen top left, move down and out and rotate
            .text(this.props.title);
      svg.append("text")
            .attr("class","axislabel")
            .attr("font-size","20px")
            .attr("text-anchor", "middle")  // this makes it easy to centre the text as the transform is applied to the anchor
            .attr("transform", "translate("+ (-40) +","+(height/2)+")rotate(-90)")  // text is drawn off the screen top left, move down and out and rotate
            .text("Followers (Millions)");
      svg.append("text")
            .attr("class","axislabel")
            .attr("font-size","20px")
            .attr("text-anchor", "middle")  // this makes it easy to centre the text as the transform is applied to the anchor
            .attr("transform", "translate("+ (width/2) +","+(height+40)+")")  // text is drawn off the screen top left, move down and out and rotate
            .text("Yearly Salary (Millions)");
    // Add the points
    d3.csv(this.props.data,

      // Now I can use this dataset:
      (data) => {
        data = Object.values(data);
        var a = data[this.props.salaryindex];
        var b = data[this.props.followerindex];
        var salary = data[this.props.salaryindex]
        if(parseInt(salary,10) < 1000){
        }else if(parseInt(salary,10) < 1000000){
          salary = "" + Number(parseInt(salary,10)/1000.0).toFixed(1) + "k"
        }else{
          salary = "" + Number(parseInt(salary,10)/1000000.0).toFixed(1) + "m"
        }
        var followers = data[this.props.followerindex]
        if(parseInt(followers,10) < 1000){
        }else if(parseInt(followers,10) < 1000000){
          followers = "" + Number(parseInt(followers,10)/1000.0).toFixed(1) + "k"
        }else{
          followers = "" + Number(parseInt(followers,10)/1000000.0).toFixed(1) + "m"
        }
        if(a !== "" && b !== ""){
          svg
            .append("g")
            .selectAll("dot")
            .data(data)
            .enter()
            .append("circle")
              .attr("class", "myCircle")
              .attr("cx", x(parseInt(a,10)/1000000.0) )
              .attr("cy", y(parseInt(b,10)/1000000.0) )
              .attr("r", 6)
              .attr("stroke", this.props.strokecolor)
              .attr("stroke-width", 1)
              .attr("fill", this.props.insidecolor)
              // .on("mouseover", function(){
      				// 	d3.select(this)
      				// 		.attr("stroke", "#17252A")
      				// })
      				// .on("mouseout", function(){
      				// 	d3.select(this)
      				// 		.attr("stroke", "#3AAFA9")
      				// })
      				.on("mouseover", () => {
                Tooltip
                  .style("opacity", 1)
              })
              .on("mousemove", () => {
                Tooltip
                  .html("<b>" + data[0] + "</b><br/> $" + salary + "/year, " + followers + " followers")
                  .style("left", (d3.event.layerX) + "px")
        	        .style("top", (d3.event.layerY) + "px")
                console.log(d3.event.layerX, d3.event.layerY);
              })
              .on("mouseleave", () =>{
                Tooltip
                  .style("opacity", 0)
                  .style("left", 0 + "px")
        	        .style("top", 0 + "px")
              })
        }
        
    })
  }
        
  render(){
    return <div class ={this.props.div}></div>
  }
}
    
export default ScatterPlot;