$(() => {
    $('form').on('submit', (event) => {
    event.preventDefault()
    const userTick = $('input[type="text"]').val();
    //^^ will get values from inputbox
//Comp. Overview ------------->
    var compV = {
        "url": "https://cors-anywhere.herokuapp.com/https://www.alphavantage.co/query?function=OVERVIEW&symbol=" + userTick + "&apikey=5AQX9VMHC3NNBFPR",
        "method": "GET",
        "timeout": 0,
        "headers": {
        "x-api-key": "5AQX9VMHC3NNBFPR"
    },
};

$.ajax(compV).done(function (response) {
    console.log(response);
    let oView = response.Description; 
    //^^gets info from api
    $('#overview').append(oView);
    });

//Global Quote ------------->
    var ePoint = {
        "url": "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + userTick + "&apikey=5AQX9VMHC3NNBFPR",
        "method": "GET",
        "timeout": 0,
        };

    $.ajax(ePoint).done(function (response) {
    console.log(response);
        let globalQuote = response["Global Quote"];
        for(let key in globalQuote){
                $('#quote').append(`<ul>${key} ${globalQuote[key]}</ul>`)
            }
        })
        console.log(globalQuote);
        });
    });

// More Details Modal ------------>
    const popBox = $('#mInfo');
    const modal = $('#modal');
    const closeBox = $('#close');

    const mDetails = () => {
    const userTick = $('input[type="text"]').val();
        $.get("https://cors-anywhere.herokuapp.com/https://www.alphavantage.co/query?function=OVERVIEW&symbol=" + userTick + "&apikey=5AQX9VMHC3NNBFPR", (data) => {
    let oview2 = mDetails
        for (let key in data) {
            if (key !== 'Description') {
            $('#boxText').append(`<ul>${key} ${data[key]}</ul>`)
                }
            }
        })
        modal.css('display', 'block');
    }
    const closeModal = () => {
        modal.css('display', 'none');
    }

    popBox.on('click', mDetails);
    closeBox.on('click', closeModal);