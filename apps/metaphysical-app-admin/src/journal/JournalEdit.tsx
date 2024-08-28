import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const JournalEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Content" multiline source="content" />
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
