// import logo from "./logo.svg";
import "./App.css";
import Header from "./component/header/Header";
import Category from "./component/category/Category";
import Carousel from "./component/herosection/Carousel";
import Electronic from "./component/electronic/Electronic";
import Beauty from "./component/beauty/Beauty";
import Offers from "./component/offer/Offers";
import Homedecor from "./component/homedecor/Homedecor";
import Kitchen from "./component/kitchen/Kitchen";
import Pooja from "./component/pooja/Pooja";
import Winter from "./component/winter/Winter";
import Topstory from "./component/topstory/Topstory";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Category />
      <Carousel />
      <Electronic />
      <Beauty />
      <Offers />
      <Homedecor />
      <Kitchen />
      <Pooja />
      <Winter />
      <Topstory />
      <Footer />
    </div>
  );
}

export default App;
