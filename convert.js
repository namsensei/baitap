function convert() {
    let amount = document.getElementById("amount").value;
    let from =document.getElementById(from).value;
    let to =document.getElementById("to1").value;
    let rate =from/to ;
    let result = amout*rate;
    document.getElementById("kq").innerText=result;



