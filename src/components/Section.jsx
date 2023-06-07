import propTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  );
};

Section.propTypes = {
  title: propTypes.string,
  children: propTypes.array,
};

export default Section;
