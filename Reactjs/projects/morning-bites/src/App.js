import Card from './components/Card';

import { Variable } from './Utils/variable.js';

function App() {
  return (
    <div className="cointainer">
      {
        Variable.map((item ,index)=>(
        <div key={index}>
        <Card data={item} />
        </div>)
      )
      }
    </div>
  );
}

export default App;
