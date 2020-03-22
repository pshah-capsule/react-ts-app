import Hello from '../components/Hello';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({ counter, name }: StoreState) {
  return {
    counter,
    name,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.CounterAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementCounter()),
    onDecrement: () => dispatch(actions.decrementCounter()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
