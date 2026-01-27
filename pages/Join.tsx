
import React from 'react';

const Join: React.FC = () => {
  return (
    <div className="bg-white">
      {/* 🟦 Hero 영역 */}
      <section className="py-20 md:py-32 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-lime-600 font-bold tracking-[0.2em] text-sm uppercase mb-4 block">SEOCHUNGJU CTC</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            매너가 실력을 만든다
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            테니스를 즐기고, 사람을 존중하는 클럽<br/>
            서충주신도시테니스클럽(CTC)에 오신 것을 환영합니다.
          </p>
        </div>
      </section>

      {/* 🟩 가입 대상 (Target) */}
      <section className="py-24 max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">이런 분과 함께하고 싶습니다</h2>
          <p className="text-gray-400 text-sm italic">초보자도, 오래 치신 분도 서로 존중하며 즐길 수 있다면 충분합니다.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl mb-4 block">🎾</span>
            <h3 className="font-bold text-gray-900 mb-2">활동 지역</h3>
            <p className="text-sm text-gray-500 leading-relaxed">서충주신도시 지역에서 활동이 가능하신 분</p>
          </div>
          <div className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl mb-4 block">🤝</span>
            <h3 className="font-bold text-gray-900 mb-2">매너와 배려</h3>
            <p className="text-sm text-gray-500 leading-relaxed">구력보다 매너를 중요하게 생각하시는 분</p>
          </div>
          <div className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl mb-4 block">📅</span>
            <h3 className="font-bold text-gray-900 mb-2">꾸준한 참여</h3>
            <p className="text-sm text-gray-500 leading-relaxed">주 1회 이상 꾸준한 참여가 가능하신 분</p>
          </div>
        </div>
      </section>

      {/* 🟨 가입 절차 (Process) */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-4">가입은 이렇게 진행됩니다</h2>
            <div className="h-1 w-12 bg-lime-500 mx-auto"></div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4 items-stretch">
              <div className="flex-1 bg-white/5 p-8 rounded-2xl border border-white/10 flex gap-6">
                <span className="text-3xl font-black text-lime-500/50 italic">01</span>
                <div>
                  <h4 className="font-bold text-lg mb-1">온라인 가입 신청</h4>
                  <p className="text-sm text-gray-400">홈페이지에서 간단한 신청서 작성</p>
                </div>
              </div>
              <div className="flex-1 bg-white/5 p-8 rounded-2xl border border-white/10 flex gap-6">
                <span className="text-3xl font-black text-lime-500/50 italic">02</span>
                <div>
                  <h4 className="font-bold text-lg mb-1">임원진 개별 연락</h4>
                  <p className="text-sm text-gray-400">일정 및 기본 안내 진행</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-stretch">
              <div className="flex-1 bg-white/5 p-8 rounded-2xl border border-white/10 flex gap-6">
                <span className="text-3xl font-black text-lime-500/50 italic">03</span>
                <div>
                  <h4 className="font-bold text-lg mb-1">체험 참여 (1~2회)</h4>
                  <p className="text-sm text-gray-400">운동 분위기와 매너를 서로 확인</p>
                </div>
              </div>
              <div className="flex-1 bg-lime-600 p-8 rounded-2xl flex gap-6">
                <span className="text-3xl font-black text-white/50 italic">04</span>
                <div>
                  <h4 className="font-bold text-lg mb-1">최종 승인 & 회비 안내</h4>
                  <p className="text-sm text-lime-100">정식 회원으로 함께합니다 🎉</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🟥 CTA 영역 */}
      <section className="py-24 max-w-4xl mx-auto px-4 text-center border-t border-gray-100">
        <div className="mb-12">
          <p className="text-gray-500 text-lg mb-8">
            작성해주신 내용은 임원진 검토 후<br className="md:hidden"/> 순차적으로 연락드리고 있습니다.
          </p>
          
          <a 
            href="https://forms.gle/EeVo7GfwFNDBVT1EA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-lime-600 hover:bg-lime-500 text-white font-bold py-5 px-12 rounded-2xl text-xl shadow-xl shadow-lime-900/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            🎾 신규 회원 가입 신청하기
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
          <a href="https://open.kakao.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors font-medium">
            <span>💬</span> 카카오톡 오픈채팅 문의
          </a>
          <a href="mailto:contact@ctc-tennis.com" className="flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors font-medium">
            <span>✉️</span> 이메일 문의하기
          </a>
        </div>

        {/* 🟪 신뢰 & 여운 문구 */}
        <div className="mt-24 pt-12 border-t border-gray-100">
          <p className="text-gray-400 leading-relaxed italic">
            처음 오시는 분들도 부담 없이 참여할 수 있는 분위기를 만들고 있습니다.<br/>
            궁금한 점이 있다면 언제든 문의 주세요 😊
          </p>
        </div>
      </section>
    </div>
  );
};

export default Join;
