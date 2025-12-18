//@ts-expect-error
import Map  from "react-map-gl";
import React from "react";

interface MapComponentProps {
  theme: string; // the current map theme (light or dark)
}

//use the react-map-gl wrapper to render the map

 const mapStyles: Record<string, string>  = {
  light: "mapbox://styles/mapbox/light-v10",
  dark: "mapbox://styles/mapbox/dark-v10"
}

export const MapComponent = ({ theme }: MapComponentProps) => {
  const mapAccessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN


    const mapStylesUrl = mapStyles[theme] || mapStyles["light"]

  return (


    <Map
      initialViewState={{
        latitude: 51.505,
        longitude: -0.09,
        zoom: 12,
      }}
      style={{width:"100%", height:"500px"}}
      mapStyle= {mapStylesUrl} //dynamic variable?
      mapboxAccessToken={mapAccessToken}
    />

  )
}