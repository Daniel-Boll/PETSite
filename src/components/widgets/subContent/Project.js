import React, { Component } from 'react'

export default class Project extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            title: props.title,
            description: props.description,
            onSmartView: props.onSmartView,
            index: props.index
        }
    };

    render(){
        const { title, description, onSmartView, index } = this.state;
        let smartStyle = {marginBottom: '50px'};
        let alignTitle = 'left';

        if(onSmartView){
            smartStyle = {marginBottom: '50px', padding: '20px'};
            alignTitle = 'center';
        }else{
            smartStyle = {marginBottom: '50px'};
            alignTitle = 'left';
        }
        return(
            <React.Fragment>
                <div align="left" style = { smartStyle }>   
                    <h1 align = { alignTitle } style={{color: "white"}}>{ title }</h1>
                    <div align="left">
                        <p style={{color: "white"}}>
                            { description }
                        </p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}