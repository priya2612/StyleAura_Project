import ProductCard from "../product/ProductCard";
import "./FeaturedProducts.css";
import kurtis from "../../assets/images/featured/Kurti.jpg";
import coord from "../../assets/images/featured/coord.jpg";
import maxi from "../../assets/images/featured/maxi.jpg";
import midi from "../../assets/images/featured/midi.jpg";
import saree from "../../assets/images/featured/saree.jpg";
import shirt from "../../assets/images/featured/shirt.jpg";
import shirt2 from "../../assets/images/featured/shirt2.jpg";


function FeaturedProducts() {

  const products = [

    {
      id: 1,
      name: "Floral Anarkali Kurti",
      category: "Kurtis",
      price: 999,
      oldPrice: 1499,
      discount: "33% OFF",
      rating: 4.8,
      image: kurtis
    },

    {
      id: 2,
      name: "Elegant Maxi Dress",
      category: "Dresses",
      price: 1299,
      oldPrice: 1899,
      discount: "32% OFF",
      rating: 4.7,
      image: maxi
    },

    {
      id: 3,
      name: "Casual Cotton Top",
      category: "Tops",
      price: 699,
      oldPrice: 999,
      discount: "30% OFF",
      rating: 4.6,
      image: shirt
    },

    {
      id: 4,
      name: "Printed Saree",
      category: "Sarees",
      price: 1499,
      oldPrice: 2199,
      discount: "32% OFF",
      rating: 4.9,
      image: saree
    },

    {
      id: 5,
      name: "Co-ord Set",
      category: "Co-ord",
      price: 1799,
      oldPrice: 2499,
      discount: "28% OFF",
      rating: 4.8,
      image: coord
    },

    {
      id: 6,
      name: "Straight Kurti",
      category: "Kurtis",
      price: 899,
      oldPrice: 1299,
      discount: "31% OFF",
      rating: 4.5,
      image: kurtis
    },

    {
      id: 7,
      name: "Office Wear Shirt",
      category: "Western",
      price: 799,
      oldPrice: 1199,
      discount: "33% OFF",
      rating: 4.6,
      image: shirt
    },

    {
      id: 8,
      name: "Pleated Midi Dress",
      category: "Dresses",
      price: 1599,
      oldPrice: 2299,
      discount: "30% OFF",
      rating: 4.9,
      image: midi
    }

  ];

  return (

    <section className="featured-section">

      <div className="container">

        <div className="text-center mb-5">

          <h2 className="section-title">
            Featured Collection
          </h2>

          <p className="section-subtitle">
            Discover our most loved fashion picks.
          </p>

        </div>

        <div className="row g-4">

          {

            products.map(product => (

              <div
                className="col-12 col-sm-6 col-lg-3"
                key={product.id}
              >

                <ProductCard product={product} />

              </div>

            ))

          }

        </div>

      </div>

    </section>

  );

}

export default FeaturedProducts;