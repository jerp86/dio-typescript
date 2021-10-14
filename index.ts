import $ from "jquery";

$.fn.extend({
  newFunction() {
    console.log("Called new function");
  },
});

$("body").newFunction();
