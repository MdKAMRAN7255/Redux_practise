import './App.css';
// import ClickCounter from './Component/renderProps/clickCounter';
// import Counter from './Component/renderProps/counter';
// import HoverCounter from './Component/renderProps/hoverCounter';
import ClickCounter from './Component/hoc/clickIncrement';
import HoverIncrement from './Component/hoc/hoverIncrement';
import DeleteList from './Component/questionPracise/deleteList';
import Checkbox1 from './Component/questionPracise/state&city';

function App() {
  return (
    <div className="App">
      
      {/* <ClickCounter 
        name="MD Kamran"/>

      <HoverIncrement 
        name="Shadab Ali"/>

      <hr /> */}

      {/* <Counter 
        render={(count, countIncrement) => 
        <ClickCounter count={count} countIncrement={countIncrement} /> 
        } />

      <Counter 
        render= {(count, countIncrement) => 
        <HoverCounter count={count} countIncrement={countIncrement} />
        } /> */}
        
        <Checkbox1 />
        <DeleteList />
        
    </div>
  );
}

export default App;
