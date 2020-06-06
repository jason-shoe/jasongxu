import React, { Component } from "react";
import * as d3 from "d3";
import virusMentions from "./virusMentions.csv";

class Timeline extends Component {
  componentDidMount() {
    var margin = {top: 0, right: 30, bottom: 70, left: 60},
                  width = window.innerWidth*0.7 - margin.right - margin.left,
                  height = 200 - margin.top - margin.bottom
    
    
    var svg = d3.select("#timeline")
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
      svg.append('text')
        .attr("transform","translate("+width/2+","+(height+65)+")")
        .attr("text-anchor","middle")
        .text("Twitter")
        .style('fill',"black")
        .style("font-size","30px")
        .style("font-weight","bold")
        .style('opacity',0.5);
    var x = d3.scaleTime()
      .domain([d3.timeParse("%m/%d/%y %H:%M")("1/24/20 21:18"), d3.timeParse("%m/%d/%y %H:%M")("4/13/20 13:31")])
      .range([ 0, width ]);
    var xShift = d3.scaleTime()
      .domain([d3.timeParse("%m/%d/%y %H:%M")("1/24/20 21:18"), d3.timeParse("%m/%d/%y %H:%M")("4/13/20 13:31")])
      .range([ 59, -353 ]);
    var col = d3.scaleLinear()
      .domain([0,1])
      .range(["#08a0e9","#fc5d56"])
    var Tooltip = d3.select("#timeline")
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px")
      .style("position","absolute")
      .style("width","400px")
      
    svg.append("g")
      .attr("transform", "translate(0,"+height+")")
      .call(d3.axisBottom(x)
        .tickValues([d3.timeParse("%m/%d/%y %H:%M")("1/24/20 21:18"),d3.timeParse("%m/%d/%y %H:%M")("2/01/20 00:00"),d3.timeParse("%m/%d/%y %H:%M")("3/01/20 00:00"),d3.timeParse("%m/%d/%y %H:%M")("4/01/20 00:00"),d3.timeParse("%m/%d/%y %H:%M")("4/13/20 13:31")])
        .tickSize(10)
        .tickPadding(10)
        .tickFormat(d3.timeFormat("%b %d")))
    d3.selectAll('g.tick')
      .style('color',"black")
      .style('font-size','15px')
      .style('stroke-width','5px')
    d3.selectAll('path.domain')
      .style('stroke-width','5px')
    d3.select("#timeline")
      .on('mouseleave',function(){
        console.log("out")
        d3.select("#tempCircle").remove()
        d3.select("#tempLine").remove()
        Tooltip
          .style('opacity',0)
      })
    var displayTime = d3.timeFormat("%B %d, %Y");
    d3.csv(virusMentions, 
      (data) => {
          console.log(data['china_virus']);
          console.log(col(data['china_virus']));
          if(data['is_retweet'] === "FALSE"){
            svg
              .append("circle")
                .attr("cx",  x(d3.timeParse("%m/%d/%y %H:%M")(data['created_at'])))
                .attr("cy", height)
                .attr("r", 5)
                .attr("fill", col(data['china_virus']))
                .on('mouseover',function(){
                  d3.select("#tempCircle").remove()
                  d3.select("#tempLine").remove()
                  
                  console.log(data['created_at']);
                  svg.append('line')
                    .attr('id','tempLine')
                    .attr("x1",  x(d3.timeParse("%m/%d/%y %H:%M")(data['created_at'])))
                    .attr("x2",  x(d3.timeParse("%m/%d/%y %H:%M")(data['created_at'])))
                    .attr("y1", 0)
                    .attr("y2", height)
                    .attr("stroke","black")
                    .attr("stroke-width","2px")
                  svg.append("circle")
                    .attr("cx",  x(d3.timeParse("%m/%d/%y %H:%M")(data['created_at'])))
                    .attr("cy", height)
                    .attr("r", 10)
                    .attr("fill", col(data['china_virus']))
                    .attr('id','tempCircle')
                  Tooltip
                    .html("<strong>" + displayTime(d3.timeParse("%m/%d/%y %H:%M")(data['created_at'])) + "</strong><br />" + data['text'])
                    .style("left", x(d3.timeParse("%m/%d/%y %H:%M")(data['created_at'])) + xShift(d3.timeParse("%m/%d/%y %H:%M")(data['created_at'])) + "px")
                    .style("top", -90 + "px")
                    .style('opacity',1)
                  
                })
                .on('mouseleave',function(){
                })
          }
          
      });
  }

  render() {
    return <div><div id="area1"></div><div id="timeline"></div></div>;
  }
}

export default Timeline;