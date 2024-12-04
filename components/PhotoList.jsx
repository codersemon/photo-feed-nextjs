import PhotoItem from "./PhotoItem";

const PhotoList = ({ photos }) => {
  return (
    <div className="img-grid">
      {photos?.map((photo) => (
        <PhotoItem key={photo?.id} photo={photo} />
      ))}
    </div>
  );
};

export default PhotoList;
