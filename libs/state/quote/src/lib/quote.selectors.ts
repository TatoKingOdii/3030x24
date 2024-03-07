import { createFeatureSelector, createSelector } from '@ngrx/store';
import { quoteFeatureKey, QuoteState } from './quote.reducer';

export const quoteFeature = createFeatureSelector<QuoteState>(quoteFeatureKey);

export const currentQuote = createSelector(
  quoteFeature,
  (state: QuoteState) => state.currentQuote
);
