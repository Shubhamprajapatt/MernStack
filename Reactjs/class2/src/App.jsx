import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const arr=[1,2,3,5,6,7]
  const [url,seturl]=useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZAAI8Ox_9pdS0zatPg-_-ywGt-_bZ_5xNEQ&s")
  const [name,setname]=useState("virat sir")
  const[aboutvirat,setaboutvirat]=useState(`Virat Kohli is one of the greatest batsmen in modern cricket. He was
          the captain of the Indian cricket team across all formats. Known for
          his passion and aggressive playing style, he has broken numerous
          records. Kohli has scored over 70 international centuries across Tests
          and ODIs. Off the field, he's known for his fitness, fashion sense,
          and philanthropic work.`)
  return (
    <>
  
            {
                arr.map(() => (  <Card  imgurl={url} changeimg={seturl} vname={name}  chnagevname={setname} 
                  abouttovirat={aboutvirat} setabouttovirat={setaboutvirat}></Card> ))
            }
  
    </>
  )
}

export default App
