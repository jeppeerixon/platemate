export const MALE_BAR: number = 20;
export const FEMALE_BAR: number = 15;

export const RED_25KG_PLATE: number = 25;
export const BLUE_20KG_PLATE: number = 20;
export const YELLOW_15KG_PLATE: number = 15;
export const GREEN_10KG_PLATE: number = 10;

export const plateArray: Array<number> = [RED_25KG_PLATE, BLUE_20KG_PLATE, YELLOW_15KG_PLATE, GREEN_10KG_PLATE]
export const plateTypeName: Array<string> = ["OPTIMIZED", "BLUE PLATES", "YELLOW?", "MAXIMUM"]

export const COUNT_ONE_SIDE_ONLY: number = 2;

export const CHANGE_WEIGHT_RED_25: Array<number> = [ 20, 15, 10, 5, 2.5, 2, 1.5, 1.25, 1, 0.5 ];
export const CHANGE_WEIGHT_BLUE_20: Array<number> = [ 15, 10, 5, 2.5, 2, 1.5, 1.25, 1, 0.5 ];
export const CHANGE_WEIGHT_YELLOW_15: Array<number> = [ 10, 5, 2.5, 2, 1.5, 1.25, 1, 0.5 ];
export const CHANGE_WEIGHT_GREEN_10: Array<number> = [ 5, 2.5, 2, 1.5, 1.25, 1, 0.5 ];

let finalSmallWeights: Array<number> = [];
let finalBigPlates: Array<number> = [];
let finalAllThePlates: Array<number> = [];

export function printResult(bigPlateTotal: Array<number> = [], smallPlateTotal: Array<number> = []): Array<number> {
    if (smallPlateTotal.length == 0) {
        return bigPlateTotal;
    }
    else {
        finalAllThePlates = bigPlateTotal.concat(smallPlateTotal);
        return finalAllThePlates
    }
}

// kanske göra om parametrar till en class ???
export function countPlates(weightAmount: number, barType: number, plateType: number, changeWeightType: Array<number>): Array<number> {
    finalSmallWeights = [];
    finalBigPlates = [];

    let plateWeight = weightAmount - barType;
    let weightLeft = plateWeight % (plateType * COUNT_ONE_SIDE_ONLY);
    let bigPlateAmount = plateWeight / plateType / COUNT_ONE_SIDE_ONLY;

    if (weightLeft == 0) {
        for (let i = 0; i < Math.floor(bigPlateAmount); i++){
            finalBigPlates.push(plateType);
        }
        return printResult(finalBigPlates)

    } else { 
        for (let i = 0; i < Math.floor(bigPlateAmount); i++) {
            finalBigPlates.push(plateType);
        }
        countChangeWeight(weightLeft, changeWeightType) //kanske behöver funktion till variabel ??
        return printResult(finalBigPlates, finalSmallWeights)
        
    }
    
}

export function countChangeWeight(smallWeightLeft: number, theChangeWeight: Array<number>): Array<number> {    
    let i = 0;
    smallWeightLeft = smallWeightLeft / COUNT_ONE_SIDE_ONLY;
    while (smallWeightLeft >= 0) {
        if ((smallWeightLeft- theChangeWeight[i]) < 0 ) {
            i++
        }
        else if ((theChangeWeight[i] - smallWeightLeft) == 0) {
            finalSmallWeights.push(theChangeWeight[i]);
            break;
        }
        else {
            finalSmallWeights.push(theChangeWeight[i]);
            smallWeightLeft = smallWeightLeft - theChangeWeight[i];
            i++ 
        }
    }
    return finalSmallWeights
}