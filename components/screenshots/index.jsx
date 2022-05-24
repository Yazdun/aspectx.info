import css from './styles.module.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, FreeMode } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/lazy'

// import required modules
import { Pagination, Lazy } from 'swiper'

export function Screenshots({ screenshots }) {
  SwiperCore.use([Autoplay])

  return (
    <div className={css.container}>
      <Swiper
        style={{
          '--swiper-pagination-color': 'hsl(247, 82%, 66%)',
        }}
        lazy={true}
        slidesPerView={'auto'}
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Lazy, Autoplay, FreeMode]}
        className={css.slider}
        autoplay={{ delay: 3000 }}
      >
        {screenshots?.map((sc, idx) => {
          return (
            <SwiperSlide key={idx}>
              <div className={css.image}>
                <img src={sc.image} alt="" className={css.image} />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
