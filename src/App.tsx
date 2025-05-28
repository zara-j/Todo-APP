import { useState } from "react";
import Tasks from "./components/Tasks";

interface Itask {
  id: number;
  task: string;
  category: string;
}
const App = () => {
  const [task, setTask] = useState<string>("");
  const [todos, setTodos] = useState<Itask[]>([]);

  const handleAddTask = () => {
    const newTask: Itask = {
      id: Date.now(),
      task,
      category: "all",
    };
    setTodos([...todos, newTask]);
    setTask("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="container flex flex-col lg:flex-row max-w-full lg:max-w-4xl h-screen lg:h-[600px] bg-white rounded-lg shadow-lg overflow-hidden">
        {/* aside for larger screens */}
        <aside className="w-full lg:w-1/4 border-r hidden lg:block">
          <ul className="py-20 mx-auto px-5 flex flex-col gap-2 group-hover:bg-emerald-700">
            <li className="text-green-900 hover:bg-emerald-700">All</li>
            <li className=" hover:bg-emerald-700">Groceries</li>
            <li className=" hover:bg-emerald-700">College</li>
            <li className=" hover:bg-emerald-700">Payments</li>
          </ul>
        </aside>
        {/* aside for mobile devices */}
        <div className="drawer block lg:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label
              htmlFor="my-drawer"
              className="btn drawer-button absolute left-2 top-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>
          <div className="drawer-side z-20">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <div className="menu p-4 w-80 min-h-full bg-base-200 text-lg relative">
              <label
                htmlFor="my-drawer"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl"
              >
                &times;
              </label>
              <ul className="py-20 flex flex-col gap-2 px-5">
                <li className="text-green-900 hover:bg-emerald-700">All</li>
                <li className="hover:bg-emerald-700">Groceries</li>
                <li className="hover:bg-emerald-700">College</li>
                <li className="hover:bg-emerald-700">Payments</li>
              </ul>
            </div>
          </div>
        </div>

        <main className="w-full lg:w-3/4 pt-20 lg:pt-10 px-5">
          <h1 className="text-2xl font-bold mb-4">All Tasks</h1>
          <Tasks task={task} setTask={setTask} handleAddTask={handleAddTask} />
          <ul className="mt-4 space-y-2">
            {todos.map((t) => (
              <li
                key={t.id}
                className="flex justify-between items-center p-2 rounded"
              >
                <span>{t.task}</span>
                <span className="bg-red-500 text-white px-2 py-1 text-sm rounded">
                  {t.category}
                </span>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
};

export default App;
