
import React from 'react';

/**
 * [관리자용] 회장 인사말 수정 영역
 */
const PRESIDENT_MESSAGE = {
  title: "회장 인사말",
  content: `서충주신도시 테니스클럽에 오신 것을 환영합니다.

우리 클럽은
테니스를 즐기며 건강과 즐거움을 나누는 모임입니다.

부담 없이 참여하고,
서로를 배려하며 오래 함께하는 것을 목표로 하고 있습니다.

관심 있는 분이라면
누구나 열린 마음으로 문을 두드려 주세요.

코트에서 뵙겠습니다.`,
  name: "서충주신도시 테니스클럽 회장 드림"
};

const About: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* President's Message Section */}
        <section className="mb-24">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8 text-center">President's Message</h2>
          <div className="relative p-10 md:p-16 rounded-3xl bg-gray-50 border border-gray-100">
            {/* Decoration Quote Mark */}
            <div className="absolute top-6 left-8 text-6xl text-lime-200 font-serif opacity-50">“</div>
            
            <div className="relative z-10">
              <h1 className="text-2xl font-bold text-gray-900 mb-8">{PRESIDENT_MESSAGE.title}</h1>
              <div className="text-gray-600 leading-loose text-lg whitespace-pre-wrap mb-10">
                {PRESIDENT_MESSAGE.content}
              </div>
              <p className="text-right font-bold text-gray-900 text-lg">
                {PRESIDENT_MESSAGE.name}
              </p>
            </div>

            {/* Decoration Quote Mark */}
            <div className="absolute bottom-6 right-8 text-6xl text-lime-200 font-serif opacity-50 rotate-180">“</div>
          </div>
        </section>

        {/* Intro */}
        <section className="mb-24">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Club Overview</h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">클럽 소개</h3>
          <p className="text-gray-600 leading-relaxed max-w-2xl text-lg">
            서충주신도시테니스클럽(CTC)은 서충주신도시를 중심으로 활동하는 동호회입니다. <br/>
            실력보다 매너를, 개인보다 팀워크를 중시하며 건강한 테니스 문화를 지향합니다.
          </p>
        </section>

        {/* Location Card */}
        <section className="mb-24">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Location</h2>
          <div className="p-8 rounded-2xl border border-gray-100 bg-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">서충주생활체육공원 테니스장</h3>
              <p className="text-gray-500 text-sm">충청북도 충주시 주덕읍 기업도시3로 150</p>
            </div>
            <a 
              href="https://map.naver.com/v5/search/충청북도%20충주시%20주덕읍%20기업도시3로%20150" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-bold text-lime-600 hover:underline"
            >
              지도 보기 →
            </a>
          </div>
        </section>

        {/* Rules Summary */}
        <section>
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Club Rules</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-8 h-8 rounded-full bg-lime-100 text-lime-700 flex items-center justify-center font-bold text-xs">01</div>
              <h4 className="font-bold text-gray-900 text-lg">매너 우선</h4>
              <p className="text-sm text-gray-500 leading-relaxed">상대방에 대한 배려와 기본 코트 에티켓을 필수로 준수합니다.</p>
            </div>
            <div className="space-y-3">
              <div className="w-8 h-8 rounded-full bg-lime-100 text-lime-700 flex items-center justify-center font-bold text-xs">02</div>
              <h4 className="font-bold text-gray-900 text-lg">정기 참여</h4>
              <p className="text-sm text-gray-500 leading-relaxed">월 최소 참여 기준을 유지하여 클럽 활성화에 기여합니다.</p>
            </div>
            <div className="space-y-3">
              <div className="w-8 h-8 rounded-full bg-lime-100 text-lime-700 flex items-center justify-center font-bold text-xs">03</div>
              <h4 className="font-bold text-gray-900 text-lg">상호 존중</h4>
              <p className="text-sm text-gray-500 leading-relaxed">회원 간의 호칭과 예의를 지키며 건전한 친목을 도모합니다.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
