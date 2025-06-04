document.getElementById("addButton").addEventListener("click", () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  fetch(`/calculator/add?num1=${num1}&num2=${num2}`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("result").innerHTML = data.result;
    });
});

document.getElementById("subtractButton").addEventListener("click", () => {
  let num3 = document.getElementById("num3").value;
  let num4 = document.getElementById("num4").value;
  fetch(`/calculator/subtract?num3=${num3}&num4=${num4}`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("result2").innerHTML = data.result;
    });
});

document.getElementById("multiplyButton").addEventListener("click", () => {
  let num5 = document.getElementById("num5").value;
  let num6 = document.getElementById("num6").value;
  fetch(`/calculator/multiply?num5=${num5}&num6=${num6}`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("result3").innerHTML = data.result;
    });
});

document.getElementById("divideButton").addEventListener("click", () => {
  let num7 = document.getElementById("num7").value;
  let num8 = document.getElementById("num8").value;
  fetch(`/calculator/divide?num7=${num7}&num8=${num8}`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("result4").innerHTML = data.result;
    });
});
