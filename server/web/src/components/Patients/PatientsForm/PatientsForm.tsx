import { Divider, Flex, Stack } from '@chakra-ui/react';

import { Form } from '@redwoodjs/forms';

import CrEnumField from 'src/components/form/CrEnumField/CrEnumField';
import CrFormError from 'src/components/form/CrFormError/CrFormError';
import CrSubmit from 'src/components/form/CrSubmit/CrSubmit';
import FormFieldWrapper from 'src/components/form/FormFieldWrapper/FormFieldWrapper';
import {
  CrDatetimeLocalField,
  CrCheckboxField,
  CrTextField,
  CrNumberField,
} from 'src/components/form/input-fields';


const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '');
  }
};


export default function PatientsForm(props) {
  const onSubmit = (data) => {
    
      
      
    
      
      
    
      
      
    
      
      
    
      
      
    
      
      
    
      
      
    
      
      
    
      
      
    
      
      
    
      
      
    
      
      
    
      
      
    
      
      
    
      
      
    
      
      
    
      
      
    
      
      
    
      
      
    
      
      
    
      
      
    
      
      
    
      
      
    
      
      
    
      
      
    
      
      
    
    props.onSave(data, props?.patients?.id);
  };

  return (
    <Form onSubmit={onSubmit} error={props.error}>
      <Stack spacing="5">
        <Stack spacing="5" px={{ base: '4', md: '6' }}>
          <CrFormError error={props.error} />
          
            
              <FormFieldWrapper
                name="birthDate"
                label="Birth date"
                fieldType={CrDatetimeLocalField}
                defaultValue={formatDatetime(props.patients?.birthDate)}
                
              />
            
          
            
              <FormFieldWrapper
                name="deathDate"
                label="Death date"
                fieldType={CrCheckboxField}
                defaultChecked={props.patients?.deathDate}
                
              />
            
          
            
              <FormFieldWrapper
                name="ssn"
                label="Ssn"
                fieldType={CrTextField}
                defaultValue={props.patients?.ssn}
                
              />
            
          
            
              <FormFieldWrapper
                name="drivers"
                label="Drivers"
                fieldType={CrTextField}
                defaultValue={props.patients?.drivers}
                
              />
            
          
            
              <FormFieldWrapper
                name="passport"
                label="Passport"
                fieldType={CrTextField}
                defaultValue={props.patients?.passport}
                
              />
            
          
            
              <FormFieldWrapper
                name="prefix"
                label="Prefix"
                fieldType={CrTextField}
                defaultValue={props.patients?.prefix}
                
              />
            
          
            
              <FormFieldWrapper
                name="first"
                label="First"
                fieldType={CrTextField}
                defaultValue={props.patients?.first}
                
              />
            
          
            
              <FormFieldWrapper
                name="last"
                label="Last"
                fieldType={CrTextField}
                defaultValue={props.patients?.last}
                
              />
            
          
            
              <FormFieldWrapper
                name="suffix"
                label="Suffix"
                fieldType={CrCheckboxField}
                defaultChecked={props.patients?.suffix}
                
              />
            
          
            
              <FormFieldWrapper
                name="maiden"
                label="Maiden"
                fieldType={CrTextField}
                defaultValue={props.patients?.maiden}
                
              />
            
          
            
              <FormFieldWrapper
                name="marital"
                label="Marital"
                fieldType={CrTextField}
                defaultValue={props.patients?.marital}
                
              />
            
          
            
              <FormFieldWrapper
                name="race"
                label="Race"
                fieldType={CrTextField}
                defaultValue={props.patients?.race}
                
              />
            
          
            
              <FormFieldWrapper
                name="ethnicity"
                label="Ethnicity"
                fieldType={CrTextField}
                defaultValue={props.patients?.ethnicity}
                
              />
            
          
            
              <FormFieldWrapper
                name="gender"
                label="Gender"
                fieldType={CrTextField}
                defaultValue={props.patients?.gender}
                
              />
            
          
            
              <FormFieldWrapper
                name="birthPlace"
                label="Birth place"
                fieldType={CrTextField}
                defaultValue={props.patients?.birthPlace}
                
              />
            
          
            
              <FormFieldWrapper
                name="address"
                label="Address"
                fieldType={CrTextField}
                defaultValue={props.patients?.address}
                
              />
            
          
            
              <FormFieldWrapper
                name="city"
                label="City"
                fieldType={CrTextField}
                defaultValue={props.patients?.city}
                
              />
            
          
            
              <FormFieldWrapper
                name="state"
                label="State"
                fieldType={CrTextField}
                defaultValue={props.patients?.state}
                
              />
            
          
            
              <FormFieldWrapper
                name="county"
                label="County"
                fieldType={CrTextField}
                defaultValue={props.patients?.county}
                
              />
            
          
            
              <FormFieldWrapper
                name="fips"
                label="Fips"
                fieldType={CrNumberField}
                defaultValue={props.patients?.fips}
                
              />
            
          
            
              <FormFieldWrapper
                name="zip"
                label="Zip"
                fieldType={CrNumberField}
                defaultValue={props.patients?.zip}
                
              />
            
          
            
              <FormFieldWrapper
                name="lat"
                label="Lat"
                fieldType={CrTextField}
                defaultValue={props.patients?.lat}
                validation={{ valueAsNumber: true }}
              />
            
          
            
              <FormFieldWrapper
                name="lon"
                label="Lon"
                fieldType={CrTextField}
                defaultValue={props.patients?.lon}
                validation={{ valueAsNumber: true }}
              />
            
          
            
              <FormFieldWrapper
                name="healthcareExpenses"
                label="Healthcare expenses"
                fieldType={CrTextField}
                defaultValue={props.patients?.healthcareExpenses}
                validation={{ valueAsNumber: true }}
              />
            
          
            
              <FormFieldWrapper
                name="healthcareCoverage"
                label="Healthcare coverage"
                fieldType={CrTextField}
                defaultValue={props.patients?.healthcareCoverage}
                validation={{ valueAsNumber: true }}
              />
            
          
            
              <FormFieldWrapper
                name="income"
                label="Income"
                fieldType={CrNumberField}
                defaultValue={props.patients?.income}
                
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
