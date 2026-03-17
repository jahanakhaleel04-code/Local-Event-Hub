import React from 'react'
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function FitBounds({ markers }) {
  const map = useMap();
  useEffect(() => {
    if (markers.length === 0) return;
    const bounds = markers.map((m) => [m.lat, m.lng]);
    map.fitBounds(bounds, { padding: [50, 50] });
  }, [markers]);
  return null;
}
async function geocode(locationName) {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(locationName)}&format=json&limit=1`
  );
  const data = await res.json();
  if (data.length === 0) return null;
  return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
}

export const Map = ({ eventid }) => {
  const [markers, setMarkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const events = useSelector((state) => state.events.events);
  useEffect(() => {
    const loadMarkers = async () => {

      const event = events.find((event) => {
        return event.id === Number(eventid)
      })
      if (!event || !event.location?.trim()) {
        setLoading(false)
        return
      }
      // console.log(event)
      const results = [];


      const coords = await geocode(event.location);
      // console.log(coords)
      if (coords) {
        results.push({
          lat: coords.lat,
          lng: coords.lng,
          name: event.title,
          location: event.location,
        });
      }
      // console.log(results)



      setMarkers(results);
      setLoading(false);
    };

    if (events.length > 0) loadMarkers();
    else setLoading(false);

  }, [events, eventid]);
  return (
    <div className='w-full'>
      
      {/* Map */}
      <MapContainer
        center={[20.5937, 78.9629]}
        zoom={5}
        style={{ height: 480, borderRadius: 10, border: "1px solid #ddd" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />


        {!loading && <FitBounds markers={markers} />}

        {markers.map((marker, i) => (
          <Marker key={i} position={[marker.lat, marker.lng]}>
            <Popup>
              <strong>{marker.name}</strong>
              <br />
              <span style={{ fontSize: 13, color: "#555" }}>{marker.location}</span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>


    </div>
  );
}
