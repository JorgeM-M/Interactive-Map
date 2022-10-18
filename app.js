//Get user location

async function getCoords(){
    pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
    return [pos.coords.latitude, pos.coords.longitude]
}
getCoords()

//MAP
async function buildMap(){
    await getCoords()
    var map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
let userLocation = L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map);
    userLocation.addTo(map).bindPopup('<p1><b>You Are Here</b></p1>').openPopup()
}
buildMap()

//Create Marker


// //Foursquare API




async function getFourSquare(lati, long,category){
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'fsq3EJsTVBHhGQrAkhe37di2BRSCUz5CmWc8T7VwGG90vcU='
        }
    };
    let limit = 5
    let lat = pos.coords.latitude
    let lon = pos.coords.longitude
    fetch('https://api.foursquare.com/v3/places/search?query=business&ll=32.6500352%2C-117.047296&sort=DISTANCE&limit=5', options)
    let data = await response.text
    /*.then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));*/
}

/*
let arrayOfLocations = [];
fetch(url, options)
    .then(function (response){})
*/