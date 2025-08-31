import api from "./api";
import { useState } from "react";

export function AddBar(){
    const [inputValue, setInputValue] = useState("");
    const [inputValuePriority, setInputValuePriority] = useState(0);

    // interacce para tipagem e possiveis verificaçoes
    interface Task {
      titulo: string;
      descricao: string;
      concluido: boolean;
      prioridade: number; // ou number, dependendo do que for
    }

    //objeto ja montado dinamicamente
    const userObject: Task = {
      titulo: inputValue,
      descricao: "",
      concluido: false,
      prioridade: inputValuePriority,
    };

    // Post - save user
    async function sendTask() {
      try {
        const response = await api.post("/Todos", userObject);
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    }

    return(
      <>
        <div className="addBar flex flex-row items-center justify-center h-50 w-screen gap-4 ">
            <div className="flex flex-row items-center justify-center h-25 w-1/2 gap-4 p-4 rounded-lg bg-zinc-900">
                <input 
                    className="rounded-lg bg-zinc-800 text-white h-full w-full pl-4 addBarInputName"
                    type="text" 
                    name="AddBar" 
                    id="addBarInput" 
                    placeholder="Add a new task?" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <section className="rounded-lg bg-zinc-800 text-white p-2 gap-2 h-full w-auto flex flex-row items-center justify-center ">
                    <h3 className="text-white ">Priority</h3>

                    <select name="priority" 
                            id="priorityDropdownMenu" 
                            className="PriorityMenu rounded-lg bg-zinc-950 text-white h-auto p-1" 
                            onChange={(e) => setInputValuePriority(parseInt(e.target.value))}
                    >
                        <option value="0" className="text-white PriorityMenu">0</option>
                        <option value="1" className="text-white PriorityMenu">1</option>
                        <option value="2" className="text-white PriorityMenu">2</option>
                        <option value="3" className="text-white PriorityMenu">3</option>
                        <option value="4" className="text-white PriorityMenu">4</option>
                        <option value="5" className="text-white PriorityMenu">5</option>
                    
                    </select>
                </section>
                <button onClick={sendTask} 
                className="rounded-lg bg-zinc-700 text-white text-center h-full w-25 button1" >
                 I Got it!</button>
            </div>
        </div>
      </>
    )
}

