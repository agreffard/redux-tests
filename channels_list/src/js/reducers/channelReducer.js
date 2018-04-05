import { ADD_CHANNEL, DELETE_CHANNEL } from "../constants/action-types";
import channels from '../../mock-data/channels.js';

const channelReducer = (state = channels.channels, action) => {
  switch (action.type) {
    case ADD_CHANNEL:
      return [...state, action.channel];
    case DELETE_CHANNEL:
      return state.filter(channel => { return channel.id !== action.id })
    default:
      return state;
  }
};

export default channelReducer;
