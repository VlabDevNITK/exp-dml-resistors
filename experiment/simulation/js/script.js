let simsubscreennum = 0;
let temp = 0;

function navNext() {
  for (temp = 0; temp < 2; temp++) {
    const canvasElement = document.getElementById("canvas" + temp);
    if (canvasElement) {
      canvasElement.style.visibility = "hidden";
    }
  }
  simsubscreennum += 1;
  const nextCanvasElement = document.getElementById("canvas" + simsubscreennum);
  if (nextCanvasElement) {
    nextCanvasElement.style.visibility = "visible";
  }
  document.getElementById("nextButton").style.visibility = "hidden";
}

//=============//
let simsubscreennum1 = 0;
let temp1 = 0;
function navNext1() {
  for (temp1 = 0; temp1 < 2; temp1++) {
    document.getElementById("canvas2" + temp1).style.visibility = "hidden";
  }
  simsubscreennum1 += 1;
  document.getElementById("canvas2" + simsubscreennum1).style.visibility =
    "visible";
  document.getElementById("nextButton1").style.visibility = "hidden";
}

// Add an event listener to the firstBand dropdown
// document.getElementById("firstBand").addEventListener("change", function () {
//   // Get the selected color
//   var selectedColor = this.value;

//   // Apply the selected color to the first band
//   var colorBand1 = document.querySelector(".colorBand1");

//   colorBand1.style.backgroundColor = selectedColor;

//   colorBand1.style.height = "58px";
//   colorBand1.style.width = "16px";
//   colorBand1.style.margin = "5px";
// });

function calculateResistance() {
  console.log("Button clicked!");
  const firstBandColor = document.getElementById("firstBand").value;
  console.log("Selected firstband color is " + firstBandColor);
  const secondBandColor = document.getElementById("secondBand").value;
  console.log("Selected second-band color is " + secondBandColor);
  const thirdBandColor = document.getElementById("thirdBand").value;
  console.log("Selected third-band color is " + thirdBandColor);
  const fourthBandColor = document.getElementById("fourthBand").value;
  console.log("Selected fourth-band color is " + fourthBandColor);

  // Show or hide the result element based on the condition
  var resistanceValue = document.getElementById("result");
  if (
    firstBandColor === "selectColor" ||
    secondBandColor === "selectColor" ||
    thirdBandColor === "selectColor" ||
    fourthBandColor === "selectColor"
  ) {
    // Hide the result element if "Please select the band colors" message is displayed
    resistanceValue.style.visibility = "hidden";
    resistanceValue.style.display = "none";
  } else {
    // Show the result element if no error
    resistanceValue.style.visibility = "visible";
    resistanceValue.style.display = "inline-block";
  }

  // Check if any of the options is "Select Color"
  if (
    firstBandColor === "selectColor" ||
    secondBandColor === "selectColor" ||
    thirdBandColor === "selectColor" ||
    fourthBandColor === "selectColor"
  ) {
    document.getElementById("errorMessage").innerText =
      "Please select the band colors";
    document.getElementById("errorMessage").style.color = "red";
    document.getElementById("errorMessage").style.margin = "-70px";
    document.getElementById("errorMessage").style.marginLeft = "5px";

    document.getElementById("result").innerText = ""; // Clear any previous result
    return; // Stop further execution
  }

  // Clear error message if all bands are selected
  document.getElementById("errorMessage").innerText = "";

  // Check if any of the options is not selected
  if (
    !firstBandColor ||
    !secondBandColor ||
    !thirdBandColor ||
    !fourthBandColor
  ) {
    document.getElementById("result").innerText =
      "Select the option for all the parameters to proceed.";
    document.getElementById("result").style.color = "red"; // Set color to red
    return; // Stop further execution
  }

  // Combine the values of the first and second bands into a two-digit number
  const firstTwoDigits =
    getBandValue(firstBandColor) * 10 + getBandValue(secondBandColor);

  // Perform calculations based on color codes and display the result
  const resistance = `Resistance: ${firstTwoDigits} x 10<sup> ${getMultiplier(
    thirdBandColor
  )}</sup> ohms`;
  // console.log(resistance);

  const tolerance = `Tolerance: ±${getTolerance(fourthBandColor)}%`;
  // console.log(tolerance);

  // document.getElementById('result').innerText = `${resistance}\n${tolerance}`;
  document.getElementById(
    "result"
  ).innerHTML = `<span style="font-family: Verdana; font-size: 16px; font-weight: bold;">${resistance}</span><br><span style="font-family: Verdana; font-size: 16px;">${tolerance}</span>`;
  // document.getElementById('result').innerHTML=`<span style="font-family: Verdana; font-size: 18px; font-weight: bold;">${resistance}</span><br><span style="font-family: Verdana; font-size: 18px;">${tolerance}</span>`;
}

function getBandValue(color) {
  // Map color to corresponding band value
  const bandValueMap = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    gray: 8,
    white: 9,
  };
  return bandValueMap[color];
}

function getMultiplier(color) {
  // Map color to corresponding multiplier value
  const multiplierMap = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    gray: 8,
    white: 9,
    gold: 0.1,
    silver: 0.01,
  };
  return multiplierMap[color];
}

function getTolerance(color) {
  // Map color to corresponding tolerance value
  const toleranceMap = {
    // 'black': 1,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    // 'blue': 0.25,
    // 'violet': 0.1,
    // 'gray': 0.05,
    // 'white': 10,
    gold: 5,
    silver: 10,
    nocolor: 20,
  };
  return toleranceMap[color];
}

function handleFirstBandChange() {
  var firstBandValue = document.getElementById("firstBand").value;

  // Enable/disable the second, third, and fourth bands based on the selected value of the first band
  document.getElementById("secondBand").disabled =
    firstBandValue === "selectColor";
  document.getElementById("thirdBand").disabled =
    firstBandValue === "selectColor";
  document.getElementById("fourthBand").disabled =
    firstBandValue === "selectColor";
}
