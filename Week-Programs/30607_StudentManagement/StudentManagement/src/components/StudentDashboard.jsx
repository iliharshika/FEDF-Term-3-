import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import StudentDetails from "./StudentDetails";

function StudentDashboard() {
  const [students, setStudents] = useState([
    "Harshika",
    "Rahul",
    "Priya",
  ]);

  const [newStudent, setNewStudent] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    document.title = `Students: ${students.length}`;
  }, [students]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const addStudent = () => {
    if (newStudent.trim() === "") return;

    setStudents([...students, newStudent]);
    setNewStudent("");
  };

  const deleteStudent = useCallback((studentName) => {
    setStudents((prevStudents) =>
      prevStudents.filter(
        (student) => student !== studentName
      )
    );
  }, []);

  const totalStudents = useMemo(() => {
    return students.length;
  }, [students]);

  const totalCharacters = useMemo(() => {
    return students.reduce(
      (sum, student) => sum + student.length,
      0
    );
  }, [students]);

  return (
    <div>
      <h1>Student Management Dashboard</h1>

      <input
        ref={inputRef}
        type="text"
        value={newStudent}
        placeholder="Enter student name"
        onChange={(e) =>
          setNewStudent(e.target.value)
        }
      />

      <button onClick={addStudent}>
        Add Student
      </button>

      <button
        onClick={() => inputRef.current.focus()}
      >
        Focus Input
      </button>

      <h3>Total Students: {totalStudents}</h3>
      <h3>
        Total Characters: {totalCharacters}
      </h3>

      <ul>
        {students.map((student) => (
          <StudentDetails
            key={student}
            student={student}
            onDelete={deleteStudent}
          />
        ))}
      </ul>
    </div>
  );
}

export default StudentDashboard;