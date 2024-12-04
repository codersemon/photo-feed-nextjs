// dependencies
import { getDictionary } from "@/app/[lang]/dictionaries/dictionaries";
import Modal from "@/components/Modal";
import PhotoDetails from "@/components/PhotoDetails";

const InterceptedPhotoDetailsPage = async ({ params: { id, lang } }) => {
  // get single photo
  const response = await fetch(`${process.env.API_BASE_URL}/photos/${id}`);
  const photo = await response.json();

  // translated string
  const dictionary = await getDictionary(lang);

  return (
    <Modal>
      <PhotoDetails photo={photo} dictionary={dictionary} />
    </Modal>
  );
};

export default InterceptedPhotoDetailsPage;
