let inputUah = document.getElementById('uah'),
    inputUsd = document.getElementById('usd');

inputUah.addEventListener('input', () =>{
    let request = new XMLHttpRequest();

    //request.open(method, url, async, login, pass);
    request.open('GET','./src/current.json');
    request.setRequestHeader('Content-type','application/json; charset=utf-8');
    request.send();

    //status
    //statusText
    //responseText / response
    //readyState

    request.addEventListener('readystatechange', function(){
        let promise = new Promise(function(resolve, reject){
            if (request.readyState === 4 && request.status == 200){
                resolve();
            }else{
                reject();   
            }
        })
        promise.then(()=>{
            let data = JSON.parse(request.response);
            inputUsd.value =  (inputUah.value / data.usd).toFixed(1);
        })
            .catch(()=>{
                inputUsd.value = "Что-то пошло не так";
            })
    })
    
});