import { useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {

  const [name, setname] = useState('')

  function send() {
    const data = {
      Name: name
    }

    axios.post('http://localhost:5000/crt', data)
      .then(alert('success'))
      .catch(err => console.log(err)
      )
  }

  return (
    <>
      <div className="form">
        <input type="text" name="" id=""
          onChange={(e) => { setname(e.target.value) }}
          placeholder='Name' /> <br /> <br />
        <button onClick={send}>Send Message</button>
      </div>
    </>
  )
}

export default App
