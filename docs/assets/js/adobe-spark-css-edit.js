// The following will remove all the attributes from the children of #aspark

// Prevents JQuery code from running before the document is finished loading:
$(document).ready( function() {

var v = $("#aspark").find("div");
v.removeAttr("style");
alert(v.text() + "done" );

});

// could simply use
// $(function() { ...code goes here... });
