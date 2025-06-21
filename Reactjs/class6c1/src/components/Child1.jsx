import Child2 from "./Child2"

function Child1({getdata}){
 
    return (
        <div>
            <Child2 getdata={getdata}/>
        </div>
    )
}
export default Child1