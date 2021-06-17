const http = (url) => fetch(url);

export default {
  getLifters: (fuck) =>
    http(`${process.env.REACT_APP_API_URL}/lifters/${fuck}`),
  getFullList: () => http(`${process.env.REACT_APP_API_URL}/lifters/)`),
};
