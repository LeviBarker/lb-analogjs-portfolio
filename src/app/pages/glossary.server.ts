// src/app/pages/index.server.ts
import { PageServerLoad } from '@analogjs/router';
import { GlossaryResponse } from '../services/glossary.service';

export const load = async ({}: PageServerLoad) => {

  const terms = await fetch('https://firestore.googleapis.com/v1/projects/levi-barker-product/databases/(default)/documents/glossary')
    .then(res => res.json()) as GlossaryResponse;

  return {
    terms,
    loaded: true,
  };
};