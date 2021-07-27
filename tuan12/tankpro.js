function up() {
    let top = parseInt(document.getElementById("tank").style["top"]);
    document.getElementById("tank").style["top"] = top - 19 + "px";
    console.log(top);
}

function down() {
    let down = parseInt(document.getElementById("tank").style["top"]);
    document.getElementById("tank").style["top"] = down + 19 + "px";
    console.log(down);
}

function left() {
    let left = parseInt(document.getElementById("tank").style["left"]);
    document.getElementById("tank").style["left"] = left - 19 + "px";
    console.log(left);
}

function right() {
    let right = parseInt(document.getElementById("tank").style["left"]);
    document.getElementById("tank").style["left"] = right + 19 + "px";
    console.log(right);
}

