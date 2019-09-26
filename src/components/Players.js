import React from 'react';
//import { httpGetRequest } from '../HttpRequests.js'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/style.css'

export default class Players extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            players: [{
                name: "Thomas",
                money: 3500
            },
            {
                name: "Guillaume",
                money: 3500
            },
            {
                name: "Romain",
                money: 3500
            }]
        }
    }

    render(){
        return(
            <div className="players-container">
                {this.state.players.map((player) => {
                    return(
                        <div key={player.name} className="player-infos">
                            {player.name} : {player.money} €
                        </div>
                    )
                })}
            </div>
        )
    }
}

