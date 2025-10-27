import { CalendarEvent, insertEvent, listEvents } from '@/services/calendarApi';
import { signInWithGoogle } from '@/services/googleAuth';
import React, { useState } from 'react';
import { Button, ScrollView, Text } from 'react-native';

export default function Home() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [token, setToken] = useState<string | null>(null);

  async function handleLogin() {
    const result = await signInWithGoogle();
    if (result?.accessToken) {
      setToken(result.accessToken);
      const items = await listEvents(result.accessToken);
      setEvents(items);
    }
  }

  async function handleAddEvent() {
    if (!token) return;
    const newEvent: CalendarEvent = {
      summary: 'Corte de cabelo',
      start: {dateTime: '2025-10-28T14:00:00-03:00'},
      end: {dateTime: '2025-10-28T15:00:00-03:00'},
    };
    await insertEvent(token, newEvent);
    const items = await listEvents(token);
    setEvents(items);
  }

  return (
    <ScrollView contentContainerStyle={{padding: 20, marginTop: 50}}>
      <Button title="Conectar ao Google Calendar" onPress={handleLogin} />
      {token && (
        <Button title="Adicionar evento de teste" onPress={handleAddEvent} />
      )}
      {events.length > 0 && (
        <>
          <Text style={{marginTop: 20, fontWeight: 'bold', fontSize: 16}}>
            Próximos eventos:
          </Text>
          {events.map(ev => (
            <Text key={ev.id ?? ev.summary}>• {ev.summary}</Text>
          ))}
        </>
      )}
    </ScrollView>
  );
}
