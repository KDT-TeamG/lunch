import { isMobile } from "react-device-detect";
import { Image } from "semantic-ui-react";
import "./MobileView.scss";
import mobileFace from "../../images/mobileFace.png";

const MobileView = () => {
  return (
    <div className="MobileView">
      <Image src={mobileFace} className="faceImg" />
      <h3>본 사이트는 PC버전만 지원해요</h3>
      <p>👇 모바일 접속은 여기로 👇</p>
    </div>
  );
};
export default MobileView;
