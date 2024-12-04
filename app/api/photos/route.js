// dependencies
import { getAllPhotos } from "@/lib/image-data";
import { NextResponse } from "next/server";

// handle all photo getter 
export const GET = async () => {
  // getting all photos from db
  const data = await getAllPhotos();

  // modify data
  const modifiedData = data.map((photo) => ({
    id: photo?.id,
    title: photo?.title,
    url: photo?.url,
  }));

  // send response
  return NextResponse.json(modifiedData);
};
