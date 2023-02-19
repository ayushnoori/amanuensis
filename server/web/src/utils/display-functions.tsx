import { Checkbox, Tag, TagLabel, Wrap, WrapItem } from '@chakra-ui/react';
import humanize from 'humanize-string';

const MAX_STRING_LENGTH = 150;

export const formatEnum = (values: string | string[] | null | undefined) => {
  const valueArray = Array.isArray(values) ? values : [values];
  return (
    <Wrap>
      {valueArray.map((value) => (
        <WrapItem key={value}>
          <Tag colorScheme="blue" borderRadius="full">
            <TagLabel>{humanize(value)}</TagLabel>
          </Tag>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export const truncate = (text) => {
  let output = text;
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...';
  }
  return output;
};

export const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2));
};

export const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  );
};

export const checkboxInputTag = (checked: boolean) => {
  return <Checkbox isChecked={checked} disabled />;
};

export const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  );
};
