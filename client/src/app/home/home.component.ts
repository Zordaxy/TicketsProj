import {
  Component
} from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';

@Component({
  selector: 'home',
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public localState = { value: '' };

  constructor(
    public appState: AppState
  ) {}

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
