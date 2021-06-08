import uuid from "uuid/dist/v1";
const Characters = ({ items, isloading }) => {
  return (
    <>
      <div>
        isloading ? <h1>loading</h1>
        <section>
          {items.map((items) => (
            <div>
              <h1 key={items.char_id}>{items.name}</h1>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Characters;
