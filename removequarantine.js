ObjC.import('Cocoa');
ObjC.import('stdlib');

var app = Application.currentApplication();
app.includeStandardAdditions = true;

$.NSWorkspace.sharedWorkspace.openFile("/Users/dev/Desktop/mypytest.py.txt");
var start = $.NSAppleScript.alloc.initWithSource("tell application \"TextEdit\"\rsave document 1\rquit\rend tell");
start.executeAndReturnError($());

