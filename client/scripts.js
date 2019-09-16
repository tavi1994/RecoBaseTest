const recordTable = document.getElementById("recordTable");
let formDataObj = {};

function submitInput(form) {
    for (let element of form.elements) {
        if (element.id) {
            formDataObj[element.id] = element.value;
            console.log(formDataObj[element.id]);
        }
    }
    

    // const formDataString = JSON.stringify(formDataObj);
    //console.log(JSON.stringify(formDataObj));
    
    registerRecord();
    console.log(formDataObj[element.id]);
    // makeRequest("POST", recordURL).then((req) => {
    //     notification = JSON.parse(req.responseText);
    //     joinNotify.innerText = notification.message
    // }).catch((error) => { console.log(error.message) });
    $('#exampleModal').modal('toggle');
    return false;
}

function registerRecord() {
    const req = new XMLHttpRequest();
    req.onload = () => {
        location.href = "index.html";
    };
    req.open('POST', 'http://34.89.0.182:8444/record');
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(JSON.stringify(formDataObj));
    //console.log(JSON.stringify(formDataObj));

}

function tableEntries(table) {
    let row = document.createElement("tr");
    let tbutton = document.createElement('button');
    tbutton.type = "button";
    tbutton.className = "btn btn-danger";
    tbutton.innerHTML = "remove";
    tbutton.id = "tableButton";
    tbutton.addEventListener("click", function (e) {
        // build and send http delete here
        this.parentNode.parentNode.removeChild(this.parentNode);
        //console.log(formDataObj.innerHTML);
        // const recReq = new XMLHttpRequest;
        
        // recReq.open("DELETE", 'http://35.235.59.31:8444/record'+"/"+element.value);
        // recReq.setRequestHeader('Content-Type', 'application/json');
        // recReq.send(null);
    });
    

    for (let i = 1; i < arguments.length; i++) {
        let tbox = document.createElement("td");
        tbox.innerHTML = arguments[i];
        row.append(tbox);

    }
    table.append(row);
    row.append(tbutton);
}

function onLoadRec() {

    const recReq = new XMLHttpRequest;
    recReq.onload = () => {
        data = JSON.parse(recReq.response);
        for (let i = 0; i < data.length; i++) {
            let field = data[i];
            tableEntries(recordTable, field["label"], field["title"], field["artist"], field["year"], "£" + field["value"]);
        }
    }
    recReq.open('GET', 'http://34.89.0.182:8444/record');
    recReq.send();

}



            // xhr.onload = () => {
            //     location.href="index.html";
            // }
            // xhr.open("POST","http://localhost:8080/record");
            // xhr.setRequestHeader('Content-Type','application/json');
            // xhr.send(formDataString);