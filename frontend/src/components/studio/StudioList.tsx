// import StudioCard from "./StudioCard";
// import studio_img from "/images/studio.png";

// const StudioList = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center lg:place-items-start gap-8 mt-8">
//       <StudioCard
//         img={studio_img}
//         title="Studio name"
//         location="1st Floor, sample Mall, Cairo, Egypt"
//         path="1"
//       />
//       <StudioCard
//         img={studio_img}
//         title="Studio name"
//         location="1st Floor, sample Mall, Cairo, Egypt"
//         path="2"
//       />
//       <StudioCard
//         img={studio_img}
//         title="Studio name"
//         location="1st Floor, sample Mall, Cairo, Egypt"
//         path="3"
//       />
//       <StudioCard
//         img={studio_img}
//         title="Studio name"
//         location="1st Floor, sample Mall, Cairo, Egypt"
//         path="4"
//       />
//       <StudioCard
//         img={studio_img}
//         title="Studio name"
//         location="1st Floor, sample Mall, Cairo, Egypt"
//         path="5"
//       />
//       <StudioCard
//         img={studio_img}
//         title="Studio name"
//         location="1st Floor, sample Mall, Cairo, Egypt"
//         path="6"
//       />
//       <StudioCard
//         img={studio_img}
//         title="Studio name"
//         location="1st Floor, sample Mall, Cairo, Egypt"
//         path="7"
//       />
//       <StudioCard
//         img={studio_img}
//         title="Studio name"
//         location="1st Floor, sample Mall, Cairo, Egypt"
//         path="8"
//       />
//     </div>
//   );
// };

// export default StudioList;

import { Fragment } from "react";
import StudioCard from "./StudioCard";
import studio_img from "/images/studio.png";

interface studio {
  id: number;
  name: string;
  working_days: string;
  start_time: string;
  end_time: string;
  price_per_day: string;
  address: string;
  rate: number;
  status: boolean;
}

const StudioList = ({ studios }: { studios: studio[] }) => {
  console.log(studios);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center lg:place-items-start gap-8 mt-8">
      {studios.map((studio, index) => (
        <Fragment key={index}>
          <StudioCard
            img={studio_img}
            title={studio.name}
            price_per_day={studio.price_per_day}
            start_time={studio.start_time}
            end_time={studio.end_time}
            location={studio.address}
            path={String(studio.id)}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default StudioList;
