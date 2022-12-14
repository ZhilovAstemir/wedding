import * as React from "react";
import {memo, useMemo} from "react";
import {StyledMain} from "./Test.styles";
import clsx from "clsx";
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppSelector} from "../../store/hooks";
import Image from 'next/image'
import aquarell1 from "../../pages/images/aqua/aquarell1.png";
import aquarell2 from "../../pages/images/aqua/aquarell2.png";
import aquarell3 from "../../pages/images/aqua/aquarell3.png";
import aquarell4 from "../../pages/images/aqua/aquarell4.png";
import aquarell5 from "../../pages/images/aqua/aquarell5.png";
import aquarell6 from "../../pages/images/aqua/aquarell6.png";

interface IFormInput {
  name: string;
  lastName: string;
  answer: string;
}

const TestComponent = () => {
  const aquarell = useAppSelector((state) => state.main.aquarell)
  const {register, control, handleSubmit, formState} = useForm<IFormInput>();

  const errors = useMemo(
      () => formState.errors,
      [formState]
  );

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
      <StyledMain className="body">
        <Image src="/images/aqua/aquarell1" width={100} height={100} />
        <section className="header">
          <h1 className="abbreviation">A&A</h1>
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
        <section className="welcome">
          <h1 className="welcomeTitle">Дорогие друзья и родный!</h1>
          <p className="news">Вы оказались здесь, а значит мы спешим сообщить вам важную новость!</p>
          <h2>Мы женимся!</h2>
          <h4>Мы очень хотим разделить с вами этот счастливый праздник.</h4>
          <h5>Ждём вас на нашей свадьбе! Начало в 17:00</h5>
        </section>
        <section className="plan">
          <h1>План <i>мероприятия:</i></h1>
          <div className="plan_flex">
            <div>
              <p>17:00</p>
              <hr/>
              <h6>сбор гостей</h6>
            </div>
            <div>
              <p>18:00</p>
              <hr/>
              <h6>вывод гостей</h6>
            </div>
            <div>
              <p>19:00</p>
              <hr/>
              <h6>показ жениха</h6>
            </div>
            <div>
              <p>20:00</p>
              <hr/>
              <h6>дискотека</h6>
            </div>
          </div>
        </section>
        <section className="place">
          <h1>Место <i>проведения:</i></h1>
          <div className="place_img">

          </div>
          <p>Банкетный зал Ридада (старая), ул. 2-й Таманской Дивизии, 7, курортный посёлок Вольный Аул</p>
          <button>построить маршрут</button>
          <hr/>
        </section>
        <section className="confirm">
          <h1>Подтвердите, <i>пожалуйста</i>, ваше присутсвие</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register("name", {required: true, minLength: 10})}
                className={clsx(errors.name)}
                type="text"
                placeholder="Имя"
            />
            <input
                {...register("lastName", {required: true, minLength: 2})}
                className={clsx(errors.lastName)}
                type="text"
                placeholder="Фамилия"
            />
            <select {...register("answer")}>
              <option value="Обязательно буду">Обязательно буду</option>
              <option value="Возможно">Возможно</option>
              <option value="Не приду">Не приду</option>
            </select>
            <input
                {...register("name", {required: true, minLength: 2})}
                className={clsx(errors.name)}
                type="text"
                placeholder="С кем вы придете?"
            />
            <input
                {...register("name", {required: true, minLength: 2})}
                className={clsx(errors.name)}
                type="text"
                placeholder="Будут ли с вами дети?"
            />
            <button type="submit">
              ОТПРАВИТЬ
            </button>
            <hr/>
          </form>
        </section>
      </StyledMain>
  );
}

export default memo(TestComponent);