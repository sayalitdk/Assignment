import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import {
  CardWrapper,
  CardBodyContainer,
  FullDetailContainer,
} from "./CardStyle";
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
        <div data-testid={"cardCmp" + index}>
          <CardHeaderComponent
            amount={data.amount}
            reqName={data.reqName}
            accountNo={data.accountNo}
            accountName={data.accountName}
            testid={index}
          />
        </div>
        <CardBodyContainer>
          <SingleRowTable
            reqData={[data.reqReference, data.reqCategory, data.reqStatus]}
            reqHeaderData={["Request References", "Category", "Request Status"]}
            testid={"tableCmp" + index}
          />
          <FullDetailContainer>
            <a href="/">
              Full Details<i class="fa fa-chevron-down" aria-hidden="true"></i>
            </a>
          </FullDetailContainer>
        </CardBodyContainer>
      </CardWrapper>
    );
  });
};
export default CardComponent;
