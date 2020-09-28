import React from 'react';
import '../../App.css';
import PastGrid from '../PastGrid';
import MOCK_DATA from '../../PastData';

export default function Past() {
    return (
        <>
            <PastGrid array={MOCK_DATA}/>
        </>
    )
}
