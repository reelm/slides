import React from 'react';
import {
    // Appear,
    // Link,
    // Markdown,
    BlockQuote,
    Cite,
    CodePane,
    Deck,
    Fill,
    Heading,
    Image,
    Layout,
    ListItem,
    List,
    Quote,
    Slide,
    Spectacle,
    Text,
} from 'spectacle';
import CodeSlide from '../CodeSlide';
import preloader from 'spectacle/lib/utils/preloader';
import createTheme from '../theme';

import 'normalize.css';
import '../theme/index.css';

const images = {
    react: require('../assets/react.png'),
    redux: require('../assets/redux.png'),

    pureReactWithState: require('../assets/pure-react-with-state.png'),
    pic1: require('../assets/pic-1.png'),
    pic2: require('../assets/pic-2.png'),
    pic4: require('../assets/pic-4.png'),
};

preloader(images);

const theme = createTheme();

function Note({ children }) {
    return <Text textColor='#999' textSize={40}>{children}</Text>;
}

export default class Presentation extends React.Component {
    render() {
        return (
            <Spectacle theme={theme}>
                <Deck transition={['slide']} transitionDuration={700} progress='pacman'>
                    <Slide>
                        <Heading textSize={80}>Готовим бизнес-лапшу на React и Redux</Heading>
                    </Slide>
                    <Slide>
                        <BlockQuote>
                            <Quote>Код должен чётко выражать намерения своего автора</Quote>
                            <Cite>Дядя Боб</Cite>
                        </BlockQuote>
                    </Slide>
                    <Slide notes='Вставить картинки. Тут надо это...'>
                        <Layout>
                            <Fill>
                                <Image width='11em' height='10em' src={images.react} />
                                <Heading>React1</Heading>
                            </Fill>
                            <Fill>
                                <Image width='11em' height='10em' src={images.redux} />
                                <Heading>Redux</Heading>
                            </Fill>
                        </Layout>
                    </Slide>
                    <Slide>
                        <Heading>React {'\u2014'} это не фреймворк</Heading>
                    </Slide>
                    <CodeSlide
                        transition={['slide']}
                        lang='js'
                        code={require('!raw!../code-examples/react-readonly.example.js')}
                        ranges={[
                        { loc: [2, 16], title:'React' },
                        { loc: [0, 1], note: 'Подключаем реакт' },
                        { loc: [2, 3], note: 'Создаём компонент' },
                        { loc: [3, 15], note: 'Рисуем' },
                        { loc: [28, 30], note: 'Подлкючаем в дом' },
                        ]} />
                    <CodeSlide
                        transition={['slide']}
                        lang='js'
                        code={require('!raw!../code-examples/react-readonly-2.example.js')}
                        ranges={[
                        { loc: [0, 30] },
                        ]} />
                    <CodeSlide
                        transition={['slide']}
                        lang='js'
                        code={require('!raw!../code-examples/react-unidirectional-data-flow.example.js')}
                        ranges={[
                        { loc: [0, 30], title: <span>Однонаправленный<br /> поток данных</span> },
                        ]} />
                    <Slide>
                        <Image src={images.pureReactWithState} />
                    </Slide>
                    <Slide notes='кажется, что теперь мы может очень легко проводить декомпозицию'>
                        <Image width={900} src={images.pic1} />
                    </Slide>
                    <Slide>
                        <Image width={900} src={images.pic2} />
                    </Slide>
                    <Slide>
                        <Text>// Картинка-пример-приложения в котором редакс может оказатся полезным.</Text>
                        <Text>// Картинка-пример-приложения например эта https://ui.skbkontur.ru/Retail/EDI/%D0%92%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5/%D0%97%D0%B0%D0%BA%D0%B0%D0%B7%D1%8B/%D0%94%D0%BE%D0%B4%D0%B5%D0%BB%D0%BA%D0%B8%20New%20Web/01%20-%20%D0%9D%D0%BE%D0%B2%D1%8B%D0%B5%20%D0%B7%D0%B0%D1%8F%D0%B2%D0%BA%D0%B8.png.htm</Text>
                    </Slide>
                    <Slide>
                        <Text>// Картинка #2. Внейшний стейт. Суть в том, чтобы показать что стейт лежит снаружи и отдельно</Text>
                    </Slide>
                    <Slide>
                        <Heading>Redux</Heading>
                    </Slide>
                    <Slide>
                        <Text>// Картинка #3. Тут есть редьюсеры.</Text>
                    </Slide>
                    <CodeSlide
                        transition={['slide']}
                        lang='js'
                        code={require('!raw!../code-examples/reducer-1.example.js')}
                        ranges={[
                        { loc: [0, 30] },
                        ]} />
                    <Slide>
                        <Text>// Тут можно было бы поставить точку</Text>
                        <List>
                            <ListItem>Много boilerplate</ListItem>
                            <ListItem>Long running transactions</ListItem>
                            <ListItem>Side-effects</ListItem>
                        </List>
                        <Note>Тут надо пофилософствовать, типа а что конец, а почему, может вернуться назад для закрепления</Note>
                        <Note>Как-то отметить тот факт, что это всё всё приложение состоит из посути двух функций</Note>
                        <Note>Поговорить о чистоте функций</Note>
                    </Slide>
                    <Slide>
                    <Image src={images.pic4} />
                    </Slide>
                    <CodeSlide
                        note='Пример в лоб. Всё отлично. Но!'
                        transition={['slide']}
                        lang='js'
                        code={require('!raw!../code-examples/form-1.example.js')}
                        ranges={[
                        { loc: [0, 30] },
                        ]} />
                    <CodeSlide
                        note='Пытаемся сделать композицию. Видим очевидную проблему'
                        transition={['slide']}
                        lang='js'
                        code={require('!raw!../code-examples/form-2.example.js')}
                        ranges={[
                        { loc: [0, 30] },
                        ]} />
                    <CodeSlide
                        note='Некий варинт решения'
                        transition={['slide']}
                        lang='js'
                        code={require('!raw!../code-examples/form-3.example.js')}
                        ranges={[
                        { loc: [0, 30] },
                        ]} />
                    <CodeSlide
                        note='Некий варинт решения'
                        transition={['slide']}
                        lang='js'
                        code={require('!raw!../code-examples/form-3.example.js')}
                        ranges={[
                        { loc: [0, 30] },
                        ]} />
                    <Slide>
                        <Text>// Классная картинка с экшинами. Про то как они текут при композиции</Text>
                    </Slide>
                    <Slide>
                        <Heading>Фрактальная архитектура</Heading>
                    </Slide>
                    <Slide>
                        <Heading>Композиция</Heading>
                        <Heading>Инкапсуляция</Heading>
                    </Slide>
                    <Slide>
                        // TODO Картинка про фрактальную архитерктуру
                    </Slide>
                    <Slide>
                        <Heading>Композиция сайд-эффектов</Heading>
                        <Note>Перефразировать: речь о композиции компонент с сайд эффектами</Note>
                    </Slide>
                    <Slide>
                        <Heading>Action creators</Heading>
                    </Slide>
                    <Slide>
                        <Heading>Middleware</Heading>
                    </Slide>
                    <Slide>
                        <Text>// Картинка-приложение: форма с кнопокой очистки и окном подтверждения</Text>
                    </Slide>
                    <Slide>
                        <Heading>Варианты</Heading>
                        <List>
                            <ListItem>Pure functions</ListItem>
                            <ListItem>Middleware</ListItem>
                        </List>
                    </Slide>
                    <Slide>
                        <Text>// Пример, как это делать в лоб, видим что это многословно, невыразительно и немасштабируемо</Text>
                    </Slide>
                    <Slide>
                        <Text>// Решаем на саге, код выглядит лучше, но не маштабируется.</Text>
                    </Slide>
                    <Slide>
                        <Text>Тут должно быть объяснение того, что редьюсеры будут выдавать не только новый стейт, но и генераторы эффектов</Text>
                    </Slide>
                    <Slide>
                        <Text>// Пример когда, как делать в Reelm'е.</Text>
                    </Slide>
                    <Slide>
                        <Text>// Классная картинка с сайд эффектами и как они текут по приложениею</Text>
                    </Slide>
                    <Slide>
                        <Text>// Тот же пример, но надо вынести окно за пределы приложения</Text>
                        <Text>На самом деле этой сайд эффект</Text>
                    </Slide>
                    <Slide>
                        <Text>// Классная картинка с сайд эффектами и как делается mapEffects</Text>
                    </Slide>
                    <Slide>
                        <Text>// Сделать бонус-слайды: линзы и зачем они нужны</Text>
                    </Slide>
                </Deck>
            </Spectacle>
        );
    }
}
