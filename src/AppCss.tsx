import React from 'react';
import './AppCss.scss';

const AppCss = () => {
  return (
    <div className="app-css-wrapper">
      {/* 实现画圆 */}
       <div className="circle_process">
        <div className="wrapper right">
          <div className="circle rightcircle"></div>
        </div>
        <div className="wrapper left">
          <div className="circle leftcircle" id="leftcircle"></div>
        </div>
      </div>
      {/* 自适应正方形 - 2种方式*/}
      <div className="squre-wrapper">
        <div className="squre-1">1</div>
        <div className="squre-2">2</div>
      </div>
      {/* 垂直居中布局 - 3种方式*/}
      <div className="center-wrapper">  
        <div className="center-outer-1">
          <div className="center-inner-1"></div>
        </div>
        <div className="center-outer-2">
          <div className="center-inner-2"></div>
        </div>
        <div className="center-outer-3">
          <div className="center-inner-3">
          </div>
        </div>
      </div>
      {/* position: sticky 粘性布局 */}
      <div className="sticky-wrapper">
        <h1>Sticky positioning</h1>
        <dl>
          <dt>A</dt>
          <dd>Apple</dd>
          <dd>Ant</dd>
          <dd>Altimeter</dd>
          <dd>Airplane</dd>
          <dt>B</dt>
          <dd>Bird</dd>
          <dd>Buzzard</dd>
          <dd>Bee</dd>
          <dd>Banana</dd>
          <dd>Beanstalk</dd>
          <dt>C</dt>
          <dd>Calculator</dd>
          <dd>Cane</dd>
          <dd>Camera</dd>
          <dd>Camel</dd>
          <dt>D</dt>
          <dd>Duck</dd>
          <dd>Dime</dd>
          <dd>Dipstick</dd>
          <dd>Drone</dd>
          <dt>E</dt>
          <dd>Egg</dd>
          <dd>Elephant</dd>
          <dd>Egret</dd>
        </dl>
      </div>
      {/* 动画keyframe & animation属性 */}
      <div className="animation-wrapper">
        Animation Wrapper
        <div className="polling_message">
          Listening for dispatches
        </div>
        <div className="cylon_eye"></div>
      </div>
      <div className="animation-fill-mode-wrapper">
        <p>Move your mouse over the gray box!</p>
        <div className="demo">
          <div className="growsandstays">This grows and stays big.</div>
          <div className="grows">This just grows.</div>
        </div>
      </div>
    </div>
  )
};

export default AppCss;