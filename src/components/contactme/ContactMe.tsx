import { useTranslation } from 'react-i18next';
import { Card } from '../ui/card';
import ContactForm from './form/ContactForm';

function ContactMe() {
  const { t } = useTranslation(undefined, { keyPrefix: 'hero.navigation' });

  return (
    <Card locationName="contactme" title={t('contactme')} >
      <ContactForm />
    </Card>
  );
}

export default ContactMe;
