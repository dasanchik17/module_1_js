import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {
  setup(props) {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';

    this.state = {
      total: 0,
      donates:[],
    }

    const $heading = document.createElement('h1');
    $heading.className = 'total-amount';

    const $span = document.createElement('span');
    $span.textContent = this.state.total;

    $heading.textContent = 'Итого $';
    $heading.appendChild($span);

    this.$rootElement.appendChild($heading);

    this.$total = $span;


    const donateForm = new Form();
    this.$rootElement.appendChild(donateForm.$rootElement);
    const donateList = new List();
    this.$rootElement.appendChild(donateList.$rootElement);
  }
  
  onItemCreate(amount) {
    // ...
  }
}
