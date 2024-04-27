import { useTranslation } from 'react-i18next';
import { TopMenu } from './components/menu/TopMenu';

export default function App() {
    const { t } = useTranslation();

    return (
        <>
            <TopMenu />
            {t('resume')}
        </>
    );
}
