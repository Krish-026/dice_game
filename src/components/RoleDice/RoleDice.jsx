import styled from "styled-components";
import PropTypes from 'prop-types';

const RoleDice = ({currentDice, roleDice}) => {

  
  return (
    <DiceContainer>
        <div className="dice"
            onClick={roleDice}
        >
            <img src={`/images/dice_${currentDice}.png`} alt="dice" />
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice

RoleDice.propTypes = {
    currentDice: PropTypes.number,
    roleDice: PropTypes.func,
}

const DiceContainer = styled.div` 
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .dice{
        cursor: pointer;
    }

    p{
        font-size: 24px;
    }
`;
