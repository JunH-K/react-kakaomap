/*global kakao*/
import React, { useRef, useEffect, useState } from 'react';

const KakaoMap = (props) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    kakao.maps.load(() => {
      const { latitude, longitude } = props;
      let options = {
        center: new kakao.maps.LatLng(latitude, longitude),
        level: 7,
      };
      setMap(new kakao.maps.Map(mapRef.current, options));
    });
  }, [props]);
  return (
    <div id="map" style={{ width: '500px', height: '500px' }} ref={mapRef}>
      {React.Children.map(props.children, (child) => {
        return React.cloneElement(child, {
          map,
          kakao,
        });
      })}
    </div>
  );
};

export default KakaoMap;
