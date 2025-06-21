import { useState } from "react";
import "./App.css"
import Card from "./components/Card";

function App(){
  const fname="radhe"
  const city="indore"
  const quali="BTech"
  const state="MP"
  const[age,setage]=useState(23)
  return (
    <div className="hey">
      <Card myname={fname} myage={age} mycity={city} changeage={setage} myquli={quali} mystate={state} ></Card>
      <Card myname={fname} myage={age} mycity={city} changeage={setage} myquli={quali} mystate={state} ></Card>
      <Card myname={fname} myage={age} mycity={city} changeage={setage} myquli={quali} mystate={state} ></Card>


    </div>
  )
}
 export default App;