import React, { Component } from "react";
import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation
} from "react-simple-maps";
import * as d3 from "d3";
import allStates from "./allstates.json";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const offsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21]
};
var color_scale = d3.scaleLinear()
                    .domain([0, 83948])
                    .range(['beige', 'red']);
class MapChart2 extends Component {

    render(){
        return(
            <div>
                <ComposableMap projection="geoAlbersUsa">
                    <Geographies geography={geoUrl}>
                    {({ geographies }) => (
                        <>
                        {geographies.map(geo => (
                            <Geography
                            key={geo.rsmKey}
                            stroke="#FFF"
                            geography={geo}
                            fill={color_scale(allStates.find(s => s.val === geo.id).cases)}
                            />
                        ))}
                        {geographies.map(geo => {
                            const centroid = geoCentroid(geo);
                            const cur = allStates.find(s => s.val === geo.id);
                            console.log(centroid)
                            return (
                            <g data-for = {cur.id} data-tip="hi"  key={geo.rsmKey + "-name"}>
                                {cur &&
                                centroid[0] > -160 &&
                                centroid[0] < -67 &&
                                (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                                    <Marker coordinates={centroid}>
                                    <text y="2" fontSize={14} textAnchor="middle">
                                        {cur.id} 
                                    </text>
                                    </Marker>
                                ) : (
                                    <Annotation
                                    subject={centroid}
                                    dx={offsets[cur.id][0]}
                                    dy={offsets[cur.id][1]}
                                    >
                                    <text x={4} fontSize={14} alignmentBaseline="middle">
                                        {cur.id}
                                    </text>
                                    
                                    </Annotation>
                                ))}
                            </g>
                            
                            );
                        })}
                        </>
                    )}
                    </Geographies>
                </ComposableMap>
            </div>
        )
    };
  
};

export default MapChart2;

