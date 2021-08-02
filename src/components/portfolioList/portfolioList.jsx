import "./portfolioList.scss";

const PortfolioList = ({ title, id, active, setSelected }) => {
  //   console.log(title);
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
};

export default PortfolioList;
