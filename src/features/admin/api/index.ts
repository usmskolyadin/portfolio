"use server";
import { ActionParams, ModelName } from "@premieroctet/next-admin";
import {
  deleteResourceItems,
  submitForm,
  searchPaginatedResource,
  SearchPaginatedResourceParams,
} from "@premieroctet/next-admin/dist/actions";
import { prisma } from "../prisma";
import { options } from "../options";

export const submitFormAction = async (
  params: ActionParams,
  formData: FormData
) => {
  return submitForm({ ...params, options, prisma }, formData);
};

export const deleteItem = async (
  model: ModelName,
  ids: string[] | number[]
) => {
  return deleteResourceItems(prisma, model, ids);
};

export const searchResource = async (
  actionParams: ActionParams,
  params: SearchPaginatedResourceParams
) => {
  return searchPaginatedResource({ ...actionParams, options, prisma }, params);
};