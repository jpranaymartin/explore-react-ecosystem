var React = require('react');

module.exports = class About extends React.Component {
  render() {
    return React.createElement(
      'p',
      null,
      `Hi! This is an example of server-rendered content. `,
      React.createElement('a', {
        'href': '/'
      }, 'Go back.')
    );
  }
}
