import React from "react";
import "./Home.css";
import banner from "./images/amazon_banner.jpg";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img src={banner} className="home__image" />
      </div>

      <div className="home__row">
        <Product
          id="1004534531"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
          price={523}
          image="http://4.bp.blogspot.com/-YIMcWtDCIo8/ThT0l_2IisI/AAAAAAAAA70/36mkMo3o-fw/s400/ERIES_Enso_in_Blue_Master.png"
          rating={5}
        />
        <Product
          id="1012342342"
          title="Vaseline Intensive Care Deep Restore Body Lotion, 400 ml"
          price={199}
          image="https://images-na.ssl-images-amazon.com/images/I/51WWDSRmePL._SX679_.jpg"
          rating={4}
        />
      </div>

      <div className="home__row">
        <Product
          id="5465444483"
          title="Happilo 100% Natural Premium Californian Almonds 500g"
          price={468.75}
          image="https://img2.exportersindia.com/product_images/bc-full/2018/9/5883555/californian-almonds-1536828366-4296670.jpeg"
          rating={4}
        />
        <Product
          id="2312423834"
          title="Vivo X50 Pro (Alpha Grey, 8GB RAM, 256GB Storage)"
          price={49990.0}
          image="https://www.gizmochina.com/wp-content/uploads/2020/03/vivo-V19.jpg"
          rating={4}
        />

        <Product
          id="2398723765"
          title="boAt Bassheads 100 in Ear Wired Earphones with Mic(Black)"
          price={449}
          image="https://images-na.ssl-images-amazon.com/images/I/719elVA3FvL._SL1500_.jpg"
          rating={4}
        />
      </div>

      <div className="home__row">
        <Product
          id="35345454765"
          title="Classmate 2100117 Soft Cover 6 Subject Spiral Binding Notebook, Single Line, 300 Pages"
          price={138}
          image="https://m.media-amazon.com/images/I/71ulyHAa-hL._AC_UL480_FMwebp_QL65_.jpg"
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
