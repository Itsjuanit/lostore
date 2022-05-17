let isOk = true;

const personal = (time, task) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isOk) {
        resolve(task);
      } else {
        reject("error");
      }
    }, time);
  });
};
export default personal;

let isOk2 = true;

export const getItem = (time, misItems) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isOk2) {
        resolve(misItems);
      } else {
        reject("error");
      }
    }, time);
  });
};
