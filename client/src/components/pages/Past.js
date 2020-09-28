import React from 'react';
import '../../App.css';
import PastGrid from '../PastGrid';
import MOCK_DATA from '../../PastData';
import './Past.css';

export default function Past() {
    return (
        <>
            <div className="pastGrid">
                <PastGrid array={MOCK_DATA}/>
            </div>
        </>
    )
}
