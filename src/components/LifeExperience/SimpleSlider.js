import Slider from "react-slick";
import ProductCard from "./ProductCard";
import dentsu from "../../Assets/dentsu.jpg";
import FishCat from "../../Assets/FishCat.png"
import TeammateMe from "../../Assets/TeammateMe.png";
import headAnon from "../../Assets/headAnon.png"
// import Energime from "../../Assets/EnergimeUniversity.png";
export const SimpleSlider = () => {

  const products = [
    {
      image: headAnon,
      author: "Chase Marlow",
      title:
        "Adobe Target Consultant at Adobe",
        description: "Ramsey is an extremely driven and reliable engineer who solves problems, asks great questions, is always willing to jump in and work towards a solution, and is dedicated to learning and improving. He was an immensely valuable asset to our team and made significant contributions to the experimentation projects we worked on.",
    },
    {
      image: headAnon,
      author: "Suzanne Wagner",
      title:
      "Senior Product Manage",
      description: "Ramsey is a dedicated developer, who drives himself to conquer new challenges at every turn. He is very talented at understanding a complex problem and testing new ways to approach and solve for it",
  },
    {
      image: headAnon,
      author: "John Buchta",
      title:
      "Design Leader",
      description: "Ramsey was always available to brainstorm ideas and has an inherent collaborative nature about his approach to development. I highly recommend Ramsey.",
  },
  {
    image: headAnon,
    author: "Eduardo Valencia",
    title:
    "Full Stack Engineer",
    description: "He is a brilliant developer and is great at problem-solving. I am happy to work alongside him and would recommend him to anyone looking for an experienced programmer.",
},
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4700,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {products.map((product, index) => (
        <div key={index}>
          <ProductCard
            image={product.image}
            author={product.author}
            title={product.title}
            description={product.description}
          />
        </div>
      ))}
    </Slider>


  );
};

export default SimpleSlider;
