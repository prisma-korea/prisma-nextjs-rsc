/* eslint-disable max-len */
import type {ReactElement} from 'react';
import clsx from 'clsx';
import localFont from 'next/font/local';

const Pretendard = localFont({
  src: [
    {
      path: '../assets/fonts/Pretendard-Regular.otf',
      weight: 'normal',
    },
    {
      path: '../assets/fonts/Pretendard-Bold.otf',
      weight: 'bold',
    },
    {
      path: '../assets/fonts/Pretendard-Thin.otf',
      weight: '300',
    },
  ],
  variable: '--pretendard',
});

export default function NotFound(): ReactElement {
  return (
    <body className="flex flex-col flex-1 justify-center items-center">
      <main
        className={clsx([
          'p-32 bg-paper max-w-[480px] rounded-lg',
          'flex flex-col justify-center items-center',
          Pretendard.className,
        ])}
      >
        <a href="https://app.dooboo.io/">
          <svg
            className={'inline-block h-30 w-20'}
            aria-label="dooboo"
            width="60"
            height="67"
            viewBox="0 0 60 67"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M56.895 20.5219V46.4783C56.895 48.097 56.0323 49.5931 54.6312 50.4041L32.23 63.3715C30.8239 64.1854 29.0898 64.1854 27.6836 63.3715L5.28239 50.4041C3.8813 49.5931 3.01862 48.097 3.01862 46.4783V20.5219C3.01862 18.9031 3.8813 17.407 5.28239 16.596L27.6836 3.62866C29.0898 2.8147 30.8239 2.8147 32.23 3.62866L54.6312 16.596C56.0323 17.407 56.895 18.9031 56.895 20.5219Z"
              fill="#1B1B1B"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M59.9135 20.5218V46.4782C59.9135 49.1739 58.4768 51.6654 56.1435 53.016L33.7423 65.9834C31.4007 67.3389 28.5128 67.3389 26.1712 65.9834L3.76992 53.016C1.43665 51.6654 0 49.1739 0 46.4782V20.5218C0 17.8261 1.43665 15.3346 3.76992 13.984L26.1712 1.01663C28.5128 -0.338878 31.4007 -0.338876 33.7423 1.01663L56.1435 13.984C58.4768 15.3346 59.9135 17.8261 59.9135 20.5218ZM56.8949 46.4782V20.5218C56.8949 18.9031 56.0322 17.407 54.6311 16.5959L32.2299 3.6286C30.8238 2.81463 29.0897 2.81463 27.6836 3.62859L5.28232 16.5959C3.88123 17.407 3.01854 18.9031 3.01854 20.5218V46.4782C3.01854 48.097 3.88123 49.593 5.28232 50.4041L27.6836 63.3714C29.0897 64.1854 30.8238 64.1854 32.2299 63.3714L54.6311 50.4041C56.0322 49.593 56.8949 48.097 56.8949 46.4782Z"
              fill="#1B1B1B"
            />
            <path
              d="M56.895 20.5219V46.4783C56.895 48.097 56.0323 49.5931 54.6312 50.4041L32.23 63.3715C30.8239 64.1854 29.0898 64.1854 27.6836 63.3715L5.28239 50.4041C3.8813 49.5931 3.01862 48.097 3.01862 46.4783V20.5219C3.01862 18.9031 3.8813 17.407 5.28239 16.596L27.6836 3.62866C29.0898 2.8147 30.8239 2.8147 32.23 3.62866L54.6312 16.596C56.0323 17.407 56.895 18.9031 56.895 20.5219Z"
              fill="#1B1B1B"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M59.9135 20.5218V46.4782C59.9135 49.1739 58.4768 51.6654 56.1435 53.016L33.7423 65.9834C31.4007 67.3389 28.5128 67.3389 26.1712 65.9834L3.76992 53.016C1.43665 51.6654 0 49.1739 0 46.4782V20.5218C0 17.8261 1.43665 15.3346 3.76992 13.984L26.1712 1.01663C28.5128 -0.338878 31.4007 -0.338876 33.7423 1.01663L56.1435 13.984C58.4768 15.3346 59.9135 17.8261 59.9135 20.5218ZM56.8949 46.4782V20.5218C56.8949 18.9031 56.0322 17.407 54.6311 16.5959L32.2299 3.6286C30.8238 2.81463 29.0897 2.81463 27.6836 3.62859L5.28232 16.5959C3.88123 17.407 3.01854 18.9031 3.01854 20.5218V46.4782C3.01854 48.097 3.88123 49.593 5.28232 50.4041L27.6836 63.3714C29.0897 64.1854 30.8238 64.1854 32.2299 63.3714L54.6311 50.4041C56.0322 49.593 56.8949 48.097 56.8949 46.4782Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M28.2709 9.72674C29.3159 9.1308 30.5978 9.1308 31.6427 9.72673L47.0863 18.5344C47.8493 18.9695 47.8493 20.0694 47.0863 20.5046L31.6428 29.3122C30.5978 29.9081 29.3159 29.9082 28.2709 29.3122L12.8274 20.5046C12.0644 20.0694 12.0644 18.9695 12.8274 18.5344L28.2709 9.72674Z"
              fill="white"
            />
          </svg>
        </a>
        <div className="flex flex-col gap-4 justify-center items-center">
          <p className="mt-6 text-basic text-h1">
            <span className="font-medium text-12 opacity-95">404</span>
          </p>
          <p className={clsx('mt-4 text-basic')}>
            <span className="text-6 opacity-50">Page not found</span>
          </p>
          <p className="mt-4">
            <span className="text-[14px] opacity-50 text-basic">
              We are sorry. The requested URL was not found on this server. You
              entered an address that does not exist or has been deleted or
              changed.
            </span>
          </p>
        </div>
      </main>
    </body>
  );
}
