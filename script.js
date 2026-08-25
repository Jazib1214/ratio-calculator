// Percentage to Ratio Converter
function convertPercentToRatio() {
    let pct = parseFloat(document.getElementById('percentVal').value);
    let result = document.getElementById('percentResult');

    if (isNaN(pct) || pct <= 0) {
        result.innerText = "Enter a valid percentage.";
        return;
    }

    let valA = pct;
    let valB = 100;
    
    // Scale up decimals to whole numbers before finding GCD
    let factor = 1;
    while (valA % 1 !== 0) {
        valA *= 10;
        valB *= 10;
    }

    let common = getGCD(valA, valB);
    result.innerText = `Ratio: ${valA / common} : ${valB / common}`;
}

// Ratio Sharing Tool
function calculateShare() {
    let total = parseFloat(document.getElementById('shareTotal').value);
    let a = parseFloat(document.getElementById('shareA').value);
    let b = parseFloat(document.getElementById('shareB').value);
    let result = document.getElementById('shareResult');

    if (isNaN(total) || isNaN(a) || isNaN(b) || (a + b) === 0) {
        result.innerText = "Enter valid total and ratio numbers.";
        return;
    }

    let partA = (total * a) / (a + b);
    let partB = (total * b) / (a + b);

    result.innerText = `Share A: ${partA.toFixed(2)} | Share B: ${partB.toFixed(2)}`;
}

// Map / Scale Calculator
function calculateScale() {
    let mapSize = parseFloat(document.getElementById('scaleMap').value);
    let scale = parseFloat(document.getElementById('scaleRatio').value);
    let result = document.getElementById('scaleResult');

    if (isNaN(mapSize) || isNaN(scale)) {
        result.innerText = "Enter valid numbers.";
        return;
    }

    let realSize = mapSize * scale;
    result.innerText = `Real Size: ${realSize}`;
}
