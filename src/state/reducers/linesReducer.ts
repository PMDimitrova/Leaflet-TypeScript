import { ActionTypes } from '../action-types';
import { Action } from '../actions';

export interface LineData {
  line: string;
  transportType: string;
  routeAB: {
    stops: {
      id: string;
      name: string;
      averagePeople: number;
      dataPoints: number;
      location: { lat: number; lon: number };
    }[];
    segments: {
      id: string;
      name: string;
      averagePeople: number;
      averageCrowding: number;
      dataPoints: number;
      coordinates: {}[];
    }[];
  };
  routeBA: {
    stops: {
      id: string;
      name: string;
      averagePeople: number;
      dataPoints: number;
      location: { lat: number; lon: number };
    }[];
    segments: {
      id: string;
      name: string;
      averagePeople: number;
      averageCrowding: number;
      dataPoints: number;
      coordinates: {}[];
    }[];
  };
}

interface LinesState {
  linesData: LineData[];
  busesData: LineData[];
  trolleybusesData: LineData[];
  tramsData: LineData[];
  shouldShowAllLines: boolean;
  specificLineData: LineData;
}

const INITIAL_STATE: LinesState = {
  linesData: [],
  busesData: [],
  trolleybusesData: [],
  tramsData: [],
  shouldShowAllLines: true,
  specificLineData: {
    line: '',
    transportType: '',
    routeAB: {
      stops: [],
      segments: [],
    },
    routeBA: {
      stops: [],
      segments: [],
    },
  },
};
const linesReducer = (state: LinesState = INITIAL_STATE, action: Action): LinesState => {
  switch (action.type) {
    case ActionTypes.SHOW_DATA_FOR_ALL_LINES:
      return { ...state, linesData: action.payload, shouldShowAllLines: true };
    case ActionTypes.ADD_DATA_FOR_BUS_LINES:
      return { ...state, busesData: action.payload };
    case ActionTypes.ADD_DATA_FOR_TROLLEYBUS_LINES:
      return { ...state, trolleybusesData: action.payload };
    case ActionTypes.ADD_DATA_FOR_TRAM_LINES:
      return { ...state, tramsData: action.payload };
    case ActionTypes.SHOW_SPECIFIC_LINE:
      return { ...state, shouldShowAllLines: false, specificLineData: action.payload };
    case ActionTypes.SHOULD_SHOW_ALL_LINES:
      return { ...state, shouldShowAllLines: true };
    default:
      return state;
  }
};

export default linesReducer;
