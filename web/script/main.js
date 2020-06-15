navigator.geolocation.watchPosition(showPosition);
function showPosition(position) {
    console.log("Aktuelle Position ---  Latitude: " + position.coords.latitude +"  Longitude: " + position.coords.longitude);
}

fetchData(function(objs) {
    for (let item of objs) {
        localStorage.setItem(item._id, generateJson(item));
    }
});

console.log("Brwosersprache: ",getLanguage());
console.log("\n"); 