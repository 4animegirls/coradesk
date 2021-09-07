  
export class HttpError extends Error {
  constructor(networkObj: any) {
      const { UserMessage } = networkObj;
      super(UserMessage);

  }
};