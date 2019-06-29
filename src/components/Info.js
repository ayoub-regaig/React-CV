import React from 'react';


class Info extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h3>{this.props.name}</h3>
                <p>{this.props.abc}</p>
            </div>
        )
    }
}

export default Info;