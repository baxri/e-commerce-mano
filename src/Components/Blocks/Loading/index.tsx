import { Column, Spinner } from "Components/UI";

function Loading() {
  return (
    <Column backgroundColor="white" justifyCenter alignCenter stretch>
      <Spinner size={20} />
    </Column>
  );
}

export default Loading;
