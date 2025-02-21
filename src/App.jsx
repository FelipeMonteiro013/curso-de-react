import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";
import { v4 } from "uuid";
import { useEffect } from "react";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      const data = await response.json();

      setTasks(data);
    };

    // fetchTasks();
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onTaskDelete(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onTaskAdd(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500  flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title children="Gerenciador de Tarefas" />
        <AddTask onTaskAddSubmit={onTaskAdd} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTaskDelete={onTaskDelete}
        />
      </div>
    </div>
  );
}

export default App;
