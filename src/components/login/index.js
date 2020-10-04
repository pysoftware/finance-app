import {compose} from 'redux';
import {connect} from 'react-redux';
import Login from './Login';
import connector from './connector';
import dispatcher from './dispatcher';

export default compose(
    connect(connector, dispatcher)
)(Login);