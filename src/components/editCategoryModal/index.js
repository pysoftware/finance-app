import EditCategoryModal from './EditCategoryModal';
import {compose} from 'redux';
import {connect} from 'react-redux';
import connector from './connector';
import dispatcher from './dispatcher';

export default compose(
    connect(connector, dispatcher),
)(EditCategoryModal);