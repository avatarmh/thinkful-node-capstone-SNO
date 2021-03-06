'use strict';
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/sno-app';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/sno-app-test';
exports.PORT = process.env.PORT || 8080;
exports.JWT_SECRET = process.env.JWT_SECRET;
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';

// seed with mongoimport --db blogposts-app --collection blogposts --drop --file ./seed-data.json
