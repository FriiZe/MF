import React from 'react';
import { Button, Modal, Col, Row } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/plate.css'
import PlateCellProperty from './PlateCellProperty'

const { Properties } = require("../moteur/Classes/Properties.js");
const { Player } = require("../moteur/Classes/Player.js");
const { Board } = require("../moteur/Classes/Board.js");
const { Game } = require("../moteur/Classes/Game.js");
const { Cell } = require("../moteur/Classes/Cell.js");
const { Gare } = require("../moteur/Classes/Gare.js");

export default class Plate extends React.Component {
    cells = [
        new Cell("Départ", "Uncolored"),
        new Properties("AngularJS", "dark-purple", 60, {
            rents: [ 2, 10, 30, 90, 160, 250 ],
            housePrice: 50,
            img: require('../assets/logo_city/angular.png'),
        }),
        new Cell("Duel", "Uncolored"),
        new Properties("ReactJS", "dark-purple", 60, {
            rents: [ 2, 10, 30, 90, 160, 250 ],
            housePrice: 50,
            img: require('../assets/logo_city/duel.jpg'),
        }),
        new Properties("VueJS", "dark-purple", 80, {
            rents: [ 4, 20, 60, 180, 320, 450 ],
            housePrice: 50,
            img: require('../assets/logo_city/vue.png'),
        }),
        new Gare("YnovCampusNantes","Uncolored", require('../assets/logo_city/ynovNantes.png')),
        new Properties("Express", "light-blue", 100, {
            rents: [ 6, 30, 90, 270, 400, 550 ],
            housePrice: 50,
            img: require('../assets/logo_city/expressJS.png'),
        }),
        new Cell("Duel", "Uncolored"),
        new Properties("Django", "light-blue", 100, {
            rents: [ 6, 30, 90, 270, 400, 550 ],
            housePrice: 50,
            img: require('../assets/logo_city/django.png'),
        }),
        new Properties("Rails", "light-blue", 120, {
            rents: [ 8, 40, 100, 300, 450, 600 ],
            housePrice: 50,
            img: require('../assets/logo_city/rails.png'),
        }),
        new Cell("Visite", "Uncolored"),
        new Properties("Sublime", "purple", 140, {
            rents: [ 10, 50, 150, 450, 625, 750 ],
            housePrice: 100,
            img: require('../assets/logo_city/sublime_texte.png'),
        }),
        new Cell("Duel", "Uncolored"),
        new Properties("VisualStudioCode", "purple", 140, {
            rents: [ 10, 50, 150, 450, 625, 750 ],
            housePrice: 100,
            img: require('../assets/logo_city/vsc.png'),
        }),
        new Properties("VIM", "purple", 160, {
            rents: [ 12, 60, 180, 500, 700, 900 ],
            housePrice: 100,
            img: require('../assets/logo_city/vim.png'),
        }),
        new Gare("YnovCampusLyon","Uncolored", require('../assets/logo_city/ynovLyon.png')),
        new Properties("Eclipse", "orange", 180, {
            rents: [ 14, 70, 200, 550, 750, 950 ],
            housePrice: 100,
            img: require('../assets/logo_city/eclipse.png'),
        }),
        new Cell("Duel", "Uncolored"),
        new Properties("NetBeans", "orange", 180, {
            rents: [ 14, 70, 200, 550, 750, 950 ],
            housePrice: 10,
            img: require('../assets/logo_city/netBeans.png'),
        }),
        new Properties("IntelliJ", "orange", 200, {
            rents: [ 16, 80, 220, 600, 800, 1000 ],
            housePrice: 100,
            img: require('../assets/logo_city/intelliJ.png'),
        }),
        new Cell("Boutique", "Uncolored"),
        new Properties("JavaScript", "red", 220, {
            rents: [ 18, 90, 250, 700, 875, 1050 ],
            housePrice: 150,
            img: require('../assets/logo_city/js.jpg'),
        }),
        new Cell("Duel", "Uncolored"),
        new Properties("HTML/CSS", "red", 220, {
            rents: [ 18, 90, 250, 700, 875, 1050],
            housePrice:  150,
            img: require('../assets/logo_city/html_css.jpg'),
        }),
        new Properties("SQL", "red", 240, {
            rents: [ 20, 100, 300, 750, 925, 1100 ],
            housePrice: 150,
            img: require('../assets/logo_city/sql.png'),
        }),
        new Gare("YnovCampusParis","Uncolored", require('../assets/logo_city/ynovParis.png')),
        new Properties("Python", "yellow", 260, {
            rents: [ 22, 110, 330, 800, 975, 1150 ],
            housePrice: 150,
            img: require('../assets/logo_city/python.png'),
        }),
        new Properties("Java", "yellow", 260, {
            rents: [ 22, 110, 330, 800, 975, 1150 ],
            housePrice: 150,
            img: require('../assets/logo_city/java.png')
        }),
        new Cell("Duel", "Uncolored"),
        new Properties("Bash", "yellow", 280, {
            rents: [ 24, 120, 360, 850, 1025, 1200 ],
            housePrice: 150,
            img: require('../assets/logo_city/bash.png'),
        }),
        new Cell("Prison", "Uncolored"),
        new Properties("Microsoft", "green", 300, {
            rents: [ 26, 130, 390, 900, 1100, 1275 ],
            housePrice: 200,
            img: require('../assets/logo_city/microsoft.jpg'),
        }),
        new Properties("Samsung", "green", 300, {
            rents: [ 26, 130, 390, 900, 1100, 1275 ],
            housePrice: 200,
            img:'../assets/logo_city/samsung.png',
        }),
        new Cell("Duel", "Uncolored"),
        new Properties("Thales", "green", 320, {
            rents: [ 28, 150, 450, 1000, 1200, 1400 ],
            housePrice: 200,
            img: require('../assets/logo_city/thales.jpg'),
        }),
        new Gare("YnovCampusBordeaux","Uncolored", require('../assets/logo_city/ynovBordeaux.png')),
        new Properties("CapGemini", "dark-blue", 350, {
            rents: [ 35, 175, 500, 1100, 1300, 1500 ],
            housePrice: 200,
            img: require('../assets/logo_city/capgemini.jpg'),
        }),
        new Cell("Duel", "Uncolored"),
        new Properties("CodeBuds", "dark-blue", 350, {
            rents: [ 35, 175, 500, 1100, 1300, 1500 ],
            housePrice: 200,
            img: require('../assets/logo_city/code_buds.PNG'),
        }),
        new Properties("Wikodit", "dark-blue", 400, {
            rents: [ 50, 200, 600, 1400, 1700, 2000 ],
            housePrice: 200,
            img:'../assets/logo_city/wikodit.jpg',
        }),
    ];

