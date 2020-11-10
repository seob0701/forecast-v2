import React, { useEffect, useState } from "react";
import "../scss/home.scss";
import Calc from "../components/calc";

import { RenderAfterNavermapsLoaded, NaverMap } from "react-naver-maps";

const naverId = "i1cv4r4vt2";
const naverPw = "FbpAsDoF78HMmkbTlyx4GkUiN0fhZHwi2UDsWJAt";

const Home = () => {
  const [geoLocation, setGeoLocation] = useState({
    y: 37.554722,
    _lat: 37.554722,
    x: 126.970833,
    _lng: 126.970833,
  });

  function NaverMapAPI() {
    return (
      <NaverMap
        mapDivId={"maps-getting-started-uncontrolled"} // default: react-naver-map
        defaultCenter={{ lat: geoLocation.y, lng: geoLocation.x }} // 지도 초기 위치
        defaultZoom={13} // 지도 초기 확대 배율
        onClick={_handleClick}
      />
    );
  }

  const _handleClick = (e) => {
    // console.log(e.coord);
    setGeoLocation(e.coord);
  };

  // useEffect(() => {}, [geoLocation]);

  // console.log(geoLocation);

  return (
    <div className="home">
      <div className="home-box">
        <div className="cabbage-box">
          <div id="map">
            <div>
              <RenderAfterNavermapsLoaded
                ncpClientId={naverId}
                error={<p>Maps Load Error</p>}
                loading={<p>Maps Loading...</p>}
              >
                <NaverMapAPI />
              </RenderAfterNavermapsLoaded>
            </div>
          </div>

          <div className="calc">
            <Calc geoLocation={geoLocation} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
