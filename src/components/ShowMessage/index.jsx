import { Message } from './styles';
import PropTypes from 'prop-types';

/**
 * @brief      Show Message
 *
 * @param      message  The message
 *
 * @return     {JSX Component}
 */
function ShowMessage({ message }) {
  return (
    <Message>
      {message}<br/>
    </Message>
  );
}

/**
 * Add the PropTypes
 */
ShowMessage.propTypes = {
  message: PropTypes.string.isRequired
};

/**
 * Export the Component
 */
export default ShowMessage;
