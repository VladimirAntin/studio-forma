'use client';
import {memo, useEffect, useRef, useState} from 'react';
import {motion, useInView, type Variants} from 'framer-motion';
import WaveDivider from '@/components/WaveDivider';
import Link from 'next/link';

type Stat = {value: number; suffix: string; label: string};
type Feature = {icon: string; title: string; description: string};

const STATS: Stat[] = [
  {value: 8, suffix: '+', label: 'godina iskustva'},
  {value: 150, suffix: '+', label: 'realizovanih projekata'},
  {value: 100, suffix: '%', label: 'zadovoljnih klijenata'},
  {value: 12, suffix: '', label: 'nagrađenih projekata'},
];

const FEATURES: Feature[] = [
  {
    icon: '⬡',
    title: 'Personalizovani pristup',
    description:
      'Svaki projekat počinje dubokim razumevanjem vašeg načina života, estetike i budžeta.',
  },
  {
    icon: '◈',
    title: 'Precizna dokumentacija',
    description: 'Kompletni tehnički crteži i specifikacije koje izvođači mogu odmah koristiti.',
  },
  {
    icon: '◎',
    title: 'Fotorealistični 3D',
    description: 'Vidite konačan izgled prostora pre nego što se potroši i jedan dinar na gradnju.',
  },
  {
    icon: '⬟',
    title: 'Lokalna ekspertiza',
    description: 'Poznajemo dobavljače i izvođače u Kikindi i Vojvodini — vrednost kroz mrežu.',
  },
  {
    icon: '⬠',
    title: 'Budžet pod kontrolom',
    description: 'Transparentna procena troškova od samog početka, bez skrivenih iznenađenja.',
  },
  {
    icon: '◉',
    title: 'Podrška nakon predaje',
    description: 'Dostupni smo i tokom realizacije — saveti i korekcije bez dodatnih naknada.',
  },
];

const PROCESS = [
  {
    step: '01',
    title: 'Razgovor',
    desc: 'Besplatan inicijalni poziv — upoznajemo vas, vaš prostor i viziju.',
  },
  {step: '02', title: 'Koncept', desc: 'Razvijamo idejni moodboard, paletu i prostorni raspored.'},
  {
    step: '03',
    title: 'Dizajn',
    desc: '3D vizualizacije, tehnička dokumentacija i specifikacija materijala.',
  },
  {
    step: '04',
    title: 'Realizacija',
    desc: 'Koordinacija izvođača i nadzor na licu mesta do završetka.',
  },
];

