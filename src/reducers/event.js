const initialState = {
  evt: {
    title: '',
    location: '',
    note: '',
    selectedDays: [],
    selectedTimes: []
  }
}

export default function eventReducer(state = initialState, action) {
  switch(action.type) {
    // Title, Location, Note
    case 'SAVE_STEP_1':
      return {
        ...state,
        evt: {
          ...state.evt,
          title: action.title,
          location: action.location,
          note: action.note
        }
      }

    case 'ADD_TO_SELECTED_DAYS':
      return {
        ...state,
        evt: {
          ...state.evt,
          selectedDays: state.evt.selectedDays.concat([action.day])
        }
      }

    case 'ADD_TO_SELECTED_TIMES':
      return {
        ...state,
        evt: {
          ...state.evt,
          selectedTimes: state.evt.selectedTimes.concat([action.time])
        }
      }

    case 'GET_LOCATION_SUGGESTION':
      console.log(action.payload)
      return {
        ...state,
        evt: {
          ...state.evt,
          location: state.location
        }
      }

    default:
      return state
  }
}
