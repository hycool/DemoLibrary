var objectCreate = function (arg) {
  console.log("objectCreate=function(arg) arg="+arg);
  if (!arg) { return {}; }
  function obj() {};
  obj.prototype = arg;
  return new obj;
};

Object.create = Object.create || objectCreate;

// Start NanaMate
NanaMate.start();


