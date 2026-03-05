function Profile({ name, age, isLoggedIn, hobbies }) {
  const styleBox = {
    border: "2px solid black",
    padding: "15px",
    margin: "10px",
    borderRadius: "10px",
    backgroundColor: "#f2f2f2"
  };

  return (
    <>
      <h2>Hello, {name}</h2>

      <p>Next year age: {age + 1}</p>

      <p>
        Status: {isLoggedIn ? "✅ Logged In" : "❌ Not Logged In"}
      </p>

      {isLoggedIn && <p>Welcome back to your dashboard!</p>}

      <div style={styleBox}>
        <h3>Hobbies List</h3>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>

      <p>Random Number: {Math.floor(Math.random() * 100)}</p>
    </>
  );
}

export default Profile;