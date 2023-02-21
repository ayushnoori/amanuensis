import type {
  QueryResolvers,
  MutationResolvers,
  DevicesRelationResolvers,
} from 'types/graphql';

import { db } from 'src/lib/db';

export const device: QueryResolvers['device'] = () => {
  return db.devices.findMany();
};

export const devices: QueryResolvers['devices'] = ({ id }) => {
  return db.devices.findUnique({
    where: { id },
  });
};

export const createDevices: MutationResolvers['createDevices'] = ({
  input,
}) => {
  return db.devices.create({
    data: input,
  });
};

export const updateDevices: MutationResolvers['updateDevices'] = ({
  id,
  input,
}) => {
  return db.devices.update({
    data: input,
    where: { id },
  });
};

export const deleteDevices: MutationResolvers['deleteDevices'] = ({ id }) => {
  return db.devices.delete({
    where: { id },
  });
};

export const Devices: DevicesRelationResolvers = {
  Encounters: (_obj, { root }) => {
    return db.devices.findUnique({ where: { id: root?.id } }).Encounters();
  },
  Patients: (_obj, { root }) => {
    return db.devices.findUnique({ where: { id: root?.id } }).Patients();
  },
};
