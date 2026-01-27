
import React from 'react';

const Schedule: React.FC = () => {
  const scheduleData = [
    { day: '화요일', time: '18:00 ~ 22:00', type: '야간 정기모임' },
    { day: '수요일', time: '18:00 ~ 22:00', type: '야간 정기모임' },
    { day: '목요일', time: '18:00 ~ 22:00', type: '야간 정기모임' },
    { day: '토요일', time: '08:00 ~ 12:00', type: '오전 정기모임' },
    { day: '일요일/공휴일', time: '08:00 ~ 12:00', type: '오전 정기모임' },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-10 border-b pb-4">활동 및 일정</h1>
        
        <div className="space-y-8">
          <div className="bg-lime-50 border-l-4 border-lime-500 p-4 rounded">
            <p className="text-lime-800 font-medium">※ 위 일정은 코트 예약 상황 및 기상 조건에 따라 변동될 수 있습니다.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-6 py-4 text-left">요일</th>
                  <th className="border border-gray-200 px-6 py-4 text-left">시간</th>
                  <th className="border border-gray-200 px-6 py-4 text-left">구분</th>
                </tr>
              </thead>
              <tbody>
                {scheduleData.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="border border-gray-200 px-6 py-4 font-semibold">{item.day}</td>
                    <td className="border border-gray-200 px-6 py-4">{item.time}</td>
                    <td className="border border-gray-200 px-6 py-4 text-gray-600">{item.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <section className="mt-12 bg-gray-50 p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-4">연간 주요 행사</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="bg-lime-500 text-white text-xs px-2 py-1 rounded mr-3 mt-1 shrink-0">분기별</span>
                <span>자체 클럽 대회 (급수별 매치)</span>
              </li>
              <li className="flex items-start">
                <span className="bg-lime-500 text-white text-xs px-2 py-1 rounded mr-3 mt-1 shrink-0">반기별</span>
                <span>타 클럽 교류전</span>
              </li>
              <li className="flex items-start">
                <span className="bg-lime-500 text-white text-xs px-2 py-1 rounded mr-3 mt-1 shrink-0">12월</span>
                <span>연말 총회 및 송년의 밤</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
