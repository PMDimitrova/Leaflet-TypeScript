import { LineData } from '../../_constants/interfaces';
import { ActionTypes } from '../action-types';

interface ShowDataForAllLinesAction {
  type: ActionTypes.SHOW_DATA_FOR_ALL_LINES;
  payload: LineData[];
}

interface AddDataForBusLinesAction {
  type: ActionTypes.ADD_DATA_FOR_BUS_LINES;
  payload: LineData[];
}

interface AddDataForTrolleybusLinesAction {
  type: ActionTypes.ADD_DATA_FOR_TROLLEYBUS_LINES;
  payload: LineData[];
}

interface AddDataForTramLinesAction {
  type: ActionTypes.ADD_DATA_FOR_TRAM_LINES;
  payload: LineData[];
}
interface ShowSpecificLineAction {
  type: ActionTypes.SHOW_SPECIFIC_LINE;
  payload: LineData;
}
interface ShouldShowAllLinesAction {
  type: ActionTypes.SHOULD_SHOW_ALL_LINES;
  payload: boolean;
}

export type Action =
  | ShowDataForAllLinesAction
  | AddDataForBusLinesAction
  | AddDataForTrolleybusLinesAction
  | AddDataForTramLinesAction
  | ShowSpecificLineAction
  | ShouldShowAllLinesAction;
