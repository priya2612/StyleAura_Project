// Temporary images
import kurtisBanner from "../assets/images/category/kurtis.jpg";
import westernBanner from "../assets/images/category/western.jpg";
import dressesBanner from "../assets/images/featured/maxi.jpg";
import ethnicBanner from "../assets/images/featured/saree.jpg";
import topsBanner from "../assets/images/featured/shirt.jpg";
import topsBanner2 from "../assets/images/featured/shirt2.jpg";
import bottomBanner from "../assets/images/featured/coord.jpg";

// Temporary banner images
export const banners = {
    "kurtis": kurtisBanner,
    "western-wear": westernBanner,
    "ethnic-wear": ethnicBanner,
    "dresses": dressesBanner,
    "tops": topsBanner,
    "bottom-wear": bottomBanner
};

// Temporary dummy products
export const allProducts = [

    {
        id: 1,
        name: "Floral Kurti",
        category: "kurtis",
        price: 999,
        originalPrice: 1499,
        discount: 33,
        size: "M",
        color: "Purple",
        stockQuantity: 10,
        image: kurtisBanner

    },

    {
        id: 2,
        name: "Cotton Kurti",
        category: "kurtis",
        price: 899,
        originalPrice: 1299,
        discount: 30,
        size: "L",
        color: "Pink",
        stockQuantity: 8,
        image: kurtisBanner
    },

    {
        id: 3,
        name: "Maxi Dress",
        category: "dresses",
        price: 1499,
        originalPrice: 1999,
        discount: 25,
        size: "S",
        color: "Black",
        stockQuantity: 12,
        image: dressesBanner
    }
,
    {
        id: 4,
        name: "Party Dress",
        category: "dresses",
        price: 1799,
         originalPrice: 1999,
        discount: 20,
        size: "M",
        color: "Pink",
        stockQuantity: 12,
        image: dressesBanner
    },

    {
        id: 5,
        name: "Designer Saree",
        category: "ethnic-wear",
        price: 2199,
         originalPrice: 2300,
        discount: 25,
        size: "S",
        color: "Purple",
        stockQuantity: 10,
        image: ethnicBanner
    },

    {
        id: 6,
        name: "Casual Western Top",
        category: "western-wear",
        price: 799,
         originalPrice: 1999,
        discount: 25,
        size: "L",
        color: "White",
        stockQuantity: 9,
        image: westernBanner
    },
    {
        id: 7,
        name: "Casual Western Top",
        category: "tops",
        price: 799,
         originalPrice: 1999,
        discount: 25,
        size: "XL",
        color: "Black",
        stockQuantity: 12,
        image: topsBanner
    },

    {
        id: 9,
        name: "Co-ord set",
        category: "bottom-wear",
        price: 1200,
         originalPrice: 1999,
        discount: 25,
        size: "S",
        color: "Black",
        stockQuantity: 12,
        image: bottomBanner
    }
];

