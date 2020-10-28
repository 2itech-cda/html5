# Leaflet

## Le routage

Import des dépendances de leaflet routing machine :

``` html
<link rel="stylesheet" href="https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.css" />
<script src="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.js"></script>
<script src="https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.js"></script>
```

Déclaration du controller :

``` js
const map = L.map('mapid').setView([48.8566, 2.3522], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'OpenStreetMap'
}).addTo(map);

L.Routing.control({
    // waypoints: [
    //     L.latLng(57.74, 11.94),
    //     L.latLng(57.6792, 11.949)
    // ],
    routeWhileDragging: true,
    geocoder: L.Control.Geocoder.nominatim(),
    language: 'fr'
}).addTo(map);
```
