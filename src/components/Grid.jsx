import { styled } from "styled-components";
import { design, photography, standOut, transform } from "../index";

const Grid = () => {
  return (
    <>
      <Wrapper>
        <div className="item t1">
          <h3>Transform your brand</h3>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a href="#" className="a1">
            LEARN MORE
          </a>
        </div>
        <div className="item">
          <img src={transform} alt="" />
        </div>
        <div className="item">
          <img src={standOut} alt="" />
        </div>
        <div className="item t1">
          <h3>Stand out to the right audience</h3>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.{" "}
          </p>
          <a href="#" className="a2">
            LEARN MORE
          </a>
        </div>
        <div className="item back1">
          <div>
            <h4>Graphic Design</h4>
            <p>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </div>
        <div className="item back2">
          <div>
            <h4>Photography</h4>
            <p>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Grid;

const Wrapper = styled.div`
  /* border: 4px solid blue; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  color: #333;
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
  .t1 {
    display: grid;
    place-content: center;
    padding: 3rem;
    gap: 1rem;
  }
  .back1 {
    background: url(${design}) no-repeat center/cover;
    display: grid;
    justify-content: center;
    align-items: end;
  }
  .back2 {
    background: url(${photography}) no-repeat center/cover;
    display: grid;
    justify-content: center;
    align-items: end;
  }
  .back1 div,
  .back2 div {
    margin-bottom: 2rem;
    text-align: center;
  }
  .back1,
  .back2 {
    padding: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  a {
    text-decoration: none;
    font-weight: 700;
    color: #333;
  }
  a:after {
    content: "";
    display: block;
    width: 110px;
    height: 2px;
    border-radius: 10px;
  }
  .a1:after {
    background-color: yellow;
  }
  .a2:after {
    background-color: red;
  }
  a:hover:after {
    height: 6px;
  }
  @media (max-width: 768px) {
    .item p {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
