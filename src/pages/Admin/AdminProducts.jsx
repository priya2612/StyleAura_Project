import AdminLayout from "../../components/admin/AdminLayout";
import ProductTable from "../../components/admin/ProductTable";

import { allProducts } from "../../data/products";

function AdminProducts() {

    return (

        <AdminLayout>

            <ProductTable

                products={allProducts}

            />

        </AdminLayout>

    );

}

export default AdminProducts;