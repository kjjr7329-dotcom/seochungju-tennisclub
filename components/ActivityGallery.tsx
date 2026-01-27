
import React from 'react';

/**
 * [관리자용] 활동 사진 수정 영역
 */
const ACTIVITY_IMAGES = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1595435066359-62863867381a?q=80&w=800&auto=format&fit=crop",
    caption: "주말 정기 모임"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1622279457486-62dcc4a4bd13?q=80&w=800&auto=format&fit=crop",
    caption: "복식 경기 하이라이트"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=800&auto=format&fit=crop",
    caption: "클럽 자체 대회"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1592709823125-a191f07a2a5e?q=80&w=800&auto=format&fit=crop",
    caption: "서충주 코트 풍경"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1531233076846-4293c976da27?q=80&w=800&auto=format&fit=crop",
    caption: "야간 훈련 세션"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop",
    caption: "회원 친목 활동"
  }
];

const ActivityGallery: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-xl font-bold text-gray-900">최근 활동 모습</h2>
            <p className="text-sm text-gray-400 mt-1">서충주신도시테니스클럽(CTC) 회원들의 실제 활동 모습입니다</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {ACTIVITY_IMAGES.map((img) => (
            <div key={img.id} className="group relative overflow-hidden rounded-xl aspect-square bg-gray-100">
              <a href={img.url} target="_blank" rel="noopener noreferrer">
                <img 
                  src={img.url} 
                  alt={img.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-xs font-medium">{img.caption}</span>
                </div>
              </a>
            </div>
          ))}
        </div>
        
        <p className="text-center text-[11px] text-gray-300 mt-8 italic">
          * 사진을 클릭하면 원본 이미지를 볼 수 있습니다.
        </p>
      </div>
    </section>
  );
};

export default ActivityGallery;
