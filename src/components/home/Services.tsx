'use client';
import {memo} from 'react';
import {servicesItems} from '@components/data/services';
import {motion, type Variants} from 'framer-motion';
import {cn} from '@utils/CN';
import WaveDivider from '@/components/WaveDivider';

const ACCENTS = [
  {top: 'from-primary/30', chip: 'border-primary/25 bg-primary/10 text-primary/90'},
  {top: 'from-secondary/30', chip: 'border-secondary/25 bg-secondary/10 text-secondary/90'},
  {top: 'from-stone-400/25', chip: 'border-stone-400/25 bg-stone-400/10 text-stone-300'},
  {top: 'from-secondary/30', chip: 'border-secondary/25 bg-secondary/10 text-secondary/90'},
  {top: 'from-primary/30', chip: 'border-primary/25 bg-primary/10 text-primary/90'},
];

const containerVariants: Variants = {
  hidden: {},
  visible: {transition: {staggerChildren: 0.1}},
};
const cardVariants: Variants = {
  hidden: {opacity: 0, y: 32},
  visible: {opacity: 1, y: 0, transition: {duration: 0.55, ease: [0.25, 0.1, 0.25, 1]}},
};

const Services = () => (
  <section id={'services'} className={'relative bg-[#0c0a07] pb-40 pt-20 lg:pb-52 lg:pt-28'}>
    <div className={'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'}>
      {/* Header */}
      <motion.div
        className={'mb-14'}
        initial={{opacity: 0, y: 24}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, margin: '-50px'}}
        transition={{duration: 0.6, ease: 'easeOut'}}>
        <span className={'mb-4 block text-xs font-semibold tracking-[0.3em] text-primary uppercase'}>
          {'Šta radimo'}
        </span>
        <div className={'flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between'}>
          <h2 className={'text-4xl font-light text-white sm:text-5xl lg:text-6xl tracking-tight'}>
            {'Naše usluge'}
          </h2>
          <p className={'max-w-xs text-sm leading-relaxed text-white/30 lg:text-right'}>
            {'Sveobuhvatna rešenja za svaki enterijer — od koncepta do ključa u ruci'}
          </p>
        </div>
        {/* Decorative line */}
        <div className={'mt-8 h-px w-full bg-linear-to-r from-primary/40 via-secondary/20 to-transparent'} />
      </motion.div>

      {/* Bento grid */}
      <motion.div
        className={'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'}
        variants={containerVariants}
        initial={'hidden'}
        whileInView={'visible'}
        viewport={{once: true, margin: '-50px'}}>
        {servicesItems.map((service, index) => {
          const accent = ACCENTS[index] ?? ACCENTS[0];
          const isFeature = index === 0;

          return (
            <motion.div
              key={index}
              variants={cardVariants}
              className={cn(
                'group relative overflow-hidden rounded-2xl cursor-default',
                isFeature ? 'sm:col-span-2 lg:col-span-2 min-h-96' : 'min-h-72',
              )}>
              {/* Background image */}
              <img
                src={service.image}
                alt={service.title}
                loading={'lazy'}
                className={'absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105'}
              />

              {/* Gradient overlays */}
              <div className={'absolute inset-0 bg-linear-to-t from-[#0c0a07]/95 via-[#0c0a07]/40 to-transparent'} />
              <div className={cn('absolute inset-0 bg-linear-to-br opacity-50', accent.top, 'to-transparent')} />

              {/* Index number */}
              <span className={'absolute top-5 right-5 font-mono text-xs font-bold tracking-widest text-white/15'}>
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Bottom content */}
              <div className={'absolute bottom-0 left-0 right-0 p-6 translate-y-1 transition-transform duration-300 group-hover:translate-y-0'}>
                <h3 className={'mb-2.5 text-xl font-light text-white tracking-wide lg:text-2xl'}>
                  {service.title}
                </h3>
                <p className={'mb-4 text-sm leading-relaxed text-white/55 line-clamp-2 transition-all duration-300 group-hover:line-clamp-none'}>
                  {service.description}
                </p>
                <div className={'flex flex-wrap gap-1.5'}>
                  {service.features.map((f, i) => (
                    <span
                      key={i}
                      className={cn('rounded-full border px-2.5 py-0.5 text-[11px] font-medium backdrop-blur-sm', accent.chip)}>
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
    <WaveDivider fill={'#f7f2ec'} inverted />
  </section>
);

export default memo(Services);
