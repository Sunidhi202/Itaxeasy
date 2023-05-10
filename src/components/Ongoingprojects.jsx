import React from "react";
import Card from "./Card";

const Ongoingprojects = () => {
  const cards = [
    {
      id: 1,
      image:
        "https://itaxeasy.com/images/home/ongoing_projects/build_the_future.png",
      title: "Build the future",
    },
    {
      id: 2,
      image:
        "https://itaxeasy.com/images/home/ongoing_projects/homes.png",
      title: "Buy and rent the house with Us",
    },
    {
      id: 3,
      image:
        "https://itaxeasy.com/images/home/ongoing_projects/buy_sell_cars.png",
      title: "Best ways to buy/sell Cars",
    },
    {
      id: 4,
      image:
        "https://itaxeasy.com/images/home/ongoing_projects/health.png",
      title: "Health Care Management Consultancy",
    },
  ];

  return (
    <div className="my-20">
    <h1 className="text-3xl text-white text-center my-10 font-bold mb-4">Ongoing Projects</h1>
    <div className="my-8 flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {cards.map((card) => (
          <Card key={card.id} image={card.image} title={card.title} />
        ))}
      </div>
    </div>
    </div>
  );
};



export default Ongoingprojects
