import React from "react";
import Card from "./Card";

const Corporate = () => {
  const cards = [
    {
      id: 1,
      image:
        "https://itaxeasy.com/images/home/partners/lic.png",
      title: "Life Insurance Corporation of India (LIC)",
    },
    {
      id: 2,
      image:
        "https://itaxeasy.com/images/home/partners/rbi.png",
      title: "Liability On Long-Term Capital Gains",
    },
    {
      id: 3,
      image:
        "https://itaxeasy.com/images/home/partners/star.png",
      title: "Star Health And Allied Insurance Co Ltd",
    },
    {
      id: 4,
      image:
        "https://itaxeasy.com/images/home/partners/yes.png",
      title: "YES Securities(India) Limited (YSL)",
    },
  ];

  return (
    <div className="my-40 bg-amber-300">
    <h1 className="text-3xl text-black text-center my-10 font-bold mb-4">Corporate Partners</h1>
    <div className="my-8 flex flex-col items-center bg-black my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-10">
        {cards.map((card) => (
          <Card key={card.id} image={card.image} title={card.title} />
        ))}
      </div>
    </div>
    </div>
  );
};



export default Corporate