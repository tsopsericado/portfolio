import connectToDB from "@/app/database";
import Home from "@/models/Home";

export const dynamic = "force-dynamic";

export async function PUT(req) {
  try {
    await connectToDB();

    const extractData = await req.json();
    const { _id, heading, summary } = extractData;

    const updateData = await Home.findOneAndUpdate(
      {
        _id: _id,
      },
      {
        heading,
        summary,
      },
      { new: true }
    );

    if (updateData) {
      return NextResponse.json({
        success: true,
        message: "updated successfully",
      });
    } else {
      console.log(e);
      return NextResponse.json({
        success: false,
        message: "Something went wrong! please try again",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      success: false,
      message: "Something went wrong! please try again",
    });
  }
}
