import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../contexts/ProductProvider";
import styled from "styled-components";
import heartGif from "../images/Heart.gif";
import { ButtonContainer } from "./Button";
import { AuthContext } from "../contexts/AuthContext";

const Modal = () => {
  const authContext = useContext(AuthContext);
  return (
    <ProductConsumer>
      {(value) => {
        const { isModal, setIsModal } = value;
        if (!isModal) {
          return null;
        } else {
          if (!authContext.userLogin) {
            return (
              <ModalContainer>
                <ModalContent>
                  <ModalHead onClick={() => setIsModal(!isModal)}>X</ModalHead>
                  <ModalMain>
                    <img src={heartGif} alt="heart" style={{ width: "60px" }} />
                    <div>로그인하면 맛집을 저장할 수 있어요</div>
                  </ModalMain>
                  <Link to="/login" onClick={() => setIsModal(!isModal)}>
                    <ButtonContainer>로그인하러 가기</ButtonContainer>
                  </Link>
                </ModalContent>
              </ModalContainer>
            );
          }
          return (
            <ModalContainer>
              <ModalContent>
                <ModalHead onClick={() => setIsModal(!isModal)}>X</ModalHead>
                <ModalMain>
                  <img src={heartGif} alt="heart" style={{ width: "60px" }} />
                  <div>저장되었습니다</div>
                </ModalMain>
                <Link to="/mypage" onClick={() => setIsModal(!isModal)}>
                  <ButtonContainer>My Page로 가기</ButtonContainer>
                </Link>
              </ModalContent>
            </ModalContainer>
          );
        }
      }}
    </ProductConsumer>
  );
};
export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  // width: 200px;
  height: 150px;
  background: white;
  border-radius: 5px;
  text-align: center;
  padding: 10px 20px 10px 10px;
`;

const ModalHead = styled.div`
  text-align: right;
  cursor: pointer;
`;

const ModalMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;
