import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './Header'
import { connect } from 'react-redux'
import * as actions from '../Actions'

const Landing = () => <div>Landing</div>
const Dashboard = () => <div>Dashboard</div>
const SurveyNew = () => <div>New Surveys</div>

const style = {
    marginLeft: '7.5px'
}

class App extends React.Component {

    componentDidMount() {
        this.props.fetchUser()
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <div style={style}>
                        <Route path="/" component={Landing} exact/>
                        <Route path="/surveys" component={Dashboard} exact/>
                        <Route path="/surveys/new" component={SurveyNew}/>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, actions)(App)