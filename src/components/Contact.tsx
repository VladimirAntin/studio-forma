'use client';
import {memo, Suspense} from 'react';
import {Controller, useForm} from 'react-hook-form';
import SendIcon from '@/icons/SendIcon';
import Link from 'next/link';
import {contactItems} from '@/components/data/contact';
import Icon from '@/icons/Icon';
import {motion} from 'framer-motion';

type ConsultationData = {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  area: string;
  budget: string;
  message: string;
};

const PROJECT_TYPES = [
  'Dizajn stana / kuće',
  'Dizajn poslovnog prostora',
  'Konceptni dizajn',
  '3D vizualizacija',
  'Konsultacija',
  'Ostalo',
];

const BUDGETS = [
  'do 100.000 RSD',
  '100.000 – 300.000 RSD',
  '300.000 – 600.000 RSD',
  'Više od 600.000 RSD',
  'Razgovaramo o budžetu',
];

const fieldCls = 'flex flex-col gap-1.5';
const labelCls = 'text-[10px] font-semibold tracking-[0.2em] text-primary/80 uppercase';
const inputCls =
  'w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-stone-600 outline-none transition-all duration-200 focus:border-primary/60 focus:bg-white/8 focus:ring-1 focus:ring-primary/20';
const selectCls =
  'w-full rounded-lg border border-white/10 bg-[#1a1510] px-4 py-3 text-sm text-white outline-none transition-all duration-200 focus:border-primary/60 focus:ring-1 focus:ring-primary/20 [&>option]:bg-[#1a1510]';

