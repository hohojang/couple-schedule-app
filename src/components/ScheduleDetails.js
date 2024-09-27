import React from 'react';

function ScheduleDetails({ schedule, onClose, onDelete }) {
  if (!schedule) return null;

  return (
    <div className="schedule-details">
      <h2>일정 세부 내용</h2>
      <p><strong>날짜:</strong> {schedule.date}</p>
      <p><strong>시간:</strong> {schedule.time}</p>
      <p><strong>장소:</strong> {schedule.place}</p>
      <p><strong>세부 내용:</strong> {schedule.details}</p>
      <button onClick={onClose}>닫기</button>
      <button onClick={() => onDelete(schedule)}>삭제</button>
    </div>
  );
}

export default ScheduleDetails;