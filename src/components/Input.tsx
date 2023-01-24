import { Textarea } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  val: (value: string) => void;
}

const Input = (props: Props) => {
  const [value, setValue] = useState("# Markdown\n## Markdown\n ### Markdown\n #### Markdown");
  props.val(value);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    props.val(newValue);
    console.log(newValue);
  };

  return (
    <>
      <Textarea
        value={value}
        onChange={handleChange}
        h={{ base: "200px", lg: "600px" }}
        placeholder="Write your markdown here..."
        borderColor="blue.900"
        rounded="lg"
        boxShadow="2xl"
      />
    </>
  );
};

export default Input;
