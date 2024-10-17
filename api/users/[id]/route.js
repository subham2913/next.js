import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(req,res){

    
    const userData = user.filter((item)=>item.id==res.params.id)
    return NextResponse.json(
        userData.length==0?{result:"data not found",success:false}:{result: userData[0],success:true}
    )
}

export  async function PUT(request,content) {
    let payload = await request.json()

    payload.id = content.params.id;

    console.log(payload)
    if( !payload.id || !payload.name || !payload.email || !payload.age){
        return NextResponse.json({result:"fill all info"})
    }
    

    return NextResponse.json({result:payload,success:true},{status:200})
    
} 
export function DELETE(request,content) {
    let id =  content.params.id
    console.log(id)
    if(id){
        return NextResponse.json({result:"user deleted", success:true},{status:200})
    }else{
        return NextResponse.json({result:"internal error", success: false },{status:400})
    }
}