Web applications usually uses external resources, making necessary the addition of services which can get those resources. This application gets a dish from My Thai Star’s back-end and shows it. To do so, a new service is going to be created.

-go to project folder: cd basic-ng-pwa

-run ng generate service data

-Modify data.service.ts, environment.ts, environment.prod.ts

To retrieve data with this service, you have to import the module HttpClient and add it to the service’s contructor. Once added, use it to create a function getDishes() that sends http request to My Thai Start’s back-end. The URL of the back-end can be stored as an environment variable MY_THAI_STAR_DISH.

data.service.ts

`...
import { HttpClient } from '@angular/common/http';
import { MY_THAI_STAR_DISH } from '../environments/environment';
...

export class DataService {
constructor(private http: HttpClient) {}

    /* Get data from Back-end */
    getDishes() {
      return this.http.get(MY_THAI_STAR_DISH);
    }
    ...

}
`

environments.ts

` ... export const MY_THAI_STAR_DISH = 'http://de-mucdevondepl01:8090/api/services/rest/dishmanagement/v1/dish/1'; ... `

environments.prod.ts

` ... export const MY_THAI_STAR_DISH = 'http://de-mucdevondepl01:8090/api/services/rest/dishmanagement/v1/dish/1'; ... `
