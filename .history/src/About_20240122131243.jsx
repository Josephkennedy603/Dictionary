import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    
    <div><Link style={{textDecoration:"none"}} to={"/"} >Home</Link> <span style={{color:"#0080ff"}}>About: </span>
    <p> In this app you can get the meaning and parts of speech of the entered word </p>
    <p> It's also provide the audio for the entered word by clicking the audio icon</p>
    </div>
  )
}

export default About