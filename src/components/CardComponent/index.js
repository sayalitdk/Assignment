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
        <Card>
          <Card.Header>
            <CardHeaderComponent
              amount={data.amount}
              reqName={data.reqName}
              accountNo={data.accountNo}
              accountName={data.accountName}
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
            />
            <CardButtonComponent
              handleClick={linkDetailsClicked}
              text="Full details"
              btnClsName="fulldetails"
            />
          </Card.Body>
        </Card>
      </CardWrapper>
    );
  });
};
export default CardComponent;
