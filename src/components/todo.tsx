import api from "./api";
import { TrashCanButton } from "./trashCanbt"
import { useEffect, useRef, useState } from "react";

    interface Task {
      id: number,
      titulo: string;
      descricao: string;
      concluido: boolean;
      prioridade: number; // ou number, dependendo do que for
    }


async function getTasks() {
    try {
      const response = await api.get('/Todos');
      return new Promise ((resolve) =>
        resolve(response.data)
      );
    } catch (error) {
      console.error(error);
    }
  }

  
  
  export function Todo(){
    const [dados, setDados] = useState([]);
    const [editable, setEditable] = useState(false);
    const refP = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
      const fetchTasks = async () => {
        try {
          const res = await getTasks();
          setDados(res);
        } catch (error) {
          console.error("Erro ao buscar /Todos:", error);
        }
      };
      
      fetchTasks();
      
      const interval = setInterval(fetchTasks, 1000); // chama a cada 5 segundos
      
      return () => clearInterval(interval); // limpa o intervalo quando desmontar
    }, []);
    
    async function putTask(task : Task){
      
      try{
        
        if(editable == false){
          setEditable(true);
        }else{
          const descricaoNew = refP.current?.innerText;
          console.log(descricaoNew)
          setEditable(false)
          const taskObject: Task = {
            id: task.id,
            titulo: task.titulo,
            descricao: descricaoNew,
            concluido: task.concluido,
            prioridade: task.prioridade,
          };
  
          console.log(taskObject)
          const response = await api.put('/Todos', JSON.stringify(taskObject));
          console.log(response);
          return response;
        }
      
      }catch (error){
        console.error("Erro ao Editar :" + task + "| ERRO -" + error)
      }
    }
      
    async function deleteTask(id : number) {
      try {
        const response = await api.delete('/Todos/' + id);
        return response.data;
      } catch (error) {
        console.error("erro ao deletar " + error)
      }
    }

  return(
    <div className="w-screen h-[50%] flex flex-col items-center gap-6 overflow-y-auto scroll-smooth">
      {dados.map((element : Task, key) => (
        <div key={key} className="bg-zinc-900 text-white p-4 w-[50%] rounded-xl transition-all duration-200 ease-in-out hover:scale-[1.01]">
          <span className="flex flex-nowrap justify-between items-stretch content-stretch w-full h-auto">
            <h1 className="p-3 text-3xl">{element.titulo}</h1>
            <h1>{element.prioridade}</h1>
          </span>
          <hr />
          <section className="w-full h-fit mt-4">

            <p ref={refP} className={`descricao p-3 text-justify transition-all duration-200 ease-in rounded-xl ${
              editable
                ? 'border-b-4 border-indigo-500 bg-zinc-800 max-h-[1000px]'
                : 'bg-zinc-950 h-fit'
            }`} 
            contentEditable={editable} 
            suppressContentEditableWarning={true}>{element.descricao}
            </p>

            <button className="edit-button mt-6" onClick={() => putTask(element)}>
              <svg className="edit-svgIcon" viewBox="0 0 512 512">
                  <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 
                  89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 
                  480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 
                  27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 
                  452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 
                  325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5
                   0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 
                   0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
              </svg>
            </button>
          </section>
          <footer className="flex flex-nowrap justify-between items-end content-stretch w-full h-fit">
            <label className="container w-fit h-fit">
              <input type="checkbox"/>
              <div className="checkmark"></div>
            </label>
            <TrashCanButton onClick={() => deleteTask(element.id)} />
          </footer>
        </div>  
      ))}
    </div>
  )
}
