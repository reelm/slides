import React from 'react';
import { render } from 'react-dom';

import Presentation from './presentation';

import './theme/prism-theme.css';

render(<Presentation isWsd={true}/>, document.getElementById('root'));
