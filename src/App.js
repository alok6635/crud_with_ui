import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateStudent from "./CreateStudent";
import EditStudent from "./EditStudent";
import StudentTables from "./StudentTables";
import ViewDetails from "./ViewDetails";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<StudentTables/>} />
        <Route path='/student/create' element={<CreateStudent/>}/>
        <Route path='/student/view/:studentid' element={<ViewDetails />} />
        <Route path='/student/edit/:studentid' element={<EditStudent />} />
      </Routes>
    </Router>
  );
}

export default App;
