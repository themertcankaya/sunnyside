import { styled } from "styled-components";
import { emily, jennie, thomas } from "../index";

const Testimonials = () => {
  return (
    <Wrapper>
      <h2>CLIENT TESTIMONIALS</h2>
      <div className="container">
        <div className="card">
          <img src={emily} alt="emily" />
          <p>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <h4>Emily R.</h4>
          <h5>Marketing Director</h5>
        </div>
        <div className="card">
          <img src={thomas} alt="thomas" />
          <p>
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <h4>Thomas S.</h4>
          <h5>Chief Operating Officer</h5>
        </div>
        <div className="card">
          <img src={jennie} alt="jennie" />
          <p>
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <h4>Jennie F.</h4>
          <h5>Business Owner</h5>
        </div>
      </div>
    </Wrapper>
  );
};

export default Testimonials;

const Wrapper = styled.div`
  padding: 4rem;
  /* border: 2px solid red; */
  img {
    display: block;
    object-fit: cover;
    width: 50px;
    border-radius: 50%;
    margin: 0 auto;
  }
  h2 {
    text-align: center;
    margin: 3rem;
  }
  .container {
    display: flex;
    gap: 2rem;
    .card {
      text-align: center;
      display: grid;
      gap: 1rem;
    }
  }
  p {
    line-height: 1.6;
  }
  @media (max-width: 768px) {
    padding: 2rem;
    p {
      line-height: 1.3;
    }
    .card p {
      font-size: 0.9rem;
    }
    .container {
      gap: 1rem;
    }
  }
  @media (max-width: 540px) {
    padding: 4rem;
    .container {
      flex-direction: column;
      gap: 2rem;
      .card {
        text-align: center;
        display: grid;
        gap: 1rem;
      }
    }
  }
`;
