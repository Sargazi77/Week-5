let matroAreaCenterCoordinates = [37.0902, -95.7129]
let zoomLevel = 3 // 1 = whole world, 10 = large city  20 = city blocks

//creat the map
let map = L.map('college-map').setView(matroAreaCenterCoordinates,zoomLevel)


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
id: 'mapbox.streets',
accessToken: 'pk.eyJ1IjoibW9oYW1tYWQ3NyIsImEiOiJjazZsaXBwMXIwZmlrM25wYjdlbnZoaGo5In0.wcvi8DMV3iTMcgRNiDmVVQ'
}).addTo(map)

//let bridge1 = [40.6066 , -74.0447]
//let mctcMarker = L.marker(mctcCoordinates).addTo(map)
//.bindPopup("Minneapolis College<br><a herf= 'https://minneapolis.edu'>Website</a>")
//.addTo(map)
//let bridge2 = [37.8199,-122.4783]
//let stpMarker = L.marker(stPaulCoordinates).addTo(map)
//.bindPopup("Saint Paul College<br><a href= 'https://saintpaul.edu'>Website</a>")

//let bridge3 = [45.8174, -84.7278]
//let NormandaleMarker = L.marker(NormandaleCoordinates).addTo(map)
//.bindPopup("Saint Paul College<br><a href= 'http://www.normandale.edu/'>Website</a>")

//let bridge4 = [40.8517, -73.9527]
//let NormandaleMarker2 = L.marker(NormandaleCoordinates2).addTo(map)
//.bindPopup("Saint Paul College<br><a href= 'http://www.normandale.edu/'>Website</a>")

//let bridges5 = [47.2690, -122.5517]
//let NormandaleMarker3 = L.marker(NormandaleCoordinates3).addTo(map)
//.bindPopup("Saint Paul College<br><a href= 'http://www.normandale.edu/'>Website</a>")

let descriptions = [
    {"name":"Golden Gate Bridge","City, State":"San Francisco and Marin, CA","Span":"1280.2","location":[37.8199, -122.4783]},
    {"name":"Verrazano-Narrows Bridge","City, State":"New York, NY","Span":"1298.4","location":[40.6066, -74.0447]},
    {"name":"Mackinac Bridge","City, State":"Mackinaw and St Ignace, MI","Span":"1158.0","location":[45.8174, -84.7278]},
    {"name":"George Washington Bridge","City, State":"New York, NY and New Jersey, NJ","Span":"1067.0","location":[40.8517, -73.9527]},
    {"name":"Tacoma Narrows Bridge","City, State":"Tacoma and Kitsap, WA","Span":"853.44","location":[47.2690, -122.5517]}
]


descriptions.forEach(function(element){
    var bridgelocation = element.location
    console.log(bridgelocation)
     L.marker(bridgelocation).bindPopup(`${element.name} with span of ${element.Span}`).addTo(map)


})
// let i = 0
// descriptions.forEach((element) => {
//       
//     
//     // console.log(bridgelocation)
//     //L.marker(bridgelocation).addTo(map)
// })
    

    // L.marker(i).addTo(map)
    // console.log(i)
     
     
 


    // .bindPopup(" brdiges")
    //   L.marker(bridgelocation).addTo(map)
    //  .bindPopup(descriptions[i])
    // i = i + 1

// new Chart(document.getElementById("bar-chart"), {
//     type: 'bar',
//     data: {
//       labels: ["b1", "Asia", "Europe", "Latin America", "North America"],
//       datasets: [
//         {
//           label: "Span length",
//           backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
//           data: [1289.8,5267,734,784,433]
//         }
//       ]
//     },
//     options: {
//       legend: { display: false },
//       title: {
//         display: true,
//         text: 'P'
//       }

