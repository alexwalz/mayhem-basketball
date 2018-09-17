import React, { Component} from 'react'
import Sidebar from './Sidebar'
import './styles.css'
import axios from 'axios'
import Vehicles from '../vehicles/View'
import AdminView from '../adminPortal/View'
// eslint-disable-next-line 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class Profile extends Component {
	constructor(props) {
        super(props);
		this.state={

		}
    }

    componentDidMount=()=>{
        var currentComponent = this
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.get('/api/users/authenticate').then(function(response){
            console.log(response)
            currentComponent.setState({authUser: response})
        }).catch(function(err){
          console.log(err)
        })
    }


    render() {

      return ( 
            <div>

                <Sidebar/>

                <div style={{marginLeft: "150px", padding: "5%"}}>
                    <Switch location={this.props.location}>
                        <Route path="/profile/vehicles" component={Vehicles} />
                        <Route path="/profile/admin" component={AdminView} />
                    </Switch>
                </div>


                

            </div>

                
        )
    }
  }
  
  export default Profile;