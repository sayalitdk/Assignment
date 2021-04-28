import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { CardWrapper } from "./CardStyle";
import { Card } from "react-bootstrap";
import CardHeaderComponent from "../CardHeaderComponent";
import SingleRowTable from "../TableComponent";
import CardButtonComponent from "../ButtonComponent";

const CardComponent = () => {
  const cardData = useContext(DataContext);
  const linkDetailsClicked = () =>
    console.log("linkDetailsClicked function called");
  return cardData.map((data, index) => {
    return (
      <CardWrapper key={index}>
        <Card data-testid={"cardCmp" + index}>
          <Card.Header>
            <CardHeaderComponent
              amount={data.amount}
              reqName={data.reqName}
              accountNo={data.accountNo}
              accountName={data.accountName}
              testid={index}
            />
          </Card.Header>
          <Card.Body>
            <SingleRowTable
              reqData={[data.reqReference, data.reqCategory, data.reqStatus]}
              reqHeaderData={[
                "Request References",
                "Category",
                "Request Status",
              ]}
              testid={"tableCmp" + index}
            />
            <CardButtonComponent
              handleClick={linkDetailsClicked}
              text="Full details"
              btnClsName="fulldetails"
              testid={"fulldetails" + index}
            />
          </Card.Body>
        </Card>
      </CardWrapper>
    );
  });
};
export default CardComponent;
