import './App.css';
// import ClickCounter from './Component/renderProps/clickCounter';
// import Counter from './Component/renderProps/counter';
// import HoverCounter from './Component/renderProps/hoverCounter';
import ClickCounter from './Component/hoc/clickIncrement';
import HoverIncrement from './Component/hoc/hoverIncrement';

function App() {
  return (
    <div className="App">
      
      <ClickCounter 
        name="MD Kamran"/>

      <HoverIncrement 
        name="Shadab Ali"/>

      <hr />

      {/* <Counter 
        render={(count, countIncrement) => 
        <ClickCounter count={count} countIncrement={countIncrement} /> 
        } />

      <Counter 
        render= {(count, countIncrement) => 
        <HoverCounter count={count} countIncrement={countIncrement} />
        } /> */}
    </div>
  );
}

export default App;
