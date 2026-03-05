import BasicFigure from "./BasicFigure";

function FigureList() {
  const images = [
    {
      id: 1,
      title: "Mountain",
      image: "https://picsum.photos/300/200?random=1"
    },
    {
      id: 2,
      title: "Beach",
      image: "https://picsum.photos/300/200?random=2"
    },
    {
      id: 3,
      title: "Forest",
      image: "https://picsum.photos/300/200?random=3"
    }
  ];

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap"
    }}>
      {images.map((item) => (
        <BasicFigure 
          key={item.id}
          image={item.image}
          title={item.title}
        />
      ))}
    </div>
  );
}

export default FigureList;