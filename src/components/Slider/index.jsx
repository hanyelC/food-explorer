import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'

import { ProductCard } from '../ProductCard'

export function Slider({ products }) {
  return (
    <Swiper
      spaceBetween={40}
      slidesPerView={1}
      breakpoints={{
        400: {
          slidesPerView: 1.3
        },
        450: {
          slidesPerView: 1.5
        },
        500: {
          slidesPerView: 1.7
        },
        600: {
          slidesPerView: 2
        },
        750: {
          slidesPerView: 2.5
        },
        900: {
          slidesPerView: 3
        },
        1050: {
          slidesPerView: 3.5
        },
        1200: {
          slidesPerView: 4
        },

      }}
    >

      {
        products.map((prod) => (
          <SwiperSlide
            key={prod.id}>
            <ProductCard
              description={prod.description}
              img={prod.img}
              title={prod.title}
              price={prod.price}
            />
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}
