import { Component } from '../core/Component';

export class Form extends Component {
  setup(props) {
    this.state = {
      amount: ''
    };

    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';

    const $label = document.createElement('label');
    $label.className = 'donate-form__input-label';
    $label.textContent = 'Введите сумму в $';

    const $input = document.createElement('input');
    $input.type = 'number';
    $input.name = 'amount';
    $input.min = '1';
    $input.max = '100';
    $input.required = true;
    $input.className = 'donate-form__donate-input';

    $label.appendChild($input);
    this.$rootElement.appendChild($label);
    this.$input = $input;

    const $button = document.createElement('button');
    $button.type = 'submit';
    $button.disabled = true;
    $button.className = 'donate-form__submit-button';
    $button.textContent = 'Задонатить';

    this.$rootElement.appendChild($button);
    this.$button = $button;

    this.$input.addEventListener('input', this.handleInput.bind(this));
    this.$rootElement.addEventListener('submit', this.handleSubmit.bind(this));
  }

  get isValid() {
    const num = Number(this.state.amount);
    return num >= 1 && num <= 100;
  }

  handleInput(event) {
    this.state.amount = event.target.value;
    this.$button.disabled = !this.isValid;
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.isValid) {
      this.props.onSubmit(Number(this.state.amount)); // ← передаём число в App

      this.state.amount = '';
      this.$input.value = '';
      this.$button.disabled = true;
    }
  }
}