import { Icon, List } from "@raycast/api";
import { useGetDailyPrayerTimes } from "./hooks/useGetDailyPrayerTimes";
import { PRAYER_NAMES } from "./constants";

export default function JadwalSalat() {
  const { data, isLoading } = useGetDailyPrayerTimes();

  const prayerKeys = Object.keys(PRAYER_NAMES) as Array<keyof typeof PRAYER_NAMES>;

  return (
    <List 
      isLoading={isLoading}
      searchBarPlaceholder="Cari waktu salat..."
    >
      {
        prayerKeys.map((key) => {
          const prayerName = PRAYER_NAMES[key];
          const prayerTime = data?.[key];

          return (
            <List.Item
              key={key}
              title={prayerName}
              icon={Icon.Clock}
              accessories={[
                {
                  text: prayerTime,
                }
              ]}
            />
          )
        })
      }
    </List>
  )
}