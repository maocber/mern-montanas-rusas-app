import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import './CoasterDetails.css'

const CoasterDetails = () => {
    // const [isLoading, setIsLoading] = useState(true)
    // const [coasterId, setCoasterId] = useState('')
    const {coaster_id} = useParams()
    const [coaster, setCoaster] = useState({})

    //setCoasterId(coaster_id)
    useEffect(() => {
        fetch(`http://localhost:5005/api/details/${coaster_id}`)
            .then( res => res.json() )
            .then(coaster => {
                setCoaster(coaster)
            })
            .catch( () => console.log('Se genero un error'))
    },[coaster_id])
    
    // const loadCoasterDetails = () => {
    //     fetch(`http://localhost:5005/api/details/${coaster_id}`)
    //         .then( res => res.json() )
    //         .then(coaster => {
    //             setCoaster(coaster)
    //         })
    //         .catch( () => console.log('Se genero un error'))
    // }

    // loadCoasterDetails()

    return (
        <div className='coaster-details'>
            <h1>Estos seran los detalles de {coaster.title}</h1>
            <hr />
                <article>
                    <img className='image-details' src={coaster.imageUrl} alt="" />
                    <p>{coaster.description}</p>
                    <h3>Specs</h3>
                    <ul>
                        <li>Longitud: {coaster.length}</li>
                        <li>Inversiones: {coaster.inversion}</li>
                    </ul>    
                </article>
            <hr />
            <Link to='/galeria'>ver Galeria</Link>
        </div>
    )
}

export default CoasterDetails