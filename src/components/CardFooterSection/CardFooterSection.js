import { CardFooterWraper } from "./CardFooterStyle";
const CardFooterSection = ({ privateNote, attachments }) => {
  console.log("privateNote, attachments", privateNote, attachments);
  return (
    <CardFooterWraper>
      {attachments && attachments.hasAttachment && (
        <div>
          <a href="/">
            <i className="fa fa-paperclip" aria-hidden="true" />
          </a>
          <span>Manage Attachments</span>
        </div>
      )}
      {privateNote && privateNote.hasPrivateNote && (
        <div>
          <i className="fa fa-file-o" aria-hidden="true" />
          <span>Private request</span> This request can only be seen by you.
        </div>
      )}
    </CardFooterWraper>
  );
};

export default CardFooterSection;
