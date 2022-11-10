import { useState, useEffect } from "react";

export function Timer() {
  const [days, setDays] = useState(1);
  const [hours, setHours] = useState(1);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(9);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            if (days === 0) {
              clearInterval(myInterval);
            }
            else {
              setDays(days - 1);
              setHours(23);
              setMinutes(59);
              setSeconds(59);
            }
          }
          else {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          }
        }
        else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }

    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  const styles = { display: "flex", justifyContent: "center", gap: "50px", listStyle: "none", margin: "0", padding: "0", color: "red" };
  const styles2 = { margin: "0", color: "red" };

  return (
    <div>
      {days === 0 && hours === 0 && minutes === 0 && seconds === 0
        ? <h1 style={styles2}>Hello All!</h1>
        : <ul style={styles}> <li> <h1 style={styles2}> {days < 10 ? `0${days}` : days} </h1> <br /> Days </li> <li> <h1 style={styles2}> {hours < 10 ? `0${hours}` : hours} </h1> <br /> Hours </li> <li> <h1 style={styles2}> {minutes < 10 ? `0${minutes}` : minutes} </h1> <br /> Minutes </li> <li> <h1 style={styles2}> {seconds < 10 ? `0${seconds}` : seconds} </h1> <br /> Seconds </li> </ul>}
    </div>
  );
}
