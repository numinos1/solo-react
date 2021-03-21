import { List, ListTitle, ListTable } from './styles';
import PropTypes from 'prop-types';

/**
 * @brief      List People
 *
 * @param      people     The people
 * @param      onClick  On click
 *
 * @return     {JSX Component}
 */
function ListPeople({ people, onClick, personInfo, listType }) {
  return (
    <List>
      <ListTitle>
        List / <span>{listType}</span>
      </ListTitle>

      <ListTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Party</th>
          </tr>
        </thead>
        <tbody>
          {people.map(person => (
            <tr
              key={person.name}
              className={personInfo === person ? 'selected': ''}
              onClick={() => onClick(person)}
            >
              <td>{person.name}</td>
              <td>{person.party}</td>
            </tr>
          ))}
        </tbody>
      </ListTable>
    </List>
  );
}

/**
 * Add the PropTypes
 */
ListPeople.propTypes = {
  people: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  personInfo: PropTypes.object,
  listType: PropTypes.string.isRequired
};

/**
 * Export the Component
 */
export default ListPeople;
