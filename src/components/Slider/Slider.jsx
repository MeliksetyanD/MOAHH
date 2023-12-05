import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css'
import styles from './Slider.module.css'
import pic from '../../images/main.jpg'
import pic2 from '../../images/main2.jpg'
import pic3 from '../../images/main3.jpg'
import { Link } from 'react-router-dom'
const slideImages = [
  {
    url: pic,
    caption: 'Slide 1',
  },
  {
    url: pic2,
    caption: 'Slide 2',
  },
  {
    url: pic3,
    caption: 'Slide 3',
  },
]
const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
    >
      {slideImages.map((el, index) => (
        <SwiperSlide key={index}>
          <div
            className={styles.mainDiv}
            style={{ backgroundImage: `url(${el.url})` }}
          >
            <h1>Gold big hoops</h1>
            <div className={styles.price}>$ 68.00</div>
            <Link to={'/item1'} className={styles.btn}>
              View Product
            </Link>
          </div>
        </SwiperSlide>
      ))}
      .
    </Swiper>
  )
}

export default Slider
