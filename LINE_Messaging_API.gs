// LINE Messaging APIからのPOSTリクエストを受け取った際に実行される関数
function doPost(e) { 

  // 操作対象のGoogleスプレッドシートのIDを指定
  var spreadsheetId = 'シートID'; 

  // 指定したIDのスプレッドシートを開く
  var spreadsheet = SpreadsheetApp.openById(spreadsheetId); 
  
  // 'シート名' という名前のシートを取得
  var sheet = spreadsheet.getSheetByName('シート名'); 

  // LINE Messaging APIにアクセスするためのアクセストークン
  var lineToken = 'LINEアクセストークン'; 
  
  // POSTリクエストのデータをJSON形式で解析し、最初のイベント情報を取得
  var eventData = JSON.parse(e.postData.contents).events[0]; 
  
  // イベントからユーザーのメッセージテキストを取得
  var userMessage = eventData.message.text; 

  // A列のデータを取得し、空でない行の数を数えて、次の空行の位置を計算
  var lastRow = sheet.getRange('A:A').getValues().filter(String).length + 1; 

  // 取得した次の空行にユーザーのメッセージを出力（1列目がA列）
  sheet.getRange(lastRow, 1).setValue(userMessage); 
}
