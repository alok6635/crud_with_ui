import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const StudentTables = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/students')
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.log(err.message));
  }, []);

  const viewDetails = (id) => {
    navigate("/student/view/" + id)
  }

  const editDetails = (id) => {
    navigate("/student/edit/" + id)
  }

  const removeDetails = (id) => {
    if(window.confirm("Are you want to Delete? ")){
      fetch(`http://localhost:8080/students/${id}`, {
        method: 'DELETE',
      })
        .then(() => {
          alert("Remove Data Successfully");
          window.location.reload();
        })
        .catch((err) => console.log(err.message));
    }
  }

  return (
    <div className='container'>
      <h2>Students Records</h2>
      <Link to="/student/create" className='btn btn-secondary'>Create</Link>
      <table>
        <thead>
          <tr>
            <th>SL.NO</th>
            <th>NAME</th>
            <th>PLACE</th>
            <th>PHONE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {
            students && students.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.place}</td>
                <td>{item.phone}</td>
                <td>
                  <button to="student/view" className='btn btn-primary' onClick={() => viewDetails(item.id)}>Read</button>
                  <button to="student/edit" className='btn btn-success' onClick={() => editDetails(item.id)}>Update</button>
                  <button to="student/delete" className='btn btn-danger' onClick={() => removeDetails(item.id)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default StudentTables;
