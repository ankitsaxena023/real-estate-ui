import "./list.scss";
import { listData } from "../../lib/dummydata";
import Card from "../../components/card/Card";

const List = () => {
  return (
    <div className="list">
      {listData.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
