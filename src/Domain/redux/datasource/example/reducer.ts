export default function reducer(
  state = {
    ASAP_STATE: null
  },
  action,
) {
  switch (action.type) {
    
    case 'ASAP_ACTION': {
      return {
        ASAP_STATE: 'OK'
      };
    }

    default: return state;
  }
}
