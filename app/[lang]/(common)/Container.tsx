'use client';

import type {ReactElement} from 'react';
import {useState} from 'react';
import clsx from 'clsx';
import localFont from 'next/font/local';

import type {Translates} from '../../../src/localization';

import Header from './Header';
import Sidebar from './Sidebar';

type Props = {
  t: Translates['nav'];
  lang: 'en' | 'ko';
  langs: {en: string; ko: string};
  children: React.ReactNode;
};

const Pretendard = localFont({
  src: [
    {
      path: '../../../assets/fonts/Pretendard-Regular.otf',
      weight: 'normal',
    },
    {
      path: '../../../assets/fonts/Pretendard-Bold.otf',
      weight: 'bold',
    },
    {
      path: '../../../assets/fonts/Pretendard-Thin.otf',
      weight: '300',
    },
  ],
});

export default function Container(props: Props): ReactElement {
  const {t, lang, langs, children} = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main
      className={clsx(
        'text-center flex-1 self-stretch relative',
        'flex flex-col',
        Pretendard.className,
      )}
    >
      <Header
        t={t}
        lang={lang}
        langs={{
          en: langs.en,
          ko: langs.ko,
        }}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div className={clsx('flex-1', 'flex flex-row relative')}>
        {isOpen ? <Sidebar t={t} lang={lang} /> : null}
        {children}
      </div>
    </main>
  );
}
