
import '../css/global.css'
export function Sider(){
    return(
        <>
        <div className="flex-container-row-inline h-fit group absolute z-[0]">
            <div className="relative text-white fredoka-font-100 text-2xl bg-zinc-900 rounded-lg p-4 pb-0 m-4 w-100 h-[100%] -translate-x-[100%] group-hover:translate-x-[0] transition-all duration-300 ease-in-out">
                <h4>Welcome!</h4>   
                <hr />
                <p className="text-justify p-3 text-sm">
                    This is a project to show how i write code at between stacks. In this website is just a part of the principal code of this repository, The back-end 
                    where i worked with Spring Boot and Java, and the front-end where i worked with React, TypeScript and Vite.
                    so, this is a simple to-do list app, where you can add tasks, mark them as completed and delete them on a postgres database.
                </p>
                <hr />
                <h4 className="p-1">Hope you like it!😉 </h4>
            </div>
        </div>
        </>
    )
}       
