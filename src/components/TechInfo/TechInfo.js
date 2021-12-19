import PropTypes from 'prop-types';
const TechInfo = ({ message }) => {
    return <h2>{message}</h2>;
};

TechInfo.propTypes = {
    message: PropTypes.string.isRequired,
};

export default TechInfo;
