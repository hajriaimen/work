import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Icon, Pager,PagerList,PaginationItem, PaginationLink, } from 'design-react-kit';
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import 'bootstrap-italia/dist/svg/sprite.svg';
import './UserManagment.css';


import TestPage from './test.jsx';

const users=[   { id:1,name: 'Louise', age:"Manager", color: 'test@test.com' },
                { id:2,name: 'Margaret', age: "Manager", color: 'hello@hello.com'},
                { id:3, name: 'Lisa', age:"Manager", color: 'alma@alma.com'}
            ]; 

class  UserManagment extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          managers:users,
        };
        console.log(this.state.managers)
        this.getManagers=this.getManagers.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
      getManagers() {
        return this.state.managers.map((data, index) => {
           const { id, name, age, color } = data //destructuring
           console.log(data)
           return (

              <tr key={index}>
                 <td>{id}</td>
                 <td>{name}</td>
                 <td>{age}</td>
                 <td>{color}</td>
                 <td>
                       <div className="hajri"  style={{float:'left'}} onClick={(e) => this.handleChange(e)}> 
                       <Icon
                                icon="it-close-circle"
                                padding={false}
                                size=""   
                                name="delete"  
                            /> 
                       </div>
                        <div>
                            <Icon
                                icon="it-pencil"
                                padding={true}
                                size=""   
                            /> 
                    </div>                           
                 </td>
              </tr>
           )
        })
     }
    
      handleChange (event)  {
        const {  className  } = event.target;
        event.preventDefault();
        console.log(className);
      }
    
    
    render(){
    return (
        <div>
        <div className="table-responsive-lg row"  style={{paddingTop:"50px"}}>
            <table className="table table-responsive-lg col-lg-8  "  style={{margin:'auto',paddingTop:"100px"}}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Username</th>
                        <th scope="col">Role</th>
                        <th scope="col">Email</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody >
                    {this.getManagers()}
                </tbody>
            </table>

        </div>
        <div className ="row"  style={{margin:'auto',paddingLeft:"30%"}}>
                <TestPage  />
                
            </div>
        </div>
    );}
}
export default UserManagment;