import React, {Component} from 'react'


class Date extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div classNme="des">
                <h3>{this.props.name}</h3>
                <div ClassName="meme">
                    {/* <h2>{this.props.name}</h2> */}
                    <p>{this.props.date}</p>

                </div>
            </div>
                
        )
    }
}
export default Date;