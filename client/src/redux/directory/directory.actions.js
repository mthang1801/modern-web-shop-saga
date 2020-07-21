import directoryActionTypes from "./directory.types";
export const fetchDirectoryStart = () => ({
  type: directoryActionTypes.FETCH_DIRECTORY_START,
});

export const fetchDirectorySuccess = (directory) => ({
  type: directoryActionTypes.FETCH_DIRECTORY_SUCCESS,
  payload: directory,
});

export const fetchDirectoryFail = (error) => ({
  type: directoryActionTypes.FETCH_DIRECTORY_FAIL,
});
