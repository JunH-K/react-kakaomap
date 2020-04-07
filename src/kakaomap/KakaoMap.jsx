/*global kakao*/
import React, { useRef, useEffect } from 'react';

const KakaoMap = ({ latitude, longitude }) => {
  const mapRef = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src =
      'https://dapi.kakao.com/v2/maps/sdk.js?appkey=a2b28a1779d96d6aa9747db4daa7572e&autoload=false&libraries=services,clusterer,drawing';
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        let options = {
          center: new kakao.maps.LatLng(latitude, longitude),
          level: 7,
        };

        map.current = new window.kakao.maps.Map(mapRef.current, options);
      });
    };
  }, []);
  return (
    <div id="map" style={{ width: '500px', height: '500px' }} ref={mapRef} />
  );
};

export default KakaoMap;
