import withStyles from 'react-jss';
import {compose} from 'redux';
import styles from './styles';

import Loader from './Loader';
import Spinner from '../spinner';

export default compose(
    withStyles(styles),
)(
    Loader({
      Spinner,
    }),
);

