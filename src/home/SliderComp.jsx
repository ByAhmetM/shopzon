import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      {" "}
      <Slider {...settings}>
        <div className="!flex items-center">
          <div className="text-5xl font-bold">
            En Kaliteli Ayakkabılar Burada
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            voluptates eligendi cupiditate aut fugit qui accusamus quas,
            possimus debitis. Velit ea quidem facilis nemo perferendis cum iusto
            incidunt iste recusandae?
          </div>
          <div>İncele</div>
          <img
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-GjGXSP.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2eff461f-f3ac-4285-9c6a-2f22173aac42/custom-nike-air-force-1-low-by-you.png"
            alt=""
          />
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
