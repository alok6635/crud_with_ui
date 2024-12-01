import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const CreateStudent = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [place, setPlace] = useState("");
  const [validation,setValidation]= useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const studentData = { id, name, phone, place }
    fetch('http://localhost:8080/students', {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(studentData)
    })
      .then((res) => {
        alert("student data save successfully");
        navigate('/')
      })
      .catch((err) => console.log(err.message))
  }
  
  return (
    <>
      <div className="container">
        <h2>Add New students</h2>
        <form onSubmit={handleSubmit}>
          <label>ID:</label><br />
          <input type="text" value={id} required onChange={(e) => setId(e.target.value)} onMouseDown={()=>setValidation(true)}/><br/>
          {id.length===0 && validation && <span className='errmsg'>Enter your Id</span>}<br/>
          <label>NAME:</label><br />
          <input type="text" value={name} required onChange={(e) => setName(e.target.value)} onMouseDown={()=>setValidation(true)}/><br/>
          {name.length===0 && validation && <span className='errmsg'>Enter your name</span>}<br />
          <label>PHONE:</label><br />
          <input type="text" value={phone} required onChange={(e) => setPhone(e.target.value)} onMouseDown={()=>setValidation(true)}/><br/>
          {phone.length===0 && validation && <span className='errmsg'>Enter your phone</span>}<br />
          <label>PLACE:</label><br />
          <input type="text" value={place} required onChange={(e) => setPlace(e.target.value)} onMouseDown={()=>setValidation(true)}/><br/>
          {place.length===0 && validation && <span className='errmsg'>Enter your place</span>}<br />
          <button className='btn btn-success'>Save</button>
          <Link to="/" className='btn btn-danger'>Back</Link>
        </form>
      </div>
    </>
  )
}
export default CreateStudent;
