
import React from 'react';

/**
 * [관리자용] 회원 명단 수정 영역
 */
const MEMBER_DATA = [
  { id: 1, nickname: "스매시곰", experience: "5년 이상", joinedYear: "2021", isExecutive: true },
  { id: 2, nickname: "백핸드달인", experience: "3년", joinedYear: "2022", isExecutive: false },
  { id: 3, nickname: "서브왕", experience: "5년 이상", joinedYear: "2021", isExecutive: true },
  { id: 4, nickname: "테린이탈출", experience: "1년", joinedYear: "2024", isExecutive: false },
  { id: 5, nickname: "볼머신", experience: "2년", joinedYear: "2023", isExecutive: false },
  { id: 6, nickname: "발리장인", experience: "4년", joinedYear: "2022", isExecutive: false },
];

const Members: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-10">회원 현황</h1>
        
        {/* Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20">
          <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 text-center md:text-left">
            <p className="text-xs font-bold text-gray-400 mb-2 uppercase">Total</p>
            <p className="text-2xl font-bold text-gray-900">40+</p>
            <p className="text-xs text-gray-500 mt-1">활동 회원 수</p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 text-center md:text-left">
            <p className="text-xs font-bold text-gray-400 mb-2 uppercase">Ratio</p>
            <p className="text-2xl font-bold text-gray-900">6:4</p>
            <p className="text-xs text-gray-500 mt-1">남녀 회원 비율</p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 col-span-2 md:col-span-1 text-center md:text-left">
            <p className="text-xs font-bold text-gray-400 mb-2 uppercase">Core Age</p>
            <p className="text-2xl font-bold text-gray-900">3040</p>
            <p className="text-xs text-gray-500 mt-1">주요 활동 연령대</p>
          </div>
        </div>

        {/* Member List Section */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Public Member List</h2>
            <span className="text-[10px] text-gray-400 italic">* 개인정보 보호를 위해 별칭으로 표기됩니다.</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {MEMBER_DATA.map((member) => (
              <div 
                key={member.id} 
                className={`p-5 rounded-2xl border ${member.isExecutive ? 'border-lime-200 bg-lime-50/30' : 'border-gray-100 bg-white shadow-sm'}`}
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-900">{member.nickname}</span>
                    {member.isExecutive && (
                      <span className="px-2 py-0.5 bg-lime-600 text-white text-[10px] font-bold rounded uppercase">임원</span>
                    )}
                  </div>
                  <span className="text-[11px] text-gray-400 font-medium">{member.joinedYear}년 가입</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <span className="text-gray-300">구력</span>
                    <span className="font-bold text-gray-700">{member.experience}</span>
                  </div>
                  <div className="h-3 w-[1px] bg-gray-100"></div>
                  <div className="flex items-center gap-1">
                    <span className="text-gray-300">구분</span>
                    <span className="font-bold text-gray-700">{member.isExecutive ? '운영진' : '일반회원'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Level Distribution */}
        <section className="max-w-2xl">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Level Distribution</h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-bold text-gray-700">
                <span>입문 / 초급</span>
                <span>20%</span>
              </div>
              <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-lime-400" style={{ width: '20%' }}></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-bold text-gray-700">
                <span>초중급 (구력 1-3년)</span>
                <span>55%</span>
              </div>
              <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-lime-500" style={{ width: '55%' }}></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-bold text-gray-700">
                <span>중급 이상</span>
                <span>25%</span>
              </div>
              <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-lime-600" style={{ width: '25%' }}></div>
              </div>
            </div>
          </div>
          <p className="mt-10 text-[11px] text-gray-400 leading-relaxed italic text-center">
            * 위 명단은 예시 데이터이며 실제 명단은 클럽 내부 문서로 관리됩니다. <br/>
            * 서충주신도시테니스클럽(CTC)은 모든 레벨의 테니스인이 어울려 즐겁게 운동할 수 있는 환경을 지향합니다.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Members;
