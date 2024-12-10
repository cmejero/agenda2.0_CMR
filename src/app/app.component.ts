import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

import { HttpService } from './servicios/http.service';

@Component({
    selector: 'app-root',
    imports: [RouterModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: true
})
export class AppComponent {
  title = 'agenda_cmr';


}
