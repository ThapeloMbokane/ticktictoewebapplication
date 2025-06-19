
const winningMatrix = {

    0: [[1,2],[3,6],[4,8]],
    1: [[0,2],[4,7]],
    2: [[0,1],[5,8],[4,6]],
    3: [[0,6],[4,5]],
    4: [[2,6],[3,5],[1,7],[0,8]],
    5: [[3,4],[2,8]],
    6: [[7,8],[0,3],[2,4]],
    7: [[6,8],[1,4]],
    8: [[6,7],[2,5],[0,4]]

};

export const calculateWinner = (cellValues,numberOfTurnsLeft, cellIndex) => {

    const winningCombos = winningMatrix[cellIndex];

    for(let x = 0; x < winningCombos.length; x++){
        
        const clickedCell = cellValues[cellIndex];
        const firstOption = cellValues[winningCombos[x][0]];
        const secondOption = cellValues[winningCombos[x][1]];

        if(clickedCell === firstOption && firstOption === secondOption){
            return {
                hasResult : true,
                winner : clickedCell,
                winningCombinatination: [cellIndex,winningCombos[x][0],winningCombos[x][1]]
            };
        }

    }

    
    if(numberOfTurnsLeft === 0){
        return {
            hasResult : true,
            winner : undefined,
            winningCombinatination: []
        };
    }

    return{
        hasResult : false,
        winner : undefined,
        winningCombinatination: []
    }
}