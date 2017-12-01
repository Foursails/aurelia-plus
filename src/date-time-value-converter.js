export class DateValueConverter {
  toView(date) {
    if (!(date instanceof Date)) {
      date = new Date(date);
    }
    return date.toLocaleDateString();
  }
}

export class TimeValueConverter {
  toView(date) {
    if (!(date instanceof Date)) {
      date = new Date(date);
    }
    return date.toLocaleTimeString();
  }
}

export class DateTimeValueConverter {
  toView(date) {
    if (!(date instanceof Date)) {
      date = new Date(date);
    }
    return date.toLocaleString();
  }
}