    constructor(props){
        super(props);
        this.state = {
            game: new Game()
        }
    }

    componentDidMount(){
        this.init()
        console.log(this.state)
        setTimeout(() => {
            while(1){
                for (let i = 0; i < this.state.game.playerList.length; i++) {
                    this.willPlay(i)
                    this.forceUpdate()
                    
                }
            }

        }, 2000)
     
    }

    onThisCell(idCell, idPlayer){
        if (this.state.game.playerList[idPlayer].actualPosition === idCell){
            return true
        }
        return false
    }

   

    init(){
        let player1 = new Player("Thomas", "red")
        let player2 = new Player("Florian", "yellow")
        let player3 = new Player("Guillaume", "purple")
        let player4 = new Player("Mathieu", "blue")
        

        const board = new Board(this.cells)

        this.state.game.init(board, player1, player2, player3, player4)
    }
    
    willPlay(id) {
        do {
            this.state.game.playerList[id].playerTurn(this.state.game.board)
        } while (this.state.game.playerList[id].willReplay === true)
        this.state.game.playerList[id].endTurn()
    
    }

        

    //didMount http request to get information of user

    render(){
        console.log('render')
        const plateCellsHB = []
        for(let i=1; i<10; i++){
            
                plateCellsHB.push(<PlateCellProperty
                    name={this.cells[i].name} 
                    color={this.cells[i].color}
                    img={this.cells[i].img}
                    price={this.cells[i].price}
                />)
            
        }

        const plateCellsVL = []
        for(let i=11; i<20; i++){
            
                plateCellsVL.push(<PlateCellProperty
                    name={this.cells[i].name} 
                    color={this.cells[i].color}
                    img={this.cells[i].img}
                    price={this.cells[i].price}
                />)
            
        }

        const plateCellsHT = []
        for(let i=21; i<30; i++){
            
                plateCellsHT.push(<PlateCellProperty
                    name={this.cells[i].name} 
                    color={this.cells[i].color}
                    img={this.cells[i].img}
                    price={this.cells[i].price}
                />)
            
        }

        const plateCellsVR = []
        for(let i=31; i<40; i++){
            
                plateCellsVR.push(<PlateCellProperty
                    name={this.cells[i].name} 
                    color={this.cells[i].color}
                    img={this.cells[i].img}
                    price={this.cells[i].price}
                />)
            
        }

        return(
            <div class="all_body">
                <div id="body_plate.">
                    <div class="table">
                        <div class="board">
                            <div class="center">
                                <div><h1 class="title">MONOPOLY FIGHT !</h1></div>
                                <div id="imgBitcoin"><img src={require('../assets/logo_city/bitcoin.png')} style={{width: '450px', marginLeft: '-378px', marginTop: '-160px'}}></img></div>
                            </div>

                            <div class="space corner go">
                                <div class="container">
                                    <div class="instructions"></div>
                                    <div id="img_depart"><img src={require('../assets/logo_city/fleche_depart.jpg')} style={{width:'80px'}}></img></div>
                                    <div class="go-word">go</div>
                                </div>
                            </div>

                            <div class="row horizontal-row bottom-row">
                                {
                                    plateCellsHB.map((item) => {
                                        return(
                                            item
                                        )
                                    })
                                }

                            </div>
                                <div class="space corner jail">
                                    <div class="just" style={{fontSize:"20px"}}>Just</div>
                                    <div class="drawing">
                                        <div class="container">
                                            <div class="name">In</div>
                                            <div class="window">
                                                <div class="bar"></div>
                                                <div class="bar"></div>
                                                <div class="bar"></div>
                                                <i class="person fa fa-frown-o"></i>
                                            </div>
                                            <div class="name">Jail</div>
                                        </div>
                                    </div>
                                    <div class="visiting" style={{fontSize:"20px", marginLeft:'-15px'}}>Visiting</div>
                                </div>
                            
                            <div class="row vertical-row left-row">
                            {
                                    plateCellsVL.map((item) => {
                                        return(
                                            item
                                        )
                                    })
                                }
                            </div>

                            <div class="space corner free-parking">
                                <div class="container"> 
                                    <div class="name">GO TO</div>
                                    <i class="drawing fa fa-car"></i>
                                    <div><img src={require('../assets/logo_city/shop.png')} style={{width: '50px'}}></img></div>                        
                                    <div class="name">SHOP</div>
                                </div>
                            </div>

                            <div class="row horizontal-row top-row">
                            {
                                    plateCellsHT.map((item) => {
                                        return(
                                            item
                                        )
                                    })
                                }
                            </div>

                            <div class="space corner go-to-jail">
                                <div class="container">
                                    <div class="name">Go To</div>
                                    <i class="drawing fa fa-gavel"></i>
                                    <div><img src={require('../assets/logo_city/jail.png')} style={{width: '40px'}}></img></div> 
                                    <div class="name">Jail</div>
                                </div>
                            </div>

                            <div class="row vertical-row right-row">
                            {
                                    plateCellsVR.map((item) => {
                                        return(
                                            item
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
}