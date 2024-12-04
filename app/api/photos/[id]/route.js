// dependencies
import { getSinglePhoto } from "@/lib/image-data";
import { NextResponse } from "next/server";

// single photo getter
export const GET = async (request, { params }) => {
  // get photo id
  const { id } = params;

  // getting data from db
  const data = await getSinglePhoto(id);

  // send response
  return NextResponse.json(data);
};
