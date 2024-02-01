import { Dispatch } from 'redux';
import axios from 'axios';

import vehicleTypeTransformer from '../../utils/vehicleTypeTransformer';
import { TransportTypesReverse } from '../../_constants/enums';
import { ActionTypes } from '../action-types';
import { Action } from '../actions';

export const getAllLinesData = () => {
  return async (dispatch: Dispatch<Action>) => {
    // Mocked up API call
    await axios
      .get('./rawData.json')
      .then(res => {
        const dataWeNeed = res.data.data;
        const transformedAllVehiclesTypesData = vehicleTypeTransformer(dataWeNeed);

        dispatch({
          type: ActionTypes.SHOW_DATA_FOR_ALL_LINES,
          payload: transformedAllVehiclesTypesData,
        });

        // Separate actions for each vehicle type
        const transformedBusData = vehicleTypeTransformer(
          dataWeNeed.filter(
            (vehicle: { routes: { transportType: TransportTypesReverse }[] }) =>
              vehicle.routes[0].transportType === TransportTypesReverse.Bus
          )
        );

        dispatch({
          type: ActionTypes.ADD_DATA_FOR_BUS_LINES,
          payload: transformedBusData,
        });

        const transformedTrolleybusData = vehicleTypeTransformer(
          dataWeNeed.filter(
            (vehicle: { routes: { transportType: TransportTypesReverse }[] }) =>
              vehicle.routes[0].transportType === TransportTypesReverse.Trolleybus
          )
        );

        dispatch({
          type: ActionTypes.ADD_DATA_FOR_TROLLEYBUS_LINES,
          payload: transformedTrolleybusData,
        });

        const transformedTramData = vehicleTypeTransformer(
          dataWeNeed.filter(
            (vehicle: { routes: { transportType: TransportTypesReverse }[] }) =>
              vehicle.routes[0].transportType === TransportTypesReverse.Tram
          )
        );

        dispatch({
          type: ActionTypes.ADD_DATA_FOR_TRAM_LINES,
          payload: transformedTramData,
        });
      })
      .catch(err => err);
  };
};
