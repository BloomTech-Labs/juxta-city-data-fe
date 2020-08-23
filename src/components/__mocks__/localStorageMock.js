const JWT_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjEsImVtYWlsIjoiY29uYXJ5LmJlY2tmb3JkQGVtYWlsLmNvbSIsImlhdCI6MTUzOTQyMDA1Mn0.HAwkRBF5L_UAh7gaZrrRRm9mTx0BB89tIUNx5gX4X7U";

var localStorageMock = (function () {
  var store = {
    token: JWT_TOKEN,
  };

  return {
    getItem: function (key) {
      return store[key] || null;
    },
    setItem: function (key, value) {
      store[key] = value.toString();
    },
    clear: function () {
      store = {};
    },
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});
