# Leaflet

[Documentation](https://leafletjs.com/reference-1.7.1.html#path)

## Dessiner des formes

### Cercle

``` js
const radius = 30000;
L.circle([0, 0], {
    radius: radius,
    color: 'purple',
    fillColor: 'purple',
    fillOpacity: 0.5,
    weight: 2,
}).addTo(map);
```

ou

``` js
L.circle([0, 0], radius).addTo(map);
```

### Rectangle

``` js
let limites = [
    [0, 0], // [lat, lng]
    [0, 0]  // [lat, lng]
];
L.rectangle(limites, {
    color: 'purple',
    weight: 2,
}).addTo(map);
```

### Polylines

``` js
L.polyline([
    center,
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
], {
    color: 'purple',
    weight: 2,
}).addTo(map);
```

### Polygon

``` js
L.polygon([
    center,
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
], {
    color: 'purple',
    weight: 2,
}).addTo(map);
```
