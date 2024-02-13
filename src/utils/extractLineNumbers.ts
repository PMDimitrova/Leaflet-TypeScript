import { LineData } from '../_constants/interfaces';

const extractLineNumbers = (props: { lineData: LineData[] }) => {
  const { lineData } = props;
  const result: string[] = [];

  if (lineData.length) {
    lineData.map(line => result.push(line.line));
  }
  return result;
};

export default extractLineNumbers;
