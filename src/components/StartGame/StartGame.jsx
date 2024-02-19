import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Button } from '../../styled/Button'

const StartGame = ({toggle}) => {
    return (
        <Conatiner>
            <div>
                <img src="/images/dices.png" alt="Dices" />
            </div>

            <div className='content'>
                <h1>Dice Game</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>
        </Conatiner>
    )
}

export default StartGame

StartGame.defaultProps = {
    toggle: () => {}
}
StartGame.propTypes = {
    toggle: PropTypes.func
}


const Conatiner = styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    height: 100vh;

    .content {
        h1 {
            font-size: 96px;
            white-space: nowrap;
        }
    }
`;

