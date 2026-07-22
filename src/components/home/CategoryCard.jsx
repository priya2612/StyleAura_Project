function CategoryCard({category}){

return(

<div className="category-card">

<img
src={category.image}
alt={category.name}
className="category-image"
/>

<div className="category-overlay">

<h3>

{category.name}

</h3>

<button>

Explore Collection

<i className="bi bi-arrow-right ms-2"></i>

</button>

</div>

</div>

)

}

export default CategoryCard;