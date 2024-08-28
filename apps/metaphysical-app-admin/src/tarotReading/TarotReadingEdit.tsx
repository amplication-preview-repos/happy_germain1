import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const TarotReadingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Cards" multiline source="cards" />
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Question" source="question" />
        <TextInput label="Result" multiline source="result" />
        <TextInput label="SpreadType" source="spreadType" />
      </SimpleForm>
    </Edit>
  );
};
