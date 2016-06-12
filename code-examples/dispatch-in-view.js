<input
  value={person.firstName}
  onChange={e => dispatch({
    type: 'Change',
    data: {
      firstName: e.target.value,
    }
  })} />
