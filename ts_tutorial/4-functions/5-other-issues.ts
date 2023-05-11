/**
 * Rest Parameters: Parametre sayısında bir sınır olmayan fonksiyonlarda kullanılır.
 * Buradaki üç nokta ifadesi birleştirme görevi üstlenmektedir.
 */

type ExampleConsoleLogFuncType = (...params: any[]) => void;

// buradaki üç nokta birleştirme işlemi yapar.
const example_logger: ExampleConsoleLogFuncType = (...params: any[]): void => {
  // buradaki üç nokta parçalama (ayırma) işlemi yapar.
  console.log(...params);
};

example_logger(1, 2, 3, 4, 5, "test", "foo", { id: 1 });
