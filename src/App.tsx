import {
  Container,
  ContainerMask,
  Content,
  ContentHeader,
  ContentBody,
  ContentBodyLeft,
  ContentBodyRight,
  Names,
  Year,
} from "./appStyles";
import LogoImg from "./assets/img/Logo.svg";
import SageImg from "./assets/img/sage.svg";
import SovaImg from "./assets/img/sova.svg";
import OmenImg from "./assets/img/omen.svg";
import PhoenixImg from "./assets/img/phoenix.svg";
import { FiShare2, FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";

export function App() {
  return (
    <Container>
      <ContainerMask>
        <Content>
          <ContentHeader>
            <img src={LogoImg} alt="logo valorant" />
            <h2>Riot Games</h2>
            <FiShare2 size={24} color="#fff" />
          </ContentHeader>
          <ContentBody>
            <ContentBodyLeft>
              <h1>VALORANT</h1>
              <div>
                <div>
                  <img src={OmenImg} alt="omen valorant" />
                </div>
                <div>
                  <img src={SageImg} alt="sage valorant" />
                </div>
                <div>
                  <img src={SovaImg} alt="sova valorant" />
                </div>
              </div>
              <Names>
                <p>Omen</p>
                <p>Sage</p>
                <p>Sova</p>
              </Names>
              <div>
                <FiInstagram size={24} color="#fff" />
                <FiTwitter size={24} color="#fff" />
                <FiFacebook size={24} color="#fff" />
              </div>
            </ContentBodyLeft>
            <ContentBodyRight>
              <img src={PhoenixImg} />
              <div>
                <p>29</p>
                <p>08</p>
              </div>
              <Year>
                <span>2021</span>
              </Year>
            </ContentBodyRight>
          </ContentBody>
        </Content>
      </ContainerMask>
    </Container>
  );
}
