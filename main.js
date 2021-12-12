let latitude=41.6362152,longitude=-70.934205
mapboxgl.accessToken="pk.eyJ1IjoiYWdhbWVzIiwiYSI6ImNreDNrM3E5OTF6aGkyb2tqMDhhY3l4aWcifQ.9bBC9KFqPvJbUYUOHM-x8A"
var map=new mapboxgl.Map({
    container:"map",
    style:'mapbox://styles/mapbox/streets-v11',
    center:[longitude,latitude],
    zoom:16
})
map.addControl(
    new mapboxgl.GeolocateControl({
    positionOptions:{
        enableHighAccuracy:true
    },
    trackUserLocation :true   
    })
)

var img1 = document.querySelector("#irish")

// Create a Amber Palace, Jaipur Marker and add it to the map.
var marker1 = new mapboxgl.Marker({
	element: img1
})
	.setLngLat([41.6066, -70.9038])
	.addTo(map);

var img2 = document.querySelector("##nathan")
// Create a  Gateway of India, Mumbai Marker and add it to the map.
var marker2 = new mapboxgl.Marker({
	element: img2
})
	.setLngLat([41.3759, -70.5544])
	.addTo(map);

var img3 = document.querySelector("#prince")
// Create a India Gate Marker and add it to the map.
var marker3 = new mapboxgl.Marker({
	element: img3
})
	.setLngLat([41.6396, -70.9149])
	.addTo(map);


