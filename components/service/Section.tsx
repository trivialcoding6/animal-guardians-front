type Props = {
  children: React.ReactNode;
  [key: string]: string | React.ReactNode;
};

function Section({ children, ...others }: Props) {
  return (
    <section className="bg-white p-2" {...others}>
      {children}
    </section>
  );
}

export default Section;
