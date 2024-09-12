"use client"

import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation";

export default function Layout ({children}) {
    const router = useRouter();
    const pathname = usePathname();

    const navigate = (name) => {

        router.push(name)
    }


    return(
        <div>
           {
            pathname !== "/login/loginteacher" ?

             <ul className="flex space-x-4 ">
             <li>
                 <button  className=" bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600" onClick={() => navigate('/login')} >login</button>
             </li>
             <li>
                 <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600" onClick={() => navigate('/login/loginstudent')}>login Student</button>
             </li> 
             <li>
                 <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600" onClick={() => navigate('/login/loginteacher')}>login  Teacher</button>
             </li>
         </ul>
           :null}
            {children}

        </div>
    )
}