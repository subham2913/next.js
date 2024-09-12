'use client'

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const navigate =(name)=>{
    router.push(name)
  }


  const friut=  (item) => {
    alert(item)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
           <nav class="bg-gray-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <div class="flex items-center">
        <div class="text-white text-xl font-semibold">NEXT.JS</div>
        <div class="ml-10 flex space-x-4">
         <button onClick={()=>navigate('/')} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</button>
         <button onClick={()=>navigate('/login')} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</button>
         <button onClick={()=>navigate('/studentlist')} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Studentlist</button>
        </div>
      </div>
    </div>
  </div>
</nav>

            
            <h1>helloooo</h1>

           <button onClick={()=>friut("banana")} 
            className="border-2 bg-black text-white "
            >click me </button>
    </main>
  );
}


