'use client';
import {FC, memo, ReactNode, useEffect, useState} from 'react';
import Link from 'next/link';
import {cn} from '@utils/CN';
import WaveDivider from '@/components/WaveDivider';
import {motion} from 'framer-motion';

const SLIDES = [
  {
    src: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920',
    label: 'Dnevni boravak',
  },
  {
    src: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1920',
    label: 'Moderna kuhinja',
  },
  {
    src: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1920',
    label: 'Spavaća soba',
  },
  {
    src: 'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1920',
    label: 'Otvoreni prostor',
  },
];

const TAGS = [
  {label: 'Konceptni dizajn', color: 'border-primary/30 bg-primary/10 text-primary/90'},
  {label: '3D Vizualizacija', color: 'border-secondary/30 bg-secondary/10 text-secondary/90'},
  {label: 'Projektovanje', color: 'border-white/20 bg-white/5 text-white/70'},
  {label: 'Realizacija', color: 'border-primary/30 bg-primary/10 text-primary/90'},
];

const Highlight: FC<{children?: ReactNode}> = ({children}) => (
  <span className={'from-primary to-secondary bg-linear-to-r bg-clip-text text-transparent'}>
    {children}
  </span>
);

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [, setPrev] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrev(current);
      setCurrent(c => (c + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section
      className={'relative flex min-h-screen flex-col items-center justify-center overflow-hidden'}>
      {/* ── Background slideshow ── */}
      <div className={'absolute inset-0'}>
        {SLIDES.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={''}
            aria-hidden={'true'}
            className={cn(
              'absolute inset-0 h-full w-full object-cover transition-opacity duration-1500',
              i === current ? 'opacity-100' : 'opacity-0',
            )}
          />
        ))}
        {/* Multi-layer dark overlay with warm tint */}
        <div
          className={
            'absolute inset-0 bg-linear-to-b from-[#0c0a07]/90 via-[#0c0a07]/55 to-[#0c0a07]/92'
          }
        />
        {/* Warm gold glow blobs */}
        <div className={'bg-primary/8 absolute top-1/4 left-1/4 h-96 w-96 rounded-full blur-3xl'} />
        <div
          className={'bg-secondary/6 absolute right-1/4 bottom-1/3 h-80 w-80 rounded-full blur-3xl'}
        />
      </div>

      {/* ── Content ── */}
      <div className={'relative z-10 mx-auto max-w-5xl px-4 py-28 text-center sm:px-6 lg:px-8'}>
        {/* Animated service tags */}
        <motion.div
          className={'mb-10 flex flex-wrap items-center justify-center gap-2'}
          initial={{opacity: 0, y: 16}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.7, ease: 'easeOut'}}>
          {TAGS.map((tag, i) => (
            <motion.span
              key={tag.label}
              initial={{opacity: 0, scale: 0.85}}
              animate={{opacity: 1, scale: 1}}
              transition={{delay: 0.1 + i * 0.08, duration: 0.5}}
              className={cn(
                'inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-medium tracking-widest uppercase backdrop-blur-sm',
                tag.color,
              )}>
              {tag.label}
            </motion.span>
          ))}
        </motion.div>

        {/* Heading */}
        <motion.h1
          className={
            'mb-6 text-5xl leading-[1.08] font-light tracking-tight text-white sm:text-6xl lg:text-8xl'
          }
          initial={{opacity: 0, y: 24}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.9, delay: 0.15, ease: 'easeOut'}}>
          {'Prostor koji'}
          <br />
          <Highlight>{'odražava vas'}</Highlight>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className={
            'mx-auto mb-12 max-w-xl text-base leading-relaxed tracking-wide text-white/55 sm:text-lg'
          }
          initial={{opacity: 0, y: 16}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.3, ease: 'easeOut'}}>
          {'Studio Forma — enterijer dizajn studio iz Kikinde. Od prve ideje do finalnog detalja.'}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className={'flex flex-col items-center justify-center gap-4 sm:flex-row'}
          initial={{opacity: 0, y: 16}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.45, ease: 'easeOut'}}>
          <Link
            href={'/#portfolio'}
            className={
              'group bg-primary shadow-primary/30 hover:bg-primary-dark hover:shadow-primary/50 flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl'
            }>
            {'Pogledajte radove'}
            <span className={'transition-transform duration-200 group-hover:translate-x-1'}>
              {'→'}
            </span>
          </Link>
          <Link
            href={'/#contact'}
            className={
              'group hover:border-primary/50 hover:bg-primary/10 hover:text-primary flex items-center gap-2.5 rounded-full border border-white/25 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300'
            }>
            {'Zakažite konsultaciju'}
          </Link>
        </motion.div>

        {/* Slide indicators */}
        <motion.div
          className={'mt-12 flex items-center justify-center gap-2'}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.8}}>
          {SLIDES.map((slide, i) => (
            <button
              key={i}
              onClick={() => {
                setPrev(current);
                setCurrent(i);
              }}
              aria-label={slide.label}
              className={cn(
                'rounded-full transition-all duration-500',
                i === current ? 'bg-primary h-1 w-10' : 'h-1 w-1.5 bg-white/25 hover:bg-white/50',
              )}
            />
          ))}
        </motion.div>

        {/* Current slide label */}
        <motion.p
          key={current}
          className={'mt-3 text-[10px] font-medium tracking-[0.3em] text-white/25 uppercase'}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.5}}>
          {SLIDES[current].label}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href={'#services'}
        aria-label={'Skroluj dole'}
        className={
          'absolute bottom-28 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2'
        }
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 1.4, duration: 0.6}}>
        <motion.div
          className={
            'flex h-10 w-6 items-start justify-center rounded-full border border-white/20 pt-1.5'
          }
          animate={{opacity: [0.4, 0.9, 0.4]}}
          transition={{duration: 2.5, repeat: Infinity, ease: 'easeInOut'}}>
          <motion.div
            className={'bg-primary h-1.5 w-1 rounded-full'}
            animate={{y: [0, 12, 0]}}
            transition={{duration: 2.5, repeat: Infinity, ease: 'easeInOut'}}
          />
        </motion.div>
        <span className={'text-[9px] font-medium tracking-[0.3em] text-white/30 uppercase'}>
          {'Istraži'}
        </span>
      </motion.a>

      <WaveDivider fill={'#0c0a07'} />
    </section>
  );
};

export default memo(Hero);
