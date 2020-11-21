function map_search() {
  // Changes api link based off location input
  var location = document.getElementById("map-address").value.replace(" ", "+");
  var api_endpoint = "";
  var search_endpoint = api_endpoint + location
  document.getElementById("map").setAttribute("src", search_endpoint)
  console.log(search_endpoint);
}
