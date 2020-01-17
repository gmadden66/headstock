export interface Track {
    id: number;
    name: string;
    status: string;
    bounceLink: string;
    sessionLink: string;
    version: number;
}

export interface Version {
    id: number;
    version: number;
    comment: string;
    parent: number;
    dateAdded: string;
    user: string;
    bounceLink: string;
    sessionLink: string;
  }