import React, { useEffect } from 'react';

import Head from 'next/head';

declare const window : typeof globalThis & {
    kakao : any
}

interface MapProps {
    lat? : number;
    lng? : number;
}

const Map : React.FC<MapProps> = ({
    lat = 33.450701,
    lng = 126.570667,
}) => {

    useEffect(() => {
        // 여기서 직접 다운로드 받고, 다 받을때까지 기다렸다가 그려주기!!
        const script = document.createElement("script"); // html에 script라는 태그(Element)를 만든다.
        script.src =
          `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&autoload=false`;
        document.head.appendChild(script);

        script.onload = () => {
              window.kakao.maps.load(() => {
                    const container = document.getElementById("map");
                    const options = {
                        center: new window.kakao.maps.LatLng(lat, lng),
                        level: 3,
                    };
                    const map = new window.kakao.maps.Map(container, options);
                    const markerPosition  = new window.kakao.maps.LatLng(lat, lng);
                    const marker = new window.kakao.maps.Marker({
                        position: markerPosition
                    });

                    marker.setMap(map);
                }
            )
        }
      }, [lat, lng])



    return (
        <>
            <Head>
            </Head>
            <div>
                <div id="map" style={{height: '400px'}}></div>
            </div>
        </>
    );
};

export default Map;