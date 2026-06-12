import Student from "./components/Student";

function App() {
  return (
    <div>
      <h1>Class Component Demo</h1>

      <Student
        name="Harshika"
        course="React JS"
      />

      <Student
        name="Santhvin"
        course="JavaScript"
      />
    </div>
  );
}

export default App;