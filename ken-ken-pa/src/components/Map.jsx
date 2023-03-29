<<<<<<< HEAD
import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import prefectures from "../data/japan_prefectural_borders.json";

export default function Map() {
    return (
        <div>
            <ComposableMap
                className="map-svg"
                projection="geoMercator"
                projectionConfig={{
                    center: [135, 35],
                    scale: 1200
                }}>
                <Geographies
                    className="map-nation"
                    geography={prefectures}>
                    {
                        ({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    title={`${geo.properties.name_ja} - ${geo.properties.name_en}`}
                                    className="map-prefecture"
                                    key={geo.rsmKey}
                                    geography={geo} />
                            ))
                    }
                </Geographies>
            </ComposableMap>
        </div>
    );
};
=======
//this Map.jsx file is for tentative use. It's replaced by Map.jsx Joe created.

import React from "react";

export default function Map(props) {
    const {onClick} = props;
    
    return(
    <div onClick={onClick}>
        This is a tentative Japanese Map!
    </div>
   );
}
>>>>>>> 8f75d33 (feat: create App.js and three components: Map, Memories and PopupMenu)
