import styled from "styled-components"
import PropTypes from 'prop-types'
// let add = 100;
function NumberSelector({ setError,error, selectedNumber, setSelectedNumber}) {

    const arrNumber = [1, 2, 3, 4, 5, 6];

    
    console.log(selectedNumber)

    const numberSelectorHandler = (value)=>{
        setSelectedNumber(value);
        setError("");
    }
    return (
        <NumberSelectorContainer>
            <p className="error">{error}</p>
            <div className="flex">
                {
                    arrNumber.map((value, index) => {

                        {/* {console.log(++add)} */ }

                        return (
                            <Box
                                isSelected={selectedNumber === value}
                                key={index}
                                onClick={() => numberSelectorHandler(value)}
                            >
                                {value}
                            </Box>

                        )
                    })
                }
            </div>
            <p>Select Number</p>
        </NumberSelectorContainer>
    )
}

export default NumberSelector

NumberSelector.propTypes = {
    setError: PropTypes.func,
    error: PropTypes.string,
    selectedNumber: PropTypes.number,
    setSelectedNumber: PropTypes.func,
}

const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    .flex {
        display: flex;
        gap: 24px;
    }
    p {
        font-size: 24px;
        font-weight: 700px;
    }

    .error {
        color: red;
    }
`;


const Box = styled.div` 
    /* min-height: 72px;
    min-width: 72px; */


    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => props.isSelected ? "black" : "white"};
    color: ${(props) => props.isSelected ? "white" : "black"};
`;

Box.defaultProps = {
    isSelected: false
}
Box.propTypes = { 
    isSelected: PropTypes.bool
}