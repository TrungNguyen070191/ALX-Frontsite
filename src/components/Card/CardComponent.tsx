import calendarIcon from "../../assets/images/calendar-icon.svg";
import clockIcon from "../../assets/images/clock-icon.svg";
import { CardModel } from "../../models/card.model";
import dayjs from "dayjs";

import "./CardComponent.scss";

const CardComponent = (model: CardModel) => {
  return (
    <div className="bg-white shadow-lg rounded-3xl border border-neutral-n20 p-3 sm:p-4 md:p-6 flex flex-col gap-6">
      <div className="text-sm text-neutral-n40 flex justify-between">
        <span className="flex items-center">
          <img src={calendarIcon} className="w-4 h-4 inline mr-1" alt="" />
          <time>{dayjs(model.publishDate).format("DD/MM/YYYY")}</time>
        </span>
        <span className="flex items-center">
          <img src={clockIcon} className="w-4 h-4 inline mr-1" alt="" />
          <time>2 phút</time>
        </span>
      </div>
      <img src={model.img} className="rounded-3xl main-img" alt="" />
      <div className="flex flex-col flex-grow gap-4">
        <div>
          <span className="text-sm text-thin text-secondary bg-secondary-light px-4 py-1 rounded-full">
            {model.type}
          </span>
        </div>
        <span className="flex-grow font-medium text-lg text-secondary mb-3 cursor-pointer hover:text-primary">
          {model.title}
        </span>
        <p className="text-sm text-neutral-n40">{model.author}</p>
      </div>
    </div>
  );
};

export default CardComponent;
