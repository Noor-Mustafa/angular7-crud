import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InternationalizationService {

  selected_language: Subject<string>;
  current_selected_language: string;

  constructor() {
    this.selected_language = new Subject();
    this.selected_language.next("en");
  }

  getLanguage() {
    return this.selected_language;
  }

  getCurrentLanguage(): string {
    return this.current_selected_language;
  }

  setLanguage(language: string): void {
    this.current_selected_language = language;
    this.selected_language.next(language);
    return;
  }

}
