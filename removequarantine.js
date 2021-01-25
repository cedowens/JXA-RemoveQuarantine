ObjC.import('Cocoa');
ObjC.import('Foundation');
ObjC.import('stdlib');
ObjC.import('OSAKit');
ObjC.import('OpenDirectory');
ObjC.import('sqlite3');
var app = Application.currentApplication();

app.includeStandardAdditions = true;

$.NSWorkspace.sharedWorkspace.openFile("/Users/dev/Desktop/testfile.txt");
var start = $.NSAppleScript.alloc.initWithSource("tell application \"TextEdit\"\rsave document 1\rquit\rend tell");
start.executeAndReturnError($());
