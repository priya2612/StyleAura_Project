import AdminLayout from "../../components/admin/AdminLayout";
import ProductForm from "../../components/admin/ProductForm";

function AddProduct() {

    function handleAddProduct(data) {

        console.log("New Product");

        console.log(data);

        alert("Product Added Successfully");

    }

    return (

        <AdminLayout>

            <h3 className="mb-4">

                Add Product

            </h3>

            <ProductForm

                onSubmit={handleAddProduct}

                buttonText="Add Product"

            />

        </AdminLayout>

    );

}

export default AddProduct;