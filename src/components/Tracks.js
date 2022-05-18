import { useState, useEffect } from 'react';
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY


const Tracks = () => {
    const[query, setQuery] = useState([])
    const[results, setResults] = useState(null)

    const getData = async () => {
        try {
            const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=Steven Leftovers&api_key=${REACT_APP_API_KEY}&format=json`)
            const data = await response.json()
            setResults(data)
          } catch (err) {
            console.log(err)
          }
        }
    
    console.log(results)
    useEffect(() => {getData()}, [])

    const displayData = (displayElement) =>{
        return(
          <>
          <h1>{displayElement.toptracks['@attr'].artist}</h1>
          <h2>{displayElement.toptracks.track[0].name}</h2>
          <h2>{displayElement.toptracks.track[0].playcount}</h2>
          <h2>{displayElement.toptracks.track[1].name}</h2>
          <h2>{displayElement.toptracks.track[1].playcount}</h2>
          <h2>{displayElement.toptracks.track[2].name}</h2>
          <h2>{displayElement.toptracks.track[2].playcount}</h2>
          <h2>{displayElement.toptracks.track[3].name}</h2>
          <h2>{displayElement.toptracks.track[3].playcount}</h2>
          <h2>{displayElement.toptracks.track[4].name}</h2>
          <h2>{displayElement.toptracks.track[4].playcount}</h2>
          <h2>{displayElement.toptracks.track[5].name}</h2>
          <h2>{displayElement.toptracks.track[5].playcount}</h2>
          <h2>{displayElement.toptracks.track[6].name}</h2>
          <h2>{displayElement.toptracks.track[6].playcount}</h2>
          </>
        )
      };return (
            <div>{results ? displayData(results) : <h1>Loading...</h1>}</div>
      )
    } 

export default Tracks;