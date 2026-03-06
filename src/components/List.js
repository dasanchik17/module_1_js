import { Component } from '../core/Component';

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    const $titleEl = document.createElement('h2');
    $titleEl.className = 'donates-container__title';
    $titleEl.textContent = 'Список донатов';

    this.$rootElement.appendChild($titleEl);

    this.$listContainer = document.createElement('div');
    this.$listContainer.className = 'donates-container__donates';

    this.$rootElement.appendChild(this.$listContainer);
  }

  addItem(item) {
    this.$listContainer.appendChild(item.$rootElement);
  }
}