export type Response<T> = {
  code: number;
  status: string;
  data: T;
}

export type TimeFormat = `${string}:${string}`

export type Timings = {
  Fajr: TimeFormat;
  Sunrise: TimeFormat;
  Dhuhr: TimeFormat;
  Asr: TimeFormat;
  Sunset: TimeFormat;
  Maghrib: TimeFormat;
  Isha: TimeFormat;
  Imsak: TimeFormat;
  Midnight: TimeFormat;
  Firstthird: TimeFormat;
  Lastthird: TimeFormat;
}

export type FIVE_PRAYERS_KEY = keyof Pick<Timings, 'Fajr' | 'Dhuhr' | 'Asr' | 'Maghrib' | 'Isha'>

export type GetDailyPrayerTimesResponse = Response<{
  timings: Timings;
}>

export type Preferences = {
  latitude: string;
  longitude: string;
}