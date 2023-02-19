import { routes, navigate } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import BaseModelView from 'src/components/BaseModelView/BaseModelView';
import {
  formatEnum,
  jsonDisplay,
  timeTag,
  checkboxInputTag,
} from 'src/utils/display-functions';

const DELETE_PATIENT_QUESTION_MUTATION = gql`
  mutation DeletePatientQuestionMutation($id: String!) {
    deletePatientQuestion(id: $id) {
      id
    }
  }
`;

export default function PatientQuestion({ patientQuestion }) {
  const [deletePatientQuestion] = useMutation(DELETE_PATIENT_QUESTION_MUTATION, {
    onCompleted: () => {
      toast.success('PatientQuestion deleted');
      navigate(routes.patientQuestions());
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete patientQuestion ' + id + '?')) {
      deletePatientQuestion({ variables: { id } });
    }
  };

  const data = [
    
      {
        propertyId: 'id',
        label: 'Id',
        
          value: patientQuestion.id,
        
      },
    
      {
        propertyId: 'patientId',
        label: 'Patient id',
        
          value: patientQuestion.patientId,
        
      },
    
      {
        propertyId: 'question',
        label: 'Question',
        
          value: patientQuestion.question,
        
      },
    
      {
        propertyId: 'answer',
        label: 'Answer',
        
          value: patientQuestion.answer,
        
      },
    
      {
        propertyId: 'askedAt',
        label: 'Asked at',
        
          value: timeTag(patientQuestion.askedAt),
        
      },
    
      {
        propertyId: 'answeredAt',
        label: 'Answered at',
        
          value: timeTag(patientQuestion.answeredAt),
        
      },
    
      {
        propertyId: 'pertient',
        label: 'Pertient',
        
          value: checkboxInputTag(patientQuestion.pertient),
        
      },
    
  ];

  return (
    <BaseModelView
      title="PatientQuestion Detail"
      subtitle={'ID: ' + patientQuestion.id}
      data={data}
      onDelete={() => onDeleteClick(patientQuestion.id)}
      onEdit={() => navigate(routes.editPatientQuestion({ id: patientQuestion.id }))}
    />
  );
}
