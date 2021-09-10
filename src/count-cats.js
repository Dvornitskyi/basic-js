import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} cats
 *
 * @example
 */
export default function countCats(matrix) {
    let cats = 0;
    for(let i = 0; i < matrix.length; i++)
        {
            for(let j = 0; j < matrix[i].length; j++){
                if(matrix[i][j] === '^^'){
                    cats++;
                }
            }   
        }
        return cats;
}

