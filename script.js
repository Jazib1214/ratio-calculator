// 1. Equivalent Ratio Solver (A : B = C : D)
function calculateRatio(changed) {
  let a = parseFloat(document.getElementById('a').value);
  let b = parseFloat(document.getElementById('b').value);
  let c = parseFloat(document.getElementById('c').value);
  let d = parseFloat(document.getElementById('d').value);

  if (changed === 'a' && !isNaN(a) && !isNaN(b) && !isNaN(c)) {
    document.getElementById('d').value = (b * c) / a;
  } else if (changed === 'b' && !isNaN(a) && !isNaN(c) && !isNaN(d)) {
    document.getElementById('a').value = (c * d) / b;
  } else if (changed === 'c' && !isNaN(a) && !isNaN(b) && !isNaN(d)) {
    document.getElementById('d').value = (a * d) / b;
    document.getElementById('a').value = (b * c) / d;
  } else if (changed === 'd' && !isNaN(a) && !isNaN(b) && !isNaN(c)) {
    document.getElementById('c').value = (a * d) / b;
  }
}

function clearFields() {
  document.getElementById('a').value = '';
  document.getElementById('b').value = '';
  document.getElementById('c').value = '';
  document.getElementById('d').value = '';
}

// 2. Aspect Ratio Presets
function applyPreset(w, h) {
  document.getElementById('a').value = w;
  document.getElementById('b').value = h;
  document.getElementById('c').value = '';
  document.getElementById('d').value = '';
}

// 3. Simplify a Ratio
function gcd(x, y) {
  return y === 0 ? x : gcd(y, x % y);
}

function simplifyRatio() {
  let a = parseInt(document.getElementById('simpA').value);
  let b = parseInt(document.getElementById('simpB').value);
  let res = document.getElementById('simpResult');

  if (isNaN(a) || isNaN(b) || b === 0) {
    res.innerText = "Please enter valid numbers.";
    return;
  }

  let divisor = gcd(a, b);
  let simA = a / divisor;
  let simB = b / divisor;
  res.innerText = "Simplified: " + simA + " : " + simB;
}

// 4. Percentage to Ratio
function convertPercentToRatio() {
  let p = parseFloat(document.getElementById('percentVal').value);
  let res = document.getElementById('percentResult');

  if (isNaN(p)) {
    res.innerText = "Please enter a valid percentage.";
    return;
  }

  let denom = 100;
  let num = p;
  let divisor = gcd(num, denom);
  res.innerText = "Ratio: " + (num / divisor) + " : " + (denom / divisor);
}

// 5. Ratio Sharing
function calculateShare() {
  let total = parseFloat(document.getElementById('shareTotal').value);
  let ra = parseFloat(document.getElementById('shareA').value);
  let rb = parseFloat(document.getElementById('shareB').value);
  let res = document.getElementById('shareResult');

  if (isNaN(total) || isNaN(ra) || isNaN(rb) || (ra + rb) === 0) {
    res.innerText = "Please fill in all fields correctly.";
    return;
  }

  let sumParts = ra + rb;
  let partAVal = (total * ra) / sumParts;
  let partBVal = (total * rb) / sumParts;
  res.innerText = "Shares: " + partAVal.toFixed(2) + " and " + partBVal.toFixed(2);
}

// 6. Map / Scale Calculator
function calculateScale() {
  let mapSize = parseFloat(document.getElementById('scaleMap').value);
  let scaleFactor = parseFloat(document.getElementById('scaleRatio').value);
  let res = document.getElementById('scaleResult');

  if (isNaN(mapSize) || isNaN(scaleFactor)) {
    res.innerText = "Please enter valid scale data.";
    return;
  }

  let realSize = mapSize * scaleFactor;
  res.innerText = "Real-World Size: " + realSize;
}

// 7. Fraction to Ratio
function convertFractionToRatio() {
  let num = parseInt(document.getElementById('fracNum').value);
  let den = parseInt(document.getElementById('fracDen').value);
  let res = document.getElementById('fracResult');

  if (isNaN(num) || isNaN(den) || den === 0) {
    res.innerText = "Please enter a valid fraction.";
    return;
  }

  let divisor = gcd(num, den);
  res.innerText = "Ratio: " + (num / divisor) + " : " + (den / divisor);
}

// 8. Ratio Comparator
function compareRatios() {
  let a = parseFloat(document.getElementById('compA').value);
  let b = parseFloat(document.getElementById('compB').value);
  let c = parseFloat(document.getElementById('compC').value);
  let d = parseFloat(document.getElementById('compD').value);
  let res = document.getElementById('compResult');

  if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || b === 0 || d === 0) {
    res.innerText = "Please enter all fields correctly.";
    return;
  }

  let val1 = a / b;
  let val2 = c / d;

  if (val1 > val2) {
    res.innerText = a + ":" + b + " is greater than " + c + ":" + d;
  } else if (val1 < val2) {
    res.innerText = a + ":" + b + " is less than " + c + ":" + d;
  } else {
    res.innerText = "Both ratios are equal!";
  }
}

// 9. Recipe Scaler
function scaleRecipe() {
  let oldServ = parseFloat(document.getElementById('origServ').value);
  let newServ = parseFloat(document.getElementById('newServ').value);
  let oldIng = parseFloat(document.getElementById('origIng').value);
  let res = document.getElementById('recipeResult');

  if (isNaN(oldServ) || isNaN(newServ) || isNaN(oldIng) || oldServ === 0) {
    res.innerText = "Please fill out all serving fields.";
    return;
  }

  let multiplier = newServ / oldServ;
  let newIng = oldIng * multiplier;
  res.innerText = "Scaled Ingredient Amount: " + newIng.toFixed(2);
}

// 10. 3-Part Ratio Solver
function solveThreePart() {
  let a = parseFloat(document.getElementById('partA').value);
  let b = parseFloat(document.getElementById('partB').value);
  let c = parseFloat(document.getElementById('partC').value);
  let targetA = parseFloat(document.getElementById('partTarget').value);
  let res = document.getElementById('triResult');

  if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(targetA) || a === 0) {
    res.innerText = "Please enter valid 3-part ratios.";
    return;
  }

  let multiplier = targetA / a;
  let newB = b * multiplier;
  let newC = c * multiplier;
  res.innerText = "New Ratio: " + targetA + " : " + newB.toFixed(2) + " : " + newC.toFixed(2);
}
