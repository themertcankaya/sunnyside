import { iconArrow, header, iconLogo, iconHamburger } from "../index";
import { styled } from "styled-components";
import { FaX } from "react-icons/fa6";
import { useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen("");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <>
      <Wrapper isopen={isOpen}>
        <nav>
          <div className="flexbox">
            <img src={iconLogo} alt="logo" />
            <ul>
              <li>About</li>
              <li>Services</li>
              <li>Project</li>
              <li>CONTACT</li>
            </ul>
            <div
              className="hamburger"
              onClick={() => setIsOpen(isOpen === "" ? "abc" : "")}
            >
              {isOpen ? (
                <FaX style={{ fontSize: "2rem", color: "white" }} />
              ) : (
                <img src={iconHamburger} alt="hamburger" />
              )}
            </div>
          </div>
        </nav>
        <div className="nav-bottom">
          <h1>WE ARE CREATIVES</h1>
          <img src={iconArrow} alt="arrow" />
        </div>
      </Wrapper>
    </>
  );
};

export default Header;
const Wrapper = styled.div`
  img {
    display: block;
  }
  /* border: 1px solid red; */
  background: url(${header}) no-repeat center/cover;
  nav {
    position: relative;
    padding: 1rem;
    /* border: 2px solid green; */
    height: 512px;
    img {
      width: 125px;
      height: 40px;
    }
  }
  .flexbox {
    /* border: 2px solid red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul {
      list-style: none;
      display: flex;
      gap: 1rem;
      color: white;
      li {
        cursor: pointer;
      }
    }
  }
  .nav-bottom {
    width: 100%;
    text-align: center;
    color: white;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 100px;
    img {
      margin: 5rem auto;
    }
    h1 {
      letter-spacing: 5px;
    }
  }
  .hamburger img {
    width: 50px;
    transform: scale(0.7);
  }
  .hamburger {
    display: none;
    cursor: pointer;
  }
  @media (max-width: 540px) {
    .hamburger {
      display: block;
    }
    .flexbox {
      ul {
        position: fixed;
        justify-content: center;
        flex-direction: column;
        top: 100px;
        left: ${(props) => (props.isopen ? "50%" : "105%")};
        transform: ${(props) => (props.isopen ? "translateX(-50%)" : "")};
        /* border: 2px solid black; */
        width: 90%;
        height: 250px;
        background-color: white;
        color: #333;
        text-align: center;
        z-index: 1;
        transition: 0.5s all ease-in-out;
      }
    }
  }
`;
