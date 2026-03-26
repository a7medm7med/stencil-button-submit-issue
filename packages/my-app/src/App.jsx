import "./App.css";
import {
  PlantButton,
  defineCustomElements,
} from "plants-react-library";

defineCustomElements();
function App() {

  return (
    <>
      <form>
          <input type="text" name="name" />
          <br />
         <PlantButton type="submit">
          <span >Item Count</span>
        </PlantButton>
      </form>
    </>
  );
}

export default App;
