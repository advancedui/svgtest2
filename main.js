window.onload = init;

var svgDocument, zoomFactor = 1.5, panFactor = 250, originalWidth, originalHeight, currentViewBoxValues;

function panLeft() {
	currentViewBoxValues[0] -= panFactor;
	svgDocument.attr("viewBox", currentViewBoxValues.toString());
}

function panRight() {
	currentViewBoxValues[0] += panFactor;
	svgDocument.attr("viewBox", currentViewBoxValues.toString());
}

function zoomIn() {
	currentViewBoxValues[2] /= zoomFactor;
	currentViewBoxValues[3] /= zoomFactor;
	svgDocument.attr("viewBox", currentViewBoxValues.toString());
}

function zoomOut() {
	currentViewBoxValues[2] *= zoomFactor;
	currentViewBoxValues[3] *= zoomFactor;
	svgDocument.attr("viewBox", currentViewBoxValues.toString());
}

function init() {
	var svgUrl = "2550.svg";
	
	$.get(svgUrl)
	 .then(function(response) {
		 svgDocument = $(response.documentElement);
		 originalWidth = svgDocument.attr("width");
		 originalHeight = svgDocument.attr("height");
		 currentViewBoxValues = [0, 0, originalWidth, originalHeight];
		 
		 svgDocument.attr("width", "100%");
		 svgDocument.attr("height", "100%");
		 svgDocument.attr("viewBox", currentViewBoxValues.toString());
		 svgDocument.attr("draggable", true);
		 
		 $("#svgContainer").append(svgDocument);
	 });
	
}
