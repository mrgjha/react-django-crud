function BasicFigure({ image, title }) {
  return (
    <div style={{
      width: "200px",
      margin: "15px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
    }}>
      <img 
        src={image} 
        alt={title}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />
      <p style={{ padding: "10px", fontWeight: "bold" }}>
        {title}
      </p>
    </div>
  );
}

export default BasicFigure;