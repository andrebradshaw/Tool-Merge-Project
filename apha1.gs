function doGet(request) {
  var sheetId = "Y0UR_SH33T_ID_G03S_H3R3";  
  var ss = SpreadsheetApp.openById(sheetId);
  var sheet1 = ss.getSheets()[0];
  var lastRow = sheet1.getLastRow(); 
 
  var a_col = sheet1.getRange('a'+(lastRow+1));; //timestamp
  var b_col = sheet1.getRange('b'+(lastRow+1)); //code
  var c_col = sheet1.getRange('c'+(lastRow+1)); //note
  var d_col = sheet1.getRange('d'+(lastRow+1)); //links
  
  var code = decodeURIComponent(request.parameter.cd);
  var note = decodeURIComponent(request.parameter.nt);
  var link = decodeURIComponent(request.parameter.hl);
  a_col.setValue(new Date());
  b_col.setValue(code);
  c_col.setValue(note);
  d_col.setValue(link);
  
  var output = '['+code+']\n\n['+note+']\n\n['+link+']'
  return ContentService.createTextOutput(output)
   .setMimeType(ContentService.MimeType.TEXT);   
}
