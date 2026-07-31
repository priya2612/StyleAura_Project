import "./CategoryTable.css";
import { useNavigate } from "react-router-dom";

function CategoryTable({ categories }) {

    const navigate = useNavigate();
    function handleEdit(category) {

        alert(`Edit ${category.name}`);

    }

    function handleDelete(category) {

        const confirmDelete = window.confirm(

            `Delete "${category.name}" category?`

        );

        if (confirmDelete) {

            alert("Category Deleted Successfully");

        }

    }

    return (

        <div className="category-table-wrapper">

            <div className="table-header">

                <h3>

                    Categories

                </h3>

                <button
                    className="btn btn-primary"
                    onClick={() => navigate("/admin/categories/add")}
                >

                    <i className="bi bi-plus-circle me-2"></i>

                    Add Category

                </button>

            </div>

            <table className="table align-middle">

                <thead>

                    <tr>

                        <th>Image</th>

                        <th>Name</th>

                        <th>Slug</th>

                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        categories.map(category => (

                            <tr key={category.id}>

                                <td>

                                    <img

                                        src={category.image}

                                        alt={category.name}

                                        className="category-image"

                                    />

                                </td>

                                <td>

                                    {category.name}

                                </td>

                                <td>

                                    {category.slug}

                                </td>

                                <td>

                                    <button

                                        className="btn btn-warning btn-sm me-2"

                                        onClick={() => handleEdit(category)}

                                    >

                                        <i className="bi bi-pencil"></i>

                                    </button>

                                    <button

                                        className="btn btn-danger btn-sm"

                                        onClick={() => handleDelete(category)}

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

export default CategoryTable;