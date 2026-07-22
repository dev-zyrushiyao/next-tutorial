import React from "react";

const placeHolder: string =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos reprehenderit aliquam, magnam a sed quod temporibus incidunt dolorum maiores laudantium ex earum, voluptatum rerum nobis. Libero perferendis nesciunt temporibus saepe.";

export default function CompanyUpdates({ text }: { text?: string }) {
  return (
    <div className="bg-gray-200 p-3 rounded-lg">
      <h4 className="font-serif font-semibold text-2xl tracking-wide text-black">
        Title
      </h4>
      <p className="text-idle font-sans font-normal text-lg leading-10 py-3 tracking-wide">
        {text ?? placeHolder}
      </p>
    </div>
  );
}
