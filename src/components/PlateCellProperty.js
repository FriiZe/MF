import React from 'react';
import { Button, Modal, Col, Row } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/plate.css'

export default class PlateCellProperty extends React.Component {
    constructor(props){
        super(props);
        this.name = props.name
        this.color = props.color
        this.img = props.img
        this.price = props.price
    }

    render(){
        if (this.name === "Duel"){
            return(
                <div className="space chance">
                    <div className="container">
                        <div className="name" style={{fontSize:'20px'}}>{this.name}</div>
                        <div><img src={require('../assets/logo_city/duel.jpg')} style={{width: '50px', marginTop:'10px', marginBottom:'10px'}}></img></div>
                        <i className="drawing fa fa-question"></i>
                    </div>
                </div>
            )
        }else if (this.name.indexOf("Ynov") === 0){
            return(
                <div class="space railroad">
                    <div class="container">
                        <div class="name" style={{fontSize:'11px', marginTop:'-10px'}}>{this.name}</div>
                        <div><img src={this.img} style={{width: '50px', marginBottom:'5px'}}></img></div>
                        <i class="drawing fa fa-subway"></i>
                        <div class="price" style={{fontSize:'12px'}}>Price ${this.price}</div>
                    </div>
                </div>
            )
        }else{
            return(
            <div className="space property">
                <div className="container">
                    <div className={`color-bar ${this.color}`}></div>
                    <div className="name">{this.name}</div>
                    <div><img src={this.img} style={{width: '50px', marginTop:'10px', marginBottom:'10px'}}></img></div>
                    <div className="price"  style={{fontSize:'12px'}}>Price ${this.price}</div>
                </div>
            </div>
            )}
        }

}