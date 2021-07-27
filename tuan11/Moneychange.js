function convert() {
    let amount = document.getElementById("Amount").value;
    let FromCurrency = document.getElementById("From").value;
    let ToCurrency = document.getElementById("To").value;
    let result;
    if(FromCurrency == ToCurrency){
        result = "Total: "+ amount;
    }
    else if(FromCurrency == "VND" && ToCurrency == "USD"){
        result = "Total: "+ amount/24000 + "USD";
    }
    else{
        result = "Total: "+ amount*24000 + "VND";
    }

    document.getElementById("Result").innerHTML = result;
}