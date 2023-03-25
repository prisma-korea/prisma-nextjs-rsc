'use client';

import {usePathname, useRouter} from 'next/navigation';

import Link from 'next/link';
import type {NavLink} from './Header';
import type {ReactElement} from 'react';
import type {Translates} from '../../../src/localization';
import clsx from 'clsx';

type Props = {
  t: Translates['nav'];
  lang: 'en' | 'ko';
};

export default function Sidebar({t, lang}: Props): ReactElement {
  const pathname = usePathname();
  const router = useRouter();
  const navLinks: NavLink[] = [
    {
      name: t.users,
      path: '/users',
    },
    {
      name: t.posts,
      path: '/posts',
    },
  ];

  return (
    <aside className={clsx('w-[280px] bg-basic py-2', 'flex flex-col')}>
      {navLinks.map((link, index) => {
        return (
          <ul
            key={link.name}
            className={clsx(
              'h-12 pointer hover:bg-paper hover:opacity-70',
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
