import p1_img from "./male01_front.jpg";
import p1_hover_img from "./male01_hover.jpg";
import p2_img from "./male02_front.jpg";
import p2_hover_img from "./male02_hover.jpg";
import p7_img from "./female01_front.jpg";
import p7_hover_img from "./female01_hover.jpg";
import p8_img from "./female02_front.jpg";
import p8_hover_img from "./female02_hover.jpg";

let related_product = [
  {
    id: 1,
    name: "Urban edge men's tee",
    category: "men",
    image: p1_img,
    hover_image: p1_hover_img,
    old_price: 49.00,
  },
  {
    id: 2,
    name: "Adventure seeker tee",
    category: "men",
    image: p2_img,
    hover_image: p2_hover_img,
    new_price: 80.49,
    old_price: 99.99,
  },
  {
    id: 7,
    name: "Retro revival t-shirt",
    category: "women",
    image: p7_img,
    hover_image: p7_hover_img,
    old_price: 105.49,
  },
  {
    id: 8,
    name: "Classic comfort crewneck",
    category: "women",
    image: p8_img,
    hover_image: p8_hover_img,
    old_price: 49.00,
  }
]

export default related_product;