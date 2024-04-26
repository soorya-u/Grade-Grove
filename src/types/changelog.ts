export type Dev = {
  name: string;
  imgPath: string;
  github: string;
};

export type Contributor = Dev & { description: string | JSX.Element };

export type Commit = {
  name: string;
  branchLink: string;
  date: Date;
  devs: Contributor[];
};
