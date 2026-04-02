'use client';
import {memo, useEffect, useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {cn} from '@/utils/CN';
import LogoIcon from '@/icons/LogoIcon';
import {motion} from 'framer-motion';

const navLinks = [
  {
    href: '/',
    title: 'Početna',
    section: '',
    icon: (
      <svg
        viewBox={'0 0 24 24'}
        fill={'none'}
        stroke={'currentColor'}
        strokeWidth={1.7}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
        className={'h-5 w-5'}>
        <path d={'M3 10.5L12 3l9 7.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1v-9.5z'} />
        <path d={'M9 21V12h6v9'} />
      </svg>
    ),
  },
  {
    href: '/#services',
    title: 'Usluge',
    section: 'services',
    icon: (
      <svg
        viewBox={'0 0 24 24'}
        fill={'none'}
        stroke={'currentColor'}
        strokeWidth={1.7}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
        className={'h-5 w-5'}>
        <rect
          x={'3'}
          y={'3'}
          width={'7'}
          height={'7'}
          rx={'1'}
        />
        <rect
          x={'14'}
          y={'3'}
          width={'7'}
          height={'7'}
          rx={'1'}
        />
        <rect
          x={'3'}
          y={'14'}
          width={'7'}
          height={'7'}
          rx={'1'}
        />
        <rect
          x={'14'}
          y={'14'}
          width={'7'}
          height={'7'}
          rx={'1'}
        />
      </svg>
    ),
  },
  {
    href: '/#portfolio',
    title: 'Portfolio',
    section: 'portfolio',
    icon: (
      <svg
        viewBox={'0 0 24 24'}
        fill={'none'}
        stroke={'currentColor'}
        strokeWidth={1.7}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
        className={'h-5 w-5'}>
        <rect
          x={'3'}
          y={'3'}
          width={'18'}
          height={'18'}
          rx={'2'}
        />
        <path d={'M3 9h18M9 21V9'} />
      </svg>
    ),
  },
  {
    href: '/#packages',
    title: 'Paketi',
    section: 'packages',
    icon: (
      <svg
        viewBox={'0 0 24 24'}
        fill={'none'}
        stroke={'currentColor'}
        strokeWidth={1.7}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
        className={'h-5 w-5'}>
        <path d={'M12 2L2 7l10 5 10-5-10-5z'} />
        <path d={'M2 17l10 5 10-5M2 12l10 5 10-5'} />
      </svg>
    ),
  },
  {
    href: '/#about',
    title: 'O Nama',
    section: 'about',
    icon: (
      <svg
        viewBox={'0 0 24 24'}
        fill={'none'}
        stroke={'currentColor'}
        strokeWidth={1.7}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
        className={'h-5 w-5'}>
        <circle
          cx={'12'}
          cy={'8'}
          r={'4'}
        />
        <path d={'M4 20c0-4 3.6-7 8-7s8 3 8 7'} />
      </svg>
    ),
  },
  {
    href: '/#contact',
    title: 'Kontakt',
    section: 'contact',
    icon: (
      <svg
        viewBox={'0 0 24 24'}
        fill={'none'}
        stroke={'currentColor'}
        strokeWidth={1.7}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
        className={'h-5 w-5'}>
        <path
          d={
            'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14v2.92z'
          }
        />
      </svg>
    ),
  },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScrollTop = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScrollTop, {passive: true});
    return () => window.removeEventListener('scroll', handleScrollTop);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const sections = navLinks
      .filter(l => l.section !== '')
      .map(l => ({id: l.section, el: document.getElementById(l.section)}))
      .filter(s => s.el !== null) as {id: string; el: HTMLElement}[];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 80) {
        setActiveSection('');
        return;
      }
      let current = '';
      for (const s of sections) {
        if (s.el.offsetTop - window.innerHeight * 0.45 <= scrollY) current = s.id;
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, {passive: true});
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      setActiveSection('');
    };
  }, [isHome]);

  const isLinkActive = (link: (typeof navLinks)[0]) =>
    isHome && (link.section === '' ? activeSection === '' : activeSection === link.section);

  return (
    <>
      {/* ── Desktop: fixed top navbar ── */}
      <nav
        className={cn(
          'fixed top-0 right-0 left-0 z-50 hidden h-16 items-center justify-between px-8 transition-all duration-300 md:flex',
          scrolled
            ? 'border-b border-white/5 bg-[#0c0a07]/96 shadow-lg backdrop-blur-md'
            : 'bg-transparent',
        )}>
        {/* Logo */}
        <Link
          href={'/'}
          aria-label={'Studio Forma — početna'}
          className={'group flex items-center gap-2.5'}>
          <LogoIcon
            width={28}
            height={28}
            className={'text-primary transition group-hover:opacity-80'}
          />
          <span
            className={
              'group-hover:text-primary text-[11px] font-bold tracking-[0.25em] text-white/80 uppercase transition'
            }>
            {'Studio Forma'}
          </span>
        </Link>

        {/* Nav links */}
        <div className={'flex items-center gap-1'}>
          {navLinks.slice(1).map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'relative rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-all duration-200',
                isLinkActive(link) ? 'text-primary' : 'text-white/55 hover:text-white',
              )}>
              {link.title}
              {isLinkActive(link) && (
                <motion.span
                  layoutId={'desktop-nav-pill'}
                  className={'bg-primary/12 border-primary/20 absolute inset-0 rounded-full border'}
                  transition={{type: 'spring', stiffness: 380, damping: 30}}
                />
              )}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={'/#contact'}
          className={
            'border-primary/50 bg-primary/10 text-primary hover:bg-primary hover:border-primary flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-200 hover:text-white'
          }>
          {'Zakažite konsultaciju'}
        </Link>
      </nav>

      {/* ── Mobile: bottom tab bar ── */}
      <nav
        className={
          'pb-safe fixed right-0 bottom-0 left-0 z-50 flex items-center justify-around border-t border-white/8 bg-[#0c0a07]/97 backdrop-blur-md md:hidden'
        }>
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'flex flex-col items-center justify-center gap-0.5 px-2 py-2.5 transition-all duration-200',
              isLinkActive(link) ? 'text-primary' : 'text-white/35 hover:text-white',
            )}>
            {link.icon}
            <span className={'text-[9px] font-semibold tracking-wide'}>{link.title}</span>
          </Link>
        ))}
      </nav>
    </>
  );
};

export default memo(Navigation);
