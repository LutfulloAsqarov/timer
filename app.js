const form = document.querySelector(".form");
const lesson = document.querySelector(".lesson");
const rest = document.querySelector(".rest");
const count = document.querySelector(".count");
const content = document.querySelector(".content");
const clock = document.querySelector(".clock");
const clockName = document.querySelector(".clock-name");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let lessonValue = lesson.value - 1;
    let restValue = rest.value - 1;
    let countValue = count.value;

    startTimer(lessonValue, restValue, countValue);
});

function startTimer(lessonValue, restValue, countValue) {
    let seconds = 3;
    let lessonMinutes = lessonValue;
    let restMinutes = restValue;
    const countdown = setInterval(() => {
        seconds--;
        if (lessonMinutes >= 0) {
            clock.innerHTML = `
            <div class="clock-name">Dars</div>
                    <span>${lessonMinutes
                        .toString()
                        .padStart(2, "0")} : ${seconds
                .toString()
                .padStart(2, "0")}</span>
                        `;
            if (seconds === 0) {
                lessonMinutes--;
                seconds = 3;
            }
        } else {
            clock.innerHTML = `
                    <div class="clock-name">Rest</div>
                    <span>${restMinutes.toString().padStart(2, "0")} : ${seconds
                .toString()
                .padStart(2, "0")}</span>
                `;
            if (seconds === 0) {
                if (restMinutes <= 0) {
                    clearInterval(countdown);
                    // startTimer();
                } else {
                    restMinutes--;
                    seconds = 3;
                }
            }
        }
    }, 1000);
}
