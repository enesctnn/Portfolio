import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { ContactFormSchema, ContactFormSchemaT } from '../../../schema';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { TextArea } from '../../ui/text';
import FormError from './FormError';
import { FormItem } from './FormItem';
import { FormMessage } from './FormMessage';
import FormSuccess from './FormSuccess';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

function ContactForm() {
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const form = useRef<HTMLFormElement | null>(null);

  const { t } = useTranslation(undefined, { keyPrefix: 'hero.contactme.form' });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormSchemaT>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      user_email: '',
      user_name: '',
      message: '',
    },
  });

  const [isPending, setIsPending] = useState<boolean>(false);

  const onSubmit: SubmitHandler<ContactFormSchemaT> = async () => {
    setError(false);
    setSuccess(false);
    if (form.current) {
      setIsPending(true);
      await emailjs
        .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, {
          publicKey: EMAILJS_PUBLIC_KEY,
        })
        .then(
          () => {
            setSuccess(true);
          },
          err => {
            console.log(err);
            setError(true);
          }
        );
      setIsPending(false);
    }
  };

  useEffect(() => {
    let errorTimeout: number;
    if (error) {
      errorTimeout = setTimeout(() => setError(false), 4000);
    }
    return () => {
      if (errorTimeout) clearTimeout(errorTimeout);
    };
  }, [error, success]);

  return (
    <form ref={form} onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <fieldset
        className={`flex flex-col gap-5 rounded-xl border border-nyanza-400 p-8 transition-colors ${error ? ' !border-red-600' : ''} ${success ? ' border-nyanza-300' : ''}`}
      >
        <legend
          className={`px-1 text-lg font-medium text-nyanza-300/90 lg:text-right ${error ? ' !text-red-600' : ''} ${success ? ' !text-nyanza-300' : ''}`}
        >
          {t('legend')}
        </legend>
        <FormItem>
          <label
            className={`font-bold ${isPending || success ? ' opacity-50' : ''}`}
            htmlFor="user_name"
          >
            {t('name')}
          </label>
          <Input
            success={success}
            disabled={isPending || success}
            {...register('user_name')}
            error={!!errors.user_name || !!error}
            className="capitalize"
            placeholder={t('placeholders.name')}
          />
          {
            <FormMessage
              message={
                errors.user_name?.message ? t('zod.username') : undefined
              }
            />
          }
        </FormItem>
        <FormItem>
          <label
            className={`font-bold ${isPending || success ? ' opacity-50' : ''}`}
            htmlFor="user_email"
          >
            {t('email')}
          </label>
          <Input
            success={success}
            disabled={isPending || success}
            error={!!errors.user_email || !!error}
            {...register('user_email')}
            placeholder={t('placeholders.email')}
          />
          {
            <FormMessage
              message={errors.user_email?.message ? t('zod.email') : undefined}
            />
          }
        </FormItem>
        <FormItem>
          <label
            className={`font-bold ${isPending || success ? ' opacity-50' : ''}`}
            htmlFor="message"
          >
            {t('message')}
          </label>
          <TextArea
            success={success}
            disabled={isPending || success}
            error={!!errors.message || !!error}
            {...register('message')}
            placeholder={t('placeholders.message')}
          />
          {errors.message?.message && (
            <FormMessage
              message={
                errors.message.message === 'min message'
                  ? t('zod.message.min')
                  : t('zod.message.max')
              }
            />
          )}
        </FormItem>
        <menu className="flex w-full justify-between">
          {error && <FormError message={t('error')} />}
          {success && <FormSuccess message={t('success')} />}
          <Button
            disabled={isPending || success}
            className={`ml-auto ${error ? ' !bg-red-600' : ''}`}
          >
            {success ? t('sent') : isPending ? t('submitting') : t('submit')}
          </Button>
        </menu>
      </fieldset>
    </form>
  );
}

export default ContactForm;
