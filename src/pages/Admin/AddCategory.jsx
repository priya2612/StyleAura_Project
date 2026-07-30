import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddCategory.css";
import AdminLayout from "../../components/admin/AdminLayout";

function AddCategory() {

    const navigate = useNavigate();

    const [categoryName, setCategoryName] = useState("");

    const [slug, setSlug] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!categoryName || !slug) {

            alert("Please fill all fields.");

            return;

        }

        console.log({

            name: categoryName,

            slug: slug

        });

        alert("Category Added Successfully");

        navigate("/admin/categories");

    };

    return (

        <AdminLayout>

            <div className="category-form-card">

                <h3 className="mb-4">
                    Add Category
                </h3>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">

                        <label className="form-label">
                            Category Name
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter category name"
                            value={categoryName}
                            onChange={(e) =>
                                setCategoryName(e.target.value)
                            }
                        />

                    </div>

                    <div className="mb-4">

                        <label className="form-label">
                            Category Slug
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Example: western-wear"
                            value={slug}
                            onChange={(e) =>
                                setSlug(e.target.value)
                            }
                        />

                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary me-2"
                    >
                        Add Category
                    </button>

                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => navigate("/admin/categories")}
                    >
                        Cancel
                    </button>

                </form>

            </div>

        </AdminLayout>

    );

}

export default AddCategory;