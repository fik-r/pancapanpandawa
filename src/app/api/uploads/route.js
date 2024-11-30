import { NextResponse } from "next/server";
import { uploadImage } from "@/lib/actions/UtilsActions";
export async function POST(req) {
    const formData = await req.formData();

    const file = formData.get("file")
    if (!file) {
        return NextResponse.json(
            { error: "File blob is required." },
            { status: 400 }
        );
    }
    try {
        const imageUrl = await uploadImage(file)
        return NextResponse.json(
            { link: imageUrl },
            { status: 200 }
        );
    } catch (e) {
        return NextResponse.json(
            { error: "Something went wrong." },
            { status: 500 }
        );
    }
}