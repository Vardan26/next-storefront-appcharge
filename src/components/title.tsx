type Props = { title: string };

export const Title = ({ title }: Props) => {
  return <h2 className="text-3xl font-bold ">{title}</h2>;
};
