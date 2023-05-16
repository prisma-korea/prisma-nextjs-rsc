import type {ReactElement} from 'react';

import {getTranslates} from '../../src/localization';

import Home from '@/app/(home)/Home';
import type {Locale} from '~/i18n';

type Props = {
  params: {lang: Locale};
};

export default async function Page({
  params: {lang},
}: Props): Promise<ReactElement> {
  const {home} = await getTranslates(lang);

  return <Home t={home} />;
}
