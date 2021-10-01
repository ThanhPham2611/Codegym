let table = "<table border = '1' width = '300' cellspacing = '0' cellpadding = '3'>"
for(i=1;i<=10;i++){
    table += "<tr>";
    for(j=1;j<=10;j++){
        table += "<td>" + i + '*' + j + '=' + i*j + "</td>";
    }
    table += "</tr>";
}

table += "</table>";

document.write(table);

