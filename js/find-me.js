// Initialize and add the map
function initMap() {
    // The location of Uluru
    const ottawa = {
        lat: 45.424721,
        lng: -75.695000
    };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: ottawa,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: ottawa,
        map: map,
    });
}