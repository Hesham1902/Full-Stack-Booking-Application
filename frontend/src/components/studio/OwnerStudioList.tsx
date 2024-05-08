import { Fragment } from "react";
import StudioCard from "./StudioCard";
import studio_img from "/images/studio.png";
import { studio } from "../../types";

const OwnerStudioList = ({ studios, onDelete }: { studios: studio[], onDelete: (studioId: number) => void }) => {
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
            owner_id={studio.owner_id}
            onDelete={() => onDelete(studio.id)}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default OwnerStudioList;
