import CategoryCard from "./CategoryCard";
import "./CategorySection.css";
import kurtis from "../../assets/images/category/kurtis.jpg";
import western from "../../assets/images/category/western.jpg";

function CategorySection() {

const categories=[

{
id:1,
name:"Ethnic Wear",
image:"https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=700&auto=format&fit=crop"
},

{
id:2,
name:"Western Wear",
image:"https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=700&auto=format&fit=crop"
},

{
id:3,
name:"Kurtis",
image:kurtis
},

{
id:4,
name:"Dresses",
image:"https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700&auto=format&fit=crop"
},

{
id:5,
name:"Tops",
image:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=700&auto=format&fit=crop"
},

{
id:6,
name:"Bottom Wear",
image:"https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=700&auto=format&fit=crop"
}

];

return(

<section className="category-section">

<div className="container">

<div className="section-heading text-center">

<h2>Shop By Category</h2>

<p>
Discover timeless fashion curated just for you.
</p>

</div>

<div className="row g-4 mt-4">

{

categories.map(category=>(

<div
className="col-12 col-sm-6 col-lg-4"
key={category.id}
>

<CategoryCard category={category}/>

</div>

))

}

</div>

</div>

</section>

)

}

export default CategorySection;