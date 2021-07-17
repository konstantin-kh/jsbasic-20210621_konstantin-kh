function makeDiagonalRed(table) {
  for (let i in table.rows) {
    let row = table.rows[i];

    for (let j in row.cells) {
      let col = row.cells[i];

      if (!(row[i] || col)) {
        break;
      } else {
        col.style.backgroundColor = "red";
      }
    }
  }
}
