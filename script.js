
$(document).ready(function(){



  let   form = $("#weather-form");
  let   tempera = $("#c-temp");
  let   hum = $("#c-hum");
  let   minTemp = $("#min-temp");
  let   maxTemp = $("#max-temp");
  let   latit = $("#latit");
  let   longit = $("#longit");
  let  weatherDescription = $("#weather-description");

  form.on("submit",function(event){
    event.preventDefault();

    let city = $("#city").val()
    let cle = "1fc80fe617befe7680b6efe0b26f9cdc";
    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${cle}&units=metric`;
    $.ajax({
     url:apiUrl ,
     method :"GET",
     dataType: "json",
     success: function(res){
      console.log(res);
      console.log(res.main.temp);
      tempera.text(res.main.temp+"°C");
      hum.text(res.main.humidity+"%");
      minTemp.text(res.main.temp_min+"°C");
      maxTemp.text(res.main.temp_max+"°C");
      latit.text(res.coord.lat);
      longit.text(res.coord.lon);
      let groupe = `<img src="http://openweathermap.org/img/wn/${res.weather[0].icon}.png"> ${res.weather[0].description}`
      weatherDescription.html(groupe);

    
     },
     error : function(){
         console.log("il y'a une erreur");
     }
      })
  })  


})