import React, { Component } from 'react';

class Titre extends Component {
    render() {
        var titdesign = { display: 'flex', justifyContent: 'flex-end', marginRight: '40px' };
        var titcol = { color: 'white' };
        return (
            <div style={titdesign}>
                <h1 style={titcol}>CREDIT CARD</h1>
            </div>
        );
    }
}

export default Titre;