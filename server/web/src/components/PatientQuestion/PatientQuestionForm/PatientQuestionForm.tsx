import { Divider, Flex, Stack } from '@chakra-ui/react';

import { Form } from '@redwoodjs/forms';

import CrEnumField from 'src/components/form/CrEnumField/CrEnumField';
import CrFormError from 'src/components/form/CrFormError/CrFormError';
import CrSubmit from 'src/components/form/CrSubmit/CrSubmit';
import FormFieldWrapper from 'src/components/form/FormFieldWrapper/FormFieldWrapper';
import {
  CrTextField,
  CrDatetimeLocalField,
  CrCheckboxField,
} from 'src/components/form/input-fields';


const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '');
  }
};


export default function PatientQuestionForm(props) {
  const onSubmit = (data) => {
    
      
      
    
      
      
    
      
      
    
      
      
    
      
      
    
      
      
    
    props.onSave(data, props?.patientQuestion?.id);
  };

  return (
    <Form onSubmit={onSubmit} error={props.error}>
      <Stack spacing="5">
        <Stack spacing="5" px={{ base: '4', md: '6' }}>
          <CrFormError error={props.error} />
          
            
              <FormFieldWrapper
                name="patientId"
                label="Patient id"
                fieldType={CrTextField}
                defaultValue={props.patientQuestion?.patientId}
                validation={{ required: true }}
              />
            
          
            
              <FormFieldWrapper
                name="question"
                label="Question"
                fieldType={CrTextField}
                defaultValue={props.patientQuestion?.question}
                validation={{ required: true }}
              />
            
          
            
              <FormFieldWrapper
                name="answer"
                label="Answer"
                fieldType={CrTextField}
                defaultValue={props.patientQuestion?.answer}
                
              />
            
          
            
              <FormFieldWrapper
                name="askedAt"
                label="Asked at"
                fieldType={CrDatetimeLocalField}
                defaultValue={formatDatetime(props.patientQuestion?.askedAt)}
                validation={{ required: true }}
              />
            
          
            
              <FormFieldWrapper
                name="answeredAt"
                label="Answered at"
                fieldType={CrDatetimeLocalField}
                defaultValue={formatDatetime(props.patientQuestion?.answeredAt)}
                validation={{ required: true }}
              />
            
          
            
              <FormFieldWrapper
                name="pertient"
                label="Pertient"
                fieldType={CrCheckboxField}
                defaultChecked={props.patientQuestion?.pertient}
                
              />
            
          
        </Stack>
        <Divider />
        <Flex direction="row-reverse" px={{ base: '4', md: '6' }}>
          <CrSubmit disabled={props.loading} colorScheme="blue">
            Save
          </CrSubmit>
        </Flex>
      </Stack>
    </Form>
  );
}
