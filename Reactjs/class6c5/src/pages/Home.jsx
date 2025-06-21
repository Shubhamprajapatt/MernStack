import Card from '../components/Card.jsx'
import "../components/Card.css"
import { useContext } from 'react'
import { bitescontext } from '../context/MyContext.jsx'

function Home() {
  const {Products}=useContext(bitescontext)
  return (
    <div className='Cointainer'>
     {
        Products?.map((item ,index)=>(
        <div key={index}>
        <Card data={item} />
        </div>)
      )
      }
    </div>
  )
}

export default Home
