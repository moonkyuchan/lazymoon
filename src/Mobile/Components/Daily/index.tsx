import { ReactElement, useEffect, useState } from "react";
import axios from "axios";

export default function Daily(): ReactElement {
  const [todo, setTodo] = useState<string>("");
  const [todoData, setTodoData] = useState({});
  console.log(todoData);
  const token = localStorage.getItem("Auth");

  useEffect(() => {
    async function getTodo() {
      try {
        const res = await axios
          .get("https://www.pre-onboarding-selection-task.shop/todos", {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) => console.log(res));
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
    getTodo();
  }, [todoData]);

  const handleTodo = (e) => {
    const {
      target: { value },
    } = e;
    setTodo(value);
  };

  const onSubmitTodo = () => {
    try {
      let res = axios
        .post(
          "https://www.pre-onboarding-selection-task.shop/todos",
          {
            todo,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((data) => {
          setTodoData(data), setTodo("");
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ paddingTop: "50px" }}>
      <div>
        <input
          type="text"
          value={todo}
          placeholder="입력하세요"
          onChange={(e) => handleTodo(e)}
          data-testid="new-todo-input"
        />
        <button data-testid="new-todo-add-button" onClick={onSubmitTodo}>
          제출
        </button>
      </div>
      <li>
        <label>
          <input type={"checkbox"} />
        </label>
      </li>
    </div>
  );
}
