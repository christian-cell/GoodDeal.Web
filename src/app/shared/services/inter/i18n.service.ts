import { Injectable } from '@angular/core';
import { TranslateService ,  } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})

export class I18nService {

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('en');
  }

  setLanguage(lang: string): void {

    const currentLanguage = this.getCurrentLanguage();
    console.log('Idioma actual:', currentLanguage);

    console.log(lang);

    this.translateService.use(lang);

    this.translateService.setTranslation(lang, `/assets/i18n/${lang}.json`, true);
  }

  getCurrentLanguage(): string {
    return this.translateService.currentLang;
  }
}
