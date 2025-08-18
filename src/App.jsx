import { ToastContainer } from "react-toastify";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Qualification from "./components/Qualification/Qualification";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <>
      <ToastContainer position="bottom-right" autoClose="2000" theme="dark" />
      <ThemeProvider>
        <Header />
        <main className="main">
          <Home />
          <About />
          <Skills />
          <Qualification />
          <Contact />
        </main>
        <Footer />
        <ScrollUp />
      </ThemeProvider>
    </>
  );
}

export default App;
