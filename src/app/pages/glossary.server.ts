import { PageServerLoad } from '@analogjs/router';

export const prerender = false;
export const runtime = 'nodejs';

export const load = async (pageServerLoad: PageServerLoad) => {
  return {
    loaded: true,
  };
};