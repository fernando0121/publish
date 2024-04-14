import Navbar from "./assets/Components/Navbar/Navbar"
import Booking from "./assets/Components/First/Booking";
import About from "./assets/Components/second/About";
import Team from "./assets/Components/third/Team";
import Forth from "./assets/Components/forth/Contact";

function App() {
  return(
    <><div>
    <Navbar/>
    <Booking/></div>
    <div>
      <About/>
    </div>
    <div>
      <Team/>
    </div>
    <div>
      <Forth/>
    </div>
    </>
  );
}

export default App
