import PhotoList from "@/components/PhotoList";

const Homepage = async () => {
  // getting photos from api
  const response = await fetch(`${process.env.API_BASE_URL}/photos`);
  const photos = await response.json();

  return <PhotoList photos={photos} />;
};

export default Homepage;
