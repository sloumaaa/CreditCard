import React, { Component } from 'react';

class Credbas extends Component {
    render() {
        var basposition = { display: 'flex' };
        var immdesign = { width: '75px', height: '95px' };
        var divone = { marginRight: '39px', marginLeft: '39px', marginTop: '20px' };
        var divtwoone = { marginRight: '5px', marginTop: '10px' };
        var divtwotwo = { marginTop: '18px', marginLeft: '-30px' };
        var divthree = { marginRight: '105px' };
        var hfivecol = { color: 'white', fontSize: '20px', marginTop: '-16px', marginLeft: '-1px', fontWeight: 'bold' };
        var one = { fontSize: '10px', color: 'white' };
        var two = { fontSize: '10px', color: 'white' };
        var three = { fontSize: '10px', color: 'white' };

        return (
            <div style={basposition}>
                <div style={divone}>
                    <h5 style={hfivecol}>5422</h5>
                    <h5 style={hfivecol}>CARDHOLDER</h5>
                </div>
                <div style={divtwoone}>
                    <p style={one}>VALID</p>
                </div>
                <div style={divtwotwo}>
                    <p style={two}>THRU</p>
                </div>
                <div style={divthree}>
                    <p style={three}>Month/Year</p>
                    <p style={hfivecol}>11/50</p>
                </div>
                <div>
                    <img src={'https://s.olj.me/storage/attachments/753/752364_16990157876_565239.jpeg/r/800'} style={immdesign} />
                </div>
            </div>
        );
    }
}

export default Credbas;