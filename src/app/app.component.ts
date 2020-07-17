import { Component } from '@angular/core';
import { MatMomentDateModule, MomentDateAdapter } from "@angular/material-moment-adapter";
import {
  MAT_MOMENT_DATE_FORMATS,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

export const MY_FORMATS = {
  parse: {
      dateInput: 'DD/MM/YYYY',
  },
  display: {
      dateInput: 'DD/MM/YYYY',
      monthYearLabel: 'MM YYYY',
      dateA11yLabel: 'DD/MM/YYYY',
      monthYearA11yLabel: 'MM YYYY',
  },
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-EN'},
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class AppComponent {
  title = 'angularmaterialdatelocal';
}
