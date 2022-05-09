import React from 'react';
import './testimonials.css';
import c1 from '../../assets/c1.jpg'
import c2 from '../../assets/c2.png'
import c3 from '../../assets/c3.jpg'
import c4 from '../../assets/c4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

const clientData = [
  {
    id: 1,
    cName: 'Client-1',
    image: c1,
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt assumenda quas aspernatur dicta fuga possimus. Eaque, ipsa quidem dolore itaque a labore, ipsum commodi libero repudiandae expedita deleniti.'
  },
  {
    id: 2,
    cName: 'Client-2',
    image: c2,
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt assumenda quas aspernatur dicta fuga possimus. Eaque, ipsa quidem dolore itaque a labore, ipsum commodi libero repudiandae expedita deleniti.'
  },
  {
    id: 3,
    cName: 'Client-3',
    image: c3,
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt assumenda quas aspernatur dicta fuga possimus. Eaque, ipsa quidem dolore itaque a labore, ipsum commodi libero repudiandae expedita deleniti.'
  },
  {
    id: 4,
    cName: 'Client-4',
    image: c4,
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt assumenda quas aspernatur dicta fuga possimus. Eaque, ipsa quidem dolore itaque a labore, ipsum commodi libero repudiandae expedita deleniti.'
  }
];

// var swiper = new Swiper('.testimonials__container', {
//   pagination: '.swiper-pagination',
//   slidesPerView: 1,
//   paginationClickable: true,
//   spaceBetween: 30
// });

const testimonials = () => {

  return (
    <section id='testimonials'>
      
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <div className="swiper">

        <div className="container testimonials__container swiper-wrapper">

          {
            clientData.map(({id, cName, image, review}) => {
              return (
                <article key={id} className="testimonial swiper-slide">

                  <div className="client__image">
                    
                    <img src={image} alt="Can't Load" />

                  </div>
                  <h5 className='client__name'>{cName}</h5>
                  <small className='client__review'>{review}</small>
                </article>
              );
            })
          }

        </div>

      </div>

    </section>
  )
}

export default testimonials;