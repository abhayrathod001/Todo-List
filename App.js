// import logo from './logo.svg';
import './App.css';
import Header from "./MyComponenets/Header";
import { Todos } from "./MyComponenets/Todos";
import { Footer } from "./MyComponenets/Footer";
import { AddTodos } from "./MyComponenets/AddTodos";
import React,{useState} from 'react';

function App() {


  const onDelete = (todo)=>{
    // alert("Delete this");
    console.log("I am onDelte of todo " , todo);

    setTodos(todos.filter((e)=>{
      return e !==todo;
    }))
  }


  const addTodo = (title , desc)=>{
      
    console.log("I am adding the title " , title , desc);
    
    let sno;

    if( todos.length === 0){
      sno = 0;
    }
    else{
     sno = todos[todos.length-1].sno + 1 ;
    }
    const myTodo ={
      sno : sno ,
      title : title ,
      desc : desc ,
    }
    setTodos([...todos , myTodo]);
    console.log(myTodo);
  }
   



  const [todos , setTodos ] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "you nee dto get job done"
    }
    ,

    {
      sno: 2,
      title: "Go to the mall",
      desc: "you nee dto get job done2"
    }
    ,
    {
      sno: 3,
      title: "Go to the ghat",
      desc: "you nee dto get job done 3"
    }
  ]);

  return (

    <>

      <Header title="My todo list" searchbar={false} />
      <AddTodos  addTodo = {addTodo}       />
      <Todos todos={todos} onDelete = {onDelete}  />
      <Footer />

    </>

  );
}

export default App;
