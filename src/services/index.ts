import { ALADHAN_API_URL, PREFERENCES } from '../constants';
import { GetDailyPrayerTimesResponse } from '../types';
import fetch from 'node-fetch';

export const getDailyPrayerTimes = async (date: string) => {
  const latitude = Number(PREFERENCES.latitude);
  const longitude = Number(PREFERENCES.longitude);
  
  try {
     const response = await fetch(`${ALADHAN_API_URL}/timings/${date}?latitude=${latitude}&longitude=${longitude}&method=20`);
     const data = await response.json() as GetDailyPrayerTimesResponse;

     return data
  } catch (err) {
    console.error(err);
    throw new Error('Failed to fetch data');
  }
}