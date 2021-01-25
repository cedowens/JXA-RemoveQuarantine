# JXA-RemoveQuarantine
JXA script based on research by Jeff Johnson that uses TextEdit to remove the quarantine attribute from files. Jeff's original research is here: https://lapcatsoftware.com/articles/sandbox-escape.html

This script relies on the file extension being .txt. The file type can be any file type as long as ".txt" is appended to the end. The reason for this is the script will cause macOS to use the default opener for .txt file types (which is TextEdit) in order to leverage TextEdit's entitlement (com.apple.security.files.user-selected.executable) which gives it the ability to remove the quarantine attribute when the file is saved. I was unable to find a way to make the objc "withApplication:@TextEdit" call in JXA so I used this method as a fallback to ensure TextEdit is opened.

This may not be feasible for red team ops due to the brief pop up that occurs when TextEdit opens the file (depends on your objectives). However, this is an interesting demo into how TextEdit can be leveraged to remove file quarantine attributes.

To run locally:

1. Download a test/target file from the browser, which will add the quarantine attribute

2. Add ".txt" extension to whatever your filename is. (ex: if you are downloading "file.js" you will rename it to "file.js.txt")

3. Edit the removequarantine.js file and change the "NSWorkspace.sharedWorkspace.openFile" path value to your target file.

4. Run via Terminal:

> osascript removequarantine.js

5. Check the quarantine attribute after step 3 and it will be removed by TextEdit

6. You can then rename your file back to the original name


