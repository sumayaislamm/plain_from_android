const dateElement = document.getElementById("currentDate");

if (dateElement) {

const today = new Date();

const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
};

dateElement.textContent =
    today.toLocaleDateString("en-US", options);

}