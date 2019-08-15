import React, { Component } from 'react';

class Inpu extends Component {
    render() {
        var inpuposition = { display: 'flex', justifyContent: 'center', marginLeft: '-167px' };
        var inpdesign = { backgroundColor: '#42A490', color: '#E1F19F', height: '30px', fontSize: '25px', width: '250px', marginTop: '15px' };

        return (
            <div style={inpuposition}>
                <input value='7253 3256 7895 1245' style={inpdesign} />
            </div>
        );
    }
}

export default Inpu;