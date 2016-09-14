import {Component} from '@angular/core'; //Importing gives your component access to Angular's core @Component decorator function.

@Component({ //associates metadata with the AppComponent component class
    selector: 'my-app',
    template: ` <h1>My First Angular 2 App!!!</h1>
                <h2>My SECOND Angular 2 App</h2> `
})

//A component class that controls the appearance and behavior of a view through its template
export class AppComponent {}

