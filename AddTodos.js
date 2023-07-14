
import React,{useState} from 'react';

export const AddTodos = (props) => {
    

    const [title , setTitle] = useState("");
    const [desc , setDesc] = useState("");


    const submit = (e)=>{
        // alert(this.setTitle);

        e.preventDefault();

        if(!title || !desc){
            alert("Title or desc can not be BLANK");
        }

        props.addTodo(title , desc);
    }


    return (
        <div className="container">

            <h3>Add a Todo</h3>

            <form onSubmit={submit} >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} 
                    className="form-control" id="title" aria-describedby="emailHelp"/>
                      
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo description</label>
                    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} 
                     className="form-control" id="desc"/>
                </div>
                
                <button type="submit" className="btn btn-sm btn-success">Submit</button>
            </form>

        </div>
    )
}


