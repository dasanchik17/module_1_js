import { Component } from '../core/Component';

export class Form extends Component {
  setup(props) {
    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';

    this.state = {
      amount: ''
    }

    const $label = document.createElement('label');
    $label.className = 'donate-form__input-label';
    $label.textContent = 'Введите сумму в $';

    const $input = document.createElement('input');
    $input.type = 'number';
    $input.name = 'amount';
    $input.min = '1';
    $input.max = '100';
    $input.required = true;
    $input.className = "donate-form__donate-input";

    $label.appendChild($input);
    this.$rootElement.appendChild($label);
    this.$input = $input;

    const $button  = document.createElement('button');
    $button.type = 'submit';
    $button.disabled = true;
    $button.className = 'donate-form__submit-button';
    $button.textContent = 'Задонатить';

    this.$rootElement.appendChild($button);
    this.$button = $button;
  }

  handleInput(event) {
    // ...
  }

  handleSubmit(event) {
    // ...
  }
}
