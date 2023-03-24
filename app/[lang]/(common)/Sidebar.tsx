'use client';

import clsx from 'clsx';
import Link from 'next/link';
import {usePathname, useRouter} from 'next/navigation';
import type {ReactElement} from 'react';
import type {Translates} from '../../../src/localization';
import type {NavLink} from './Header';

type Props = {
  t: Translates['nav'];
  lang: 'en' | 'ko';
};

export default function Sidebar({lang}: Props): ReactElement {
  const pathname = usePathname();
  const router = useRouter();
  const navLinks: NavLink[] = [];

  return (
    <aside className={clsx('w-[360px]', 'flex flex-col')}>
      {navLinks.map((link, index) => {
        return (
          <ul
            key={link.name}
            className={clsx(
              'pointer hover:opacity-70 hover:translate-y-[2px]',
              'flex items-center',
            )}
          >
            <Link
              href={`${lang}/${link.path}`}
              className={clsx(
                'text-body4 truncate flex-1 h-10 px-8',
                'flex items-center',
                'hover:opacity-100',
                pathname?.includes(link.path) ? 'opacity-100' : 'opacity-30',
              )}
            >
              <li
                key={index}
                className={clsx('text-ellipsis', 'body3 font-bold')}
              >
                {link.name}
              </li>
            </Link>
          </ul>
        );
      })}
    </aside>
  );
}
