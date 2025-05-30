import { useState } from "react";
import Tasks from "./components/Tasks";
import Sidebar from "./components/Sidebar";
import TaskItem from "./components/TaskItem";
import Modal from "./components/Modal";

export type Category = "Uncategorized" | "Groceries" | "College" | "Payments";
export type CategoryFilter = Category | "All";
export type Itask = {
  id: number;
  task: string;
  category: Category;
}
const App = () => {
  const [task, setTask] = useState<string>("");
  const [todos, setTodos] = useState<Itask[]>([]);
  const [category, setCategory] = useState<Category>("Uncategorized");
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalMsg, setModalMsg] = useState<string>("")

  // function for adding task
  const addTaskHandler = () => {
    if (!task.trim()) {
      setShowModal(true)
      setModalMsg("Please enter a task before adding")
      return;
    }
    const newTask: Itask = {
      id: Date.now(),
      task,
      category,
    };
    setTodos([...todos, newTask]);
    setTask("");
    setCategory("Uncategorized");
  };

  // function for deleting task
  const deleteTaskHandler = (taskId: number) => {
    setTodos(todos.filter((t) => t.id !== taskId));
  };

  // function for filtering categories
  const filteredTasks =
    selectedCategory === "All"
      ? todos
      : todos.filter((t) => t.category === selectedCategory);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {showModal && (
      <Modal setShowModal={setShowModal} ModalMsg={modalMsg} />
      )}
      <div className="container flex flex-col lg:flex-row max-w-full lg:max-w-4xl h-screen lg:h-[600px] bg-white rounded-lg shadow-lg overflow-hidden">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <main className="w-full lg:w-3/4 pt-20 lg:pt-10 px-5">
          <h1 className="text-2xl font-bold mb-4">All Tasks</h1>
          <Tasks
            task={task}
            setTask={setTask}
            category={category}
            setCategory={setCategory}
            addTaskHandler={addTaskHandler}
          />
          <ul className="mt-4 space-y-2">
            {filteredTasks.map((t) => (
              <TaskItem t={t} deleteTaskHandler={deleteTaskHandler} />
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
};

export default App;
