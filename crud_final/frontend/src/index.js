import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loginicon from './person-outline.svg'
import { Container, Row, Col } from 'react-grid-system';

//ReactDOM.render(<Login />, document.getElementById('root'));
let textlogin = React.createRef();
let textsenha = React.createRef();

class MyForm extends React.Component {
 
    shoot() {
       var login=textlogin.current.value;
       var senha=textsenha.current.value;
       const loginv = 'Admin';
       const senhav = '123';
        if(login == loginv && senha==senhav){
            ReactDOM.render(<App  />, document.getElementById('root'));
            
        }else{
            alert("Login ou senha inválidos");
        }
        
      }
 
    render() {
         

      return (

          <><Container>
              <Row>
                  <Col sm={4}>
                   
                  </Col>
                  <Col sm={4}>
                  <center>
                  <img src={Loginicon} alt="Início" width="121" height="80" />
                  </center>
                  <form>
                   
                  <div class="form-group">
                      <label for="exampleInputEmail1">Login:</label>
                      <input  ref={textlogin} type="text" class="form-control" aria-describedby="emailHelp" placeholder="Login" />

                  </div>
                  <div class="form-group">
                      <label for="exampleInputPassword1">Senha:</label>
                      <input   ref={textsenha}type="password" class="form-control" id="exampleInputPassword1" placeholder="Senha" />
                  </div>
                  <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                      <label class="form-check-label" for="exampleCheck1">Lembrar-me</label>
                  </div>
                  <button type="submit" class="btn btn-success"  onClick={this.shoot}>Entrar</button>
              </form>
                  </Col>
                  <Col sm={4}>
                   
                  </Col>
              </Row>
          </Container>
      </>
      );
      




    }
  
    
  }
  ReactDOM.render(<MyForm />, document.getElementById('root'));
registerServiceWorker();
