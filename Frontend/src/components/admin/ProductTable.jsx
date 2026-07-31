import { Link } from "react-router-dom";
import "./ProductTable.css";

function ProductTable({ products }) {

    return (

        <div className="product-table-wrapper">

            <div className="table-header">

                <h3>Products</h3>

                <Link
                    to="/admin/products/add"
                    className="btn btn-primary"
                >
                    <i className="bi bi-plus-circle me-2"></i>

                    Add Product
                </Link>

            </div>

            <table className="table align-middle">

                <thead>

                    <tr>

                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        products.map(product => (

                            <tr key={product.id}>

                                <td>

                                    <img

                                        src={product.image}

                                        alt={product.name}

                                        className="table-product-image"

                                    />

                                </td>

                                <td>

                                    {product.name}

                                </td>

                                <td>

                                    {product.category}

                                </td>

                                <td>

                                    ₹{product.price}

                                </td>

                                <td>

                                    {product.stockQuantity}

                                </td>

                                <td>

                                    <Link

                                        to={`/admin/products/edit/${product.id}`}

                                        className="btn btn-sm btn-warning me-2"

                                    >

                                        <i className="bi bi-pencil"></i>

                                    </Link>

                                    <button

                                        className="btn btn-sm btn-danger"

                                        onClick={() => {

                                            const confirmDelete = window.confirm(

                                                "Are you sure you want to delete this product?"

                                            );

                                            if (confirmDelete) {

                                                alert("Product Deleted Successfully");

                                            }

                                        }}

                                    >

                                        <i className="bi bi-trash"></i>

                                    </button>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default ProductTable;