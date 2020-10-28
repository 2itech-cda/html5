# Leaflet

## Les marqueurs

[Documentation](https://leafletjs.com/reference-1.7.1.html#marker)

### Ajouter un marqueur

``` js
L.marker([0, 0]).addTo(map);
```

### Ajouter un marqueur avec un popup

``` js
L.marker({
    lat: 0,
    lng: 0
}).addTo(map).bindPopup('<h2 class="popup">Title of the popup</h2>');
```

### Ajouter un marqueur avec un popup ouverte par défaut

``` js
L.marker({
    lat: 0,
    lng: 0
}).addTo(map).bindPopup('<h2 class="popup">title of the popup</h2>').openPopup();
```

### Ajouter un marqueur via une variable ou une constante

``` js
const marker = L.marker([0, 0]).addTo(map);
marker.bindPopup('<p>Content of the popups</p>');
```

### Ajouter un popup independement d'un marqueur 

``` js
const popup = L.popup().setLatLng([0, 0]);
popup.setContent('content of popup');
popup.openOn(map);
```

### Personnaliser l'icon d'un marqueur

``` js
const markerIcon = L.icon({
    iconUrl: 'path/to/icon.svg',
    iconSize: [0, 0], // [largeur, heuteur]
    iconAnchor: [0, 0], // [x, y]
    popupAnchor: [0, 0], // [x, y]
});

const markerCustom = L.marker([0, 0], {
    icon: markerIcon
}).addTo(map);
markerCustom.bindPopup('<p>Custom marker icon</p>');
```

### Marqueur de cercle

``` js
L.circleMarker([0, 0], {
        radius: 50, // valeur en pixel
        weight: 5,
        color: '#784ff6',
        fillColor: '#784ff6',
        fillOpacity: 0.4,
    })
    .addTo(map)
    .bindPopup('<p>Circle marker</p>');
```

### Groupe de marqueurs

L'utilisation d'un groupe permet pouvoir centrer la carte sur un groupe de marqueurs.

``` js
let markers = [];

for (let item of data) {
    let m = L.marker([item.lat, item.lng]).bindPopup(jardin.nom);

    markers.push(m);
}

const groupe = L.featureGroup(markers).addTo(map);

map.fitBounds(groupe.getBounds());
```
