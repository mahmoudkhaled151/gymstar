const moment = require("moment");

module.exports.dateFormat = () => {
    // return moment().format("YYYY-MM-DD HH:mm:ss")
    return moment().format("DD-MM-YYYY HH:mm:sss");
  };
  
