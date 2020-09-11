(function () {
  const geoLocation = document.getElementById("id1");

  document.getElementById("appName_btn").addEventListener("click", () => {
    const browserName = "Browser Name: " + navigator.appName;
    document.getElementById("id2").innerHTML = browserName;
  });

  document.getElementById("coordinates_btn").addEventListener("click", () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      geoLocation.innerHTML = "Geolocation is not supported by this browser.";
    }
  });

  document.getElementById("paste_btn").addEventListener("click", () => {
    let paste_promise = navigator.clipboard.readText();
    paste_promise
      .then((text) => {
        document.getElementById("paste_txt").innerHTML = text;
      })
      .catch((err) => {
        console.log(err);
      });
  });

  function showPosition(position) {
    geoLocation.innerHTML =
      "Latitude: " +
      position.coords.latitude +
      "<br>Longitude: " +
      position.coords.longitude;
  }
  function failOrSuccess(number) {
    return new Promise((resolve, reject) => {
      let num = 38;
      if (38 == number) {
        resolve("sucess");
      } else {
        reject("failed");
      }
    });
  }

  document.getElementById("sub_btn").addEventListener("click", () => {
    let number = document.getElementById("numInput").value;
    getResult(number);
  });

  async function getResult(number) {
    try {
      let result = await failOrSuccess(number);
      document.getElementById("result").innerHTML = result;
    } catch (err) {
      document.getElementById("result").innerHTML = err;
    }
  }
  document.getElementById("sub_then_btn").addEventListener("click", () => {
    let number = document.getElementById("numInput").value;
    failOrSuccess(number)
      .then((message) => {
        document.getElementById("result").innerHTML =
          "this is in the then " + message;
      })
      .catch((message) => {
        document.getElementById("result").innerHTML =
          "this is in the catch" + message;
      });
  });
})();
