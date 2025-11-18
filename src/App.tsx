import "./styles/theme.css";
import "./styles/global.css";
import { Heading } from "./components/Heading";
import { TimerIcon } from "lucide-react";

function App() {
  return (
    <>
      <Heading>
        Olá, mundo!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam neque
        expedita impedit officiis exercitationem omnis eius natus minima
        placeat. Eius quasi sequi quam! In fugit aperiam autem aspernatur quis
        porro.
      </p>
    </>
  );
}

export default App;
