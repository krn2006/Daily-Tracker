import React, { useEffect, useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("dailyTasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [taskInput, setTaskInput] = useState("");

  useEffect(() => {
    localStorage.setItem("dailyTasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!taskInput.trim()) return;

    setTasks([
      {
        id: Date.now(),
        text: taskInput,
        completed: false,
      },
      ...tasks,
    ]);

    setTaskInput("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f5f0e8",
      padding: "40px",
      fontFamily: "Arial"
    }}>
      <div style={{
        maxWidth: "700px",
        margin: "auto",
        background: "white",
        padding: "30px",
        borderRadius: "20px"
      }}>
        <h1>Daily Activity Tracker</h1>

        <div style={{display:"flex", gap:"10px", marginBottom:"20px"}}>
          <input
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="Add task..."
            style={{
              flex:1,
              padding:"12px",
              borderRadius:"10px",
              border:"1px solid #ccc"
            }}
          />

          <button onClick={addTask} style={{
            padding:"12px 20px",
            borderRadius:"10px",
            border:"none",
            background:"black",
            color:"white"
          }}>
            Add
          </button>
        </div>

        {tasks.map((task) => (
          <div key={task.id} style={{
            display:"flex",
            alignItems:"center",
            gap:"10px",
            padding:"12px",
            marginBottom:"10px",
            background:"#f3f3f3",
            borderRadius:"12px"
          }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />

            <p style={{
              textDecoration: task.completed ? "line-through" : "none"
            }}>
              {task.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
