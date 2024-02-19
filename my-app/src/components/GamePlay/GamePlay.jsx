import styled from "styled-components"
import NumberSelector from "../NumberSelector/NumberSelector"
import TotalScore from "../TotalScore/TotalScore"
import RoleDice from "../RoleDice/RoleDice"
import { useState } from "react";
import { Button, OutlineButton } from "../../styled/Button";
import Rules from "../Rules/Rules";

function GamePlay() {

    const [score, setScore] = useState(0);
    const [currentDice, setCurrentDice] = useState(1);
    const [selectedNumber, setSelectedNumber] = useState(0);
    const [error, setError] = useState("");
    const [showRules, setShowRules] = useState(false);
    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const roleDice = () => {
        if(selectedNumber === 0){
            setError("Please select a number");
            return;
        }
        const randomDice = generateRandomNumber(1, 6);
        console.log(randomDice);
        setCurrentDice(() => randomDice);


        if(selectedNumber === randomDice){
            setScore((prevState) => prevState + randomDice);
        }else{
            setScore((prevState) => prevState - 2);
        }

        setSelectedNumber(0);
    }

    const resetScore = () => {
        setScore(0);
        setCurrentDice(1);
    }

    return (
        <MainContainer>
            <div className="top_section">
                <TotalScore score = {score}/>
                <NumberSelector
                    error={error}
                    setError={setError}
                    selectedNumber={selectedNumber}
                    setSelectedNumber={setSelectedNumber}
                />
            </div>
            <RoleDice
                currentDice={currentDice}
                roleDice={roleDice}
            />

            <div className="btns">
                <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
                <Button
                    onClick={() => setShowRules((prevState) => !prevState)}
                > {showRules ? "Hide" : "Show"} Rules</Button>
            </div>
            {showRules &&<Rules/> }
        </MainContainer>
    )
}

export default GamePlay

const MainContainer = styled.main`
    padding-top: 70px;
    .top_section{
        display: flex;
        align-items: end;
        justify-content: space-around;
    }
    .btns{
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
        justify-content: space-around;
        margin-top: 50px;
    }
`;