// Animated counter
const Counter = ({value, suffix}: {value: number; suffix: string}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, {once: true, margin: '-80px'});
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    const frame = (now: number) => {
      const elapsed = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - elapsed, 3);
      setCount(Math.round(ease * value));
      if (elapsed < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const containerVariants: Variants = {
  hidden: {},
  visible: {transition: {staggerChildren: 0.1}},
};
const itemVariants: Variants = {
  hidden: {opacity: 0, y: 24},
  visible: {opacity: 1, y: 0, transition: {duration: 0.5, ease: [0.25, 0.1, 0.25, 1]}},
};

const About = () => (
  <section
    id={'about'}
    className={'relative bg-[#f7f2ec] pt-20 pb-40 lg:pt-28 lg:pb-52'}>
    <div className={'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'}>
      {/* Header */}
      <motion.div
        className={'mb-16'}
        initial={{opacity: 0, y: 24}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, margin: '-50px'}}
        transition={{duration: 0.6, ease: 'easeOut'}}>
        <span
          className={'text-primary mb-4 block text-xs font-semibold tracking-[0.3em] uppercase'}>
          {'Studio Forma · Kikinda'}
        </span>
        <div className={'flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between'}>
          <h2
            className={'text-4xl font-light tracking-tight text-stone-900 sm:text-5xl lg:text-6xl'}>
            {'Zašto mi?'}
          </h2>
          <p className={'max-w-sm text-sm leading-relaxed text-stone-500 lg:text-right'}>
            {'Osmišljavamo prostore koji ostavljaju utisak — u Kikindi, Vojvodini i šire'}
          </p>
        </div>
        <div
          className={
            'from-primary/30 via-secondary/15 mt-8 h-px w-full bg-linear-to-r to-transparent'
          }
        />
      </motion.div>

      {/* Two-column: intro text + image */}
      <div className={'mb-20 grid gap-12 lg:grid-cols-2 lg:items-center'}>
        <motion.div
          initial={{opacity: 0, x: -24}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true, margin: '-60px'}}
          transition={{duration: 0.7, ease: 'easeOut'}}>
          <p className={'mb-6 text-lg leading-relaxed font-light text-stone-700'}>
            {
              'Studio Forma je enterijer dizajn studio osnovan u Kikindi sa strašću prema prostorima koji '
            }
            <em className={'font-normal text-stone-900 not-italic'}>{'dišu'}</em>
            {', funkcionišu i nadahnjuju.'}
          </p>
          <p className={'mb-8 text-base leading-relaxed text-stone-500'}>
            {
              'Verujemo da svaki prostor nosi potencijal koji čeka da bude otkriven. Naš tim spaja arhitektonsku preciznost sa senzibilitetom za lepotu i detalj — od konceptne skice do poslednjeg ukrasa.'
            }
          </p>
          <Link
            href={'/#contact'}
            className={
              'hover:bg-primary hover:shadow-primary/20 inline-flex items-center gap-2 rounded-full bg-stone-900 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg'
            }>
            {'Razgovarajmo →'}
          </Link>
        </motion.div>

        <motion.div
          className={'relative'}
          initial={{opacity: 0, x: 24}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true, margin: '-60px'}}
          transition={{duration: 0.7, ease: 'easeOut', delay: 0.1}}>
          <div className={'relative overflow-hidden rounded-2xl'}>
            <img
              src={
                'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=900'
              }
              alt={'Studio Forma — radni prostor'}
              className={'h-80 w-full object-cover lg:h-96'}
            />
            <div className={'from-primary/15 absolute inset-0 bg-linear-to-br to-transparent'} />
          </div>
          {/* Floating stat card */}
          <motion.div
            className={
              'absolute -bottom-5 -left-4 rounded-xl border border-stone-200 bg-white px-5 py-3.5 shadow-xl lg:-left-8'
            }
            initial={{opacity: 0, scale: 0.8}}
            whileInView={{opacity: 1, scale: 1}}
            viewport={{once: true}}
            transition={{delay: 0.5, duration: 0.5, type: 'spring', stiffness: 200}}>
            <div className={'flex items-center gap-2'}>
              <span className={'bg-secondary h-2 w-2 animate-pulse rounded-full'} />
              <span className={'text-xs font-semibold text-stone-500'}>{'Aktivan studio'}</span>
            </div>
            <p className={'mt-1 text-sm font-bold text-stone-900'}>{'Kikinda, Vojvodina'}</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        className={'mb-20 grid grid-cols-2 gap-4 sm:grid-cols-4'}
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, margin: '-50px'}}
        transition={{duration: 0.6}}>
        {STATS.map((stat, i) => (
          <div
            key={i}
            className={'rounded-2xl border border-stone-200/70 bg-white p-6 text-center shadow-sm'}>
            <p className={'mb-1 text-3xl font-light text-stone-900 sm:text-4xl'}>
              <Counter
                value={stat.value}
                suffix={stat.suffix}
              />
            </p>
            <p className={'text-xs font-medium tracking-wide text-stone-500 uppercase'}>
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Why us — feature grid */}
      <motion.div
        className={'mb-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'}
        variants={containerVariants}
        initial={'hidden'}
        whileInView={'visible'}
        viewport={{once: true, margin: '-50px'}}>
        {FEATURES.map((f, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className={
              'group hover:border-primary/30 hover:shadow-primary/5 relative overflow-hidden rounded-2xl border border-stone-200/60 bg-white p-6 transition-all duration-300 hover:shadow-lg'
            }>
            <span className={'text-primary/70 mb-4 block text-2xl'}>{f.icon}</span>
            <h3 className={'mb-2 text-base font-semibold text-stone-900'}>{f.title}</h3>
            <p className={'text-sm leading-relaxed text-stone-500'}>{f.description}</p>
            {/* Hover accent bar */}
            <div
              className={
                'bg-primary absolute bottom-0 left-0 h-0.5 w-0 rounded-full transition-all duration-300 group-hover:w-full'
              }
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Process timeline */}
      <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, margin: '-50px'}}
        transition={{duration: 0.6}}>
        <p
          className={
            'mb-8 text-center text-xs font-semibold tracking-[0.3em] text-stone-400 uppercase'
          }>
          {'Proces saradnje'}
        </p>
        <div className={'relative grid grid-cols-2 gap-4 lg:grid-cols-4'}>
          {/* Connecting line desktop */}
          <div
            className={
              'absolute top-6 right-[12.5%] left-[12.5%] hidden h-px bg-stone-200 lg:block'
            }
          />
          {PROCESS.map((step, i) => (
            <div
              key={i}
              className={'relative flex flex-col items-center text-center'}>
              <div
                className={
                  'hover:border-primary hover:bg-primary/5 relative mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-stone-200 bg-white shadow-sm transition-colors duration-300'
                }>
                <span className={'text-xs font-bold text-stone-400'}>{step.step}</span>
              </div>
              <h4 className={'mb-1.5 text-sm font-semibold text-stone-900'}>{step.title}</h4>
              <p className={'text-xs leading-relaxed text-stone-500'}>{step.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
    <WaveDivider fill={'#0f0d0a'} />
  </section>
);

export default memo(About);
