const time = document.querySelector("#time")
const day = document.querySelector("#day")
const dateList = document.querySelectorAll(".dateList__item")
const dayList = document.querySelectorAll(".dayList__item")
let counter = 0;
const dater = new Date();

// const test = {
//     year = dater.getFullYear(),
//     month = dater.getMonth(),
//     day = dater.getDay()
// };
// console.log(test.year)



const dateDay = () => {
    const date = new Date();

    const days = ["Sunday", "Monday", "Tuesday", "Wensday", "Thursday", "Friday", "Saturday"]
    const shortDays = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"]
    const dateDays = date.getDay();

    for (let i = 0; i < 7; i++) {
        const weekDates = new Date()
        weekDates.setDate(weekDates.getDate() + counter)

        dateList[counter].innerText = weekDates.getUTCDate();
        // dayList[counter].innerText = shortDays[weekDates.getDay()]
        counter++
    }
    day.innerText = days[dateDays]
}


const dateTime = () => {
    const date = new Date();
    const hour = date.getHours()
    const min = date.getMinutes()

    if (min < 10) {
        time.innerText = `${hour}` + ":" + "0" + `${min}`
    } else {
        time.innerText = `${hour}` + ":" + `${min}`
    }

}


dateDay();
setInterval(dateDay, 60000);

dateTime();
setInterval(dateTime, 1000);