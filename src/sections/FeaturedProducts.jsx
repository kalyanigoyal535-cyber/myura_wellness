import React, { useEffect } from 'react';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PRODUCTS = [
  { id: 'p1', title: 'Bone & Joint Support', price: 1299, oldPrice: 1499, img: '/assets/BoneAndJoint.jpg' },
  { id: 'p2', title: 'Dia Care', price: 1190, oldPrice: 1499, img: '/assets/DIACARE.jpg' },
  { id: 'p3', title: 'Gut & Digestion', price: 980, oldPrice: 1199, img: '/assets/GutAndDigestion.jpg' },
  { id: 'p4', title: 'Liver Detox', price: 1320, oldPrice: 1990, img: '/assets/LiverDetox.jpg' },
  { id: 'p5', title: 'Immunity Boost', price: 1450, oldPrice: 1799, img: '/assets/ImmunityBoost.jpg' },
  { id: 'p6', title: 'Energy Support', price: 1199, oldPrice: 1499, img: '/assets/EnergySupport.jpg' }
];

export default function FeaturedProducts() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' });
    AOS.refresh();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ],
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="py-16 bg-emerald-50">
      <div className="container-custom">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-emerald-700 mb-12 text-center"
          data-aos="fade-down"
          data-aos-duration="1200"
        >
          Featured Products
        </h2>

        <Slider {...settings}>
          {PRODUCTS.map((product, index) => (
            <div
              key={product.id}
              className="p-2"
              data-aos="fade-up"
              data-aos-delay={index * 150}
              data-aos-duration="1000"
            >
              <div className="bg-white rounded-2xl shadow-lg transition-shadow duration-300 p-4 flex flex-col items-center">
                <div className="w-full h-48 md:h-56 mb-4 overflow-hidden rounded-xl">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-emerald-800 text-center">
                  {product.title}
                </h3>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-emerald-700 font-bold text-lg md:text-xl">₹{product.price}</span>
                  <span className="text-gray-400 line-through text-sm md:text-base">₹{product.oldPrice}</span>
                </div>
                <button className="mt-4 w-full bg-gradient-to-r from-emerald-500 to-emerald-700 text-white py-2 md:py-3 rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-emerald-400/50 transition-all duration-300">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
