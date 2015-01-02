var base64 = require("./base64toblob");

var picTest = "data:image/png;base64,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";
var kind = typeof(base64.dataURItoBlob(picTest));
//var lenghtPic = base64.dataURItoBlob(picTest).length;

exports["test type of output"] = function(assert){
	assert.ok(kind == "object", "this an object which is returned, that's ok!");
}

//exports["test uint length"] = function(assert){
//	assert.ok(lenghtPic == 3965, "Good number of unsigned integers returned by the 'Uint8Array' function for the encoded base64 test picture.");
//}
//
//exports["test empty pic"] = function(assert){
//  assert.throws(function(){
//  	base64.dataURItoBlob("");
//  }, 
//  "empty pic check works");
//}
 
require("sdk/test").run(exports);