import Error from "Components/Blocks/Error";
import Loading from "Components/Blocks/Loading";
import React, { ReactElement } from "react";

export default function MainLayout({
  children,
  isLoading,
  error,
  refetch,
  data,
}: {
  children: (data: any) => ReactElement;
  isLoading: boolean;
  error: any;
  refetch: () => void;
  data: any;
}) {
  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <Error
        message={(error as { message: string })?.message}
        refetch={refetch}
      />
    );
  }
  return children(data.data);
}
