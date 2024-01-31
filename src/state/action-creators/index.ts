import { Dispatch } from 'redux';
import axios from 'axios';

import vehicleTypeTransformer from '../../_constants/utils/vehicleTypeTransformer';
import { TransportTypesReverse } from '../../_constants/enums';
import { ActionTypes } from '../action-types';
import { Action } from '../actions';

const getAllLinesData = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await axios.get('rawData.json'); //mocked up API call

      //transforming the incoming data
      const transformedAllVehiclesTypesData = vehicleTypeTransformer(data);

      // -----!!!!------ TODO: do separate actions for each vehicle type -----!!!!------
      const transformedBusData = vehicleTypeTransformer(
        data.filter(
          (vehicle: { routes: { transportType: TransportTypesReverse }[] }) =>
            vehicle.routes[0].transportType === TransportTypesReverse.Bus
        )
      );

      const transformedTrolleybusData = vehicleTypeTransformer(
        data.filter(
          (vehicle: { routes: { transportType: TransportTypesReverse }[] }) =>
            vehicle.routes[0].transportType === TransportTypesReverse.Trolleybus
        )
      );

      const transformedTramData = vehicleTypeTransformer(
        data.filter(
          (vehicle: { routes: { transportType: TransportTypesReverse }[] }) =>
            vehicle.routes[0].transportType === TransportTypesReverse.Tram
        )
      );

      dispatch({
        type: ActionTypes.SHOW_DATA_FOR_ALL_LINES,
        payload: transformedAllVehiclesTypesData,
      });
    } catch (err) {
      //In real life API calls this is stupidest thing to do here; Instead show some fancy error in the UI
      console.log('Cannot get data - ' + err);
    }
  };
};

export default getAllLinesData;
