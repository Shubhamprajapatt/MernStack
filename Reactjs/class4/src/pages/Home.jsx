import Card from '../components/Card.jsx'
import "../components/Card.css"
function Home({product,setcarditem,carditem}) {
  return (
    <div className='Cointainer'>
     {
        product?.map((item ,index)=>(
        <div key={index}>
        <Card data={item}  carditem={carditem} setcarditem={setcarditem}/>
        </div>)
      )
      }
    </div>
  )
}

export default Home
