
import React from 'react';

/**
 * [관리자용] 회원 혜택 및 제휴 정보 수정 영역
 */
const BENEFITS_DATA = [
  {
    id: 1,
    category: "레슨 할인",
    title: "제휴 테니스 아카데미 레슨비 10% 할인",
    description: "서충주 내 협약된 테니스 아카데미 등록 시 정회원 인증 후 할인이 적용됩니다.",
    validity: "2024.12.31 까지",
    howToUse: "등록 시 CTC 정회원 톡방 프로필 또는 회원 명단 확인",
    isHot: true
  },
  {
    id: 2,
    category: "용품 할인",
    title: "충주 테니스 샵 '스트링 & 그립' 전품목 5% 할인",
    description: "라켓 구매, 스트링 교체 및 각종 소모품 구매 시 제휴 혜택을 받으실 수 있습니다.",
    validity: "상시 혜택",
    howToUse: "결제 시 서충주신도시테니스클럽 회원임을 말씀해 주세요.",
    isHot: false
  },
  {
    id: 3,
    category: "이벤트",
    title: "분기별 '신규 회원 웰컴 패키지' 증정",
    description: "새롭게 가입하신 정회원분들께 클럽 전용 손목 아대 또는 시합구를 증정합니다.",
    validity: "재고 소진 시까지",
    howToUse: "정식 가입 승인 후 첫 정기 모임 참석 시 총무에게 수령",
    isHot: false
  }
];

const MemberBenefits: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="member-benefits">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-lime-600 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Member Exclusive</span>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-4">회원 혜택 및 제휴 안내</h2>
          <p className="text-gray-500 text-sm">서충주신도시테니스클럽(CTC) 정회원분들께만 드리는 특별한 혜택입니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BENEFITS_DATA.map((benefit) => (
            <div 
              key={benefit.id} 
              className="relative p-8 rounded-3xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 flex flex-col h-full group"
            >
              {benefit.isHot && (
                <span className="absolute -top-3 left-8 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg shadow-orange-500/20">HOT</span>
              )}
              
              <div className="mb-6">
                <span className="inline-block text-[10px] font-bold text-lime-600 bg-lime-100 px-2 py-0.5 rounded mb-3 uppercase tracking-wider">
                  {benefit.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-lime-600 transition-colors">
                  {benefit.title}
                </h3>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                {benefit.description}
              </p>

              <div className="space-y-3 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold text-gray-400 w-16 uppercase">유효기간</span>
                  <span className="text-xs text-gray-700 font-medium">{benefit.validity}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[10px] font-bold text-gray-400 w-16 uppercase shrink-0">이용방법</span>
                  <span className="text-xs text-gray-600 leading-snug">{benefit.howToUse}</span>
                </div>
              </div>
            </div>
          ))}

          {/* 제휴 문의 카드 */}
          <div className="p-8 rounded-3xl border-2 border-dashed border-gray-100 flex flex-col items-center justify-center text-center group hover:border-lime-200 transition-colors">
            <span className="text-3xl mb-4 grayscale group-hover:grayscale-0 transition-all">🤝</span>
            <h3 className="text-base font-bold text-gray-400 mb-2">제휴 문의 환영</h3>
            <p className="text-xs text-gray-400 leading-relaxed mb-6">
              서충주신도시 지역 소상공인 및<br/>테니스 관련 업체 제휴를 기다립니다.
            </p>
            <a href="mailto:contact@ctc-tennis.com" className="text-xs font-bold text-gray-300 hover:text-lime-600 transition-colors">
              문의: contact@ctc-tennis.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberBenefits;
