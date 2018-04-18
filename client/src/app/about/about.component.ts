import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'about',
  styles: [`
  `],
  template: `
    <blockquote class="blockquote">
      <p>
        Buy the ticket, take the ride.
      </p>
      <footer class="blockquote-footer">
        Hunter S. Thompson
      </footer>
    </blockquote>
  `
})
export class AboutComponent implements OnInit {

  public localState: any;
  constructor(
    public route: ActivatedRoute
  ) {}

  public ngOnInit() {
    this.route
      .data
      .subscribe((data: any) => {
        // your resolved data from route
        this.localState = data.yourData;
      });

    console.log('hello `About` component');
  }
}
