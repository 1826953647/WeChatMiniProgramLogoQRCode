
var QRCodeJS = require("../../utils/qrcode.js");

Page({
  
  onLoad: function (options) {
    ///绘制带logo二维码
    QRCodeJS.qrApi.draw('https://github.com/xlsn0w', "logoQRCode", 275, 275, null, '/images/xlsn0w.png');
  }

})
