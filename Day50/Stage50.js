console.log("Hey");

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
     console.log('You have clicked the fetchBtn');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);     //true--Not blocking   //GET---Only fetch   //POST---Send data
    // Got that link using JSONFakeData

    // USE THIS FOR POST REQUEST, Got this link form DummySampleRestApi
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json');        //Response Header--Sending Form's data in URL
 
    // What to do on progress (optional)
    xhr.onprogress = function(){
        console.log('On progress');
    }

    // xhr.onreadystatechange = function () {
    //     console.log('ready state is ', xhr.readyState);       
    // }

    // What to do when response is ready
    xhr.onload = function () {        //onload----Ready state 4
        if(this.status === 200){      // 200---Response code of HTTP(Ok)

            console.log(this.responseText)
        }
        else{
            console.log("Some error occured")
        }
    }
    // send request
    //  xhr.send();
    params = `{"name":"test34sad545","salary":"123","age":"23"}`;
    xhr.send(params);
    console.log("We are done!");
}


let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);
    // Got that link using DummySampleRestApi

    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj)
            {
                str += `<li>${obj[key].employee_name} </li>`;
            }
            list.innerHTML = str;
        }
        else{
            console.log("Some error occured heheeehehe")
        }
    }
    // send request
    xhr.send();
    console.log("We are done fetching employeess");   
}