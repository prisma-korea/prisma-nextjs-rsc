import type {Locale} from '~/i18n';
import type {ReactElement} from 'react';
import clsx from 'clsx';
import {getTranslates} from '../../src/localization';

type Props = {
  params: {lang: Locale};
};

export default async function Page({
  params: {lang},
}: Props): Promise<ReactElement> {
  const {home} = await getTranslates(lang);

  return (
    <div className={clsx('flex-1 bg-paper', 'flex flex-col')}>
      <p className={clsx('p-8 text-basic')}>{home.title}</p>
    </div>
  );
}
