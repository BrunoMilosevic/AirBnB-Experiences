import React from 'react'
import Navbar from './assets/Navbar'
import Cards from './assets/Cards'
import MainContent from './assets/MainContent'
import data from "./data.jsx";

function App() {
  const events = data.map((data)=>{
    return <MainContent
    key={data.id}
    {...data}/>
  })
  return (
    <>
      <Navbar/>
      <Cards/>
      <section className='cards-list'>
      {events}
      </section>
    </>
  )
}

export default App
