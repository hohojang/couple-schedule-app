import React, { useState } from 'react';

function ScheduleForm({ onSubmit }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [place, setPlace] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ date, time, place, details });
    // 폼 초기화
    setDate('');
    setTime('');
    setPlace('');
    setDetails('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <input
        type="text"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
        placeholder="장소"
        required
      />
      <textarea
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        placeholder="세부 내용"
      />
      <button type="submit">일정 추가</button>
    </form>
  );
}

export default ScheduleForm;