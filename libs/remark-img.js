remark.macros.scale = function (percentage) {
  var url = this;
  return '<img src="' + url + '" style="width: ' + percentage + '" />';
};

remark.macros.img = function (altText, width) {
  var url = this;
  return '<img alt="' + altText + '" src="' + url + '" style="width: ' + width + '" />';
};
