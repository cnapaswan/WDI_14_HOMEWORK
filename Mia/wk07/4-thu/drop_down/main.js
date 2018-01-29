var cities = ["NYC", "SF", "LA", "SYD", "ATX"]
var bg = ["nyc","sf","la","sydney", "austin"]

var select = document.querySelector('select')

cities.forEach(function(city){
  var opt = document.createElement('option')
  opt.value = city
  opt.innerHTML = city
  select.appendChild(opt)
})  

document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('select').onchange=changeEventHandler;
},false);

function changeEventHandler(event) {
  var city = event.target
  var body = document.querySelector('body')

  for(var i = 0; i < bg.length; i++){
    body.classList.remove(bg[i])}

  for(var i = 0; i < cities.length; i++){
    if (city.value == cities[i]) {
      body.classList.add(bg[i])
    }
  }
}

/*comment*/
