import "./HeroBanner.css";
//import heroImage from "../../assets/images/hero-banner.png";
import heroImage from "../../assets/images/hero-banner.jpg";

function HeroBanner() {
  return (
    <section className="hero-section">
      <div className="container">

        <div className="row align-items-center">

          {/* Left Content */}

          <div className="col-lg-6 text-center text-lg-start">

            <span className="hero-tag">
              ✨ New Collection 2026
            </span>

            <h1 className="hero-title mt-3">
              {/* Discover Your */}
              Elevate Your

              <span> Everyday Elegance</span>
            </h1>

            <p className="hero-text mt-4">

              Explore elegant kurtis, dresses, tops and
              western wear crafted to celebrate your style.

            </p>

            <button className=" hero-btn mt-4">

              Shop Now

            </button>

          </div>

          {/* Right Image */}

          <div className="col-lg-6 text-center">

            <img
              src={heroImage}
              alt="StyleAura Women's Fashion"
              className="img-fluid hero-image"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroBanner;