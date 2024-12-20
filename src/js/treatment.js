const container = document.querySelector('.eye-grid-container');
const totalCells = 28;
const imageCells = [3, 8, 9, 12, 13, 14, 15, 16, 17, 20, 21, 23, 24, 25, 26, 27];

for (let i = 1; i <= totalCells; i++) {
  const cell = document.createElement('div');
  cell.className = 'grid-item';
  if (imageCells.includes(i)) {
    cell.style.backgroundImage = "url('Group2.svg')";
    cell.style.backgroundSize = 'cover';
    cell.style.backgroundPosition = 'center';
  }
  container.appendChild(cell);
}
