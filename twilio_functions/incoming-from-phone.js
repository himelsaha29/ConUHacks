
// this method responds to phone users. Currently sends back a message letting them know we 
// do not support it

exports.handler = function(context, event, callback) {
 // The pre-initialized Twilio Client is available from the `context` object
  const twilioClient = context.getTwilioClient();

  // Query parameters or values sent in a POST body
  const from = event.From 
  const to = event.To
  const body = `Messaging from phone not enabled. Thank you for using our services!`

  // Use `messages.create` to generate a message. Be sure to chain with `then`
  // and `catch` to properly handle the promise and call `callback` _after_ the
  // message is sent successfully!
  // Note the addition of the `mediaUrl` value as configuration for `messages.create`.
  twilioClient.messages
    .create({ body: body, from: context["TWILIO_PHONE"], to: from })
    .then((message) => {
      console.log('Messaging from phone not enabled. Thank you for using our services!');
      console.log(message.sid);
      
      // Make sure to only call `callback` once everything is finished, and to pass
      // null as the first parameter to signal successful execution.
      return callback(null, `Have a good day!`);
    })
    .catch((error) => {
      console.error(error);
      return callback(error);
    });
};
