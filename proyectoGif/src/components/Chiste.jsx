import React, {Component} from 'react';

class Chiste extends Component {
    constructor(props) {
        super(props)
    }

    componentWillUnmount(){
        console.log('El chiste se desmontará')
    }

    render() {
        return (
            <div>
                <h1>Este es un chiste!</h1>
            </div>
        )
    }

}

export default Chiste