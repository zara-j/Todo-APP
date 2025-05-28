interface ITaskProps {
  task: string;
  setTask: (task: string) => void;
  handleAddTask: () => void;
}

const Tasks = (props: ITaskProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      props.handleAddTask();
    }
  };
  return (
    <input
      type="text"
      name="task"
      value={props.task}
      onChange={(e) => props.setTask(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder="Add a new task inside All category"
      className="input input-info bg-gray-100"
    />
  );
};

export default Tasks;
