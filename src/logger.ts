import winston from 'winston';
import WinstonCloudwatch from 'winston-cloudwatch';

const NODE_ENV = process.env.NODE_ENV || 'dev';

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
});

if (NODE_ENV != 'dev') {
    logger.add(new WinstonCloudwatch({
        level: "info",
        logGroupName: "hello",
        logStreamName: "hello-1",
        awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
        awsSecretKey: process.env.AWS_SECRET_KEY,
        awsRegion: process.env.AWS_REGION,
        jsonMessage: true
    }))
} else {
    logger.add(new winston.transports.Console({
        format: winston.format.simple()
    }))
}

export default logger;