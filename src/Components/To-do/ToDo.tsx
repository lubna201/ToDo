import React from "react";
import "../Home/Home.css";
import Button from "@material-ui/core/Button";

interface IProps {
  work: string;
  note?: string;
  handleFinished: (note: string) => void;
}

const ToDo = ({ work, note = "N/A", handleFinished }: IProps) => {
  return (
    <div className="card1">
      <h2>
        <strong>Work: </strong> {work}
      </h2>
      <h2>
        <strong>Important Note: </strong> {note}
      </h2>
      <Button
        variant="contained"
        color="secondary"
        style={{
          padding: "1vw",
          borderRadius: "1vw",
          fontSize: "1.3vw",
        }}
        onClick={() => handleFinished(note)}
      >
        Finished
      </Button>
    </div>
  );
};

export default ToDo;
