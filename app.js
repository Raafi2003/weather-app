const searchBar =  document.getElementById('search-bar');
const placeDoc = document.getElementById('place-text')
const searchIcon = document.getElementsByClassName('search-icon')
const temperature=document.getElementById('temperature');
const cityName=document.getElementById("cityname");
const humidity= document.getElementById('humidity');
const wind=document.getElementById('wind');
//let datavar="";
const getWeather= async (place)=>{
    let unit = 'metric'; //celsius
    let API = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=40423493acf5b9dbf2dc3e6190651ec1&units=${unit}`
    await fetch(API).then((res)=>{
        return res.json();
    
    }).then((data)=>{
        let responsedata=data;
       // console.log(responsedata);
        cityName.innerText=responsedata.name;
        temperature.innerText=responsedata.main.temp;
        humidity.innerText=responsedata.main.humidity;
        wind.innerText=responsedata.wind.speed;
    })
    
    //console.log(res)
}

const searchHandler=(place)=>{
    getWeather(place)
    
    clear_input();
}

searchBar.addEventListener('keydown',(e)=>{
    if(e.key=='Enter'){
        let place = searchBar.value;
        searchHandler(place);
    }
})

const clear_input=()=>{
    searchBar.value="";
}

// const callWeather=()=>{
//     getWeather().then((res)=>{
//         console.log(res.name);
//     }).catch((err)=>{
//         console.log(err)
//     })
// }
// callWeather();