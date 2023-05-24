import React from 'react';

import styled from '@emotion/styled'

import Slider from 'react-slick'

interface ImageSliderProps {
    images : string[]
    width? : number;
    height? : number;
}

const ImageSliderContainer = styled.div<{
    width? : number;
    height? : number;
}>`
    width : ${(props) => props.width ? `${props.width}px` : '100px'};
    height : ${(props) => props.height ? `${props.height}px` : '100px'};
    overflow: auto;
`

const ImageSlider : React.FC<ImageSliderProps> = ({
    images,
    width,
    height
}) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    if(!images?.length) {
        return null;
    }

    return (
        <ImageSliderContainer width={width} height={height}>
            <Slider {...settings}>
                {images.map((url, i) => (
                    <img src={`https://storage.googleapis.com/${url}`} key={i} />
                ))}
            </Slider>
        </ImageSliderContainer>
    );
};

export default ImageSlider;