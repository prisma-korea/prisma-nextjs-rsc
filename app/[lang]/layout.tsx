import 'server-only';
import '../../styles/output.css';

import type {ReactElement, ReactNode} from 'react';

import type {Locale} from '~/i18n';
import RootProvider from '../../src/components/RootProvider';
import {getTranslates} from '../../src/localization';
import Container from './(common)/Container';

type Props = {
  children: ReactNode;
  params: {lang: Locale};
};

export default async function RootLayout(props: Props): Promise<ReactElement> {
  const {
    params: {lang},
    children,
  } = props;

  const {langs, nav} = await getTranslates(lang);

  return (
    <html lang={lang} className="dark">
      <title>prisma-nextjs-rsc</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="All stats for developers" />
      <link rel="icon" href="/favicon.ico" />
      <body>
        <RootProvider initialLocale={lang}>
          <Container lang={lang} langs={langs} t={nav}>
            {children}
          </Container>
        </RootProvider>
      </body>
    </html>
  );
}
