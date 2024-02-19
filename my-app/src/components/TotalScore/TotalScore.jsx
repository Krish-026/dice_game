import styled from "styled-components"
import PropTypes from "prop-types"
function TotalScore({score}) {
    return (
        <ScoreContainer>
            <h1>{score}</h1>
            <p>Total Score</p>
        </ScoreContainer>
    )
}

export default TotalScore

TotalScore.propTypes = {
    score: PropTypes.number.isRequired,
}
const ScoreContainer = styled.div` 
    max-width: 200px;
    text-align: center;
    h1 {
        font-size: 100px;
        line-height: 100px;
    }
    p {
        font-size: 24px;
        font-weight: 500px;
    }
`;