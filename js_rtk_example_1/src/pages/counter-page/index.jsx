import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, setCounter } from "../../redux/counterSlice";
import { Button } from "react-bootstrap";

export default function CounterPage() {
  const counterState = useSelector((state) => state.counterState);
  const dispatch = useDispatch();

  // Buranın çıktısı:
  // >> APP COUNTER STATE {counter: 0}
  console.log(">> APP COUNTER STATE", counterState);

  return (
    <main>
      <h2>{counterState.counter}</h2>

      <Button
        variant="success"
        onClick={(event) => {
          const increaseResult = increase();

          console.log(">> increaseResult", increaseResult);
          // >> increaseResult {type: 'counterSlice/increase', payload: undefined}

          // Klasik reduxta dispatch objesini kendimzi oluşturup dispatch yapıyorduk. Ama RTK'da bu yöntem
          // tavsiye edilmez ve onun yerine action fonksiyonlarının kullanılması gerekir.
          dispatch(increase());

          // Redux toolkit kurallarına göre dispatch objesini kendimiz oluşturduğumuzda yine
          // aynı sonuca ulaşırız.
          dispatch({
            type: "counterSlice/increase",
            payload: undefined,
          });
        }}
      >
        Arttır
      </Button>

      <Button
        variant="info"
        onClick={(event) => {
          dispatch(decrease());
        }}
      >
        Azalt
      </Button>

      <Button
        variant="danger"
        onClick={(event) => {
          // payload parametresine primitive bir değer gönderiyoruz.
          dispatch(setCounter(0));
        }}
      >
        Sıfırla
      </Button>
    </main>
  );
}
