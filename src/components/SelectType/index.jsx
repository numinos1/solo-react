import PropTypes from 'prop-types';

/**
 * @brief      Select the List Type
 *
 * @param      onChange  On change handler
 * @param      value     The value
 *
 * @return     {JSX Component}
 */
function SelectType({ onChange, value }) {
  return (
    <select
      name="listType"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option value="">----- Select Type -----</option>
      <option value="representatives">Representative</option>
      <option value="senators">Senator</option>
    </select>
  );
}

/**
 * Add the PropTypes
 */
SelectType.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
};

/**
 * Export the Component
 */
export default SelectType;
