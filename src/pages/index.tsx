import { useState, useEffect, useRef} from "react";
import { FormEvent } from "react";

import { api } from "@/service/api";
import { FiTrash } from "react-icons/fi"

interface CustomerProps {
   id: string;
   name:string;
   email: string;
   status: boolean;
   created_at: string;
}


export default function App() {

  const [customer, setCustomer] = useState<CustomerProps[]>([]);
  
  const nameRef = useRef<HTMLInputElement | null >(null)
  const emailRef = useRef<HTMLInputElement | null >(null)

  useEffect(()=>{
     load();
  },[])
  
  async function load() {
    try {
      const response = await api.get("/customer");
      console.log(response.data)
       setCustomer(response.data)
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }

  async function handleSubmit(event:FormEvent){
     event.preventDefault();

     if(!nameRef.current?.value || !emailRef.current?.value) return;

     try{
     const response = await api.post("/customer",{
      name:emailRef.current?.value,
      email:emailRef.current?.value
    })
      setCustomer(allCustomers => [...allCustomers,response.data])
    }catch{}   
   

    nameRef.current.value = ""
    emailRef.current.value = ""
  }
  async function handleDelete(id:string){
       try{
         await api.delete("/customer",{
          params:{
            id:id,
          }
         })

         const allCustomer = customer.filter((customer)=> customer.id !== id)

         setCustomer(allCustomer)

       }catch(err){
          console.log(err);
       }
  }

  return (
   <div className="w-full min-h-screen bg-gray-900 flex justify-center px-4">
    <main className="my-10 w-full md:max-w-2xl">
       <h1 className=" text-3xl font-medium text-white">Cliente</h1>

      <form className="flex flex-col my-6" onSubmit={handleSubmit}>
        <label className="font-medium text-white">Nome:</label>
        <input
        type="text"
        placeholder="Digite o seu nome completo"
        className="w-full mb-5 py-1 rounded"
        ref={nameRef}
        />
      
        <label className=" font-medium text-white">Email:</label>
        <input
        type="text"
        placeholder="Digite o seu Email completo"
        className="w-full mb-5 py-1 rounded"
        ref={emailRef}
        />

      <input
      type="submit"
      value="Cadastrar"
      className="cursor-pointer w-full bg-green-500 p-2 rounded text-white"
      />
      </form>

     <section className="flex flex-col">

       {customer.map((params)=>(

       <article 
         className="w-full bg-white rounded p-2 relative hover:scale-105 duration-100 mt-3"
         key={params.id}>
           <p>Nome:<span>{params.name}</span></p>
           <p>Email:<span>{params.email}</span></p>
           <p>Status<span>{params.status ? "Ativo" :"Inativo"}</span></p>
   
         <button
         className=" bg-red-500 w-9 h-9 flex justify-center items-center rounded-lg absolute top-[-4px] right-[-4px]"
         onClick={()=> handleDelete(params.id)}
         >
           <FiTrash size={30} color="#fff"/>
         </button>
   
         </article>
       ))}
        
     </section>

    </main>
   </div>
  );
}
