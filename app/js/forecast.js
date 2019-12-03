const apiForecast = () => {

    const forecastIcons = document.querySelectorAll(".weatherIcon__item img")
    const forecastDegrees = document.querySelectorAll(".weatherIcon__item p")
    let currentDate = new Date();

    const days = ["Sunday", "Monday", "Tuesday", "Wensday", "Thursday", "Friday", "Saturday"]
    let iconCounter = 0;
    let degreeCounter = 0
    fetch(
            `https://api.openweathermap.org/data/2.5/forecast?id=2618425&&appid=68f82a388c4c0de995710dfc8a8ca667&units=metric`
        )
        .then(answer => answer.json())
        .then(response => {
            let forecastArray = [];

            const list = response.list;

            const monday = list.filter(f => {
                let date = new Date(f.dt * 1000);
                let dater = date.getDay()

                return days[dater] == "Monday"
            })

            const tuesday = list.filter(f => {
                let date = new Date(f.dt * 1000);
                let dater = date.getDay()

                return days[dater] == "Tuesday"
            })

            const wensday = list.filter(f => {
                let date = new Date(f.dt * 1000);
                let dater = date.getDay()

                return days[dater] == "Wensday"
            })
            const thursday = list.filter(f => {
                let date = new Date(f.dt * 1000);
                let dater = date.getDay()

                return days[dater] == "Thursday"
            })
            const friday = list.filter(f => {
                let date = new Date(f.dt * 1000);
                let dater = date.getDay()

                return days[dater] == "Friday"
            })
            const saturday = list.filter(f => {
                let date = new Date(f.dt * 1000);
                let dater = date.getDay()

                return days[dater] == "Saturday"
            })
            const sunday = list.filter(f => {
                let date = new Date(f.dt * 1000);
                let dater = date.getDay()

                return days[dater] == "Sunday"
            })
            forecastArray.push(monday, tuesday, wensday, thursday, friday, saturday, sunday)


            forecastIcons.forEach(icon => {
                if (forecastArray[iconCounter].length > 3) {
                    const weatherIcons = `/assets/images/${forecastArray[iconCounter][3].weather[0].main}.svg`
                    icon.src = weatherIcons

                }
                iconCounter++
            });

            forecastDegrees.forEach(degree => {
                if (forecastArray[degreeCounter].length > 3) {
                    const weatherDegree = forecastArray[degreeCounter][3].main.temp
                    degree.innerText = parseFloat(weatherDegree.toFixed(0)) + " °C "

                } else {
                    degree.innerText = "N/a"
                    degree.style.margin = "-20px 0 0 0px"
                    degree.style.fontSize = "2em"
                }
                degreeCounter++
            });


        })
        .catch(error => {
            console.log("Something Went Wrong");
            console.error(error);
        });
}


apiForecast();