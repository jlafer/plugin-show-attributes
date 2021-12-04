import { connect } from 'react-redux';

import CustomerInfoPanel from './CustomerInfoPanel';
import { namespace } from './states';

const mapStateToProps = (state) => ({
    customerInfo: state[namespace].customerInfo,
});

export default connect(mapStateToProps)(CustomerInfoPanel);