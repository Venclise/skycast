import { connectDB } from "@/lib/db";
import { Work } from "@/models/Work";
import { NextResponse } from "next/server";


export async function GET(req: Request,  { params }: { params: Promise<{ courseid: string }> }) {
   try {
       await connectDB()
       const {courseid} = await params
       const work = await Work.findById(courseid)
       if(!work) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
}

  return NextResponse.json(
           work,
        { status: 201 }
      );

   }catch(e) {

    return NextResponse.json({message:"Failed to get the product"},{status: 404})


   }
}


export async function DELETE(req: Request,  { params }: { params: Promise<{ workid: string }> }) {
  try {
await connectDB()

const {workid} = await params
const work = await Work.findByIdAndDelete(workid)
if(!work) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
}


     return NextResponse.json(
           { message: "Product deleted successfully" },
        { status: 201 }
      );

  }catch(e) {
    return NextResponse.json({message:"Failed to delete the product"},{status: 404})
  }
}