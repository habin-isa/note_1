(function(exports) {

  var passMessage = '%c Pass';
  var green = "background: #222; color: green";
  var failMessage = '%c Fail';
  var orange = "background: #222; color: orange";

var assert = {
  toBeTrue : function(object) {
    if (object === true) {
      console.log(passMessage, green);
    } else {
      console.log(failMessage, orange);
    }
  },

  toBeFalse : function(object) {
    if (object === false) {
      console.log(failMessage, orange);
    } else {
      console.log(passMessage, green);
    }
  },

  toBeEqual : function(object1, object2) {
    if (JSON.stringify(object1) === JSON.stringify(object2)) {
      console.log(passMessage, green);
    } else {
      console.log(failMessage, orange);
    }
  },

  toInclude : function(carrier, object) {
    if (carrier.includes(object)) {
      console.log(passMessage, green);
    } else {
      console.log(failMessage, orange);
    }
  }
}

exports.assert = assert
})(this);
