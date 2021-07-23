import { useState } from "react";
export default function NumericInput({ handlePercent, defaultPrecent }) {
  const [count, setCount] = useState(50);
  const [value, setValue] = useState(5);
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const handleChangeNumber = (e) => {
    const { value } = e.target;
    const result = numbers.filter((num) => num === parseInt(value));
    const number = result[0] || 5;
    if (number) {
      setValue(number);
    }
  };
  const handleIncrease = () => {
    if (count < 100 && count + value <= 100) {
      setCount(count + value);
      handlePercent(count + value);
    } else {
      setCount(100);
      handlePercent(100);
    }
  };
  const handleDecrease = () => {
    if (count > 0 && count - value >= 0) {
      setCount(count - value);
      handlePercent(count - value);
    } else {
      setCount(0);
      handlePercent(0);
    }
  };

  return (
    <section className="numberic-wrapper">
      <p>
        مقدار اقزایش یا کاهش را می توانید در فیلد مقابل تعیین کنید (مقدار پیش
        فرض 5 است) :
        <section>
          <input
            maxLength={1}
            type="text"
            pattern="[1-9]"
            placeholder="مقدار"
            onChange={handleChangeNumber}
            disabled={defaultPrecent}
          />
        </section>
      </p>
      <section className="counter">
        <button disabled={defaultPrecent} onClick={handleIncrease}>
          +
        </button>
        <strong>{count}</strong>
        <button disabled={defaultPrecent} onClick={handleDecrease}>
          -
        </button>
      </section>
    </section>
  );
}
