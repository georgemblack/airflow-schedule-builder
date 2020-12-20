import { format, addMinutes } from "date-fns";

function ListItem(props) {
  const formattedStart = format(
    addMinutes(props.startDate, props.startDate.getTimezoneOffset()),
    "LLL d, HH:mm"
  );
  const formattedExecution = format(
    addMinutes(props.executionDate, props.executionDate.getTimezoneOffset()),
    "LLL d, HH:mm"
  );

  return (
    <div className="list-item">
      <p>
        DAG starts at <strong>{formattedStart} UTC</strong>, with execution
        date: <strong>{formattedExecution} UTC</strong>
      </p>
    </div>
  );
}

export default ListItem;
