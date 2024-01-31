import { LineData } from '../reducers/linesReducer';
import { ActionTypes } from '../action-types';

interface ShowDataForAllLinesAction {
  type: ActionTypes.SHOW_DATA_FOR_ALL_LINES;
  payload: LineData[];
}

interface ShouldShowAllLinesAction {
  type: ActionTypes.SHOULD_SHOW_ALL_LINES;
  payload: boolean;
}
interface ShowSpecificLineAction {
  type: ActionTypes.SHOW_SPECIFIC_LINE;
  payload: object; //TODO: would I need the number of the line or the whole data for the line
}

export type Action = ShouldShowAllLinesAction | ShowSpecificLineAction | ShowDataForAllLinesAction;
