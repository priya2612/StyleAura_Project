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
        "tops":topsBanner,
        "tops":topsBanner2,
        "bottom-wear":bottomBanner
    };

    // Temporary dummy products
   export  const allProducts = [

        {
            id: 1,
            name: "Floral Kurti",
            category: "kurtis",
            price: 999,
            image: kurtisBanner
        },

        {
            id: 2,
            name: "Cotton Kurti",
            category: "kurtis",
            price: 899,
            image: kurtisBanner
        },

        {
            id: 3,
            name: "Maxi Dress",
            category: "dresses",
            price: 1499,
            image: dressesBanner
        },

        {
            id: 4,
            name: "Party Dress",
            category: "dresses",
            price: 1799,
            image: dressesBanner
        },

        {
            id: 5,
            name: "Designer Saree",
            category: "ethnic-wear",
            price: 2199,
            image: ethnicBanner
        },

        {
            id: 6,
            name: "Casual Western Top",
            category: "western-wear",
            price: 799,
            image: westernBanner
        },
        {
            id: 7,
            name: "Casual Western Top",
            category: "tops",
            price: 799,
            image: topsBanner
        },

        {
            id: 8,
            name: "Casual Western Top",
            category: "tops",
            price: 900,
            image: topsBanner2
        }
        ,{
            id: 9,
            name: "Co-ord set",
            category: "bottom-wear",
            price: 1200,
            image: bottomBanner
        }
    ];

     