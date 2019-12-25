let inputUah = document.getElementById('uah'),
    inputUsd = document.getElementById('usd');

inputUah.addEventListener('input', () =>{
    let request = new XMLHttpRequest();

    //request.open(method, url, async, login, pass);
    request.open('GET','./current.json');
    request.setRequestHeader('Content-type','application/json; charset=utf-8');
    request.send();

    //status
    //statusText
    //responseText / response
    //readyState

    request.addEventListener('readystatechange', function(){
        if (request.readyState === 4 && request.status == 200){
            let data = JSON.parse(request.response);
            inputUsd.value =  (inputUah.value / data.usd).toFixed(1)
        }else{
            inputUsd.value = "Что-то пошло не так";
        }
    })
    
});