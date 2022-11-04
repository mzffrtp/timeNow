let selectCountryButton = document.getElementById("selectCountry");

let clockContainer = document.getElementById("clockContainer");
let clockShape = document.getElementById("clockShape");

let clearCountryButton = document.getElementById("clearCountry");

selectCountryButton.addEventListener("click", function () {
    let showClock = document.createElement("div");
    showClock.classList.add("clockContainerStyling");
    clockContainer.appendChild(showClock);
    showClock.innerHTML = ("` " + country.value + " ´");

    if (country.value == "sweden") {
        showClock.insertAdjacentHTML("beforebegin", "<p>Exact time in</p>");
        showClock.insertAdjacentHTML("afterend", "<p>is: </p>");
        
        var getSwedishTime = function () {
            document.getElementById("klockan").innerHTML = new Date().toLocaleString("en-US", { timeZone: "Europe/Berlin", timeStyle: "medium", hourCycle: "h24" });
        }
        getSwedishTime();
        setInterval(getSwedishTime, 1000);
               
    } else if (country.value == "america") {
        showClock.insertAdjacentHTML("beforebegin", "<p>Exact time in</p>");
        showClock.insertAdjacentHTML("afterend", "<p>is: </p>");
        
        var getAmericanTime = function () {
            document.getElementById("timeusa").innerHTML = new Date().toLocaleString("en-US", { timeZone: "America/New_york", timeStyle: "medium", hourCycle: "h24" });
        }

        getAmericanTime();
        setInterval(getAmericanTime, 1000);

    } else {
        showClock.insertAdjacentHTML("beforebegin", "<p>Exact time in</p>");
        showClock.insertAdjacentHTML("afterend", "<p>is: </p>");

        var getJapanTime = function () {
            document.getElementById("japan").innerHTML = new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo", timeStyle: "medium", hourCycle: "h24" });
        }
        
        setInterval(getJapanTime, 1000);
        getJapanTime();
    }

    country.value = " ";

    showClock.addEventListener("click", function () {
        clockContainer.style.display = "none";
        clockShape.style.display = "none";
    })

    clearCountryButton.addEventListener("click", function(){
        clockContainer.style.display = "none";
        clockShape.style.display = "none";
    })
})

