
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
        "Accept": "application/json"
        },
        body: data
    };
    
    fetch(url, options)
        .then(response => {
        if (!response.ok) {
            if (response.status === 401) {
                alert("Invalid or expired user token");
                throw new Error("Invalid or expired user token");
                } else if (response.status === 503) {
                    alert("Cannot assign FastRider tickets outside of working hours");
                throw new Error("Cannot assign FastRider tickets outside of working hours");
                }else if (response.status === 4000) {
                    alert("Invalid park ticket PIN number");
                throw new Error("Invalid park ticket PIN number");
                }else if (response.status === 4001) {
                    alert("Invalid park ride id");
                throw new Error("Invalid park ride id");
                }else if (response.status === 4002) {
                    alert("Only one FastRider ticket can be held at any given time");
                throw new Error("Only one FastRider ticket can be held at any given time");
                }else if (response.status === 4003) {
                    alert("No FastRider tickets are available at the momen");
                throw new Error("No FastRider tickets are available at the momen");
                } else {
                throw new Error(`HTTP error! status: ${response.status}`);
                }
        }
        return response.json();
        })
        .then(json => console.log(json))
        .catch(error => console.error(error));

}