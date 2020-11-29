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
import menuBtn from './modules/menuBtn';
import toTopArrow from './modules/toTopArrow';
import validate from './modules/validate';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import mainSlider from './modules/mainSlider';
import photoGallery from './modules/photoGallery';

dropDownMenu();
togglePopup();
menuBtn();
toTopArrow();
validate();
calc();
sendForm();
mainSlider();
photoGallery();