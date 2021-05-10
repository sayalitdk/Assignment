import { SingleRowWrapper } from "./SingleRowStyle";

const SingleRowTable = (props) => {
  return (
    <SingleRowWrapper>
      <table data-testid={props.testid}>
        <thead>
          <tr>
            {Object.keys(props.data).map((headerData, index) => {
              return (
                <th key={index}>{headerData.replace("req", "Request ")}</th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.entries(props.data).map(([attributeCode, items]) => {
              return (
                <td key={attributeCode}>
                  {items
                    ? attributeCode == "reqCategory"
                      ? [
                          <i
                            class="fa fa-exclamation-circle"
                            aria-hidden="true"
                          />,
                          items,
                        ]
                      : items
                    : "Data Not Found"}
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </SingleRowWrapper>
  );
};
export default SingleRowTable;
