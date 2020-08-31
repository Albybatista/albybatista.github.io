$(() => {
    $('form').on('submit', (event) => {
        event.preventDefault()
    const userTick = $('#input-box');
    userTick.val()
    console.log(userTick);



//global
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://alpha-vantage.p.rapidapi.com/query?datatype=json&function=GLOBAL_QUOTE&symbol=" + userTick,
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
        "x-rapidapi-key": "b65776fb85msh55bdd52e2d985fdp18d51fjsn8b3af1d26786"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});


//Intraday 5 min
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://alpha-vantage.p.rapidapi.com/query?datatype=json&output_size=compact&interval=5min&function=TIME_SERIES_INTRADAY&symbol=" + userTick,
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
        "x-rapidapi-key": "b65776fb85msh55bdd52e2d985fdp18d51fjsn8b3af1d26786"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});


// Company Overview
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https: //www.alphavantage.co/query?function=OVERVIEW&symbol=" + userTick + "&apikey=5AQX9VMHC3NNBFPR",
    "method": "GET"
    // ,"headers": {
    //     "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
    //     "x-rapidapi-key": "b65776fb85msh55bdd52e2d985fdp18d51fjsn8b3af1d26786"
    }
})

$.ajax(settings).done(function (response) {
    console.log(response);
    })
});




// $('button').on('click', (event) => {
//     event.preventDefault();
//     const userTick = ($(event.currentTarget).attr('id')) 
// })
// $('#input-box').val();

// $.ajax(
//     {
//         url: "https://alpha-vantage.p.rapidapi.com/query?function=GLOBAL_QUOTE&symbol=" + userTick,
//         type:"GET",
//         data: { 
//             "$limit": 500;
//             "$$app_token": "5AQX9VMHC3NNBFPR"

//         }
//     }
// }).then(
//     (data) => {

//     }
// )
// )



//Pseudocode
// Pull info -- .val
// Save info -- 
// Show info 
// display info on page 

// Global quote (also quote endpoint) will give me following data -----
// "Global Quote": {
//     "01. symbol": "TSLA",
//     "02. open": "2295.1200",
//     "03. high": "2318.4900",
//     "04. low": "2186.5200",
//     "05. price": "2213.4000",
//     "06. volume": "20081176",
//     "07. latest trading day": "2020-08-28",
//     "08. previous close": "2238.7500",
//     "09. change": "-25.3500",
//     "10. change percent": "-1.1323%"
// }
// }

// Company Overview will give me this, but only need 
// Name, description, exchange, sector, industry
