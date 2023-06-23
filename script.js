start();
async function start() {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=8172fb42178e324f967eab8091b520bb&units=metric`);
    let data = await response.json();
    document.getElementById('citydes').innerHTML = data.name + " City," + " " + data.sys.country;
    document.getElementById('temperature').innerHTML = Math.floor(data.main.temp);
    document.getElementById('h11').innerHTML = data.weather[0].main;
    document.getElementById('h13').innerHTML = data.main.humidity+"%";
    document.getElementById('h14').innerHTML = data.wind.speed;
    let w = data.weather[0].main;
    if(w=="Haze"){
        document.getElementById('div1').innerHTML=`<img src="images/mist.png" alt="error loading image">`;
        document.body.style.backgroundImage=`linear-gradient(160deg,rgba(12,12,12,0.2),rgba(12,12,12,0.2)),url('images/hazing.gif')`;
        document.getElementById('currentclimate').innerHTML = "Hazy";
        document.getElementById('h12').innerHTML = "Normal";
    }
    else if(w=="Clouds"){
        document.getElementById('div1').innerHTML=`<img src="images/clouds.png" alt="error loading image">`;
        document.body.style.backgroundImage=`linear-gradient(160deg,rgba(12,12,12,0.2),rgba(12,12,12,0.2)),url('images/cloudy.gif')`;
        document.getElementById('currentclimate').innerHTML = "Cloudy";
        document.getElementById('h12').innerHTML = "Normal";
    }
    else if(w=="Clear"){
        document.getElementById('div1').innerHTML=`<img src="images/clear.png" alt="error loading image">`;
        document.body.style.backgroundImage=`linear-gradient(160deg,rgba(12,12,12,0.2),rgba(12,12,12,0.2)),url('images/clearing.gif')`;
        document.getElementById('currentclimate').innerHTML = "Mostly Sunny";
        document.getElementById('h12').innerHTML = "Low";
    }
    else if(w=="Rain"){
        document.getElementById('div1').innerHTML=`<img src="images/rain.png" alt="error loading image">`;
        document.body.style.backgroundImage=`linear-gradient(160deg,rgba(12,12,12,0.2),rgba(12,12,12,0.2)),url('images/raining.gif')`;
        document.getElementById('currentclimate').innerHTML = "Raining";
        document.getElementById('h12').innerHTML = "High";
    }
    else if(w=="Snow"){
        document.getElementById('div1').innerHTML=`<img src="images/snow.png" alt="error loading image">`;
        document.body.style.backgroundImage=`linear-gradient(160deg,rgba(12,12,12,0.2),rgba(12,12,12,0.2)),url('images/snowing.gif')`;
        document.getElementById('currentclimate').innerHTML = "Snowfall";
        document.getElementById('h12').innerHTML = "high";
    }
    else if(w=="Mist"){
        document.getElementById('div1').innerHTML=`<img src="images/mist.png" alt="error loading image">`;
        document.body.style.backgroundImage=`linear-gradient(160deg,rgba(12,12,12,0.2),rgba(12,12,12,0.2)),url('images/misting.gif')`;
        document.getElementById('currentclimate').innerHTML = "Mist";
        document.getElementById('h12').innerHTML = "Normal";
    }
    
    let precision=Math.round(data.main.temp);
    if(precision<0){
        document.getElementById('div1').innerHTML=`<img src="images/snow.png" alt="error loading image">`;
        document.getElementById('currentclimate').innerHTML = "Snowfall";
        document.body.style.backgroundImage=`linear-gradient(160deg,rgba(12,12,12,0.2),rgba(12,12,12,0.2)),url('images/snowing.gif')`;
        document.getElementById('h12').innerHTML = "High";
    }
}

    let date = new Date();
    let currentdate = date.getDate();
    let currentday = date.getDay();
    let todayday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let currentmonth = date.getMonth();
    let todaymonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let currentyear = date.getFullYear();
    document.getElementById('datetime').innerHTML = todaymonth[currentmonth] + " " + currentdate + "," + " " + currentyear;


async function CheckWeather() {
    event.preventDefault();
    let city = document.getElementById('searchbox').value;
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8172fb42178e324f967eab8091b520bb&units=metric`);
        let data = await response.json();
        console.log(data);
    
    document.getElementById('citydes').innerHTML = data.name + " City," + " " + data.sys.country;
    document.getElementById('temperature').innerHTML = Math.round(data.main.temp);
    document.getElementById('h13').innerHTML = data.main.humidity+"%";
    document.getElementById('h14').innerHTML = data.wind.speed;
    let w = data.weather[0].main;
    if(w=="Haze"){
        document.getElementById('div1').innerHTML=`<img src="images/mist.png" alt="error loading image">`;
        document.body.style.backgroundImage=`linear-gradient(160deg,rgba(12,12,12,0.2),rgba(12,12,12,0.2)),url('images/hazing.gif')`;
        document.getElementById('currentclimate').innerHTML = "Hazy";
        document.getElementById('h12').innerHTML = "Normal";
    }
    else if(w=="Clouds"){
        document.getElementById('div1').innerHTML=`<img src="images/clouds.png" alt="error loading image">`;
        document.body.style.backgroundImage=`linear-gradient(160deg,rgba(12,12,12,0.2),rgba(12,12,12,0.2)),url('images/cloudy.gif')`;
        document.getElementById('currentclimate').innerHTML = "Cloudy";
        document.getElementById('h12').innerHTML = "Normal";
    }
    else if(w=="Clear"){
        document.getElementById('div1').innerHTML=`<img src="images/clear.png" alt="error loading image">`;
        document.body.style.backgroundImage=`linear-gradient(160deg,rgba(12,12,12,0.2),rgba(12,12,12,0.2)),url('images/clearing.gif')`;
        document.getElementById('currentclimate').innerHTML = "Mostly Sunny";
        document.getElementById('h12').innerHTML = "Low";
    }
    else if(w=="Rain"){
        document.getElementById('div1').innerHTML=`<img src="images/rain.png" alt="error loading image">`;
        document.body.style.backgroundImage=`linear-gradient(160deg,rgba(12,12,12,0.2),rgba(12,12,12,0.2)),url('images/raining.gif')`;
        document.getElementById('currentclimate').innerHTML = "Raining";
        document.getElementById('h12').innerHTML = "High";
    }
    else if(w=="Snow"){
        document.getElementById('div1').innerHTML=`<img src="images/snow.png" alt="error loading image">`;
        document.body.style.backgroundImage=`linear-gradient(160deg,rgba(12,12,12,0.2),rgba(12,12,12,0.2)),url('images/snowing.gif')`;
        document.getElementById('currentclimate').innerHTML = "Snowfall";
        document.getElementById('h12').innerHTML = "High";
    }
    else if(w=="Mist"){
        document.getElementById('div1').innerHTML=`<img src="images/mist.png" alt="error loading image">`;
        document.body.style.backgroundImage=`linear-gradient(160deg,rgba(12,12,12,0.2),rgba(12,12,12,0.2)),url('images/misting.gif')`;
        document.getElementById('currentclimate').innerHTML = "Mist";
        document.getElementById('h12').innerHTML = "Normal";
    }
    
    document.getElementById('h11').innerHTML = data.weather[0].main;

    let precision=Math.round(data.main.temp);
    if(precision<0){
        document.getElementById('div1').innerHTML=`<img src="images/snow.png" alt="error loading image">`;
        document.getElementById('currentclimate').innerHTML = "Snowfall";
        document.body.style.backgroundImage=`linear-gradient(160deg,rgba(12,12,12,0.2),rgba(12,12,12,0.2)),url('images/snowing.gif')`;
        document.getElementById('h12').innerHTML = "High";
    }
    
    document.getElementById('searchbox').value = "";
}



