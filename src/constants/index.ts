import { getPreferenceValues } from "@raycast/api";
import { FIVE_PRAYERS_KEY, Preferences } from "../types";

export const ALADHAN_API_URL = 'https://api.aladhan.com/v1';

export const PRAYER_NAMES: {
  [key in FIVE_PRAYERS_KEY]: string
} = {
  Fajr: 'Subuh',
  Dhuhr: 'Dzuhur',
  Asr: 'Ashar',
  Maghrib: 'Maghrib',
  Isha: 'Isya'
} as const;

export const PREFERENCES = getPreferenceValues<Preferences>();