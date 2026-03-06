import { Component } from '../core/Component';

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: new Date(),
      amount: props.amount
    };

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';

    const dateString = this.state.date.toLocaleString('ru-RU');

    const $amount = document.createElement('b');
    $amount.textContent = `$${this.state.amount}`;

    this.$rootElement.textContent = `${dateString} - `;
    this.$rootElement.appendChild($amount);

    // добавляем кнопку удаления
    const $deleteButton = document.createElement('button');
    $deleteButton.className = 'delete-button';
    $deleteButton.textContent = 'Удалить';
    $deleteButton.addEventListener('click', this.handleDelete.bind(this));
    this.$rootElement.appendChild($deleteButton);
  }

  handleDelete() {
    this.props.onDelete(this.state.amount); // сообщаем App сумму доната
    this.$rootElement.remove();             // удаляем себя из DOM
  }
}