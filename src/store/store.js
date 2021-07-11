import {rootReducer} from '../reducer/combinereducer';
import { createStore } from "redux";

export const store = createStore(rootReducer);