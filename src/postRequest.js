const token = "433898df4a3e992b8411004109e4d574a90695e39e";

export function postSubmition(pin, ride_id) {
  const url = "http://fast-rider.herokuapp.com/api/v1/tickets";

  const data = new URLSearchParams();
  data.append("pin", pin);
  data.append("ride_id", ride_id);
  data.append("token", token);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
    body: data,
  };

  return fetch(url, options)
    .then((response) => {
      if (response.status === 400) {
        return response.json().then((error) => {
          switch (error.code) {
            case 4000:
              alert("Invalid park ticket PIN number");
              throw new Error("Invalid park ticket PIN number");
            case 4001:
              alert("Invalid park ride id");
              throw new Error("Invalid park ride id");
            case 4002:
              alert(error.message);
              throw new Error(error.message);
            case 4003:
              alert("No FastRider tickets are available at the moment");
              throw new Error("No FastRider tickets are available at the moment");
            default:
              throw new Error(`HTTP error! status: ${response.status}`);
          }
        });
      } else {
        return response.json();
      }
    })
    .then((json) => {
      console.log(json);
      return json;
    })
    .catch((error) => console.error(error));
}
