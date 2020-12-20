import { useState, useEffect } from "react";

import ListView from "./components/ListView";
import { getNextExecutions } from "./Schedule";

function App() {
  const [scheduleInterval, setScheduleInterval] = useState("10 10 * * *");
  const [errorMessage, setErrorMessage] = useState("");
  const [nextExecutions, setNextExecutions] = useState([]);

  useEffect(() => {
    try {
      setNextExecutions(getNextExecutions(scheduleInterval, 5));
      setErrorMessage("");
    } catch (err) {
      setErrorMessage(err);
    }
  }, [scheduleInterval]);

  return (
    <>
      <div className="form">
        <p>Schedule Interval:</p>
        <input
          type="text"
          value={scheduleInterval}
          placeholder="* * * * *"
          onChange={(event) => setScheduleInterval(event.target.value)}
        ></input>
        <p className="error">{errorMessage}</p>
      </div>
      <div className="list-view">
        <h2>Next 5 DAG runs:</h2>
        <ListView executions={nextExecutions} />
      </div>
    </>
  );
}

export default App;
