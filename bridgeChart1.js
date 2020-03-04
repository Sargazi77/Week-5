let matroAreaCenterCoordinates = [37.0902, -95.7129]
let zoomLevel = 3 // 1 = whole world, 10 = large city  20 = city blocks

//creat the map
let map = L.map('college-map').setView(matroAreaCenterCoordinates,zoomLevel)


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
id: 'mapbox.streets',
accessToken: 'pk.eyJ1IjoibW9oYW1tYWQ3NyIsImEiOiJjazZsaXBwMXIwZmlrM25wYjdlbnZoaGo5In0.wcvi8DMV3iTMcgRNiDmVVQ'
}).addTo(map)

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

descriptions.forEach(function(element){
    var cartLable = element.name
    console.log(cartLable)

})
let BridgeName=[]
let bridgeSpan = []

descriptions.forEach(function(element) {
BridgeName.push(element.name)
bridgeSpan.push(element.Span)
console.log(BridgeName, bridgeSpan)
})



new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels:BridgeName,

      datasets: [
        {
          label: "Span length",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: bridgeSpan
        }
      ]
    },
    options: {
      scales:{
        yAxes:[{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      legend: { display: false },
      title: {
        display: true,
        text: 'P'
        
      }
    }
});