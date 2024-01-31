import { ActionTypes } from '../action-types';
import { Action } from '../actions';

export interface LineData {
  line: string;
  transportType: string;
  routesAB: {
    stops: object[];
    segments: object[];
  };
  routeBA: {
    stops: object[];
    segments: object[];
  };
}

interface LinesState {
  linesData: LineData[];
  shouldShowAllLines: boolean;
}

const INITIAL_STATE: LinesState = {
  linesData: [],
  shouldShowAllLines: true,
};
const linesReducer = (state: LinesState = INITIAL_STATE, action: Action): LinesState => {
  switch (action.type) {
    case ActionTypes.SHOW_DATA_FOR_ALL_LINES:
      return { linesData: action.payload, shouldShowAllLines: true };
    case ActionTypes.SHOULD_SHOW_ALL_LINES:
      return { ...state, shouldShowAllLines: true };
    // case 'showSpecificLineAction':
    //   return {shouldShowAllLines: false, }; or we're going to use action.payload?
    default:
      return state;
  }
};

export default linesReducer;
