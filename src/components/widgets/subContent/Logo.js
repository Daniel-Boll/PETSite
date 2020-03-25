import React, {Component} from 'react'

import logo from '../../../assets/logo.png'

class Logo extends Component {
    render() {
        return (
            <>
                <div align="center">
                    <img
                            style={{paddingLeft: "0"}}
                            width={"300px"}
                            src={logo}
                            alt="PETLogo"
                    />{' '}
                </div>
            </>
        )
    }
}

export default Logo;