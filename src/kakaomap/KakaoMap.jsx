/*global kakao*/
import React, { useRef, useEffect } from 'react';

const KakaoMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src =
      'https://dapi.kakao.com/v2/maps/sdk.js?appkey=a2b28a1779d96d6aa9747db4daa7572e&autoload=false';
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        let options = {
          center: new kakao.maps.LatLng(37.506502, 127.053617),
          level: 7,
        };

        const map = new window.kakao.maps.Map(mapRef.current, options);
      });
    };
  }, []);
  return (
    <div id="map" style={{ width: '500px', height: '500px' }} ref={mapRef} />
  );
};

export default KakaoMap;
