// src/MainPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import happyPatient from './img/happyPatient.jpg';

function MainPage() {
  const { t, i18n } = useTranslation();

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="bg-F6F4EB">
      <div className="mt-4">
        <text className="text-xl ml-5">Language: </text>
          <button onClick={() => switchLanguage('en')} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            English
          </button>
          <button onClick={() => switchLanguage('es')} className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2">
            Español
          </button>
          <button onClick={() => switchLanguage('zh')} className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2">
          中国人
          </button>
        </div>
      <header className="bg-4682A9 text-white py-20 flex flex-col md:flex-row justify-around items-stretch">
        <div className="text-center md:w-1/3 bg-blue-600 rounded-lg p-10 ml-5 flex flex-col justify-between">
          <h1 className="text-4xl font-bold mb-4 text-white">{t('clientCheckIn')}</h1>
          <p className="text-lg mb-6 max-w-2xl text-gray-200">
            {t('clientDescription')}
          </p>
          <Link to="/login/patient" className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
            {t('startAssessment')}
          </Link>
        </div>
        <div className="text-center md:w-1/3 bg-green-800 rounded-lg p-10 ml-5 flex flex-col justify-between">
          <h1 className="text-4xl font-bold mb-4 text-white">{t('adminCheckIn')}</h1>
          <p className="text-lg mb-6 max-w-2xl text-gray-200">
            {t('adminDescription')}
          </p>
          <Link to="/login/admin" className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
            {t('adminAccess')}
          </Link>
        </div>
      </header>

      <section className="py-16 px-4 flex items-center bg-slate-200">
        <div className="w-1/2">
          <img src={happyPatient} alt="Happy Patient" className="rounded-lg shadow-md" />
        </div>
        <div className="w-1/2 pl-8">
          <h2 className="text-3xl font-bold mb-4">{t('ourServices')}</h2>
          <p className="text-lg text-gray-700">
            {t('servicesDescription')}
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{t('whyChooseUs')}</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">{t('easyToUnderstand')}</h3>
            <p>{t('easyToUnderstandDescription')}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">{t('empowerment')}</h3>
            <p>{t('empowermentDescription')}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">{t('accessibleForAllAges')}</h3>
            <p>{t('accessibleForAllAgesDescription')}</p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-200 py-4 text-center">
        <p className="text-gray-600">{t('footerText')}</p>
        
      </footer>
    </div>
  );
}

export default MainPage;