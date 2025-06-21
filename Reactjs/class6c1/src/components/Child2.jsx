import Child3 from "./Child3"

function Child2({getdata}){
    return (
        <div>
      <Child3 getdata={getdata}/>
        </div>
    )
}
export default Child2