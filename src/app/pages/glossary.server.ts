import { GlossaryResponse } from '../models/glossary';

export const load = async () => {

  const terms = await fetch('https://firestore.googleapis.com/v1/projects/levi-barker-product/databases/(default)/documents/glossary')
    .then(res => res.json()) as GlossaryResponse;

  return {
    terms,
    loaded: true,
  };
};