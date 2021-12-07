import styled from "styled-components";
import BgImg from "./assets/img/omen.png";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  background-image: url(${BgImg});
  background-size: cover;
`;

export const ContainerMask = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.section`
  width: 1600px;
  height: 900px;
  padding: 0 151px;
`;

export const ContentHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;

    color: #ffffff;
  }
`;

export const ContentBody = styled.div`
  width: 100%;
  display: flex;
`;

export const ContentBodyLeft = styled.div`
  flex: 1;
  padding: 210px 0 0 0;

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    text-transform: uppercase;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #fff;
    color: transparent;
    margin-bottom: 53px;
  }

  div {
    width: 100%;
    display: flex;
    gap: 28px;

    div {
      width: 170px;
      height: 170px;
      background-color: transparent;
      border: 2px solid #fff;
      border-radius: 15px 0 0 0;
      position: relative;
      margin-bottom: 20px;

      img {
        position: absolute;
        top: 5px;
        left: 5px;
        width: 170px;
        background-color: #ff4656;
        border: 2px solid #fff;
        border-radius: 15px 0 0 0;
      }
    }
  }
`;

export const Names = styled.div`
  width: 100%;
  padding: 0 70px;
  gap: 160px !important;
  margin-bottom: 240px;

  p {
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    letter-spacing: 0.1em;

    color: #ff4656;
  }
`;

export const ContentBodyRight = styled.div`
  display: flex;
  flex: 1;
  justify-content: end;
  align-items: flex-end;

  img {
    position: absolute;
    bottom: 0;
    right: 24px;
  }

  div {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    bottom: 15px;
    right: 125px;
    border-right: 1px solid #ff4656;
    padding: 0 15px 0 0;

    p {
      font-weight: bold;
      font-size: 72px;
      color: #fff;
      position: relative;
      z-index: 99;
      margin-bottom: -15px;
    }
  }
`;

export const Year = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 65px !important;
  right: 25px !important;
  border: none !important;

  span {
    font-size: 30px;
    color: #ff4656;
    position: relative;
    z-index: 99;
  }
`;
