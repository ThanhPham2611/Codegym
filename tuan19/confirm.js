function processConfirm(answer) {
    let result = "";
    if(answer){
        result = 'OK';
    }
    else{
        result = 'Maybe than';
    }
    return result;
}

let confirmAnswer = confirm("Start");
let theAnswer = processConfirm(confirmAnswer);
alert(theAnswer);