/* eslint-disable react/no-multi-comp */
import React from 'react';
import {
    // Appear,
    // Link,
    // Markdown,
    // BlockQuote,
    // Cite,
    // Quote,
    // Fit,
    CodePane,
    Deck,
    Fill,
    Heading,
    Image,
    Layout,
    ListItem,
    List,
    Slide,
    Spectacle,
    Text,
} from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';
import createTheme from '../theme';

import 'normalize.css';
import '../theme/index.css';

const images = {
    react: require('../assets/react.png'),
    redux: require('../assets/redux.png'),
    problemScreeshot: require('../assets/problem-screenshot.png'),
    js: require('../assets/js.jpg'),
    pic1: require('../assets/pic-1.png'),
    pic2: require('../assets/pic-2.png'),
    pic3: require('../assets/pic-3.png'),
    pic4: require('../assets/pic-4.png'),
    pic5: require('../assets/pic-5.png'),
};

preloader(images);

const theme = createTheme();

const Chars = {
    mdash: '\u2014',
};

const slideStyle = {
    maxWidth: 1800,
    maxHeight: 1000,
};

const examples = {
    presentation: require('../code-examples/presentation.js'),
    dispatchInView: require('../code-examples/dispatch-in-view.js'),
    simpleAction: require('../code-examples/simple-action.js'),
    simpleReducer: require('../code-examples/simple-reducer.js'),
    composedReducers: require('../code-examples/composed-reducers.js'),
    composedView: require('../code-examples/composed-view.js'),
    ifThenPseudoCode: require('../code-examples/if-then-pseudo-code.js'),
    cofirmJQuery: require('../code-examples/cofirm-jquery.js'),
    jQueryAsync: require('../code-examples/jquery-async.js'),
    sagaPseudoCode: require('../code-examples/saga-pseudo-code.js'),
    plainSagaCode: require('../code-examples/plain-saga-code.js'),
    sagaRunningCode: require('../code-examples/saga-running-code.js'),
    sagaInReelm: require('../code-examples/saga-in-reelm.js'),
    reelmProduceEffect: require('../code-examples/reelm-produce-effect.js'),
    reelmHandleEffect: require('../code-examples/reelm-handle-effect.js'),
};


