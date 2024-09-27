import React, { useState } from 'react';
import ScheduleForm from './components/ScheduleForm';
import ScheduleTable from './components/ScheduleTable';
import ScheduleDetails from './components/ScheduleDetails';
import './App.css';

function App() {
  const [schedules, setSchedules] = useState([]);
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  const handleAddSchedule = (newSchedule) => {
    const updatedSchedules = [...schedules, newSchedule].sort((a, b) => {
      const dateTimeA = new Date(`${a.date}T${a.time}`);
      const dateTimeB = new Date(`${b.date}T${b.time}`);
      return dateTimeA - dateTimeB;
    });
    setSchedules(updatedSchedules);
  };

  const handleDetailsClick = (schedule) => {
    setSelectedSchedule(schedule);
  };

  const handleCloseDetails = () => {
    setSelectedSchedule(null);
  };

  const handleDeleteSchedule = (scheduleToDelete) => {
    const updatedSchedules = schedules.filter(
      schedule => schedule !== scheduleToDelete
    );
    setSchedules(updatedSchedules);
    setSelectedSchedule(null);
  };

  return (
    <div className="App">
      <h1>예주 장호 일정 공유 서비스</h1>
      <ScheduleForm onSubmit={handleAddSchedule} />
      <ScheduleTable 
        schedules={schedules} 
        onDetailsClick={handleDetailsClick} 
        onDeleteClick={handleDeleteSchedule}
      />
      {selectedSchedule && (
        <ScheduleDetails 
          schedule={selectedSchedule} 
          onClose={handleCloseDetails}
          onDelete={handleDeleteSchedule}
        />
      )}
    </div>
  );
}

export default App;