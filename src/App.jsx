import { useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {

  const [name, setname] = useState('')

  function send() {
    const data = {
      Name: name
    }

    axios.post('https://db-backend-mlt8.onrender.com/crt', data)
      .then(alert('success'))
    setname('')
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
