import { useEffect, useState } from 'react';
import UserCard from './components/UseCard.jsx';
import SingleCard from './components/SingleCard.jsx';



function App() {
	//useEffect-> it is a hook which is mostly used to perfrom side effects
	//sideeffects -> Any task or operation which take amount of time that is known as
	// side effects. for example -> fetching data from the api.
	// let arr=[];
	// const [arr,setarr]=useState([])
     const [loader,setloader]=useState(false)
	 let [count,setcount]=useState(1)
	 const [singleData,setsingledata]=useState();

	//first way
// 	const [arr,setarr]=useState([])
// 	 async function fetchdata(url){
// 		try{
// 			const response= await fetch(url);
// 			console.log("Response is ",response)
//            const finalans= await response.json()
// 		   console.log(finalans[0]);
// 		   console.log(" data are comming from api calling", finalans)
// 		   setarr(finalans)
// 		}
// 	catch(error){
// 		console.log("Error ",error);
// 	}
// }
	// // fetchdata("https://jsonplaceholder.typicode.com/users");
	// useEffect(()=>{
	//  fetchdata("https://jsonplaceholder.typicode.com/users");
	// })


	//secondway
	// useEffect(()=>{
	//  fetchdata("https://jsonplaceholder.typicode.com/users");
	//  }, [])



	//thirdway
	function counthandler(){
		setcount (count++)
	}
	 
	 async function fetchsinglData(url) {
		setloader(true)
		const response=await fetch(url)
		console.log(response);
		const finalans=await response.json()
		console.log("jsondata" ,finalans[0]);
		console.log("single Data coming",finalans);
		setsingledata(finalans)
		setloader(false)	
	 }
	
	 useEffect(()=>{
		fetchsinglData(`https://jsonplaceholder.typicode.com/users/${count}`)
	 }, [count])
	
  return (
    <div className="App">
    {/* <UserCard arr={arr}/> */}
	<button onClick={counthandler}>change count Value{count}</button>
	<button onClick={()=>{
		setcount(1)
	}}>Go to Home</button>
	<SingleCard data={singleData} loader={loader}/>

    </div>
  );
}

export default App;

