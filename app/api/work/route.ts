import cloudinary from "@/lib/cloudinary";
import { connectDB } from "@/lib/db";
import { Work } from "@/models/Work";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const formData = await req.formData();
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const category = formData.get("category");
    const link = formData.get("link");
    const stacks = formData.get("stacks") as string;
    let parsedStacks = JSON.parse(stacks);
    console.log(parsedStacks)

    const files = formData
      .getAll("images")
      .filter((f): f is File => f instanceof File);

    if (!title || !description || !link || !files || !stacks || !category) {
      return NextResponse.json({ error: "Missing Fields" }, { status: 400 });
    }

    const imagesUrls: string[] = [];
    for (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const result: any = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ folder: "products" }, (err, res) => {
            if (err) return reject(err);
            resolve(res);
          })
          .end(buffer);
      });
      imagesUrls.push(result.secure_url);
    }

    const work = await Work.create({
      title,
      description,
      link,
      image: imagesUrls,
      stacks: parsedStacks,
      category,
    });

    return NextResponse.json(work, { status: 201 });
  } catch (e) {
    console.error("POST /api/work error:", e);
    return NextResponse.json(
      { error: "Failed to make a Post request" },
      { status: 500 },
    );
  }
}

export async function GET(req: Request) {
  try {
    await connectDB();

    const work = await Work.find();
    if (!work) {
      return NextResponse.json(
        {
          error: "Failed to get the data",
        },
        { status: 500 },
      );
    }
    return NextResponse.json(work, { status: 200 });
  } catch (e) {
    console.error("POST /api/work error:", e);
    return NextResponse.json(
      { error: "Failed to make a Get request" },
      { status: 500 },
    );
  }
}
