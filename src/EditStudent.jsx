import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditStudent = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [place, setPlace] = useState("");
  const { studentid } = useParams();
  const [validation, setValidation] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8080/students/${studentid}`)
      .then((res) => res.json())
      .then((data) => {
        setId(data.id);
        setName(data.name);
        setPhone(data.phone);
        setPlace(data.place);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const studentData = { id, name, place, phone };
    console.log(studentData);
    fetch(`http://localhost:8080/students/${studentid}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(studentData)
    })
      .then(() => {
        alert("Student Data updated successfully");
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="container">
      <h2>Edit Student Details</h2>
      <form onSubmit={handleSubmit}>
        <label>ID:</label><br />
        <input type="text" value={id} required onChange={(e) => setId(e.target.value)} onMouseDown={() => setValidation(true)} /><br />
        {id.length === 0 && validation && <span className='errmsg'>Enter your Id</span>}<br />
        
        <label>NAME:</label><br />
        <input type="text" value={name} required onChange={(e) => setName(e.target.value)} onMouseDown={() => setValidation(true)} /><br />
        {name.length === 0 && validation && <span className='errmsg'>Enter your name</span>}<br />
        
        <label>PHONE:</label><br />
        <input type="text" value={phone} required onChange={(e) => setPhone(e.target.value)} onMouseDown={() => setValidation(true)} /><br />
        {phone.length === 0 && validation && <span className='errmsg'>Enter your phone</span>}<br />
        
        <label>PLACE:</label><br />
        <input type="text" value={place} required onChange={(e) => setPlace(e.target.value)} onMouseDown={() => setValidation(true)} /><br />
        {place.length === 0 && validation && <span className='errmsg'>Enter your place</span>}<br />
        
        <button className='btn btn-success'>Update</button>
        <Link to="/" className='btn btn-danger'>Back</Link>
      </form>
    </div>
  );
};

export default EditStudent;

