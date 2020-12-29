import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { EffectFade } from "swiper";
import urlFor from "../utils/imageBuilder";
import styles from "./Swipe.module.css";

import { useRef } from "react";

SwiperCore.use([EffectFade]);
SwiperCore.use([Navigation, Pagination, A11y]);
SwiperCore.use([Autoplay]);

const Swipe = ({ image, auto }) => {
  const swiper = useRef();
  if (auto == false)
    return (
      <div className={styles.swipes}>
        <Swiper
          ref={swiper}
          slidesPerView={1}
          effect="fade"
          navigation
          pagination={{ clickable: true }}
          updateOnImagesReady={true}
          onImagesReady={(swiper) => {
            document.getElementsByClassName(
              "swiper-pagination"
            )[0].style.visibility = "visible";
          }}
        >
          {image.map((img, index) => {
            return (
              <SwiperSlide key={index}>
                <div className={styles.imgs}>
                  <img src={urlFor(img)} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    );
  if (auto == true)
    return (
      <>
        <div className={styles.swipes}>
          <Swiper
            ref={swiper}
            slidesPerView={1}
            effect="fade"
            navigation
            pagination={{ clickable: true }}
            updateOnImagesReady={true}
            onImagesReady={(swiper) => {
              document.getElementsByClassName(
                "swiper-pagination"
              )[0].style.visibility = "visible";
            }}
            autoplay={{
              disableOnInteraction: false,
              waitForTransition: true,

              delay: 6000,
            }}
          >
            {image.map((img, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className={styles.imgs}>
                    <img src={urlFor(img)} />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </>
    );
};

export default Swipe;
