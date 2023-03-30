const UsedIngredients = ({ usedIngredients }) => {
  return (
    <>
      {usedIngredients.map((ing) => {
        return (
          <span key={ing.id}>
            <span>Name : {ing.name}</span>
            <div></div>
            <span>
              Quantity : {ing.amount} {ing.unit}
            </span>
          </span>
        );
      })}
    </>
  );
};

export default UsedIngredients;
