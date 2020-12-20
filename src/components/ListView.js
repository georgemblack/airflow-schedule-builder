import ListItem from "./ListItem";

function ListView(props) {
  return (
    <div className="list-items">
      {props.executions.map((execution, key) => (
        <ListItem
          key={key}
          startDate={execution.startDate}
          executionDate={execution.executionDate}
        />
      ))}
    </div>
  );
}

export default ListView;
