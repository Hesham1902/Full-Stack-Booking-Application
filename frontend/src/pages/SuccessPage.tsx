import MainLayout from "../components/layouts/MainLayout";
import SuccessCard from "../components/Succes/SuccessCard";
import CancelBigSvg from "../components/utils/svg/CancelBigSvg";
import LocationBigSvg from "../components/utils/svg/LocationBigSvg";
import check from "/images/check.png";
import studio from "/images/studio.png";

const SuccessPage = () => {
  return (
    <MainLayout>
      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6">
        <div className="flex flex-col gap-6">
          <SuccessCard label="Upcoming appointments" />
          <SuccessCard label="Past appointments" />
        </div>
        <div className="mt-16">
          <div className="bg-white p-6 rounded-lg">
            <h1 className="text-3xl font-semibold">Sun 16 July 2023 </h1>
            <div className="p-2 pr-3 bg-[#2EC114] text-white w-fit rounded-full flex items-center gap-1 mt-4">
              <img src={check} alt="check" />
              <p className="font-semibold">Confirmed</p>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mt-6">
              <div className="flex items-center gap-4">
                <div className="w-28 h-28">
                  <img
                    src={studio}
                    alt="studio-name"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="font-semibold">Studio Name</h2>
                  <p className="text-[#11141A]">1123 Road, Egypt</p>
                  <p className="text-[#11141A]">Booking ref. #: 65742695</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div>
                  <div className="w-16 h-16 bg-[#F7F8FA] flex justify-center items-center rounded-lg">
                    <LocationBigSvg />
                  </div>
                  <p>Directions</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-[#F7F8FA] flex justify-center items-center rounded-lg">
                    <CancelBigSvg />
                  </div>
                  <p>Cancel</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-start mt-14 mb-6">
              <div>
                <h1 className="text-2xl font-semibold">Number of days</h1>
                <p>9 days</p>
              </div>
              <div>EG 900</div>
            </div>
            <hr />
            <div className="mt-8 mb-24">
              <h1 className="text-2xl font-semibold">Cancellation policy</h1>
              <p>Cancel for 15 minutes from reservation time</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SuccessPage;
