export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['slide']} transitionDuration={700} progress='pacman'>
          //...
          <Slide>
            <Heading size={3}>React -- это не фреймворк</Heading>
          </Slide>
          //...
          <Slide>
            <CodePane
              lang='js'
              source={examples.simpleAction} />
          </Slide>
          //...
        </Deck>
      </Spectacle>
    );
  }
}
