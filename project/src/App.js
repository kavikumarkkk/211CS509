import React, { useState, useEffect } from "react";
import axios from "axios";

const TrainSchedule = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    axios({
      url: "http://20.244.56.144:80/train/trains",
      headers: {
        Authorization: localStorage.getItem("VxeuTv"),
      },
    })
      .then((response) => {
        setTrains(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleTrainClick = (train) => {
    // Redirect to the train details page
  };

  return (
    <div>
      <h1>Train Schedule</h1>
      <table>
        <thead>
          <tr>
            <th>Train Name</th>
            <th>Train Number</th>
            <th>Departure Time</th>
            <th>Seats Available</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {trains.map((train) => (
            <tr key={train.trainNumber}>
              <td>{train.trainName}</td>
              <td>{train.trainNumber}</td>
              <td>{train.departureTime}</td>
              <td>{train.seatsAvailable}</td>
              <td>{train.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrainSchedule;
