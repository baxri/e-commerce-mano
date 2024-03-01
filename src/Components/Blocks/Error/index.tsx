import { Button, Column, Text } from "Components/UI";

function Error({ message, refetch }: { message: string; refetch: () => void }) {
  return (
    <Column backgroundColor="white" justifyCenter alignCenter stretch>
      <Text color="gray">{message}</Text>
      <Button title="Retry" onPress={refetch} link />
    </Column>
  );
}

export default Error;
