interface ErrorProps {
  error: string;
}

const Error = ({ error }: ErrorProps) => {
  return <h2>{error}</h2>;
};

export default Error;
