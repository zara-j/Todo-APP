import type { Category } from "../App";

interface ITaskProps {
  task: string;
  setTask: (task: string) => void;
  category: Category;
  setCategory: (category: Category) => void;
  addTaskHandler: () => void;
}

const Tasks = (props: ITaskProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      props.addTaskHandler();
    }
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
     props.addTaskHandler();
  }
  return (
    <>
      <input
        type="text"
        name="task"
        value={props.task}
        onChange={(e) => props.setTask(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Add a new task inside All category"
        className="lg:w-64 w-46 input input-info bg-gray-100 mx-1"
      />
      <select
        value={props.category}
        onChange={(e) => props.setCategory(e.target.value as Category)}
        className="select w-20 select-info bg-gray-100 mx-1"
      >
        <option value="Uncategorized">Uncategorized</option>
        <option value="Groceries">Groceries</option>
        <option value="College">College</option>
        <option value="Payments">Payments</option>
      </select>
      <button 
      className="mx-1 btn btn-outline btn-info"
      onClick={handleClick}
      >Add</button>
    </>
  );
};

export default Tasks;
