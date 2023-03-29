import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import prefectures from "../data/japan_prefectural_borders.json";

export default function Map() {
    return (
        <div>
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                    center: [135, 35],
                    scale: 1000
                }}>
                <Geographies geography={prefectures}>
                {({ geographies }) =>
                    geographies.map((geo) => (
                    <Geography key={geo.rsmKey} geography={geo} />
                    ))
                }
                </Geographies>
            </ComposableMap>
        </div>
    );
};
