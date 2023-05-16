'use client';

import type {ReactElement} from 'react';
import clsx from 'clsx';

import {H1} from '../../../src/components/Typography';
import type {Translates} from '../../../src/localization';

type Props = {
  t: Translates['home'];
};

export type PluginType = {
  domain: string;
  icon: ReactElement;
};

function Hero({t}: Props): ReactElement {
  return (
    <div className={clsx('self-stretch bg-cover', 'max-[425px]:p-0')}>
      <H1 className="p-16 text-[24px]">{t.title}</H1>
    </div>
  );
}

export default Hero;
