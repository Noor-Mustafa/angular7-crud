import { Component } from '@angular/core';

/*
 * Translate Service
 */
import { TranslateService } from '@ngx-translate/core';

/*
 * Internatioanlization Service
 */
import { InternationalizationService } from './services/internationalization/internationalization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private internationalization_service_instance: InternationalizationService,
    private translate: TranslateService
  ) {
    /*
     * First Life Cycle Hook Of Angular 
     */

    /* this language will be used as a fallback when a translation isn't found in the current language */
    translate.setDefaultLang('en');

    /* get the browser lang for best user experience */
    const browserLang = translate.getBrowserLang();

    this.internationalization_service_instance.setLanguage(browserLang);

  }

  ngOnInit() {
    /*
     * Second Life Cycle Hook Of Angular
     */

    /* subscribe the getLanguage procedure to change language*/
    this.internationalization_service_instance.getLanguage().subscribe((selected_language: string) => {
      this.translate.use(selected_language);
    });

  }

}
