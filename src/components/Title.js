import React from 'react';

class Titre extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return ( 
            <div>
                <h3 style={{color:this.props.color}}> {this.props.name}</h3>
            </div>
        );
    }
}

export default Titre ;