import React, {Component} from 'react'
import test from '../../../assets/test.png'


class Logo extends Component {
    render() {
        return (
            <>
                <div align="center">   
                    <img 
                        style={{paddingLeft: "0"}}
                        width={"350px"}
                        src={test}
                        alt="PETtest"
                    >    
                    </img>
                </div>
            </>
        )
    }
}

export default Logo;