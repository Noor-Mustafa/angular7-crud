import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

import { InternationalizationService } from '../../services/internationalization/internationalization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  /*
   * Supported Language
   */
  private languages = [
    { label: 'عَرَبِيّ', value: 'ar' },
    { label: 'English', value: 'en' }
  ];

  constructor(
    private internationalization_service_instance: InternationalizationService,
  ) {
    /*
     * First Life Cycle Hook Of Angular 
     */
  }

  ngOnInit() {
  }

  changeLanguage(lang): void {
    /* change language - set Language in internationalization service */
    this.internationalization_service_instance.setLanguage(lang.target.value);
  }

}
