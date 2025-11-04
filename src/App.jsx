import React, { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const [data, setData] = useState({})

  useEffect(()=> {
    console.log("Fetching from:", window.location.origin + "/getmovies")
    // fetch("/getmovies")
    fetch("http://localhost:5000/getmovies")
    .then( res => res.json())
    .then(data => {
      console.log(data)
      setData(data)
    })
    .catch(error => console.error("Error:",error))
  }, [])

  return (
    <>

    </>
  )
}
