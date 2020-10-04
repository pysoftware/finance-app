import {compose} from 'redux';
import Layout from './Layout';
import {connect} from 'react-redux';
import connector from './connector';

export default compose(
    connect(connector, null),
)(Layout);