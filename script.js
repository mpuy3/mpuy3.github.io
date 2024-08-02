const canvas = document.getElementById('molecule-canvas');
const ctx = canvas.getContext('2d');

let selectedAtomType = null;
let atoms = [];

canvas.addEventListener('click', (event) => {
  const x = event.clientX - canvas.offsetLeft;
  const y = event.clientY - canvas.offsetTop;
  if (selectedAtomType != null) {
  atoms.push({ type: selectedAtomType, x, y });
  drawMolecule();
  }
});

const controls = document.getElementById('controls');
controls.addEventListener('click', (event) => {
  const target = event.target;
  console.log(target.tagName);
  if (target.tagName === 'LI') {
    selectedAtomType = target.id;
    console.log(target.id);
  }
});

function drawAtom(atom) {
  ctx.beginPath();
  ctx.arc(atom.x, atom.y, 10, 0, 2 * Math.PI);
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = '12px Arial';
  ctx.fillText(atom.type, atom.x, atom.y);
}

function drawMolecule() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  atoms.forEach(drawAtom);
}

drawMolecule();
