const time = document.querySelector("#time")
const day = document.querySelector("#day")

// let counter = 0;
// const dater = new Date();

// const test = {
//     year = dater.getFullYear(),
//     month = dater.getMonth(),
//     day = dater.getDay()
// };
// console.log(test.year)

// // for (let i = 0; i < 6; i++) {

// //     const tomorrow = new Date(dater)
// //     tomorrow.setDate(tomorrow.getDate() + counter)
// //     console.log(tomorrow)
// //     console.log(tomorrow.getUTCDate())
// //     counter++
// // }

const dateDay = () => {
    const date = new Date();

    const days = ["Sunday", "Monday", "Tuesday", "Wensday", "Thursday", "Friday", "Saturday"]
    const dateDays = date.getDay();

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