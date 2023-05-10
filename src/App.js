import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Tax from "./components/Tax";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Ongoingprojects from "./components/Ongoingprojects";
import Corporate from "./components/Corporate";
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Main/>
     <Services/>
    <Tax/>
    <Ongoingprojects/>
    <Corporate/>
    <Footer/>

    </div>
  );
}

export default App;
