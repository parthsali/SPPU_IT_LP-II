import { Routes, Route } from "react-router-dom";
import StudentListPage from "./pages/StudentListPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<StudentListPage />} />
      </Routes>
    </>
  );
};

export default App;
