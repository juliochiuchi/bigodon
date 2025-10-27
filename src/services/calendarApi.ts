export interface CalendarEvent {
  id?: string;
  summary: string;
  start: { dateTime: string };
  end: { dateTime: string };
}

export async function listEvents(accessToken: string): Promise<CalendarEvent[]> {
  const response = await fetch(
    'https://www.googleapis.com/calendar/v3/calendars/primary/events',
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
  const data = await response.json();
  return data.items || [];
}

export async function insertEvent(accessToken: string, event: CalendarEvent) {
  const response = await fetch(
    'https://www.googleapis.com/calendar/v3/calendars/primary/events',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    }
  );
  return await response.json();
}
