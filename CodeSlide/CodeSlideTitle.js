const React = require('react');

const styles = {
  position: 'fixed',
  left: '50%',
  top: '20px',
  transform: 'translate(-50%)',
  backgroundColor: 'rgba(255,255,255,.8)',
  padding: '20px 40px',
  fontSize: '2.5em',
  color: 'black',
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
  zIndex: 100
};

class CodeSlideTitle extends React.Component {
  render() {
    return (
      <h1 style={styles}>{this.props.children}</h1>
    );
  }
}

module.exports = CodeSlideTitle;
