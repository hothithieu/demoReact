import React,{Component} from 'react';
import Header from './header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faChrome, faFirefox} from '@fortawesome/free-brands-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'




class Content extends Component{
  render(){
    return(
      <div className="inner">
          <Header />

          <div className="row flex-grow-1 "> 
            <div className="col-sm khung1 d-flex">
                <div className="row align-items-end">
                  <div className=" col-1"><a href="true" ><FontAwesomeIcon icon={faFacebookF} style={{ color: '#C4C4C4' }} size="lg"/></a></div>
                  <div className=" col-1"><a href="true" ><FontAwesomeIcon icon={faCamera} style={{ color: '#C4C4C4' }} size="lg"/></a></div>
                  <div className=" col-1"><a href="true" ><FontAwesomeIcon icon={faEnvelope} color="red" size="lg"/></a></div>
                  <div className=" col-1"><a href="true" ><FontAwesomeIcon icon={faChrome} style={{ color: '#C4C4C4' }} size="lg"/></a></div>
                  <div className=" col-1"><a href="true" ><FontAwesomeIcon icon={faFirefox} cstyle={{ color: '#C4C4C4' }} size="lg"/></a></div>
                </div>
            </div>
            
            <div className="col-sm khung2 d-flex">
                <div className="row align-items-center ">
                  <div className="col-12">
                    <h3 style={{ color: '#AD843C' }}>Hi there! my name is</h3>
                    <p><h1> Heather</h1></p>
                    <p><h1>Dumo</h1></p>
                    <p> A product designner who is</p>
                    <p>curious about human behaviour</p>
                    <p> and your user experiences.</p>
                    <p></p><p>
                      <div className="row">
                          <div className="col"><button>Résumé</button></div>
                          <div className="col"><button className="button1" >say hi!</button></div>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col align-self-end  ">
                <p style={{ color: '#AD843C'}}>Truyện Cổ Tích.</p>
              </div>
          </div>
      </div>
    );
  }
}
export default Content;