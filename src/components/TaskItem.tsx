import type { Itask } from "../App";

interface ITaskProps {
  t: Itask;
  deleteTaskHandler: (id: number) => void;
}
const TaskItem = (props: ITaskProps) => {
  const categoryColors = {
    Uncategorized: "bg-gray-500",
    Groceries: "bg-green-500",
    College: "bg-blue-500",
    Payments: "bg-purple-500",
  };
  return (
    <li
      key={props.t.id}
      className="flex justify-between items-center p-2 rounded"
    >
      <span>{props.t.task}</span>
      <div className="flex justify-center items-center gap-4">
      <span
        className={`${
          categoryColors[props.t.category]
        } text-white w-28 lg:w-36 py-1 text-sm rounded text-center`}
      >
        {props.t.category}
      </span>
      <button
        onClick={() => props.deleteTaskHandler(props.t.id)}
        className="w-4 h-4"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="hover:opacity-50">
          <path
            fill="#d72323"
            d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"
          />
        </svg>
      </button>
      </div>
    </li>
  );
};

export default TaskItem;
