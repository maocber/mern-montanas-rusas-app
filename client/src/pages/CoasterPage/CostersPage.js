import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './CoasterPage.css'

const CoastersPage = () => {
    const [coasters, setCoasters] = useState([])

   useEffect(() => {
      fetch('http://localhost:5005/api/coasters')
            .then(res => res.json())
            .then(allCoasters => setCoasters(allCoasters))
   }, [])

   //  const loadCoasters = () => {
   //      fetch('http://localhost:5005/api/coasters')
   //          .then(res => res.json())
   //          .then(allCoasters => setCoasters(allCoasters))
   //  }

   //  loadCoasters();

  return (
    <div>
        <h1>Lista de Coasters</h1>
        <hr />
        {
            coasters
                .map ( coaster => {
                    return (
                       <Link to={`/detalles/${coaster._id}`}>
                           <article className='coaster-card'>
                              <img src={coaster.imageUrl} alt={coaster.title} />
                           </article>
                        </Link>
                    )
                })
        }
        <Link to='/'>Ir al inicio</Link>
    </div>
  )
}

export default CoastersPage