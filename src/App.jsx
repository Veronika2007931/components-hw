// import {Greeting} from "./components/Greeting.jsx"
// import {Message}  from "./components/Message.jsx"
import {Button}  from "./components/Button.jsx"
import './App.css';

function App() {
  return (
    // < Greeting  name = "Ірина"/> ,
    // <Message text = "Лише 0,63% людей натискають на другу сторінку результатів пошуку Google. Якщо користувачі не зможуть знайти те, що шукають на першій сторінці, вони швидше змінять свій запит ніж, перейдуть на другу сторінку видачі."/>,
    < Button onClick = {console.log("clicked button")}/>
  );
}

export default App;
