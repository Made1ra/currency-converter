type ResultProps = {
  result: number;
};

function Result({ result }: ResultProps) {
  return <p>The result is {result}</p>;
}

export default Result;
