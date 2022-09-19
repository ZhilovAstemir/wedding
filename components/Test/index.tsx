import {memo} from "react";
import {StyledMain} from "./Test.styles";

const TestComponent = () => {
  return (
    <StyledMain>
      <section className="header">
        <h1>A & A</h1>
        <div>
          <h2>Арсен и Айна</h2>
          <p>суббота</p>
          <h5>23</h5>
          <p>cентября</p>
          <hr/>
          <p>2022</p>
        </div>
        <p>до свадьбы осталось:</p>
        <div>
          <div>
            <p>12</p>
            <p>дней</p>
          </div>
          <div>
            <p>21</p>
            <p>часов</p>
          </div>
          <div>
            <p>19</p>
            <p>минут</p>
          </div>
        </div>
      </section>

    </StyledMain>
  );
 }

 export default memo(TestComponent);