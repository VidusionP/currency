import logo from './logo.svg';
import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import App from './App';

export default class Main extends Component {
    state ={
        test:[],
        base:'CAD',
        base1:'',
        loaded: false,
        money:"",
        money1:'',
        xe:[],

      }
    
      jen = (e) => {
        const check = e.target.value
        const vid = Object.keys(this.state.test.rates).find(x => x===check)
        this.setState({
          base: check,

        })
        console.log(this.state.test.rates[vid])
      }
      jen1 = (e) => {
        const check = e.target.value
        const vid = Object.keys(this.state.test.rates).find(x => x===check)
        // console.log(Object.keys(this.state.test.rates)[0])
        // console.log(this.state.test.rates[vid])
        this.setState({
            money1: this.state.test.rates[vid],
            base1: check
        })

      }

    
      componentDidMount() {
        
        const url = `https://api.currencyscoop.com/v1/latest?base=${this.state.base}&api_key=e27936963717e591c3881d976c2e7749`
    
        axios.get(url)
          .then(response => {
            this.setState({
              test: response.data.response,
              xe: response.data.response.rates
            })

          })
    
      }
    
      componentDidUpdate(prevProps, prevState) {
        if (prevState.base !== this.state.base) {
          const url = `https://api.currencyscoop.com/v1/latest?base=${this.state.base}&api_key=e27936963717e591c3881d976c2e7749`
          console.log(url.statusCode)
          axios.get(url)
            .then(response => {
              this.setState({
                test: response.data.response,
                xe: response.data.response.rates
              })

            })
        }
      }
    
      num = (e) => {
          const vidu = e.target.value
          this.setState({
              money: vidu
          })
      }

    render() {
        if (this.state.test.rates) {
            const country = Object.keys(this.state.test.rates)
            return (
            <>
            <Header 
            hi = {this.jen}
            hi1 = {this.state.base}
            hi2 = {country}
            hi3 = {this.num}
            hi4 = {this.jen1}
            hi5 = {this.state.money1}
            hi6 = {this.state.money}
            />
            <App 
                hi={this.state.base}
                hi1 = {this.state.test.base}
                hi2 = {this.state.test.rates}
                hi3 = {country}
                vidu = {this.state.money}
            />
            </>
            )
        } else {
            return(
                <div>Loading</div>
            )
        }
    }
}

