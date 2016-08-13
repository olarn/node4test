exports.validate = function(user, pass) {
  if (user === "demo" && pass === "mode") {
    return true;
  }
  return false;
};