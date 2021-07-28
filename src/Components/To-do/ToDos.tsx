import React, { useState } from "react";
import ToDo from "./ToDo";
import Button from "@material-ui/core/Button";
import "../Home/Home.css";

interface IToDo {
  work: string;
  note: string;
}

const ToDos = () => {
  const [toDo, setToDo] = useState<IToDo>({} as IToDo);
  const [toDoList, setToDoList] = useState<IToDo[]>([]);
  console.log("ToDo", toDo);

  const onClick = () => {
    setToDoList([...toDoList, toDo]);
    setToDo({
      work: "",
      note: "",
    });
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setToDo({ ...toDo, [e.target.name]: e.target.value });

  console.log("ToDoList", toDoList);

  const handleFinished = (note: string) => {
    const newToDoList = toDoList.filter((c) => c.note !== note);
    setToDoList(newToDoList);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>To-do Lists</h1>
      <div className="card">
        <input
          value={toDo.work}
          type="text"
          name="work"
          placeholder="Enter your to-do work"
          onChange={onChange}
          style={{
            padding: "1vw",
            marginLeft: "2%",
            borderRadius: "1vw",
            fontSize: "1.5vw",
          }}
        />
        <input
          value={toDo.note}
          type="text"
          name="note"
          placeholder="Enter important note"
          onChange={onChange}
          style={{
            padding: "1vw",
            marginLeft: "2%",
            borderRadius: "1vw",
            fontSize: "1.5vw",
          }}
        />

        <Button
          variant="contained"
          color="secondary"
          style={{
            padding: "1vw",
            marginLeft: "2%",
            borderRadius: "1vw",
            fontSize: "1.5vw",
            width: "30%",
          }}
          onClick={onClick}
        >
          Add
        </Button>
      </div>

      {toDoList.map((con) => (
        <ToDo
          key={con.work}
          work={con.work}
          note={con.note}
          handleFinished={handleFinished}
        />
      ))}
    </div>
  );
};

export default ToDos;
