import React, { Component } from 'react';
import './Header.scss'

export default function Header (props) {
    const vidu = props.hi5 * props.hi6
    // console.log(props.hi5)
    // console.log(props.hi6)
      return (
          <div className='header'>
            <h1 className='header__title'>Xchanger</h1>
            <div className='header__sub'>Live Exchange Rates</div>
            <div className='header__exchange'>
              <select className='header__exchange--first' onChange={props.hi} name='country' id='country' defaultValue={props.hi1}>
                {props.hi2.map((item,i) => {
                  return(
                    <>
                    <option value={item}>{item}</option>
                    </>
                  )
                })}
              </select>
              <input className='header__exchange--amount1' onChange={props.hi3}></input>
              <select className='header__exchange--second' onChange={props.hi4} name='country2' id='country2'>
                <option hidden disabled selected value>--</option>
                {props.hi2.map((item,i) => {
                  return(
                    <>
                   {item === props.hi1?' ':<option value={item}>{item}</option>}
                    </>
                  )
                })}
              </select>
              <div className='header__exchange--amount2' onChange={props.hi3}>{vidu===0||isNaN(vidu)?" ":vidu}</div>
            </div>
          </div>
      )
    
  
}
