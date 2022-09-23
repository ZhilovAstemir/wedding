import {memo} from "react";
import {StyledMain} from "./Test.styles";

const TestComponent = () => {
  return (
    <StyledMain>
      <section className="header">
        <h1 className="abbreviation">A & A</h1>
        <hr/>
        <div className="main_container">
          <h2 className="names">Арсен и Айна</h2>
          <div className="flex_container">
            <p>суббота</p>
            <h5>23</h5>
            <p>cентября</p>
          </div>
          <hr/>
          <p className="year">2022</p>
        </div>
        <p className="restTitle">до свадьбы осталось:</p>
        <div className="restTime">
          <div>
            <p className="days">12</p>
            <p className="time">дней</p>
          </div>
          <hr/>
          <div>
            <p className="days">21</p>
            <p className="time">часов</p>
          </div>
          <hr/>
          <div>
            <p className="days">19</p>
            <p className="time">минут</p>
          </div>
        </div>
      </section>

    </StyledMain>
  );
 }

 export default memo(TestComponent);