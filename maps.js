let matroAreaCenterCoordinates = [44.96, -93.2]
let zoomLevel = 9 // 1 = whole world, 10 = large city  20 = city blocks

//creat the map
let map = L.map('college-map').setView(matroAreaCenterCoordinates,zoomLevel)


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
id: 'mapbox.streets',
accessToken: 'pk.eyJ1IjoibW9oYW1tYWQ3NyIsImEiOiJjazZsaXBwMXIwZmlrM25wYjdlbnZoaGo5In0.wcvi8DMV3iTMcgRNiDmVVQ'
}).addTo(map)

let mctcCoordinates = [44.9724 , -93.2844]
let mctcMarker = L.marker(mctcCoordinates).addTo(map)
.bindPopup("Minneapolis College<br><a herf= 'https://minneapolis.edu'>Website</a>")
.addTo(map)
let stPaulCoordinates = [44.94839, -93.1099]
let stpMarker = L.marker(stPaulCoordinates).addTo(map)
.bindPopup("Saint Paul College<br><a href= 'https://saintpaul.edu'>Website</a>")

let NormandaleCoordinates = [44.8297, -93.3312]
let NormandaleMarker = L.marker(NormandaleCoordinates).addTo(map)
.bindPopup("Saint Paul College<br><a href= 'http://www.normandale.edu/'>Website</a>")