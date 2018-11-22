'use strict';


// module.exports.helloLegacy = (event, context, callback) => {
//   const response = {
//     statusCode: 200,
//     body: JSON.stringify({
//       message: 'Go serverless legacy from udemy. Exec successful',
//       input: event
//     })
//   }

//   callback(null, response);
// }

const emojis = [
  '😀',
  '😁',
  '😤',
  '😍',
  '👽',
  '🤖',
  '🔷',
  '🔶',
  '🚀',
];

module.exports.rank = async (event, context) => {
  const rank = event.queryStringParameters.rank;
  const badgeIndex = rank >= emojis.length
    ? emojis.length - 1
    : rank;
  const rankEmoji = emojis[badgeIndex];

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin' : '*'
    },
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: rankEmoji,
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
