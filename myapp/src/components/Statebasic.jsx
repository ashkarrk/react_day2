import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasic = () => {
    var [val, setval] = useState("Ashkar")
    var [name, setname] = useState()
    
    const handleinput = (e) => {
        setval(e.target.value)
        console.log(e.target.value)
    }
    const submit = () => {
        setname(val)
    }
  return (
      <div>
          <Typography variant='h3' gutterBottom>WELCOME { name}</Typography>
          <TextField variant='outlined' label="enter your name"onChange={handleinput} /><br /><br />
          <Button variant='contained' onClick={submit}>SUBMIT</Button>
        
    </div>
  )
}

export default Statebasic