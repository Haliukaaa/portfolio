import Button from "./Button";

export default function ButtonsArray({ buttons }) {
  let buttonObj = { buttons };
  let buttonArr = Object.values(buttonObj);
  let buttonStr = buttonArr.flat();

  return (
    <div className="flex gap-2 flex-wrap">
        {buttonStr.map((el) => (
        <Button buttonText={el}/>
    ))}
    </div>
  );
}
