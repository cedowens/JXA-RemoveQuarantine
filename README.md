# JXA-RemoveQuarantine
JXA implementation of code by Jeff Johnson that uses TextEdit to remove the quarantine attribute from files. Jeff's original research is here: https://lapcatsoftware.com/articles/sandbox-escape.html

Essentially, this is simple JXA code that tells TextEdit to open and save the file, which removes the quarantine attribute (due to TextEdit's com.apple.security.files.user-selected.executable entitlement, as noted by Jeff Johnson). This may not be feasible for red team ops due to the brief pop up that occurs when TextEdit opens the file.

To run locally:

1. Download a test/target file from the browser, which will add the quarantine attribute

2. Edit the removequarantine.js file and change the "NSWorkspace.sharedWorkspace.openFile" path value to your target file.

3. Run via Terminal:

> osascript removequarantine.js

4. Check the quarantine attribute after step 3 and it will be removed by TextEdit

![caption](pic.gif)

