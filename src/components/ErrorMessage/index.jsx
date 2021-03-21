import { Message } from './styles';
import PropTypes from 'prop-types';

/**
 * @brief      Display Error Message
 *
 * @param      error  The error
 *
 * @return     {JSX Component}
 */
function ErrorMessage({ error }) {
  return (
    <Message>NETWORK ERROR: {error.message}</Message>
  );
}

/**
 * Add the PropTypes
 */
ErrorMessage.propTypes = {
  error: PropTypes.object.isRequired
};

/**
 * Export the Component
 */
export default ErrorMessage;
