
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold mb-10 border-b pb-4">문의하기</h1>
        
        <div className="max-w-lg mx-auto space-y-8">
          <p className="text-gray-600 mb-10">
            클럽 가입, 활동, 기타 문의사항은 아래 채널을 이용해 주세요. <br/>
            업무 중에는 답변이 늦어질 수 있으니 양해 부탁드립니다.
          </p>

          <div className="grid grid-cols-1 gap-6">
            <div className="p-8 border rounded-2xl bg-gray-50 flex flex-col items-center">
              <span className="text-4xl mb-4">💬</span>
              <h3 className="font-bold text-lg mb-2">카카오톡 오픈채팅</h3>
              <p className="text-gray-500 text-sm mb-6">'충주신도시테니스' 검색 또는 아래 버튼 클릭</p>
              <a 
                href="https://open.kakao.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg w-full transition-colors"
              >
                오픈채팅 참여하기
              </a>
            </div>

            <div className="p-8 border rounded-2xl bg-gray-50 flex flex-col items-center">
              <span className="text-4xl mb-4">📧</span>
              <h3 className="font-bold text-lg mb-2">이메일 문의</h3>
              <p className="text-gray-600">cj_tennis@email.com</p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-gray-100 rounded-lg text-sm text-gray-500">
            ※ 신규 가입 신청은 [가입안내] 페이지의 구글 폼을 이용해 주시면 더욱 빠른 처리가 가능합니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
