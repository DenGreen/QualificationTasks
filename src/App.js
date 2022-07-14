import React from "react";
import Card from "./components/Card";
import { nanoid } from "nanoid";

const date = [
  {id: nanoid(), text: 'Сказочное заморское яство', title: 'Нямушка', description: 'с фуа-гра', img: 'Photo.png', infoPortions: '10 порций', infoGift: ['мышь в подарок'], volume: '0,5', measurement: 'кг', selectedInfo: 'Печень утки разварная с артишоками.', disabled: false, disabledInfo: 'Печалька, с фуа-гра закончился.'},
  {id: nanoid(), text: 'Сказочное заморское яство', title: 'Нямушка', description: 'с рыбой', img: 'Photo.png', infoPortions: '40 порций', infoGift: ['2 мыши в подарок'], volume: '2', measurement: 'кг', selectedInfo: 'Головы щучьи с чесноком да свежайшая сёмгушка.', disabled: false, disabledInfo: 'Печалька, с рыбой закончился.'},
  {id: nanoid(), text: 'Сказочное заморское яство', title: 'Нямушка', description: 'с курой', img: 'Photo.png', infoPortions: '100 порций', infoGift: ['5 мышей в подарок', 'заказчик доволен'], volume: '5', measurement: 'кг', selectedInfo: 'Филе из цыплят с трюфелями в бульоне.', disabled: true, disabledInfo: 'Печалька, с курой закончился.'},
]

function App() {
  return (
    <React.Fragment>
      <div className="title-card">Ты сегодня покормил кота?</div>
      <div className="box">
        <Card date={date}/>
      </div>
    </React.Fragment>
  );
}
export default App;
