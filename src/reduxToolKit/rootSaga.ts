import {all} from 'redux-saga/effects'
import counterSaga from './feature/counter/counterSaga';

function* helloSaga (){
    console.log('Hallo saga boiz');
    
}

export default function* rootSaga () {
    console.log('Root Saga');
    yield all([helloSaga(), counterSaga()])
}