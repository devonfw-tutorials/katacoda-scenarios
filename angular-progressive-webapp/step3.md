The component AppComponent implements the interface OnInit and inside its method ngOnInit() the subscription to the services is done. When a dish arrives, it is saved and shown (app.component.html).

```
...
import { DataService } from './data.service';

export class AppComponent implements OnInit {

dish: { name: string; description: string } = { name: '', description: ''};

...

  ngOnInit() {
    this.data
      .getDishes()
      .subscribe(
        (dishToday: { dish: { name: string; description: string } }) => {
          this.dish = {
            name: dishToday.dish.name,
            description: dishToday.dish.description,
          };
        },
      );
  }
}
```
