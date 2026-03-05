function Header(props) {
  return (
    <header style={{ backgroundColor: "#282c34", padding: "20px", color: "white" }}>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </header>
  );
}

export default Header;