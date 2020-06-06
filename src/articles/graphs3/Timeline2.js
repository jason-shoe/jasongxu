import React, { Component } from "react";
import * as d3 from "d3";
import chineseVirusMentions from "./speechChineseVirus.csv";
class Timeline2 extends Component {
  componentDidMount() {
    var margin = {top: 70, right: 30, bottom: 30, left: 60},
                  width = window.innerWidth*0.7 - margin.right - margin.left,
                  height = 290 - margin.top - margin.bottom
    
    
    var svg = d3.select("#timeline2")
      .style('position','relative')
      .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform",
              "translate("+margin.left+","+margin.top+")");
    svg.append('text')
        .attr("transform","translate("+width/2+","+(-46)+")")
        .attr("text-anchor","middle")
        .text("Press Briefings")
        .style('fill',"#black")
        .style("font-size","30px")
        .style("font-weight","bold")
        .style('opacity',0.5)
    svg.append('text')
        .attr("transform","translate("+width/2+","+(height-10)+")")
        .text("Interactive Timeline")
        .style('font-size','70px')
        .style('text-anchor','middle')
        .style('opacity',0.5)
        .style('font-weight','bold')
    svg.append('text')
        .attr("transform","translate("+width/2+","+(height+25)+")")
        .text("(hover over dots to see Trump quotes)")
        .style('font-size','30px')
        .style('text-anchor','middle')
        .style('opacity',0.5)

    var x = d3.scaleTime()
      .domain([d3.timeParse("%m/%d/%y %H:%M")("1/24/20 21:18"), d3.timeParse("%m/%d/%y %H:%M")("4/13/20 13:31")])
      .range([ 0, width ]);

    var Tooltip = d3.select("#timeline2")
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px")
      .style("position","absolute")
      .style("width",String(window.innerWidth*0.7)+"px")
      
    svg.append("g")
      .attr("transform", "translate(0,0)")
      .call(d3.axisTop(x)
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
    d3.select("#timeline2")
      .on('mouseleave',function(){
        console.log("out")
        d3.select("#tempCircle2").remove()
        d3.select("#tempLine2").remove()
        Tooltip
          .style('opacity',0)
      })

    var displayTime = d3.timeFormat("%B %d, %Y");
    d3.csv(chineseVirusMentions, 
      (data) => {
          console.log(data['date']);
          console.log(d3.timeParse("%b %d, %Y")(data['date']))
            svg
              .append("circle")
                .attr("cx",  x(d3.timeParse("%b %d, %Y")(data['date'])))
                .attr("cy", 0)
                .attr("r", 5)
                .attr("fill", "#fc5d56")
                .on('mouseover',function(){
                  d3.select("#tempCircle2").remove()
                  d3.select("#tempLine2").remove()
                  
                  console.log(data['created_at']);
                  svg.append('line')
                    .attr('id','tempLine2')
                    .attr("x1",  x(d3.timeParse("%b %d, %Y")(data['date'])))
                    .attr("x2",  x(d3.timeParse("%b %d, %Y")(data['date'])))
                    .attr("y1", 0)
                    .attr("y2", 80)
                    .attr("stroke","black")
                    .attr("stroke-width","2px")
                  svg.append("circle")
                    .attr("cx",  x(d3.timeParse("%b %d, %Y")(data['date'])))
                    .attr("cy", 0)
                    .attr("r", 10)
                    .attr("fill", "#fc5d56")
                    .attr('id','tempCircle2')
                  Tooltip
                    .html("<strong>" + displayTime(d3.timeParse("%b %d, %Y")(data['date'])) + "</strong><br />" + data['text'])
                    .style("left",0+"px")
                    .style("top", 110 + "px")
                    .style('opacity',1)
                  
                })
                .on('mouseleave',function(){
                })
          
      });
  }

  render() {
    return <div id="timeline2"></div>;
  }
}

export default Timeline2;