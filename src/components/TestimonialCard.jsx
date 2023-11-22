import React from "react";

const TestimonialCard = ({ name, designation, review }) => {
  return (
    <div className="flex flex-col p-2 bg-white flex-grow rounded-lg h-36 overflow-auto">
      <div className="flex items-baseline space-x-2">
        <div className="font-semibold text-lg">{name}</div>
        <div
          className="text-[#96979A
] text-xs font-medium"
        >
          {designation}
        </div>
      </div>
      <div className="my-auto font-medium">{review}</div>
    </div>
  );
};

export default TestimonialCard;
