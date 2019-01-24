import { Dispatcher } from 'flux'
import { Action } from '../actions/Actions';

export var AppDispatcher = new Dispatcher<Action>()
