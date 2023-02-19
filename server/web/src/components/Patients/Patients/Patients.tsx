import {
  Box,
  Button,
  Container,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import { routes, navigate, useParams } from '@redwoodjs/router';
import { useMutation, useQuery } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import BaseModelView from 'src/components/BaseModelView/BaseModelView';
import {
  formatEnum,
  jsonDisplay,
  timeTag,
  checkboxInputTag,
} from 'src/utils/display-functions';

const DELETE_PATIENTS_MUTATION = gql`
  mutation DeletePatientsMutation($id: String!) {
    deletePatients(id: $id) {
      id
    }
  }
`;

const SCHEDULE_APPOINTMENT_MUTATION = gql`
  mutation ScheduleAppointmentMutation($userId: String!) {
    scheduleAppointment(userId: $userId)
  }
`;

const QUERY = gql`
  query GetSummary($userId: String!) {
    patientSummary(id: $userId)
  }
`;

export default function Patients({ patients }) {
  const routeParams = useParams();

  const [deletePatients] = useMutation(DELETE_PATIENTS_MUTATION, {
    onCompleted: () => {
      toast.success('Patients deleted');
      navigate(routes.patient());
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const [scheduleAppointment] = useMutation(SCHEDULE_APPOINTMENT_MUTATION, {
    onCompleted: () => {
      toast.success(
        'Appointment scheduled! Check the tab on the left to answer out pre-visit questions',
      );
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete patients ' + id + '?')) {
      deletePatients({ variables: { id } });
    }
  };

  const data = [
    {
      propertyId: 'id',
      label: 'Id',
      value: patients.id,
    },
    {
      propertyId: 'birthDate',
      label: 'Birth date',
      value: timeTag(patients.birthDate),
    },
    {
      propertyId: 'deathDate',
      label: 'Death date',
      value: checkboxInputTag(patients.deathDate),
    },
    {
      propertyId: 'ssn',
      label: 'Ssn',
      value: patients.ssn,
    },
    {
      propertyId: 'drivers',
      label: 'Drivers',
      value: patients.drivers,
    },
    {
      propertyId: 'passport',
      label: 'Passport',
      value: patients.passport,
    },
    {
      propertyId: 'prefix',
      label: 'Prefix',
      value: patients.prefix,
    },
    {
      propertyId: 'first',
      label: 'First',
      value: patients.first,
    },
    {
      propertyId: 'last',
      label: 'Last',
      value: patients.last,
    },
    {
      propertyId: 'suffix',
      label: 'Suffix',
      value: checkboxInputTag(patients.suffix),
    },
    {
      propertyId: 'maiden',
      label: 'Maiden',
      value: patients.maiden,
    },
    {
      propertyId: 'marital',
      label: 'Marital',
      value: patients.marital,
    },
    {
      propertyId: 'race',
      label: 'Race',
      value: patients.race,
    },
    {
      propertyId: 'ethnicity',
      label: 'Ethnicity',
      value: patients.ethnicity,
    },
    {
      propertyId: 'gender',
      label: 'Gender',
      value: patients.gender,
    },
    {
      propertyId: 'birthPlace',
      label: 'Birth place',
      value: patients.birthPlace,
    },
    {
      propertyId: 'address',
      label: 'Address',
      value: patients.address,
    },
    {
      propertyId: 'city',
      label: 'City',
      value: patients.city,
    },
    {
      propertyId: 'state',
      label: 'State',
      value: patients.state,
    },
    {
      propertyId: 'county',
      label: 'County',
      value: patients.county,
    },
    {
      propertyId: 'fips',
      label: 'Fips',
      value: patients.fips,
    },
    {
      propertyId: 'zip',
      label: 'Zip',
      value: patients.zip,
    },
    {
      propertyId: 'lat',
      label: 'Lat',
      value: patients.lat,
    },
    {
      propertyId: 'lon',
      label: 'Lon',
      value: patients.lon,
    },
    {
      propertyId: 'healthcareExpenses',
      label: 'Healthcare expenses',
      value: patients.healthcareExpenses,
    },
    {
      propertyId: 'healthcareCoverage',
      label: 'Healthcare coverage',
      value: patients.healthcareCoverage,
    },
    {
      propertyId: 'income',
      label: 'Income',
      value: patients.income,
    },
  ];



  const { loading, error, data: d } = useQuery(QUERY, {
    variables: { userId: routeParams.id },
  });

  console.log(d);

  const isDoctor = !!routeParams.id;

  return (
    <Box as="section" bg="bg-surface">
      <Container py={{ base: '4', md: '8' }}>
        <Stack spacing="16">
          <Tabs size="lg" variant="with-line">
            <TabList>
              <Tab>{isDoctor ? 'Summary' : 'Schedule'}</Tab>
              <Tab>Bio Data</Tab>
              <Tab>Previous Encounters</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                {isDoctor ? (
                  <p>{new String(d.patientSummary)}</p>
                ) : (
                  <Button
                    onClick={() =>
                      scheduleAppointment({
                        variables: { userId: routeParams.userId },
                      })
                    }
                    variant="primary"
                  >
                    Schedule Appointment
                  </Button>
                )}
              </TabPanel>
              <TabPanel>
                <BaseModelView
                  title="Patients Detail"
                  subtitle={'ID: ' + patients.id}
                  data={data}
                  onDelete={() => onDeleteClick(patients.id)}
                  onEdit={() =>
                    navigate(routes.editPatients({ id: patients.id }))
                  }
                />
              </TabPanel>
              <TabPanel>
                <p>IN THE FUTURE!!!!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
      </Container>
    </Box>
  );
}
