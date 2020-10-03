import Header from './Header';
import {compose} from 'redux';
import {connect} from 'react-redux';
import dispatcher from './dispatcher'

export default compose(
    connect(null, dispatcher)
)(Header);