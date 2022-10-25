import logo from "./logo.svg";
import "./App.css";
import { data } from "./weather";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

function App() {
  return (
    <div className="">
      City Name
      <p>{data[0].name}</p>
      Weather Condition
      <p>{data[0].weather[0].main}</p>
      <div className="under">
        <div className="Date">
          <p>Data</p>
          <p>
            {new Date(data[0].dt * 1000)
              .toLocaleDateString()
              .split("/")
              .join("-")}
          </p>
        </div>
        <div className="Temprature">
          <p>Temprature</p>
          <p>{data[0].main.temp - 273}</p>
        </div>
        <div className="Humidity">
          <p>Humidiy</p>
          <p>{data[0].main.humidity}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
