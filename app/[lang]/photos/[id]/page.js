import PhotoDetails from "@/components/PhotoDetails";
import { getDictionary } from "../../dictionaries/dictionaries";

const PhotoDetailsPage = async ({ params: { id, lang } }) => {
  // get single photo
  const response = await fetch(`${process.env.API_BASE_URL}/photos/${id}`);
  const photo = await response.json();

  // translated string
  const dictionary = await getDictionary(lang);

  return <PhotoDetails photo={photo} dictionary={dictionary} />;
};

export default PhotoDetailsPage;
