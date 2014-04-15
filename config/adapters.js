/**
 * Global adapter config
 *
 * The `adapters` configuration object lets you create different global "saved settings"
 * that you can mix and match in your models.  The `default` option indicates which
 * "saved setting" should be used if a model doesn't have an adapter specified.
 *
 * Keep in mind that options you define directly in your model definitions
 * will override these settings.
 *
 * For more information on adapter configuration, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.adapters = {

  // // If you leave the adapter config unspecified
  // // in a model definition, 'default' will be used.
  // 'default': 'disk',

  // // Persistent adapter for DEVELOPMENT ONLY
  // // (data is preserved when the server shuts down)
  // disk: {
  //   module: 'sails-disk'
  // },

  // // MySQL is the world's most popular relational database.
  // // Learn more: http://en.wikipedia.org/wiki/MySQL
  // myLocalMySQLDatabase: {

  //   module: 'sails-mysql',
  //   host: 'YOUR_MYSQL_SERVER_HOSTNAME_OR_IP_ADDRESS',
  //   user: 'YOUR_MYSQL_USER',
  //   // Psst.. You can put your password in config/local.js instead
  //   // so you don't inadvertently push it up if you're using version control
  //   password: 'YOUR_MYSQL_PASSWORD',
  //   database: 'YOUR_MYSQL_DB'
  // }

  //DEVELOPMENT ONLY

  // 'default': 'psdb',

  // 'psdb': {
  //   module: 'sails-postgresql',
  //   host: 'ec2-23-23-81-171.compute-1.amazonaws.com' || 'localhost',
  //   user: process.env.HK_POSTGRES_USER || 'zalary',
  //   password: process.env.HK_POSTGRES_PASS || '',
  //   database: 'd7h97cqpalnj0q' || 'inspiral',
  //   port: 5432,
  //   //this should be set to false when working locally,
  //   //but must be set to true for heroku deployment
  //   ssl: true,

  //   schema: true //This makes sure that sails matches
  //   //the database schema to your models.
  // },


  // 'mongo': {

  //   module: 'sails-mongo',
  //   url: process.env.MHQ_URL || ''

  // }
};
