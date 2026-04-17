import React, { useState } from "react";
import "./App.css";
import ProductList from "./ProductList";
import AboutUs from "./AboutUs";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  const handleGetStarted = () => {
    setShowProducts(true);
  };

  const handleHomeClick = () => {
    setShowProducts(false);
  };

  return (
    <div>
      {!showProducts ? (
        <div className="landing-page">
          <div className="background-image"></div>

          <div className="content">
            <div className="landing_content">
              <h1>Paradise Nursery</h1>
              <div className="divider"></div>
              <p>Where Green Meets Serenity</p>

              <button
                className="get-started-button"
                onClick={handleGetStarted}
              >
                Get Started
              </button>
            </div>

            <AboutUs />
          </div>
        </div>
      ) : (
        <ProductList onHomeClick={handleHomeClick} />
      )}
    </div>
  );
}

export default App;