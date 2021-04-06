import React from 'react';
import Card from "../components/Card";
import {screen} from '../components/ComponentsStyles';
import Button from "../components/Button";

export const Start = () => {
    return (
        <div style={screen}>
            <div className='container'>
                <div className='row py-3'>
                    <Card title='En facebook' text='En facebook me encuentras como Juanes'/>
                    <Card title='En Instagram' text='En instagram me encuentras como Juanes'/>
                    <Card title='En Youtube' text='En youtube me encuentras como Juanes'/>
                    <Card title='En Twitter' text='En twitter me encuentras como Juanes'/>
                    <Card title='En facebook' text='En facebook me encuentras como Juanes'/>
                    <Card title='En Instagram' text='En instagram me encuentras como Juanes'/>
                    <Card title='En Youtube' text='En youtube me encuentras como Juanes'/>
                    <Card title='En Twitter' text='En twitter me encuentras como Juanes'/>
                </div>
                <Button name='start' />
            </div>
        </div>
    );
}
export default Start;