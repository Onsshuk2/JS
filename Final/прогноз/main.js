$(document).ready(function () {
    const apiKey = "3d335e6c67de9d95add4e2d015b64d4d"; 
    const apiUrl = "https://api.openweathermap.org/data/2.5/";

    // Функція для визначення геопозиції
    function getGeolocationWeather() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                getWeatherByCoords(latitude, longitude);
            }, () => {
                getWeatherByCity("Київ"); // Місто за замовчуванням
            });
        } else {
            getWeatherByCity("Київ");
        }
    }

    // Запит погоди за координатами
    function getWeatherByCoords(lat, lon) {
        $.getJSON(`${apiUrl}weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=ua`, (data) => {
            renderTodayWeather(data);
        });
    }

    // Запит погоди за назвою міста
    function getWeatherByCity(city) {
        $.getJSON(`${apiUrl}weather?q=${city}&appid=${apiKey}&units=metric&lang=ua`)
            .done((data) => {
                renderTodayWeather(data);
            })
            .fail(() => {
                $("#content").html(`<p>Місто не знайдено. Спробуйте ще раз.</p>`);
            });
    }

    // Виведення блоку "Today"
    function renderTodayWeather(data) {
        const { name, main, weather, sys, wind } = data;
        const sunrise = new Date(sys.sunrise * 1000).toLocaleTimeString("ua-UA");
        const sunset = new Date(sys.sunset * 1000).toLocaleTimeString("ua-UA");
        const dayLength = new Date((sys.sunset - sys.sunrise) * 1000).toISOString().substr(11, 8);

        const html = `
            <div class="weather-block" >
                <h3>Поточна погода в ${name}</h3>
                <p><strong>Температура:</strong> ${main.temp}°C</p>
                <p><strong>Як відчувається:</strong> ${main.feels_like}°C</p>
                <p><strong>Опис:</strong> ${weather[0].description}</p>
                <p><strong>Схід сонця:</strong> ${sunrise}</p>
                <p><strong>Захід сонця:</strong> ${sunset}</p>
                <p><strong>Тривалість дня:</strong> ${dayLength}</p>
            </div>
        `;
        $("#content").html(html);
    }

    // Обробник для зміни вкладок
    $(".tab").click(function () {
        const tabId = $(this).attr("id");
    
        // Змінюємо активну вкладку
        $(".tab").removeClass("active");
        $(this).addClass("active");
    
        // Очищуємо контент
        $("#content").empty();
    
        if (tabId === "today-tab") {
            const city = $("#city-input").val() || "Київ"; 
            getWeatherByCity(city); // Виклик функції для отримання прогнозу на сьогодні
        }
    
        if (tabId === "forecast-tab") {
            const city = $("#city-input").val() || "Київ"; 
            getFiveDayForecast(city); // Виклик функції для отримання 5-денного прогнозу
        }
    });

    // Пошук міста
    $("#city-input").on("keypress", function (e) {
        if (e.which === 13) { // Enter
            const city = $(this).val();
            getWeatherByCity(city);
        }
    });

    // Завантаження геолокації при відкритті сторінки
    getGeolocationWeather();

    // Отримання 5-денного прогнозу для міста
    function getFiveDayForecast(city) {
        $.getJSON(`${apiUrl}forecast?q=${city}&appid=${apiKey}&units=metric&lang=ua`)
            .done((data) => {
                renderFiveDayForecast(data);
            })
            .fail(() => {
                $("#content").html(`<p>Не вдалося завантажити прогноз. Спробуйте ще раз.</p>`);
            });
    }

    // Відображення 5-денного прогнозу
    function renderFiveDayForecast(data) {
        const groupedByDay = groupForecastByDay(data.list);
    
        let html = `<div class="five-day-overview" >`;
        groupedByDay.forEach((day, index) => {
            const date = new Date(day[0].dt * 1000);
            const dayOfWeek = date.toLocaleDateString("ua-UA", { weekday: "long" });
            const formattedDate = date.toLocaleDateString("ua-UA");
            const icon = `https://openweathermap.org/img/wn/${day[0].weather[0].icon}@2x.png`;
            const temp = Math.round(day[0].main.temp);
            const description = day[0].weather[0].description;
    
            html += `
                <div class="day-block" data-day-index="${index}" >
                    <h3>${dayOfWeek}</h3>
                    <p>${formattedDate}</p>
                    <img src="${icon}" alt="${description}">
                    <p>${temp}°C</p>
                    <p>${description}</p>
                </div>
            `;
        });
        html += `</div>`;
        html += `<div id="hourly-details"></div>`;
    
        $("#content").html(html);
    
        // Додавання обробника кліку для вибору дня
        $(".day-block").click(function () {
            const dayIndex = $(this).data("day-index");
            renderHourlyForecast(groupedByDay[dayIndex]);
            $(".day-block").removeClass("active");
            $(this).addClass("active");
        });
    
        // Відображення прогнозу для першого дня за замовчуванням
        renderHourlyForecast(groupedByDay[0]);
        $(".day-block").first().addClass("active");
    }
    
    // Групування прогнозу за днями
    function groupForecastByDay(list) {
        const days = [];
        let currentDay = [];

        list.forEach((item, index) => {
            const currentDate = new Date(item.dt * 1000).getDate();
            const nextDate = index + 1 < list.length ? new Date(list[index + 1].dt * 1000).getDate() : null;

            currentDay.push(item);

            if (currentDate !== nextDate) {
                days.push(currentDay);
                currentDay = [];
            }
        });

        return days;
    }

    // Відображення погодинного прогнозу для обраного дня
    function renderHourlyForecast(hourlyData) {
        let html = `<h3>Погодинний прогноз:</h3>`;
        html += `<div class="hourly-forecast">`;

        hourlyData.forEach((item) => {
            const time = new Date(item.dt * 1000).toLocaleTimeString("ua-UA", { hour: "2-digit", minute: "2-digit" });
            const icon = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
            const temp = Math.round(item.main.temp);
            const feelsLike = Math.round(item.main.feels_like);
            const description = item.weather[0].description;
            const windSpeed = Math.round(item.wind.speed);
            const windDirection = item.wind.deg;

            html += `
                <div class="hour-block">
                    <p>${time}</p>
                    <img src="${icon}" alt="${description}">
                    <p>${temp}°C</p>
                    <p>Відчувається як: ${feelsLike}°C</p>
                    <p>${description}</p>
                    <p>Вітер: ${windSpeed} м/с, ${getWindDirection(windDirection)}</p>
                </div>
            `;
        });

        html += `</div>`;
        $("#hourly-details").html(html);
    }

    // Отримання напрямку вітру з градусів
    function getWindDirection(deg) {
        const directions = ["Пн", "Пн-Сх", "Сх", "Пд-Сх", "Пд", "Пд-Зх", "Зх", "Пн-Зх"];
        return directions[Math.round(deg / 45) % 8];
    }
});
