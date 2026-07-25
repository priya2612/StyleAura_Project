
import { Link, useParams } from "react-router-dom";
import { useMemo, useState } from "react";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import FilterSidebar from "../components/category/FilterSidebar";
import SortBar from "../components/category/SortBar";
import ProductGrid from "../components/product/ProductGrid";

import "./CategoryPage.css";
import { allProducts, banners } from "../data/products.js";

function CategoryPage() {

    const { slug } = useParams();

    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("newest");

    const [selectedPrice, setSelectedPrice] = useState("");

    const [selectedSizes, setSelectedSizes] = useState([]);

    const [selectedColors, setSelectedColors] = useState([]);

    const [selectedDiscount, setSelectedDiscount] = useState("");

    const [inStockOnly, setInStockOnly] = useState(false);

    const categoryName = slug
        .replace(/-/g, " ")
        .replace(/\b\w/g, letter => letter.toUpperCase());



    const categoryProducts = allProducts.filter(
        product => product.category === slug
    );


    const displayedProducts = useMemo(() => {

        let filteredProducts = [...categoryProducts];

        // Search

        if (searchTerm) {

            filteredProducts = filteredProducts.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );

        }
        //filters

        if (selectedPrice === "under500") {
            filteredProducts = filteredProducts.filter(product => product.price < 500);
        }

        if (selectedPrice === "500-1000") {
            filteredProducts = filteredProducts.filter(
                product => product.price >= 500 && product.price <= 1000
            );
        }

        if (selectedPrice === "1000-2000") {
            filteredProducts = filteredProducts.filter(
                product => product.price > 1000 && product.price <= 2000
            );
        }
        //size
        if (selectedPrice === "2000+") {
            filteredProducts = filteredProducts.filter(product => product.price > 2000);
        }

        if (selectedSizes.length > 0) {

            filteredProducts = filteredProducts.filter(product =>
                selectedSizes.includes(product.size)
            );

        }
        //color
        if (selectedColors.length > 0) {

            filteredProducts = filteredProducts.filter(product =>
                selectedColors.includes(product.color)
            );

        }
        //discount
        if (selectedDiscount) {

            filteredProducts = filteredProducts.filter(product =>
                product.discount >= selectedDiscount
            );

        }
        //availability
        if (inStockOnly) {

            filteredProducts = filteredProducts.filter(product =>
                product.stockQuantity > 0
            );

        }
        // Sorting

        switch (sortBy) {

            case "price-low":

                filteredProducts.sort((a, b) => a.price - b.price);

                break;

            case "price-high":

                filteredProducts.sort((a, b) => b.price - a.price);

                break;

            case "discount":

                filteredProducts.sort((a, b) => b.discount - a.discount);

                break;

            case "name":

                filteredProducts.sort((a, b) =>
                    a.name.localeCompare(b.name)
                );

                break;

            default:
                break;

        }

        return filteredProducts;

    }, [categoryProducts,
        searchTerm,
        sortBy,
        selectedPrice,
        selectedSizes,
        selectedColors,
        selectedDiscount,
        inStockOnly]);

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

                            {/* <FilterSidebar /> */}
                            <FilterSidebar

                                selectedPrice={selectedPrice}
                                setSelectedPrice={setSelectedPrice}

                                selectedSizes={selectedSizes}
                                setSelectedSizes={setSelectedSizes}

                                selectedColors={selectedColors}
                                setSelectedColors={setSelectedColors}

                                selectedDiscount={selectedDiscount}
                                setSelectedDiscount={setSelectedDiscount}

                                inStockOnly={inStockOnly}
                                setInStockOnly={setInStockOnly}

                            />

                        </div>

                        <div className="col-lg-9">

                            <SortBar
                                totalProducts={displayedProducts.length}
                                searchTerm={searchTerm}
                                setSearchTerm={setSearchTerm}
                                sortBy={sortBy}
                                setSortBy={setSortBy}
                            />

                            <ProductGrid products={displayedProducts} />

                        </div>

                    </div>

                </div>

            </div>

            <Footer />

        </>

    );

}

export default CategoryPage;