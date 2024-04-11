import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find real state & get your dream place</h1>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iusto
            cumque non, dolor saepe dolorem at placeat tempora nobis culpa.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="./bg.png" alt="" />
      </div>
    </div>
  );
};

export default HomePage;
