import React from 'react';
import ReactDOM from 'react-dom';

class Like extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            like:10
        }
        this.addLike = this.addLike.bind(this);
    }
    addLike(like){
        
        const newLike = this.state.like;
        // console.log('new',newLike);
        this.setState({
                like:newLike+1
        })
    }
    render(){
        const {like} = this.state;
        return(
                <div>
                    <button onClick={this.addLike}>Like</button>
                    <span>{like}</span>
                </div>
                
            )
    }
    
    
}

export default Like;