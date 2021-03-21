import UsaStates from 'usa-states';
import PropTypes from 'prop-types';

const { states } = new UsaStates.UsaStates();

/**
 * @brief      Select the State
 *
 * @param      onChange  On change handler
 * @param      value     The value
 *
 * @return     {JSX Component}
 */
function SelectState({ onChange, value }) {
  return (
    <select
      name="stateCode"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option value="">----- Select State -----</option>

      {states.map(state => (
        <option
          key={state.abbreviation}
          value={state.abbreviation}
        >
          {state.name}
        </option>
      ))}
    </select>
  );
}

/**
 * Add the PropTypes
 */
SelectState.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
};

/**
 * Export Component
 */
export default SelectState;
