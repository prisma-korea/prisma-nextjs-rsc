import type {ReactElement} from 'react';
import clsx from 'clsx';
import Logo from 'public/assets/logo.svg';

import type {Locale} from '~/i18n';

type Props = {
  params: {lang: Locale};
};

export default async function Page({}: Props): Promise<ReactElement> {
  return (
    <div
      className={clsx(
        'bg-modal-background',
        'flex-1 bg-paper overflow-hidden',
        'max-md:px-4',
        'flex flex-col justify-center items-center',
      )}
    >
      <div
        className={clsx(
          'bg-modal max-w-[480px] rounded-2xl px-12 py-16',
          'flex flex-col items-center justify-center',
        )}
      >
        <Logo className="h-20 mb-2 text-brand" />
      </div>
    </div>
  );
}
