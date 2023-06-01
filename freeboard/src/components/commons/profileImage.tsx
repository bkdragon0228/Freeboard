import React from 'react';

import styled from '@emotion/styled'

interface ProfileImageProps {
    url : string;
    width? : number;
    height? : number;
    isCircle? : boolean;
}

const StyledProfile = styled.div<ProfileImageProps>`
    width: ${(props) => `${props.width}px`};
    height: ${(props) => `${props.width}px`};
    border : 1px solid lightgray;
    border-radius : ${(props) => props.isCircle ? "50%" : '0'};
    background-image : url(${(props) => props.url ? props.url : '/images/placeholder.png'});
    background-repeat : no-repeat;
    background-size : contain;
    cursor: pointer;

    &:hover {
        border-color : black;
    }
`

const ProfileImage : React.FC<ProfileImageProps> = ({
    url,
    width = 50,
    height = 50,
    isCircle = true,
}) => {
    const props : ProfileImageProps = {
         width,
         height,
         isCircle,
         url
    }
    return (
        <StyledProfile {...props}/>
    );
};

export default ProfileImage;