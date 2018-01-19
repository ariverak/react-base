import React,{Component} from 'react';
import Coin from './coin';

class Coins extends Component{
    render(){
        return (
            <ul className="Coins">
            {
                //props llama a las props que se envian como parametros en el componente
                this.props.data.map((element,i) => {
                    return <Coin {...element} key={i}></Coin>
                })
            }
            </ul>
        )
    }
}
export default Coins;