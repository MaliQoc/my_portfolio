import Data from "./Data";
import "./home.css";
import Social from "./Social";

export default function Home() {
  return (
    <section className="home section" id="home">
      <div className="home-container container grid">
        <div className="home-content grid">
          <Social />
          <div className="home-img"></div>
          <Data />
        </div>
      </div>
    </section>
  );
}
