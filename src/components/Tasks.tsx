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
    <div className="flex flex-col xl:flex-row gap-2">
      <input
        type="text"
        name="task"
        value={props.task}
        onChange={(e) => props.setTask(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Add a new task inside All category"
        className="w-full input input-info bg-gray-100"
      />
      <select
        value={props.category}
        onChange={(e) => props.setCategory(e.target.value as Category)}
        className="select w-full xl:w-20 select-info bg-gray-100"
      >
        <option value="Uncategorized">Uncategorized</option>
        <option value="Groceries">Groceries</option>
        <option value="College">College</option>
        <option value="Payments">Payments</option>
      </select>
      <button 
      className="btn btn-outline btn-info"
      onClick={handleClick}
      >Add</button>
    </div>
  );
};

export default Tasks;
