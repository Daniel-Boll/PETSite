import React, {Component} from 'react'
import {MenuBook, FileCopy, Share} from '@material-ui/icons';

class Logo extends Component {
    render() {
        return (
            <>
                <div>   
                    <MenuBook style={{color: "#955dff", fontSize: 140}}/>
                    <FileCopy style={{color: "#955dff", fontSize: 140}}/>
                    <Share style={{color: "#955dff", fontSize: 140}}/>
                </div>
            </>
        )
    }
}

export default Logo;