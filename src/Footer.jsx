function Footer(props) {
  return (
    <footer style={{ marginTop: "50px", padding: "20px", backgroundColor: "#f2f2f2" }}>
      <p>© {props.year} {props.company}</p>
    </footer>
  );
}

export default Footer;