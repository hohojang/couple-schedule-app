import React from 'react';

function ScheduleTable({ schedules, onDetailsClick, onDeleteClick }) {
  return (
    <table>
      <thead>
        <tr>
          <th>날짜</th>
          <th>시간</th>
          <th>장소</th>
          <th>세부 내용</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        {schedules.map((schedule, index) => (
          <tr key={index}>
            <td data-label="날짜">{schedule.date}</td>
            <td data-label="시간">{schedule.time}</td>
            <td data-label="장소">{schedule.place}</td>
            <td data-label="세부 내용">
              <button onClick={() => onDetailsClick(schedule)}>
                세부 내용 보기
              </button>
            </td>
            <td data-label="삭제">
              <button onClick={() => onDeleteClick(schedule)}>삭제</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ScheduleTable;