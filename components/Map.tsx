'use client'
import { shapes } from "@/constants";
import React from "react";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";


export default function Map() {
  return (
    <MapContainer className="w-full h-full border rounded focus:border-slate-500 transition-colors shadow-md z-0" center={[20.677263, -103.349328]} zoom={16}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      <Polyline className="shadow-2xl" pathOptions={{ color: '#111111' }} positions={shapes.map(shape => [shape.shape_pt_lat, shape.shape_pt_lon])} />
    </MapContainer>
  )
}
