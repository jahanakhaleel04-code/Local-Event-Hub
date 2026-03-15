import React from 'react'
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"; // 👈 only change in imports
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
const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
export const Map = () => {
  const [markers, setMarkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState({ done: 0, total: 0 });
  const events = useSelector((state) => state.events.events);
  useEffect(() => {
    const loadMarkers = async () => {
      const withLocation = events.filter((e) => e.location?.trim());
      if (withLocation.length === 0) { setLoading(false); return; }

      setProgress({ done: 0, total: withLocation.length });
      const results = [];

      for (let i = 0; i < withLocation.length; i++) {
        const event = withLocation[i];
        const coords = await geocode(event.location);

        if (coords) {
          results.push({
            lat: coords.lat,
            lng: coords.lng,
            name: event.name,
            location: event.location,
          });
        }

        setProgress({ done: i + 1, total: withLocation.length });
        if (i < withLocation.length - 1) await sleep(1000);
      }

      setMarkers(results);
      setLoading(false);
    };

    if (events.length > 0) loadMarkers();
    else setLoading(false);

  }, [events]);
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
      <h2>Event Locations</h2>

      {/* Loading progress */}
      {loading && (
        <div style={{ marginBottom: 16 }}>
          <p style={{ fontSize: 14, color: "#666", margin: "0 0 8px" }}>
            Locating events... {progress.done} / {progress.total}
          </p>
          <div style={{ background: "#eee", borderRadius: 6, height: 6 }}>
            <div style={{
              background: "#378ADD",
              height: 6,
              borderRadius: 6,
              width: progress.total
                ? `${(progress.done / progress.total) * 100}%`
                : "0%",
              transition: "width 0.4s ease",
            }} />
          </div>
        </div>
      )}

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
