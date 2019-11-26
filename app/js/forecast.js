const apiForecast = () => {


    fetch(`https://api.openweathermap.org/data/2.5/forecast?id=2618425&&appid=68f82a388c4c0de995710dfc8a8ca667&units=metric`)
        .then(answer => answer.json())
        .then(response => {
            const days = ["Sunday", "Monday", "Tuesday", "Wensday", "Thursday", "Friday", "Saturday"]



            const list = response.list
            console.log(list)
            // list.forEach(element => {

            //     // let date = new Date(element.dt * 1000);
            //     // const wuhu = date.getDate()
            //     // console.log(wuhu)
            //     let date = new Date(element.dt * 1000);

            //     const day = date.getDay();
            //     console.log(day)

            // });

        })
}

apiForecast();