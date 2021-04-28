import { SingleRowWrapper } from "./SingleRowStyle";

const SingleRowTable = (props) => {
  return (
    <SingleRowWrapper>
      <table data-testid={props.testid}>
        <thead>
          <tr>
            {props.reqHeaderData.map((headerData, index) => {
              return <th key={index}>{headerData}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {props.reqData.map((rowData, index) => {
              return (
                <td key={index}>{rowData ? rowData : "Data Not Found"}</td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </SingleRowWrapper>
  );
};
export default SingleRowTable;
