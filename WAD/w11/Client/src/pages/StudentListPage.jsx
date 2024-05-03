import { useState, useEffect } from "react";
import axios from "axios";

function StudentListPage() {
  const [students, setStudents] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const [specifiedStudent, setSpecifiedStudent] = useState("");
  const [removedStudent, setRemovedStudent] = useState("");
  const [message, setMessage] = useState("");
  const [studentsMoreThan25, setStudentsMoreThan25] = useState([]);
  const [studentsLessThan40, setStudentsLessThan40] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/displayAllStudentMarks"
      );
      setStudents(response.data.students);
      setTotalCount(response.data.count);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const renderTableData = () => {
    return students.map((student, index) => (
      <tr key={index}>
        <td>{student.Name}</td>
        <td>{student.Roll_No}</td>
        <td>{student.WAD_Marks}</td>
        <td>{student.CC_Marks}</td>
        <td>{student.DSBDA_Marks}</td>
        <td>{student.CNS_Marks}</td>
        <td>{student.AI_marks}</td>
      </tr>
    ));
  };

  const handleUpdateMarks = async () => {
    try {
      await axios.put(`http://localhost:3000/updateMarks/${specifiedStudent}`);
      setMessage("Marks updated successfully");
    } catch (error) {
      console.error("Error updating marks:", error);
      setMessage("Failed to update marks");
    }
  };

  const handleRemoveStudent = async () => {
    try {
      await axios.delete(
        `http://localhost:3000/removeStudent/${removedStudent}`
      );
      setMessage("Student removed successfully");
    } catch (error) {
      console.error("Error removing student:", error);
      setMessage("Failed to remove student");
    }
  };

  const handleGetStudentsMoreThan25 = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/displayStudentsWithMoreThan25MarksInAllSubjects"
      );
      if (response.data.length === 0) {
        setStudentsMoreThan25([{ Name: "No students found" }]);
        return;
      }
      setStudentsMoreThan25(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleGetStudentsLessThan40 = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/displayStudentsWithLessThan40InMathsAndScience"
      );
      if (response.data.length === 0) {
        setStudentsLessThan40([{ Name: "No students found" }]);
        return;
      }
      setStudentsLessThan40(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Student List</h1>
      <p>Total Count of Documents: {totalCount}</p>
      {message && <p>{message}</p>}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>WAD Marks</th>
            <th>CC Marks</th>
            <th>DSBDA Marks</th>
            <th>CNS Marks</th>
            <th>AI Marks</th>
          </tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </table>

      {/* Update Marks */}
      <div>
        <label>
          Specify student name to update marks:
          <input
            type="text"
            value={specifiedStudent}
            onChange={(e) => setSpecifiedStudent(e.target.value)}
          />
        </label>
        <button onClick={handleUpdateMarks}>Update Marks</button>
      </div>

      {/* Remove Student */}
      <div>
        <label>
          Specify student name to remove:
          <input
            type="text"
            value={removedStudent}
            onChange={(e) => setRemovedStudent(e.target.value)}
          />
        </label>
        <button onClick={handleRemoveStudent}>Remove Student</button>
      </div>

      {/* Students with more than 25 marks in all subjects */}
      <div>
        <h2>Students with more than 25 marks in all subjects:</h2>
        <button onClick={handleGetStudentsMoreThan25}>Get Students</button>
        <ul>
          {studentsMoreThan25.map((student, index) => (
            <li key={index}>{student.Name}</li>
          ))}
        </ul>
      </div>

      {/* Students with less than 40 marks in Maths and Science */}
      <div>
        <h2>Students with less than 40 marks in Maths and Science:</h2>
        <button onClick={handleGetStudentsLessThan40}>Get Students</button>
        <ul>
          {studentsLessThan40.map((student, index) => (
            <li key={index}>{student.Name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StudentListPage;
