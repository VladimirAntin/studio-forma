'use client';
import {memo, useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {cn} from '@utils/CN';
import WaveDivider from '@/components/WaveDivider';
import Link from 'next/link';

type Project = {
  title: string;
  type: string;
  category: string;
  location: string;
  area: string;
  image: string;
  tags: string[];
};

const PROJECTS: Project[] = [
  {
    title: 'Vila Vojvodina',
    type: 'Stambeni objekat',
    category: 'dnevna',
    location: 'Kikinda',
    area: '85 m²',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=900',
    tags: ['Minimalistički', 'Topli tonovi'],
  },
  {
    title: 'Apartman Centar',
    type: 'Spavaća soba',
    category: 'spavaca',
    location: 'Kikinda',
    area: '18 m²',
    image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=900',
    tags: ['Skandinavski', 'Svetle boje'],
  },
  {
    title: 'Rezidencija Sever',
    type: 'Kuhinja & trpezarija',
    category: 'kuhinja',
    location: 'Kikinda',
    area: '42 m²',
    image: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=900',
    tags: ['Moderno', 'Otvoren plan'],
  },
  {
    title: 'Studio Loft',
    type: 'Dnevna soba',
    category: 'dnevna',
    location: 'Zrenjanin',
    area: '55 m²',
    image: 'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=900',
    tags: ['Industrial', 'Visoki plafoni'],
  },
  {
    title: 'Poslovni prostor Pro',
    type: 'Kancelarija',
    category: 'kancelarija',
    location: 'Kikinda',
    area: '120 m²',
    image: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=900',
    tags: ['Korporativni', 'Funkcionalan'],
  },
  {
    title: 'Kupatilo Spa',
    type: 'Kupatilo',
    category: 'kupatilo',
    location: 'Novi Sad',
    area: '14 m²',
    image: 'https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=900',
    tags: ['Luksuzno', 'Mramor'],
  },
  {
    title: 'Penthouse Vojvoda',
    type: 'Otvoreni plan',
    category: 'dnevna',
    location: 'Kikinda',
    area: '200 m²',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=900',
    tags: ['Luksuzno', 'Panorama'],
  },
  {
    title: 'Dom Intimità',
    type: 'Spavaća soba',
    category: 'spavaca',
    location: 'Kikinda',
    area: '22 m²',
    image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=900',
    tags: ['Boho', 'Teksture'],
  },
];

const FILTERS = [
  {id: 'sve', label: 'Sve'},
  {id: 'dnevna', label: 'Dnevna soba'},
  {id: 'spavaca', label: 'Spavaća soba'},
  {id: 'kuhinja', label: 'Kuhinja'},
  {id: 'kupatilo', label: 'Kupatilo'},
  {id: 'kancelarija', label: 'Kancelarija'},
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('sve');
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const filtered =
    activeFilter === 'sve' ? PROJECTS : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id={'portfolio'} className={'relative bg-[#f7f2ec] pb-40 pt-20 lg:pb-52 lg:pt-28'}>
      <div className={'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'}>
        {/* Header */}
        <motion.div
          className={'mb-12'}
          initial={{opacity: 0, y: 24}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-50px'}}
          transition={{duration: 0.6, ease: 'easeOut'}}>
          <span className={'mb-4 block text-xs font-semibold tracking-[0.3em] text-primary uppercase'}>
            {'Naši radovi'}
          </span>
          <div className={'flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between'}>
            <h2 className={'text-4xl font-light text-stone-900 sm:text-5xl lg:text-6xl tracking-tight'}>
              {'Portfolio'}
            </h2>
            <p className={'max-w-xs text-sm leading-relaxed text-stone-500 lg:text-right'}>
              {'Svaki projekat je priča za sebe — o prostoru, ljudima i emocijama'}
            </p>
          </div>
          <div className={'mt-8 h-px w-full bg-linear-to-r from-primary/30 via-secondary/15 to-transparent'} />
        </motion.div>

        {/* Filters */}
        <motion.div
          className={'mb-8 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'}
          initial={{opacity: 0, y: 12}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5, delay: 0.1}}>
          {FILTERS.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={cn(
                'shrink-0 rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-200',
                activeFilter === filter.id
                  ? 'bg-stone-900 text-white shadow-md'
                  : 'border border-stone-200 bg-white text-stone-500 hover:border-stone-400 hover:text-stone-800',
              )}>
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery grid */}
        <motion.div
          className={'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'}
          layout>
          <AnimatePresence mode={'popLayout'}>
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{opacity: 0, scale: 0.92}}
                animate={{opacity: 1, scale: 1}}
                exit={{opacity: 0, scale: 0.88}}
                transition={{duration: 0.4, ease: 'easeOut', delay: i * 0.05}}
                className={cn(
                  'group relative overflow-hidden rounded-2xl cursor-pointer',
                  i === 0 && activeFilter === 'sve' ? 'sm:col-span-2 min-h-80' : 'min-h-64',
                )}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}>
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  loading={'lazy'}
                  className={'h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 min-h-64'}
                />

                {/* Default overlay — always visible bottom gradient */}
                <div className={'absolute inset-0 bg-linear-to-t from-black/70 via-black/15 to-transparent'} />

                {/* Hover overlay */}
                <div className={cn(
                  'absolute inset-0 bg-[#0c0a07]/60 backdrop-blur-[1px] transition-opacity duration-300',
                  hoveredIdx === i ? 'opacity-100' : 'opacity-0',
                )} />

                {/* Bottom info — always shown */}
                <div className={'absolute bottom-0 left-0 right-0 p-5'}>
                  <div className={'flex items-end justify-between'}>
                    <div>
                      <p className={'mb-0.5 text-[10px] font-semibold tracking-widest text-white/50 uppercase'}>
                        {project.type}
                      </p>
                      <h3 className={'text-lg font-light text-white tracking-wide'}>
                        {project.title}
                      </h3>
                    </div>
                    <span className={cn(
                      'shrink-0 rounded-full border border-primary/40 bg-primary/15 px-2.5 py-0.5 text-[10px] font-semibold text-primary/90 transition-all duration-300',
                      hoveredIdx === i && 'bg-primary text-white border-primary',
                    )}>
                      {project.area}
                    </span>
                  </div>
                </div>

                {/* Hover detail panel */}
                <div className={cn(
                  'absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center transition-all duration-300',
                  hoveredIdx === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
                )}>
                  <span className={'text-xs font-semibold tracking-[0.25em] text-primary/80 uppercase'}>
                    {project.location}
                  </span>
                  <h3 className={'text-2xl font-light text-white tracking-wide'}>
                    {project.title}
                  </h3>
                  <div className={'flex flex-wrap justify-center gap-1.5'}>
                    {project.tags.map(tag => (
                      <span key={tag} className={'rounded-full border border-white/20 bg-white/10 px-3 py-0.5 text-xs text-white/80'}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          className={'mt-12 text-center'}
          initial={{opacity: 0, y: 16}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5}}>
          <Link
            href={'/#contact'}
            className={'inline-flex items-center gap-2.5 rounded-full border border-stone-300 bg-white px-8 py-4 text-sm font-semibold text-stone-800 shadow-sm transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-md'}>
            {'Pokrenite vaš projekat →'}
          </Link>
        </motion.div>
      </div>
      <WaveDivider fill={'#0c0a07'} />
    </section>
  );
};

export default memo(Portfolio);

