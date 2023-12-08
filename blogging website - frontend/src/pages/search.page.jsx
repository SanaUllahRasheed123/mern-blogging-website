// export const storeInSession = (key,value) => {
//     return sessionStorage.setItem(key,value);
// }

// export const lookInSession = (key) => {
//     return sessionStorage.getItem(key);
// }

// export const removeFromSession = (key) => {
//     return sessionStorage.removeItem(key);
// }

// session.jsx

const storeInSession = (key, value) => {
    sessionStorage.setItem(key, value);
  };
  
  export default storeInSession;
  