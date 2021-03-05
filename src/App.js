import {useEffect, useState} from "react"
import './App.css'

const {REACT_APP_API_KEY, REACT_APP_API_ID} = process.env;

function App() {

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${REACT_APP_API_ID}&app_key=${REACT_APP_API_KEY}`;
  const [counter, setCounter] = useState(0);
  
  useEffect(() => {
    console.log("This part will execute everytime the page is re-renderd");
    console.log(process.env);
    getRecipes();
  }, [])

  const getRecipes = async () => {
    const response = await fetch(exampleReq);  
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="App">

      <h1>Hello World</h1>
      <form className="search-form" action="">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Don't click me</button>
      </form>

      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button onClick={() => {setCounter(counter + 1)}} type="button">Click Me</button>
      </form>
      <h1>{counter}</h1>

      

    </div>

  );
}

export default App;
