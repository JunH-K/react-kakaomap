/*global kakao*/
import React, { useEffect, useState } from 'react';
import KakaoMap from './KakaoMap';
import mock from './mock';

const Container = () => {
  const [latitude, setLatitude] = useState(37.507502);
  const [longitude, setLongitude] = useState(127.053617);

  const onClickUp = () => {
    setLatitude(latitude + 0.001);
  };

  const onClickDown = () => {
    setLatitude(latitude - 0.001);
  };

  const onClickRight = () => {
    setLongitude(longitude + 0.001);
  };

  const onClickLeft = () => {
    setLongitude(longitude - 0.001);
  };

  return (
    <>
      <KakaoMap latitude={37.507502} longitude={127.053617}>
        {mock.map((marker) => {
          return (
            <CustomOverlay
              imageSrc={marker.imageSrc}
              imageSize={{ width: 64, height: 69 }}
              imageOption={{ x: marker.x, y: marker.y }}
              latitude={marker.latitude}
              longitude={marker.longitude}
            />
          );
        })}
      </KakaoMap>
      <button onClick={onClickUp}>위</button>
      <button onClick={onClickDown}>아래</button>
      <button onClick={onClickLeft}>왼쪽</button>
      <button onClick={onClickRight}>오른쪽</button>
    </>
  );
};

const CustomOverlay = ({ imageSrc, map, latitude, longitude, kakao }) => {
  useEffect(() => {
    if (map && kakao) {
      const imageSize = new kakao.maps.Size(64, 69);
      const imageOption = { offset: new kakao.maps.Point(27, 69) };

      const markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      );
      const markerPosition = new kakao.maps.LatLng(latitude, longitude);

      const marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage,
      });

      marker.setMap(map);
    }
  }, [map]);

  return null;
};

export default Container;
