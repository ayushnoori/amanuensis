import type {
  QueryResolvers,
  MutationResolvers,
  ImagingStudiesRelationResolvers,
} from 'types/graphql';

import { db } from 'src/lib/db';

export const imagingStudy: QueryResolvers['imagingStudy'] = () => {
  return db.imagingStudies.findMany();
};

export const imagingStudies: QueryResolvers['imagingStudies'] = ({ id }) => {
  return db.imagingStudies.findUnique({
    where: { id },
  });
};

export const createImagingStudies: MutationResolvers['createImagingStudies'] =
  ({ input }) => {
    return db.imagingStudies.create({
      data: input,
    });
  };

export const updateImagingStudies: MutationResolvers['updateImagingStudies'] =
  ({ id, input }) => {
    return db.imagingStudies.update({
      data: input,
      where: { id },
    });
  };

export const deleteImagingStudies: MutationResolvers['deleteImagingStudies'] =
  ({ id }) => {
    return db.imagingStudies.delete({
      where: { id },
    });
  };

export const ImagingStudies: ImagingStudiesRelationResolvers = {
  Encounters: (_obj, { root }) => {
    return db.imagingStudies
      .findUnique({ where: { id: root?.id } })
      .Encounters();
  },
  Patients: (_obj, { root }) => {
    return db.imagingStudies.findUnique({ where: { id: root?.id } }).Patients();
  },
};
