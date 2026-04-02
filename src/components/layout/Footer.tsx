'use client';
import Link from 'next/link';
import Icon from '@/icons/Icon';
import LogoIcon from '@/icons/LogoIcon';
import {footerItems, footerServices, socialLinks} from '@/components/data/footer';
import {memo} from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={'bg-[#0a0804] py-14 text-white'}>
      <div className={'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'}>
        <div className={'mb-10 grid gap-8 md:grid-cols-4'}>
          <div className={'md:col-span-2'}>
            <div className={'mb-4 flex items-center gap-2.5'}>
              <LogoIcon width={24} height={24} className={'text-primary'} />
              <div>
                <span className={'text-sm font-bold tracking-[0.2em] text-white/80 uppercase'}>{'Studio Forma'}</span>
                <p className={'text-[9px] font-medium tracking-[0.35em] text-primary/70 uppercase'}>{'Dizajn Enterijera'}</p>
              </div>
            </div>
            <p className={'mb-5 max-w-sm text-sm leading-relaxed text-stone-500'}>
              {'Enterijer dizajn studio iz Kikinde — pretvaramo prostore u doživljaje. Od konceptne ideje do realizacije.'}
            </p>
            <div className={'mb-5 flex items-center gap-2 text-sm text-stone-500'}>
              <span className={'h-1.5 w-1.5 animate-pulse rounded-full bg-secondary'} />
              <span>{'Pon – Pet · 9:00 – 17:00h · Kikinda'}</span>
            </div>
            <div className={'flex gap-3'}>
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  target={'_blank'}
                  rel={'noopener noreferrer'}
                  className={'flex h-9 w-9 items-center justify-center rounded-xl border border-white/8 bg-white/5 transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-primary'}
                  aria-label={link.name}>
                  <Icon name={link.icon} height={16} width={16} />
                </a>
              ))}
            </div>
          </div>

          <div className={'flex flex-row justify-between'}>
            <div>
              <h4 className={'mb-4 text-xs font-semibold tracking-widest text-white/40 uppercase'}>{'Usluge'}</h4>
              <ul className={'space-y-2 text-sm text-stone-500'}>
                {footerServices.map(service => (
                  <li key={service} className={'transition-colors hover:text-primary cursor-default'}>{service}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className={'mb-4 text-xs font-semibold tracking-widest text-white/40 uppercase'}>{'Navigacija'}</h4>
              <ul className={'space-y-2 text-sm text-stone-500'}>
                {footerItems.map(item => (
                  <li key={item.href}>
                    <Link href={item.href} className={'transition-colors hover:text-primary'}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider + bottom */}
        <div className={'border-t border-white/6 pt-8'}>
          <div className={'flex flex-col items-center justify-between gap-4 text-center text-xs text-stone-600 sm:flex-row sm:text-left'}>
            <p>{'© '}{currentYear}{' Studio Forma. Sva prava zadržana.'}</p>
            <p className={'text-stone-700'}>{'Kikinda, Vojvodina, Srbija'}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
