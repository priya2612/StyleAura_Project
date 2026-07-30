import { useState } from "react";
import "./ProductForm.css";

function ProductForm({ initialData = {}, onSubmit, buttonText }) {

    const [formData, setFormData] = useState({

        name: initialData.name || "",

        category: initialData.category || "",

        price: initialData.price || "",

        originalPrice: initialData.originalPrice || "",

        stockQuantity: initialData.stockQuantity || "",

        size: initialData.size || "",

        color: initialData.color || "",

        description: initialData.description || "",

        image: initialData.image || ""

    });

    function handleChange(e) {

        const { name, value } = e.target;

        setFormData(prev => ({

            ...prev,

            [name]: value

        }));

    }

    function handleSubmit(e) {

        e.preventDefault();

        onSubmit(formData);

    }

    return (

        <form
            className="product-form"
            onSubmit={handleSubmit}
        >

            <div className="row">

                <div className="col-md-6 mb-3">

                    <label>Product Name</label>

                    <input

                        type="text"

                        name="name"

                        className="form-control"

                        value={formData.name}

                        onChange={handleChange}

                        required

                    />

                </div>

                <div className="col-md-6 mb-3">

                    <label>Category</label>

                    <select

                        name="category"

                        className="form-select"

                        value={formData.category}

                        onChange={handleChange}

                        required

                    >

                        <option value="">Select Category</option>

                        <option value="kurtis">Kurtis</option>

                        <option value="dresses">Dresses</option>

                        <option value="ethnic-wear">Ethnic Wear</option>

                        <option value="western-wear">Western Wear</option>

                        <option value="tops">Tops</option>

                        <option value="bottom-wear">Bottom Wear</option>

                    </select>

                </div>

            </div>

            <div className="row">

                <div className="col-md-4 mb-3">

                    <label>Price</label>

                    <input

                        type="number"

                        name="price"

                        className="form-control"

                        value={formData.price}

                        onChange={handleChange}

                    />

                </div>

                <div className="col-md-4 mb-3">

                    <label>Original Price</label>

                    <input

                        type="number"

                        name="originalPrice"

                        className="form-control"

                        value={formData.originalPrice}

                        onChange={handleChange}

                    />

                </div>

                <div className="col-md-4 mb-3">

                    <label>Stock</label>

                    <input

                        type="number"

                        name="stockQuantity"

                        className="form-control"

                        value={formData.stockQuantity}

                        onChange={handleChange}

                    />

                </div>

            </div>

            <div className="row">

                <div className="col-md-6 mb-3">

                    <label>Size</label>

                    <input

                        type="text"

                        name="size"

                        className="form-control"

                        value={formData.size}

                        onChange={handleChange}

                    />

                </div>

                <div className="col-md-6 mb-3">

                    <label>Color</label>

                    <input

                        type="text"

                        name="color"

                        className="form-control"

                        value={formData.color}

                        onChange={handleChange}

                    />

                </div>

            </div>

            <div className="mb-3">

                <label>Image URL</label>

                <input

                    type="text"

                    name="image"

                    className="form-control"

                    value={formData.image}

                    onChange={handleChange}

                />

            </div>

            <div className="mb-4">

                <label>Description</label>

                <textarea

                    rows="4"

                    name="description"

                    className="form-control"

                    value={formData.description}

                    onChange={handleChange}

                />

            </div>

            <button
                className="btn btn-primary"
                type="submit"
            >

                {buttonText}

            </button>

        </form>

    );

}

export default ProductForm;