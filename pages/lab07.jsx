import React from "react";
// import { MainLayout } from "../layouts/MainLayouts";
import { IconMoon, IconSunHigh } from "@tabler/icons";
import { useEffect, useState } from "react";
import Todo from "../components/Todo";
import { ThemeContext } from "../contexts/ThemeContext";
import Navbar from "../components/Navbar";

export default function todolist() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  const OnKeyUpHand = (e) => {
    if (e.key !== "Enter") return;
    if (e.target.value === "") return alert("Todo cannot be empty");
    const newTodos = [{ title: todoText, completed: false }, ...todos];
    setTodos(newTodos);
    console.log(todos);
    setTodoText("");
  };

  const themes = {
    light: {
      name: "light",
      background: "white",
      foreground: "black",
    },
    dark: {
      name: "dark",
      background: "black",
      foreground: "white",
    },
  };
  const [selTheme, setSelTheme] = useState(themes.light);
  const toggleTheme = () => {
    if (selTheme.name === "light") setSelTheme(themes.dark);
    else setSelTheme(themes.light);
  };

  useEffect(() => {
    const todoStr = localStorage.getItem("react-todos");
    if (todoStr === null) setTodoText([]);
    else setTodos(JSON.parse(todoStr));
  }, []);

  const [isFirstRender, setIsFirstRender] = useState(true);
  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    saveTodos();
  }, [todos]);

  const saveTodos = () => {
    const todosStr = JSON.stringify(todos);
    localStorage.setItem("react-todos", todosStr);
  };

  const deleteTodo = (idx) => {
    todos.splice(idx, 1);
    const newTodos = [...todos];
    setTodos(newTodos);
  };

  const markTodo = (idx) => {
    todos[idx].completed = !todos[idx].completed;
    setTodos([...todos]);
  };

  const moveUp = (idx) => {
    if (idx === 0) return 0;
    const title = todos[idx].title;
    const completed = todos[idx].completed;

    todos[idx].title = todos[idx - 1].title;
    todos[idx].completed = todos[idx - 1].completed;

    todos[idx - 1].title = title;
    todos[idx - 1].completed = completed;
    setTodos([...todos]);
  };

  const moveDown = (idx) => {
    if (idx === todos.length - 1) return 0;
    const title = todos[idx].title;
    const completed = todos[idx].completed;

    todos[idx].title = todos[idx + 1].title;
    todos[idx].completed = todos[idx + 1].completed;

    todos[idx + 1].title = title;
    todos[idx + 1].completed = completed;
    setTodos([...todos]);
  };

  return (
    <div>
      <Navbar />
      <div style={{ backgroundColor: selTheme.background, minHeight: "100vh" }}>
        {/* Entire App container (required for centering) */}
        <div
          style={{ maxWidth: "700px", color: selTheme.foreground }}
          className="mx-auto"
        >
          {/* App header */}
          <p className="display-4 text-center fst-italic m-4">
            Minimal Todo List <span className="fst-normal">☑️</span>
          </p>
          {/* Input */}
          <div className="d-flex align-items-center gap-2">
            <input
              className="form-control mb-1 fs-4"
              placeholder="insert todo here..."
              onChange={(e) => setTodoText(e.target.value)}
              value={todoText}
              onKeyUp={OnKeyUpHand}
            />
            <button className="btn btn-dark" onClick={toggleTheme}>
              {selTheme.name === "light" && <IconSunHigh />}
              {selTheme.name === "dark" && <IconMoon />}
            </button>
          </div>
          {/* Todos */}
          <ThemeContext.Provider value={{ selTheme, toggleTheme }}>
            {todos.map((todo, id) => (
              <Todo
                key={id}
                title={todo.title}
                completed={todo.completed}
                onmark={() => markTodo(id)}
                delete={() => deleteTodo(id)}
                moveUps={() => moveUp(id)}
                moveDowns={() => moveDown(id)}
              />
            ))}
          </ThemeContext.Provider>
          {/* summary section */}
          <p className="text-center fs-4">
            <span className="text-primary">All ({todos.length}) </span>
            <span className="text-warning">
              Pending ({todos.filter((x) => x.completed === false).length}){" "}
            </span>
            <span className="text-success">
              Completed ({todos.filter((x) => x.completed === true).length})
            </span>
          </p>
          {/* Made by section */}
          <p className="text-center mt-3 text-muted fst-italic">
            made by Sirawich Pintana 640612099
          </p>
        </div>
      </div>
    </div>
  );
}
