import React, { Component } from "react";
import * as d3 from "d3";

class GoogleTrends extends Component {
  componentDidMount() {
    var margin = {top: 10, right: 20, bottom: 50, left: 45},
                  width = window.innerWidth*0.35 - margin.right - margin.left,
                  height = 250 - margin.top - margin.bottom
    
    
    var svg = d3.select("#" + this.props.name)
      .style('position','relative')
      .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform",
              "translate("+margin.left+","+margin.top+")");
      svg.append('text')
        .attr("transform","translate("+width/2+","+30+")")
        .style('font-size','30px')
        .style('text-anchor','middle')
        .style('opacity',0.5);
    var x = d3.scaleTime()
      .domain([d3.timeParse("%m/%d/%y")("1/01/20"), d3.timeParse("%m/%d/%y")("4/13/20")])
      .range([ 0, width ]);
    

    var y = d3.scaleLinear()
        .domain([0,100])
        .range([height, 0])
    svg.append("rect")
        .attr("width", width)
        .attr("height", height)
        .attr("fill", "#f2f2f2");
    
    var xGrid = d3.axisBottom(x).tickSize(height).tickFormat('').ticks(4);
    var yGrid = d3.axisLeft(y).tickSize(-width).tickFormat('').ticks(4);
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
        .attr("transform", "translate(0,0)")
        .call(d3.axisLeft(y)
          .ticks(5))
    svg.append("g")
      .attr("transform", "translate(0,"+height+")")
      .call(d3.axisBottom(x)
        .tickValues([d3.timeParse("%m/%d/%y %H:%M")("1/01/20 00:00"),d3.timeParse("%m/%d/%y %H:%M")("2/01/20 00:00"),d3.timeParse("%m/%d/%y %H:%M")("3/01/20 00:00"),d3.timeParse("%m/%d/%y %H:%M")("4/01/20 00:00"),d3.timeParse("%m/%d/%y %H:%M")("4/13/20 00:00")])
        .tickSize(10)
        .tickPadding(10)
        .tickFormat(d3.timeFormat("%b %d")))
    svg.append("g")
      .attr("transform", "translate(-30,"+height/2+")")
      .append("text")
        .attr("transform", "rotate(-90)")
        .text("Relative Popularity")
        .style("text-anchor","middle")
    svg.append("g")
      .attr("transform", "translate("+(width/2)+","+(height+50)+")")
      .append("text")
        .text("Date")
        .style("text-anchor","middle")
    d3.select("#"+this.props.name)
      .on('mouseleave',function(){
        console.log("out")
        d3.select("#tempCircle").remove()
        d3.select("#tempLine").remove()
      })
    
    var displayTime = d3.timeFormat("%b %d");
    var prevY = 0;
    var prevX = "1/1/20";
    var nameId = this.props.name
    d3.csv(this.props.dataset, 
      (data) => {
        console.log(data)
        svg.append('line')
          .attr("x1",  x(prevX))
          .attr("x2",  x(d3.timeParse("%m/%d/%y")(data['Day'])))
          .attr("y1", y(prevY))
          .attr("y2", y(data['Percent']))
          .attr("stroke","#08a0e9")
          .attr("stroke-width","2px")
        svg
          .append("circle")
            .attr("cx",  x(d3.timeParse("%m/%d/%y")(data['Day'])))
            .attr("cy", y(data['Percent']))
            .attr("r", 4)
            .attr("fill", "#08a0e9")
            .on('mouseover',function(){
              svg.append("circle")
                .attr("cx",  x(d3.timeParse("%m/%d/%y")(data['Day'])))
                .attr("cy", y(data['Percent']))
                .attr("r", 6)
                .attr("fill", "#08a0e9")
                .attr("id",(nameId+"circle"))
              svg.append("line")
                .attr("x1",  x(d3.timeParse("%m/%d/%y")(data['Day'])))
                .attr("x2", x(d3.timeParse("%m/%d/%y")(data['Day'])))
                .attr("y1", y(data['Percent'])+6)
                .attr("y2",height)
                .attr("stroke", "#fc5d56")
                .attr("id",(nameId+"line1"))
              svg.append("line")
                .attr("x1",  x(d3.timeParse("%m/%d/%y")(data['Day']))-6)
                .attr("x2", 0)
                .attr("y1", y(data['Percent']))
                .attr("y2",y(data['Percent']))
                .attr("stroke", "#fc5d56")
                .attr("id",(nameId+"line2"))
              svg.append("text")
                .attr("x",  x(d3.timeParse("%m/%d/%y")(data['Day'])))
                .attr("y",height+27)
                .text(displayTime(d3.timeParse("%m/%d/%y")(data['Day'])))
                .attr("text-anchor","middle")
                .style("font-size","10px")
                .style("font-family","avenir")
                .style("color","black")
                .attr("id",(nameId+"label1"))
              svg.append("text")
                .attr("x",  -9.5)
                .attr("y",y(data['Percent'])+3.5)
                .text(data['Percent'])
                .attr("text-anchor","end")
                .style("font-size","10px")
                .style("font-family","avenir")
                .style("color","black")
                .attr("id",(nameId+"label2"))
            })
            .on('mouseleave',function(){
              svg.select("#"+nameId+"circle").remove()
              svg.select("#"+nameId+"line1").remove()
              svg.select("#"+nameId+"line2").remove()
              svg.select("#"+nameId+"label1").remove()
              svg.select("#"+nameId+"label2").remove()
            })
        prevX = d3.timeParse("%m/%d/%y")(data['Day']);
        prevY = data['Percent'];
      });
  }

  render() {
    return <div id={this.props.name}></div>;
  }
}

export default GoogleTrends;