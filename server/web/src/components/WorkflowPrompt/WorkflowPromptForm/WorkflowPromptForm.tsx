import { Divider, Flex, Stack } from '@chakra-ui/react';

import { Form } from '@redwoodjs/forms';

import CrEnumField from 'src/components/form/CrEnumField/CrEnumField';
import CrFormError from 'src/components/form/CrFormError/CrFormError';
import CrSubmit from 'src/components/form/CrSubmit/CrSubmit';
import FormFieldWrapper from 'src/components/form/FormFieldWrapper/FormFieldWrapper';
import {
  CrTextField,
} from 'src/components/form/input-fields';



export default function WorkflowPromptForm(props) {
  const onSubmit = (data) => {
    
      
      
    
      
      
    
    props.onSave(data, props?.workflowPrompt?.id);
  };

  return (
    <Form onSubmit={onSubmit} error={props.error}>
      <Stack spacing="5">
        <Stack spacing="5" px={{ base: '4', md: '6' }}>
          <CrFormError error={props.error} />
          
            
              <FormFieldWrapper
                name="name"
                label="Name"
                fieldType={CrTextField}
                defaultValue={props.workflowPrompt?.name}
                validation={{ required: true }}
              />
            
          
            
              <FormFieldWrapper
                name="prompt"
                label="Prompt"
                fieldType={CrTextField}
                defaultValue={props.workflowPrompt?.prompt}
                validation={{ required: true }}
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
