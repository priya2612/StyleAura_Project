import AdminLayout from "../../components/admin/AdminLayout";
import CategoryTable from "../../components/admin/CategoryTable";

import { categories } from "../../data/categories";

function AdminCategories() {

    return (

        <AdminLayout>

            <CategoryTable

                categories={categories}

            />

        </AdminLayout>

    );

}

export default AdminCategories;