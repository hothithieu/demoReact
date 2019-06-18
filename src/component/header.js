import React,{Component}from 'react';


class Header extends Component{
  render(){
    return(
      
        <header>
          <div className="header">
            <div className="row">
              <div className="col-sm">
                <div className="logo"><h1 style={{color:'#C4C4C4'}}>Dumbo.</h1></div>
              </div>
              <div className="col-sm">
                <div className="menu"style={{ color: '#C4C4C4' }} >
                    <ul>
                      <li><a class="active" href="#home">Home</a></li>
                      <li><a href="#news">About</a></li>
                      <li><a href="#contact">Work </a></li>
                      <li><a href="#about">Contact</a></li>
                    </ul>
                </div>
                </div>
            </div>
          </div>
        </header>
        
    );
  }
}
export default Header;