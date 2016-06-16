/* eslint-disable react/no-multi-comp */
import React from 'react';
import {
    // Appear,
    Link,
    // Markdown,
    // BlockQuote,
    // Cite,
    // Quote,
    // Fit,
    Code,
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

import 'normalize.css';
import '../theme/index.css';

import preloader from 'spectacle/lib/utils/preloader';
import createTheme from '../theme';


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
    pic6: require('../assets/pic-6.png'),
    pic7: require('../assets/pic-7.png'),
    pic8: require('../assets/pic-8.png'),
    pic9: require('../assets/pic-9.png'),
    pic10: require('../assets/pic-10.png'),
    pic11: require('../assets/pic-11.png'),
    pic12: require('../assets/pic-12.png'),
    ediLogo: require('../assets/edi-logo.png'),
    ofdLogo: require('../assets/ofd-logo.png'),
    egaisLogo: require('../assets/egais-logo.png'),
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
    tryCatchInReelm: require('../code-examples/try-catch-in-reelm.js'),
    reelmProduceApiEffect: require('../code-examples/reelm-produce-api-effect.js'),
    reelmHandleApiEffect: require('../code-examples/reelm-handle-api-effect.js'),
    nestedReducerInComposition: require('../code-examples/nested-reducer-in-composition.js'),
    nestedViewInComposition: require('../code-examples/nested-view-in-composition.js'),
};

function agenda() {
    return (
        <Slide {...slideStyle}>
            <Heading size={5}>Агенда</Heading>
            <List>
                <ListItem>React & Redux</ListItem>
                <ListItem>Как писать бизнес лапшу</ListItem>
            </List>
        </Slide>
    );
}

function konturProductList() {
    return (
        <Slide {...slideStyle}>
            <div style={{ display: 'inline-block', textAlign: 'left' }}>
                <Image height='3rem' src={images.ediLogo} /> <br />
                <Image height='3rem' src={images.ofdLogo} /> <br />
                <Image height='3rem' src={images.egaisLogo} /> <br />
            </div>
        </Slide>
    );
}

function javaScriptLogo() {
    return (
        <Slide {...slideStyle}>
            <Image width='5.5em' height='5.5em' src={images.js} />
            <Heading size={5}>JavaScript</Heading>
        </Slide>
    );
}

function title(isWsd) {
    if (isWsd) {
        return (
            <Slide {...slideStyle}>
                <Heading size={5}>Готовим бизнес-лапшу</Heading>
                <Heading size={5}>на стеке React и Redux</Heading>
            </Slide>
        );
    }
    else {
        return (
            <Slide {...slideStyle}>
                <Heading size={5}>Как написать сложное</Heading>
                <Heading size={5}>single-page приложение</Heading>
                <Heading size={5}>с кучей бизнес лапши</Heading>
            </Slide>
        );
    }
}

function productScheme() {
    return (
        <Slide {...slideStyle}>
            <Image height='30rem' src={images.pic12} />
        </Slide>
    );
}

function productInterfaces1() {
    return (
        <Slide {...slideStyle}>
            Картинка с интерфейсами EDI #1
        </Slide>
    );
}

function productInterfaces2() {
    return (
        <Slide {...slideStyle}>
            Картинка с интерфейсами EDI #2
        </Slide>
    );
}

