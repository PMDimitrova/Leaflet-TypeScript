import { Dispatch } from 'redux';
import axios from 'axios';

import vehicleTypeTransformer from '../../utils/vehicleTypeTransformer';
// import { TransportTypesReverse } from '../../_constants/enums';
import { ActionTypes } from '../action-types';
import { Action } from '../actions';

export const getAllLinesData = () => {
  return async (dispatch: Dispatch<Action>) => {
    //mocked up API call
    await axios
      .get('./rawData.json')
      .then(res => {
        const transformedAllVehiclesTypesData = vehicleTypeTransformer(res.data.data);

        dispatch({
          type: ActionTypes.SHOW_DATA_FOR_ALL_LINES,
          payload: transformedAllVehiclesTypesData,
        });

        // // -----!!!!------ TODO: do separate actions for each vehicle type -----!!!!------
        // const transformedBusData = vehicleTypeTransformer(
        //   data.filter(
        //     (vehicle: { routes: { transportType: TransportTypesReverse }[] }) =>
        //       vehicle.routes[0].transportType === TransportTypesReverse.Bus
        //   )
        // );

        // const transformedTrolleybusData = vehicleTypeTransformer(
        //   data.filter(
        //     (vehicle: { routes: { transportType: TransportTypesReverse }[] }) =>
        //       vehicle.routes[0].transportType === TransportTypesReverse.Trolleybus
        //   )
        // );

        // const transformedTramData = vehicleTypeTransformer(
        //   data.filter(
        //     (vehicle: { routes: { transportType: TransportTypesReverse }[] }) =>
        //       vehicle.routes[0].transportType === TransportTypesReverse.Tram
        //   )
        // );
      })
      .catch(err => err);
  };
};
