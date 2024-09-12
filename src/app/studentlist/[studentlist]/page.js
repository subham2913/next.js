 "use client"


 export default function Student ({params}) {
    console.log(params)
    return (
        <div>
            <h1>student details</h1>
            <h1>name : {params.studentlist}</h1>
        </div>
    )
}