const numberInput = document.getElementById("numberInput");
const checkButton = document.getElementById("checkButton");
const result = document.getElementById("result");

checkButton.addEventListener("click", function () {
    const b = Number(numberInput.value);
    const a = 5;

    if (numberInput.value.trim() === "") {
        result.textContent = "لطفاً یک عدد وارد کن.";
    } else if (b === a) {
        result.textContent = "true";
    } else if (b < a) {
        result.textContent = "واحد کمتر است: " + (a - b);
    } else {
        result.textContent = "واحد بیشتر است: " + (b - a);
    }
});
