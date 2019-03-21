import { connect } from 'react-redux';
import Layout from '../../components/Layout';
import { fetchUser, fetchRepos, dismissError } from '../../actions';

const mapStateToProps = ({ user, errorMsg }) => ({ user, errorMsg })

export default connect(
  mapStateToProps,
  { fetchUser, fetchRepos, dismissError }
)(Layout)
