import Header from './Header';
import {compose} from 'redux';
import {connect} from 'react-redux';
import dispatcher from './dispatcher';
import connector from './connector';

export default compose(
    connect(connector, dispatcher),
)(Header);