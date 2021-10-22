const HeadingOne = ({ children }) => {
  return (
    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
      {children}
    </h1>
  );
}

export default HeadingOne;