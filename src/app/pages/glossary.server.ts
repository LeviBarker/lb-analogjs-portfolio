import { PageServerLoad } from '@analogjs/router';

export const load = async (pageServerLoad: PageServerLoad) => {
  return {
    loaded: true,
  };
};