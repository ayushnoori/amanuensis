import { useParams } from '@redwoodjs/router';
import { useQuery } from '@redwoodjs/web';
import { Skeleton } from '@chakra-ui/react';
import { patientSummary } from '../../../../../api/src/services/patient/patient';

const QUERY = gql`
  query GetSummary($userId: String!) {
    patientSummary(id: $userId)
  }
`;

export default function IntelligentSummary() {
  const routeParams = useParams();

  const { loading, error, data } = useQuery(QUERY, {
    variables: { userId: routeParams.id },
  });

  console.log(data);
  return loading ? <Skeleton height="4em" /> : data?.patientSummary?.split('\n').map((t) => (<p>{t}<br></br></p>));
}
