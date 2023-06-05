import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'

interface CarouselProps {
  images ? : string[]
  setting ? : {}
}
const Carousel : React.FC<CarouselProps> = ({
  images = [
    '/images/image.png',
    '/images/image 01.png',
    '/images/image 02.png',
    '/images/image 03.png',
  ],
  setting = {
    dots : true,
    arrows : true,
    infinite : true,
    speed : 500,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    appendDots: (dots: any) => (
      <div
        style={{
          width: '100%',
          position: 'absolute',
          bottom: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
    dotsClass : 'dots_custom'
  }
}) => {


  return (
    <div className='carousel'>
        <Slider {...setting}>
           {images.map((url, index) => (
                <Image src={url} key={index} alt={`Carousel Image ${index}`} height={400} width={100}/>
           ))}
        </Slider>
    </div>
  )
}


export default Carousel