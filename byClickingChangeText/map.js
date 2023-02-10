const data = [
  {
    id: "1",
    title: "Tiramisu",
    description: "The best titamisu in town",
    image:
      "https://images.pexels.com/photos/965345/pexels-photo-965345.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: "$5.00",
  },
  {
    id: "2",
    title: "Lemon Ice Cream",
    description: "Mind blowing taste",
    image:
      "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: "$4.50",
  },
  {
    id: "3",
    title: "Chocolate mousse",
    description: "Unexplored flovour",
    image:
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: "$6.00",
  },
];

const topDesserts = data.map((dessert) => {
  return {
    content: `${dessert.title} - ${dessert.description}`,
    price: `${dessert.price}`,
  };
});

export default function Map() {
  console.log(topDesserts);
  return <h1>Examine the console output</h1>;
}
