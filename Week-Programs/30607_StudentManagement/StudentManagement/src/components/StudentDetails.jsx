import React from "react";

function StudentDetails({ student, onDelete }) {
  return (
    <li>
      {student}
      <button
        onClick={() => onDelete(student)}
        style={{ marginLeft: "10px" }}
      >
        Delete
      </button>
    </li>
  );
}

export default React.memo(StudentDetails);