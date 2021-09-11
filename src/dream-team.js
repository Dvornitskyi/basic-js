import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
    if(!Array.isArray(members)){
        return false;
    }
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let abc = [];
    for(let i = 0; i < members.length; i++){
        if(typeof members[i] === 'string')
        {
            for(let j = 0; j < possible.split('').length; j++){
                members[i] = members[i].toUpperCase().replace(/\s/g, '');
                            if(members[i].split('')[0] == possible.split('')[j]){
                                abc.push(members[i].split('')[0]);
                            }
                }
            }
        }
    let a = abc.sort().join('');  
    return a;  
  }