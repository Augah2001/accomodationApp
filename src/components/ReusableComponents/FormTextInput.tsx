import { Box, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";

interface Props {
  id: string;
  label: string;
  value: string;
  type: string;
  onChange: ({ currentTarget }: React.ChangeEvent<HTMLInputElement>) => void;
  errors: { [key: string]: string };
}

const FormTextInput = ({ id, label, value, type, onChange, errors }: Props) => {
  return (
    <Box>
      <FormControl id={id}>
        <FormLabel>{label}</FormLabel>
        <Input
          type={type}
          value={value}
          onChange={(e) => {
            onChange(e);
          }}
        />
      </FormControl>
      {errors[id] && (
        <Box>
          <Text color="red.300">{errors[id]}</Text>
        </Box>
      )}
    </Box>
  );
};

export default FormTextInput;
