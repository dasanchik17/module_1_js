import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {
  setup(props) {
    this.state = {
      total: 0,
      donates: [],
    };

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';

    const $heading = document.createElement('h1');
    $heading.className = 'total-amount';

    const $span = document.createElement('span');
    $span.textContent = this.state.total;

    $heading.textContent = 'Итого: $';
    $heading.appendChild($span);
    this.$rootElement.appendChild($heading);

    this.$total = $span;

    const donateForm = new Form({
      onSubmit: this.onItemCreate.bind(this)
    });
    this.$rootElement.appendChild(donateForm.$rootElement);

    this.donateList = new List();
    this.$rootElement.appendChild(this.donateList.$rootElement);
  }

  onItemCreate(amount) {
    const item = new ListItem({
      amount,
      onDelete: this.onItemDelete.bind(this) // ← добавили
    });

    this.state.donates.push(item);
    this.donateList.addItem(item);

    this.state.total += amount;
    this.$total.textContent = this.state.total;
  }

  onItemDelete(amount) {
    this.state.total -= amount;
    this.$total.textContent = this.state.total;
  }
}