# Prisma NextJS RSC

> Project is built mainly with `nextjs`, `react server component` and `prisma`.

[![CI](https://github.com/prisma-korea/prisma-nextjs-rsc/actions/workflows/ci.yml/badge.svg)](https://github.com/prisma-korea/prisma-nextjs-rsc/actions/workflows/ci.yml)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md)

## Getting started

See [Contributing](./CONTRIBUTING.md) for installation.


## Localization with variable 

#### 1. Add text with variable in json ####

    // en.json
    
    "home": {
      "intro": "Hello my name is {{ name }} and {{ age }} years old"
    },

#### 2. Get the `t` from `getTranslates` ####

```tsx

const {t, home} = await getTranslates(lang);

```

### 3. Inside the `t` function, put json text and variables as parameters ###


```tsx

// app/[lang]/page.tsx

export default async function Page({
  params: {lang},
}: Props): Promise<ReactElement> {
  const {t, langs, nav, home} = await getTranslates(lang);

  return (
    <Container lang={lang} langs={langs} t={nav}>
      <div className={clsx('flex-1 bg-paper', 'flex flex-col')}>
        <p className={clsx('p-8 text-basic')}>
          {t(home.intro, {name: 'kihun', age: 30})}
        </p>
      </div>
    </Container>
  );
}

```
