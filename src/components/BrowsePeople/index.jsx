import { useQuery } from 'react-query';
import PropTypes from 'prop-types';
import fetchPeople from 'api/fetchPeople';
import LoadingIndicator from 'components/LoadingIndicator';
import ErrorMessage from 'components/ErrorMessage';
import ShowMessage from 'components/ShowMessage';
import ListPeople from 'components/ListPeople';
import PersonInfo from 'components/PersonInfo';
import { ListContainer } from './styles';

/**
 * @brief      People Browser
 *
 * @param      listType    The list type
 * @param      stateCode   The state code
 * @param      personInfo  The person information
 * @param      onClick     On click handler
 *
 * @return     { description_of_the_return_value }
 */
function BrowsePeople({ listType, stateCode, personInfo, onClick }) {
  const { isLoading, error, data } = useQuery([listType, stateCode], fetchPeople);

  if (isLoading) {
    return <LoadingIndicator />
  }
  if (error) {
    return <ErrorMessage error={error} />
  }
  if (!listType) {
    return <ShowMessage message="Select a Type" />
  }
  if (!stateCode) {
    return <ShowMessage message="Select a State" />
  }
  if (!data || !data.length) {
    return <ShowMessage message="No Results" />
  }

  return (
    <div>
      <ListContainer>

        <ListPeople
          people={data}
          personInfo={personInfo}
          listType={listType}
          onClick={onClick}
        />

        {personInfo && (
          <PersonInfo details={personInfo} />
        )}

      </ListContainer>

    </div>
  )
}

/**
 * Add the PropTypes
 */
BrowsePeople.propTypes = {
  listType: PropTypes.string,
  stateCode: PropTypes.string,
  personInfo: PropTypes.object,
  onClick: PropTypes.func
};

/**
 * Export the Component
 */
export default BrowsePeople;
