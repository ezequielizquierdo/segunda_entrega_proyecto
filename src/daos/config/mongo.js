const connect = require('mongoose').connect;

const uri =
  'mongodb+srv://ezequielizquierdo:asd123@cluster0.3h9im.mongodb.net/?retryWrites=true&w=majority'

async function connectMongoDb() {
  try {
    const client = await connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'marketplace'
    });
    console.log('Base conectada a ->', client.connection.name);
  } catch (error) {
    console.error(error);
  }
}

module.exports = connectMongoDb;