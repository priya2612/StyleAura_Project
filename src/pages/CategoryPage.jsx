import { Link, useParams } from "react-router-dom";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import FilterSidebar from "../components/category/FilterSidebar";
import SortBar from "../components/category/SortBar";
import ProductGrid from "../components/product/ProductGrid";

import "./CategoryPage.css";
import {allProducts ,banners} from "../data/products.js";

function CategoryPage() {

    const { slug } = useParams();

    const categoryName = slug
        .replace(/-/g, " ")
        .replace(/\b\w/g, letter => letter.toUpperCase());

   

    const products = allProducts.filter(
        product => product.category === slug
    );

    return (

        <>
            <Navbar />

            <div className="category-page">

                <div className="container">

                    {/* Breadcrumb */}

                    <div className="breadcrumb-custom">

                        <Link to="/">Home</Link>

                        <span> / Women / </span>

                        <span>{categoryName}</span>

                    </div>

                    {/* Category Hero */}

                    <div className="category-header">

                        <div className="row align-items-center">

                            <div className="col-lg-6">

                                <h1>{categoryName} Collection</h1>

                                <p>
                                    Discover elegant fashion curated for every occasion with StyleAura.
                                </p>

                            </div>

                            <div className="col-lg-6 text-center">

                                <img
                                    src={banners[slug]}
                                    alt={categoryName}
                                    className="img-fluid rounded-4 shadow"
                                />

                            </div>

                        </div>

                    </div>

                    {/* Products Section */}

                    <div className="row mt-5">

                        <div className="col-lg-3">

                            <FilterSidebar />

                        </div>

                        <div className="col-lg-9">

                            <SortBar />

                            <ProductGrid products={products} />

                        </div>

                    </div>

                </div>

            </div>

            <Footer />

        </>

    );

}

export default CategoryPage;