export default class Presentation extends React.Component {
    render() {
        const { isWsd } = this.props;

        return (
            <Spectacle theme={theme}>
                <Deck transition={['slide']} transitionDuration={700}>
                    {title(isWsd)}
                    {isWsd ? null : javaScriptLogo()}
                    {isWsd ? null : agenda()}
                    {isWsd ? productScheme() : null}
                    {isWsd ? productInterfaces1() : null}
                    {isWsd ? productInterfaces2() : null}
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
                            textSize='0.8rem'
                            source={examples.presentation} />
                        <Text style={{ marginTop: '1rem' }} textSize='2rem'>
                            Spectacle: <Link href='https://github.com/FormidableLabs/spectacle'>https://github.com/FormidableLabs/spectacle</Link>
                        </Text>
                    </Slide>
                    <Slide {...slideStyle}>
                        <Heading size={4}>React {Chars.mdash} это как PHP,<br /> только JavaScript</Heading>
                    </Slide>
                    <Slide {...slideStyle}>
                        <Heading size={4}>Виртуальный DOM</Heading>
                    </Slide>
                    <Slide {...slideStyle}>
                        <Heading size={4}>Отделение логики от представления</Heading>
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
                        <Text>Библиотеки для работы с внешним состоянием:</Text>
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
                        <Image height='30rem' src={images.pic1} />
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
                        <Image height='25rem' src={images.problemScreeshot} />
                        <Link href='https://github.com/reactjs/redux/issues/1528'>https://github.com/reactjs/redux/issues/1528</Link>
                    </Slide>
                    <Slide {...slideStyle}>
                        <Heading size={4}>Reelm</Heading>
                    </Slide>
                    <Slide {...slideStyle}>
                        <List>
                            <ListItem>Композиция и инкапсуляция</ListItem>
                            <ListItem>Долгоживущие транзакции</ListItem>
                            <ListItem>Управление побочными эффектами</ListItem>
                        </List>
                    </Slide>
                    <Slide {...slideStyle}>
                        <Heading size={4}>Композиция и инкапсуляция</Heading>
                    </Slide>
                    <Slide {...slideStyle}>
                        <Image height='30rem' src={images.pic2} />
                    </Slide>
                    <Slide {...slideStyle}>
                        <Image height='30rem' src={images.pic9} />
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
                        <Image height='30rem' src={images.pic8} />
                    </Slide>
                    <Slide {...slideStyle}>
                        <Image height='30rem' src={images.pic1} />
                    </Slide>
                    <Slide {...slideStyle}>
                        <Image height='30rem' src={images.pic3} />
                    </Slide>
                    <Slide {...slideStyle}>
                        <Layout>
                            <Fill style={{ marginRight: 20 }}>
                                <CodePane
                                    style={{ margin: 20 }}
                                    lang='js'
                                    textSize='1.1rem'
                                    source={examples.composedReducers} />
                            </Fill>
                            <Fill>
                                <CodePane
                                    style={{ margin: 20 }}
                                    lang='js'
                                    textSize='1.1rem'
                                    source={examples.composedView} />
                            </Fill>
                        </Layout>
                        <Layout>
                            <Fill style={{ marginRight: 20 }}>
                                <CodePane
                                    style={{ margin: 20 }}
                                    lang='js'
                                    textSize='1.1rem'
                                    source={examples.nestedReducerInComposition} />
                            </Fill>
                            <Fill>
                                <CodePane
                                    style={{ margin: 20 }}
                                    lang='js'
                                    textSize='1.1rem'
                                    source={examples.nestedViewInComposition} />
                            </Fill>
                        </Layout>
                    </Slide>
                    <Slide {...slideStyle}>
                        <Image height='30rem' src={images.pic4} />
                    </Slide>
                    <Slide {...slideStyle}>
                        <Heading size={4}>Долгоживущие транзакции</Heading>
                    </Slide>
                    <Slide {...slideStyle}>
                        <Image height='30rem' src={images.pic11} />
                    </Slide>
                    <Slide {...slideStyle}>
                        <CodePane
                            lang='js'
                            textSize='2rem'
                            style={{ minWidth: '35rem', maxWidth: '35rem' }}
                            source={examples.ifThenPseudoCode} />
                    </Slide>
                    <Slide {...slideStyle}>
                        <CodePane
                            lang='js'
                            textSize='2rem'
                            style={{ minWidth: '35rem', maxWidth: '35rem' }}
                            source={examples.cofirmJQuery} />
                    </Slide>
                    <Slide {...slideStyle}>
                        <CodePane
                            lang='js'
                            textSize='2rem'
                            style={{ minWidth: '40rem', maxWidth: '40rem' }}
                            source={examples.jQueryAsync} />
                    </Slide>
                    <Slide {...slideStyle}>
                        <Heading size={4}>Saga</Heading>
                    </Slide>
                    <Slide {...slideStyle}>
                        <CodePane
                            lang='js'
                            textSize='1.6rem'
                            source={examples.sagaPseudoCode} />
                    </Slide>
                    <Slide {...slideStyle}>
                        <Heading size={4}>redux-saga</Heading>
                        <Link href='http://yelouafi.github.io/redux-saga/'>http://yelouafi.github.io/redux-saga/</Link>
                    </Slide>
                    <Slide {...slideStyle}>
                        <CodePane
                            lang='js'
                            textSize='1.6rem'
                            source={examples.plainSagaCode} />
                    </Slide>
                    <Slide {...slideStyle}>
                        <CodePane
                            lang='js'
                            textSize='1.6rem'
                            source={examples.sagaRunningCode} />
                    </Slide>
                    <Slide {...slideStyle}>
                        <CodePane
                            lang='js'
                            textSize='1.6rem'
                            source={examples.sagaInReelm} />
                    </Slide>
                    <Slide {...slideStyle}>
                        <Heading size={4}>Управление побочными эффектами</Heading>
                    </Slide>
                    <Slide {...slideStyle}>
                        <Image height='30rem' src={images.pic5} />
                    </Slide>
                    <Slide {...slideStyle}>
                        <CodePane
                            lang='js'
                            textSize='1.6rem'
                            source={examples.tryCatchInReelm} />
                    </Slide>
                    <Slide {...slideStyle}>
                        <Image height='30rem' src={images.pic7} />
                    </Slide>
                    <Slide {...slideStyle}>
                        <Image height='30rem' src={images.pic6} />
                    </Slide>
                    <Slide {...slideStyle}>
                        <Layout>
                            <Fill style={{ margin: 20 }}>
                                <CodePane
                                    lang='js'
                                    textSize='1.1rem'
                                    source={examples.reelmProduceApiEffect} />
                            </Fill>
                            <Fill style={{ margin: 20 }}>
                                <CodePane
                                    lang='js'
                                    textSize='1.1rem'
                                    source={examples.reelmHandleApiEffect} />
                            </Fill>
                        </Layout>
                    </Slide>
                    <Slide {...slideStyle}>
                        <Image height='30rem' src={images.pic10} />
                    </Slide>
                    <Slide {...slideStyle}>
                        <Layout>
                            <Fill style={{ margin: 20 }}>
                                <CodePane
                                    lang='js'
                                    textSize='1.1rem'
                                    source={examples.reelmProduceEffect} />
                            </Fill>
                            <Fill style={{ margin: 20 }}>
                                <CodePane
                                    lang='js'
                                    textSize='1.1rem'
                                    source={examples.reelmHandleEffect} />
                            </Fill>
                        </Layout>
                    </Slide>
                    <Slide {...slideStyle}>
                        <Heading size={4}>Reelm</Heading>
                        <div style={{ textAlign: 'left', display: 'inline-block' }}>
                            <Text lineHeight={2}>Документация: <Link href='https://reelm.github.io/ru/intro/'>https://reelm.github.io/ru/intro/</Link></Text>
                            <Text lineHeight={2}>Слайды: {isWsd
                                ? <Link href='https://reelm.github.io/wsd-2016-slides'>https://reelm.github.io/wsd-2016-slides</Link>
                                : <Link href='https://reelm.github.io/konfur-2016-slides'>https://reelm.github.io/konfur-2016-slides</Link>}
                            </Text>
                            <Text lineHeight={2}>Исходный код: <Link href='https://github.com/tihonove/reelm'>https://github.com/tihonove/reelm</Link></Text>
                        </div>
                        <br />
                        <br />
                        <Code textSize='2rem'>npm install reelm --save</Code>
                    </Slide>
                    {isWsd ? null : konturProductList()}
                    <Slide {...slideStyle}>
                        <Heading size={4}>Спасибо за внимание</Heading>
                    </Slide>
                </Deck>
            </Spectacle>
        );
    }
}
