import Image from "next/image";
import styled from "styled-components";

export const LanguagesIconContainer = styled.div`
  height: 30px;
  width: 30px;
`;

export const LanguagesIcon = styled(Image)`
  object-fit: fill;
  width:100%;
  height:100%;
`;

export const ButtonContainers = styled.button`
    all: unset;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    min-width: 90%;
    height: 50px;
    gap: 10px;
    padding-left: 10%;
    border-bottom: 1px solid #D9D9D959;
    &:nth-last-child(2) {
        border-bottom: 1px solid transparent;
    }
`;

export const LanguageContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 330px;
    bottom: 10vh;
    height: 130px;
    background-color:  #D9D9D959;
    justify-content: center;
    font-size: 18px;
    z-index: 10;
    border-radius: 10px;
    backdrop-filter: blur(100px);
    opacity: 0;
`;

export const DialogIconContainer = styled.div`
    position: absolute;
    bottom:-18px;
    left: 50%;
    transform: translate(-50%, 0);
    height: 20px;
    width: 25px;
`;

export const DialogIcon = styled(Image)`
  object-fit: fill;
  width:100%;
  height:100%;
`;