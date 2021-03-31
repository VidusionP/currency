import './App.scss';
import React, { Component } from 'react';


export default function App (props) {

  function test(event){
    event.target.style.display = 'none'
    event.target.outerHTML= "<div>Hi</div>"
  }
  function fround(x) {

    return x.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  
    if (props.hi === props.hi1) {
      return (
        <>
          <div id='app'>
            {props.hi3.map((item,i) => {
              return (
                <>
                {item === props.hi?' ' : 
                <div>
                  {/* <img onError={test} src={`https://raw.githubusercontent.com/transferwise/currency-flags/master/src/flags/${item.toLowerCase()}.png`}/> */}
                  <div key={i} id={item}>{item} {props.hi2[item] * props.vidu===0?fround(props.hi2[item]):fround(props.hi2[item] * props.vidu)}</div>
                </div>}
                </>
              )
            })}
          </div>
        </>
      )
    } else {
      return(
        <>
        <div>Loading</div>
        </>
      )
    }
  
}
