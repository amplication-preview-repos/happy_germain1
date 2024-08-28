import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const TarotReadingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Cards" multiline source="cards" />
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Question" source="question" />
        <TextInput label="Result" multiline source="result" />
        <TextInput label="SpreadType" source="spreadType" />
      </SimpleForm>
    </Create>
  );
};
