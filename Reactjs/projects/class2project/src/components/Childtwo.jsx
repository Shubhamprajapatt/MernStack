import Childthree from "./Childthree"

 function Childtwo({money}) {
  return (
    <div>
      <Childthree money={money}></Childthree>
    </div>
  )
}
export default Childtwo;
