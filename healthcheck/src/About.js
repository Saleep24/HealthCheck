import { useTranslation } from 'react-i18next';

function About() {
    const { t, i18n } = useTranslation();
    const languages = [
        {
            language: 'en',
            name: 'English'
        },
        {
            language: 'es',
            name: 'Spanish'
        },
        {
            language: 'zh',
            name: 'Chinese'
        }
    ]
    return (
        <div>
            <h1>{t('welcome')}About</h1>
            {languages.map((language) => (
                <button 
                style={{marginRight: '10px'}}
                onClick={() => i18n.changeLanguage(language.language)} 
                key={language.code}>{language.name}</button>
            ))}
        </div>
    );
}

export default About;