$.getJSON("/redirector_mappings.json", function(data) {
    var urlPath = decodeURI(location.pathname);
    var redirectPath = null;

	$.each(data, function(key, val) {
		if (key === urlPath) {
			redirectPath = val;
			return false;
		}
	});

    if (redirectPath === null) {
        $("#RedirectText").html("Couldn't find page/file");
    }
    else {
        $("#RedirectText").html("Your new file is at:");
        $("#innerContainer").append("<p><a href=\"" + redirectPath + "\">" + redirectPath + "</a></p>");
        location.replace(redirectPath);
    }
});