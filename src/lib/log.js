import { createLogger, format, transports } from "winston";

const { combine, timestamp, label, prettyPrint } = format;

const logger = createLogger({
  format: combine(label({ label: "default" }), timestamp(), prettyPrint()),
  transports: [new transports.Console()]
});

export default logger;
