import studio_img from "/images/studio.png";
import studio1_img from "/images/studio1.png";
import studio2_img from "/images/studio2.png";
import studio3_img from "/images/studio3.png";
import studio4_img from "/images/studio4.png";

const GalleryImgStudio = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4 mt-8">
      <img
        src={studio1_img}
        alt="studio"
        className="w-full h-full col-span-1 row-span-2"
      />
      <img src={studio_img} alt="studio" className="w-full h-full" />
      <img src={studio2_img} alt="studio" className="w-full h-full" />
      <img src={studio3_img} alt="studio" className="w-full h-full" />
      <img src={studio4_img} alt="studio" className="w-full h-full" />
    </div>
  );
};

export default GalleryImgStudio;
