// src/app/pages/index.server.ts
import { PageServerLoad } from '@analogjs/router';
import { GlossaryResponse } from '../services/glossary.service';

export const load = async ({}: PageServerLoad) => {

    // let terms: GlossaryResponse | null = null;
    // let error = null;

    // let response 
  
    // try {
    //     response = await fetch('https://firestore.googleapis.com/v1/projects/levi-barker-product/databases/(default)/documents/glossary')
    //     // terms = await response.json();
    // } catch (e) {
    //     error = e;
    // }

    // if(!response?.ok) {
    //     error = `Failed to fetch glossary terms: ${response?.status} ${response?.statusText}`;
    // }

    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json());

  return {
    // terms,
    response,
    loaded: true,
    error: null,
  };
};