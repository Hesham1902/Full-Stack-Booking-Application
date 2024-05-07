import studio from "/images/studio.png";

const SuccessCard = ({ label }: { label: string }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold my-4">{label}</h2>
      <div className="bg-white p-4 pr-0 rounded-lg overflow-hidden border-r-2 border-primary">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20">
            <img src={studio} alt="studio" className="h-full" />
          </div>
          <div>
            <p className="text-xs mb-2">Sun 16 July 2023</p>
            <h3 className="text-xl font-medium">Name Name</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessCard;
