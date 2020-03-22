
import { CounterAction } from '../actions';
import { StoreState } from '../types/index';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/index';

export function counterReducer(state: StoreState, action: CounterAction): StoreState {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT_COUNTER:
      return { ...state, counter: Math.max(1, state.counter - 1) };
    default:
      return state;
  }
}