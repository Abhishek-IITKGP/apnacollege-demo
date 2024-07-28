function generateTable(){
    const tbl = document.createElement('table');
    const tbody = document.createElement('tbody');

    for (let i = 0; i < 2; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j < 2; j++) {
            const cell = document.createElement('td');
            const textNode = document.createTextNode(`this is row ${i} and column ${j}`);
            cell.appendChild(textNode);
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
    tbl.appendChild(tbody);
    document.body.appendChild(tbl);
    tbl.setAttribute("border","2");
}