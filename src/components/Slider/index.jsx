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
          slidesPerView: 1.3,
        },
        450: {
          slidesPerView: 1.5,
        },
        500: {
          slidesPerView: 1.7,
        },
        600: {
          slidesPerView: 2,
        },
        750: {
          slidesPerView: 2.5,
        },
        900: {
          slidesPerView: 3,
        },
        1050: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3,
        },
      }}
    >
      {products.map((prod) => {
        return (
          <SwiperSlide key={prod.id}>
            <ProductCard
              id={prod.id}
              description={prod.description}
              img={prod.image.id}
              title={prod.name}
              price={prod.price}
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
