const { logs } = require("../models/logs");

async function handleLogs(req, res, next) {
  const logData = {
    origin: req.headers.origin,
    path: req.path,
    method: req.method,
    platform: req.headers["sec-ch-ua-platform"].substring(1, req.headers["sec-ch-ua-platform"].length-1),
    isMobile: +req.headers["sec-ch-ua-mobile"][1] ? true : false,
  };
  await logs.create(logData);

  next();
}

module.exports = { handleLogs };
