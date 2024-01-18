let Counter = 0;

function increase() {
    Counter++;
    document.getElementById("Counter").innerHTML = Counter
    if (Counter > 0) {
        document.getElementById("Counter").style.color = "Yellow"

    }
    if (Counter == 0) {
        document.getElementById("Counter").style.color = "White"
    }



}
function decrease() {
    Counter--;
    document.getElementById("Counter").innerHTML = Counter;

    if (Counter < 0) {
        document.getElementById("Counter").style.color = "Red"
    }
}

function reset() {
    Counter = 0;
    document.getElementById("Counter").innerHTML = Counter;
    document.getElementById("Counter").style.color = "White"
    if (Counter = 0) {
        document.getElementById("Counter").style.color = "White"
    }

}
