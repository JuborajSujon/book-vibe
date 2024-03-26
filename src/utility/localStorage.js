import { toast } from "react-hot-toast";

// get local storage data
export const getLocalStorageData = (keyName) => {
  let localStorageData = [];
  const data = localStorage.getItem(keyName);
  if (data) {
    localStorageData = JSON.parse(data);
  }
  return localStorageData;
};

// set local storage data
export const setLocalStorageData = (
  keyName,
  data,
  toastMsgError,
  toastMsgSucc
) => {
  let savedLocalStoragedata = getLocalStorageData(keyName);
  const dataExist = savedLocalStoragedata.includes(data);
  console.log("dataExist", dataExist);
  if (dataExist) {
    toast.error(toastMsgError);
    return;
  }
  savedLocalStoragedata.push(data);
  localStorage.setItem(keyName, JSON.stringify(savedLocalStoragedata));
  toast.success(toastMsgSucc);
};

// Delete local storage data
export const deleteLocalStorageData = (keyName, id) => {
  let localStorageData = getLocalStorageData(keyName);
  const remainingdata = localStorageData.filter((item) => item !== id);
  localStorage.setItem(keyName, JSON.stringify(remainingdata));
};
