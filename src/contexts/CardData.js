const CardData = [
  {
    id: "123489",
    imageSrc: "speaker-component-1124",
    amount: 1000.6789658,
    accountNo: "3254353498654646",
    accountName: "ABC Company",
    reqName: "Cancel / recall payment",
    reqReference: "SET29383ABCH",
    reqCategory: "Payment",
    reqStatus: "Pending authorisation",
    privateNote: {
      hasPrivateNote: true,
      privateNoteText: "This request can only be seen by you.",
    },
    attachments: {
      hasAttachment: false,
    },
  },
  {
    id: "123490",
    imageSrc: "speaker-component-1530",
    amount: 2000,
    accountNo: "3254353498654789",
    accountName: "XYZ Company",
    reqName: "Complete Payment",
    reqReference: "SET78956ABDE",
    reqCategory: "Payment",
    reqStatus: "In Progress",
    privateNote: {
      hasPrivateNote: false,
    },
    attachments: {
      hasAttachment: true,
      attachmentURL: "/",
    },
  },
  {
    id: "123491",
    imageSrc: "speaker-component-10803",
    amount: 10000,
    accountNo: "3254353498654123",
    accountName: "LMN Company",
    reqName: "Cancel / recall payment",
    reqReference: "SET14792HJER",
    reqCategory: "Payment",
    reqStatus: "Completed",
    privateNote: {
      hasPrivateNote: false,
    },
    attachments: {
      hasAttachment: false,
    },
  },
  {
    id: "123492",
    imageSrc: "speaker-component-1535",
    amount: 4000,
    accountNo: "3254353498609789",
    accountName: "LMN Company",
    reqName: "Complete Payment",
    reqReference: "SET78956MNBV",
    reqCategory: "Payment",
    reqStatus: "In Progress",
    privateNote: {
      hasPrivateNote: true,
      privateNoteText: "This request can only be seen by you.",
    },
    attachments: {
      hasAttachment: true,
      attachmentURL: "/",
    },
  },
];

export default CardData;
