"use client"

import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(){
    const data = user;
    return NextResponse.json(data)
}


export async function POST(request) {
    let payload = await request.json()

    console.log(payload.name)

    if(!payload.name || !payload.email || !payload.age){
        return NextResponse.json({result:"fill all info"})
    }

    return NextResponse.json({result:"user created"})
    
}

 