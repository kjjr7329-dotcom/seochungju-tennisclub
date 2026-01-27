
import React from 'react';

const Rules: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-10 border-b pb-4">회칙 안내</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <div className="space-y-12">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 bg-gray-100 p-3 rounded">제1장 총칙</h2>
              <div className="space-y-4 pl-4">
                <p><strong>제1조 (명칭)</strong> 본 클럽은 '서충주신도시테니스클럽(CTC)'이라 칭한다.</p>
                <p><strong>제2조 (목적)</strong> 본 클럽은 테니스를 통하여 회원의 건강증진과 친목을 도모하고 건전한 스포츠 문화를 정착시키는 것을 목적으로 한다.</p>
                <p><strong>제3조 (소재지)</strong> 본 클럽은 충주시 서충주생활체육공원 테니스장을 주 활동 근거지로 한다.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 bg-gray-100 p-3 rounded">제2장 회원</h2>
              <div className="space-y-4 pl-4">
                <p><strong>제4조 (자격)</strong> 본 클럽의 목적에 찬성하고 소정의 가입 절차를 마친 자로 한다.</p>
                <p><strong>제5조 (의무)</strong> 모든 회원은 회칙을 준수하고, 회비 납부 및 정기 모임 참석의 의무를 가진다.</p>
                <p><strong>제6조 (매너)</strong> 코트 내에서는 타인에게 불쾌감을 주는 언행을 금하며, 항상 스포츠맨십을 유지해야 한다.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 bg-gray-100 p-3 rounded">제3장 운영 및 징계</h2>
              <div className="space-y-4 pl-4">
                <p><strong>제7조 (활동 정지 및 제명)</strong> 타인과의 잦은 분쟁, 클럽의 명예 실추, 무단 장기 불참 등의 사유 발생 시 임원진 회의를 통해 제명할 수 있다.</p>
              </div>
            </section>
          </div>
          
          <div className="mt-20 text-sm text-gray-400 border-t pt-8">
            최종 수정일: 2024년 01월 01일
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
