/**
 * Fonksiyonlardan fonksiyon dönebilir. Bu tarz işlemler için de yine type belirlemek gerekiyor.
 * Daha önceden bir fonksiyondan primitive veya advanced typelardan bir değer dönerdi.
 * Ama şimdi değer döndermek yerine bir fonksiyon döndereceğiz. Buna örnek olarak daha önceden
 * kullandığımız `useDispatch()` fonksiyonunu gösterebiliriz. Buradan dönen fonksiyonu
 * `dispatch` isimli değişkene aktarıp sonra bu değişkeni ihtiyaç duyduğumuz yerlerde
 * çağırıyorduk.
 *
 */

type ExampleFuncReturningFuncType = () => () => string;

const example_fn_1: ExampleFuncReturningFuncType = () => {
  console.log(">> Dış fonksiyon çağırıldı.");

  return () => {
    console.log(">> İç fonksiyon çağırıldı.");
    return "test";
  };
};

const result_1 = example_fn_1();
console.log("Result'ın değeri: ", result_1);

console.log("result fonksiyonun çağırılması:", result_1());

/**
 * 1. Örnek: `useDispatch()` hook'unu implement edin.
 */

/**
 * Hook kuralları:
 * 1- Hooklar componentler içerisinde kullanılmak zorunda.
 * 2- Hooklar şarta veya döngüye bağlı olarak çağırılamazlar, if, for, while gibi bloklar içerisinde çağırılamaz.
 * 3- Hooklar componentlerin içerisinde tanımlanmış başka bir fonksiyon içerisinde çağırılamazlar.
 */

type UseDispatchFnType = () => (action: { type: string; payload: any }) => void;

// gizli, yani dışarıdan erişilemediğini düşünelim.
const store = {};

const useDispatch: UseDispatchFnType = () => {
  console.log(">> useDispatch fonksiyonu çağırıldı.");

  return (action: { type: string; payload: any }) => {
    console.log(">> iç fonksiyon çağırıldı, action: ", action);

    // yukarıdaki store objesini sadece burada güncelleyelim.
  };
};

//const dispatch1 = useDispatch();
//const dispatch2 = useDispatch();
//const dispatch3 = useDispatch();
//const dispatch4 = useDispatch();

// burası örnek bir reactjs componenti olduğunu farzedelim.
function MainPage() {
  console.log("-----------------------------------------");
  console.log(">> Main Page başlıyor.");
  const dispatch = useDispatch();

  for (let i = 0; i < 2; i++) {
    dispatch({
      payload: i,
      type: "test",
    });
  }

  const onClick = () => {
    dispatch({
      type: "click",
      payload: { id: 1 },
    });
  };
}

MainPage();

console.log("-----------------------------------------");

/**
 * 2. Örnek: `useState()` hook'unu implement edin.
 */

/**
 * useState hook'unun nasıl kullanıldığını haturlayalım:
 * const [user, setUser] = useState();
 * console.log(user); // undefined
 *
 * const [counter, setCounter] = useState(0);
 *
 * const setterResult = setCounter(5);
 *
 * const counterState = useState(0);
 *
 * counterState[0]; // state
 * counterState[1](); // setter fonksiyon
 */

// tuple tanımlama örneği:
type ExampleTuple1 = [number, string, boolean, object];

type UseStateFuncType = (initialValue?: any) => [any, (newValue?: any) => void];

// Senaryo gereği bu değişkene sadece useState hook'undan erişilebildiğini düşünelim.
const hidden_state_container: any[] = [];

const useState: UseStateFuncType = (initialValue?: any) => {
  console.log(">> useState fonksiyonu çağırıldı, initialValue: ", initialValue);

  const index_no = hidden_state_container.length;
  hidden_state_container.push(initialValue);

  console.log(
    ">> hidden_state_container'a yeni değer eklendi: ",
    index_no,
    hidden_state_container
  );

  return [
    initialValue, // TODO Burayı uygun bir şekilde güncelle.
    (newValue?: any) => {
      hidden_state_container[index_no] = newValue;

      console.log(">> setter fonksiyon çağırıldı, newValue: ", newValue);

      console.log(
        ">> hidden_state_container son hali: ",
        hidden_state_container
      );
    },
  ];
};

const counterState = useState();
console.log(">> Counter state", counterState);

const [user, setUser] = useState(null);
setUser("ahmet berkay");
setUser("gökhan yaka");

/**
 * Ödevler:
 * 1- Bir fonksiyon yazın, ilk parametresi number, ikinci parametresi number, üçüncü parametresi fonksiyon olsun
 *    ve bu fonksiyondan bir string dönsün.
 *    Üçüncü parametredeki fonksiyona ilk iki parametreyi gönderip dönen stringi ekrana yazın.
 */
