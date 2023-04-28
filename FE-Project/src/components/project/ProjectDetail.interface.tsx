export interface Detail {
    id: number;
    category: string;
    name: string;
    title: string;
    registered_date: string;
    stack: string[];
    total: number;
    gathered: number;
    view: number;
    comment: number;
    frontend_total: number;
    frontend_gathered: number;
    backend_total: number;
    backend_gathered: number;
    onoff: string;
    when_where: string;
    contact: string;
    free: string;
    deadline : string;
    purpose : string;
    duration : string;
    schedule : string;
    way: string;
  }
  
  export interface ProjectDetailProps{
      detail: Detail;
  }