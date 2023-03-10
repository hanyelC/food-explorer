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
        750: {
          slidesPerView: 2.5,
        },
        900: {
          slidesPerView: 3.2,
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
