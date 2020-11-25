'use strict';

import 'nodelist-foreach-polyfill';
import '@babel/polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import 'regexp-polyfill';
import browser from 'cross-browser-polyfill';
browser();

import dropDownMenu from './modules/dropDownMenu';
import togglePopup from './modules/togglePopup';

//Drop-down menu
dropDownMenu();
togglePopup();