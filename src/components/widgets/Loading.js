import React from 'react';
import logo from '../../assets/logoC.png'
import '../../css/loadingCSS.css'

const Loading = (props) => {
  return (
    <>
          <div align="center">
            {/* <h1 style={{color: "white"}}>Carregando</h1> */}
            <img
                className="image"
                width={"42px"}
                src={logo}
                alt="PETLogo"
            />{' '}
          </div>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </>
  );
};

export default Loading;