const ContactForm = () => {
  const {handleSubmit, control, formState: {isSubmitted}} = useForm<ConsultationData>({
    defaultValues: {name: '', phone: '', email: '', projectType: '', area: '', budget: '', message: ''},
  });

  const onSubmit = (data: ConsultationData) => {
    console.log('Studio Forma konsultacija:', data);
  };

  if (isSubmitted) {
    return (
      <div className={'flex flex-col items-center justify-center py-14 text-center'}>
        <div className={'mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-primary/30 bg-primary/10'}>
          <SendIcon height={28} width={28} className={'text-primary'} />
        </div>
        <h4 className={'mb-2 text-2xl font-light text-white'}>{'Zahtev primljen ✦'}</h4>
        <p className={'text-stone-400'}>{'Javićemo vam se u roku od 24h kako bismo dogovorili termin besplatne konsultacije.'}</p>
      </div>
    );
  }

  return (
    <form className={'space-y-6'} onSubmit={handleSubmit(onSubmit)}>
      <div className={'grid gap-5 sm:grid-cols-2'}>
        <Controller name={'name'} control={control} rules={{required: true}} render={({field, fieldState}) => (
          <div className={fieldCls}>
            <label className={labelCls}>{'Ime i prezime'}</label>
            <input
              {...field}
              placeholder={'npr. Marija Nikolić'}
              className={inputCls + (fieldState.error ? ' border-red-500/60' : '')}
            />
          </div>
        )} />
        <Controller name={'phone'} control={control} rules={{required: true}} render={({field, fieldState}) => (
          <div className={fieldCls}>
            <label className={labelCls}>{'Telefon'}</label>
            <input
              {...field}
              type={'tel'}
              placeholder={'+381 6x xxx xxxx'}
              className={inputCls + (fieldState.error ? ' border-red-500/60' : '')}
            />
          </div>
        )} />
      </div>

      <Controller name={'email'} control={control} render={({field}) => (
        <div className={fieldCls}>
          <label className={labelCls}>
            {'Email '}
            <span className={'normal-case font-normal tracking-normal text-stone-600'}>{'(opciono)'}</span>
          </label>
          <input
            {...field}
            type={'email'}
            placeholder={'vas@email.com'}
            className={inputCls}
          />
        </div>
      )} />

      <div className={'grid gap-5 sm:grid-cols-2'}>
        <Controller name={'projectType'} control={control} rules={{required: true}} render={({field, fieldState}) => (
          <div className={fieldCls}>
            <label className={labelCls}>{'Vrsta projekta'}</label>
            <select
              {...field}
              className={selectCls + (fieldState.error ? ' border-red-500/60' : '')}>
              <option value={''} disabled>{'Izaberite...'}</option>
              {PROJECT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        )} />
        <Controller name={'area'} control={control} render={({field}) => (
          <div className={fieldCls}>
            <label className={labelCls}>{'Površina'}</label>
            <input
              {...field}
              placeholder={'npr. 65 m²'}
              className={inputCls}
            />
          </div>
        )} />
      </div>

      <Controller name={'budget'} control={control} render={({field}) => (
        <div className={fieldCls}>
          <label className={labelCls}>
            {'Okvirni budžet '}
            <span className={'normal-case font-normal tracking-normal text-stone-600'}>{'(opciono)'}</span>
          </label>
          <select {...field} className={selectCls}>
            <option value={''}>{'Nije definisano'}</option>
            {BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
      )} />

      <Controller name={'message'} control={control} render={({field}) => (
        <div className={fieldCls}>
          <label className={labelCls}>
            {'O projektu '}
            <span className={'normal-case font-normal tracking-normal text-stone-600'}>{'(opciono)'}</span>
          </label>
          <textarea
            {...field}
            rows={4}
            placeholder={'Opišite prostor, stil koji vam se sviđa, posebne zahteve...'}
            className={inputCls + ' resize-none'}
          />
        </div>
      )} />

      <button
        type={'submit'}
        className={'group flex w-full items-center justify-center gap-2.5 rounded-xl border border-primary/40 bg-primary/15 py-4 text-sm font-semibold text-primary shadow-lg transition-all duration-200 hover:bg-primary hover:text-white hover:border-primary hover:shadow-primary/20'}>
        {'Pošaljite zahtev'}
        <SendIcon className={'transition-transform group-hover:translate-x-1'} height={15} width={15} />
      </button>
    </form>
  );
};

const Contact = () => (
  <section id={'contact'} className={'bg-[#0f0d0a] py-24'}>
    <div className={'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'}>

      {/* Header */}
      <motion.div
        className={'mb-14'}
        initial={{opacity: 0, y: 24}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, margin: '-50px'}}
        transition={{duration: 0.6, ease: 'easeOut'}}>
        <span className={'mb-4 block text-xs font-semibold tracking-[0.3em] text-primary uppercase'}>
          {'Kontakt & Konsultacija'}
        </span>
        <div className={'flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between'}>
          <h2 className={'text-4xl font-light text-white sm:text-5xl lg:text-6xl tracking-tight'}>
            {'Razgovarajmo'}
          </h2>
          <p className={'max-w-xs text-sm leading-relaxed text-white/30 lg:text-right'}>
            {'Prva konsultacija je besplatna — bez obaveza, samo razgovor'}
          </p>
        </div>
        <div className={'mt-8 h-px w-full bg-linear-to-r from-primary/40 via-secondary/20 to-transparent'} />
      </motion.div>

      <motion.div
        initial={{opacity: 0, y: 28}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, margin: '-40px'}}
        transition={{duration: 0.6, delay: 0.1, ease: 'easeOut'}}
        className={'overflow-hidden rounded-2xl border border-white/6 lg:grid lg:grid-cols-5'}>

        {/* Left panel */}
        <div className={'relative hidden overflow-hidden bg-[#1a1510] lg:col-span-2 lg:flex lg:flex-col lg:justify-between lg:p-10'}>
          <div className={'absolute inset-0 opacity-[0.04]'}
            style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px'}} />
          {/* Decorative room perspective */}
          <div className={'relative mb-8'}>
            <svg viewBox={'0 0 80 80'} fill={'none'} className={'h-16 w-16 text-primary/50'}>
              <rect x={'4'} y={'4'} width={'72'} height={'72'} rx={'4'} stroke={'currentColor'} strokeWidth={'1.5'} />
              <line x1={'4'} y1={'4'} x2={'40'} y2={'40'} stroke={'currentColor'} strokeWidth={'1'} opacity={'0.5'} />
              <line x1={'76'} y1={'4'} x2={'40'} y2={'40'} stroke={'currentColor'} strokeWidth={'1'} opacity={'0.5'} />
              <line x1={'4'} y1={'76'} x2={'40'} y2={'40'} stroke={'currentColor'} strokeWidth={'1'} opacity={'0.5'} />
              <line x1={'76'} y1={'76'} x2={'40'} y2={'40'} stroke={'currentColor'} strokeWidth={'1'} opacity={'0.5'} />
              <circle cx={'40'} cy={'40'} r={'3'} fill={'currentColor'} />
            </svg>
          </div>
          <div className={'relative'}>
            <h3 className={'mb-3 text-2xl font-light text-white'}>{'Direktan kontakt'}</h3>
            <p className={'text-sm leading-relaxed text-white/50'}>
              {'Dostupni smo radnim danima od 9 do 17h. Javite se slobodno — sa zadovoljstvom ćemo odgovoriti na sva vaša pitanja o projektu.'}
            </p>
          </div>
          <div className={'relative space-y-5'}>
            {contactItems.map((item, i) => (
              <Link
                key={i}
                href={item.href || '#'}
                className={'flex items-center gap-3 text-white/65 transition-colors hover:text-primary'}>
                <span className={'flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5'}>
                  <Icon name={item.icon} height={14} width={14} className={'fill-current'} />
                </span>
                <div>
                  <div className={'text-[10px] font-semibold tracking-wider text-white/30 uppercase'}>{item.title}</div>
                  <div className={'text-sm font-medium'}>{item.value}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className={'bg-[#141210] lg:col-span-3'}>
          {/* Mobile contact info */}
          <div className={'grid grid-cols-2 gap-3 p-6 lg:hidden'}>
            {contactItems.map((item, i) => (
              <Link
                key={i}
                href={item.href || '#'}
                className={'flex items-center gap-2 rounded-xl border border-white/8 bg-white/4 p-3'}>
                <span className={'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10'}>
                  <Icon name={item.icon} height={14} width={14} className={'fill-current text-primary'} />
                </span>
                <div className={'min-w-0'}>
                  <div className={'text-[10px] font-semibold tracking-wider text-white/30 uppercase'}>{item.title}</div>
                  <div className={'truncate text-xs font-medium text-white/70'}>{item.value}</div>
                </div>
              </Link>
            ))}
          </div>

          {/* Form */}
          <div className={'p-8 lg:p-10'}>
            <Suspense fallback={<div className={'h-64 animate-pulse rounded-xl bg-white/5'} />}>
              <ContactForm />
            </Suspense>
          </div>

          {/* Map — Kikinda */}
          <div className={'h-56 w-full overflow-hidden border-t border-white/6 lg:h-64'}>
            <iframe
              title={'Studio Forma Kikinda lokacija'}
              src={'https://www.openstreetmap.org/export/embed.html?bbox=20.36%2C45.79%2C20.56%2C45.89&layer=mapnik&marker=45.8286%2C20.4622'}
              className={'h-full w-full border-0 opacity-80'}
              loading={'lazy'}
            />
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default memo(Contact);
