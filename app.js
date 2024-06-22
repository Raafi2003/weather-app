const searchBar =  document.getElementById('search-bar');
const placeDoc = document.getElementById('place-text')
const searchIcon = document.getElementsByClassName('search-icon')


const getWeather= async (place)=>{
    let unit = 'metric'; //celsius
    let API = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=40423493acf5b9dbf2dc3e6190651ec1&units=${unit}`
    let res= await fetch(API);
    res=res.json()
    console.log(res)
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