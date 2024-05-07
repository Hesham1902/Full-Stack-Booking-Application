import AccountSvg from "../utils/svg/AccountSvg";
import BookingSvg from "../utils/svg/BookingSvg";
import HomeSvg from "../utils/svg/HomeSvg";
import StudiosSvg from "../utils/svg/StudiosSvg";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-20 bg-white border-t border-[#eee] lg:hidden">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50"
        >
          <HomeSvg />
          <span className="text-sm text-gray-500 mt-2">Home</span>
        </button>
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50"
        >
          <BookingSvg />
          <span className="text-sm text-gray-500 mt-2">Booking</span>
        </button>
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50"
        >
          <StudiosSvg />
          <span className="text-sm text-gray-500 mt-2">Studios</span>
        </button>
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50"
        >
          <AccountSvg />
          <span className="text-sm text-gray-500 mt-2">Account</span>
        </button>
      </div>
    </div>
  );
};

export default BottomNav;
