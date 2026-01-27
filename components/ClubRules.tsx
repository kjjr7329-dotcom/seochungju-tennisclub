
import React from 'react';

const ClubRules: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Sticky header offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const sections = [
    { id: 'chapter1', title: '제1장 총칙' },
    { id: 'chapter2', title: '제2장 회원' },
    { id: 'chapter3', title: '제3장 운영' },
    { id: 'chapter4', title: '제4장 활동' },
    { id: 'chapter5', title: '제5장 회비' },
    { id: 'chapter6', title: '제6장 기타' },
  ];

  return (
    <section className="py-24 bg-gray-50/30 border-t border-gray-100" id="club-rules">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-lime-600 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">CTC (Chungju Tennis Club)</span>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-4">서충주신도시테니스클럽 회칙</h2>
          <div className="h-1 w-12 bg-lime-500 mx-auto rounded-full"></div>
        </div>

        {/* 📋 목차 (TOC) */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-12 shadow-sm">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 text-center">Table of Contents</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className="py-3 px-4 rounded-xl text-sm font-medium text-gray-600 bg-gray-50 hover:bg-lime-50 hover:text-lime-700 transition-all border border-transparent hover:border-lime-100"
              >
                {sec.title}
              </button>
            ))}
          </div>
        </div>

        {/* 📜 회칙 본문 */}
        <div className="space-y-12">
          {/* 제1장 */}
          <div id="chapter1" className="scroll-mt-24">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-gray-900 text-white flex items-center justify-center text-xs">1</span>
              제1장 총칙
            </h3>
            <div className="bg-white rounded-2xl border border-gray-100 p-8 space-y-6 shadow-sm">
              <div>
                <h4 className="font-bold text-gray-800 mb-2">제1조 (명칭)</h4>
                <p className="text-gray-600 leading-relaxed text-sm">본 클럽의 명칭은 '서충주신도시테니스클럽(CTC)'이라 칭한다.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">제2조 (목적)</h4>
                <p className="text-gray-600 leading-relaxed text-sm">본 클럽은 테니스를 사랑하는 서충주신도시 주민들이 함께 운동하며 건강을 증진하고, 회원 상호 간의 친목을 도모하며 건전한 테니스 문화를 정착시키는 것을 목적으로 한다.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">제3조 (소재지)</h4>
                <p className="text-gray-600 leading-relaxed text-sm">본 클럽은 충청북도 충주시 주덕읍에 위치한 '서충주생활체육공원 테니스장'을 주 활동 근거지로 한다.</p>
              </div>
            </div>
          </div>

          {/* 제2장 */}
          <div id="chapter2" className="scroll-mt-24">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-gray-900 text-white flex items-center justify-center text-xs">2</span>
              제2장 회원
            </h3>
            <div className="bg-white rounded-2xl border border-gray-100 p-8 space-y-6 shadow-sm">
              <div>
                <h4 className="font-bold text-gray-800 mb-2">제4조 (회원 자격)</h4>
                <p className="text-gray-600 leading-relaxed text-sm">본 클럽의 목적에 동의하고 코트 매너를 준수할 수 있는 서충주신도시 거주자 및 인근 지역 테니스 동호인을 대상으로 한다.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">제5조 (가입 절차)</h4>
                <p className="text-gray-600 leading-relaxed text-sm">신규 가입 희망자는 클럽 홈페이지를 통해 신청서를 제출하며, 일정 기간의 체험 참여 후 운영진의 승인을 거쳐 정회원이 된다.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">제6조 (회원의 의무)</h4>
                <p className="text-gray-600 leading-relaxed text-sm">모든 회원은 회칙을 준수해야 하며, 소정의 회비 납부와 정기 모임에 성실히 참여할 의무를 가진다.</p>
              </div>
            </div>
          </div>

          {/* 제3장 */}
          <div id="chapter3" className="scroll-mt-24">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-gray-900 text-white flex items-center justify-center text-xs">3</span>
              제3장 운영
            </h3>
            <div className="bg-white rounded-2xl border border-gray-100 p-8 space-y-6 shadow-sm">
              <div>
                <h4 className="font-bold text-gray-800 mb-2">제7조 (임원 구성)</h4>
                <p className="text-gray-600 leading-relaxed text-sm">본 클럽의 효율적인 운영을 위해 회장, 총무, 경기이사 등의 임원진을 둔다.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">제8조 (의사결정)</h4>
                <p className="text-gray-600 leading-relaxed text-sm">중요 사안은 임원진 회의 또는 정기 총회를 통해 결정하며, 민주적인 절차를 따른다.</p>
              </div>
            </div>
          </div>

          {/* 제4장 */}
          <div id="chapter4" className="scroll-mt-24">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-gray-900 text-white flex items-center justify-center text-xs">4</span>
              제4장 모임 및 활동
            </h3>
            <div className="bg-white rounded-2xl border border-gray-100 p-8 space-y-6 shadow-sm">
              <div>
                <h4 className="font-bold text-gray-800 mb-2">제9조 (정기 모임)</h4>
                <p className="text-gray-600 leading-relaxed text-sm">매주 화, 수, 목요일 야간(18:00~22:00) 및 주말/공휴일 오전(08:00~12:00)을 정기 모임 시간으로 한다.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">제10조 (활동 수칙)</h4>
                <p className="text-gray-600 leading-relaxed text-sm">경기 시작 전후로 상호 간의 인사를 필수로 하며, 코트 내 쓰레기 수거 등 환경 정리에 동참한다.</p>
              </div>
            </div>
          </div>

          {/* 제5장 */}
          <div id="chapter5" className="scroll-mt-24">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-gray-900 text-white flex items-center justify-center text-xs">5</span>
              제5장 회비
            </h3>
            <div className="bg-white rounded-2xl border border-gray-100 p-8 space-y-6 shadow-sm">
              <div>
                <h4 className="font-bold text-gray-800 mb-2">제11조 (회비 운용)</h4>
                <p className="text-gray-600 leading-relaxed text-sm">회비는 가입비와 월회비로 구분하며, 수납된 회비는 코트 사용료, 용품 구매, 행사 지원비 등으로 투명하게 사용한다.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">제12조 (회계 보고)</h4>
                <p className="text-gray-600 leading-relaxed text-sm">총무는 매 분기별 또는 연말 총회 시 회비 집행 내역을 회원들에게 공지한다.</p>
              </div>
            </div>
          </div>

          {/* 제6장 */}
          <div id="chapter6" className="scroll-mt-24">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-gray-900 text-white flex items-center justify-center text-xs">6</span>
              제6장 기타
            </h3>
            <div className="bg-white rounded-2xl border border-gray-100 p-8 space-y-6 shadow-sm">
              <div>
                <h4 className="font-bold text-gray-800 mb-2">제13조 (징계 및 제명)</h4>
                <p className="text-gray-600 leading-relaxed text-sm">타인과의 잦은 분쟁으로 클럽 분위기를 저해하거나, 무단으로 장기간 불참하는 경우 임원진 회의를 통해 징계 또는 제명 처리할 수 있다.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">제14조 (회칙 개정)</h4>
                <p className="text-gray-600 leading-relaxed text-sm">본 회칙에 명시되지 않은 사항은 통상적인 관례에 따르며, 회칙 개정은 총회 출석 회원 과반수 이상의 찬성으로 결정한다.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-400 italic">부칙: 본 회칙은 2024년 1월 1일부터 시행한다.</p>
        </div>
      </div>
    </section>
  );
};

export default ClubRules;
