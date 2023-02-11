/* eslint-disable @typescript-eslint/no-var-requires */
const config = require('./ormconfig');
const DataSource = require('typeorm').DataSource;

const source = new DataSource(config);

export default source;