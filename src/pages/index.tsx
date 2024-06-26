// import Image from "next/image";
// import { Inter } from "next/font/google";
// 'flex justify-between items-center  bg-slate-300 h-[100px]
// const inter = Inter({ subsets: ["latin"] });

import { FiTrash } from "react-icons/fi"




export default function App() {
  
  return (
   <div className="w-full min-h-screen bg-gray-900 flex justify-center px-4">
    <main className="my-10 w-full md:max-w-2xl">
       <h1 className=" text-3xl font-medium text-white">Cliente</h1>

      <form className="flex flex-col my-6">
        <label className="font-medium text-white">Nome:</label>
        <input
        type="text"
        placeholder="Digite o seu nome completo"
        className="w-full mb-5 py-1 rounded"
        />
      
        <label className=" font-medium text-white">Email:</label>
        <input
        type="text"
        placeholder="Digite o seu Email completo"
        className="w-full mb-5 py-1 rounded"
        />

      <input
      type="submit"
      value="Cadastrar"
      className="cursor-pointer w-full bg-green-500 p-2 rounded text-white"
      />
      </form>

     <section className="flex flex-col">
      <article 
      className="w-full bg-white rounded p-2 relative hover:scale-105 duration-100"
      >
        <p>Nome:<span> Deyvid</span></p>
        <p>Email:<span> Deyvid@gmail.com</span></p>
        <p>Status<span> ATIVO</span></p>

      <button
      className=" bg-red-500 w-9 h-9 flex justify-center items-center rounded-lg absolute top-[-4px] right-[-4px]"
      >
        <FiTrash size={30} color="#fff"/>
      </button>

      </article>
     </section>

    </main>
   </div>
  );
}
