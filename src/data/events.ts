export interface CompanyEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  summary: string;
  imagePath?: string;
  published: boolean;
}

/**
 * Aucun événement n'est publié sur l'ancien site (?page_id=35 vide).
 * Conserver ce tableau vide jusqu'à publication officielle de la direction.
 */
export const COMPANY_EVENTS: CompanyEvent[] = [];
