import firebase from 'firebase-tools';
import Config from './config';

firebase.initializeApp(Config);

export const auth = firebase.auth;