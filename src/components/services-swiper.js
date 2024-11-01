import * as React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCheck,
    faGlobe,
    faBuilding,
    faMoneyCheckDollar,
    faMicrochip,
    faPersonCircleCheck,
    faFlagUsa,
  } from '@fortawesome/free-solid-svg-icons'

const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
    },
}

const ServicesSwiper = () => {
    return(
        <>
            <Swiper autoplay={{
                            delay: 7500,
                            disableOnInteraction: true,
                        }} 
                    pagination={pagination} 
                    modules={[Autoplay, Pagination]} 
                    className="services-swiper">
                <SwiperSlide>
                    <div className="services-swiper-slide">
                        <p><span><FontAwesomeIcon icon={faCheck} /></span>Data driven recruitment</p>
                        <p><span><FontAwesomeIcon icon={faCheck} /></span>Monthly contracted hiring resources</p>
                        <p><span><FontAwesomeIcon icon={faCheck} /></span>Pipeline building and account management services</p>
                        <p><span><FontAwesomeIcon icon={faCheck} /></span>Successful LinkedIn campaigns</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="services-swiper-slide">
                        <p><span><FontAwesomeIcon icon={faGlobe} /></span>2019: 38 staff hired across 4 locations in 12 months - USA, Spain, Japan and UK</p>
                        <p><span><FontAwesomeIcon icon={faBuilding} /></span>Company entities created in the UK and an office in Madrid created in that time</p>
                        <p><span><FontAwesomeIcon icon={faMoneyCheckDollar} /></span>Company is now formerly known as IBM after acquisition</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="services-swiper-slide">
                        <p><span><FontAwesomeIcon icon={faMicrochip} /></span>2022: 20 requirements to build a EMEA Engineering team in Spain and sales organisation in the USA</p>
                        <p><span><FontAwesomeIcon icon={faPersonCircleCheck} /></span>On track to deliver 15 headcount in the engineering team by late 2022</p>
                        <p><span><FontAwesomeIcon icon={faFlagUsa} /></span>Building a product development team in the USA</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default ServicesSwiper