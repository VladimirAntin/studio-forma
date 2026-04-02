'use client';
import {memo, useState} from 'react';
import Link from 'next/link';
import {cn} from '@utils/CN';
import {packages} from '@components/data/packages';
import {motion, AnimatePresence} from 'framer-motion';
import WaveDivider from '@/components/WaveDivider';

const Packages = () => {
  const [active, setActive] = useState(packages.findIndex(p => p.highlighted) ?? 0);
  const pkg = packages[active];

  return (
    <section id={'packages'} className={'relative bg-[#0c0a07] pb-40 pt-20 lg:pb-52 lg:pt-28'}>
      <div className={'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'}>

        {/* Header */}
        <motion.div
          className={'mb-14'}
          initial={{opacity: 0, y: 24}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-50px'}}
          transition={{duration: 0.6, ease: 'easeOut'}}>
          <span className={'mb-4 block text-xs font-semibold tracking-[0.3em] text-primary uppercase'}>
            {'Kako radimo zajedno'}
          </span>
          <div className={'flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between'}>
            <h2 className={'text-4xl font-light text-white sm:text-5xl lg:text-6xl tracking-tight'}>
              {'Paketi usluga'}
            </h2>
            <p className={'max-w-xs text-sm leading-relaxed text-white/30 lg:text-right'}>
              {'Izaberite nivo saradnje koji vam odgovara — uvek možemo kombinovati'}
            </p>
          </div>
          <div className={'mt-8 h-px w-full bg-linear-to-r from-primary/40 via-secondary/20 to-transparent'} />
        </motion.div>

        {/* Tab bar */}
        <div className={'mb-8 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'}>
          {packages.map((p, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={cn(
                'shrink-0 rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-200',
                i === active
                  ? 'bg-primary text-white shadow-md shadow-primary/25'
                  : 'border border-white/10 bg-white/5 text-white/40 hover:border-white/25 hover:text-white/80',
              )}>
              {p.title}
              {p.priceNote && (
                <span className={cn(
                  'ml-2 rounded-full px-1.5 py-0.5 text-[10px] font-bold',
                  i === active
                    ? 'bg-white/25 text-white'
                    : 'bg-primary/30 text-primary',
                )}>
                  {'★'}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Active package panel */}
        <AnimatePresence mode={'wait'}>
          <motion.div
            key={active}
            initial={{opacity: 0, y: 14}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -8}}
            transition={{duration: 0.28, ease: 'easeOut'}}
            className={'overflow-hidden rounded-2xl border border-white/8 bg-white/4 lg:grid lg:grid-cols-2'}>

            {/* Image */}
            <div className={'relative h-60 overflow-hidden sm:h-72 lg:h-auto'}>
              <img
                src={pkg.image}
                alt={pkg.title}
                className={'h-full w-full object-cover'}
              />
              <div className={'absolute inset-0 bg-linear-to-t from-[#0c0a07]/60 via-transparent to-transparent lg:bg-linear-to-r'} />
              <div className={'absolute bottom-4 left-4 lg:hidden'}>
                <span className={'text-3xl font-light text-white drop-shadow'}>{pkg.price}</span>
              </div>
              {pkg.priceNote && (
                <div className={'absolute top-4 left-4'}>
                  <span className={'rounded-full border border-primary/40 bg-primary/20 px-3 py-1 text-xs font-semibold text-primary'}>
                    {'✦ '}{pkg.priceNote}
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className={'flex flex-col justify-between p-7 lg:p-10'}>
              <div>
                <p className={'mb-1 text-xs font-semibold tracking-widest text-white/30 uppercase'}>
                  {pkg.subtitle}
                </p>
                <h3 className={'mb-1 text-2xl font-light text-white tracking-wide lg:text-3xl'}>
                  {pkg.title}
                </h3>
                <p className={'mb-8 hidden text-4xl font-light text-primary lg:block'}>
                  {pkg.price}
                </p>

                <div className={'mb-6 border-t border-white/8 pt-5'}>
                  <p className={'mb-3 text-xs font-semibold tracking-widest text-white/30 uppercase'}>
                    {'Šta je uključeno'}
                  </p>
                  <ul className={'grid grid-cols-1 gap-2.5 sm:grid-cols-2'}>
                    {pkg.features.map((f, i) => (
                      <li key={i} className={'flex items-center gap-2.5'}>
                        <span className={'h-1 w-4 shrink-0 rounded-full bg-primary'} />
                        <span className={'text-sm text-white/60'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href={{hash: 'contact', query: {paket: pkg.title}}}
                className={'mt-2 block rounded-xl border border-primary/30 bg-primary/15 py-4 text-center text-sm font-semibold text-primary shadow-md transition-all duration-200 hover:bg-primary hover:text-white hover:border-primary'}>
                {pkg.cta}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Indicators */}
        <div className={'mt-5 flex items-center justify-center gap-1.5'}>
          {packages.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Paket ${i + 1}`}
              className={cn(
                'rounded-full transition-all duration-300',
                i === active ? 'w-6 h-1 bg-primary' : 'h-1 w-1.5 bg-white/20 hover:bg-white/40',
              )}
            />
          ))}
        </div>
      </div>
      <WaveDivider fill={'#f7f2ec'} inverted />
    </section>
  );
};

export default memo(Packages);
