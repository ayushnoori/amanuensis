import { createColumnHelper } from '@tanstack/react-table';
import { Patients } from 'types/graphql';

import { navigate, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import BaseModelTable from 'src/components/BaseModelTable/BaseModelTable';
import { QUERY } from 'src/components/Patients/PatientCell';
import {
  formatEnum,
  truncate,
  jsonTruncate,
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

export default function PatientList({ patient }) {
  const [deletePatients] = useMutation(DELETE_PATIENTS_MUTATION, {
    onCompleted: () => {
      toast.success('Patients deleted');
    },
    onError: (error) => {
      toast.error(error.message);
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete patients ' + id + '?')) {
      deletePatients({ variables: { id } });
    }
  };

  const columnHelper = createColumnHelper<Patients>();

  const columns = [
    
    columnHelper.accessor('id', {
      header: 'Id',
      cell: (id) => truncate(id.getValue()),
    }),
    
    columnHelper.accessor('birthDate', {
      header: 'Birth date',
      cell: (birthDate) => timeTag(birthDate.getValue()),
    }),
    
    columnHelper.accessor('deathDate', {
      header: 'Death date',
      cell: (deathDate) => checkboxInputTag(deathDate.getValue()),
    }),
    
    columnHelper.accessor('ssn', {
      header: 'Ssn',
      cell: (ssn) => truncate(ssn.getValue()),
    }),
    
    columnHelper.accessor('drivers', {
      header: 'Drivers',
      cell: (drivers) => truncate(drivers.getValue()),
    }),
    
    columnHelper.accessor('passport', {
      header: 'Passport',
      cell: (passport) => truncate(passport.getValue()),
    }),
    
    columnHelper.accessor('prefix', {
      header: 'Prefix',
      cell: (prefix) => truncate(prefix.getValue()),
    }),
    
    columnHelper.accessor('first', {
      header: 'First',
      cell: (first) => truncate(first.getValue()),
    }),
    
    columnHelper.accessor('last', {
      header: 'Last',
      cell: (last) => truncate(last.getValue()),
    }),
    
    columnHelper.accessor('suffix', {
      header: 'Suffix',
      cell: (suffix) => checkboxInputTag(suffix.getValue()),
    }),
    
    columnHelper.accessor('maiden', {
      header: 'Maiden',
      cell: (maiden) => truncate(maiden.getValue()),
    }),
    
    columnHelper.accessor('marital', {
      header: 'Marital',
      cell: (marital) => truncate(marital.getValue()),
    }),
    
    columnHelper.accessor('race', {
      header: 'Race',
      cell: (race) => truncate(race.getValue()),
    }),
    
    columnHelper.accessor('ethnicity', {
      header: 'Ethnicity',
      cell: (ethnicity) => truncate(ethnicity.getValue()),
    }),
    
    columnHelper.accessor('gender', {
      header: 'Gender',
      cell: (gender) => truncate(gender.getValue()),
    }),
    
    columnHelper.accessor('birthPlace', {
      header: 'Birth place',
      cell: (birthPlace) => truncate(birthPlace.getValue()),
    }),
    
    columnHelper.accessor('address', {
      header: 'Address',
      cell: (address) => truncate(address.getValue()),
    }),
    
    columnHelper.accessor('city', {
      header: 'City',
      cell: (city) => truncate(city.getValue()),
    }),
    
    columnHelper.accessor('state', {
      header: 'State',
      cell: (state) => truncate(state.getValue()),
    }),
    
    columnHelper.accessor('county', {
      header: 'County',
      cell: (county) => truncate(county.getValue()),
    }),
    
    columnHelper.accessor('fips', {
      header: 'Fips',
      cell: (fips) => truncate(fips.getValue()),
    }),
    
    columnHelper.accessor('zip', {
      header: 'Zip',
      cell: (zip) => truncate(zip.getValue()),
    }),
    
    columnHelper.accessor('lat', {
      header: 'Lat',
      cell: (lat) => truncate(lat.getValue()),
    }),
    
    columnHelper.accessor('lon', {
      header: 'Lon',
      cell: (lon) => truncate(lon.getValue()),
    }),
    
    columnHelper.accessor('healthcareExpenses', {
      header: 'Healthcare expenses',
      cell: (healthcareExpenses) => truncate(healthcareExpenses.getValue()),
    }),
    
    columnHelper.accessor('healthcareCoverage', {
      header: 'Healthcare coverage',
      cell: (healthcareCoverage) => truncate(healthcareCoverage.getValue()),
    }),
    
    columnHelper.accessor('income', {
      header: 'Income',
      cell: (income) => truncate(income.getValue()),
    }),
    
  ];

  return (
    <BaseModelTable
      title="Patient"
      columns={columns}
      data={patient}
      onRowView={(row) => navigate(routes.patients({ id: row.getValue('id') }))}
      onRowEdit={(row) => navigate(routes.editPatients({ id: row.getValue('id') }))}
      onRowDelete={(row) => onDeleteClick(row.getValue('id'))}
    />
  );
}
