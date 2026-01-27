
import React from 'react';
import { Link } from 'react-router-dom';
import ActivityGallery from '../components/ActivityGallery';
import ClubRules from '../components/ClubRules';
import MemberBenefits from '../components/MemberBenefits';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Slim Hero Section */}
      <section className="py-16 md:py-24 border-b border-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-3 py-1 bg-lime-100 text-lime-700 text-xs font-bold rounded-full mb-4">Official Website</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            서충주신도시테니스클럽
          </h1>
          <p className="text-gray-500 text-base md:text-lg mb-8 leading-relaxed">
            매너와 열정으로 함께하는 서충주신도시 기반 테니스 공동체입니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/join" className="inline-block bg-gray-900 text-white font-bold py-3 px-10 rounded-lg hover:bg-gray-800 transition-all shadow-sm">
              신규 가입 안내
            </Link>
            <button 
              onClick={() => document.getElementById('club-rules')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-block bg-white text-gray-900 border border-gray-200 font-bold py-3 px-10 rounded-lg hover:bg-gray-50 transition-all shadow-sm"
            >
              회칙 확인하기
            </button>
          </div>
        </div>
      </section>

      {/* 🖼️ Activity Gallery Section */}
      <ActivityGallery />

      {/* 🎁 Member Benefits Section */}
      <MemberBenefits />

      {/* Schedule Summary */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-gray-900">활동 일정</h2>
            <span className="text-xs text-gray-400">서충주생활체육공원</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm">
              <p className="text-xs font-bold text-lime-600 mb-1">평일 야간</p>
              <h3 className="text-lg font-bold text-gray-800">화 · 수 · 목</h3>
              <p className="text-gray-500 mt-1">18:00 — 22:00</p>
            </div>
            <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm">
              <p className="text-xs font-bold text-lime-600 mb-1">주말 · 공휴일</p>
              <h3 className="text-lg font-bold text-gray-800">토 · 일 · 공휴일</h3>
              <p className="text-gray-500 mt-1">08:00 — 12:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* 📑 Club Rules Section */}
      <ClubRules />
    </div>
  );
};

export default Home;
