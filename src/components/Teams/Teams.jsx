import './Teams.scss'
import {useState} from 'react'

const Teams = (props) => {
    const [count, setCount] = useState(0);

    const { name, role } = props.teamMember;

    const handleClick = () => {
        setCount(count + 1)
    }

    const handleSubtractClick = () => {
        if (count > 0){
        setCount(count - 1)
        }
    }

    return (
        <>
        <div className="teamBox">
            <p>{name}</p>
            <p>{role}</p>
            <div className="counterBox">
                <p>Counter</p>
                <p>{count}</p>
                <button className="minusButton" onClick = {handleSubtractClick}>-</button>
                <button className="plusButton" onClick = {handleClick}>+</button>
            </div>
        </div>
        </>
    )
}

export default Teams;