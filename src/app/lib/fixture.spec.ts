export const baseFrequency = [
  {value: 0, label: 'Proszę wybrać'},
  {value: 1, label: 'Minuta'},
  {value: 2, label: 'Godzina'},
  {value: 3, label: 'Dzień'},
  {value: 4, label: 'Tydzień'},
  {value: 5, label: 'Miesiąc'},
  {value: 6, label: 'Rok'}
];

export const numeral = [
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

export const months = [
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

export function getHours() {
  const hours = [];
  for (let x = 0; x < 24; x++) {
    hours.push({value: x, label: `${x}`});
  }
  return hours;
}

export function getMinutes(step: number = 5) {
  const minutes = [];
  for (let x = 0; x < 60; x = x + step) {
    minutes.push({value: x, label: `${x}`});
  }
  return minutes;
}

export const defaultConfig = {
  quartz: false,
  bootstrap: true,
  multiple: false,
};

export const defaultValidateConfig = {
  validate: false,
};

export const daysOfWeekPosix = [
  {value: 0, label: 'Niedziela'},
  {value: 1, label: 'Poniedziałek'},
  {value: 2, label: 'Wtorek'},
  {value: 3, label: 'Środa'},
  {value: 4, label: 'Czwartek'},
  {value: 5, label: 'Piątek'},
  {value: 6, label: 'Sobota'}
];

export const daysOfWeekQuartz = [
  {value: 1, label: 'Niedziela'},
  {value: 2, label: 'Poniedziałek'},
  {value: 3, label: 'Wtorek'},
  {value: 4, label: 'Środa'},
  {value: 5, label: 'Czwartek'},
  {value: 6, label: 'Piątek'},
  {value: 7, label: 'Sobota'}
];

export const baseFrequencyForService = {
  none: 0,
  minute: 1,
  hour: 2,
  day: 3,
  week: 4,
  month: 5,
  year: 6
};