export default class Presentation extends React.Component {
    render() {
        return (
            <Spectacle theme={theme}>
                <Deck transition={['slide']} transitionDuration={700} progress='pacman'>
                    <Slide {...slideStyle}>
                        <Heading size={5}>Готовим бизнес-лапшу</Heading>
                        <Heading size={5}>на стеке React и Redux</Heading>
                    </Slide>
                    <Slide {...slideStyle}>
                        <Image width='5.5em' height='5.5em' src={images.js} />
                        <Heading size={5}>JavaScript</Heading>
                    </Slide>
                    <Slide {...slideStyle}>
                        <Image width='5.5em' height='5em' src={images.react} />
                        <Heading size={4}>React</Heading>
                    </Slide>
                    <Slide {...slideStyle}>
                        <Heading size={3}>React {Chars.mdash} это не фреймворк</Heading>
                    </Slide>
                    <Slide {...slideStyle}>
                        <CodePane
                            lang='js'
                            textSize={30}
                            source={examples.presentation} />
                    </Slide>
                    <Slide {...slideStyle}>
                        <Heading size={4}>React {Chars.mdash} это как php,<br /> только javascript</Heading>
                    </Slide>
                    <Slide {...slideStyle}>
                        <Heading size={4}>Virtual DOM</Heading>
                    </Slide>
                    <Slide {...slideStyle}>
                        <Layout>
                            <Fill>
                                <List>
                                    <ListItem textSize={50}>MobX</ListItem>
                                    <ListItem textSize={50}>redux</ListItem>
                                    <ListItem textSize={50}>Umbrella</ListItem>
                                    <ListItem textSize={50}>Flummox</ListItem>
                                    <ListItem textSize={50}>Alt</ListItem>
                                    <ListItem textSize={50}>Fluxxor</ListItem>
                                    <ListItem textSize={50}>Flux This</ListItem>
                                    <ListItem textSize={50}>MartyJS</ListItem>
                                    <ListItem textSize={50}>McFly</ListItem>
                                </List>
                            </Fill>
                            <Fill>
                                <List>
                                    <ListItem textSize={50}>Fluxible</ListItem>
                                    <ListItem textSize={50}>Baobab</ListItem>
                                    <ListItem textSize={50}>Delorean</ListItem>
                                    <ListItem textSize={50}>Lux</ListItem>
                                    <ListItem textSize={50}>Morearty</ListItem>
                                    <ListItem textSize={50}>Reflux</ListItem>
                                    <ListItem textSize={50}>OmniscientJS</ListItem>
                                    <ListItem textSize={50}>Fluxy</ListItem>
                                    <ListItem textSize={50}>Material Flux</ListItem>
                                </List>
                            </Fill>
                        </Layout>
                    </Slide>
                    <Slide {...slideStyle} align='center center'>
                        <Text>Библиотеки для работы с внейшним состоянием:</Text>
                        <List padding='0 0 0 200px'>
                            <ListItem>Flux-подобные</ListItem>
                            <ListItem>На основе подписок</ListItem>
                        </List>
                    </Slide>
                    <Slide {...slideStyle}>
                        <Image width='5.5em' height='5em' src={images.redux} />
                        <Heading size={4}>Redux</Heading>
                    </Slide>
                    <Slide {...slideStyle}>
                        <Layout>
                            <Fill>
                                <Image height='800' src={images.pic1} />
                            </Fill>
                        </Layout>
                    </Slide>
                    <Slide {...slideStyle}>
                        <CodePane
                            lang='js'
                            textSize={40}
                            source={examples.dispatchInView} />
                    </Slide>
                    <Slide {...slideStyle}>
                        <CodePane
                            lang='js'
                            textSize={40}
                            source={examples.simpleAction} />
                    </Slide>
                    <Slide {...slideStyle}>
                        <CodePane
                            lang='js'
                            textSize={40}
                            source={examples.simpleReducer} />
                    </Slide>
                    <Slide {...slideStyle}>
                        <CodePane
                            lang='js'
                            textSize={40}
                            source={examples.dispatchInView} />
                    </Slide>
                    <Slide {...slideStyle}>
                        <List>
                            <ListItem>Отсутствие манипуляций с DOM-ом</ListItem>
                            <ListItem>Предсказуемость</ListItem>
                            <ListItem>Time traveling</ListItem>
                        </List>
                    </Slide>
                    <Slide {...slideStyle}>
                        <Image width='1200' src={images.problemScreeshot} />
                    </Slide>
                    <Slide {...slideStyle}>
                        <Heading size={4}>Композиция и инкапсуляция</Heading>
                    </Slide>
                    <Slide {...slideStyle}>
                        <Image height='800' src={images.pic2} />
                    </Slide>
                    <Slide {...slideStyle}>
                        <CodePane
                            lang='js'
                            textSize={40}
                            source={examples.simpleAction} />
                    </Slide>
                    <Slide {...slideStyle}>
                        <CodePane
                            lang='js'
                            textSize={40}
                            source={examples.simpleReducer} />
                    </Slide>
                    <Slide {...slideStyle}>
                        <Image height='800' src={images.pic3} />
                    </Slide>
                    <Slide {...slideStyle}>
                        <Layout>
                            <Fill style={{ margin: 20 }}>
                                <CodePane
                                    lang='js'
                                    textSize={30}
                                    source={examples.composedReducers} />
                            </Fill>
                            <Fill style={{ margin: 20 }}>
                                <CodePane
                                    lang='js'
                                    textSize={30}
                                    source={examples.composedView} />
                            </Fill>
                        </Layout>
                    </Slide>
                    <Slide {...slideStyle}>
                        <Image height='800' src={images.pic4} />
                    </Slide>
                    <Slide {...slideStyle}>
                        <Heading size={4}>Долгоживущие транзакции</Heading>
                    </Slide>
                    <Slide {...slideStyle}>
                        <Heading size={4}>Проблема окна подтверждения</Heading>
                    </Slide>
                    <Slide {...slideStyle}>
                        <CodePane
                            lang='js'
                            textSize={40}
                            style={{ minWidth: 800, maxWidth: 800 }}
                            source={examples.ifThenPseudoCode} />
                    </Slide>
                    <Slide {...slideStyle}>
                        <CodePane
                            lang='js'
                            textSize={40}
                            style={{ minWidth: 800, maxWidth: 800 }}
                            source={examples.cofirmJQuery} />
                    </Slide>
                    <Slide {...slideStyle}>
                        <CodePane
                            lang='js'
                            textSize={40}
                            source={examples.jQueryAsync} />
                    </Slide>
                    <Slide {...slideStyle}>
                        <Heading size={4}>Saga</Heading>
                    </Slide>
                    <Slide {...slideStyle}>
                        <CodePane
                            lang='js'
                            textSize={40}
                            source={examples.sagaPseudoCode} />
                    </Slide>
                    <Slide {...slideStyle}>
                        <Heading size={4}>redux-saga</Heading>
                    </Slide>
                    <Slide {...slideStyle}>
                        <CodePane
                            lang='js'
                            textSize={40}
                            source={examples.plainSagaCode} />
                    </Slide>
                    <Slide {...slideStyle}>
                        <CodePane
                            lang='js'
                            textSize={40}
                            source={examples.sagaRunningCode} />
                    </Slide>
                    <Slide {...slideStyle}>
                        <Heading size={4}>Reelm</Heading>
                    </Slide>
                    <Slide {...slideStyle}>
                        <CodePane
                            lang='js'
                            textSize={30}
                            source={examples.sagaInReelm} />
                    </Slide>
                    <Slide {...slideStyle}>
                        <Heading size={4}>Управление побочными эффектами</Heading>
                    </Slide>
                    <Slide {...slideStyle}>
                        <Image height='800' src={images.pic5} />
                    </Slide>
                    <Slide {...slideStyle}>
                        <Layout>
                            <Fill style={{ margin: 20 }}>
                                <CodePane
                                    lang='js'
                                    textSize={25}
                                    source={examples.reelmProduceEffect} />
                            </Fill>
                            <Fill style={{ margin: 20 }}>
                                <CodePane
                                    lang='js'
                                    textSize={25}
                                    source={examples.reelmHandleEffect} />
                            </Fill>
                        </Layout>
                    </Slide>
                </Deck>
            </Spectacle>
        );
    }
}
