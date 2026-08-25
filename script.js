function calculateRatio(changedInput) {
  let a = parseFloat(document.getElementById('a').value);
  let b = parseFloat(document.getElementById('b').value);
  let c = parseFloat(document.getElementById('c').value);
  let d = parseFloat(document.getElementById('d').value);

  // Solves A : B = C : D using cross-multiplication (A * D = B * C)
  if (changedInput === 'a' || changedInput === 'b' || changedInput === 'c') {
    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
      document.getElementById('d').value = ((b * c) / a).toFixed(2);
    }
  } else if (changedInput === 'd') {
    if (!isNaN(b) && !isNaN(c) && !isNaN(d)) {
      document.getElementById('a').value = ((b * c) / d).toFixed(2);
    }
  }
}

function clearFields() {
  document.getElementById('a').value = '';
  document.getElementById('b').value = '';
  document.getElementById('c').value = '';
  document.getElementById('d').value = '';
}
