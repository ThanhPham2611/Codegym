function buttontop() {
    let top = parseInt(document.getElementById("tank").style["top"]);
    document.getElementById("tank").style["top"] = top - 19 + "px";
    console.log(top);
}

function buttonleft() {
    let left = parseInt(document.getElementById("tank").style["left"]);
    document.getElementById("tank").style["left"] = left - 19 +"px";
    console.log(left);
}

function buttondown() {
    let top = parseInt(document.getElementById("tank").style["top"]);
    document.getElementById("tank").style["top"] = top + 19 +"px";
    console.log(top);
}

function buttonright() {
    let left = parseInt(document.getElementById("tank").style["left"]);
    document.getElementById("tank").style["left"] = left + 19 +"px";
    console.log(left);
}