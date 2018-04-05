import { ADD_CHANNEL, DELETE_CHANNEL } from "../constants/action-types";

export const addChannel = channel => ({
  type: ADD_CHANNEL,
  channel: channel
});

export const deleteChannel = id => ({
  type: DELETE_CHANNEL,
  id: id
});
