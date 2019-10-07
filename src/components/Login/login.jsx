import React from 'react';
import { connect } from 'react-redux'
import { userActions } from '../../actions'
import { history } from '../../helpers/history';

import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import 'bootstrap-italia/dist/svg/sprite.svg';

//import '../../App.css'
import './login.css'
import { Button, Input, FormGroup, Label } from 'design-react-kit';

class Login extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password:'',
      submitted : false,
      toggle:true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showPassword = this.showPassword.bind(this)
  }

  handleChange(e) {
    const {  name , value } = e.target;
    this.setState({ [name]: value });
  }

  showPassword(e){
    const {  id , value } = e.target;
    const {toggle}= this.state
    toggle?
      this.setState({
        toggle:false,
        
      }) :
      this.setState({toggle:true})
    console.log(toggle)
  }

  handleSubmit(e) {
      e.preventDefault();

      this.setState({ submitted: true });
      const { username, password } = this.state;
      const { dispatch } = this.props;
      if (username && password) {
          dispatch(userActions.login(username, password));
      }
      
  }

  render() {
    const { loggingIn } = this.props;
    const { username, password, submitted, toggle } = this.state;

  return (
    <div className="container col-md-8 col-lg-8" style= {{margin:'auto', paddingTop:' 50px'}}>
      <Input
        id="InputEmail"
        name="username"
        label="Campo di tipo email"
        type="email"
        style ={{border:"1px  solid"}}
        value={username} 
        onChange={this.handleChange}
      />
      <Input
        id="InputPassword"
        name="password"
        infoText="Inserisci almeno 8 caratteri e una lettera maiuscola"
        label="Password "
        type={toggle? "password":"text"}
        style ={{border:"1px  solid"}}
        value={password} 
        onChange={this.handleChange}
      />
      <fieldset>

        <FormGroup
          check
          tag="div"
        >
          <Input
            id="checkbox1"
            type="checkbox"
            onClick={this.showPassword}
          />
          <Label
            check
            for="checkbox1"
            tag="label"
            widths={['xs']}
          >
            show password
      </Label>
        </FormGroup>
      </fieldset>
      <Button type="button"  className="btn red-rome "  size="lg" style={{float:'right'}}  onClick={this.handleSubmit}>Login</Button>
      {loggingIn}
   </div>
  );
}}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
      loggingIn
  };
}

const connectedLoginPage = connect(mapStateToProps)(Login);
export { connectedLoginPage as Login };


