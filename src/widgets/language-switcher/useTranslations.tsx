'use client';

import productsEn from "@/locales/en/products.json";
import productsRu from "@/locales/ru/products.json";
import featuresEn from "@/locales/en/features.json";
import featuresRu from "@/locales/ru/features.json";
import itemsEn from "@/locales/en/items.json";
import itemsRu from "@/locales/ru/items.json";
import uiEn from "@/locales/en/ui.json";
import uiRu from "@/locales/ru/ui.json";

type Namespace = "products" | "features" | "items" | "ui";
type Locale = "en" | "ru";

export function useTranslations(namespace: Namespace, locale: Locale) {
  switch (namespace) {
    case "products":
      return locale === "en" ? productsEn : productsRu;
    case "features":
      return locale === "en" ? featuresEn : featuresRu;
    case "items":
      return locale === "en" ? itemsEn : itemsRu;
    case "ui":
      return locale === "en" ? uiEn : uiRu;
    default:
      return {};
  }
}