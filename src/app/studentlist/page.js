import Link from "next/link"


export default function Studentlist () {

    const students = ["shubham","shashwat","rakesh","rishub"];

    return (

       

        <div>
            <h1>Student list  </h1>
            <ul>
                {students.map((student,index) =>(
                    <li key={index}>
                        <Link href={`/studentlist/${student}`}>{student}</Link>
                    </li>
                ))}
              
            </ul>
        </div>
    )
}