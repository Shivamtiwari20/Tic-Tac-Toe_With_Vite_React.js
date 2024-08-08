import Icons from '../Icons/Icons';
import './Card.css';


function Card({gameEnd, player, onPlay, index}){
    let icons = <Icons/>
    if(player == 'X'){
        icons = <Icons name="cross"/>
    }else if(player == 'O'){
        icons = <Icons name="circle"/>
    }
    return (
        <div className='card' onClick={() => !gameEnd && player=="" && onPlay(index)}>
            {icons}

        </div>
    )
}

export default Card;