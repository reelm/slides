import { forwardTo } from 'reelm';

// ...
<PersonEditForm
  person={person}
  dispatch={forwardTo(dispatch, 'Person')}
  />
// ...
