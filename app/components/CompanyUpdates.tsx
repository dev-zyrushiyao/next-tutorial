import React from "react";

const placeHolder: string =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos reprehenderit aliquam, magnam a sed quod temporibus incidunt dolorum maiores laudantium ex earum, voluptatum rerum nobis. Libero perferendis nesciunt temporibus saepe.";

export default function CompanyUpdates({ text }: { text?: string }) {
  return (
    <div className="bg-gray-200 p-3 rounded-lg">
      <h4>Title</h4>
      <p>{text ?? placeHolder}</p>
    </div>
  );
}
