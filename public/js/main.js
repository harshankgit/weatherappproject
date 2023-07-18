const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");

const city_name = document.getElementById("city_name");

const temp_real = document.getElementById("temp_real");
const temp_status = document.getElementById("tem_status");

const data_hide = document.querySelector(".middle_layer");

const getInfo = async (event) => {
  event.preventDefault();

  let cityval = cityName.value;

  if (cityval === "") {
    city_name.innerHTML = `plz write the name before search`;
    data_hide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=327aea2824e27c69a47f0ccede501101`;

      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];

      city_name.innerHTML = `${arrData[0].name},${arrData[0].sys.country}`;
      temp_real.innerHTML = arrData[0].main.temp;

      const tempMood = arrData[0].weather[0].main;
      if (tempMood == "Clear") {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color:#eccc68;'></i>";
      } else if (tempMood == "Clouds") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
      } else if (tempMood == "Rain") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color:#eccc68;'></i>";
      }
      data_hide.classList.remove("data_hide");
      cityval = "";
    } catch {
      data_hide.classList.add("data_hide");
    }
  }
};
submitBtn.addEventListener("click", getInfo);

setInterval(showTime, 1000);
function showTime() {
  let date = new Date();
  let odate = date.getDate();
  let day = date.getDay();
  let hour = date.getHours();
  let year = date.getFullYear();
  let minus = date.getMinutes();
  let sec = date.getSeconds();
  let mon = date.getMonth();
  let arr = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  let arr1 = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "june",
    "july",
    "aug",
    "sept",
    "oct",
    "nov",
    "dec",
  ];

  /* let wet = "pm"
             if (`hour < 11`) {
             wet = "Am"
             }
             else {
                 wet = "Pm"
            }*/
  var wet = hour >= 12 ? "pM" : "AM";

  hour = hour % 12 || 12;
  hour = hour < 10 ? "0" + hour : hour;
  minus = minus < 10 ? "0" + minus : minus;
  sec = sec < 10 ? "0" + sec : sec;

  let day1 = arr[day];
  mon = arr1[mon];

  dayt.innerHTML = day1 + " | " + odate + "-" + mon + "-" + year;
  today_data.innerHTML = hour + ":" + minus + ":" + sec + " " + wet;
}
showTime();
