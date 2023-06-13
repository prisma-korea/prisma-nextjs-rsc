'use client';

import type {ReactElement} from 'react';
import {Lottie} from '@crello/react-lottie';
import clsx from 'clsx';

import * as animationData from '@/public/lotties/dooboo-loading.json';

function Loading(): ReactElement {
  return (
    <div
      className={clsx(
        'flex-1 self-stretch p-4 bg-paper',
        'flex flex-row justify-center items-center',
      )}
    >
      <Lottie
        config={{
          loop: true,
          autoplay: true,
          animationData,
        }}
        style={{width: '234px', height: '234px'}}
      />
    </div>
  );
}

export default Loading;
