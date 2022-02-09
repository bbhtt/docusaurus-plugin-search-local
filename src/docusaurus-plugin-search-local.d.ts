export type TranslationMap = {
  search_placeholder: string;
  see_all_results: string;
  no_results: string;
  search_results_for: string;
  search_the_documentation: string;
  count_documents_found: string;
  count_documents_found_plural: string;
  no_documents_were_found: string;
};

export type GlobalPluginData = {
  externalSearchSources: string[];
  indexHash: string | null;
  language: string[];
  removeDefaultStopWordFilter: boolean;
  searchResultContextMaxLength: number;
  searchResultLimits: number;
  translations: TranslationMap;
};

export type PluginOptions = {
  blogDir: string | string[];
  blogRouteBasePath: string | string[];
  docsDir: string | string[];
  docsRouteBasePath: string | string[];
  externalSearchSources: string[];
  hashed: boolean;
  highlightSearchTermsOnTargetPage: boolean;
  id: string;
  ignoreFiles: string | RegExp | (string | RegExp)[];
  indexBlog: boolean;
  indexDocs: boolean;
  indexPages: boolean;
  language: string | string[];
  removeDefaultStopWordFilter: boolean;
  searchResultContextMaxLength: number;
  searchResultLimits: number;
  translations: TranslationMap;
};

export type Options = Partial<PluginOptions>;
