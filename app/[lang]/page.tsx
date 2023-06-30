import type {ReactElement} from 'react';
import clsx from 'clsx';

import Container from '~/components/uis/Container';
import type {Locale} from '~/i18n';
import {getTranslates} from '~/src/localization';

type Props = {
  params: {lang: Locale};
};

export default async function Page({
  params: {lang},
}: Props): Promise<ReactElement> {
  const {langs, nav, home} = await getTranslates(lang);

  return (
    <Container lang={lang} langs={langs} t={nav}>
      <div className={clsx('flex-1 bg-paper', 'flex flex-col')}>
        <p className={clsx('p-8 text-basic')}>{home.title}</p>
      </div>
    </Container>
  );
}
