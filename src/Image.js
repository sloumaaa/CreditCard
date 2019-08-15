import React, { Component } from 'react';
import Chip from './chip.png';

class Image extends Component {
    render() {
        var imposition = { display: 'flex', justifyContent: 'flex-start' };
        var imdesign = { width: '75px', height: '95px', marginTop: '-10px', marginLeft: '29px' };
        return (
            <div style={imposition}>
                <img src={Chip} style={imdesign} />
            </div>
        );
    }
}

export default Image;