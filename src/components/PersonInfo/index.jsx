import { Info, ListTitle, Details } from './styles';
import PropTypes from 'prop-types';

/**
 * @brief      Person Info Component
 *
 * @param      details  The details
 *
 * @return     {JSX Component}
 */
function PersonInfo({ details }) {
  return (
    <Info>
      <ListTitle>
        Info
      </ListTitle>

      <Details>
        <li>
          <div>First Name</div>
          <div>{toFirstName(details.name)}</div>
        </li>
        <li>
          <div>Last Name</div>
          <div>{toLastName(details.name)}</div>
        </li>
        {details.district && (
          <li>
            <div>District</div>
            <div>{details.district}</div>
          </li>
        )}
        <li>
          <div>Phone</div>
          <div>{details.phone}</div>
        </li>
        <li>
          <div>Office</div>
          <div>
            {details.office.split(';').map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
        </li>
        <li>
          <div>Link</div>
          <div>
            <a target="_blank" rel="noreferrer" href={details.link}>{details.link}</a>
          </div>
        </li>
      </Details>

    </Info>
  );
}

/**
 * @brief      Extract First Name
 *
 * @param      name  The full name
 *
 * @return     {String}
 */
function toFirstName(name = '') {
  return name.match(/^\w+/)[0];
}

/**
 * @brief      Extract Last Name
 *
 * @param      name  The full name
 *
 * @return     {String}
 */
function toLastName(name = '') {
  return name.match(/\w+$/)[0];
}

/**
 * Add the PropTypes
 */
PersonInfo.propTypes = {
  details: PropTypes.object.isRequired
};

/**
 * Export the Component
 */
export default PersonInfo;
