import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import {
  CardWrapper,
  CardBodyContainer,
  FullDetailContainer,
} from "./CardStyle";
import CardHeaderComponent from "../CardHeaderComponent";
import SingleRowTable from "../TableComponent";
import pick from "lodash/pick";
import CardFooterSection from "../CardFooterSection/CardFooterSection";

const CardComponent = () => {
  const cardData = useContext(DataContext);
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
            data={pick(data, ["reqReference", "reqCategory", "reqStatus"])}
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
        <CardFooterSection
          privateNote={data.privateNote}
          attachments={data.attachments}
        />
      </CardWrapper>
    );
  });
};
export default CardComponent;
