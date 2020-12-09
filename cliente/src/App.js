import Card from "./components/card";
import "./reset.css";
const App = () => {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card />
    </div>
  );
};

export default App;
