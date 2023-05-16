// Sample api router.
// This is added because `middleware` is not working without `api` routes.
// https://github.com/vercel/next.js/discussions/38546#discussioncomment-3127906

import type {NextApiRequest, NextApiResponse} from 'next';

// import {getSupabaseClient} from '../../../server/supabaseClient';

type Reply = {message: string} | {id: string; description?: string | null};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Reply>,
): Promise<void> {
  const {body, method} = req;

  switch (method) {
    case 'POST':
      const email = <string>body.email;

      if (!email) {
        res.status(500).send({message: 'Email is required'});

        return;
      }

      // const supabase = getSupabaseClient();
      // await supabase.from('news_letters').upsert({email});

      res
        .status(200)
        .send({message: 'Thank you for subscribing to our newsletter'});
      break;
    default:
      res.status(404).end();
  }
}
