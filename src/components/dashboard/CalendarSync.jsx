import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useState } from 'react';

const events = [
  { title: 'Airbnb - Dupont', start: '2024-03-15', end: '2024-03-20', color: '#FF5A5F' },
  { title: 'Booking - Martin', start: '2024-03-22', end: '2024-03-25', color: '#003580' },
  { title: 'Bloqué (perso)', start: '2024-03-28', end: '2024-03-30', color: '#D4AF37' },
];

export default function CalendarSync() {
  const [view, setView] = useState('dayGridMonth');

  const handleDateSelect = (info) => {
    const confirmBlock = window.confirm(`Bloquer du ${info.startStr} au ${info.endStr} pour usage personnel ?`);
    if (confirmBlock) {
      console.log('Blocking dates:', info);
    }
  };

  return (
    <div className="glass-effect p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h3 className="text-gold text-lg sm:text-xl">Calendrier des réservations</h3>
        <div className="flex gap-3 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-[#FF5A5F]" />
            <span>Airbnb</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-[#003580]" />
            <span>Booking</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-gold" />
            <span>Bloqué</span>
          </div>
        </div>
      </div>

      <div className="calendar-container">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView={view}
          headerToolbar={{
            left: 'prev,next',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek'
          }}
          events={events}
          selectable={true}
          select={handleDateSelect}
          height="auto"
          aspectRatio={1.5}
          eventDisplay="block"
        />
      </div>

      <div className="mt-4 text-xs text-gray-400 text-center">
        Cliquez sur une date pour bloquer pour usage personnel
      </div>
    </div>
  );
}