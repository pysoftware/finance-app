import {compose} from 'redux';
import {connect} from 'react-redux';
import PrivateRoute from './PrivateRoute';
import connector from './connector';

export default compose(
    connect(connector, null),
)(PrivateRoute);