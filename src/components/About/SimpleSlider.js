import Slider from "react-slick";
import ProductCard from "./ProductCard";
import dentsu from "../../Assets/dentsu.jpg";
import FishCat from "../../Assets/FishCat.png"
import TeammateMe from "../../Assets/TeammateMe.png";
import Energime from "../../Assets/EnergimeUniversity.png";
export const SimpleSlider = () => {

  const products = [
    {
      image: dentsu,
      title: "Dentsu",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: FishCat,
      title: "FishCat",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: TeammateMe,
      title: "TeammateMe",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: Energime,
      title: "Energime",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {products.map((product, index) => (
        <div key={index}>
          <ProductCard
            image={product.image}
            title={product.title}
            description={product.description}
          />
        </div>
      ))}
    </Slider>


  );
};

export default SimpleSlider;
