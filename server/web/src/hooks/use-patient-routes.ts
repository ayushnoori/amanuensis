import { routes, useParams } from '@redwoodjs/router';

export default function usePatientRoutes() {
  const { userId } = useParams();

  const handler = {
    get(target, prop) {
      const value = target[prop];
      if (value instanceof Function) {
        return (params) => value({ userId, ...params });
      }
      return value;
    },
  };

  const proxyRoutes = new Proxy(routes, handler) as typeof routes;
  return proxyRoutes;
}
