interface ICategory {
  id: number;
  title: string;
}

interface IProduct {
  id: number;
  title: string;
  price: number;
  category: ICategory;
  description?: string;
}

const product: IProduct = {
  category: {
    id: 10,
    title: "Flokkur",
  },
  id: 1,
  price: 100,
  title: "Prufuvara",
};

interface IProps {
  onClick: (e: any) => void;
  onUpdated: () => boolean;
}
