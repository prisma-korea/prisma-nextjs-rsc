import type {Locale} from '~/i18n';
import type {ReactElement} from 'react';
import {getTranslates} from '../../src/localization';
import clsx from 'clsx';

type Props = {
  params: {lang: Locale};
};

export default async function Page({
  params: {lang},
}: Props): Promise<ReactElement> {
  const {home} = await getTranslates(lang);

  return (
    <div className={clsx('flex-1 w-screen bg-paper', 'flex flex-col')}>
      <p className={clsx('p-8 text-basic')}>{home.title}</p>
    </div>
  );
}
