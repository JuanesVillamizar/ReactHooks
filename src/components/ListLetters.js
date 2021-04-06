import React from 'react';
import Word from './Letter';

export const ListLetters = ({listLetters}) => {
    if (Object.keys(listLetters).length === 0){
        return null;
    }else{
        let array = [];
        Object.keys(listLetters).forEach(function(key) {
            array.push(`${key}: ${listLetters[key]}`)
        });
        return array.map( (element, index) => <Word value={element} key={index}/>);
    }
}
export default ListLetters;