import { Injectable } from '@angular/core';
import { CronJobsConfig, CronJobsSelectOption, CronJobsValidationConfig } from '../contracts/contracts';

@Injectable()
export class DataService {

  private defaultConfig: CronJobsConfig = {
    quartz: false,
    bootstrap: true,
    multiple: false,
  };

  private defaultValidateConfig: CronJobsValidationConfig = {
    validate: false,
  };

  private daysOfWeekPosix: Array<CronJobsSelectOption> = [
    {value: 0, label: 'Niedziela'},
    {value: 1, label: 'Monday'},
    {value: 2, label: 'Wtorek'},
    {value: 3, label: 'Środa'},
    {value: 4, label: 'Czwartek'},
    {value: 5, label: 'Piątek'},
    {value: 6, label: 'Sobota'}
  ];

  private daysOfWeekQuartz: Array<CronJobsSelectOption> = [
    {value: 1, label: 'Niedziela'},
    {value: 2, label: 'Poniedziałek'},
    {value: 3, label: 'Wtorek'},
    {value: 4, label: 'Środa'},
    {value: 5, label: 'Czwartek'},
    {value: 6, label: 'Piątek'},
    {value: 7, label: 'Sobota'}
  ];

  private numeral: Array<CronJobsSelectOption> = [
    {value: 1, label: '1'},
    {value: 2, label: '2'},
    {value: 3, label: '3'},
    {value: 4, label: '4'},
    {value: 5, label: '5'},
    {value: 6, label: '6'},
    {value: 7, label: '7'},
    {value: 8, label: '8'},
    {value: 9, label: '9'},
    {value: 10, label: '10'},
    {value: 11, label: '11'},
    {value: 12, label: '12'},
    {value: 13, label: '13'},
    {value: 14, label: '14'},
    {value: 15, label: '15'},
    {value: 16, label: '16'},
    {value: 17, label: '17'},
    {value: 18, label: '18'},
    {value: 19, label: '19'},
    {value: 20, label: '20'},
    {value: 21, label: '21'},
    {value: 22, label: '22'},
    {value: 23, label: '23'},
    {value: 24, label: '24'},
    {value: 25, label: '25'},
    {value: 26, label: '26'},
    {value: 27, label: '27'},
    {value: 28, label: '28'},
    {value: 29, label: '29'},
    {value: 30, label: '30'},
    {value: 31, label: '31'}
  ];

  private _months: Array<CronJobsSelectOption> = [
    {value: 1, label: 'Styczeń'},
    {value: 2, label: 'Luty'},
    {value: 3, label: 'Marzec'},
    {value: 4, label: 'Kwiecień'},
    {value: 5, label: 'Maj'},
    {value: 6, label: 'Czerwiec'},
    {value: 7, label: 'Lipiec'},
    {value: 8, label: 'Sierpień'},
    {value: 9, label: 'Wrzesień'},
    {value: 10, label: 'Październik'},
    {value: 11, label: 'Listopad'},
    {value: 12, label: 'Grudzień'}
  ];

  private _baseFrequency: Array<CronJobsSelectOption> = [
    {value: 0, label: 'Proszę wybrać'},
    {value: 1, label: 'Minuta'},
    {value: 2, label: 'Godzina'},
    {value: 3, label: 'Dzień'},
    {value: 4, label: 'Tydzień'},
    {value: 5, label: 'Miesiąc'},
    {value: 6, label: 'Rok'}
  ];

  private _hours: Array<CronJobsSelectOption>;
  private _minutes: Array<CronJobsSelectOption>;


  public get baseFrequency(): Array<CronJobsSelectOption> {
    return [
      ...this._baseFrequency
    ];
  }

  public get daysOfMonth(): Array<CronJobsSelectOption> {
    return [
      ...this.numeral
    ];
  }

  public get months(): Array<CronJobsSelectOption> {
    return [
      ...this._months
    ];
  }

  public get hours(): Array<CronJobsSelectOption> {
    return [
      ...this._hours
    ];
  }

  public get minutes(): Array<CronJobsSelectOption> {
    return [
      ...this._minutes
    ];
  }

  constructor() {
    this._hours = [];
    for (let x = 0; x < 24; x++) {
      this._hours.push(<CronJobsSelectOption>{value: x, label: `${x}`});
    }

    this._minutes = [];
    for (let x = 0; x < 60; x = x + 5) {
      this._minutes.push(<CronJobsSelectOption>{value: x, label: `${x}`});
    }

  }


  getConfig(config: CronJobsConfig = {}): CronJobsConfig {
    return {
      ...this.defaultConfig,
      ...config
    };
  }

  getValidate(validateConfig: CronJobsValidationConfig = {}): CronJobsValidationConfig {
    return {
      ...this.defaultValidateConfig,
      ...validateConfig
    };
  }

  getDaysOfWeek(quartz: Boolean = false): Array<CronJobsSelectOption> {
    if (quartz) {
      return [
        ...this.daysOfWeekQuartz
      ];
    }
    return [
      ...this.daysOfWeekPosix
    ];
  }

}
