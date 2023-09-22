import { styled } from "styled-components";

import {
  milkbottles,
  orange,
  cone,
  sugarcubes,
  iconFacebook,
  iconInstagram,
  iconTwitter,
  iconPinterest,
} from "../index";

const Footer = () => {
  return (
    <Wrapper>
      <div className="photo-flex">
        <div className="item">
          <img src={milkbottles} alt="" />
        </div>
        <div className="item">
          <img src={orange} alt="" />
        </div>
        <div className="item">
          <img src={cone} alt="" />
        </div>
        <div className="item">
          <img src={sugarcubes} alt="" />
        </div>
      </div>
      <div className="bottom-footer">
        <h3>sunnyside</h3>
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Project</li>
        </ul>
        <div className="social-media">
          <div>
            <img src={iconFacebook} alt="facebook" />
          </div>
          <div>
            <img src={iconInstagram} alt="instagram" />
          </div>
          <div>
            <img src={iconTwitter} alt="twitter" />
          </div>
          <div>
            <img src={iconPinterest} alt="pinterest" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  .photo-flex {
    display: flex;
  }
  .item {
    flex: 1;
    img {
      width: 100%;
      object-fit: cover;
      display: block;
    }
  }
  .bottom-footer {
    background-color: #91d3c6;
    padding: 3rem 0;
    display: grid;
    gap: 2rem;
    h3 {
      text-align: center;
    }
    ul {
      list-style: none;
      display: flex;
      justify-content: center;
      gap: 1rem;
      li {
        cursor: pointer;
      }
    }
    .social-media {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      img {
        width: 100%;
        height: 100%;
        cursor: pointer;
      }
    }
  }
  @media (max-width: 540px) {
    .photo-flex {
      flex-direction: column;
    }
  }
`;
