import React from 'react'
import './App.css';

class Jagdish extends React.Component{
  state = {
    lateprice : '',
    spaftersell : '',
    stock : '',
    leststock : '',
    percentage : '',
    want : '20000',
  }

  changelateValueHandeler = (event) => {
    this.setState({
        lateprice : event.target.value,
    })
}
  changespValueHandeler = (event) => {
  this.setState({
      spaftersell : event.target.value,
  })
}
  changestockValueHandeler = (event) => {
  this.setState({
      stock : event.target.value,
  })
}
  changelesValueHandeler = (event) => {
  this.setState({
      leststock : event.target.value,
  })
}
changepercentageHandeler = (event) => {
  this.setState({
      percentage : event.target.value ,
  })
}
changewantHandeler = (event) => {
  this.setState({
      want : event.target.value ,
  })
}

cleannameFieldHandeler = () => {
  this.setState({lateprice : '',
  spaftersell : '',
  stock : '',
  leststock : '',
  percentage : '',})
}

  render() {
    const fristinput = <input type="number" onChange={this.changelateValueHandeler} value={this.state.lateprice} placeholder="ટોટલ માલ "></input>
    const secondinput = <input type="number" onChange={this.changespValueHandeler} value={this.state.spaftersell} placeholder="મૂળ કિંમત "></input>
    const thirdinput = <input type="number" onChange={this.changestockValueHandeler} value={this.state.stock} placeholder="આઉટની ટકાવારી% "></input>
    const fourinput = <input type="number" onChange={this.changelesValueHandeler} value={this.state.leststock} placeholder="વેચાણ કિંમત "></input>
    const fiveinput = <input type="number" onChange={this.changepercentageHandeler} value={this.state.percentage} placeholder="વેચાણમાં લેસની ટકાવારી% "></input>
    const want1 = <input type="number" onChange={this.changewantHandeler} value={this.state.want}></input>

    const mulamaount = this.state.lateprice * this.state.spaftersell
    const less = this.state.lateprice * this.state.stock / 100
    const less1 = this.state.lateprice - (this.state.lateprice * this.state.stock / 100)
    const sellamount = (this.state.lateprice - (this.state.lateprice * this.state.stock / 100)) * this.state.leststock
    const prsellamount = (((this.state.lateprice - (this.state.lateprice * this.state.stock / 100)) * this.state.leststock) * this.state.percentage) / 100
    const sellammount2 = sellamount - prsellamount
    const aftersel = mulamaount - (sellamount - prsellamount)
    const newsellrate = (mulamaount - (sellamount - prsellamount)) / less
    const want2 = this.state.want

    const mulamaount1 = <h2>પડતર કિંમત :- {mulamaount}</h2>
    const le = <h2>આઉટમાં બચેલો  માલ  :- {less}</h2>
    const le1 = <h2>વેચેલ માલ :- {less1}</h2>
    const sellamount1 = <h2>વેચેલ માલની કિંમત લેસ સાથે :- {sellammount2}</h2>
    const aftersel1 = <h2>આઉટમાં બચેલા માલની કિંમત :- {aftersel}</h2>
    const newsellrate1 = <h2>આઉટમાં બચેલા માલની કિંમત કેરેટમાં :- {newsellrate}</h2>

    const style1 = {
      display: 'inline-block',
      padding: '16px',
      margin: '16px',
      border: '1px solid black',
      textAlign: 'center',
      backgroundColor: '#ff0000',
  }
  const style2 = {
    display: 'inline-block',
    padding: '16px',
    margin: '16px',
    border: '1px solid black',
    textAlign: 'center',
    backgroundColor: '#006900',
  }

  const style3 = {
    margin : '16px',
  }
    
    return (
      <div>
        
        <div style = {style3}>{fristinput}</div>
        <div style = {style3}>{secondinput}</div>
        <div style = {style3}>{thirdinput}</div>
        <div style = {style3}>{fourinput}</div>
        <div style = {style3}>{fiveinput}</div>
        <div style = {style3}>{want1}</div>
        <button onClick={this.cleannameFieldHandeler}>CLEAR</button>
        {
          this.state.want < newsellrate ?
          <div>
          <div style = {style1}>{mulamaount1}</div>
          <div style = {style1}>{le1}</div>
          <div style = {style1}>{sellamount1}</div>
          <div style = {style1}>{le}</div>
          <div style = {style1}>{aftersel1}</div>
          <div style = {style1}>{newsellrate1}</div></div>:
          <div>
          <div style = {style2}>{mulamaount1}</div>
          <div style = {style2}>{le1}</div>
          <div style = {style2}>{sellamount1}</div>
          <div style = {style2}>{le}</div>
          <div style = {style2}>{aftersel1}</div>
          <div style = {style2}>{newsellrate1}</div></div>
        }
      </div>
    )
  }
}

export default Jagdish;
