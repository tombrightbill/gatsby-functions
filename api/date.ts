import { NowRequest, NowResponse } from '@now/node';

export default (_req: NowRequest, res: NowResponse) => {
  const date = new Date().toString();
  const github = new Request({headers: {'content-type':'application/json'}}, 'https://api.github.com/search/issues?q=windows+label:bug+language:python+state:open&sort=created&order=asc')
  res.status(200).send(github);
};
