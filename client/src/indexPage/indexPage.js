import React from 'react'
import { Link } from 'react-router-dom'

const IndexPage = () => {
  return (
    <main>
        <h1>Home -- Bienvenido a la Coaster MERN</h1>
        <hr />
        <Link to='/galeria'>Ver Galeria</Link>
    </main>
  )
}

export default IndexPage