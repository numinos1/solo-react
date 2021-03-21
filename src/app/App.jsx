import { useState } from 'react';
import { Application, Title, SelectForm } from './styles';
import SelectState from 'components/SelectState';
import SelectType from 'components/SelectType';
import BrowsePeople from 'components/BrowsePeople';

/**
 * App Component
 *
 * @class      App (name)
 * @return     {<type>}  { description_of_the_return_value }
 */
export default function App() {
  const [state, setState] = useState({
    listType: '',
    stateCode: '',
    personInfo: null
  });

  return (
    <Application>

      <Title>Who's My Representative?</Title>

      <SelectForm>
        <SelectType
          value={state.listType}
          onChange={(listType) => setState({
            ...state,
            listType,
            personInfo: null
          })}
        />
        <SelectState
          value={state.stateCode}
          onChange={(stateCode) => setState({
            ...state,
            stateCode,
            personInfo: null
          })}
        />
      </SelectForm>

      <BrowsePeople
        onClick={(personInfo) => setState({
          ...state,
          personInfo
        })}
        {...state}
      / >

    </Application>
  );
}
