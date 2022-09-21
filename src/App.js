import {useState} from "react"
function App() {
  const [todo,setTodo] = useState("")
  const [todos,setTodos] = useState([])

  const submitHandle = (e) => {
    e.preventDefault()
    setTodos([...todos,todo])
    setTodo("")
  }

  return (
    <div>
      <form onSubmit={submitHandle}>
        <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}></input>
        <button disabled={!todo} type="submit">Ekle</button>
      </form>
      {todos.map((todo,index)=>(
        <li key={index}>{todo}</li>
      ))}

      
    </div>
  );
}

export default App;
