import { useParams } from "react-router-dom";

import AdminLayout from "../../components/admin/AdminLayout";
import ProductForm from "../../components/admin/ProductForm";

import { allProducts } from "../../data/products";

function EditProduct() {

    const { id } = useParams();

    const product = allProducts.find(

        item => item.id === Number(id)

    );

    function handleUpdateProduct(updatedProduct) {

        console.log("Updated Product");

        console.log(updatedProduct);

        alert("Product Updated Successfully");

    }

    if (!product) {

        return (

            <AdminLayout>

                <h3>Product Not Found</h3>

            </AdminLayout>

        );

    }

    return (

        <AdminLayout>

            <h3 className="mb-4">

                Edit Product

            </h3>

            <ProductForm

                initialData={product}

                onSubmit={handleUpdateProduct}

                buttonText="Update Product"

            />

        </AdminLayout>

    );

}

export default EditProduct;