// Save selected layer to variable:
var doc = app.activeDocument;

// Ask user for input by showing prompt box and save inputted value to variable:
var place = Folder.selectDialog("Select a folder to process");
var files = [
	{
		filename: 'apple-touch-icon-57x57.png',
		width: 57,
		height: 57
	},
	{
		filename: 'apple-touch-icon-60x60.png',
		width: 60,
		height: 60
	},
	{
		filename: 'apple-touch-icon-72x72.png',
		width: 72,
		height: 72
	},
	{
		filename: 'apple-touch-icon-74x74.png',
		width: 74,
		height: 74
	},
	{
		filename: 'apple-touch-icon-76x76.png',
		width: 76,
		height: 76
	},
	{
		filename: 'apple-touch-icon-114x114.png',
		width: 114,
		height: 114
	},
	{
		filename: 'apple-touch-icon-120x120.png',
		width: 120,
		height: 120
	},
	{
		filename: 'apple-touch-icon-144x144.png',
		width: 144,
		height: 144
	},
	{
		filename: 'apple-touch-icon-152x152.png',
		width: 152,
		height: 152
	},
	{
		filename: 'favicon-16x16.png',
		width: 16,
		height: 16
	},
	{
		filename: 'favicon-32x32.png',
		width: 32,
		height: 32
	},
	{
		filename: 'favicon-96x96.png',
		width: 96,
		height: 96
	},
	{
		filename: 'favicon-160x160.png',
		width: 160,
		height: 160
	},
	{
		filename: 'favicon-196x196.png',
		width: 196,
		height: 196
	},
	{
		filename: 'win8-tile-icon-144x144.png',
		width: 144,
		height: 144
	}
];

// Check that user entered a valid number and, if invalid, show error message and ask for input again
if(place == null) {
	prompt('Please select a folder');
}
else {
	for (var i = 0; i < files.length; i++) {
	    var file = new File(place+'/'+files[i].filename);
		doc.resizeImage(UnitValue(files[i].width, "px"), UnitValue(files[i].height, "px"), 72, ResampleMethod.BICUBIC);
	    saveOptions = new PNGSaveOptions();
		saveOptions.compression = 9;
		saveOptions.interlaced =false;
		saveOptions.matte = MatteType.NONE;
	    doc.saveAs(file,saveOptions, true,Extension.LOWERCASE);
	}
}
