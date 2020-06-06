import React, { createRef, Component } from "react";
import * as d3 from "d3";

class PieClass extends Component {
  constructor(props) {
      super(props);
      this.ref = createRef();
      this.state = {
        dataNum: 0
      }
  }
  drawLegend(){
    var color = d3.scaleOrdinal()
          .domain(['MEAT','PRODUCE','GROCERY','FROZEN FOOD','BAKERY - COMMERCIAL','BAKE SHOP','PREPARED FOODS','DAIRY','GENERAL MERCHANDISE','HEALTH AND BEAUTY CARE'])
          .range(d3.schemeCategory10);
      var relevantData = ['MEAT','PRODUCE','GROCERY','FROZEN FOOD','BAKERY - COMMERCIAL','BAKE SHOP','PREPARED FOODS','DAIRY','GENERAL MERCHANDISE','HEALTH AND BEAUTY CARE']

      var legendG = d3.select(this.ref.current).selectAll(".legend") // note appending it to mySvg and not svg to make positioning easier
            .data(relevantData)
            .enter()
            .append("g")
            .attr("transform", (d,i) => {
              return "translate(" + ((this.props.width) - 200) + "," + (i * 15 + 20) + ")"; // place each legend on the right and bump each one down 15 pixels
            })
            .attr("class", "legend");   
          
          legendG.append("rect") // make a matching color rect
            .attr("width", 10)
            .attr("height", 10)
            .attr("fill", (d, i) => {
              return color(d);
            });
          
          legendG.append("text") // add the text
            .text((d) => {
              return d;
            })
            .style("font-size", 12)
            .attr("y", 10)
            .attr("x", 11);
  }

  drawGraph(){
    d3.select(this.ref.current).selectAll("*").remove();
    

    // append the svg object to the div called 'my_dataviz'
    d3.select(this.ref.current)
      .append("svg")
        .attr("width", this.props.width)
        .attr("height", this.props.height)
      .append("g")
        .attr("transform", "translate(" + this.props.width / 2 + "," + this.props.height / 2 + ")");
        d3.select(this.ref.current).selectAll("path").remove();
  }
  


  update(num, data){
    d3.select(this.ref.current).selectAll(".legend").remove();
    var radius = Math.min(this.props.width, this.props.height) / 2 - this.props.margin
      var color = d3.scaleOrdinal()
        .domain(['MEAT','PRODUCE','GROCERY','FROZEN FOOD','BAKERY - COMMERCIAL','BAKE SHOP','PREPARED FOODS','DAIRY','GENERAL MERCHANDISE','HEALTH AND BEAUTY CARE'])
        .range(d3.schemeCategory10);
      // Compute the position of each group on the pie:
      var pie = d3.pie()
        .value(function(d) { return d.value['PriceTotal']; })
        .sort(function(a, b) {  return d3.ascending(a.value['Index'], b.value['Index']);} ) // This make sure that group order remains the same in the pie chart
      var data_ready = pie(d3.entries(data))
      var u = d3.select(this.ref.current).selectAll("g").selectAll("path")
        .data(data_ready)
      // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
      u
        .enter()
        .append('path')
        .merge(u)
        .transition()
        .duration(1000)
        .attr('d', d3.arc()
          .innerRadius(this.props.innerRadius)
          .outerRadius(radius)
        )
        .attr('fill', function(d){return(color(d.data.value['Category'])) })
        .attr("stroke", "white")
        .style("stroke-width", "0px")
        .style("opacity", 1)
        .text("ajasdfaf")
        
    
      // remove the group that is not present anymore
      u
        .exit()
        .remove()
      this.drawLegend();

  }
  componentDidMount() {
    var data1 = this.props.data
    this.drawGraph();
    this.update(0, data1);
    this.drawLegend();
  }

  render() {
    this.componentDidMount();
    return <svg class ="piechart" height={this.props.height} width={this.props.width} ref={this.ref} />;
  }
}

export default PieClass;