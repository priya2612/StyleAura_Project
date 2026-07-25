import { useMemo, useState } from "react";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import FilterSidebar from "../components/category/FilterSidebar";
import SortBar from "../components/category/SortBar";
import ProductGrid from "../components/product/ProductGrid";

import { allProducts } from "../data/products";

import "./AllProducts.css";

function AllProducts() {

    const [searchTerm, setSearchTerm] = useState("");

    const [sortBy, setSortBy] = useState("newest");

    const displayedProducts = useMemo(() => {

        let filtered = [...allProducts];

        if (searchTerm) {

            filtered = filtered.filter(product =>

                product.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())

            );

        }

        switch (sortBy) {

            case "price-low":

                filtered.sort((a, b) => a.price - b.price);

                break;

            case "price-high":

                filtered.sort((a, b) => b.price - a.price);

                break;

            case "discount":

                filtered.sort((a, b) => b.discount - a.discount);

                break;

            case "name":

                filtered.sort((a, b) =>
                    a.name.localeCompare(b.name)
                );

                break;

            default:

                break;

        }

        return filtered;

    }, [searchTerm, sortBy]);

    return (

        <>

            <Navbar />

            <div className="all-products-page">

                <div className="container">

                    {/* Header */}

                    <div className="all-products-header">

                        <h1>All Products</h1>

                        <p>

                            Explore every women's fashion collection at StyleAura.

                        </p>

                    </div>

                    <div className="row">

                        <div className="col-lg-3">

                            <FilterSidebar />

                        </div>

                        <div className="col-lg-9">

                            <SortBar

                                totalProducts={displayedProducts.length}

                                searchTerm={searchTerm}

                                setSearchTerm={setSearchTerm}

                                sortBy={sortBy}

                                setSortBy={setSortBy}

                            />

                            <ProductGrid

                                products={displayedProducts}

                            />

                        </div>

                    </div>

                </div>

            </div>

            <Footer />

        </>

    );

}

export default AllProducts;